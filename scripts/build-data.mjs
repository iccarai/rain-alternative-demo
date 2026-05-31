// Pulls real Rain Alternative products from the public storefront feed and
// curates a self-contained snapshot for the demo (no live dependency at runtime).
import { writeFileSync } from "node:fs";

const BASE = "https://rainalternative.ca/products.json";
const PAGES = 16; // scan deep enough to find in-stock items
const TARGET = 48;
const SOLD_OUT_QUOTA = 6; // keep a few sold-out to show the stock badge

async function fetchPage(page) {
  const res = await fetch(`${BASE}?limit=250&page=${page}`);
  if (!res.ok) throw new Error(`page ${page}: ${res.status}`);
  const { products } = await res.json();
  return products;
}

const seen = new Set();
let all = [];
for (let p = 1; p <= PAGES; p++) {
  const batch = await fetchPage(p);
  if (!batch.length) break;
  for (const prod of batch) {
    if (!seen.has(prod.id)) {
      seen.add(prod.id);
      all.push(prod);
    }
  }
  console.log(`page ${p}: ${batch.length} (total ${all.length})`);
}

// Keep only products that look good in a storefront: has at least one image,
// a real price, and a non-empty title.
const usable = all.filter(
  (p) =>
    p.images?.length > 0 &&
    p.title &&
    p.variants?.[0]?.price &&
    Number(p.variants[0].price) > 0
);

const isAvail = (p) => p.variants.some((v) => v.available);
const available = usable.filter(isAvail);
const soldOut = usable.filter((p) => !isAvail(p));
console.log(`usable: ${usable.length} (available ${available.length}, sold ${soldOut.length})`);

// Diversify across product types so the grid does not look like one category.
function bucketsByType(list) {
  const m = new Map();
  for (const p of list) {
    const t = p.product_type || "Other";
    if (!m.has(t)) m.set(t, []);
    m.get(t).push(p);
  }
  return [...m.values()];
}

// Round-robin pick across types to keep the grid varied.
function roundRobin(buckets, n) {
  const out = [];
  let i = 0;
  while (out.length < n && buckets.some((b) => b.length)) {
    const b = buckets[i % buckets.length];
    if (b.length) out.push(b.shift());
    i++;
  }
  return out;
}

// Mostly in-stock, with a small quota of sold-out items for realism.
const wantAvail = TARGET - SOLD_OUT_QUOTA;
const availPick = roundRobin(bucketsByType(available), wantAvail);
const soldPick = roundRobin(bucketsByType(soldOut), SOLD_OUT_QUOTA);

// Interleave the sold-out items through the grid so the stock badge is visible
// early, not buried at the end.
const picked = [...availPick];
const step = Math.max(1, Math.floor(picked.length / (soldPick.length + 1)));
soldPick.forEach((p, idx) => picked.splice(step * (idx + 1) + idx, 0, p));

const slim = picked.map((p) => {
  const v = p.variants[0];
  const available = p.variants.some((x) => x.available);
  return {
    id: p.id,
    title: p.title,
    handle: p.handle,
    vendor: p.vendor || "Rain Alternative",
    type: p.product_type || "Apparel",
    price: Number(v.price),
    compareAt: v.compare_at_price ? Number(v.compare_at_price) : null,
    available,
    image: p.images[0].src,
    images: p.images.slice(0, 4).map((im) => im.src),
    options: p.options?.map((o) => ({ name: o.name, values: o.values })) || [],
  };
});

writeFileSync(
  new URL("../data/products.json", import.meta.url),
  JSON.stringify(slim, null, 2)
);
console.log(`\nWrote ${slim.length} curated products.`);
console.log("Types:", [...new Set(slim.map((s) => s.type))].join(", "));

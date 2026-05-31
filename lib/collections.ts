import { products, type Product } from "./products";

export type CollectionDef = {
  handle: string;
  title: string;
  blurb: string;
  match: (p: Product) => boolean;
};

const lc = (p: Product) => (p.type || "").toLowerCase();

export const COLLECTIONS: CollectionDef[] = [
  {
    handle: "all",
    title: "Shop All",
    blurb: "Every piece in the store right now, from fresh drops to one-of-a-kind finds.",
    match: () => true,
  },
  {
    handle: "women",
    title: "Women's",
    blurb: "Dresses, tops, bottoms, outerwear and more.",
    match: (p) =>
      lc(p).includes("women") ||
      /dress|skirt|sweater|coat|jacket|nylon|tight|legging|swim|romper|jumpsuit/.test(
        lc(p)
      ),
  },
  {
    handle: "men",
    title: "Men's",
    blurb: "Tops, tees, and everyday essentials.",
    match: (p) => lc(p).includes("men") && !lc(p).includes("women"),
  },
  {
    handle: "accessories",
    title: "Accessories",
    blurb: "Jewelry, bags, hats, and the finishing touches.",
    match: (p) =>
      /accessor|jewel|purse|wallet|backpack|snapback|scarf|scarves|toque|glove|sock|hair|hat|belt|\bbag\b/.test(
        lc(p)
      ),
  },
  {
    handle: "consignment",
    title: "Local Consignment",
    blurb: "One-of-a-kind pieces from Edmonton makers and artists.",
    match: (p) => lc(p).includes("consignment"),
  },
];

export function getCollection(handle: string): CollectionDef | undefined {
  return COLLECTIONS.find((c) => c.handle === handle);
}

export function collectionProducts(handle: string): Product[] {
  const c = getCollection(handle);
  if (!c) return [];
  return products.filter(c.match);
}

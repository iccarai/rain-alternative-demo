import { chromium } from "@playwright/test";
import { mkdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "..", "screenshots");
const BASE = process.env.SHOT_BASE || "https://rain-alternative-demo.vercel.app";
const products = JSON.parse(readFileSync(join(here, "..", "data", "products.json")));
const handle = products.find((p) => p.available)?.handle || products[0].handle;

mkdirSync(outDir, { recursive: true });

const shots = [
  { name: "home-desktop", url: "/", w: 1366, h: 900, full: false },
  { name: "home-desktop-full", url: "/", w: 1366, h: 900, full: true },
  { name: "home-mobile", url: "/", w: 390, h: 844, full: false },
  { name: "product-desktop", url: `/products/${handle}`, w: 1366, h: 900, full: true },
  { name: "rewards-desktop", url: "/rewards", w: 1366, h: 900, full: true },
];

const browser = await chromium.launch();
for (const s of shots) {
  const ctx = await browser.newContext({
    viewport: { width: s.w, height: s.h },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();
  await page.goto(BASE + s.url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1800); // let fonts + aurora settle
  await page.screenshot({ path: join(outDir, `${s.name}.png`), fullPage: s.full });
  console.log("captured", s.name);
  await ctx.close();
}
await browser.close();
console.log("done. product handle:", handle);

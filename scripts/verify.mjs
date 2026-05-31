import { chromium } from "@playwright/test";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import { mkdirSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "..", "screenshots");
mkdirSync(out, { recursive: true });
const BASE = process.env.SHOT_BASE || "https://rain-alternative-demo.vercel.app";

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1366, height: 900 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();

// 1) Collection page
await page.goto(`${BASE}/collections/women`, { waitUntil: "networkidle" });
await page.waitForTimeout(1200);
const womenCount = await page.locator(".card-interactive").count();
await page.screenshot({ path: join(out, "v-collection-women.png") });
console.log("collection women cards:", womenCount);

// 2) Add to cart from a product page, capture drawer
await page.goto(`${BASE}/collections/all`, { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.locator(".card-interactive").first().click();
await page.waitForLoadState("networkidle");
await page.waitForTimeout(800);
const addBtn = page.getByRole("button", { name: /add to cart/i });
await addBtn.click();
await page.waitForTimeout(1000); // drawer slides in
const cartHeading = await page.getByRole("dialog", { name: /cart/i }).isVisible();
await page.screenshot({ path: join(out, "v-cart-open.png") });
console.log("cart drawer visible after add:", cartHeading);

// header badge count
const badge = await page.locator("header").getByText(/^\d+$/).first().textContent().catch(() => null);
console.log("header cart badge:", badge);

// 3) Search
await page.goto(`${BASE}/search`, { waitUntil: "networkidle" });
await page.waitForTimeout(600);
await page.locator('input[type="email"], input').first().fill("dress");
await page.waitForTimeout(900);
const results = await page.locator(".card-interactive").count();
await page.screenshot({ path: join(out, "v-search.png") });
console.log("search 'dress' results:", results);

// 4) Mobile menu
const m = await ctx.newPage();
await m.setViewportSize({ width: 390, height: 844 });
await m.goto(BASE, { waitUntil: "networkidle" });
await m.waitForTimeout(800);
await m.getByRole("button", { name: /open menu/i }).click();
await m.waitForTimeout(700);
await m.screenshot({ path: join(out, "v-mobile-menu.png") });
console.log("mobile menu captured");

await browser.close();
console.log("done");

import data from "@/data/products.json";

export type Product = {
  id: number;
  title: string;
  handle: string;
  vendor: string;
  type: string;
  price: number;
  compareAt: number | null;
  available: boolean;
  image: string;
  images: string[];
  options: { name: string; values: string[] }[];
};

export const products = data as Product[];

export function getProduct(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function money(n: number): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(n);
}

// Points a member earns on a purchase (demo rule: 1 point per $1, rounded).
export function pointsFor(price: number): number {
  return Math.round(price);
}

"use client";

import { useCart } from "./CartProvider";
import type { Product } from "@/lib/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const { add } = useCart();
  if (!product.available) {
    return (
      <button className="btn btn-primary flex-1" disabled>
        Sold out
      </button>
    );
  }
  return (
    <button
      className="btn btn-primary flex-1"
      onClick={() =>
        add({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          handle: product.handle,
        })
      }
    >
      Add to cart
    </button>
  );
}

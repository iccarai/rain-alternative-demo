"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { type Product, money, pointsFor } from "@/lib/products";
import { Sparkles } from "./icons";
import { useCart } from "./cart/CartProvider";

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 26 },
  },
};

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const { add } = useCart();
  const reduce = useReducedMotion();
  const href = `/products/${product.handle}`;

  return (
    <motion.div
      variants={item}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 26 }}
      role="link"
      tabIndex={0}
      onClick={() => router.push(href)}
      onKeyDown={(e) => {
        if (e.key === "Enter") router.push(href);
      }}
      className="card card-interactive overflow-hidden group flex flex-col cursor-pointer"
      style={{ willChange: "transform" }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-surface-3)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06] ${
            product.available ? "" : "opacity-55 saturate-50"
          }`}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--color-surface)] to-transparent opacity-80" />

        <div className="absolute top-2.5 left-2.5">
          {product.available ? (
            <span className="badge badge-stock">In stock</span>
          ) : (
            <span className="badge badge-sold">Sold out</span>
          )}
        </div>

        {product.available && (
          <div className="absolute inset-x-2.5 bottom-2.5 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={(e) => {
                e.stopPropagation();
                add({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                  handle: product.handle,
                });
              }}
              className="btn btn-primary w-full !py-2.5 text-[11px]"
            >
              Quick add
            </motion.button>
          </div>
        )}
      </div>

      <div className="p-3.5 flex flex-col gap-1 flex-1">
        <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
          {product.vendor}
        </span>
        <span className="text-sm font-semibold leading-snug line-clamp-2 min-h-[2.5rem] group-hover:text-white transition-colors">
          {product.title}
        </span>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="price font-display text-lg">{money(product.price)}</span>
          <span className="flex items-center gap-1 text-[10px] text-[var(--color-acid)]">
            <Sparkles className="h-3 w-3" />+{pointsFor(product.price)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

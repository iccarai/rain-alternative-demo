"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type Product } from "@/lib/products";
import ProductCard from "./ProductCard";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export default function ProductGrid({ items }: { items: Product[] }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={container}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5"
    >
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </motion.div>
  );
}

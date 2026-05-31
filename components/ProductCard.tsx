import Link from "next/link";
import { type Product, money, pointsFor } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.handle}`}
      className="card overflow-hidden group flex flex-col"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-surface-2)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          {product.available ? (
            <span className="badge badge-stock">In stock</span>
          ) : (
            <span className="badge badge-sold">Sold out</span>
          )}
        </div>
      </div>
      <div className="p-3 flex flex-col gap-1 flex-1">
        <span className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
          {product.vendor}
        </span>
        <span className="text-sm font-semibold leading-snug line-clamp-2 min-h-[2.5rem]">
          {product.title}
        </span>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-lg">{money(product.price)}</span>
          <span className="text-[10px] text-[var(--color-acid)]">
            +{pointsFor(product.price)} pts
          </span>
        </div>
      </div>
    </Link>
  );
}

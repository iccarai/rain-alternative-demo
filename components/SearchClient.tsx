"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import { Search } from "./icons";
import ProductGrid from "./ProductGrid";

export default function SearchClient() {
  const sp = useSearchParams();
  const [q, setQ] = useState(sp.get("q") || "");
  const term = q.trim().toLowerCase();
  const results = term
    ? products.filter((p) =>
        `${p.title} ${p.vendor} ${p.type}`.toLowerCase().includes(term)
      )
    : [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <span className="eyebrow">✦ Search</span>
      <h1 className="text-4xl sm:text-5xl mt-3 neon-text">Find your thing</h1>

      <div className="relative mt-6 max-w-xl">
        <Search className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]" />
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search dresses, band tees, boots, brands..."
          className="w-full bg-[var(--color-surface-2)] border hairline rounded-lg pl-12 pr-4 py-3.5 text-sm outline-none focus:border-[var(--color-magenta)]"
        />
      </div>

      <div className="mt-9">
        {!term ? (
          <p className="text-[var(--color-muted)]">
            Start typing to search the catalog.
          </p>
        ) : results.length > 0 ? (
          <>
            <p className="text-sm text-[var(--color-muted)] mb-6">
              {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;
              {q.trim()}&rdquo;
            </p>
            <ProductGrid items={results} />
          </>
        ) : (
          <p className="text-[var(--color-muted)]">
            No matches for &ldquo;{q.trim()}&rdquo;. Try a broader term.
          </p>
        )}
      </div>
    </div>
  );
}

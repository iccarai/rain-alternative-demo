"use client";

import Link from "next/link";
import { Search, Bag } from "./icons";
import { useCart } from "./cart/CartProvider";

export default function HeaderActions() {
  const { count, open } = useCart();
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <Link
        href="/search"
        aria-label="Search"
        className="grid place-items-center h-11 w-11 rounded-lg text-[var(--color-bone)]/80 hover:text-white hover:bg-white/5 transition-colors"
      >
        <Search />
      </Link>
      <Link
        href="/rewards"
        className="hidden sm:inline-flex"
        aria-label="Member rewards"
      >
        <span className="badge badge-stock">Member</span>
      </Link>
      <button
        onClick={open}
        aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
        className="relative grid place-items-center h-11 w-11 rounded-lg text-[var(--color-bone)]/80 hover:text-white hover:bg-white/5 transition-colors"
      >
        <Bag />
        {count > 0 && (
          <span className="absolute top-1.5 right-1 text-[10px] font-bold bg-[var(--color-magenta)] text-white rounded-full h-4 min-w-4 px-1 grid place-items-center">
            {count}
          </span>
        )}
      </button>
    </div>
  );
}

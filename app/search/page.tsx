import { Suspense } from "react";
import type { Metadata } from "next";
import SearchClient from "@/components/SearchClient";

export const metadata: Metadata = {
  title: "Search — Rain Alternative",
};

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-6xl px-4 py-12 text-[var(--color-muted)]">
          Loading search…
        </div>
      }
    >
      <SearchClient />
    </Suspense>
  );
}

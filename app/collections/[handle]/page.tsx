import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  COLLECTIONS,
  getCollection,
  collectionProducts,
} from "@/lib/collections";
import ProductGrid from "@/components/ProductGrid";

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ handle: c.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const c = getCollection(handle);
  return {
    title: c ? `${c.title} — Rain Alternative` : "Shop — Rain Alternative",
    description: c?.blurb,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const c = getCollection(handle);
  if (!c) notFound();
  const items = collectionProducts(handle);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <span className="eyebrow">✦ {items.length} pieces</span>
      <h1 className="text-4xl sm:text-6xl mt-3 neon-text">{c.title}</h1>
      <p className="text-[var(--color-muted)] mt-3 max-w-xl">{c.blurb}</p>
      <div className="mt-9">
        {items.length > 0 ? (
          <ProductGrid items={items} />
        ) : (
          <p className="text-[var(--color-muted)]">
            Nothing here right now. Check back soon.
          </p>
        )}
      </div>
    </div>
  );
}

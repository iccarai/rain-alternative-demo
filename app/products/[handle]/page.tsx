import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct, money, pointsFor } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";
import { Heart, Truck, Sparkles } from "@/components/icons";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();

  const sizeOption = product.options.find(
    (o) => o.name.toLowerCase() !== "title"
  );
  const related = products
    .filter((p) => p.type === product.type && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-bone)]">
        &larr; Back to shop
      </Link>

      <div className="grid lg:grid-cols-2 gap-10 mt-6">
        {/* Gallery */}
        <div>
          <div className="card overflow-hidden aspect-[4/5] bg-[var(--color-surface-2)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3 mt-3">
              {product.images.map((src, i) => (
                <div
                  key={i}
                  className="card overflow-hidden aspect-square bg-[var(--color-surface-2)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
            {product.vendor}
          </span>
          <h1 className="text-4xl mt-2">{product.title}</h1>

          <div className="flex items-center gap-4 mt-4">
            <span className="price font-display text-3xl">{money(product.price)}</span>
            {product.compareAt && (
              <span className="price text-[var(--color-muted)] line-through">
                {money(product.compareAt)}
              </span>
            )}
            {product.available ? (
              <span className="badge badge-stock">In stock</span>
            ) : (
              <span className="badge badge-sold">Sold out</span>
            )}
          </div>

          <p className="flex items-center gap-1.5 text-[var(--color-acid)] text-sm mt-3">
            <Sparkles className="h-4 w-4" />
            Earn {pointsFor(product.price)} Rain Rewards points with this piece
          </p>

          {sizeOption && (
            <div className="mt-6">
              <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                {sizeOption.name}
              </div>
              <div className="flex flex-wrap gap-2">
                {sizeOption.values.map((v) => (
                  <span key={v} className="chip chip-selectable">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-8">
            <button className="btn btn-primary flex-1" disabled={!product.available}>
              {product.available ? "Add to cart" : "Sold out"}
            </button>
            <button className="btn btn-ghost" aria-label="Save to wishlist">
              <Heart className="h-4 w-4" /> Save
            </button>
          </div>

          <div className="card p-4 mt-6 text-sm text-[var(--color-muted)]">
            <p>
              One-of-a-kind and consignment pieces are tracked individually. When
              this item sells, in the shop or online, it comes off the site
              immediately, so what you see is what is genuinely available.
            </p>
          </div>

          <div className="mt-6 text-sm text-[var(--color-muted)] space-y-2">
            <p className="flex items-center gap-2">
              <Truck className="h-4 w-4" /> Free local pickup in Edmonton.
            </p>
            <p>Category: {product.type}</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-3xl mb-6">You may also like</h2>
          <ProductGrid items={related} />
        </section>
      )}
    </div>
  );
}

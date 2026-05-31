import Link from "next/link";
import { products } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  const featured = products.slice(0, 12);
  const rest = products.slice(12, 32);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b hairline">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <span className="chip">Edmonton, AB &middot; Since the underground</span>
          <h1 className="mt-5 text-5xl sm:text-7xl max-w-3xl glow-text">
            Wear the dark.
            <br />
            Have fun doing it.
          </h1>
          <p className="mt-5 text-[var(--color-muted)] max-w-xl text-base sm:text-lg">
            Alternative fashion, accessories, and one-of-a-kind local consignment.
            Now with member rewards, birthday perks, and stock you can actually trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#shop" className="btn btn-primary">
              Shop new arrivals
            </Link>
            <Link href="/rewards" className="btn btn-ghost">
              Join the coven &middot; rewards
            </Link>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-b hairline bg-[var(--color-surface)]/40">
        <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 sm:grid-cols-3 text-sm">
          {[
            {
              t: "Real-time stock",
              d: "If it sells in the shop, it disappears online instantly. No more 'sold out at checkout'.",
            },
            {
              t: "Earn on every order",
              d: "Points online and in-store, one balance, redeemable for discounts.",
            },
            {
              t: "Birthday perks",
              d: "A little something dark and sweet in your inbox on your day.",
            },
          ].map((f) => (
            <div key={f.t} className="flex gap-3">
              <span className="text-[var(--color-magenta)] text-xl leading-none">✦</span>
              <div>
                <div className="font-display tracking-wide">{f.t}</div>
                <p className="text-[var(--color-muted)] mt-1">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured grid */}
      <section id="shop" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl">New &amp; Noteworthy</h2>
          <span className="text-sm text-[var(--color-muted)]">
            Live products from the current catalog
          </span>
        </div>
        <ProductGrid items={featured} />
      </section>

      {/* Rewards band */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="card p-8 sm:p-12 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(30rem 20rem at 90% 20%, rgba(155,92,255,0.5), transparent 60%)",
            }}
          />
          <div className="relative max-w-xl">
            <span className="chip">Members</span>
            <h2 className="text-4xl mt-4">The Rain Rewards Club</h2>
            <p className="text-[var(--color-muted)] mt-3">
              Sign in, watch your points stack, climb the tiers, and unlock
              member-only drops. One account, online and in the shop.
            </p>
            <Link href="/rewards" className="btn btn-primary mt-6">
              See your member hub
            </Link>
          </div>
        </div>
      </section>

      {/* More products */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl mb-6">More in store</h2>
        <ProductGrid items={rest} />
      </section>
    </>
  );
}

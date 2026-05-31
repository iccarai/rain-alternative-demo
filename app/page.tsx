import Link from "next/link";
import { products } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";
import { Truck, Sparkles, Cake, ArrowRight } from "@/components/icons";

export default function Home() {
  const featured = products.slice(0, 12);
  const rest = products.slice(12, 32);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b hairline">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <span className="chip">Edmonton, AB</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rain-logo.png"
            alt="Rain Alternative"
            className="logo-invert h-24 sm:h-36 w-auto mt-6 glow-text"
            style={{ filter: "invert(1) brightness(1.6) drop-shadow(0 0 40px rgba(59,116,255,0.45))" }}
          />
          <p className="mt-6 text-[var(--color-muted)] max-w-xl text-base sm:text-lg">
            Alternative fashion, accessories, and one-of-a-kind local consignment.
            Now with member rewards, birthday perks, and stock you can actually
            trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#shop" className="btn btn-primary">
              Shop all
            </Link>
            <Link href="/rewards" className="btn btn-ghost">
              Join the rewards club
            </Link>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-b hairline bg-[var(--color-surface)]/40">
        <div className="mx-auto max-w-6xl px-4 py-9 grid gap-7 sm:grid-cols-3 text-sm">
          {[
            {
              Icon: Sparkles,
              t: "Real-time stock",
              d: "If it sells in the shop, it disappears online instantly. No more 'sold out at checkout'.",
            },
            {
              Icon: Truck,
              t: "Earn on every order",
              d: "Points online and in-store, one balance, redeemable for discounts.",
            },
            {
              Icon: Cake,
              t: "Birthday perks",
              d: "A little something dark and sweet in your inbox on your day.",
            },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="flex gap-3.5">
              <span className="grid place-items-center h-10 w-10 shrink-0 rounded-lg bg-[rgba(79,134,255,0.12)] border border-[var(--color-line-strong)] text-[var(--color-magenta)]">
                <Icon />
              </span>
              <div>
                <div className="font-display tracking-wide text-base">{t}</div>
                <p className="text-[var(--color-muted)] mt-1 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured grid — real store copy */}
      <section id="shop" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl sm:text-4xl">Shop these new drops!</h2>
          <Link
            href="#more"
            className="group inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-bone)] transition-colors"
          >
            Shop all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <ProductGrid items={featured} />
      </section>

      {/* Brand feature — real store copy */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="card p-8 sm:p-12 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(30rem 20rem at 10% 20%, rgba(106,75,255,0.5), transparent 60%)",
            }}
          />
          <div className="relative max-w-xl">
            <span className="chip">Featured brand</span>
            <h2 className="text-4xl mt-4">
              Meet one of our favourite brands, Dark in Love!
            </h2>
            <p className="text-[var(--color-muted)] mt-3">
              Gothic silhouettes, batwing skirts, and statement pieces, in stock
              and ready to ship from Edmonton.
            </p>
            <Link href="#shop" className="btn btn-ghost mt-6">
              View all
            </Link>
          </div>
        </div>
      </section>

      {/* Rewards band */}
      <section className="mx-auto max-w-6xl px-4 mt-6">
        <div className="card p-8 sm:p-12 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(30rem 20rem at 90% 20%, rgba(59,116,255,0.5), transparent 60%)",
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

      {/* Festival season — real store copy */}
      <section id="more" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between mb-2">
          <h2 className="text-3xl sm:text-4xl">Festival Season</h2>
          <Link
            href="#shop"
            className="group inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-bone)] transition-colors"
          >
            View all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <p className="text-[var(--color-muted)] mb-6">
          Get ready for festival season with our collection of festival
          accessories.
        </p>
        <ProductGrid items={rest} />
      </section>

      {/* Newsletter — real store copy */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="card p-8 sm:p-12 text-center">
          <h2 className="text-3xl">Subscribe to our emails</h2>
          <p className="text-[var(--color-muted)] mt-3 max-w-md mx-auto">
            Be the first to know about new drops, exclusive member offers, and
            in-store events.
          </p>
          <div className="mt-6 flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[var(--color-surface-2)] border hairline rounded-lg px-4 py-3 text-sm outline-none focus:border-[var(--color-magenta)]"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { Truck, Sparkles, Gift } from "@/components/icons";

export const metadata: Metadata = {
  title: "About & Visit Us — Rain Alternative",
  description:
    "Rain Alternative is Edmonton's home for alternative fashion, accessories, and local consignment. Visit us in store or shop online.",
};

const HOURS = [
  { day: "Mon – Thu", time: "11:00 – 7:00" },
  { day: "Fri – Sat", time: "11:00 – 8:00" },
  { day: "Sunday", time: "12:00 – 5:00" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b hairline scanlines">
        <div className="aurora" style={{ opacity: 0.55 }} />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center">
          <span className="eyebrow">✦ Our story</span>
          <h1 className="text-5xl sm:text-7xl mt-4 neon-text">
            Edmonton&apos;s dark
            <br />
            corner of fashion
          </h1>
          <p className="mt-6 text-[var(--color-bone)]/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Rain Alternative is where alternative, goth, and just-a-little-weird
            style lives in {SITE.city}. We stock the brands you can&apos;t find at
            the mall, and we give local makers a home through our consignment
            program, hundreds of one-of-a-kind pieces you won&apos;t see anywhere
            else.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-8 sm:grid-cols-3">
        {[
          {
            Icon: Sparkles,
            t: "Curated, not mass",
            d: "Hand-picked alternative fashion and accessories, plus rotating consignment finds.",
          },
          {
            Icon: Gift,
            t: "Local first",
            d: "We champion Edmonton artists and makers through fair consignment.",
          },
          {
            Icon: Truck,
            t: "Shop your way",
            d: "Buy online with real-time stock, or come dig through the racks in person.",
          },
        ].map(({ Icon, t, d }) => (
          <div key={t} className="card neon-frame p-6">
            <span className="grid place-items-center h-11 w-11 rounded-lg bg-[rgba(79,134,255,0.12)] border border-[var(--color-line-strong)] text-[var(--color-magenta)]">
              <Icon />
            </span>
            <h2 className="text-xl mt-4">{t}</h2>
            <p className="text-[var(--color-muted)] text-sm mt-2 leading-relaxed">
              {d}
            </p>
          </div>
        ))}
      </section>

      {/* Visit us */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="card neon-frame overflow-hidden grid md:grid-cols-2">
          <div className="p-8 sm:p-10">
            <span className="eyebrow">✦ Visit us</span>
            <h2 className="text-3xl sm:text-4xl mt-3">Come say hi</h2>
            <p className="text-[var(--color-muted)] mt-3">
              Find us in {SITE.city}. Free local pickup on every online order.
            </p>

            <div className="mt-6">
              <div className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-2">
                Hours
              </div>
              <ul className="space-y-2">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between text-sm border-b hairline pb-2 last:border-0 max-w-xs"
                  >
                    <span>{h.day}</span>
                    <span className="price text-[var(--color-muted)]">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/collections/all" className="btn btn-primary">
                Shop the store
              </Link>
              <a href={SITE.socials.instagram} className="btn btn-ghost">
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative min-h-[260px] bg-[var(--color-surface-2)] scanlines grid place-items-center">
            <div className="aurora" style={{ opacity: 0.4 }} />
            <div className="relative text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/rain-logo.png"
                alt="Rain Alternative"
                className="logo-invert h-12 w-auto mx-auto"
              />
              <p className="text-xs text-[var(--color-muted)] mt-3 tracking-widest uppercase">
                {SITE.city}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { Search, Bag } from "./icons";

const NAV = [
  { label: "Women", href: "/" },
  { label: "Men", href: "/" },
  { label: "Accessories", href: "/" },
  { label: "Consignment", href: "/" },
  { label: "Rewards", href: "/rewards" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[rgba(8,8,12,0.78)] border-b hairline">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/rain-logo.png"
              alt="Rain Alternative"
              className="logo-invert h-7 sm:h-8 w-auto"
            />
            <span className="font-display text-[10px] tracking-[0.3em] text-[var(--color-muted)] hidden sm:inline">
              ALTERNATIVE
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold tracking-wide">
            {NAV.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                className="text-[var(--color-bone)]/85 hover:text-[var(--color-magenta)] transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2 text-sm">
            <button
              aria-label="Search"
              className="grid place-items-center h-11 w-11 rounded-lg text-[var(--color-bone)]/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Search />
            </button>
            <Link
              href="/rewards"
              className="hidden sm:inline-flex"
              aria-label="Member rewards"
            >
              <span className="badge badge-stock">Member</span>
            </Link>
            <button
              aria-label="Cart, 2 items"
              className="relative grid place-items-center h-11 w-11 rounded-lg text-[var(--color-bone)]/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Bag />
              <span className="absolute top-1.5 right-1 text-[10px] font-bold bg-[var(--color-magenta)] text-white rounded-full h-4 min-w-4 px-1 grid place-items-center">
                2
              </span>
            </button>
          </div>
        </div>

        <div className="md:hidden flex gap-4 overflow-x-auto no-scrollbar pb-3 text-sm font-semibold">
          {NAV.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="whitespace-nowrap text-[var(--color-bone)]/80"
            >
              {n.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

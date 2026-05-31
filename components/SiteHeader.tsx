import Link from "next/link";

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
          <Link href="/" className="flex items-baseline gap-2">
            <span className="wordmark text-2xl sm:text-3xl glow-text">Rain</span>
            <span className="font-display text-xs tracking-[0.3em] text-[var(--color-muted)] hidden sm:inline">
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

          <div className="flex items-center gap-4 text-sm">
            <span className="hidden sm:inline text-[var(--color-muted)]">Search</span>
            <Link href="/rewards" className="relative">
              <span className="badge badge-stock">Member</span>
            </Link>
            <span className="relative">
              Cart
              <span className="absolute -top-2 -right-3 text-[10px] bg-[var(--color-magenta)] text-white rounded-full px-1.5 py-0.5">
                2
              </span>
            </span>
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

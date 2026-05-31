import Link from "next/link";
import { NAV } from "@/lib/nav";
import HeaderActions from "./HeaderActions";
import MobileMenu from "./MobileMenu";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[rgba(5,6,12,0.8)] border-b hairline">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16 gap-2">
          <div className="flex items-center gap-1">
            <MobileMenu />
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
          </div>

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

          <HeaderActions />
        </div>
      </div>
    </header>
  );
}

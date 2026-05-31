import Link from "next/link";
import { SITE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t hairline mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rain-logo.png"
            alt="Rain Alternative"
            className="logo-invert h-9 w-auto"
          />
          <p className="text-[var(--color-muted)] text-sm mt-3 max-w-xs">
            Alternative fashion, accessories, and one-of-a-kind local consignment
            in {SITE.city}.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-display text-xs tracking-widest text-[var(--color-muted)] mb-3">
            Shop
          </div>
          <ul className="space-y-2 text-[var(--color-bone)]/80">
            <li>
              <Link href="/collections/women" className="hover:text-[var(--color-magenta)]">
                Women&apos;s
              </Link>
            </li>
            <li>
              <Link href="/collections/men" className="hover:text-[var(--color-magenta)]">
                Men&apos;s
              </Link>
            </li>
            <li>
              <Link href="/collections/accessories" className="hover:text-[var(--color-magenta)]">
                Accessories
              </Link>
            </li>
            <li>
              <Link href="/collections/consignment" className="hover:text-[var(--color-magenta)]">
                Local Consignment
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[var(--color-magenta)]">
                About &amp; Visit Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-display text-xs tracking-widest text-[var(--color-muted)] mb-3">
            Follow
          </div>
          <ul className="space-y-2 text-[var(--color-bone)]/80">
            <li>
              <a href={SITE.socials.instagram}>Instagram</a>
            </li>
            <li>
              <a href={SITE.socials.facebook}>Facebook</a>
            </li>
            <li>
              <a href={SITE.socials.tiktok}>TikTok</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t hairline">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-[var(--color-muted)] flex flex-col sm:flex-row gap-2 justify-between">
          <span>&copy; 2026, {SITE.store}</span>
          <span>
            Concept preview built by {SITE.builder} at{" "}
            <a
              href={SITE.agencyUrl}
              className="text-[var(--color-bone)] hover:text-[var(--color-magenta)]"
            >
              {SITE.agency}
            </a>{" "}
            &middot;{" "}
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="hover:text-[var(--color-bone)]"
            >
              {SITE.contactEmail}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

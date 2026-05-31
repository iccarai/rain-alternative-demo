import { SITE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t hairline mt-24">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <div className="wordmark text-2xl glow-text">Rain</div>
          <p className="text-[var(--color-muted)] text-sm mt-2 max-w-xs">
            Alternative fashion, accessories, and local consignment in {SITE.city}.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-display text-xs tracking-widest text-[var(--color-muted)] mb-3">
            Shop
          </div>
          <ul className="space-y-2 text-[var(--color-bone)]/80">
            <li>New Arrivals</li>
            <li>Women &middot; Men</li>
            <li>Accessories &middot; Jewelry</li>
            <li>Local Consignment</li>
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
          <span>Concept preview built by {SITE.builtBy}. Not the live store.</span>
          <span>{SITE.contactEmail}</span>
        </div>
      </div>
    </footer>
  );
}

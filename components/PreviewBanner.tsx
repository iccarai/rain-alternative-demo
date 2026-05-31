import { SITE } from "@/lib/site";

export default function PreviewBanner() {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, var(--color-magenta), var(--color-violet))",
      }}
      className="text-white text-center text-[11px] sm:text-xs font-semibold tracking-wide px-3 py-1.5"
    >
      CONCEPT PREVIEW for {SITE.store} &middot; built by {SITE.builtBy} &middot; not the live store
    </div>
  );
}

import { Truck, Sparkles, Gift } from "./icons";

const ITEMS = [
  { icon: Truck, text: "Free local pickup in Edmonton" },
  { icon: Sparkles, text: "New drops weekly" },
  { icon: Gift, text: "Earn points on every order, online & in-store" },
];

export default function AnnouncementBar() {
  return (
    <div className="border-b hairline bg-[var(--color-surface)]/60">
      <div className="mx-auto max-w-6xl px-4">
        <ul className="flex items-center justify-center gap-6 sm:gap-10 py-2 text-[11px] sm:text-xs text-[var(--color-muted)] overflow-x-auto no-scrollbar">
          {ITEMS.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2 whitespace-nowrap">
              <Icon className="h-3.5 w-3.5 text-[var(--color-magenta)]" />
              <span className="tracking-wide uppercase">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

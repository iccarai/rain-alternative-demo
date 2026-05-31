// Lightweight Lucide-style stroke icons (consistent 1.75 stroke, currentColor).
// Avoids emoji-as-icon anti-pattern; scales cleanly and themes via color.
type IconProps = { className?: string; strokeWidth?: number };

const base = (className = "h-5 w-5", strokeWidth = 1.75) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
});

export function Sparkles({ className, strokeWidth }: IconProps) {
  return (
    <svg {...base(className, strokeWidth)} aria-hidden="true">
      <path d="M12 3l1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4L12 3z" />
      <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
    </svg>
  );
}

export function Gift({ className, strokeWidth }: IconProps) {
  return (
    <svg {...base(className, strokeWidth)} aria-hidden="true">
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7" />
      <path d="M12 8S10.5 3 8 3 5 6 8 8M12 8s1.5-5 4-5 3 3 0 5" />
    </svg>
  );
}

export function Heart({ className, strokeWidth }: IconProps) {
  return (
    <svg {...base(className, strokeWidth)} aria-hidden="true">
      <path d="M20.8 5.6a5.4 5.4 0 0 0-7.6 0L12 6.8l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6L12 22l8.8-8.8a5.4 5.4 0 0 0 0-7.6z" />
    </svg>
  );
}

export function Search({ className, strokeWidth }: IconProps) {
  return (
    <svg {...base(className, strokeWidth)} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function Bag({ className, strokeWidth }: IconProps) {
  return (
    <svg {...base(className, strokeWidth)} aria-hidden="true">
      <path d="M6 7h12l1 13H5L6 7z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  );
}

export function ArrowRight({ className, strokeWidth }: IconProps) {
  return (
    <svg {...base(className, strokeWidth)} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Truck({ className, strokeWidth }: IconProps) {
  return (
    <svg {...base(className, strokeWidth)} aria-hidden="true">
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function Menu({ className, strokeWidth }: IconProps) {
  return (
    <svg {...base(className, strokeWidth)} aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function Close({ className, strokeWidth }: IconProps) {
  return (
    <svg {...base(className, strokeWidth)} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Cake({ className, strokeWidth }: IconProps) {
  return (
    <svg {...base(className, strokeWidth)} aria-hidden="true">
      <path d="M4 21h16M5 21v-7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v7" />
      <path d="M4 16c1.5 1.2 2.5 1.2 4 0s2.5-1.2 4 0 2.5 1.2 4 0 2.5-1.2 4 0" />
      <path d="M12 8V5M12 5l1-1.5M12 5l-1-1.5" />
    </svg>
  );
}

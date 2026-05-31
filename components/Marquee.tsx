const ITEMS = [
  "Free local pickup in Edmonton",
  "New drops weekly",
  "Earn points on every order",
  "Member birthday perks",
  "Local consignment, one-of-a-kind",
];

export default function Marquee() {
  // Render the list twice so the -50% translate loops seamlessly.
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((text, i) => (
          <span key={i} className="marquee__item">
            <span className="marquee__star">✦</span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

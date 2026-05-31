// Neon rainfall layer for the hero. Server component: streaks are generated
// deterministically (no Math.random) so server and client markup match.
const DROP_COUNT = 60;

const DROPS = Array.from({ length: DROP_COUNT }, (_, i) => {
  const left = (i * 37 + (i % 5) * 7) % 100; // spread across width
  const duration = 0.8 + ((i * 7) % 10) / 10; // 0.8s – 1.7s
  const delay = -(((i * 13) % 20) / 10); // negative => start mid-fall
  const height = 50 + ((i * 17) % 90); // 50px – 139px
  const opacity = 0.12 + ((i * 11) % 50) / 100; // 0.12 – 0.61
  const color = i % 3 === 0 ? "#2af6ff" : "#4f86ff"; // cyan accents in blue
  return { left, duration, delay, height, opacity, color };
});

export default function RainOverlay() {
  return (
    <div className="rainfall" aria-hidden="true">
      {DROPS.map((d, i) => (
        <span
          key={i}
          className="rain-drop"
          style={{
            left: `${d.left}%`,
            height: `${d.height}px`,
            opacity: d.opacity,
            color: d.color,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

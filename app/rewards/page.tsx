import Link from "next/link";

const REWARDS = [
  { cost: 250, label: "$5 off your next order" },
  { cost: 500, label: "$12 off + early drop access" },
  { cost: 1000, label: "$30 off your haul" },
  { cost: 1500, label: "Member-only mystery piece" },
];

const EARN = [
  { pts: "1 pt", how: "per $1 spent, online or in-store" },
  { pts: "100 pts", how: "for creating your account" },
  { pts: "150 pts", how: "on your birthday, every year" },
  { pts: "75 pts", how: "for a follow on Instagram or TikTok" },
  { pts: "200 pts", how: "when a friend you referred orders" },
];

export default function RewardsPage() {
  const points = 1250;
  const tierFloor = 1000;
  const tierCeil = 2000;
  const pct = Math.round(((points - tierFloor) / (tierCeil - tierFloor)) * 100);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <span className="chip">Member hub &middot; preview</span>
      <h1 className="text-5xl mt-4 glow-text">Rain Rewards Club</h1>
      <p className="text-[var(--color-muted)] mt-3 max-w-xl">
        This is the member portal your customers log into. One account ties their
        online and in-store purchases together. Below is a sample logged-in view.
      </p>

      {/* Member dashboard mock */}
      <div className="card p-6 sm:p-8 mt-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(24rem 16rem at 95% 0%, rgba(255,46,136,0.6), transparent 60%)",
          }}
        />
        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="text-sm text-[var(--color-muted)]">Welcome back,</div>
            <div className="text-2xl font-display">Raven M.</div>
            <div className="mt-1 text-xs badge badge-stock">Tier: Nightshade</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-[var(--color-muted)]">Points balance</div>
            <div className="font-display text-5xl text-[var(--color-acid)]">
              {points.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="relative mt-8">
          <div className="flex justify-between text-xs text-[var(--color-muted)] mb-2">
            <span>Nightshade</span>
            <span>{tierCeil - points} pts to Midnight tier</span>
          </div>
          <div className="h-2 rounded-full bg-[var(--color-surface-2)] overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${pct}%`,
                background: "linear-gradient(90deg, var(--color-magenta), var(--color-violet))",
              }}
            />
          </div>
        </div>
      </div>

      {/* Birthday + redeem */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="card p-6">
          <div className="text-2xl">🎂</div>
          <h2 className="text-2xl mt-2">Birthday perk</h2>
          <p className="text-[var(--color-muted)] mt-2 text-sm">
            Add your birthday and we automatically drop 150 points and a member
            discount into your account on your day. No reminders to set, it just
            happens.
          </p>
          <div className="flex gap-2 mt-4">
            <span className="chip">Date of birth</span>
            <span className="chip">▾ Month</span>
            <span className="chip">▾ Day</span>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-2xl">Redeem points</h2>
          <ul className="mt-4 space-y-3">
            {REWARDS.map((r) => (
              <li
                key={r.cost}
                className="flex items-center justify-between border-b hairline pb-3 last:border-0"
              >
                <span className="text-sm">{r.label}</span>
                <span
                  className={`badge ${
                    points >= r.cost ? "badge-stock" : "badge-sold"
                  }`}
                >
                  {r.cost} pts
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Ways to earn */}
      <div className="card p-6 mt-6">
        <h2 className="text-2xl">Ways to earn</h2>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-4">
          {EARN.map((e) => (
            <div key={e.how} className="flex items-baseline gap-3 text-sm">
              <span className="font-display text-[var(--color-acid)] min-w-[4.5rem]">
                {e.pts}
              </span>
              <span className="text-[var(--color-muted)]">{e.how}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <Link href="/" className="btn btn-ghost">
          &larr; Back to the shop
        </Link>
      </div>
    </div>
  );
}

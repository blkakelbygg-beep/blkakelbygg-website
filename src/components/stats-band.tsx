import { Reveal } from "./reveal";
import { StatCounter } from "./stat-counter";
import { stats } from "@/lib/site-config";

export function StatsBand({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  return (
    <div
      className={`grid grid-cols-2 gap-6 rounded-3xl border p-8 sm:grid-cols-4 sm:p-10 ${
        dark
          ? "border-white/10 bg-ink-900"
          : "border-border bg-surface"
      }`}
    >
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.08} className="text-center sm:text-left">
          <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${dark ? "text-white" : "text-fg"}`}>
            <StatCounter value={stat.value} suffix={stat.suffix} />
          </div>
          <div className={`mt-1.5 text-xs sm:text-sm font-medium ${dark ? "text-white/60" : "text-muted"}`}>
            {stat.label}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

import { Reveal } from "./reveal";
import { getIcon } from "@/lib/icons";

type Feature = { title: string; description: string; icon: string };

export function FeatureGrid({ items, columns = 4 }: { items: Feature[]; columns?: 3 | 4 | 5 }) {
  const colClass =
    columns === 5
      ? "sm:grid-cols-2 lg:grid-cols-5"
      : columns === 3
        ? "sm:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid grid-cols-1 gap-5 ${colClass}`}>
      {items.map((item, i) => {
        const Icon = getIcon(item.icon);
        return (
          <Reveal key={item.title} delay={i * 0.05} y={16}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lg shadow-brand-500/20">
                <Icon className="h-[22px] w-[22px]" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-fg">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{item.description}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

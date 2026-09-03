import { Reveal } from "./reveal";
import { getIcon } from "@/lib/icons";
import { CheckCircle2 } from "lucide-react";

type Item = { title: string; description: string; icon?: string };

export function WhyUsGrid({ items, columns = 3 }: { items: Item[]; columns?: 2 | 3 }) {
  return (
    <div
      className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
      }`}
    >
      {items.map((item, i) => {
        const Icon = item.icon ? getIcon(item.icon) : CheckCircle2;
        return (
          <Reveal key={item.title} delay={i * 0.06} y={18}>
            <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/60 card-shadow">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-ink-950 dark:text-brand-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-fg">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

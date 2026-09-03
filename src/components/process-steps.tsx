import { Reveal } from "./reveal";
import type { ProcessStep } from "@/lib/site-config";

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="relative">
      <div
        aria-hidden
        className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-500 via-border to-transparent sm:left-[31px]"
      />
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 0.06} y={16} as="li" className="relative flex gap-5 pb-10 last:pb-0 sm:gap-6">
          <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface border border-border text-lg font-extrabold text-brand-600 dark:text-brand-400 card-shadow">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="pt-2.5">
            <h3 className="text-lg font-bold text-fg">{step.title}</h3>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">{step.description}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

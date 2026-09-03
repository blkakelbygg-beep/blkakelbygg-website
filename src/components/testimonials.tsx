import { Quote, Star } from "lucide-react";
import { Reveal } from "./reveal";
import { testimonials } from "@/lib/site-config";

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.08} y={20}>
          <figure className="relative flex h-full flex-col rounded-2xl border border-border bg-surface p-7 card-shadow">
            <Quote className="h-7 w-7 text-brand-400/50" />
            <div className="mt-3 flex gap-0.5 text-brand-500">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-fg/90">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-border pt-4">
              <span className="block text-sm font-bold text-fg">{t.name}</span>
              <span className="block text-xs text-muted">{t.role}</span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

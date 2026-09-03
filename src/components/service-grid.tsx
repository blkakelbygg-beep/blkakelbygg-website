import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { services } from "@/lib/site-config";

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <Reveal key={service.slug} delay={i * 0.07} y={22}>
          <Link
            href={service.href}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={service.heroImage}
                alt={service.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-brand-500 group-hover:text-ink-950 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold text-fg transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
                {service.navLabel}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                Läs mer
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

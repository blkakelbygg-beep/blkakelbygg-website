import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Reveal } from "./reveal";
import { company } from "@/lib/site-config";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  breadcrumbLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  breadcrumbLabel: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/40 to-transparent" />
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl animate-float" />

      <div className="container-page relative py-24 sm:py-28 lg:py-32">
        <Reveal>
          <nav aria-label="Brödsmulor" className="mb-6 flex items-center gap-1.5 text-xs font-medium text-white/60">
            <Link href="/" className="flex items-center gap-1 hover:text-brand-400">
              <Home className="h-3.5 w-3.5" />
              Hem
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/90">{breadcrumbLabel}</span>
          </nav>
        </Reveal>

        <Reveal delay={0.05}>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-300">
            {eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.12}>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 max-w-xl text-balance text-base sm:text-lg leading-relaxed text-white/75">
            {subtitle}
          </p>
        </Reveal>

        {children && (
          <Reveal delay={0.28} className="mt-8">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function HeroPhoneNote() {
  return (
    <a href={company.phoneHref} className="text-brand-400 font-semibold">
      {company.phone}
    </a>
  );
}

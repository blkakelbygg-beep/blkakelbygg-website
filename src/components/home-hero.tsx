import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Phone, Star } from "lucide-react";
import { Reveal } from "./reveal";
import { Button } from "./button";
import { company } from "@/lib/site-config";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-brand-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl animate-float"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 pb-16 lg:grid-cols-2 lg:gap-10 lg:pb-24">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-700 dark:text-brand-400">
              <BadgeCheck className="h-3.5 w-3.5" />
              GVK-auktoriserat hantverk i Helsingborg
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-[3.4rem]">
              Kakel, badrum &amp; kök som{" "}
              <span className="relative inline-block text-brand-600 dark:text-brand-400">
                håller i decennier
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  className="absolute -bottom-1.5 left-0 w-full text-brand-400/70"
                >
                  <path d="M2 9c48-8 96-8 148-4s124 6 148-2" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-muted sm:text-lg">
              {company.name} är ditt lokala hantverksföretag i Helsingborg. Vi hjälper dig med
              plattsättning, badrums- och köksrenovering, microcement och byggnation — från idé till
              färdigt, kvalitetssäkrat resultat.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/kontakta-oss" size="lg">
                Få en kostnadsfri offert
                <ArrowRight className="h-4 w-4" />
              </Button>
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink-900/10 px-7 py-3.5 text-base font-bold text-fg transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-white/15 dark:hover:text-brand-400"
              >
                <Phone className="h-4 w-4" />
                {company.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-7">
              <div>
                <div className="text-2xl font-extrabold text-fg">250+</div>
                <div className="text-xs font-medium text-muted">Genomförda projekt</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-fg">15+</div>
                <div className="text-xs font-medium text-muted">Års erfarenhet</div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-0.5 text-brand-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-medium text-muted">Betrodda av lokala kunder</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Reveal delay={0.15} y={30} className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border card-shadow">
              <Image
                src="/images/projects/project-13.jpg"
                alt="Genomfört badrumsprojekt av BL Kakel & Bygg AB"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -left-6 bottom-8 w-40 rotate-[-4deg] overflow-hidden rounded-2xl border-4 border-surface shadow-2xl sm:-left-10 sm:w-48">
              <Image
                src="/images/projects/project-15.jpg"
                alt="Genomfört köksprojekt av BL Kakel & Bygg AB"
                width={300}
                height={300}
                className="aspect-square w-full object-cover"
              />
            </div>

            <div className="absolute -right-4 -top-6 flex items-center gap-3 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-2xl backdrop-blur sm:-right-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/15 text-brand-600 dark:text-brand-400">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold text-fg">GVK-auktoriserad</span>
                <span className="block text-[11px] text-muted">Kvalitetssäkrat våtrum</span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-y border-border bg-surface-2/60 py-4">
        <div className="container-page">
          <p className="text-center text-[13px] font-medium text-muted">
            Vi erbjuder{" "}
            <Link href="/plattsattning-kakel-klinker-helsingborg" className="font-semibold text-fg hover:text-brand-600 dark:hover:text-brand-400">
              kakel &amp; klinker
            </Link>
            , snickeri, villa- &amp; lägenhetsrenovering, putsning, måleri samt fönster &amp; solskydd — helhetslösningar för ditt hem i Helsingborg.
          </p>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "./reveal";
import { Button } from "./button";
import { company } from "@/lib/site-config";

export function CtaBanner({
  title,
  subtitle,
  primaryLabel = "Kontakta oss",
  primaryHref = "/kontakta-oss",
}: {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-14 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl animate-float" />
            <div className="bg-noise pointer-events-none absolute inset-0 text-white/[0.03]" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {title}
              </h2>
              {subtitle && (
                <p className="mx-auto mt-4 max-w-xl text-balance text-sm sm:text-base text-white/70">
                  {subtitle}
                </p>
              )}
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={primaryHref} size="lg">
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/15 px-7 py-3.5 text-base font-bold text-white transition-colors hover:border-brand-400 hover:text-brand-400"
                >
                  <Phone className="h-4 w-4" />
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

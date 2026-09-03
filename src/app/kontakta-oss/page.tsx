import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { company, siteUrl } from "@/lib/site-config";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { Reveal } from "@/components/reveal";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata = buildMetadata({
  title: `Kontakta oss – Kostnadsfri offert | ${company.name}`,
  description:
    "Kontakta BL Kakel & Bygg AB i Helsingborg för en kostnadsfri offert på plattsättning, badrumsrenovering, köksrenovering, microcement eller byggnation.",
  path: "/kontakta-oss",
});

const mapQuery = encodeURIComponent(
  `${company.address.street}, ${company.address.zip} ${company.address.city}`,
);

export default function KontaktaOssPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hem", url: siteUrl },
          { name: "Kontakta oss", url: `${siteUrl}/kontakta-oss` },
        ]}
      />

      <PageHero
        eyebrow="Kontakta oss"
        title="Låt oss prata om ditt projekt"
        subtitle="Kontakta oss idag för en kostnadsfri offert och låt oss hjälpa dig skapa starka, vackra och hållbara ytor i Helsingborg."
        image="/images/hero/hero-byggnation.jpg"
        breadcrumbLabel="Kontakta oss"
      />

      <section className="py-16 sm:py-24">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-2xl border border-border bg-surface p-6 card-shadow">
                <h2 className="text-lg font-bold text-fg">Helsingborg</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span className="pt-1.5 text-muted">
                      {company.address.street}
                      <br />
                      {company.address.zip} {company.address.city}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <Phone className="h-4 w-4" />
                    </span>
                    <a href={company.phoneHref} className="text-muted transition-colors hover:text-brand-600 dark:hover:text-brand-400">
                      {company.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <Mail className="h-4 w-4" />
                    </span>
                    <a href={company.emailHref} className="text-muted transition-colors hover:text-brand-600 dark:hover:text-brand-400">
                      {company.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <Clock className="h-4 w-4" />
                    </span>
                    <span className="pt-1.5 text-muted">
                      {company.openingHours.map((o) => (
                        <span key={o.days} className="block">
                          {o.days}: {o.hours}
                        </span>
                      ))}
                    </span>
                  </li>
                </ul>

                <div className="mt-6 flex items-center gap-2 border-t border-border pt-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted">Följ oss</span>
                  <a
                    href={company.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 transition-colors hover:bg-brand-500 hover:text-white dark:text-brand-400"
                  >
                    <FacebookIcon className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={company.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 transition-colors hover:bg-brand-500 hover:text-white dark:text-brand-400"
                  >
                    <InstagramIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-border card-shadow">
                <iframe
                  title="Karta – BL Kakel & Bygg AB"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[15%] dark:grayscale dark:invert-[92%] dark:hue-rotate-180"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-border bg-surface p-6 card-shadow sm:p-9">
              <h2 className="text-2xl font-extrabold tracking-tight text-fg">Skicka en förfrågan</h2>
              <p className="mt-2 text-sm text-muted">
                Fyll i formuläret så återkommer vi med ett prisförslag inom 24 timmar.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

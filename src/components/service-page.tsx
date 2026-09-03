import { ArrowRight, Clock3, ShieldCheck } from "lucide-react";
import type { Service } from "@/lib/site-config";
import { projectImages, siteUrl, company } from "@/lib/site-config";
import { PageHero } from "./page-hero";
import { SectionHeading } from "./section-heading";
import { FeatureGrid } from "./feature-grid";
import { WhyUsGrid } from "./why-us-grid";
import { ProcessSteps } from "./process-steps";
import { CtaBanner } from "./cta-banner";
import { Reveal } from "./reveal";
import { Button } from "./button";
import { ContactForm } from "./contact-form";
import { ServiceGallery } from "./service-gallery";
import { ServiceJsonLd, BreadcrumbJsonLd } from "./json-ld";

export function ServicePageTemplate({ service }: { service: Service }) {
  const gallery =
    service.galleryImages ?? projectImages.filter((img) => service.gallery.includes(img.id));

  return (
    <>
      <ServiceJsonLd name={service.name} description={service.metaDescription} url={`${siteUrl}${service.href}`} />
      <BreadcrumbJsonLd
        items={[
          { name: "Hem", url: siteUrl },
          { name: service.navLabel, url: `${siteUrl}${service.href}` },
        ]}
      />

      <PageHero
        eyebrow={service.heroEyebrow}
        title={service.name}
        subtitle={service.tagline}
        image={service.heroImage}
        breadcrumbLabel={service.navLabel}
      >
        <Button href="#offert" size="lg">
          Kostnadsfri offert
          <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <SectionHeading eyebrow="Om tjänsten" title={service.introHeading} />
            <Reveal delay={0.1}>
              <p className="text-balance text-base leading-relaxed text-muted">{service.intro}</p>
            </Reveal>
          </div>

          {service.features.length > 0 && (
            <div className="mt-14">
              <FeatureGrid items={service.features} columns={service.features.length === 5 ? 5 : 3} />
            </div>
          )}
        </div>
      </section>

      {service.whyUs.length > 0 && (
        <section className="py-20 sm:py-24 bg-surface-2/60 border-y border-border">
          <div className="container-page">
            <SectionHeading
              eyebrow="Trygghet"
              title={`${service.shortName} med kvalitet och trygghet`}
              align="center"
              className="mx-auto"
            />
            <div className="mt-12">
              <WhyUsGrid items={service.whyUs} />
            </div>
          </div>
        </section>
      )}

      {gallery.length > 0 && (
        <section className="py-20 sm:py-24">
          <div className="container-page">
            <SectionHeading
              eyebrow="Referensprojekt"
              title={`Exempel på ${service.shortName.toLowerCase()}`}
              align="center"
              className="mx-auto"
            />
            <ServiceGallery images={gallery} />
            <Reveal className="mt-10 text-center">
              <Button href="/vara-projekt" variant="outline">
                Se fler projekt
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-20 sm:py-24 bg-surface-2/60 border-y border-border">
        <div className="container-page">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <SectionHeading eyebrow="Process" title="Så går det till" />
            <ProcessSteps steps={service.process} />
          </div>
        </div>
      </section>

      <section id="offert" className="py-20 sm:py-24 scroll-mt-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <SectionHeading eyebrow="Prisförslag" title={service.pricingHeading} />
              <Reveal delay={0.08}>
                <p className="mt-5 text-balance text-sm sm:text-base leading-relaxed text-muted">
                  {service.pricingBody}
                </p>
              </Reveal>
              <Reveal delay={0.14} className="mt-7 space-y-3">
                <div className="flex items-start gap-3 text-sm text-muted">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  Kostnadsfri, icke-bindande offert utan dolda avgifter.
                </div>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  <span>
                    Vi återkommer normalt inom 24 timmar, eller ring oss direkt på{" "}
                    <a
                      href={company.phoneHref}
                      className="font-semibold text-fg hover:text-brand-600 dark:hover:text-brand-400"
                    >
                      {company.phone}
                    </a>
                    .
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.06}>
              <div className="rounded-3xl border border-border bg-surface p-6 card-shadow sm:p-8">
                <h3 className="text-lg font-bold text-fg">
                  Få en offert för {service.shortName.toLowerCase()}
                </h3>
                <p className="mt-1.5 text-sm text-muted">
                  Fyll i formuläret så hör vi av oss med ett prisförslag.
                </p>
                <div className="mt-6">
                  <ContactForm preselectedService={service.contactServiceValue} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="pb-20 sm:pb-28">
        <CtaBanner title={service.ctaText} />
      </div>
    </>
  );
}

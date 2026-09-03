import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { company, certifications, projectImages, whyChooseUs, faq } from "@/lib/site-config";
import { HomeHero } from "@/components/home-hero";
import { SectionHeading } from "@/components/section-heading";
import { WhyUsGrid } from "@/components/why-us-grid";
import { ServiceGrid } from "@/components/service-grid";
import { StatsBand } from "@/components/stats-band";
import { Testimonials } from "@/components/testimonials";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { FaqJsonLd } from "@/components/json-ld";

export const metadata = buildMetadata({
  title: `${company.name} – Kakel, Badrum, Kök & Byggnation i Helsingborg`,
  description: company.description,
  path: "/",
  image: "/images/projects/project-13.jpg",
});

export default function HomePage() {
  const previewImages = projectImages.slice(0, 8);

  return (
    <>
      <FaqJsonLd items={faq} />
      <HomeHero />

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Varför välja oss"
            title="Hantverk du kan lita på, från start till slutbesiktning"
            subtitle="Vi kombinerar branschkunskap, GVK-auktorisation och personlig service för att göra ditt bygg- eller renoveringsprojekt så tryggt och smidigt som möjligt."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <WhyUsGrid items={whyChooseUs} />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-surface-2/60 border-y border-border">
        <div className="container-page">
          <SectionHeading
            eyebrow="Våra tjänster"
            title="Helhetslösningar för hem och fastighet"
            subtitle="Från enskilda plattsättningsjobb till kompletta badrums- och köksrenoveringar — välj den tjänst du behöver hjälp med."
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <StatsBand />
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-surface-2/60 border-y border-border">
        <div className="container-page">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Våra projekt"
              title="Ett urval av vårt hantverk"
              subtitle="Från badrum och kök till trappor och golv — här är ett urval av projekt vi genomfört i Helsingborg med omnejd."
            />
            <Reveal delay={0.1}>
              <Button href="/vara-projekt" variant="outline" className="shrink-0">
                Se alla projekt
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {previewImages.map((img, i) => (
              <Reveal key={img.id} delay={i * 0.05} y={16} className={i % 5 === 0 ? "md:row-span-2" : ""}>
                <Link
                  href="/vara-projekt"
                  className={`group relative block overflow-hidden rounded-2xl border border-border ${
                    i % 5 === 0 ? "aspect-[3/5]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/20" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Certifikat & auktorisationer"
            title="Kvalitet vi kan styrka"
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {certifications.map((cert, i) => (
              <Reveal key={cert.file} delay={i * 0.08} y={16}>
                <div className="overflow-hidden rounded-xl border-2 border-brand-400/40 bg-surface p-1.5 card-shadow">
                  <Image
                    src={cert.file}
                    alt={cert.alt}
                    width={220}
                    height={320}
                    className="w-full rounded-lg object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-surface-2/60 border-y border-border">
        <div className="container-page">
          <SectionHeading
            eyebrow="Vad kunderna säger"
            title="Omdömen från nöjda kunder i Helsingborg"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Vanliga frågor"
                title="Bra att veta innan du kontaktar oss"
                subtitle="Hittar du inte svaret du söker? Kontakta oss gärna så hjälper vi dig."
              />
              <Reveal delay={0.15} className="mt-8">
                <Button href="/kontakta-oss" variant="dark">
                  Ställ din fråga
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>
            <FaqAccordion items={faq} />
          </div>
        </div>
      </section>

      <div className="pb-20 sm:pb-28">
        <CtaBanner
          title="Redo att förbättra ditt hem?"
          subtitle="Kontakta oss idag för en kostnadsfri offert — vi återkommer vanligtvis inom 24 timmar."
        />
      </div>
    </>
  );
}

import Image from "next/image";
import { ArrowRight, HeartHandshake, Leaf, ShieldCheck, Timer } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { company, siteUrl, certifications, offeredCrafts } from "@/lib/site-config";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { StatsBand } from "@/components/stats-band";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/button";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata = buildMetadata({
  title: `Om oss – GVK-auktoriserat hantverk i Helsingborg | ${company.name}`,
  description:
    "Lär känna BL Kakel & Bygg AB — ett GVK-auktoriserat hantverksföretag i Helsingborg med 15+ års erfarenhet av kakel, badrum, kök och byggnation.",
  path: "/om-oss",
  image: "/images/projects/project-15.jpg",
});

const values = [
  {
    icon: ShieldCheck,
    title: "Hantverk att lita på",
    description:
      "Vi är GVK-auktoriserade och håller oss till branschens regler ner till minsta detalj — särskilt i våtrum där felaktigt arbete kan bli kostsamt.",
  },
  {
    icon: HeartHandshake,
    title: "Ärlig kommunikation",
    description:
      "Tydlig, skriftlig offert utan dolda kostnader. Du vet alltid vad som ingår och vad nästa steg i projektet är.",
  },
  {
    icon: Timer,
    title: "Punktlighet",
    description: "Vi håller den tidsplan vi kommer överens om och meddelar dig direkt om något förändras.",
  },
  {
    icon: Leaf,
    title: "Hållbara materialval",
    description: "Vi rekommenderar material och metoder som håller i decennier — inte bara till nästa besiktning.",
  },
];

export default function OmOssPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hem", url: siteUrl },
          { name: "Om oss", url: `${siteUrl}/om-oss` },
        ]}
      />

      <PageHero
        eyebrow="Om oss"
        title="Ett lokalt hantverksföretag med ambitionen att göra det rätt"
        subtitle="BL Kakel & Bygg AB grundades av hantverkare som ville höja standarden på plattsättning och renovering i Helsingborg — ett projekt i taget."
        image="/images/hero/hero-microcement.jpg"
        breadcrumbLabel="Om oss"
      />

      <section className="py-20 sm:py-24">
        <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-border card-shadow">
                <Image
                  src="/images/projects/project-21.jpg"
                  alt="Hantverkare från BL Kakel & Bygg AB i arbete"
                  fill
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 w-44 rotate-[4deg] overflow-hidden rounded-2xl border-4 border-surface shadow-2xl sm:-right-8 sm:w-52">
                <Image
                  src="/images/projects/project-06.jpg"
                  alt="Kakelarbete i badrum"
                  width={320}
                  height={320}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Vår historia"
              title="Byggt på hantverkskunskap, inte genvägar"
            />
            <Reveal delay={0.1}>
              <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-muted">
                <p>
                  BL Kakel &amp; Bygg AB startade i Helsingborg med en enkel idé: att leverera plattsättning
                  och renoveringar av samma kvalitet vi själva skulle vilja ha i vårt eget hem. Genom åren
                  har det blivit över 250 genomförda projekt — allt från enskilda badrum till kompletta
                  köks- och lägenhetsrenoveringar.
                </p>
                <p>
                  Vi är GVK-auktoriserade, vilket innebär att våra våtrumsarbeten följer branschens
                  säkerhetsregler ner till minsta tätskikt. Utöver kakel, klinker och microcement erbjuder vi
                  helhetslösningar inom {offeredCrafts.slice(0, -1).join(", ").toLowerCase()} och{" "}
                  {offeredCrafts[offeredCrafts.length - 1].toLowerCase()}.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18} className="mt-8">
              <Button href="/kontakta-oss">
                Boka ett kostnadsfritt möte
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-surface-2/60 border-y border-border">
        <div className="container-page">
          <SectionHeading eyebrow="Våra värderingar" title="Det här kan du förvänta dig av oss" align="center" className="mx-auto" />
          <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6 text-center card-shadow">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                    <v.icon className="h-[22px] w-[22px]" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-fg">{v.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{v.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <StatsBand />
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-surface-2/60 border-y border-border">
        <div className="container-page">
          <SectionHeading
            eyebrow="Certifikat & auktorisationer"
            title="GVK-auktoriserade från grunden"
            subtitle="Våra plattsättare håller yrkesbevis och behörighet enligt gällande branschregler för våtrum — en trygghet för dig som kund."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {certifications.map((cert, i) => (
              <Reveal key={cert.file} delay={i * 0.08} y={16}>
                <div className="overflow-hidden rounded-xl border-2 border-brand-400/40 bg-surface p-1.5 card-shadow">
                  <Image src={cert.file} alt={cert.alt} width={220} height={320} className="w-full rounded-lg object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20 sm:py-28">
        <CtaBanner
          title="Vill du veta mer om oss eller ditt projekt?"
          subtitle="Vi svarar gärna på frågor om vårt arbetssätt, våra certifikat eller ditt specifika projekt."
        />
      </div>
    </>
  );
}

import { buildMetadata } from "@/lib/metadata";
import { company, siteUrl } from "@/lib/site-config";
import { PageHero } from "@/components/page-hero";
import { ProjectGallery } from "@/components/project-gallery";
import { CtaBanner } from "@/components/cta-banner";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata = buildMetadata({
  title: `Våra Projekt – Referenser från Helsingborg | ${company.name}`,
  description:
    "Se ett urval av genomförda kakel-, badrums- och köksprojekt av BL Kakel & Bygg AB i Helsingborg. Filtrera efter tjänst och klicka för att zooma in.",
  path: "/vara-projekt",
  image: "/images/projects/project-13.jpg",
});

export default function VaraProjektPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hem", url: siteUrl },
          { name: "Våra projekt", url: `${siteUrl}/vara-projekt` },
        ]}
      />

      <PageHero
        eyebrow="Våra projekt"
        title="Upptäck vårt hantverk"
        subtitle="Från idé till färdigt resultat — här visar vi ett urval av projekt vi genomfört tillsammans med våra kunder i Helsingborg."
        image="/images/projects/project-09.jpg"
        breadcrumbLabel="Våra projekt"
      />

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <ProjectGallery />
        </div>
      </section>

      <div className="pb-20 sm:pb-28">
        <CtaBanner
          title="Gillar du det du ser?"
          subtitle="Berätta om ditt projekt så återkommer vi med en kostnadsfri offert inom 24 timmar."
        />
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { company, siteUrl } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog-posts";
import { PageHero } from "@/components/page-hero";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { CtaBanner } from "@/components/cta-banner";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata = buildMetadata({
  title: `Blogg – Tips om kakel, badrum, kök & renovering | ${company.name}`,
  description:
    "Tips och guider om plattsättning, badrumsrenovering, köksrenovering och microcement från BL Kakel & Bygg AB i Helsingborg.",
  path: "/blogg",
  image: "/images/projects/project-05.jpg",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("sv-SE", { day: "numeric", month: "long", year: "numeric" });
}

export default function BloggPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hem", url: siteUrl },
          { name: "Blogg", url: `${siteUrl}/blogg` },
        ]}
      />

      <PageHero
        eyebrow="Blogg"
        title="Tips, guider och inspiration"
        subtitle="Vi delar det vi lär oss i vardagen — om kakel, badrum, kök och renovering — så att du kan fatta tryggare beslut om ditt eget projekt."
        image="/images/hero/hero-kok.jpg"
        breadcrumbLabel="Blogg"
      />

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <RevealItem key={post.slug}>
                <Link
                  href={`/blogg/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface card-shadow transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-600 backdrop-blur-sm dark:text-brand-400">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime} läsning</span>
                    </div>
                    <h2 className="mt-3 text-lg font-bold leading-snug text-fg transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
                      {post.title}
                    </h2>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 dark:text-brand-400">
                      Läs mer
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <div className="pb-20 sm:pb-28">
        <CtaBanner title="Har du ett projekt du vill diskutera?" />
      </div>
    </>
  );
}

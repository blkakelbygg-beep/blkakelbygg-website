import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { company, siteUrl } from "@/lib/site-config";
import { blogPosts, blogPostBySlug } from "@/lib/blog-posts";
import { Reveal } from "@/components/reveal";
import { CtaBanner } from "@/components/cta-banner";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: `${post.title} | ${company.name}`,
    description: post.excerpt,
    path: `/blogg/${post.slug}`,
    image: post.image,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("sv-SE", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hem", url: siteUrl },
          { name: "Blogg", url: `${siteUrl}/blogg` },
          { name: post.title, url: `${siteUrl}/blogg/${post.slug}` },
        ]}
      />
      <BlogPostingJsonLd
        title={post.title}
        description={post.excerpt}
        url={`${siteUrl}/blogg/${post.slug}`}
        image={`${siteUrl}${post.image}`}
        datePublished={post.date}
      />

      <section className="relative overflow-hidden bg-ink-950">
        <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/40 to-transparent" />

        <div className="container-page relative py-24 sm:py-28 lg:py-32">
          <Reveal>
            <nav aria-label="Brödsmulor" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/60">
              <Link href="/" className="hover:text-brand-400">Hem</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blogg" className="hover:text-brand-400">Blogg</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white/90">{post.title}</span>
            </nav>
          </Reveal>

          <Reveal delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-300">
              {post.category}
            </span>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="mt-5 max-w-3xl text-balance text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" />
                {post.readTime} läsning
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <Reveal className="space-y-5">
            {post.content.map((block, i) =>
              block.startsWith("## ") ? (
                <h2 key={i} className="pt-3 text-xl sm:text-2xl font-extrabold tracking-tight text-fg">
                  {block.replace("## ", "")}
                </h2>
              ) : (
                <p key={i} className="text-balance text-sm sm:text-base leading-relaxed text-muted">
                  {block}
                </p>
              )
            )}
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <Link
              href="/blogg"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Tillbaka till bloggen
            </Link>
          </Reveal>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="py-16 sm:py-20 bg-surface-2/60 border-y border-border">
          <div className="container-page">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-fg">Fler artiklar</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blogg/${p.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 card-shadow transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
                    <Image src={p.image} alt={p.title} fill sizes="96px" className="object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                      {p.category}
                    </span>
                    <h3 className="mt-1 text-sm font-bold leading-snug text-fg transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="py-20 sm:py-28">
        <CtaBanner title="Redo att sätta igång med ditt eget projekt?" />
      </div>
    </>
  );
}

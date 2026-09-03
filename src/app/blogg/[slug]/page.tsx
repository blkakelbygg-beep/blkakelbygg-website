import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/lib/site-config";
import { blogPosts, blogPostBySlug } from "@/lib/blog-posts";
import { BlogPostContent } from "@/components/blog-post-content";

// Posts with a custom `href` are published at their own dedicated route
// instead — keep them out of /blogg/[slug] so the content has one URL.
const slugRoutedPosts = blogPosts.filter((post) => !post.href);

export function generateStaticParams() {
  return slugRoutedPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostBySlug(slug);
  if (!post || post.href) return {};

  return buildMetadata({
    title: `${post.title} | ${company.name}`,
    description: post.excerpt,
    path: `/blogg/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostBySlug(slug);
  if (!post || post.href) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return <BlogPostContent post={post} otherPosts={otherPosts} />;
}

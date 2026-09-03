import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/lib/site-config";
import { blogPosts, blogPostBySlug } from "@/lib/blog-posts";
import { BlogPostContent } from "@/components/blog-post-content";

const SLUG = "kakel-bygg-renovering-helsingborg";
const post = blogPostBySlug(SLUG);

export const metadata = post
  ? buildMetadata({
      title: `${post.title} | ${company.name}`,
      description: post.excerpt,
      path: `/${SLUG}`,
      image: post.image,
    })
  : {};

export default function KakelByggRenoveringPage() {
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return <BlogPostContent post={post} otherPosts={otherPosts} />;
}

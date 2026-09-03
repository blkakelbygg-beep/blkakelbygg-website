import type { MetadataRoute } from "next";
import { siteUrl, services } from "@/lib/site-config";
import { blogPosts, blogPostPath } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/om-oss", "/vara-projekt", "/blogg", "/kontakta-oss"];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${siteUrl}${service.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}${blogPostPath(post)}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}

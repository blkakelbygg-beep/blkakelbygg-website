import type { Metadata } from "next";
import { company, siteUrl } from "./site-config";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildMetadata({ title, description, path, image }: PageMetaInput): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image ?? "/images/hero/hero-badrum.jpg";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: "sv_SE",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

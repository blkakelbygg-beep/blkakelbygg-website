import { buildMetadata } from "@/lib/metadata";
import { serviceBySlug } from "@/lib/site-config";
import { ServicePageTemplate } from "@/components/service-page";
import { notFound } from "next/navigation";

const service = serviceBySlug("badrumsrenovering-helsingborg")!;

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
  image: service.heroImage,
});

export default function Page() {
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}

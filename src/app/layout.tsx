import type { Metadata } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { OrganizationJsonLd } from "@/components/json-ld";
import { company, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} – Kakel, Badrum, Kök & Byggnation i Helsingborg`,
    template: `%s`,
  },
  description: company.description,
  keywords: [
    "kakel Helsingborg",
    "plattsättning Helsingborg",
    "badrumsrenovering Helsingborg",
    "köksrenovering Helsingborg",
    "microcement Helsingborg",
    "byggfirma Helsingborg",
    "GVK auktoriserad",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: siteUrl,
    siteName: company.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased selection:bg-brand-300">
        <ThemeProvider>
          <OrganizationJsonLd />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
          >
            Hoppa till innehåll
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

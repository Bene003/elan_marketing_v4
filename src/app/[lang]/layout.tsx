import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { display, sans } from "../polices";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Ruban } from "@/components/v4/sections";
import { baseUrl, entreprise, siteName } from "@/content/entreprise";
import { estLangue, parametresLangues, type Langue } from "@/lib/i18n";

export const generateStaticParams = parametresLangues;
export const dynamicParams = false;

const META: Record<Langue, { titre: string; description: string; locale: string }> = {
  en: {
    titre: `Small Business Growth & Branding Consulting | ${siteName}`,
    description:
      "Growth consulting for small businesses: business operations, branding, brand positioning and a 90-day growth roadmap. Book a free 45-minute discovery call.",
    locale: "en_CA",
  },
  fr: {
    titre: `${siteName}, structuration et croissance des PME`,
    description:
      "Accompagnement des PME : structuration, image de marque, positionnement et feuille de route de croissance sur 90 jours. Diagnostic gratuit de 45 minutes.",
    locale: "fr_CA",
  },
};

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  const m = META[lang];
  return {
    metadataBase: new URL(baseUrl),
    title: { default: m.titre, template: `%s | ${siteName}` },
    description: m.description,
    openGraph: {
      type: "website",
      locale: m.locale,
      alternateLocale: lang === "en" ? "fr_CA" : "en_CA",
      siteName,
      url: `${baseUrl}/${lang}`,
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!estLangue(lang)) notFound();

  return (
    <html
      lang={lang === "en" ? "en-CA" : "fr-CA"}
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface text-ink">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-on-brand"
        >
          {lang === "en" ? "Skip to content" : "Aller au contenu"}
        </a>

        <Ruban langue={lang} />
        <SiteHeader langue={lang} />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <SiteFooter langue={lang} />
        {/* Mesure d'audience Vercel : anonyme, sans témoin. */}
        <Analytics />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }}
        />
      </body>
    </html>
  );
}

const DONNEES: Record<Langue, { description: string; knowsAbout: string[] }> = {
  en: {
    description:
      "Growth consulting for small businesses: business operations, branding, brand positioning and growth strategy, with a 90-day roadmap and video check-ins every two weeks.",
    knowsAbout: [
      "Business operations consulting",
      "Branding and brand identity",
      "Brand positioning",
      "Small business growth strategy",
    ],
  },
  fr: {
    description:
      "Accompagnement des PME : structuration opérationnelle, branding, positionnement et accompagnement à la croissance, avec une feuille de route de 90 jours et un suivi vidéo toutes les deux semaines.",
    knowsAbout: [
      "Structuration opérationnelle",
      "Branding et image de marque",
      "Positionnement de marque",
      "Stratégie de croissance des PME",
    ],
  },
};

const jsonLd = (langue: Langue) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  legalName: entreprise.raisonSociale,
  url: `${baseUrl}/${langue}`,
  inLanguage: langue === "en" ? "en-CA" : "fr-CA",
  description: DONNEES[langue].description,
  telephone: entreprise.telephone,
  email: entreprise.courriel,
  areaServed: "Canada",
  knowsAbout: DONNEES[langue].knowsAbout,
  address: {
    "@type": "PostalAddress",
    streetAddress: entreprise.adresse.rue,
    addressLocality: entreprise.adresse.ville,
    addressRegion: entreprise.adresse.region,
    postalCode: entreprise.adresse.codePostal,
    addressCountry: entreprise.adresse.pays,
  },
});

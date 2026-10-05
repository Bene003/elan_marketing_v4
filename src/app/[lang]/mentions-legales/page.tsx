import type { Metadata } from "next";
import { PageJuridique } from "@/components/ui/page-juridique";
import { mentions } from "@/content/juridique";
import { alternances, estLangue } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/mentions-legales">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  return {
    title: mentions[lang].metaTitre,
    description: mentions[lang].metaDescription,
    alternates: alternances(lang, "mentions-legales"),
    robots: { index: false, follow: true },
  };
}

export default async function Page({ params }: PageProps<"/[lang]/mentions-legales">) {
  const { lang } = await params;
  if (!estLangue(lang)) return null;
  return <PageJuridique langue={lang} contenu={mentions[lang]} />;
}

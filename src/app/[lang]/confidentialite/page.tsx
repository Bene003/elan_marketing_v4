import type { Metadata } from "next";
import { PageJuridique } from "@/components/ui/page-juridique";
import { confidentialite } from "@/content/juridique";
import { alternances, estLangue } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/confidentialite">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  return {
    title: confidentialite[lang].metaTitre,
    description: confidentialite[lang].metaDescription,
    alternates: alternances(lang, "confidentialite"),
    robots: { index: false, follow: true },
  };
}

export default async function Page({ params }: PageProps<"/[lang]/confidentialite">) {
  const { lang } = await params;
  if (!estLangue(lang)) return null;
  return <PageJuridique langue={lang} contenu={confidentialite[lang]} />;
}

import type { Metadata } from "next";
import { ParcoursPage } from "@/components/parcours/parcours-page";
import { contenuEntreprises } from "@/content/parcours";
import { alternances, estLangue } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/entreprises">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  const c = contenuEntreprises[lang];
  return {
    title: c.titreMeta,
    description: c.descriptionMeta,
    alternates: alternances(lang, "entreprises"),
  };
}

export default async function EntreprisesPage({ params }: PageProps<"/[lang]/entreprises">) {
  const { lang } = await params;
  if (!estLangue(lang)) return null;
  return <ParcoursPage langue={lang} />;
}

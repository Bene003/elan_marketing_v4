import type { Metadata } from "next";
import { PageJuridique } from "@/components/ui/page-juridique";
import { conditions } from "@/content/juridique";
import { alternances, estLangue } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/conditions-utilisation">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  return {
    title: conditions[lang].metaTitre,
    description: conditions[lang].metaDescription,
    alternates: alternances(lang, "conditions-utilisation"),
    robots: { index: false, follow: true },
  };
}

export default async function Page({ params }: PageProps<"/[lang]/conditions-utilisation">) {
  const { lang } = await params;
  if (!estLangue(lang)) return null;
  return <PageJuridique langue={lang} contenu={conditions[lang]} />;
}

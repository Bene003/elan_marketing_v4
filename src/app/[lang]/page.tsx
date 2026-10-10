import type { Metadata } from "next";
import { alternances, estLangue } from "@/lib/i18n";
import { SceneAccueil } from "@/components/accueil/scene";
import {
  BandePartage,
  ClotureAccueil,
  HerosAccueil,
  PourquoiAccueil,
  PreuvesAccueil,
  ProblemesAccueil,
} from "@/components/accueil/sections";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  return { alternates: alternances(lang, "accueil") };
}

export default async function Accueil({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!estLangue(lang)) return null;

  return (
    <div data-accueil className="accueil">
      <div aria-hidden="true" className="accueil-fond" />
      <BandePartage langue={lang} />
      <HerosAccueil langue={lang} />
      <ProblemesAccueil langue={lang} />
      <PreuvesAccueil langue={lang} />
      <PourquoiAccueil langue={lang} />
      <ClotureAccueil langue={lang} />
      <SceneAccueil />
    </div>
  );
}

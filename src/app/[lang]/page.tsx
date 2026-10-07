import type { Metadata } from "next";
import { alternances, estLangue } from "@/lib/i18n";
import { HeroV4 } from "@/components/v4/hero-v4";
import { ParOuCommencer } from "@/components/v4/par-ou-commencer";
import {
  FaqCompacte,
  PourquoiSuperflux,
  PremierEchange,
  Preuve,
} from "@/components/v4/sections";

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
    <>
      <HeroV4 langue={lang} />
      <ParOuCommencer langue={lang} />
      <Preuve langue={lang} />
      <PourquoiSuperflux langue={lang} />
      <PremierEchange langue={lang} />
      <FaqCompacte langue={lang} />
    </>
  );
}

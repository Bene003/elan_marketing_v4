import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { CaseStudies, FinalCta } from "@/components/funnel";
import { etudesDeCas } from "@/content/cas";
import { alternances, estLangue } from "@/lib/i18n";

const T = {
  en: {
    metaTitre: "Client Results",
    metaDescription:
      "Two real client cases: the starting problem, what we put in place, what changed, and the number that measures it.",
    eyebrow: "Results",
    titre: "Real situations,",
    accent: "not promises",
    intro:
      "Every case shows its starting point and its time frame. A number without context proves nothing.",
    ctaTitre: "Does your situation look like one of these?",
    ctaTexte: "Let's talk it through.",
  },
  fr: {
    metaTitre: "Résultats",
    metaDescription:
      "Deux cas clients réels : le problème de départ, ce qui a été mis en place, ce qui a changé, et le chiffre qui le mesure.",
    eyebrow: "Résultats",
    titre: "Des situations réelles,",
    accent: "pas des promesses",
    intro:
      "Chaque cas est présenté avec son point de départ et sa période. Un chiffre sans contexte ne prouve rien.",
    ctaTitre: "Votre situation ressemble à l'une d'elles ?",
    ctaTexte: "Parlons-en.",
  },
};

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/resultats">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  return {
    title: T[lang].metaTitre,
    description: T[lang].metaDescription,
    alternates: alternances(lang, "resultats"),
  };
}

export default async function ResultatsPage({ params }: PageProps<"/[lang]/resultats">) {
  const { lang } = await params;
  if (!estLangue(lang)) return null;
  const t = T[lang];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} titre={t.titre} titreAccent={t.accent} intro={t.intro} />

      <CaseStudies langue={lang} cas={etudesDeCas[lang]} />

      <FinalCta langue={lang} titre={t.ctaTitre} texte={t.ctaTexte} />
    </>
  );
}

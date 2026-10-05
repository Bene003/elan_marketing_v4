import {
  PainCards,
  Outcomes,
  ProcessSteps,
  CaseStudies,
  PricingSlot,
  WhyUs,
  Faq,
  FinalCta,
} from "@/components/funnel";
import { contenuEntreprises } from "@/content/parcours";
import { etudesDeCas } from "@/content/cas";
import type { Langue } from "@/lib/i18n";

export function ParcoursPage({ langue }: { langue: Langue }) {
  const c = contenuEntreprises[langue];

  return (
    <>

      <PainCards
        langue={langue}
        titre={c.douleursTitre}
        sousTitre={c.promesse}
        douleurs={c.douleurs}
        ouvreLaPage
      />
      <Outcomes langue={langue} titre={c.resultatsTitre} resultats={c.resultats} />
      <ProcessSteps langue={langue} titre={c.etapesTitre} etapes={c.etapes} />
      <CaseStudies langue={langue} cas={etudesDeCas[langue]} />
      <PricingSlot langue={langue} />
      <WhyUs langue={langue} titre={c.pourquoiTitre} points={c.pourquoi} />
      <Faq langue={langue} questions={c.faq} />
      <FinalCta langue={langue} titre={c.ctaTitre} texte={c.ctaTexte} />
    </>
  );
}

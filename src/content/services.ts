import type { Langue } from "@/lib/i18n";

export type Service = {
  slug: string;
  nom: string;

  probleme: string;

  resultat: string;
};

const fr: Service[] = [
  {
    slug: "structuration-operationnelle",
    nom: "Structuration opérationnelle",
    probleme:
      "L'entreprise grandit, mais les façons de faire sont restées celles du début.",
    resultat:
      "Des processus écrits, des rôles clairs et des suivis qui tiennent sans vous.",
  },
  {
    slug: "branding",
    nom: "Branding",
    probleme:
      "Votre image ne dit pas ce que vous valez, et vous vous retrouvez à devoir l'expliquer à chaque fois.",
    resultat:
      "Une image de marque cohérente sur tous vos points de contact, qui travaille pour vous avant le premier échange.",
  },
  {
    slug: "positionnement",
    nom: "Positionnement",
    probleme:
      "Vous ressemblez à vos concurrents, donc la discussion finit toujours sur le prix.",
    resultat:
      "Une place distincte sur votre marché, et des arguments que vos concurrents ne peuvent pas reprendre.",
  },
  {
    slug: "accompagnement-croissance",
    nom: "Accompagnement à la croissance",
    probleme:
      "Les grandes décisions se prennent seul, tard, et souvent dans l'urgence.",
    resultat:
      "Un cadre de suivi régulier, des indicateurs revus, et un interlocuteur qui connaît votre dossier.",
  },
];

const en: Service[] = [
  {
    slug: "structuration-operationnelle",
    nom: "Business Operations",
    probleme:
      "Your business keeps growing, but the way things get done hasn't changed since day one.",
    resultat:
      "Documented processes, clear roles and follow-ups that run without you.",
  },
  {
    slug: "branding",
    nom: "Branding",
    probleme:
      "Your brand doesn't show what you're worth, so you end up explaining it every single time.",
    resultat:
      "A consistent brand identity across every touchpoint, working for you before the first conversation.",
  },
  {
    slug: "positionnement",
    nom: "Brand Positioning",
    probleme:
      "You look like your competitors, so every conversation ends up being about price.",
    resultat:
      "A distinct place in your market, and a message your competitors can't copy.",
  },
  {
    slug: "accompagnement-croissance",
    nom: "Growth Strategy",
    probleme:
      "The big decisions get made alone, late, and usually in a rush.",
    resultat:
      "A regular review rhythm, clear metrics, and a partner who knows your business.",
  },
];

export const services: Record<Langue, Service[]> = { fr, en };

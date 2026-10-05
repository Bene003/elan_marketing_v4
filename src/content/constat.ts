import type { Langue } from "@/lib/i18n";

export type Cout = { cle: string; mot: string; texte: string };

const fr: Cout[] = [
  {
    cle: "temps",
    mot: "Du temps",
    texte: "Refaire chaque mois ce qui existait déjà.",
  },
  {
    cle: "budget",
    mot: "Du budget",
    texte: "Des dépenses engagées sans savoir ce qu'elles rapportent.",
  },
  {
    cle: "occasions",
    mot: "Des occasions",
    texte: "Des clients qui passent pendant qu'on hésite.",
  },
  {
    cle: "plafond",
    mot: "Un plafond",
    texte: "Un niveau que l'année suivante ne dépasse pas.",
  },
];

const en: Cout[] = [
  { cle: "temps", mot: "Time", texte: "Redoing every month what already existed." },
  {
    cle: "budget",
    mot: "Budget",
    texte: "Money spent without knowing what it brings in.",
  },
  {
    cle: "occasions",
    mot: "Opportunities",
    texte: "Clients who walk past while you hesitate.",
  },
  {
    cle: "plafond",
    mot: "A ceiling",
    texte: "A level next year never gets past.",
  },
];

export const couts: Record<Langue, Cout[]> = { fr, en };

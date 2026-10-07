import type { Langue } from "@/lib/i18n";

export type Offre = {
  nom: string;
  prix: string;
  precision: string;
  inclus: string[];
};

export type Tarifs =
  | { status: "pending"; message: string }
  | { status: "published"; offres: Offre[] };

export const tarifs: Record<Langue, Tarifs> = {
  fr: {
    status: "pending",
    message:
      "Nos tarifs dépendent de votre situation et de ce que vous cherchez à régler. Nous les communiquons lors du diagnostic, avant tout engagement.",
  },
  en: {
    status: "pending",
    message:
      "Our rates depend on your situation and what you're looking to solve. We share them during the discovery call, before any commitment.",
  },
};

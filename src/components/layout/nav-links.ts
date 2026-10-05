import type { Langue, Page } from "@/lib/i18n";

type LienNav = { page: Page; label: Record<Langue, string>; telephone: boolean };

export const pageLinks: LienNav[] = [
  { page: "services", label: { en: "Services", fr: "Services" }, telephone: true },
  { page: "methode", label: { en: "Process", fr: "Méthode" }, telephone: true },
  { page: "resultats", label: { en: "Results", fr: "Résultats" }, telephone: true },
  { page: "a-propos", label: { en: "About", fr: "À propos" }, telephone: false },
  { page: "contact", label: { en: "Contact", fr: "Contact" }, telephone: false },
];

const offre: LienNav = {
  page: "entreprises",
  label: { en: "For businesses", fr: "Pour les entreprises" },
  telephone: true,
};

export const navLinks: LienNav[] = [offre, ...pageLinks];

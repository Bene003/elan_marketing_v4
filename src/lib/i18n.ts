export const LANGUES = ["en", "fr"] as const;
export type Langue = (typeof LANGUES)[number];

export const LANGUE_PAR_DEFAUT: Langue = "en";

export const LANGUE_COOKIE = "langue";

export const estLangue = (valeur: string): valeur is Langue =>
  (LANGUES as readonly string[]).includes(valeur);

export type Page =
  | "accueil"
  | "entreprises"
  | "services"
  | "methode"
  | "resultats"
  | "a-propos"
  | "contact"
  | "confidentialite"
  | "conditions-utilisation"
  | "mentions-legales";

// Adresse de chaque page par langue. Pour ajouter une page : un dossier dans
// app/[lang], une entrée ici.
export const SLUGS: Record<Langue, Record<Page, string>> = {
  fr: {
    accueil: "",
    entreprises: "entreprises",
    services: "services",
    methode: "methode",
    resultats: "resultats",
    "a-propos": "a-propos",
    contact: "contact",
    confidentialite: "confidentialite",
    "conditions-utilisation": "conditions-utilisation",
    "mentions-legales": "mentions-legales",
  },
  en: {
    accueil: "",
    entreprises: "businesses",
    services: "services",
    methode: "process",
    resultats: "results",
    "a-propos": "about",
    contact: "contact",
    confidentialite: "privacy",
    "conditions-utilisation": "terms",
    "mentions-legales": "legal",
  },
};

export const PAGES = Object.keys(SLUGS.fr) as Page[];

export function lien(langue: Langue, page: Page, ancre?: string) {
  const slug = SLUGS[langue][page];
  return `/${langue}${slug ? `/${slug}` : ""}${ancre ? `#${ancre}` : ""}`;
}

export function pageDuChemin(chemin: string): { langue: Langue; page: Page } | null {
  const [, premier = "", second = ""] = chemin.split("/");
  if (!estLangue(premier)) return null;
  const page = PAGES.find((p) => SLUGS.en[p] === second || SLUGS.fr[p] === second);
  return page ? { langue: premier, page } : null;
}

export function alternances(langue: Langue, page: Page) {
  return {
    canonical: lien(langue, page),
    languages: {
      "en-CA": lien("en", page),
      "fr-CA": lien("fr", page),
      "x-default": lien("en", page),
    },
  };
}

export const parametresLangues = () => LANGUES.map((lang) => ({ lang }));

import type { Langue } from "@/lib/i18n";

export type EtudeDeCas = {
  slug: string;

  clientName?: string;

  contexte: string;
  probleme: string;
  intervention: string;
  changement: string;
  chiffre: {
    valeur: string;
    libelle: string;

    periode: string;
  };

  chiffreSecondaire?: {
    valeur: string;
    libelle: string;
  };
  temoignage?: {
    citation: string;
    auteur: string;
  };
};

const fr: EtudeDeCas[] = [
  {
    slug: "construction",
    contexte: "Entreprise de construction, 2 associés, petite équipe",
    probleme:
      "Environ 100 000 $ de chiffre d'affaires, mais une gestion interne à structurer : équipe, prix de vente, méthodes commerciales, formation, suivi client et organisation générale.",
    intervention:
      "Refonte de la structure interne et de l'équipe, rôles clarifiés, prix revus, positionnement, processus de vente structuré, formation commerciale, acquisition de clients sans dépenses publicitaires, parcours client et CRM.",
    changement:
      "Une équipe plus petite mais plus efficace, une vente structurée, des employés formés et une meilleure visibilité pour les dirigeants.",
    chiffre: {
      valeur: "250 000 $",
      libelle: "de chiffre d'affaires, contre environ 100 000 $ au départ",
      periode: "Sur 12 mois, en 2024",
    },
    chiffreSecondaire: {
      valeur: "60 à 65 %",
      libelle: "de marge, contre environ 40 % au départ",
    },
  },
  {
    slug: "peluches-jeux",
    contexte: "Peluches et jeux de société, équipe de 3",
    probleme:
      "Une vingtaine de points de vente, peu de visibilité en magasin comme sur les réseaux sociaux, et aucune structure pour la distribution, la prospection et le suivi des magasins.",
    intervention:
      "CRM, prospection appuyée sur une carte des zones, suivi des points de vente, produits et prix retravaillés, clientèle cible et positionnement, catalogue élargi et stratégie de visibilité sur les réseaux sociaux.",
    changement:
      "Une distribution suivie magasin par magasin, des produits retravaillés, une cible mieux comprise et une structure pour continuer d'étendre le réseau.",
    chiffre: {
      valeur: "200",
      libelle: "points de vente, contre une vingtaine au départ",
      periode: "En 2026",
    },
    chiffreSecondaire: {
      valeur: "40",
      libelle: "nouveaux magasins visés chaque mois",
    },
  },
];

const en: EtudeDeCas[] = [
  {
    slug: "construction",
    contexte: "Construction company, 2 partners, small team",
    probleme:
      "Around $100,000 in revenue, but internal management needed structure: team, pricing, sales methods, training, client follow-up and overall organization.",
    intervention:
      "Rebuilt the internal structure and the team, clarified roles, revised pricing, positioning, a structured sales process, sales training, client acquisition with no ad spend, a client journey and a CRM.",
    changement:
      "A smaller but more effective team, a structured sales process, trained staff and better visibility for the owners.",
    chiffre: {
      valeur: "$250,000",
      libelle: "in revenue, up from around $100,000",
      periode: "Over 12 months, in 2024",
    },
    chiffreSecondaire: {
      valeur: "60 to 65%",
      libelle: "margins, up from around 40%",
    },
  },
  {
    slug: "peluches-jeux",
    contexte: "Plush toys and board games, team of 3",
    probleme:
      "About twenty retail locations, little visibility in stores or on social media, and no structure for distribution, prospecting or store follow-up.",
    intervention:
      "A CRM, map-based prospecting by area, store tracking, redesigned products and pricing, target audience and positioning, an expanded catalogue and a social media visibility strategy.",
    changement:
      "Distribution tracked store by store, redesigned products, a better-understood audience and a structure to keep growing the network.",
    chiffre: {
      valeur: "200",
      libelle: "retail locations, up from about twenty",
      periode: "In 2026",
    },
    chiffreSecondaire: {
      valeur: "40",
      libelle: "new stores targeted every month",
    },
  },
];

export const etudesDeCas: Record<Langue, EtudeDeCas[]> = { fr, en };

import type { Langue } from "@/lib/i18n";

// Textes de l'accueil. La page est construite en deux côtés : la PME qui a
// grandi (côté clair) et la structure qui la rattrape (côté forêt).
export const textesAccueil = {
  fr: {
    cotePme: "Votre PME",
    coteStructure: "Votre structure",
    complete: "complète",
    // Les quatre pièces suivent l'ordre des services (content/services.ts).
    pieces: ["Opérations", "Image de marque", "Positionnement", "Croissance"],

    heros: {
      lignes: ["Votre PME a grandi.", "Pas votre structure."],
      intro:
        "Superflux accompagne les PME dans leur structuration et leur croissance, pour que tout ne repose plus sur vous.",
      reserver: "Prendre rendez-vous",
      offre: "Voir ce qu'on fait",
      photo: "Deux dirigeants consultent une tablette dans leur boutique.",
    },

    problemes: {
      titre: "Quatre problèmes qu'on règle",
      accent: "dans les PME",
      gauche: "Le problème",
      droite: "Ce qu'on met en place",
    },

    preuves: {
      titre: "D'autres dirigeants",
      accent: "avaient le même problème",
      apres: "Avec Superflux",
      barres: ["Au départ", "12 mois plus tard"] as [string, string],
      unites: { construction: "de chiffre d'affaires", "peluches-jeux": "points de vente" } as Record<string, string>,
      voir: "Voir les deux cas en détail",
    },

    pourquoi: {
      titre: "La différence se joue",
      accent: "avant la proposition",
      raisons: ["On cherche le vrai frein", "On choisit ce qui compte d'abord", "On installe et on suit"],
    },


    cloture: {
      rappel: "Votre PME a grandi.",
      titre: "Votre structure peut suivre.",
      etapes: ["Diagnostic", "Feuille de route de 90 jours", "Suivi vidéo toutes les deux semaines"],
      reserver: "Prendre rendez-vous",
      methode: "Voir la méthode complète",
      centre: "Votre PME",
    },
  },

  en: {
    cotePme: "Your business",
    coteStructure: "Your structure",
    complete: "complete",
    pieces: ["Operations", "Branding", "Positioning", "Growth"],

    heros: {
      lignes: ["Your small business grew.", "Your structure didn't."],
      intro:
        "Small business consulting for operations, branding and growth, so everything stops depending on you.",
      reserver: "Book a call",
      offre: "See what we do",
      photo: "Two business owners look at a tablet in their shop.",
    },

    problemes: {
      titre: "Four problems we solve",
      accent: "for small businesses",
      gauche: "The problem",
      droite: "What we put in place",
    },

    preuves: {
      titre: "Other business owners",
      accent: "had the same problem",
      apres: "With Superflux",
      barres: ["Before", "12 months later"] as [string, string],
      unites: { construction: "in revenue", "peluches-jeux": "retail locations" } as Record<string, string>,
      voir: "See both cases in detail",
    },

    pourquoi: {
      titre: "The difference is made",
      accent: "before the proposal",
      raisons: ["We find the real bottleneck", "We pick what matters first", "We implement and follow through"],
    },


    cloture: {
      rappel: "Your small business grew.",
      titre: "Your structure can catch up.",
      etapes: ["Discovery call", "90-day roadmap", "Video check-ins every two weeks"],
      reserver: "Book a call",
      methode: "See our full process",
      centre: "Your business",
    },
  },
} satisfies Record<Langue, unknown>;

export type TextesAccueil = (typeof textesAccueil)["fr"];

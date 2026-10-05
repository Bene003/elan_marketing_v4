import type { Langue } from "@/lib/i18n";

export type EtapeMethode = {
  numero: string;
  titre: string;

  action: string;

  livrable: string;

  attenduDuClient: string;
  duree: string;
};

export const etapesMethode: Record<Langue, EtapeMethode[]> = {
  fr: [
    {
      numero: "01",
      titre: "Diagnostic",
      action:
        "Quarante-cinq minutes en visioconférence pour comprendre votre offre, vos clients, votre organisation et ce qui bloque réellement.",
      livrable:
        "Une lecture honnête de votre situation, et notre avis franc sur l'utilité d'un accompagnement.",
      attenduDuClient:
        "Les réponses aux quelques questions posées à la réservation, et de la franchise sur les chiffres.",
      duree: "45 minutes",
    },
    {
      numero: "02",
      titre: "Feuille de route de 90 jours",
      action:
        "À partir du diagnostic, nous posons les priorités des trois prochains mois : organisation, image, positionnement et actions commerciales.",
      livrable:
        "Une feuille de route écrite, dans l'ordre, avec l'effet attendu de chaque chantier et ce qui peut attendre.",
      attenduDuClient: "Vos données de vente, et une décision sur les priorités.",
      duree: "90 jours",
    },
    {
      numero: "03",
      titre: "Suivi vidéo",
      action:
        "Un point en visioconférence toutes les deux semaines : ce qui a avancé, ce qui bloque, ce qu'on ajuste.",
      livrable:
        "Une progression lisible d'un point à l'autre, et des corrections rapides quand quelque chose ne produit pas.",
      attenduDuClient:
        "Un créneau fixe toutes les deux semaines, et une décision quand il en faut une.",
      duree: "Toutes les 2 semaines",
    },
    {
      numero: "04",
      titre: "Croissance en continu",
      action:
        "Ce qui fonctionne est amplifié, ce qui ne fonctionne pas est arrêté sans état d'âme, et la feuille de route suivante repart des résultats.",
      livrable: "Une croissance qui repose sur un processus, pas sur l'improvisation.",
      attenduDuClient: "La volonté d'arrêter ce qui ne marche pas.",
      duree: "En continu",
    },
  ],
  en: [
    {
      numero: "01",
      titre: "Discovery call",
      action:
        "Forty-five minutes by video call to understand your offer, your clients, your operations and what's really holding you back.",
      livrable:
        "An honest read on your situation, and our straight answer on whether working together would help.",
      attenduDuClient:
        "Answers to the few questions asked when you book, and honesty about the numbers.",
      duree: "45 minutes",
    },
    {
      numero: "02",
      titre: "90-day roadmap",
      action:
        "Based on the discovery call, we set your priorities for the next three months: operations, brand, positioning and sales actions.",
      livrable:
        "A written roadmap, in order, with the expected impact of each priority and what can wait.",
      attenduDuClient: "Your sales data, and a decision on priorities.",
      duree: "90 days",
    },
    {
      numero: "03",
      titre: "Video check-ins",
      action:
        "A video call every two weeks: what moved forward, what's stuck, what we adjust.",
      livrable:
        "Progress you can see from one call to the next, and quick corrections when something isn't delivering.",
      attenduDuClient:
        "A fixed slot every two weeks, and a decision when one is needed.",
      duree: "Every 2 weeks",
    },
    {
      numero: "04",
      titre: "Ongoing growth",
      action:
        "What works gets scaled up, what doesn't gets stopped, no hard feelings, and the next roadmap starts from the results.",
      livrable: "Growth that runs on a process, not on improvisation.",
      attenduDuClient: "The willingness to stop what isn't working.",
      duree: "Ongoing",
    },
  ],
};

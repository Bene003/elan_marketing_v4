import type { Langue } from "@/lib/i18n";

export type Douleur = {
  titre: string;
  texte: string;
};

export type Resultat = {
  titre: string;
  texte: string;
};

export type Etape = {
  numero: string;
  titre: string;

  livrable: string;
};

export type QuestionFaq = {
  question: string;
  reponse: string;
};

export type ContenuParcours = {
  titreMeta: string;
  descriptionMeta: string;
  promesse: string;
  douleursTitre: string;
  douleurs: Douleur[];
  resultatsTitre: string;
  resultats: Resultat[];
  etapesTitre: string;
  etapes: Etape[];
  pourquoiTitre: string;
  pourquoi: Resultat[];
  faq: QuestionFaq[];
  ctaTitre: string;
  ctaTexte: string;
};

const fr: ContenuParcours = {
  titreMeta: "Accompagnement et croissance des PME",
  descriptionMeta:
    "Structuration opérationnelle, image de marque, positionnement et stratégie de croissance pour les PME. Diagnostic gratuit de 45 minutes.",

  promesse:
    "Superflux aide les PME à mieux organiser leurs opérations, clarifier leur image et mettre en place les bonnes actions pour attirer plus de clients.",

  douleursTitre: "PME : ce qui freine votre croissance",

  douleurs: [
    {
      titre: "L'organisation ne suit plus la croissance",
      texte:
        "Ce qui fonctionnait à trois personnes se fissure à douze. Les décisions, les suivis et les relances repassent tous par vous.",
    },
    {
      titre: "Votre image ne dit pas ce que vous valez",
      texte:
        "Vos clients vous choisissent pour votre travail, mais rien dans votre image ne le montre. Face à un concurrent, la discussion finit sur le prix.",
    },
    {
      titre: "Les clients arrivent par à-coups",
      texte:
        "Un bon mois, puis deux mois creux. Sans actions suivies, impossible de prévoir, donc d'embaucher ou d'investir sereinement.",
    },
  ],

  resultatsTitre: "Ce que vous obtenez",
  resultats: [
    {
      titre: "Des opérations qui tiennent sans vous",
      texte:
        "Des processus écrits, des rôles clairs et des suivis que l'équipe applique sans tout faire remonter jusqu'à vous.",
    },
    {
      titre: "Une image qui dit ce que vous valez",
      texte:
        "Une image de marque cohérente sur votre site, vos réseaux et vos documents, qui travaille pour vous avant le premier échange.",
    },
    {
      titre: "Une place claire sur votre marché",
      texte:
        "Un positionnement de marque net : une offre, une clientèle cible et des arguments que vos concurrents ne peuvent pas reprendre.",
    },
    {
      titre: "Les bonnes actions, suivies dans le temps",
      texte:
        "Une stratégie de croissance concrète : les actions qui attirent des clients, priorisées, suivies avec des indicateurs et ajustées avec vous.",
    },
  ],

  etapesTitre: "Comment on avance ensemble",
  etapes: [
    {
      numero: "01",
      titre: "Diagnostic de 45 minutes",
      livrable:
        "Quarante-cinq minutes pour comprendre où votre croissance bloque, et vous dire franchement si nous sommes les bons pour vous aider.",
    },
    {
      numero: "02",
      titre: "Feuille de route de 90 jours",
      livrable:
        "Vos priorités des trois prochains mois, dans l'ordre : organisation, image, positionnement et actions commerciales, avec l'effet attendu de chacune.",
    },
    {
      numero: "03",
      titre: "Suivi vidéo toutes les deux semaines",
      livrable:
        "Un point en visioconférence toutes les deux semaines pour avancer, mesurer et ajuster. Ce qui est décidé est mis en place, pas laissé dans un document.",
    },
    {
      numero: "04",
      titre: "Croissance en continu",
      livrable:
        "Ce qui fonctionne est amplifié, ce qui ne fonctionne pas est arrêté, et la feuille de route suivante part de vos résultats.",
    },
  ],

  pourquoiTitre: "Pourquoi Superflux",
  pourquoi: [
    {
      titre: "Comprendre avant de proposer",
      texte:
        "On analyse votre offre, vos clients, votre organisation et vos ventes avant de recommander quoi que ce soit.",
    },
    {
      titre: "Un regard extérieur",
      texte:
        "Un fondateur qui a vécu en France, aux Caraïbes et au Canada, et qui n'est enfermé dans aucun secteur ni aucun marché.",
    },
    {
      titre: "Un seul interlocuteur",
      texte:
        "Vous travaillez directement avec le fondateur. Quand il faut du design, de la vidéo, du développement ou de la publicité, il fait appel aux bons experts, sans alourdir la structure.",
    },
  ],

  faq: [
    {
      question: "À partir de quelle taille d'entreprise est-ce pertinent ?",
      reponse:
        "Il n'y a pas de seuil. Ce qui compte davantage, c'est qu'il y ait déjà des clients et quelqu'un pour appliquer ce qui sera décidé. Le diagnostic sert justement à répondre à cette question sans engagement.",
    },
    {
      question: "Combien de temps avant de voir des résultats ?",
      reponse:
        "Les premiers effets se voient sur l'organisation avant de se voir sur les ventes. La feuille de route couvre 90 jours, mais nous n'annonçons aucun résultat chiffré à l'avance : chaque contexte est différent, et un chiffre donné sans connaître le vôtre serait une devinette.",
    },
    {
      question: "Est-ce que vous remplacez notre équipe marketing ?",
      reponse:
        "Non, nous travaillons avec elle. L'objectif est qu'elle sache continuer sans nous : un accompagnement dont on ne peut pas sortir n'en est pas un.",
    },
    {
      question: "Est-ce que tout se fait à distance ?",
      reponse:
        "Oui. Le diagnostic et les suivis se font en visioconférence, avec un point toutes les deux semaines.",
    },
    {
      question: "Le diagnostic est-il vraiment sans engagement ?",
      reponse:
        "Oui. Quarante-cinq minutes en visioconférence. Vous repartez avec une lecture de votre situation, que nous travaillions ensemble ou non.",
    },
  ],

  ctaTitre: "Quarante-cinq minutes pour savoir où ça bloque",
  ctaTexte:
    "Réservez un diagnostic. Nous regardons votre situation, et nous vous disons ce qui aurait le plus d'effet dans les 90 prochains jours.",
};

const en: ContenuParcours = {
  titreMeta: "Growth Consulting for Small Businesses",
  descriptionMeta:
    "Business operations, branding, brand positioning and growth strategy for small businesses. Book a free 45-minute discovery call.",
  promesse:
    "Superflux helps small businesses streamline their operations, sharpen their brand image and put the right actions in place to win more clients.",

  douleursTitre: "What's holding your small business back",
  douleurs: [
    {
      titre: "Your operations haven't kept up with your growth",
      texte:
        "What worked with three people starts to crack at twelve. Decisions, follow-ups and reminders all still go through you.",
    },
    {
      titre: "Your brand doesn't show what you're worth",
      texte:
        "Clients choose you for the quality of your work, but nothing in your brand shows it. Up against a competitor, the conversation always ends on price.",
    },
    {
      titre: "Clients come in waves",
      texte:
        "One good month, then two slow ones. Without consistent actions you can't forecast, so you can't hire or invest with confidence.",
    },
  ],

  resultatsTitre: "What you get",
  resultats: [
    {
      titre: "Operations that run without you",
      texte:
        "Documented processes, clear roles and follow-ups your team handles without everything landing on your desk.",
    },
    {
      titre: "A brand that shows what you're worth",
      texte:
        "A consistent brand identity across your website, social media and documents, working for you before the first conversation.",
    },
    {
      titre: "A clear position in your market",
      texte:
        "Sharp brand positioning: one offer, one target audience, and a message your competitors can't copy.",
    },
    {
      titre: "The right actions, tracked over time",
      texte:
        "A concrete growth strategy: the actions that bring in clients, prioritized, tracked with clear metrics and adjusted with you.",
    },
  ],

  etapesTitre: "How we work together",
  etapes: [
    {
      numero: "01",
      titre: "45-minute discovery call",
      livrable:
        "Forty-five minutes to understand where your growth is stuck, and to tell you honestly whether we're the right fit.",
    },
    {
      numero: "02",
      titre: "90-day roadmap",
      livrable:
        "Your priorities for the next three months, in order: operations, brand, positioning and sales actions, with the expected impact of each.",
    },
    {
      numero: "03",
      titre: "Video check-ins every two weeks",
      livrable:
        "A video call every two weeks to move forward, measure and adjust. What we decide gets put in place, not left in a document.",
    },
    {
      numero: "04",
      titre: "Ongoing growth",
      livrable:
        "What works gets scaled up, what doesn't gets stopped, and the next roadmap starts from your results.",
    },
  ],

  pourquoiTitre: "Why Superflux",
  pourquoi: [
    {
      titre: "We understand before we recommend",
      texte:
        "We look at your offer, your clients, your operations and your sales before recommending anything.",
    },
    {
      titre: "An outside perspective",
      texte:
        "A founder who has lived in France, the Caribbean and Canada, and isn't locked into one industry or one market.",
    },
    {
      titre: "One point of contact",
      texte:
        "You work directly with the founder. When you need design, video, web development or advertising, he brings in the right experts without adding overhead.",
    },
  ],

  faq: [
    {
      question: "What size of business is this for?",
      reponse:
        "There's no minimum. What matters more is that you already have clients and someone to put the decisions into practice. The discovery call is there to answer exactly that, with no commitment.",
    },
    {
      question: "How long before we see results?",
      reponse:
        "The first effects show up in how you operate before they show up in sales. The roadmap covers 90 days, but we don't promise numbers up front: every business is different, and a figure given without knowing yours would be a guess.",
    },
    {
      question: "Do you replace our marketing team?",
      reponse:
        "No, we work with them. The goal is for your team to keep going without us: support you can't step away from isn't support.",
    },
    {
      question: "Is everything done remotely?",
      reponse:
        "Yes. The discovery call and the check-ins happen by video call, with a meeting every two weeks.",
    },
    {
      question: "Is the discovery call really free, with no commitment?",
      reponse:
        "Yes. Forty-five minutes by video call. You leave with a clear read on your situation, whether we work together or not.",
    },
  ],

  ctaTitre: "Forty-five minutes to find what's holding you back",
  ctaTexte:
    "Book a free discovery call. We look at your situation and tell you what would have the most impact over the next 90 days.",
};

export const contenuEntreprises: Record<Langue, ContenuParcours> = { en, fr };

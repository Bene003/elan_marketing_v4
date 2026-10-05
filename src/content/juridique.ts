import type { Langue } from "@/lib/i18n";
import { entreprise as e } from "./entreprise";

export type SectionJuridique = {
  titre: string;
  paragraphes?: string[];
  puces?: string[];
  /** Paragraphes affichés après la liste. */
  apres?: string[];
};
export type PageJuridiqueContenu = {
  metaTitre: string;
  metaDescription: string;
  titre: string;
  intro?: string;
  miseAJour: string;
  sections: SectionJuridique[];
};

const MAJ = { fr: "Dernière mise à jour : 5 octobre 2026", en: "Last updated: October 5, 2026" };
const adresse = `${e.adresse.rue}, ${e.adresse.ville} (${e.adresse.region}) ${e.adresse.codePostal}, Canada`;

export const confidentialite: Record<Langue, PageJuridiqueContenu> = {
  fr: {
    metaTitre: "Politique de confidentialité",
    metaDescription:
      "Les renseignements personnels recueillis par Superflux sur ce site, leur usage, leurs destinataires et vos droits.",
    titre: "Politique de confidentialité",
    intro:
      "Cette politique explique quels renseignements personnels Superflux recueille sur ce site, pourquoi, avec qui ils sont partagés et comment exercer vos droits, conformément à la Loi sur la protection des renseignements personnels dans le secteur privé du Québec (Loi 25).",
    miseAJour: MAJ.fr,
    sections: [
      {
        titre: "Responsable de la protection des renseignements personnels",
        paragraphes: [
          `${e.nom} est exploité par ${e.raisonSociale}, ${adresse}.`,
          `Responsable : ${e.representant}, ${e.fonction.fr}. Courriel : ${e.courriel} · Téléphone : ${e.telephoneAffiche}.`,
        ],
      },
      {
        titre: "Les renseignements que nous recueillons",
        puces: [
          "Formulaire de contact : votre nom, votre courriel, et si vous les indiquez votre téléphone, le nom de votre entreprise et votre message. La langue du site au moment de l'envoi est jointe.",
          "Réservation d'un diagnostic : votre nom, votre courriel, la date choisie et vos réponses aux questions posées avant le rendez-vous (entreprise, taille de l'équipe, enjeux, objectif, site web).",
          "Navigation : une mesure d'audience anonyme (pages consultées, type d'appareil, pays), sans témoin et sans identifiant personnel.",
        ],
        apres: ["Nous ne recueillons que ce que vous nous transmettez vous-même, et rien de plus que ce qui est nécessaire."],
      },
      {
        titre: "Pourquoi nous les utilisons",
        puces: [
          "Vous répondre et préparer votre diagnostic.",
          "Tenir le rendez-vous et en assurer le suivi, si vous le souhaitez.",
          "Comprendre, de façon globale et anonyme, comment le site est consulté pour l'améliorer.",
        ],
        apres: [
          "Vos renseignements ne sont ni vendus ni utilisés à des fins publicitaires. Nous ne vous inscrivons à aucune infolettre sans votre demande.",
        ],
      },
      {
        titre: "Votre consentement",
        paragraphes: [
          "En envoyant le formulaire ou en réservant un rendez-vous, vous consentez à l'utilisation de vos renseignements aux fins décrites ci-dessus. Vous pouvez retirer ce consentement à tout moment en nous écrivant.",
        ],
      },
      {
        titre: "Prestataires et communication hors du Québec",
        paragraphes: [
          "Pour faire fonctionner le site, nous faisons appel aux prestataires suivants. Ils traitent vos renseignements uniquement pour nous fournir leur service, et peuvent les conserver hors du Québec :",
        ],
        puces: [
          "Vercel Inc. : hébergement du site et mesure d'audience (États-Unis).",
          "Cal.com, Inc. : prise de rendez-vous (États-Unis).",
          "Brevo (Sendinblue SAS) : transmission des demandes du formulaire par courriel (France, Union européenne).",
        ],
      },
      {
        titre: "Témoins (cookies)",
        paragraphes: [
          "Le site dépose un seul témoin, fonctionnel : il retient la langue que vous avez choisie, pendant un an. Il ne contient aucun renseignement personnel.",
          "La mesure d'audience n'utilise aucun témoin. Le calendrier de réservation, fourni par Cal.com, peut utiliser ses propres témoins techniques, régis par la politique de Cal.com.",
          "Vous pouvez supprimer ou bloquer les témoins dans les réglages de votre navigateur.",
        ],
      },
      {
        titre: "Conservation et sécurité",
        paragraphes: [
          "Vos renseignements sont conservés le temps nécessaire aux fins décrites ci-dessus, puis supprimés. Une demande restée sans suite est supprimée au plus tard 24 mois après le dernier échange.",
          "Le site est servi en HTTPS, l'accès aux demandes est réservé au responsable, et aucune clé d'accès n'est exposée dans le navigateur.",
        ],
      },
      {
        titre: "Vos droits",
        paragraphes: [
          `Vous pouvez demander l'accès à vos renseignements, leur rectification, leur suppression, leur transmission dans un format technologique structuré, ou retirer votre consentement, en écrivant à ${e.courriel}. Nous répondons dans un délai de 30 jours.`,
          "En cas de désaccord, vous pouvez porter plainte auprès de la Commission d'accès à l'information du Québec.",
        ],
      },
      {
        titre: "Modifications",
        paragraphes: ["Cette politique peut évoluer. La date de dernière mise à jour figure en haut de la page."],
      },
    ],
  },
  en: {
    metaTitre: "Privacy Policy",
    metaDescription:
      "The personal information Superflux collects on this site, how it is used, who receives it and your rights.",
    titre: "Privacy policy",
    intro:
      "This policy explains what personal information Superflux collects on this site, why, who it is shared with and how to exercise your rights, in accordance with Quebec's Act respecting the protection of personal information in the private sector (Law 25).",
    miseAJour: MAJ.en,
    sections: [
      {
        titre: "Person in charge of personal information",
        paragraphes: [
          `${e.nom} is operated by ${e.raisonSociale}, ${adresse}.`,
          `Person in charge: ${e.representant}, ${e.fonction.en}. Email: ${e.courriel} · Phone: ${e.telephoneAffiche}.`,
        ],
      },
      {
        titre: "Information we collect",
        puces: [
          "Contact form: your name, your email and, if you provide them, your phone number, your company name and your message. The site language at the time of sending is included.",
          "Booking a discovery call: your name, your email, the time you choose and your answers to the questions asked before the call (company, team size, challenges, goal, website).",
          "Browsing: anonymous analytics (pages viewed, device type, country), with no cookies and no personal identifier.",
        ],
        apres: ["We only collect what you send us yourself, and nothing beyond what is needed."],
      },
      {
        titre: "Why we use it",
        puces: [
          "To reply to you and prepare your discovery call.",
          "To hold the call and follow up, if you wish.",
          "To understand, in an overall and anonymous way, how the site is used, so we can improve it.",
        ],
        apres: [
          "Your information is never sold or used for advertising. We never sign you up to a newsletter unless you ask.",
        ],
      },
      {
        titre: "Your consent",
        paragraphes: [
          "By sending the form or booking a call, you consent to the use of your information for the purposes described above. You can withdraw this consent at any time by writing to us.",
        ],
      },
      {
        titre: "Service providers and transfers outside Quebec",
        paragraphes: [
          "To run the site, we use the following providers. They process your information only to deliver their service to us, and may store it outside Quebec:",
        ],
        puces: [
          "Vercel Inc.: website hosting and analytics (United States).",
          "Cal.com, Inc.: appointment booking (United States).",
          "Brevo (Sendinblue SAS): delivery of form requests by email (France, European Union).",
        ],
      },
      {
        titre: "Cookies",
        paragraphes: [
          "The site sets a single functional cookie: it remembers the language you chose, for one year. It contains no personal information.",
          "Analytics use no cookies. The booking calendar, provided by Cal.com, may use its own technical cookies, governed by Cal.com's policy.",
          "You can delete or block cookies in your browser settings.",
        ],
      },
      {
        titre: "Retention and security",
        paragraphes: [
          "Your information is kept as long as needed for the purposes above, then deleted. A request that leads nowhere is deleted no later than 24 months after the last exchange.",
          "The site is served over HTTPS, access to requests is limited to the person in charge, and no access key is exposed in the browser.",
        ],
      },
      {
        titre: "Your rights",
        paragraphes: [
          `You can ask to access, correct or delete your information, to receive it in a structured technological format, or withdraw your consent, by writing to ${e.courriel}. We reply within 30 days.`,
          "If you disagree with our response, you can file a complaint with the Commission d'accès à l'information du Québec.",
        ],
      },
      {
        titre: "Changes",
        paragraphes: ["This policy may change. The date of the last update appears at the top of the page."],
      },
    ],
  },
};

export const conditions: Record<Langue, PageJuridiqueContenu> = {
  fr: {
    metaTitre: "Conditions d'utilisation",
    metaDescription: "Les conditions d'utilisation du site de Superflux.",
    titre: "Conditions d'utilisation",
    intro: "En utilisant ce site, vous acceptez les conditions ci-dessous.",
    miseAJour: MAJ.fr,
    sections: [
      {
        titre: "Objet",
        paragraphes: [
          `Ce site présente les services d'accompagnement de ${e.nom}, exploité par ${e.raisonSociale}, et permet de réserver un diagnostic ou de nous écrire.`,
        ],
      },
      {
        titre: "Informations publiées",
        paragraphes: [
          "Les contenus du site sont fournis à titre informatif. Ils ne constituent ni un conseil personnalisé ni un engagement contractuel.",
          "Les résultats présentés dans les études de cas sont ceux de situations passées. Ils ne garantissent aucun résultat futur : chaque entreprise est différente.",
        ],
      },
      {
        titre: "Diagnostic et rendez-vous",
        paragraphes: [
          "Le diagnostic de 45 minutes est gratuit et sans engagement. Vous pouvez reporter ou annuler votre rendez-vous à l'aide du lien reçu par courriel. Superflux peut également reporter un rendez-vous ; vous en êtes alors informé.",
        ],
      },
      {
        titre: "Propriété intellectuelle",
        paragraphes: [
          `Les textes, images, logos et éléments graphiques du site appartiennent à ${e.raisonSociale} ou à leurs auteurs. Toute reproduction sans autorisation écrite est interdite.`,
        ],
      },
      {
        titre: "Disponibilité et liens externes",
        paragraphes: [
          "Nous faisons notre possible pour que le site soit accessible en tout temps, sans pouvoir le garantir. Le site peut renvoyer vers des services tiers, notamment le calendrier Cal.com, dont le contenu relève de leurs éditeurs.",
        ],
      },
      {
        titre: "Responsabilité",
        paragraphes: [
          "Dans les limites permises par la loi, Superflux ne peut être tenu responsable des dommages indirects liés à l'utilisation du site ou à l'impossibilité d'y accéder.",
        ],
      },
      {
        titre: "Renseignements personnels",
        paragraphes: ["Leur traitement est décrit dans notre politique de confidentialité."],
      },
      {
        titre: "Droit applicable et modifications",
        paragraphes: [
          "Ces conditions sont régies par les lois applicables au Québec. Elles peuvent évoluer ; la date de dernière mise à jour figure en haut de la page.",
        ],
      },
    ],
  },
  en: {
    metaTitre: "Terms of Use",
    metaDescription: "Terms of use of the Superflux website.",
    titre: "Terms of use",
    intro: "By using this site, you accept the terms below.",
    miseAJour: MAJ.en,
    sections: [
      {
        titre: "Purpose",
        paragraphes: [
          `This site presents the consulting services of ${e.nom}, operated by ${e.raisonSociale}, and lets you book a discovery call or contact us.`,
        ],
      },
      {
        titre: "Published information",
        paragraphes: [
          "The content of this site is provided for information only. It is neither personalized advice nor a contractual commitment.",
          "Results shown in the case studies come from past situations. They do not guarantee any future result: every business is different.",
        ],
      },
      {
        titre: "Discovery call and appointments",
        paragraphes: [
          "The 45-minute discovery call is free and with no commitment. You can reschedule or cancel using the link in your confirmation email. Superflux may also reschedule an appointment; you will be notified if so.",
        ],
      },
      {
        titre: "Intellectual property",
        paragraphes: [
          `The text, images, logos and graphic elements of this site belong to ${e.raisonSociale} or to their authors. Any reproduction without written permission is prohibited.`,
        ],
      },
      {
        titre: "Availability and external links",
        paragraphes: [
          "We do our best to keep the site available at all times, but cannot guarantee it. The site may link to third-party services, including the Cal.com calendar, whose content is the responsibility of their publishers.",
        ],
      },
      {
        titre: "Liability",
        paragraphes: [
          "To the extent permitted by law, Superflux is not liable for indirect damages related to the use of the site or the inability to access it.",
        ],
      },
      {
        titre: "Personal information",
        paragraphes: ["How we handle it is described in our privacy policy."],
      },
      {
        titre: "Governing law and changes",
        paragraphes: [
          "These terms are governed by the laws applicable in Quebec. They may change; the date of the last update appears at the top of the page.",
        ],
      },
    ],
  },
};

export const mentions: Record<Langue, PageJuridiqueContenu> = {
  fr: {
    metaTitre: "Mentions légales",
    metaDescription: "Éditeur, hébergement, conception et propriété intellectuelle du site de Superflux.",
    titre: "Mentions légales",
    miseAJour: MAJ.fr,
    sections: [
      {
        titre: "Éditeur du site",
        paragraphes: [
          `${e.nom}, exploité par ${e.raisonSociale}, ${adresse}.`,
          `Responsable de la publication : ${e.representant}, ${e.fonction.fr}. Courriel : ${e.courriel} · Téléphone : ${e.telephoneAffiche}.`,
        ],
      },
      {
        titre: "Hébergement",
        paragraphes: ["Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis."],
      },
      {
        titre: "Conception et développement",
        paragraphes: ["Hephera, studio numérique."],
      },
      {
        titre: "Propriété intellectuelle",
        paragraphes: [
          `Les textes, images, logos et éléments graphiques du site appartiennent à ${e.raisonSociale}. Toute reproduction sans autorisation écrite est interdite.`,
        ],
      },
      {
        titre: "Pour aller plus loin",
        paragraphes: [
          "L'utilisation du site est encadrée par nos conditions d'utilisation, et le traitement des renseignements personnels par notre politique de confidentialité.",
        ],
      },
    ],
  },
  en: {
    metaTitre: "Legal Notice",
    metaDescription: "Publisher, hosting, design and intellectual property of the Superflux website.",
    titre: "Legal notice",
    miseAJour: MAJ.en,
    sections: [
      {
        titre: "Site publisher",
        paragraphes: [
          `${e.nom}, operated by ${e.raisonSociale}, ${adresse}.`,
          `Publication manager: ${e.representant}, ${e.fonction.en}. Email: ${e.courriel} · Phone: ${e.telephoneAffiche}.`,
        ],
      },
      {
        titre: "Hosting",
        paragraphes: ["Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States."],
      },
      {
        titre: "Design and development",
        paragraphes: ["Hephera, digital studio."],
      },
      {
        titre: "Intellectual property",
        paragraphes: [
          `The text, images, logos and graphic elements of this site belong to ${e.raisonSociale}. Any reproduction without written permission is prohibited.`,
        ],
      },
      {
        titre: "Further information",
        paragraphes: [
          "Use of the site is governed by our terms of use, and the handling of personal information by our privacy policy.",
        ],
      },
    ],
  },
};

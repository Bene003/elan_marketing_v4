import type { Langue } from "@/lib/i18n";
import type { QuestionFaq } from "./parcours";

export const faqCommune: Record<Langue, QuestionFaq[]> = {
  fr: [
    {
      question: "Comment se passe le diagnostic ?",
      reponse:
        "Vous choisissez un créneau dans le calendrier et vous répondez à quelques questions sur votre situation. Nous les lisons avant l'appel, pour que les quarante-cinq minutes servent à creuser plutôt qu'à faire les présentations. Nous nous parlons ensuite en visioconférence, sans frais et sans suite obligatoire.",
    },
    {
      question: "Est-ce que je peux vous écrire plutôt que réserver ?",
      reponse:
        "Oui. Le formulaire de la page contact fonctionne tout aussi bien. Le rendez-vous est simplement le chemin le plus rapide si vous êtes prêt à avancer.",
    },
    {
      question: "Faut-il être sur place pour travailler avec vous ?",
      reponse:
        "Non. Tout se fait à distance : le diagnostic et les suivis ont lieu en visioconférence, avec un point toutes les deux semaines.",
    },
    {
      question: "Quels sont vos tarifs ?",
      reponse:
        "Ils dépendent de votre situation et de ce que vous cherchez à régler. Nous les communiquons lors du diagnostic, avant tout engagement.",
    },
    {
      question: "En combien de temps répondez-vous ?",
      reponse:
        "Sous un jour ouvrable. Si vous réservez un créneau dans le calendrier, la confirmation est immédiate et il n'y a rien à attendre.",
    },
  ],
  en: [
    {
      question: "How does the discovery call work?",
      reponse:
        "You pick a time slot in the calendar and answer a few questions about your situation. We read them before the call, so the forty-five minutes go into digging deeper instead of introductions. Then we talk by video call, free and with no commitment.",
    },
    {
      question: "Can I send you a message instead of booking?",
      reponse:
        "Yes. The form on the contact page works just as well. Booking a call is simply the fastest way forward if you're ready to move.",
    },
    {
      question: "Do we need to meet in person to work together?",
      reponse:
        "No. Everything is done remotely: the discovery call and the check-ins happen by video call, with a meeting every two weeks.",
    },
    {
      question: "How much does it cost?",
      reponse:
        "It depends on your situation and what you're looking to solve. We share our rates during the discovery call, before any commitment.",
    },
    {
      question: "How quickly do you reply?",
      reponse:
        "Within one business day. If you book a time slot in the calendar, confirmation is instant and there's nothing to wait for.",
    },
  ],
};

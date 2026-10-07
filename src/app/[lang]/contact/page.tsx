import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import { Faq } from "@/components/funnel";
import { BookingEmbed } from "@/components/forms/booking-embed";
import { QualifyingForm } from "@/components/forms/qualifying-form";
import { faqCommune } from "@/content/faq";
import { entreprise } from "@/content/entreprise";
import { alternances, estLangue } from "@/lib/i18n";

const T = {
  en: {
    metaTitre: "Book a Discovery Call",
    metaDescription:
      "Book a discovery call with Superflux, a growth consultancy for small businesses, or send us a message.",
    eyebrow: "Contact",
    titre: "Book a",
    accent: "discovery call",
    intro:
      "Pick a time slot that suits you. If you'd rather write, the form below works just as well.",
    ecrire: "Or send us a message",
    ecrireTitre: "Tell us what's holding you back",
    ecrireSous: "The more specific you are, the more useful our first reply will be.",
    direct: "Reach us directly",
    adresse: "Address",
  },
  fr: {
    metaTitre: "Contact et prise de rendez-vous",
    metaDescription:
      "Réservez un diagnostic avec Superflux, accompagnement et croissance des PME, ou écrivez-nous.",
    eyebrow: "Contact",
    titre: "Réservez",
    accent: "un diagnostic",
    intro:
      "Choisissez le créneau qui vous convient. Si vous préférez écrire, le formulaire plus bas fonctionne tout aussi bien.",
    ecrire: "Ou écrivez-nous",
    ecrireTitre: "Dites-nous ce qui vous bloque",
    ecrireSous: "Plus vous êtes précis, plus notre première réponse sera utile.",
    direct: "Nous joindre directement",
    adresse: "Adresse",
  },
};

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  return {
    title: T[lang].metaTitre,
    description: T[lang].metaDescription,
    alternates: alternances(lang, "contact"),
  };
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!estLangue(lang)) return null;
  const t = T[lang];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} titre={t.titre} titreAccent={t.accent} intro={t.intro} />

      <Section>
        <BookingEmbed langue={lang} />
      </Section>

      <Section id="formulaire" tone="creuse">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          <div>
            <SectionHeading eyebrow={t.ecrire} title={t.ecrireTitre} subtitle={t.ecrireSous} />
            <div className="mt-10 max-w-xl">
              <QualifyingForm langue={lang} />
            </div>
          </div>

          <aside>
            <h2 className="text-xs font-medium tracking-[0.18em] text-ink uppercase">
              {t.direct}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li>
                <a
                  href={`tel:${entreprise.telephone.replace(/\s/g, "")}`}
                  className="text-brand underline underline-offset-4"
                >
                  {entreprise.telephoneAffiche}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${entreprise.courriel}`}
                  className="text-brand underline underline-offset-4"
                >
                  {entreprise.courriel}
                </a>
              </li>
            </ul>
            <h2 className="mt-8 text-xs font-medium tracking-[0.18em] text-ink uppercase">
              {t.adresse}
            </h2>
            <address className="mt-4 text-sm leading-relaxed text-ink-muted not-italic">
              {entreprise.adresse.rue}
              <br />
              {entreprise.adresse.ville}, {entreprise.adresse.region}{" "}
              {entreprise.adresse.codePostal}
            </address>
          </aside>
        </div>
      </Section>

      <Faq langue={lang} questions={faqCommune[lang]} />
    </>
  );
}

import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import { FinalCta, Faq } from "@/components/funnel";
import { etapesMethode } from "@/content/methode";
import { faqCommune } from "@/content/faq";
import { alternances, estLangue } from "@/lib/i18n";

const T = {
  en: {
    metaTitre: "Our Consulting Process",
    metaDescription:
      "A 45-minute discovery call, a 90-day roadmap, video check-ins every two weeks and ongoing growth. What you get at each step.",
    eyebrow: "Our process",
    titre: "What happens after",
    accent: "the first call",
    intro:
      "Four steps, all done remotely. For each: what we do, what you get, and what we need from you.",
    etapes: "The steps",
    etapesTitre: "From discovery call to growth",
    etape: "Step",
    faisons: "What we do",
    obtenez: "What you get",
    attendons: "What we need from you",
    ctaTitre: "The first step takes forty-five minutes",
    ctaTexte:
      "It's free, with no commitment. It's the only honest way to know whether the next steps make sense.",
  },
  fr: {
    metaTitre: "Notre méthode d'accompagnement",
    metaDescription:
      "Diagnostic de 45 minutes, feuille de route de 90 jours, suivi vidéo toutes les deux semaines et croissance en continu. Ce que vous obtenez à chaque étape.",
    eyebrow: "Méthode",
    titre: "Ce qui se passe après",
    accent: "le premier rendez-vous",
    intro:
      "Quatre étapes, toutes à distance. Pour chacune, ce que nous faisons, ce que vous obtenez, et ce que nous attendons de vous.",
    etapes: "Les étapes",
    etapesTitre: "Du diagnostic à la croissance",
    etape: "Étape",
    faisons: "Ce que nous faisons",
    obtenez: "Ce que vous obtenez",
    attendons: "Ce qu'on attend de vous",
    ctaTitre: "La première étape dure quarante-cinq minutes",
    ctaTexte:
      "Elle est sans frais et sans suite obligatoire. C'est le seul moyen honnête de savoir si la suite a du sens.",
  },
};

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/methode">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  return {
    title: T[lang].metaTitre,
    description: T[lang].metaDescription,
    alternates: alternances(lang, "methode"),
  };
}

export default async function MethodePage({ params }: PageProps<"/[lang]/methode">) {
  const { lang } = await params;
  if (!estLangue(lang)) return null;
  const t = T[lang];
  const etapes = etapesMethode[lang];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} titre={t.titre} titreAccent={t.accent} intro={t.intro} />

      <Section tone="creuse">
        <SectionHeading eyebrow={t.etapes} title={t.etapesTitre} />

        <ol
          className="methode relative mt-12 border-t border-line-strong pl-12 sm:pl-16"
          style={{ "--etapes": etapes.length } as CSSProperties}
        >

          <span
            aria-hidden="true"
            className="absolute top-14 bottom-10 left-[7px] w-0.5 sm:top-[3.4rem] sm:left-[10px]"
          >
            <span className="absolute inset-0 bg-line-strong" />
            <span className="methode-tige absolute inset-0 origin-top bg-brand" />

            <span className="methode-pointe absolute inset-0">
              <span className="absolute bottom-0 left-1/2 size-0 -translate-x-1/2 translate-y-1/2 border-x-[6px] border-t-[9px] border-x-transparent border-t-brand" />
            </span>
          </span>

          {etapes.map((etape, i) => (
            <li
              key={etape.numero}
              className="relative border-b border-line"
              style={{ "--rang": i } as CSSProperties}
            >

              <span
                aria-hidden="true"
                className="methode-jalon absolute top-14 -left-12 size-4 rounded-full border-2 border-brand bg-surface sm:top-[3.4rem] sm:-left-16 sm:size-[1.375rem]"
              />

              <div className="methode-texte grid gap-x-10 gap-y-6 py-10 lg:grid-cols-[14rem_1fr]">
                <div className="flex items-baseline gap-5 lg:block">

                  <span
                    aria-hidden="true"
                    data-numero={etape.numero}
                    className="font-display text-[3.2rem] leading-none font-extrabold tracking-[-0.05em] text-brand/25 before:content-[attr(data-numero)]"
                  />
                  <div className="lg:mt-3">
                    <h2 className="font-display text-[1.3rem] leading-tight font-bold tracking-[-0.02em] text-ink">
                      <span className="sr-only">
                        {t.etape} {etape.numero}
                        {lang === "en" ? ": " : " : "}
                      </span>
                      {etape.titre}
                    </h2>
                    <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.72rem] tracking-[0.16em] text-ink-muted uppercase">
                      {etape.duree}
                    </p>
                  </div>
                </div>

                <dl className="grid gap-8 sm:grid-cols-3">
                  <div>
                    <dt className="text-[0.68rem] font-medium tracking-[0.2em] text-ink-muted uppercase">
                      {t.faisons}
                    </dt>
                    <dd className="mt-3 text-[0.92rem] leading-[1.75] text-ink-muted">
                      {etape.action}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.68rem] font-medium tracking-[0.2em] text-brand uppercase">
                      {t.obtenez}
                    </dt>
                    <dd className="mt-3 text-[0.92rem] leading-[1.75] text-ink">
                      {etape.livrable}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.68rem] font-medium tracking-[0.2em] text-ink-muted uppercase">
                      {t.attendons}
                    </dt>
                    <dd className="mt-3 text-[0.92rem] leading-[1.75] text-ink-muted">
                      {etape.attenduDuClient}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Faq langue={lang} questions={faqCommune[lang]} />

      <FinalCta langue={lang} titre={t.ctaTitre} texte={t.ctaTexte} />
    </>
  );
}

import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import { FinalCta } from "@/components/funnel";
import { Ecart } from "@/components/scenes/ecart";
import { services } from "@/content/services";
import { couts } from "@/content/constat";
import { alternances, estLangue } from "@/lib/i18n";

const T = {
  en: {
    metaTitre: "Branding, Positioning & Growth Services",
    metaDescription:
      "Business operations, branding, brand positioning and growth strategy for small businesses.",
    eyebrow: "Services",
    titre: "What we solve,",
    accent: "and for whom",
    intro:
      "Every service starts from a real problem. If you don't recognize yours, the discovery call is there to name it.",
    impact: "The impact",
    impactTitre: "The problem isn't one bad month.",
    impactAccent: "It's the whole year",
    impactSous:
      "A small gap each month goes unnoticed. After twelve months, it's the distance between two trajectories.",
    entreprises: "For small businesses",
    ctaTitre: "Let's look at your situation",
    ctaTexte:
      "You leave the discovery call with a clear read on your situation, whether we work together or not.",
  },
  fr: {
    metaTitre: "Services marketing et accompagnement",
    metaDescription:
      "Structuration opérationnelle, branding, positionnement et accompagnement à la croissance pour les PME.",
    eyebrow: "Services",
    titre: "Ce que nous réglons,",
    accent: "et pour qui",
    intro:
      "Chaque service part d'un problème concret. Si vous ne reconnaissez pas le vôtre, le diagnostic sert justement à le nommer.",
    impact: "L'impact",
    impactTitre: "Le problème n'est pas un mois raté.",
    impactAccent: "C'est l'année",
    impactSous:
      "Un écart de quelques points par mois ne se voit pas. Au bout de douze, il est devenu la distance entre deux trajectoires.",
    entreprises: "Pour les entreprises",
    ctaTitre: "Regardons votre situation",
    ctaTexte:
      "Vous repartez du diagnostic avec une lecture claire de votre situation, que nous travaillions ensemble ou non.",
  },
};

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/services">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  return {
    title: T[lang].metaTitre,
    description: T[lang].metaDescription,
    alternates: alternances(lang, "services"),
  };
}

export default async function ServicesPage({ params }: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!estLangue(lang)) return null;
  const t = T[lang];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} titre={t.titre} titreAccent={t.accent} intro={t.intro} />

      <Section id="impact" tone="creuse">
        <SectionHeading
          eyebrow={t.impact}
          title={
            <>
              {t.impactTitre} <em className="text-brand italic">{t.impactAccent}</em>
            </>
          }
          subtitle={t.impactSous}
        />

        <Ecart langue={lang} className="mt-16" />

        <ul className="grille-filets mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {couts[lang].map((cout) => (
            <li
              key={cout.cle}
              className="group bg-surface-raised p-8 transition-colors duration-500 hover:bg-surface"
            >
              <p className="font-display text-[clamp(1.6rem,2.4vw,2.05rem)] leading-[1.05] font-extrabold tracking-[-0.035em] text-ink">
                {cout.mot}
              </p>
              <span
                aria-hidden="true"
                className="mt-5 block h-px w-8 bg-brand/40 transition-all duration-500 group-hover:w-16 group-hover:bg-brand"
              />
              <p className="mt-5 text-[0.9rem] leading-[1.7] text-ink-muted">
                {cout.texte}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="entreprises" grille>
          <SectionHeading eyebrow="Services" title={t.entreprises} />

          <div className="mt-12 border-t border-line-strong">
            {services[lang].map((service) => (
              <article
                key={service.slug}
                className="group grid gap-x-10 gap-y-4 border-b border-line py-8 transition-[padding-left] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-3 md:grid-cols-[16rem_1fr_1fr]"
              >
                <h3 className="font-display text-[1.2rem] leading-tight font-bold tracking-[-0.02em] text-ink">
                  {service.nom}
                </h3>
                <p className="text-[0.95rem] leading-[1.8] text-ink-muted">
                  {service.probleme}
                </p>
                <p className="flex items-start gap-3 text-[0.95rem] leading-[1.8] text-ink">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-2.5 shrink-0 rounded-full border-2 border-brand transition-colors duration-500 group-hover:bg-brand"
                  />
                  {service.resultat}
                </p>
              </article>
            ))}
          </div>
      </Section>

      <FinalCta langue={lang} titre={t.ctaTitre} texte={t.ctaTexte} />
    </>
  );
}

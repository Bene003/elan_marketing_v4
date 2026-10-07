import type { Metadata } from "next";
import { ButtonLink, Card, PageHero, Section, SectionHeading } from "@/components/ui";
import { FinalCta } from "@/components/funnel";
import { entreprise } from "@/content/entreprise";
import { alternances, estLangue, lien, type Langue } from "@/lib/i18n";

const T = {
  en: {
    metaTitre: "About Us",
    metaDescription:
      "Superflux was founded by Yliès El Safadi, an entrepreneur since 19, to help small businesses structure their operations and grow. Our story and values.",
    eyebrow: "About",
    titre: "One founder, an outside perspective,",
    accent: "and concrete action",
    intro:
      "Superflux helps small businesses structure how they work, improve how they run and speed up their growth. It starts from one principle: understand before you recommend.",
    histoire: "The story",
    histoireTitre: "An entrepreneur since the age of 19",
    histoireTextes: [
      "Yliès El Safadi has led several projects in marketing, sales and business development. What drives him isn't selling a service: it's helping entrepreneurs develop, structure and grow their companies.",
      "Superflux grew out of his previous agency, Élan, which was focused on selling marketing products and services. Superflux goes further: it looks at a business as a whole, its offer, its clients, its organization, its sales, its problems and its opportunities.",
      "Having lived in France, the Caribbean and Canada, he brings an outside perspective, never locked into a single industry or market.",
      "His approach: analyze, clarify priorities, identify what can really be improved, then turn recommendations into concrete actions that fit each company's reality, resources and goals.",
    ],
    joindre: "Get in touch",
    telephone: "Phone",
    courriel: "Email",
    equipe: "The team",
    equipeTitre: "One founder,",
    equipeAccent: "and the right experts at the right time",
    equipeSous:
      "Yliès runs every engagement himself. When a project needs it, he brings in trusted outside specialists, so you get the right skills without the overhead of a big agency.",
    role: "Analysis, strategy, structuring, coaching, and coordination of the outside experts.",
    expertsTitre: "Outside specialists, as needed",
    experts: ["Design", "Video", "Web development", "Content creation", "Advertising", "CRM"],
    portrait: "Portrait coming soon",
    valeurs: "Values",
    valeursTitre: "What we stand for",
    collaborer: "Collaborators",
    collaborerTitre: "Work with Superflux",
    collaborerSous:
      "Superflux works with outside specialists in design, video, web development, content, advertising and CRM. If that's your field, write to us.",
    ecrire: "Write to us",
    ctaTitre: "Let's talk about your business",
    ctaTexte: "A first conversation, by video call.",
  },
  fr: {
    metaTitre: "À propos",
    metaDescription:
      "Superflux a été fondé par Yliès El Safadi, entrepreneur depuis l'âge de 19 ans, pour aider les PME à se structurer et à grandir. Notre histoire et nos valeurs.",
    eyebrow: "À propos",
    titre: "Un fondateur, un regard extérieur,",
    accent: "et des actions concrètes",
    intro:
      "Superflux aide les PME à se structurer, à mieux fonctionner et à accélérer leur développement. Tout part d'un principe : comprendre avant de proposer.",
    histoire: "L'histoire",
    histoireTitre: "Entrepreneur depuis l'âge de 19 ans",
    histoireTextes: [
      "Yliès El Safadi a mené plusieurs projets en marketing, en vente et en développement d'activité. Ce qui l'intéresse n'est pas de vendre un service : c'est d'accompagner des entrepreneurs dans le développement, la structuration et la croissance de leur entreprise.",
      "Superflux est né de l'évolution de son ancienne agence, Élan, plus centrée sur la vente de produits et de services marketing. Superflux va plus loin : il regarde l'entreprise dans son ensemble, son offre, ses clients, son organisation, ses ventes, ses problèmes et ses possibilités.",
      "Pour avoir vécu en France, dans les Caraïbes et au Canada, il apporte un regard extérieur, qui ne s'enferme dans aucun secteur ni aucun marché.",
      "Sa démarche : analyser, clarifier les priorités, repérer ce qui peut vraiment être amélioré, puis transformer les recommandations en actions concrètes, adaptées à la réalité, aux moyens et aux objectifs de chaque entreprise.",
    ],
    joindre: "Nous joindre",
    telephone: "Téléphone",
    courriel: "Courriel",
    equipe: "L'équipe",
    equipeTitre: "Un fondateur,",
    equipeAccent: "et les bons experts au bon moment",
    equipeSous:
      "Yliès mène chaque accompagnement lui-même. Quand un projet le demande, il fait appel à des collaborateurs externes de confiance : les bonnes compétences au bon moment, sans alourdir la structure.",
    role: "Analyse, stratégie, structuration, accompagnement et coordination des experts externes.",
    expertsTitre: "Des collaborateurs externes, selon les besoins",
    experts: ["Design", "Vidéo", "Développement web", "Création de contenu", "Publicité", "CRM"],
    portrait: "Portrait à venir",
    valeurs: "Valeurs",
    valeursTitre: "Ce à quoi nous tenons",
    collaborer: "Collaborateurs",
    collaborerTitre: "Travailler avec Superflux",
    collaborerSous:
      "Superflux fait appel à des collaborateurs externes en design, vidéo, développement web, contenu, publicité et CRM. Si c'est votre métier, écrivez-nous.",
    ecrire: "Nous écrire",
    ctaTitre: "Parlons de votre entreprise",
    ctaTexte: "Un premier échange, en visioconférence.",
  },
};

const valeurs: Record<Langue, { titre: string; texte: string }[]> = {
  fr: [
    {
      titre: "Curiosité",
      texte:
        "S'intéresser à chaque entreprise, à son secteur, à ses clients et à son environnement, et observer ce qui fonctionne ailleurs pour ouvrir de nouvelles possibilités.",
    },
    {
      titre: "Clarté",
      texte:
        "Simplifier les problèmes et structurer les priorités, pour que vous sachiez exactement quoi faire ensuite.",
    },
    {
      titre: "Pragmatisme",
      texte:
        "Transformer les idées et les recommandations en actions concrètes, réalisables et adaptées à la réalité, aux objectifs et aux moyens de chaque entrepreneur.",
    },
  ],
  en: [
    {
      titre: "Curiosity",
      texte:
        "Taking a real interest in each business, its industry, its clients and its environment, and looking at what works elsewhere to open up new possibilities.",
    },
    {
      titre: "Clarity",
      texte:
        "Simplifying problems and structuring priorities, so you know exactly what to do next.",
    },
    {
      titre: "Pragmatism",
      texte:
        "Turning ideas and recommendations into concrete, achievable actions that fit each entrepreneur's reality, goals and resources.",
    },
  ],
};

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/a-propos">): Promise<Metadata> {
  const { lang } = await params;
  if (!estLangue(lang)) return {};
  return {
    title: T[lang].metaTitre,
    description: T[lang].metaDescription,
    alternates: alternances(lang, "a-propos"),
  };
}

export default async function AProposPage({ params }: PageProps<"/[lang]/a-propos">) {
  const { lang } = await params;
  if (!estLangue(lang)) return null;
  const t = T[lang];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} titre={t.titre} titreAccent={t.accent} intro={t.intro} />

      <Section tone="creuse">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow={t.histoire} title={t.histoireTitre} />
            <div className="mt-8 max-w-2xl space-y-5 text-[1rem] leading-[1.85] text-ink-muted">
              {t.histoireTextes.map((texte) => (
                <p key={texte.slice(0, 24)}>{texte}</p>
              ))}
            </div>
          </div>

          <div className="lg:pt-20">
            <h2 className="text-[0.68rem] font-medium tracking-[0.2em] text-ink-muted uppercase">
              {t.joindre}
            </h2>
            <dl className="mt-4 border-t border-line-strong">
              {[
                { terme: t.telephone, valeur: entreprise.telephoneAffiche },
                { terme: t.courriel, valeur: entreprise.courriel },
              ].map((ligne) => (
                <div key={ligne.terme} className="border-b border-line py-5">
                  <dt className="text-[0.68rem] font-medium tracking-[0.2em] text-ink-muted uppercase">
                    {ligne.terme}
                  </dt>
                  <dd className="mt-1.5 text-[0.95rem] break-words text-ink">{ligne.valeur}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section grille>
        <SectionHeading
          eyebrow={t.equipe}
          title={
            <>
              {t.equipeTitre} <em className="text-brand italic">{t.equipeAccent}</em>
            </>
          }
          subtitle={t.equipeSous}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Card>
            <div className="flex items-start gap-5">
              <span
                aria-hidden="true"
                title={t.portrait}
                className="grid size-16 shrink-0 place-items-center rounded-full border-2 border-brand/25 font-display text-lg font-extrabold tracking-wider text-brand"
              >
                {entreprise.representant
                  .split(/\s+/)
                  .slice(0, 2)
                  .map((mot) => mot[0])
                  .join("")
                  .toUpperCase()}
              </span>
              <div>
                <h3 className="font-display text-[1.2rem] font-bold tracking-[-0.02em] text-ink">
                  {entreprise.representant}
                </h3>
                <p className="mt-1 text-[0.82rem] font-medium tracking-[0.1em] text-brand uppercase">
                  {entreprise.fonction[lang]}, {entreprise.nom}
                </p>
                <p className="mt-4 text-[0.95rem] leading-[1.8] text-ink-muted">{t.role}</p>
              </div>
            </div>
          </Card>

          <div>
            <h3 className="font-display text-[1.05rem] font-semibold text-ink">{t.expertsTitre}</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {t.experts.map((expert) => (
                <li
                  key={expert}
                  className="rounded-full border border-line-strong bg-surface px-4 py-2 text-[0.85rem] text-ink"
                >
                  {expert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="creuse">
        <SectionHeading eyebrow={t.valeurs} title={t.valeursTitre} />
        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
          {valeurs[lang].map((valeur, i) => (
            <div key={valeur.titre}>
              <span
                aria-hidden="true"
                className="font-display text-[0.72rem] font-semibold tracking-[0.2em] text-brand"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="filet mt-4 mb-6 w-16 bg-brand/30" />
              <h3 className="font-display text-[1.15rem] leading-snug font-bold text-ink">
                {valeur.titre}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-[1.8] text-ink-muted">{valeur.texte}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="carriere" grille>
        <SectionHeading eyebrow={t.collaborer} title={t.collaborerTitre} subtitle={t.collaborerSous} />
        <ButtonLink href={lien(lang, "contact")} variant="secondary" className="mt-8">
          {t.ecrire}
        </ButtonLink>
      </Section>

      <FinalCta langue={lang} titre={t.ctaTitre} texte={t.ctaTexte} />
    </>
  );
}

import {
  Anneaux,
  ButtonLink,
  Card,
  Container,
  Display,
  Section,
  SectionHeading,
} from "@/components/ui";
import { Reveal } from "@/components/scenes/reveal";
import { ChiffreVivant } from "@/components/scenes/chiffre";
import type {
  Douleur,
  Etape,
  QuestionFaq,
  Resultat,
} from "@/content/parcours";
import type { EtudeDeCas } from "@/content/cas";
import type { CSSProperties } from "react";
import { tarifs } from "@/content/tarifs";
import { lien, type Langue } from "@/lib/i18n";

const T = {
  en: {
    constat: "The challenge",
    obtenez: "What you get",
    methode: "Our process",
    resultats: "Results",
    casTitre: "What it looks like in practice",
    casSous:
      "The starting problem, what we did, and what changed. Every number comes with its time frame: a result without one proves nothing.",
    anonyme: "Anonymized case",
    depart: "Starting point",
    fait: "What we put in place",
    change: "What changed",
    reserve:
      "These are real-world situations, not a promise. No result is guaranteed: every context is different, and that's exactly what the discovery call is for.",
    tarifs: "Pricing",
    tarifsTitre: "How much does it cost?",
    reserver: "Book a discovery call",
    pourquoi: "Why us",
    questions: "FAQ",
    faqTitre: "Frequently asked questions",
    guillemets: ["\u201c", "\u201d"],
  },
  fr: {
    constat: "Le constat",
    obtenez: "Ce que vous obtenez",
    methode: "La méthode",
    resultats: "Résultats",
    casTitre: "Ce que ça donne concrètement",
    casSous:
      "Le problème de départ, ce que nous avons fait, et ce qui a changé. Chaque chiffre vient avec sa période : un résultat sans sa fenêtre de temps ne prouve rien.",
    anonyme: "Cas anonymisé",
    depart: "Le point de départ",
    fait: "Ce qui a été mis en place",
    change: "Ce qui a changé",
    reserve:
      "Ce sont des situations réelles, pas une promesse. Aucun résultat n'est garanti : chaque contexte est différent, et c'est justement ce que le diagnostic sert à regarder.",
    tarifs: "Tarifs",
    tarifsTitre: "Combien ça coûte",
    reserver: "Réserver un diagnostic",
    pourquoi: "Pourquoi nous",
    questions: "Questions",
    faqTitre: "Ce qu'on nous demande souvent",
    guillemets: ["« ", " »"],
  },
};

export function PainCards({
  langue,
  titre,
  sousTitre,
  douleurs,
  ouvreLaPage = false,
}: {
  langue: Langue;
  titre: string;

  sousTitre?: string;
  douleurs: Douleur[];

  ouvreLaPage?: boolean;
}) {
  const [principale, ...secondaires] = douleurs;

  const TitreCarte = ouvreLaPage ? "h2" : "h3";

  return (
    <Section tone="sombre" grille className={ouvreLaPage ? "pt-16 sm:pt-20" : ""}>
      <SectionHeading
        eyebrow={T[langue].constat}
        title={titre}
        subtitle={sousTitre}
        tone="sombre"
        as={ouvreLaPage ? "h1" : "h2"}
        taille={ouvreLaPage ? "geant" : "grand"}
      />

      <div className="grille-filets-invert mt-14 grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="lg:row-span-2">
          <article className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden bg-surface-invert p-9 transition-colors duration-500 hover:bg-invert-raised sm:p-11">

            <span
              aria-hidden="true"
              className="absolute top-6 right-6 size-40 rounded-full border border-accent/15 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 sm:size-52"
            />
            <span
              aria-hidden="true"
              className="absolute top-6 right-6 size-40 scale-[0.62] rounded-full border border-dashed border-accent/10 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-75 sm:size-52"
            />
            <span className="font-display text-[0.72rem] font-semibold tracking-[0.2em] text-accent">
              01
            </span>
            <TitreCarte className="mt-8 font-display text-[1.6rem] leading-tight font-bold text-ink-invert">
              {principale.titre}
            </TitreCarte>
            <p className="mt-4 max-w-md text-[0.95rem] leading-[1.8] text-ink-invert-muted">
              {principale.texte}
            </p>
          </article>
        </Reveal>

        {secondaires.map((douleur, i) => (
          <Reveal key={douleur.titre} delay={(i + 1) * 90}>
            <article className="h-full bg-surface-invert p-9 transition-colors duration-500 hover:bg-invert-raised sm:p-11">
              <span className="font-display text-[0.72rem] font-semibold tracking-[0.2em] text-accent">
                {String(i + 2).padStart(2, "0")}
              </span>
              <TitreCarte className="mt-8 font-display text-[1.25rem] leading-tight font-bold text-ink-invert">
                {douleur.titre}
              </TitreCarte>
              <p className="mt-3 text-[0.95rem] leading-[1.8] text-ink-invert-muted">
                {douleur.texte}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Outcomes({
  langue,
  titre,
  resultats,
}: {
  langue: Langue;
  titre: string;
  resultats: Resultat[];
}) {
  return (
    <Section grille>
      <SectionHeading eyebrow={T[langue].obtenez} title={titre} />
      <div className="mt-14 grid gap-x-14 gap-y-2 sm:grid-cols-2">
        {resultats.map((resultat, i) => (
          <Reveal key={resultat.titre} delay={i * 70}>
            <div className="group border-t-2 border-line py-7 transition-colors duration-500 hover:border-brand">
              <h3 className="flex items-start gap-3 font-display text-[1.05rem] font-semibold text-ink">

                <span
                  aria-hidden="true"
                  className="mt-1.5 size-2.5 shrink-0 rounded-full border-2 border-brand transition-colors duration-500 group-hover:bg-brand"
                />
                {resultat.titre}
              </h3>
              <p className="mt-2.5 pl-[1.4rem] text-[0.95rem] leading-[1.8] text-ink-muted">
                {resultat.texte}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ProcessSteps({
  langue,
  titre,
  etapes,
}: {
  langue: Langue;
  titre: string;
  etapes: Etape[];
}) {
  return (
    <Section tone="creuse">
      <SectionHeading eyebrow={T[langue].methode} title={titre} />
      <ol className="mt-14 border-t border-line-strong">
        {etapes.map((etape, i) => (

          <Reveal
            key={etape.numero}
            delay={i * 80}
            as="li"
            className="group grid grid-cols-[3rem_1fr] items-start gap-x-6 gap-y-3 border-b border-line py-8 transition-[padding-left] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-3 md:grid-cols-[5rem_1fr_1.1fr] md:gap-x-10"
          >
            <span className="font-display text-[0.72rem] font-semibold tracking-[0.2em] text-brand md:pt-1.5">
              {String(etape.numero).padStart(2, "0")}
            </span>
            <h3 className="font-display text-[1.3rem] leading-tight font-bold tracking-[-0.02em] text-ink">
              {etape.titre}
            </h3>
            <p className="col-start-2 text-[0.95rem] leading-[1.8] text-ink-muted md:col-start-3">
              {etape.livrable}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function CaseStudies({ langue, cas }: { langue: Langue; cas: EtudeDeCas[] }) {
  const t = T[langue];
  return (
    <Section grille>
      <SectionHeading eyebrow={t.resultats} title={t.casTitre} subtitle={t.casSous} />
      <div className="cas grille-filets mt-14 grid-cols-1 lg:grid-cols-2">
        {cas.map((etude, i) => (
          <Reveal key={etude.slug} delay={i * 90}>
            <article
              className="carte flex h-full flex-col bg-surface p-8"
              style={{ "--rang": i } as CSSProperties}
            >

              <div className="flex items-start gap-4">
                {etude.clientName ? (
                  <span
                    aria-hidden="true"
                    className="grid size-11 shrink-0 place-items-center border border-line bg-surface-raised font-display text-xs font-extrabold tracking-wider text-brand"
                  >
                    {monogramme(etude.clientName)}
                  </span>
                ) : null}
                <div>
                  <p className="font-display text-[0.95rem] leading-tight font-bold text-ink">
                    {etude.clientName ?? t.anonyme}
                  </p>
                  <p className="mt-1 text-[0.8rem] leading-snug text-ink-muted">
                    {etude.contexte}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <ChiffreVivant
                    valeur={etude.chiffre.valeur}
                    className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] leading-none font-extrabold tracking-[-0.04em] text-brand"
                  />

                  <div
                    aria-hidden="true"
                    className="mt-4 h-0.5 w-2/3 bg-line-strong/60"
                  >
                    <span className="cas-jauge block h-full origin-left bg-brand" />
                  </div>
                  <div className="mt-3 text-[0.82rem] leading-snug text-ink-muted">
                    {etude.chiffre.libelle}
                  </div>
                </div>
                {etude.chiffreSecondaire ? (
                  <div>
                    <ChiffreVivant
                      valeur={etude.chiffreSecondaire.valeur}
                      className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] leading-none font-extrabold tracking-[-0.04em] text-accent"
                    />
                    <div className="mt-6 text-[0.82rem] leading-snug text-ink-muted">
                      {etude.chiffreSecondaire.libelle}
                    </div>
                  </div>
                ) : null}
              </div>

              <p className="mt-4 text-xs tracking-wide text-ink-muted">
                {etude.chiffre.periode}
              </p>

              {etude.temoignage ? (
                <figure className="mt-7 border-l-2 border-brand/40 pl-5">
                  <blockquote className="text-[0.92rem] leading-[1.8] text-ink italic">
                    {t.guillemets[0]}
                    {etude.temoignage.citation}
                    {t.guillemets[1]}
                  </blockquote>
                  <figcaption className="mt-2 text-xs text-ink-muted">
                    {etude.temoignage.auteur}
                  </figcaption>
                </figure>
              ) : null}

              <dl className="mt-auto space-y-5 pt-7">
                {(
                  [
                    [t.depart, etude.probleme],
                    [t.fait, etude.intervention],
                    [t.change, etude.changement],
                  ] as const
                ).map(([terme, texte]) => (
                  <div key={terme}>
                    <dt className="text-[0.68rem] font-medium tracking-[0.2em] text-brand uppercase">
                      {terme}
                    </dt>
                    <dd className="mt-1.5 text-[0.92rem] leading-[1.75] text-ink-muted">{texte}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 flex max-w-2xl items-start gap-3 text-[0.85rem] leading-[1.7] text-ink-muted">
        <span
          aria-hidden="true"
          className="mt-2 h-px w-6 shrink-0 bg-line-strong"
        />
        {t.reserve}
      </p>
    </Section>
  );
}

function monogramme(nom: string) {
  return nom
    .split(/\s+/)
    .slice(0, 2)
    .map((mot) => mot[0])
    .join("")
    .toUpperCase();
}

export function PricingSlot({ langue }: { langue: Langue }) {
  const t = T[langue];
  const grille = tarifs[langue];
  return (
    <Section grille>
      <SectionHeading eyebrow={t.tarifs} title={t.tarifsTitre} align="center" />
      <div className="mx-auto mt-12 max-w-2xl">
        {grille.status === "pending" ? (
          <Card className="border-brand/25 text-center">
            <p className="text-[0.98rem] leading-[1.8] text-ink-muted">
              {grille.message}
            </p>
            <ButtonLink href={lien(langue, "contact")} className="mt-8" withArrow>
              {t.reserver}
            </ButtonLink>
          </Card>
        ) : (
          <div className="grille-filets grid-cols-1 sm:grid-cols-2">
            {grille.offres.map((offre) => (
              <div key={offre.nom} className="carte bg-surface p-8">
                <h3 className="font-display text-[1.05rem] font-semibold text-ink">
                  {offre.nom}
                </h3>
                <p className="mt-3 font-display text-[2.4rem] leading-none font-extrabold tracking-[-0.04em] text-brand">
                  {offre.prix}
                </p>
                <p className="mt-2 text-xs text-ink-muted">{offre.precision}</p>
                <ul className="mt-7 space-y-3 text-sm leading-relaxed text-ink-muted">
                  {offre.inclus.map((ligne) => (
                    <li key={ligne} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-2 shrink-0 rounded-full border-2 border-brand"
                      />
                      {ligne}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

export function WhyUs({
  langue,
  titre,
  points,
}: {
  langue: Langue;
  titre: string;
  points: Resultat[];
}) {
  return (
    <Section tone="creuse">
      <SectionHeading eyebrow={T[langue].pourquoi} title={titre} />
      <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-3">
        {points.map((point, i) => (
          <Reveal key={point.titre} delay={i * 80}>
            <div>
              <span
                aria-hidden="true"
                className="font-display text-[0.72rem] font-semibold tracking-[0.2em] text-brand"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="filet mt-4 mb-6 w-16 bg-brand/30" />
              <h3 className="font-display text-[1.15rem] leading-snug font-bold text-ink">
                {point.titre}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-[1.8] text-ink-muted">
                {point.texte}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Faq({
  langue,
  questions,
}: {
  langue: Langue;
  questions: QuestionFaq[];
}) {
  return (
    <Section>

      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow={T[langue].questions} title={T[langue].faqTitre} />
        <div className="border-t border-line-strong">
          {questions.map((item) => (
            <details
              key={item.question}
              className="group border-b border-line py-6"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-[1.05rem] leading-snug font-semibold text-ink transition-colors duration-300 marker:content-none hover:text-brand">
                {item.question}
                <span
                  aria-hidden="true"
                  className="relative mt-1 grid size-7 shrink-0 place-items-center rounded-full border border-line-strong transition-colors duration-300 group-hover:border-brand group-open:border-brand"
                >
                  <span className="absolute h-px w-3 bg-brand" />
                  <span className="absolute h-3 w-px bg-brand transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:scale-y-0" />
                </span>
              </summary>
              <p className="mt-4 pr-12 text-[0.95rem] leading-[1.85] text-ink-muted">
                {item.reponse}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function FinalCta({
  langue,
  titre,
  texte,
}: {
  langue: Langue;
  titre: string;
  texte: string;
}) {
  return (
    <section className="sur-sombre relative isolate overflow-hidden bg-surface-invert py-24 text-ink-invert sm:py-32">
      <div
        aria-hidden="true"
        className="grille-invert grille-fondue pointer-events-none absolute inset-0 -z-10"
      />

      <Anneaux className="top-1/2 left-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 sm:size-[42rem]" />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Display as="h2" taille="grand" className="text-ink-invert">
            {titre}
          </Display>
          <p className="mx-auto mt-6 max-w-lg text-[1.02rem] leading-[1.8] text-ink-invert-muted">
            {texte}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href={lien(langue, "contact")} variant="invert" withArrow>
              {T[langue].reserver}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

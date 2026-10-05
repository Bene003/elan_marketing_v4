import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import { etapesMethode } from "@/content/methode";
import { faqCommune } from "@/content/faq";
import { etudesDeCas } from "@/content/cas";
import { lien, type Langue } from "@/lib/i18n";

const RUBAN = {
  en: { texte: "Free 45-minute discovery call, no strings attached.", lien: "Book now" },
  fr: {
    texte: "Diagnostic de 45 minutes, sans frais et sans suite obligatoire.",
    lien: "Réserver",
  },
};

export function Ruban({ langue }: { langue: Langue }) {
  const t = RUBAN[langue];
  return (
    <div className="sur-sombre bg-brand-strong text-on-brand">
      <Container className="flex min-h-9 flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-[0.78rem] leading-snug">
        <span>{t.texte}</span>
        <Link
          href={lien(langue, "contact")}
          className="inline-flex items-center gap-1 font-semibold underline underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {t.lien}
          <ArrowRight aria-hidden="true" className="size-3.5" />
        </Link>
      </Container>
    </div>
  );
}

const RAISONS = {
  fr: [
    {
      cle: "comprendre",
      numero: "01",
      titre: "On cherche le vrai frein",
      texte:
        "Ce qui coûte le plus cher est rarement ce qu'on vient nous décrire. Le premier travail est de séparer le symptôme de sa cause.",
    },
    {
      cle: "prioriser",
      numero: "02",
      titre: "On choisit ce qui compte d'abord",
      texte:
        "Tout est faisable, pas tout en même temps. On ordonne les chantiers selon ce qu'ils changent réellement, et on assume de repousser le reste.",
    },
    {
      cle: "installer",
      numero: "03",
      titre: "On installe et on suit",
      texte:
        "Un plan qui reste un document ne produit rien. On met en place, on mesure, on corrige, et vous gardez ce qui a été construit.",
    },
  ],
  en: [
    {
      cle: "comprendre",
      numero: "01",
      titre: "We find the real bottleneck",
      texte:
        "What costs you the most is rarely what you first describe to us. The first job is separating the symptom from its cause.",
    },
    {
      cle: "prioriser",
      numero: "02",
      titre: "We pick what matters first",
      texte:
        "Everything is doable, just not all at once. We rank projects by what they actually change, and we're comfortable pushing the rest back.",
    },
    {
      cle: "installer",
      numero: "03",
      titre: "We implement and follow through",
      texte:
        "A plan that stays a document produces nothing. We put things in place, measure, adjust, and you keep what was built.",
    },
  ],
};

export function PourquoiSuperflux({ langue }: { langue: Langue }) {
  const en = langue === "en";
  return (
    <Section tone="creuse">
      <SectionHeading
        eyebrow={en ? "Why Superflux" : "Pourquoi Superflux"}
        title={
          en ? (
            <>
              The difference is made{" "}
              <em className="text-brand italic">before the proposal</em>
            </>
          ) : (
            <>
              La différence se joue{" "}
              <em className="text-brand italic">avant la proposition</em>
            </>
          )
        }
        subtitle={
          en
            ? "Three moments decide how our work together turns out. They're the ones we put the most care into."
            : "Trois moments décident du résultat d'un accompagnement. Ce sont ceux sur lesquels nous mettons le plus de soin."
        }
      />

      <ol className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
        {RAISONS[langue].map((raison) => (
          <li key={raison.cle} className="flex flex-col">
            <SchemaRaison cle={raison.cle} />
            <p className="mt-8 text-[0.7rem] font-medium tracking-[0.2em] text-brand uppercase">
              {raison.numero}
            </p>
            <h3 className="mt-3 font-display text-[1.35rem] leading-snug font-bold tracking-[-0.02em] text-ink">
              {raison.titre}
            </h3>
            <p className="mt-3 text-[0.92rem] leading-[1.75] text-ink-muted">
              {raison.texte}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function SchemaRaison({ cle }: { cle: string }) {

  const cadre =
    "schema-raison relative h-36 w-full overflow-clip rounded-3xl border border-line bg-surface";

  if (cle === "comprendre") {

    return (
      <div aria-hidden="true" className={cadre}>
        <svg viewBox="0 0 240 100" className="size-full">
          <path
            className="schema-trace schema-trace-suppose"
            pathLength={1}
            d="M10 70 C 70 74, 120 80, 230 84"
            fill="none"
            stroke="var(--color-line-strong)"
            strokeWidth="2"
            strokeDasharray="4 5"
          />
          <path
            className="schema-trace"
            pathLength={1}
            d="M10 70 C 70 68, 120 60, 230 24"
            fill="none"
            stroke="var(--color-brand)"
            strokeWidth="2"
          />
          <circle
            className="schema-jalon"
            style={{ "--rang": 0 } as CSSProperties}
            cx="10"
            cy="70"
            r="3.5"
            fill="var(--color-brand)"
          />
        </svg>
      </div>
    );
  }

  if (cle === "prioriser") {

    return (
      <div aria-hidden="true" className={cadre}>
        <div className="absolute inset-0 flex flex-col justify-center gap-3 px-8">
          {[
            { largeur: "w-full", fond: "bg-brand" },
            { largeur: "w-2/3", fond: "bg-line-strong" },
            { largeur: "w-1/3", fond: "bg-line" },
          ].map((barre, index) => (
            <span
              key={barre.largeur}
              style={{ "--rang": index } as CSSProperties}
              className={`schema-barre h-2.5 rounded-full ${barre.largeur} ${barre.fond}`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={cadre}>
      <svg viewBox="0 0 240 100" className="size-full">
        <path
          className="schema-trace"
          pathLength={1}
          d="M12 82 L 76 66 L 140 58 L 204 28"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="2"
        />
        {[
          [12, 82],
          [76, 66],
          [140, 58],
          [204, 28],
        ].map(([x, y], index) => (
          <circle
            key={`${x}-${y}`}
            className="schema-jalon"
            style={{ "--rang": index } as CSSProperties}
            cx={x}
            cy={y}
            r="4"
            fill="var(--color-surface)"
            stroke="var(--color-brand)"
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
  );
}

const PREUVE = {
  en: {
    eyebrow: "Results",
    titre: "Results that come",
    accent: "with their context",
    sous: "A number without its time frame or starting point proves nothing. Every case shows both.",
    voir: "See both cases in detail",
  },
  fr: {
    eyebrow: "Ce que ça donne",
    titre: "Des résultats qui viennent",
    accent: "avec leur contexte",
    sous: "Un chiffre sans sa période ni sa situation de départ ne prouve rien. Chaque cas est présenté avec les deux.",
    voir: "Voir les deux cas en détail",
  },
};

export function Preuve({ langue }: { langue: Langue }) {
  const t = PREUVE[langue];

  return (
    <Section tone="clair" grille>
      <SectionHeading
        eyebrow={t.eyebrow}
        title={
          <>
            {t.titre} <em className="text-brand italic">{t.accent}</em>
          </>
        }
        subtitle={t.sous}
      />

      <ul className="mt-12 grid gap-5 lg:grid-cols-2">
        {etudesDeCas[langue].map((cas) => (
          <li
            key={cas.slug}
            className="flex flex-col rounded-3xl border border-line bg-surface p-7 sm:p-8"
          >
            <p className="text-[0.82rem] leading-snug text-ink-muted">{cas.contexte}</p>
            <p className="mt-6 font-display text-[clamp(2rem,3.6vw,2.8rem)] leading-none font-extrabold tracking-[-0.04em] text-brand">
              {cas.chiffre.valeur}
            </p>
            <p className="mt-3 text-[0.95rem] leading-snug font-semibold text-ink">
              {cas.chiffre.libelle}
            </p>
            <p className="mt-2 text-xs tracking-wide text-ink-muted">{cas.chiffre.periode}</p>
            <p className="mt-6 text-[0.9rem] leading-[1.7] text-ink-muted">{cas.changement}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <ButtonLink href={lien(langue, "resultats")} variant="secondary" withArrow>
          {t.voir}
        </ButtonLink>
      </div>
    </Section>
  );
}

export function PremierEchange({ langue }: { langue: Langue }) {
  const trois = etapesMethode[langue].slice(0, 3);
  const en = langue === "en";

  return (
    <Section id="premier-echange" tone="creuse">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={en ? "The first conversation" : "Le premier échange"}
            title={
              en ? (
                <>
                  Forty-five minutes to see{" "}
                  <em className="text-brand italic">if it&apos;s a fit</em>
                </>
              ) : (
                <>
                  Quarante-cinq minutes pour savoir{" "}
                  <em className="text-brand italic">si c&apos;est pertinent</em>
                </>
              )
            }
            subtitle={
              en
                ? "Free, no commitment, by video call. You leave with a clear read on your situation, whether we work together or not."
                : "Sans frais, sans engagement, en visioconférence. Vous repartez avec une lecture de votre situation, que nous travaillions ensemble ou non."
            }
          />

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={lien(langue, "contact")} withArrow>
              {en ? "Book your discovery call" : "Réserver un créneau"}
            </ButtonLink>
            <ButtonLink href={lien(langue, "methode")} variant="secondary">
              {en ? "See our full process" : "Voir la méthode complète"}
            </ButtonLink>
          </div>
        </div>

        <ol
          className="methode relative pl-12 sm:pl-16"
          style={{ "--etapes": trois.length } as CSSProperties}
        >
          <span
            aria-hidden="true"
            className="absolute top-8 bottom-10 left-[7px] w-0.5 sm:left-[10px]"
          >
            <span className="absolute inset-0 bg-line-strong" />
            <span className="methode-tige absolute inset-0 origin-top bg-brand" />
            <span className="methode-pointe absolute inset-0">
              <span className="absolute bottom-0 left-1/2 size-0 -translate-x-1/2 translate-y-1/2 border-x-[6px] border-t-[9px] border-x-transparent border-t-brand" />
            </span>
          </span>

          {trois.map((etape, index) => (
            <li
              key={etape.numero}
              className="relative border-b border-line last:border-b-0"
              style={{ "--rang": index } as CSSProperties}
            >
              <span
                aria-hidden="true"
                className="methode-jalon absolute top-8 -left-12 size-4 rounded-full border-2 border-brand bg-surface sm:-left-16 sm:size-[1.375rem]"
              />
              <div className="methode-texte py-8">
                <div className="flex items-baseline gap-4">

                  <span
                    aria-hidden="true"
                    data-numero={etape.numero}
                    className="font-display text-[1.6rem] leading-none font-extrabold tracking-[-0.05em] text-brand/30 before:content-[attr(data-numero)]"
                  />
                  <h3 className="font-display text-[1.15rem] leading-snug font-bold text-ink">
                    <span className="sr-only">
                      {en ? `Step ${index + 1}: ` : `Étape ${index + 1} : `}
                    </span>
                    {etape.titre}
                  </h3>
                </div>
                <p className="mt-4 text-[0.9rem] leading-[1.7] text-ink-muted">
                  {etape.livrable}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function FaqCompacte({ langue }: { langue: Langue }) {
  const en = langue === "en";
  return (
    <Section id="faq" tone="clair">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow={en ? "FAQ" : "Questions fréquentes"}
          title={
            en ? (
              <>
                What people ask us{" "}
                <em className="text-brand italic">before booking</em>
              </>
            ) : (
              <>
                Ce qu&apos;on nous demande{" "}
                <em className="text-brand italic">avant de réserver</em>
              </>
            )
          }
        />

        <ul className="divide-y divide-line border-y border-line">
          {faqCommune[langue].map((item) => (
            <li key={item.question}>
              <details className="group">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1rem] font-semibold text-ink transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="relative size-4 shrink-0 text-brand"
                  >
                    <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
                    <span className="absolute top-0 left-1/2 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-300 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="pb-6 text-[0.92rem] leading-[1.8] text-ink-muted">
                  {item.reponse}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function EnteteParOuCommencer({ langue }: { langue: Langue }) {
  const en = langue === "en";
  return (
    <SectionHeading
      eyebrow={en ? "Where to start" : "Par où commencer"}
      title={
        en ? (
          <>
            Find your situation,{" "}
            <em className="text-brand italic">we&apos;ll tell you what to look at</em>
          </>
        ) : (
          <>
            Reconnaissez votre situation,{" "}
            <em className="text-brand italic">on vous dit quoi regarder</em>
          </>
        )
      }
      subtitle={
        en
          ? "Four situations we see in small businesses. Stop on the one that sounds like yours."
          : "Quatre situations que nous voyons en PME. Arrêtez-vous sur celle qui vous ressemble."
      }
    />
  );
}

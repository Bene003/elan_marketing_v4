import type { ReactNode } from "react";
import type { Langue } from "@/lib/i18n";

const DEPART = "M 8 232";
const TRAJET_PLAT = `${DEPART} C 180 224, 360 232, 560 220`;
const TRAJET_MONTANT = `${DEPART} C 190 224, 360 132, 560 40`;

const ZONE = `${TRAJET_MONTANT} L 560 220 C 360 232, 180 224, 8 232 Z`;

function Calque({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 568 240"
      preserveAspectRatio="none"
      className={`absolute inset-0 size-full ${className ?? ""}`}
    >
      {children}
    </svg>
  );
}

const T = {
  en: {
    avec: "With structure",
    sans: "Without",
    ecart: "The gap",
    legende:
      "This isn't a promise of numbers. It's the difference between starting from zero every month and building on the month before.",
    sansStructure: "Without structure",
    sansTexte: "A trajectory that stays flat from the first month to the twelfth.",
    avecTexte:
      "A trajectory starting from the same point that rises steadily. The gap between the two widens over time.",
  },
  fr: {
    avec: "Avec une structure",
    sans: "Sans",
    ecart: "L'écart",
    legende:
      "Ce n'est pas une promesse de chiffres. C'est la différence entre repartir de zéro chaque mois et repartir du mois précédent.",
    sansStructure: "Sans structure",
    sansTexte: "Une trajectoire qui reste au même niveau du premier au douzième mois.",
    avecTexte:
      "Une trajectoire partie du même point, qui s'élève régulièrement. L'espace entre les deux se creuse avec le temps.",
  },
};

export function Ecart({ langue, className }: { langue: Langue; className?: string }) {
  const t = T[langue];
  return (
    <figure className={className}>
      <div className="ecart relative h-64 w-full sm:h-80">
        <Calque className="ecart-zone">
          <defs>
            <linearGradient id="ecart-remplissage" x1="0" y1="1" x2="1" y2="0">
              <stop
                offset="0%"
                stopColor="var(--color-brand)"
                stopOpacity="0.02"
              />
              <stop
                offset="100%"
                stopColor="var(--color-accent)"
                stopOpacity="0.24"
              />
            </linearGradient>
          </defs>
          <path d={ZONE} fill="url(#ecart-remplissage)" />
        </Calque>

        <Calque className="ecart-trait ecart-trait-bas">
          <path
            d={TRAJET_PLAT}
            fill="none"
            stroke="var(--color-ink-muted)"
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </Calque>

        <Calque className="ecart-trait ecart-trait-haut">
          <path
            d={TRAJET_MONTANT}
            fill="none"
            stroke="var(--color-brand)"
            strokeWidth="3"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </Calque>

        <span className="ecart-etiquette absolute top-[8%] right-0 flex translate-y-[-100%] items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] text-brand uppercase sm:text-[0.75rem]">
          <span aria-hidden="true" className="size-2 rounded-full bg-brand" />
          {t.avec}
        </span>
        <span className="ecart-etiquette absolute top-[95%] right-0 flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] text-ink-muted uppercase sm:text-[0.75rem]">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-ink-muted/50"
          />
          {t.sans}
        </span>

        <span className="ecart-mesure absolute top-[24%] right-[9rem] hidden items-center gap-3 sm:flex">

          <span aria-hidden="true" className="h-[7.5rem] w-px bg-brand/40" />
          <span className="font-display text-[0.8rem] font-semibold tracking-[0.16em] text-brand uppercase">
            {t.ecart}
          </span>
        </span>
      </div>

      <figcaption className="mt-10 max-w-xl text-[0.9rem] leading-[1.75] text-ink-muted">
        {t.legende}
      </figcaption>

      <dl className="sr-only">
        <dt>{t.sansStructure}</dt>
        <dd>{t.sansTexte}</dd>
        <dt>{t.avec}</dt>
        <dd>{t.avecTexte}</dd>
      </dl>
    </figure>
  );
}

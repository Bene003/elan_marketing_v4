import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { etudesDeCas } from "@/content/cas";
import { lien, type Langue } from "@/lib/i18n";
import { AnimationPiece, Barres, Magasins } from "./animations";
import { Compteur } from "./compteur";
import { textesAccueil } from "./textes";

const rang = (i: number) => ({ "--rang": i }) as CSSProperties;

// Photos des quatre situations (générées par Ruby, voir public/images).
const PHOTOS: Record<string, string> = {
  "structuration-operationnelle": "probleme-operations",
  branding: "probleme-image",
  positionnement: "probleme-positionnement",
  "accompagnement-croissance": "probleme-croissance",
};

// Valeurs de départ réelles des deux cas, pour faire grimper les chiffres.
const DEPARTS: Record<string, number> = { construction: 100000, "peluches-jeux": 20 };

/* La bande de partage (bureau) : les deux côtés, et les pièces de structure
   qui s'allument à mesure que le visiteur lit les problèmes. */
export function BandePartage({ langue }: { langue: Langue }) {
  const t = textesAccueil[langue];
  return (
    <div aria-hidden="true" className="accueil-bande">
      <div className="accueil-bande-gauche">{t.cotePme}</div>
      <div className="accueil-bande-droite">
        <span className="accueil-bande-titre">
          {t.coteStructure}{" "}
          <span className="tabular-nums">
            <span data-pieces-compte>0</span>/{t.pieces.length}
          </span>
        </span>
        <ol className="accueil-temoins">
          {t.pieces.map((piece, i) => (
            <li key={piece} data-temoin={i} style={rang(i)}>
              {piece}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function HerosAccueil({ langue }: { langue: Langue }) {
  const t = textesAccueil[langue].heros;
  return (
    <section data-heros className="accueil-heros accueil-rangee">
      {/* Trois plans qui ne bougent pas au même rythme : le décor recule, la
          lumière dérive, les deux personnes avancent depuis le bas du cadre. */}
      <div className="accueil-scene">
        <Image
          src="/images/accueil-decor.jpg"
          alt=""
          fill
          preload
          fetchPriority="high"
          sizes="(min-width: 64rem) 46vw, 100vw"
          quality={78}
          className="accueil-plan accueil-plan-decor"
        />
        <Image
          src="/images/accueil-personnes.png"
          alt={t.photo}
          fill
          preload
          sizes="(min-width: 64rem) 46vw, 100vw"
          quality={80}
          className="accueil-plan accueil-plan-personnes"
        />
        {/* La même scène, filmée : chargée après la page par SceneAccueil,
            elle apparaît en fondu quand elle joue. Boucle sans couture
            (première et dernière image identiques). */}
        <video
          data-heros-video
          aria-hidden="true"
          muted
          loop
          playsInline
          preload="none"
          className="accueil-plan accueil-plan-video"
        >
          <source data-src="/videos/accueil-heros-m.mp4" media="(max-width: 63.99rem)" type="video/mp4" />
          <source data-src="/videos/accueil-heros.mp4" type="video/mp4" />
        </video>
        <span aria-hidden="true" className="accueil-plan accueil-plan-lumiere" />
        <span aria-hidden="true" className="accueil-scene-voile" />
      </div>

      <div className="accueil-droite accueil-heros-texte">
        <h1 className="font-display text-[clamp(2.1rem,4.2vw,4rem)] leading-[1.02] tracking-[-0.035em] text-balance">
          <span className="block font-light text-ink-invert">{t.lignes[0]}</span>
          <span className="block font-extrabold text-accent">{t.lignes[1]}</span>
        </h1>
        <p className="mt-6 max-w-[34rem] text-[1.02rem] leading-[1.65] text-ink-invert sm:text-[1.12rem]">
          {t.intro}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={lien(langue, "contact")} className="accueil-cta">
            {t.reserver}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
          <Link href={lien(langue, "entreprises")} className="accueil-cta-second">
            {t.offre}
          </Link>
        </div>
      </div>
    </section>
  );
}

function TitreSection({ titre, accent, sombre = false }: { titre: string; accent: string; sombre?: boolean }) {
  return (
    <h2
      className={`font-display text-[clamp(1.75rem,3.2vw,2.6rem)] leading-[1.06] font-bold tracking-[-0.03em] text-balance ${
        sombre ? "text-ink-invert" : "text-ink"
      }`}
    >
      {titre} <em className={`italic ${sombre ? "text-accent" : "text-brand"}`}>{accent}</em>
    </h2>
  );
}

export function ProblemesAccueil({ langue }: { langue: Langue }) {
  const t = textesAccueil[langue];
  return (
    <section id="ce-qu-on-regle" className="accueil-section">
      <div className="accueil-rangee accueil-entete">
        <div className="accueil-gauche">
          <TitreSection titre={t.problemes.titre} accent={t.problemes.accent} />
        </div>
        <div className="accueil-droite accueil-entete-droite">
          <p className="accueil-etiquette">{t.problemes.droite}</p>
        </div>
      </div>

      <ul>
        {services[langue].map((service, i) => (
          <li key={service.slug} data-piece={i} className="accueil-rangee accueil-ligne">
            <div className="accueil-gauche accueil-probleme">
              <div className="accueil-photo">
                <Image
                  src={`/images/${PHOTOS[service.slug]}.jpg`}
                  alt=""
                  fill
                  sizes="(min-width: 64rem) 13rem, 7rem"
                  quality={72}
                  fetchPriority="low"
                  className="object-cover"
                />
              </div>
              <p data-revele="gauche" className="text-[0.98rem] leading-[1.45] font-semibold text-ink sm:text-[1.08rem]">
                {service.probleme}
              </p>
            </div>
            <div className="accueil-droite accueil-solution">
              <figure className="accueil-anim">
                <AnimationPiece slug={service.slug} />
                <figcaption className="sr-only">{service.resultat}</figcaption>
              </figure>
              <Link href={lien(langue, "services")} className="accueil-piece">
                <span aria-hidden="true" className="accueil-piece-point" />
                {service.nom}
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PreuvesAccueil({ langue }: { langue: Langue }) {
  const t = textesAccueil[langue].preuves;
  return (
    <section className="accueil-section">
      <div className="accueil-rangee accueil-entete">
        <div className="accueil-gauche">
          <TitreSection titre={t.titre} accent={t.accent} />
        </div>
        <div className="accueil-droite accueil-entete-droite">
          <Link href={lien(langue, "resultats")} className="accueil-lien">
            {t.voir}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>

      <ul>
        {etudesDeCas[langue].map((cas) => (
          <li key={cas.slug} className="accueil-rangee accueil-ligne">
            <div className="accueil-gauche">
              <p className="font-display text-[1.2rem] leading-snug font-bold tracking-[-0.02em] text-ink text-balance">
                {cas.contexte}
              </p>
            </div>
            <div className="accueil-droite accueil-preuve">
              <div>
                <p className="accueil-etiquette">{t.apres}</p>
                <p className="mt-2 font-display text-[clamp(2.4rem,4.4vw,3.6rem)] leading-none font-extrabold tracking-[-0.045em] text-accent tabular-nums">
                  <Compteur valeur={cas.chiffre.valeur} depuis={DEPARTS[cas.slug]} />
                </p>
                <p className="mt-2 text-[1rem] leading-snug font-semibold text-ink-invert">{t.unites[cas.slug]}</p>
                <p className="mt-1 text-[0.8rem] tracking-wide text-ink-invert-muted">{cas.chiffre.periode}</p>
                <p className="sr-only">{cas.chiffre.libelle}</p>
              </div>
              {cas.slug === "construction" ? (
                <Barres avant={100000} apres={250000} libelles={t.barres} />
              ) : (
                <Magasins depart={20} total={200} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PourquoiAccueil({ langue }: { langue: Langue }) {
  const t = textesAccueil[langue].pourquoi;
  return (
    <section className="accueil-section">
      <div className="accueil-rangee accueil-entete">
        <div className="accueil-gauche">
          <TitreSection titre={t.titre} accent={t.accent} />
        </div>
        <ol className="accueil-droite flex flex-col justify-end gap-4 max-lg:pb-10">
          {t.raisons.map((raison) => (
            <li
              key={raison}
              data-revele=""
              className="accueil-apparait flex items-center gap-3 font-display text-[1.2rem] leading-snug font-bold tracking-[-0.02em] text-ink-invert"
            >
              <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-accent" />
              {raison}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* La clôture : la ligne de partage file vers la gauche, le côté structure
   prend tout l'écran, et les quatre pièces s'assemblent autour de la PME. */
export function ClotureAccueil({ langue }: { langue: Langue }) {
  const t = textesAccueil[langue];
  const c = t.cloture;
  // Schéma : la PME au centre, les quatre pièces autour.
  const noeuds = [
    { x: 70, y: 52 },
    { x: 330, y: 52 },
    { x: 70, y: 248 },
    { x: 330, y: 248 },
  ];
  return (
    <section data-cloture className="accueil-cloture">
      <div className="accueil-cloture-scene">
        <p aria-hidden="true" className="accueil-cloture-rappel">
          {c.rappel}
        </p>

        <div className="accueil-cloture-contenu">
          <svg aria-hidden="true" viewBox="0 0 400 300" className="accueil-schema">
            {noeuds.map((n, i) => (
              <path
                key={i}
                className="accueil-schema-trait"
                style={rang(i)}
                pathLength={1}
                d={`M200 150 L${n.x} 150 L${n.x} ${n.y}`}
              />
            ))}
            <g className="accueil-schema-centre">
              <rect x="138" y="128" width="124" height="44" rx="10" />
              <text x="200" y="155" textAnchor="middle">
                {c.centre}
              </text>
            </g>
            {noeuds.map((n, i) => (
              <g key={t.pieces[i]} className="accueil-schema-noeud" style={rang(i)}>
                <circle cx={n.x} cy={n.y} r="6" />
                <text x={n.x} y={n.y < 150 ? n.y - 16 : n.y + 26} textAnchor="middle">
                  {t.pieces[i]}
                </text>
              </g>
            ))}
          </svg>

          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.03] font-extrabold tracking-[-0.035em] text-ink-invert text-balance">
              {c.titre}
            </h2>
            <ol className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.82rem] text-ink-invert-muted">
              {c.etapes.map((etape) => (
                <li key={etape} className="flex items-center gap-2">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                  {etape}
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={lien(langue, "contact")} className="accueil-cta">
                {c.reserver}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link href={lien(langue, "methode")} className="accueil-lien accueil-lien-sombre">
                {c.methode}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

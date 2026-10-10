import type { CSSProperties } from "react";

/* Petites animations qui remplacent les phrases de solution : chacune montre
   le désordre qui se range. L'état final (rangé) est l'état par défaut, pour
   que la page reste juste sans JavaScript ; quand la scène est active, la
   rangée part en désordre et se range au moment où le visiteur la lit
   ([data-lue], posé par SceneAccueil). Voir « Animations des pièces » dans
   globals.css. */

type Desordre = { x?: number; y?: number; r?: number; s?: number; d?: number; f?: string };

const desordre = ({ x = 0, y = 0, r = 0, s = 1, d = 0, f }: Desordre) =>
  ({
    "--cx": `${x}px`,
    "--cy": `${y}px`,
    "--cr": `${r}deg`,
    "--cs": s,
    "--d": d,
    ...(f ? { "--cf": f } : {}),
  }) as CSSProperties;

function Operations() {
  const etapes = [
    { x: 8, chaos: { x: 18, y: -28, r: -18 } },
    { x: 89, chaos: { x: -26, y: 26, r: 14, d: 1 } },
    { x: 170, chaos: { x: -58, y: -20, r: 26, d: 2 } },
  ];
  return (
    <svg viewBox="0 0 240 110" className="anim anim-operations">
      {etapes.map((e, i) => (
        <g key={i} className="anim-el" style={desordre(e.chaos)}>
          <rect x={e.x} y="48" width="62" height="36" rx="7" className="anim-boite" />
          <rect x={e.x + 10} y="59" width="34" height="4" rx="2" className="anim-ligne" />
          <rect x={e.x + 10} y="69" width="22" height="4" rx="2" className="anim-ligne" />
          <circle cx={e.x + 31} cy="30" r="7" className="anim-role" />
        </g>
      ))}
      {[72, 153].map((x, i) => (
        <path key={x} d={`M${x} 66 H${x + 13} M${x + 9} 62 L${x + 13} 66 L${x + 9} 70`} className="anim-fleche" style={desordre({ d: 3 + i })} />
      ))}
    </svg>
  );
}

function Marque() {
  const tuiles = [
    { x: 14, chaos: { x: 6, y: 14, r: -16, s: 0.8, f: "#d9c9a3" } },
    { x: 70, chaos: { x: -4, y: -12, r: 12, s: 1.15, f: "#4c6a8a", d: 1 } },
    { x: 126, chaos: { x: 10, y: 18, r: -8, s: 0.9, f: "#b56b4a", d: 2 } },
    { x: 182, chaos: { x: -8, y: -16, r: 22, s: 1.1, f: "#9fb3a5", d: 3 } },
  ];
  return (
    <svg viewBox="0 0 240 110" className="anim anim-marque">
      {tuiles.map((t, i) => (
        <g key={i} className="anim-el" style={desordre(t.chaos)}>
          <rect x={t.x} y="28" width="44" height="56" rx="7" className="anim-tuile" />
          <circle cx={t.x + 22} cy="48" r="7" className="anim-embleme" />
          <rect x={t.x + 11} y="64" width="22" height="4" rx="2" className="anim-embleme" />
        </g>
      ))}
    </svg>
  );
}

function Positionnement() {
  const points = Array.from({ length: 12 }, (_, i) => ({ x: 26 + (i % 4) * 22, y: 28 + Math.floor(i / 4) * 26 }));
  const elu = points[5];
  const final = { x: 196, y: 55 };
  return (
    <svg viewBox="0 0 240 110" className="anim anim-positionnement">
      {points.map((p, i) =>
        i === 5 ? null : <circle key={i} cx={p.x} cy={p.y} r="6" className="anim-pareil" />,
      )}
      <circle cx={final.x} cy={final.y} r="20" className="anim-halo" style={desordre({ d: 3 })} />
      <circle
        cx={final.x}
        cy={final.y}
        r="10"
        className="anim-el anim-elu"
        style={desordre({ x: elu.x - final.x, y: elu.y - final.y, s: 0.6 })}
      />
    </svg>
  );
}

// Point d'une courbe de Bézier cubique, pour poser les points de suivi dessus.
function bezier(t: number, p: number[][]) {
  const u = 1 - t;
  const c = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
  return [0, 1].map((k) => c.reduce((s, ci, i) => s + ci * p[i][k], 0));
}

function Croissance() {
  const courbe = [
    [12, 94],
    [80, 90],
    [140, 66],
    [228, 20],
  ];
  const suivis = [0.2, 0.4, 0.6, 0.8, 1].map((t) => bezier(t, courbe));
  return (
    <svg viewBox="0 0 240 110" className="anim anim-croissance">
      <path d="M12 80 L36 52 L56 90 L80 38 L102 86 L126 48 L150 96 L174 42 L200 90 L228 58" className="anim-chaos" />
      <path
        d={`M${courbe[0]} C${courbe[1]} ${courbe[2]} ${courbe[3]}`}
        pathLength={1}
        className="anim-courbe"
      />
      {suivis.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4.5" className="anim-suivi" style={desordre({ d: 4 + i })} />
      ))}
    </svg>
  );
}

const ANIMATIONS: Record<string, () => React.JSX.Element> = {
  "structuration-operationnelle": Operations,
  branding: Marque,
  positionnement: Positionnement,
  "accompagnement-croissance": Croissance,
};

export function AnimationPiece({ slug }: { slug: string }) {
  const A = ANIMATIONS[slug];
  return A ? <A /> : null;
}

/* Preuves ------------------------------------------------------------------ */

// Deux barres réelles : environ 100 000 $ au départ, 250 000 $ douze mois après.
export function Barres({ avant, apres, libelles }: { avant: number; apres: number; libelles: [string, string] }) {
  return (
    <div aria-hidden="true" data-revele="" className="anim-barres">
      {[avant, apres].map((v, i) => (
        <div key={i} className="anim-barre-col">
          <div className="anim-barre-rail">
            <span className="anim-barre" data-final={i === 1 ? "" : undefined} style={{ "--h": v / apres } as CSSProperties} />
          </div>
          <span className="anim-barre-libelle">{libelles[i]}</span>
        </div>
      ))}
    </div>
  );
}

// Un point par magasin : une vingtaine au départ, puis les autres s'allument.
export function Magasins({ depart, total }: { depart: number; total: number }) {
  return (
    <div aria-hidden="true" data-revele="" className="anim-magasins">
      {Array.from({ length: total }, (_, i) => (
        // Les magasins de départ sont répartis dans la grille, pas groupés.
        <span key={i} data-depart={i % Math.round(total / depart) === 0 ? "" : undefined} style={{ "--i": i } as CSSProperties} />
      ))}
    </div>
  );
}

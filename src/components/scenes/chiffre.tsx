import type { CSSProperties } from "react";

function decoupe(valeur: string) {
  const m = /^(\d+)([\s\S]*)$/.exec(valeur);
  if (!m) return null;
  return { nombre: Number(m[1]), reste: m[2] };
}

export function ChiffreVivant({
  valeur,
  className,
}: {
  valeur: string;
  className?: string;
}) {
  const part = decoupe(valeur);

  if (!part) {
    return <div className={className}>{valeur}</div>;
  }

  return (
    <div className={className}>
      <span className="sr-only">{valeur}</span>
      <span aria-hidden="true" className="tabular-nums">

        <span
          className="chiffre-compte inline-block text-left"
          style={
            {
              "--cible": part.nombre,
              "--rangs": String(part.nombre).length,
            } as CSSProperties
          }
        />
        {part.reste}
      </span>
    </div>
  );
}

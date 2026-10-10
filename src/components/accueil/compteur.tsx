"use client";

import { useEffect, useRef } from "react";

/**
 * Affiche un chiffre réel tel quel (rendu serveur, lisible sans JavaScript),
 * puis le fait grimper depuis sa valeur de départ à chaque entrée dans l'écran. Le format d'origine
 * (« 250 000 $ », « $250,000 ») est conservé : seuls les chiffres changent.
 */
export function Compteur({ valeur, depuis = 0, className }: { valeur: string; depuis?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const m = valeur.match(/\d[\d\s  ,.]*\d|\d/);
    if (!el || !m || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const brut = m[0];
    const cible = Number(brut.replace(/\D/g, ""));
    const separateur = brut.match(/\D/)?.[0] ?? "";
    const avant = valeur.slice(0, m.index);
    const apres = valeur.slice((m.index ?? 0) + brut.length);
    const grouper = (n: number) =>
      separateur ? String(n).replace(/\B(?=(\d{3})+(?!\d))/g, separateur) : String(n);

    let rAF = 0;
    let joue = false;
    const lancer = () => {
      if (joue) return;
      joue = true;
      const debut = performance.now();
      const duree = 1300;
      const pas = (t: number) => {
        const x = Math.min((t - debut) / duree, 1);
        const e = 1 - Math.pow(1 - x, 3);
        el.textContent = x < 1 ? avant + grouper(Math.round(depuis + (cible - depuis) * e)) + apres : valeur;
        if (x < 1) rAF = requestAnimationFrame(pas);
      };
      rAF = requestAnimationFrame(pas);
    };
    // Hors de l'écran, le chiffre revient à son départ : il regrimpera au retour.
    const remettre = () => {
      cancelAnimationFrame(rAF);
      joue = false;
      el.textContent = avant + grouper(depuis) + apres;
    };

    const entree = new IntersectionObserver(([e]) => e.isIntersecting && lancer(), {
      rootMargin: "0px 0px -15% 0px",
    });
    const sortie = new IntersectionObserver(([e]) => !e.isIntersecting && remettre());
    entree.observe(el);
    sortie.observe(el);
    return () => {
      entree.disconnect();
      sortie.disconnect();
      cancelAnimationFrame(rAF);
    };
  }, [valeur, depuis]);

  return (
    <span ref={ref} className={className}>
      {valeur}
    </span>
  );
}

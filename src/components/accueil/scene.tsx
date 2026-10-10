"use client";

import { useEffect } from "react";

const borne = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);

/**
 * Pilote l'accueil à partir du défilement, sur une seule boucle rAF.
 * Rien n'est généré : la page est en HTML réel, la scène ne fait que publier
 * des variables CSS sur [data-accueil] et poser des attributs.
 *
 *   --hp   progression de sortie du héros (0 à 1) : profondeur des calques
 *   --c    effondrement de la ligne de partage à la clôture (0 à 1)
 *   --mx/--my  position du pointeur (souris uniquement), pour la profondeur
 *
 *   [data-piece]      une rangée de problème : [data-joue] pendant qu'elle est
 *                     lue (rejouable), [data-lue] + pièce allumée dans la bande
 *   [data-revele]     apparition à l'entrée dans l'écran, rejouable
 */
export function SceneAccueil() {
  useEffect(() => {
    const racine = document.querySelector<HTMLElement>("[data-accueil]");
    if (!racine) return;

    const reduit = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const souris = matchMedia("(hover: hover) and (pointer: fine)");
    const large = matchMedia("(min-width: 64rem)");

    racine.dataset.scene = "active";

    const heros = racine.querySelector<HTMLElement>("[data-heros]");
    const cloture = racine.querySelector<HTMLElement>("[data-cloture]");
    const rangees = Array.from(racine.querySelectorAll<HTMLElement>("[data-piece]"));
    const temoins = Array.from(racine.querySelectorAll<HTMLElement>("[data-temoin]"));
    const compte = racine.querySelector<HTMLElement>("[data-pieces-compte]");
    const allumees = new Set<number>();

    let vh = innerHeight;
    let attente = false;

    const lire = () => {
      attente = false;
      vh = innerHeight;

      if (heros && !reduit) {
        const r = heros.getBoundingClientRect();
        racine.style.setProperty("--hp", borne(-r.top / (r.height * 0.85)).toFixed(4));
      }

      // Chaque rangée joue son animation quand elle passe la ligne de lecture,
      // et se remet à zéro une fois sortie de l'écran (dans un sens ou dans
      // l'autre) : elle se rejoue au retour, en descendant comme en remontant.
      // Les pièces de la bande gardent la trace de la lecture ; elles ne se
      // vident que si l'on remonte jusqu'au héros, pour une nouvelle lecture.
      const retourAuHeros = heros ? heros.getBoundingClientRect().bottom > vh * 0.5 : false;
      for (const rangee of rangees) {
        const i = Number(rangee.dataset.piece);
        const r = rangee.getBoundingClientRect();
        const horsEcran = r.bottom < 0 || r.top > vh;
        if (horsEcran) delete rangee.dataset.joue;
        else if (r.top < vh * 0.62) rangee.dataset.joue = "";

        if (retourAuHeros && allumees.has(i)) {
          allumees.delete(i);
          delete rangee.dataset.lue;
          temoins.forEach((t) => {
            if (Number(t.dataset.temoin) === i) delete t.dataset.allume;
          });
        } else if (!allumees.has(i) && !horsEcran && r.top < vh * 0.62) {
          allumees.add(i);
          rangee.dataset.lue = "";
          temoins.forEach((t) => {
            if (Number(t.dataset.temoin) === i) t.dataset.allume = "";
          });
        }
      }
      if (compte) compte.textContent = String(allumees.size);
      racine.dataset.pieces = String(allumees.size);

      if (cloture) {
        const r = cloture.getBoundingClientRect();
        const course = r.height - vh;
        // Hors bureau ou sans mouvement, la clôture n'est pas épinglée.
        const c = large.matches && !reduit && course > 0 ? borne(-r.top / (course * 0.62)) : 0;
        racine.style.setProperty("--c", c.toFixed(4));
        racine.dataset.clos = c > 0.98 ? "oui" : "non";
        racine.dataset.bande = r.top < vh * 0.9 ? "cachee" : "";
      }

      // La bande n'arrive qu'une fois la photo passée sous l'en-tête.
      if (heros) {
        const r = heros.getBoundingClientRect();
        if (r.bottom > 112) racine.dataset.bande = "cachee";
      }
    };

    const demander = () => {
      if (!attente) {
        attente = true;
        requestAnimationFrame(lire);
      }
    };

    // Profondeur au pointeur : le décor et les personnes ne bougent pas de la
    // même quantité. Amorti pour avoir du poids, désactivé au toucher.
    let mx = 0, my = 0, cx = 0, cy = 0, boucle = 0;
    const suivre = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || !heros) return;
      const r = heros.getBoundingClientRect();
      if (r.bottom < 0) return;
      mx = (e.clientX / innerWidth) * 2 - 1;
      my = ((e.clientY - r.top) / r.height) * 2 - 1;
      if (!boucle) boucle = requestAnimationFrame(amortir);
    };
    const amortir = () => {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      racine.style.setProperty("--mx", cx.toFixed(4));
      racine.style.setProperty("--my", cy.toFixed(4));
      boucle = Math.abs(mx - cx) + Math.abs(my - cy) > 0.001 ? requestAnimationFrame(amortir) : 0;
    };

    // Apparitions : jouées à l'entrée dans l'écran, remises à zéro seulement
    // une fois l'élément complètement sorti, pour se rejouer au retour sans
    // jamais disparaître sous les yeux du visiteur.
    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const e of entrees) if (e.isIntersecting) (e.target as HTMLElement).dataset.vu = "";
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    const sortie = new IntersectionObserver((entrees) => {
      for (const e of entrees) if (!e.isIntersecting) delete (e.target as HTMLElement).dataset.vu;
    });
    racine.querySelectorAll("[data-revele]").forEach((el) => {
      observateur.observe(el);
      sortie.observe(el);
    });

    // Vidéo du héros : chargée seulement une fois la page affichée, jamais
    // avec « mouvements réduits » ou l'économiseur de données, et mise en
    // pause quand le héros n'est plus à l'écran.
    const video = racine.querySelector<HTMLVideoElement>("[data-heros-video]");
    const economie = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    let observeVideo: IntersectionObserver | undefined;
    const lancerVideo = () => {
      if (!video || reduit || economie) return;
      video.querySelectorAll<HTMLSourceElement>("source[data-src]").forEach((s) => {
        s.src = s.dataset.src!;
      });
      video.muted = true;
      video.addEventListener("playing", () => (video.dataset.pret = ""), { once: true });
      video.load();
      observeVideo = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) video.play().catch(() => {});
        else video.pause();
      });
      observeVideo.observe(video);
    };
    if (document.readyState === "complete") setTimeout(lancerVideo, 300);
    else addEventListener("load", () => setTimeout(lancerVideo, 300), { once: true });

    addEventListener("scroll", demander, { passive: true });
    addEventListener("resize", demander, { passive: true });
    if (!reduit && souris.matches) addEventListener("pointermove", suivre, { passive: true });
    lire();

    return () => {
      removeEventListener("scroll", demander);
      removeEventListener("resize", demander);
      removeEventListener("pointermove", suivre);
      cancelAnimationFrame(boucle);
      observateur.disconnect();
      sortie.disconnect();
      observeVideo?.disconnect();
      video?.pause();
      delete racine.dataset.scene;
    };
  }, []);

  return null;
}

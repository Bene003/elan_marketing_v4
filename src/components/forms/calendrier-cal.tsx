"use client";

import { useEffect, useRef } from "react";
import { track } from "@vercel/analytics";

type FileCal = { q: unknown[] } & ((...args: unknown[]) => void);
type Cal = FileCal & {
  loaded?: boolean;
  ns: Record<string, FileCal>;
};

declare global {
  interface Window {
    Cal?: Cal;
  }
}

const SCRIPT = "https://app.cal.com/embed/embed.js";
const ESPACE = "diagnostic";

function amorcer(): Cal {
  if (window.Cal) return window.Cal;
  const enFile = (fonction: FileCal, args: unknown[]) => fonction.q.push(args);
  const cal = function (...args: unknown[]) {
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q ?? [];
      const script = document.createElement("script");
      script.src = SCRIPT;
      script.async = true;
      document.head.appendChild(script);
      cal.loaded = true;
    }
    if (args[0] === "init") {
      const api = function (...sous: unknown[]) {
        enFile(api, sous);
      } as FileCal;
      api.q = [];
      const espace = args[1];
      if (typeof espace === "string") {
        cal.ns[espace] = cal.ns[espace] ?? api;
        enFile(cal.ns[espace], args);
        enFile(cal, ["initNamespace", espace]);
      } else {
        enFile(cal, args);
      }
      return;
    }
    enFile(cal, args);
  } as Cal;
  cal.q = [];
  cal.ns = {};
  window.Cal = cal;
  return cal;
}

// Intégration officielle Cal.com : la hauteur du calendrier suit son contenu.
export function CalendrierCal({ lienCal, titre }: { lienCal: string; titre: string }) {
  const cadre = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cadre.current;
    if (!element || element.dataset.monte) return;
    element.dataset.monte = "1";

    const cal = amorcer();
    cal("init", ESPACE, { origin: "https://cal.com" });
    const espace = cal.ns[ESPACE];
    espace("inline", {
      elementOrSelector: element,
      calLink: lienCal,
      config: { layout: "month_view", theme: "light" },
    });
    // Conversion mesurée : une réservation confirmée dans le calendrier.
    espace("on", {
      action: "bookingSuccessful",
      callback: () => track("reservation_confirmee", { lien: lienCal }),
    });
    espace("ui", {
      theme: "light",
      hideEventTypeDetails: false,
      layout: "month_view",
      cssVarsPerTheme: { light: { "cal-brand": "#225b33" } },
    });
  }, [lienCal]);

  return (
    <div
      ref={cadre}
      role="region"
      aria-label={titre}
      className="min-h-[34rem] w-full overflow-hidden rounded-2xl border border-line bg-surface"
    />
  );
}

import { ButtonLink } from "@/components/ui";
import { entreprise } from "@/content/entreprise";
import type { Langue } from "@/lib/i18n";
import { CalendrierCal } from "./calendrier-cal";

function lienCalDe(url: string) {
  try {
    const { hostname, pathname } = new URL(url);
    return hostname === "cal.com" || hostname.endsWith(".cal.com")
      ? pathname.replace(/^\/+|\/+$/g, "")
      : null;
  } catch {
    return null;
  }
}

// Lien de réservation par langue : CALENDRIER_URL_FR et CALENDRIER_URL_EN (Vercel).
export function BookingEmbed({ langue }: { langue: Langue }) {

  const url =
    (langue === "en" ? process.env.CALENDRIER_URL_EN : process.env.CALENDRIER_URL_FR) ??
    process.env.CALENDRIER_URL;
  const en = langue === "en";

  if (!url) {
    return (
      <div className="rounded-2xl border border-line bg-surface-raised p-8 text-center">
        <p className="text-sm leading-relaxed text-ink-muted">
          {en
            ? "Online booking is being set up. In the meantime, send us a message with the form below or call "
            : "Le calendrier de réservation est en cours de configuration. En attendant, écrivez-nous avec le formulaire plus bas ou appelez le "}
          <a
            href={`tel:${entreprise.telephone.replace(/\s/g, "")}`}
            className="text-brand underline underline-offset-4"
          >
            {entreprise.telephoneAffiche}
          </a>
          .
        </p>
        <ButtonLink href="#formulaire" className="mt-6" variant="secondary">
          {en ? "Go to the form" : "Aller au formulaire"}
        </ButtonLink>
      </div>
    );
  }

  const titre = en
    ? "Book a discovery call with Superflux"
    : "Réserver un diagnostic avec Superflux";

  const lienCal = lienCalDe(url);
  if (lienCal) return <CalendrierCal lienCal={lienCal} titre={titre} />;

  return (
    <div className="h-[46rem] overflow-hidden rounded-2xl border border-line">
      <iframe
        src={url}
        title={titre}
        loading="lazy"
        className="size-full"
      />
    </div>
  );
}

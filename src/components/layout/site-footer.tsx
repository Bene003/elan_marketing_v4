import Link from "next/link";
import { Container } from "@/components/ui";
import { navLinks } from "./nav-links";
import { SelecteurLangue } from "./selecteur-langue";
import { entreprise } from "@/content/entreprise";
import { lien, type Langue } from "@/lib/i18n";

const T = {
  en: {
    accroche: "Structure and growth for small businesses.",
    pages: "All pages",
    joindre: "Get in touch",
    adresse: "Address",
    exercant: "operating as",
    mentions: "Legal notice",
    confidentialite: "Privacy",
    conditions: "Terms of use",
    pied: "Footer",
    langue: "Version française",
  },
  fr: {
    accroche: "Structuration et croissance des PME.",
    pages: "Toutes les pages",
    joindre: "Nous joindre",
    adresse: "Adresse",
    exercant: "exerçant sous le nom",
    mentions: "Mentions légales",
    confidentialite: "Confidentialité",
    conditions: "Conditions d'utilisation",
    pied: "Pied de page",
    langue: "English version",
  },
} satisfies Record<Langue, Record<string, string>>;

export function SiteFooter({ langue }: { langue: Langue }) {
  const annee = new Date().getFullYear();
  const t = T[langue];

  return (
    <footer className="sur-sombre relative isolate overflow-hidden border-t border-invert-line bg-surface-invert text-ink-invert">
      <Container className="pt-16 pb-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-xl font-extrabold tracking-[-0.03em] text-ink-invert">
              {entreprise.nom}
            </div>
            <p className="mt-4 max-w-xs text-[0.92rem] leading-[1.8] text-ink-invert-muted">
              {t.accroche}
            </p>
          </div>

          <nav aria-label={t.pied}>
            <h2 className="text-[0.68rem] font-medium tracking-[0.24em] text-accent uppercase">
              {t.pages}
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((item) => (
                <li key={item.page}>
                  <Link
                    href={lien(langue, item.page)}
                    className="text-sm text-ink-invert-muted transition-colors duration-300 hover:text-ink-invert"
                  >
                    {item.label[langue]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.68rem] font-medium tracking-[0.24em] text-accent uppercase">
              {t.joindre}
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-ink-invert-muted">
              <li>
                <a
                  href={`tel:${entreprise.telephone.replace(/\s/g, "")}`}
                  className="transition-colors duration-300 hover:text-ink-invert"
                >
                  {entreprise.telephoneAffiche}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${entreprise.courriel}`}
                  className="transition-colors duration-300 hover:text-ink-invert"
                >
                  {entreprise.courriel}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.68rem] font-medium tracking-[0.24em] text-accent uppercase">
              {t.adresse}
            </h2>
            <address className="mt-5 text-sm leading-[1.8] text-ink-invert-muted not-italic">
              {entreprise.adresse.rue}
              <br />
              {entreprise.adresse.ville}, {entreprise.adresse.region}{" "}
              {entreprise.adresse.codePostal}
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-invert-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-invert-muted">
            © {annee} {entreprise.raisonSociale}, {t.exercant}{" "}
            {entreprise.nom}.
          </p>
          <ul className="flex flex-wrap gap-6">
            <li>
              <Link
                href={lien(langue, "mentions-legales")}
                className="text-xs text-ink-invert-muted transition-colors duration-300 hover:text-ink-invert"
              >
                {t.mentions}
              </Link>
            </li>
            <li>
              <Link
                href={lien(langue, "confidentialite")}
                className="text-xs text-ink-invert-muted transition-colors duration-300 hover:text-ink-invert"
              >
                {t.confidentialite}
              </Link>
            </li>
            <li>
              <Link
                href={lien(langue, "conditions-utilisation")}
                className="text-xs text-ink-invert-muted transition-colors duration-300 hover:text-ink-invert"
              >
                {t.conditions}
              </Link>
            </li>

            <li>
              <SelecteurLangue
                langue={langue}
                libelle={t.langue}
                className="text-xs text-ink-invert-muted underline underline-offset-4 transition-colors duration-300 hover:text-ink-invert"
              />
            </li>
          </ul>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none -mb-[0.22em] overflow-hidden px-5 select-none sm:px-8"
      >

        <span
          data-texte={entreprise.nom}
          className="block text-center font-display text-[clamp(4rem,17vw,13rem)] leading-[0.8] font-extrabold tracking-[-0.05em] text-ink-invert/[0.05] before:content-[attr(data-texte)]"
        />
      </div>
    </footer>
  );
}

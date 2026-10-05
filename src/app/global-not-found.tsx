import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { display, sans } from "./polices";
import { Anneaux, ButtonLink, Container, Display } from "@/components/ui";
import { navLinks } from "@/components/layout/nav-links";
import { lien, type Langue } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "404 · Superflux",
  robots: { index: false },
};

const T: Record<Langue, { titre: string; accent: string; texte: string; retour: string }> = {
  en: {
    titre: "This page",
    accent: "doesn't exist",
    texte: "The link may be old, or the address may contain a typo. Here are the site's pages.",
    retour: "Back to home",
  },
  fr: {
    titre: "Cette page",
    accent: "n'existe pas",
    texte: "Le lien est peut-être ancien, ou l'adresse comporte une faute. Voici les pages du site.",
    retour: "Retour à l'accueil",
  },
};

export default function GlobalNotFound() {
  return (
    <html lang="en-CA" className={`${sans.variable} ${display.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-surface-invert text-ink-invert">
        <main className="sur-sombre relative isolate flex flex-1 items-center overflow-hidden">
          <div
            aria-hidden="true"
            className="grille-invert grille-fondue pointer-events-none absolute inset-0 -z-10"
          />
          <Anneaux className="top-[-20%] right-[-18%] hidden size-[34rem] lg:block" />

          <Container className="py-24 sm:py-32">
            <p className="font-display text-[0.72rem] font-semibold tracking-[0.2em] text-accent">
              404
            </p>
            <div className="mt-6 grid gap-16 lg:grid-cols-2">
              {(["en", "fr"] as const).map((langue) => {
                const t = T[langue];
                return (
                  <div key={langue} lang={langue === "en" ? "en-CA" : "fr-CA"}>
                    <Display as={langue === "en" ? "h1" : "p"} taille="moyen" className="text-ink-invert">
                      {t.titre} <em className="text-accent italic">{t.accent}</em>
                    </Display>
                    <p className="mt-6 max-w-md text-[1rem] leading-[1.8] text-ink-invert-muted">
                      {t.texte}
                    </p>
                    <ul className="mt-8 max-w-md border-t border-invert-line">
                      {navLinks.map((item) => (
                        <li key={item.page}>
                          <Link
                            href={lien(langue, item.page)}
                            className="flex min-h-12 items-center border-b border-invert-line text-[0.95rem] text-ink-invert-muted transition-colors duration-300 hover:text-accent"
                          >
                            {item.label[langue]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ButtonLink href={lien(langue, "accueil")} variant="invert" className="mt-8" withArrow>
                      {t.retour}
                    </ButtonLink>
                  </div>
                );
              })}
            </div>
          </Container>
        </main>
      </body>
    </html>
  );
}

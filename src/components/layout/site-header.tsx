import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container, ButtonLink } from "@/components/ui";
import { pageLinks } from "./nav-links";
import { SelecteurLangue } from "./selecteur-langue";
import { entreprise } from "@/content/entreprise";
import { lien, type Langue } from "@/lib/i18n";

export function SiteHeader({ langue }: { langue: Langue }) {
  return (
    <header
      data-entete
      data-colle="false"
      data-ton="sombre"
      className="entete sticky top-0 z-50"
    >
      <div
        data-entete-barre
        className="entete-barre site-header site-header-volume sur-sombre"
      >
        <Container className="flex flex-wrap items-center gap-x-4 max-lg:py-2 lg:h-16 lg:flex-nowrap lg:justify-between">
          <Link
            href={lien(langue, "accueil")}
            className="group order-1 flex items-center font-display text-lg font-extrabold tracking-[-0.03em] whitespace-nowrap text-[color:currentColor]"
          >

            <span className="entete-nom">
              <span>{entreprise.nom}</span>
            </span>
          </Link>

          <SelecteurLangue
            langue={langue}
            className="order-2 ml-auto flex min-h-11 min-w-11 items-center justify-center rounded-full text-[0.78rem] font-semibold tracking-[0.08em] text-ink-invert-muted transition-colors duration-300 hover:text-ink-invert focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:order-3 lg:ml-0 lg:min-h-10 lg:min-w-10"
          />

          <ButtonLink
            href={lien(langue, "contact")}
            variant="invert"
            className="entete-cta order-2 min-h-10 px-4 py-2 text-[0.82rem] whitespace-nowrap lg:order-4 lg:px-5"
          >
            <span className="lg:hidden">{langue === "en" ? "Book a call" : "Rendez-vous"}</span>
            <span className="max-lg:hidden">
              {langue === "en" ? "Book a call" : "Prendre rendez-vous"}
            </span>
          </ButtonLink>

          <div className="order-5 w-full lg:order-2 lg:w-auto">
            <div className="flex items-center justify-between gap-3 lg:gap-7">
              <nav aria-label={langue === "en" ? "Main navigation" : "Navigation principale"}>
                <ul className="flex items-center gap-3 lg:gap-7">
                  {pageLinks.map((item) => (
                    <li
                      key={item.page}
                      className={cn(!item.telephone && "max-lg:hidden")}
                    >
                      <Link
                        href={lien(langue, item.page)}

                        className="entete-lien flex items-center text-[0.82rem] whitespace-nowrap max-lg:min-h-11 max-lg:text-[0.76rem]"
                      >
                        {item.label[langue]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

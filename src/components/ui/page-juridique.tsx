import { Container, PageHero } from "@/components/ui";
import type { PageJuridiqueContenu } from "@/content/juridique";
import type { Langue } from "@/lib/i18n";

export function PageJuridique({ langue, contenu }: { langue: Langue; contenu: PageJuridiqueContenu }) {
  return (
    <>
      <PageHero
        eyebrow={langue === "en" ? "Legal information" : "Informations légales"}
        titre={contenu.titre}
        intro={contenu.intro}
      />
      <Container>
        <div className="max-w-2xl py-20 sm:py-24">
          <p className="text-xs tracking-wide text-ink-muted">{contenu.miseAJour}</p>
          <div className="mt-8 space-y-10">
            {contenu.sections.map((section) => (
              <section key={section.titre} className="border-t border-line pt-6">
                <h2 className="font-display text-[1.15rem] font-bold tracking-[-0.02em] text-ink">
                  {section.titre}
                </h2>
                <div className="mt-3 space-y-3 text-[0.92rem] leading-[1.8] text-ink-muted">
                  {section.paragraphes?.map((texte) => (
                    <p key={texte}>{texte}</p>
                  ))}
                  {section.puces ? (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.puces.map((puce) => (
                        <li key={puce}>{puce}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.apres?.map((texte) => (
                    <p key={texte}>{texte}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

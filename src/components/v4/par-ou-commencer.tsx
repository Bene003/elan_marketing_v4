import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";
import { services } from "@/content/services";
import { lien, type Langue } from "@/lib/i18n";

const T = {
  en: {
    eyebrow: "What we solve",
    titre: "Four problems we solve",
    accent: "for small businesses",
    probleme: "The problem: ",
    solution: "What we put in place: ",
  },
  fr: {
    eyebrow: "Ce qu'on règle",
    titre: "Quatre problèmes qu'on règle",
    accent: "dans les PME",
    probleme: "Le problème : ",
    solution: "Ce qu'on met en place : ",
  },
};

// Premier défilement : le visiteur doit se reconnaître dans un problème et
// voir tout de suite ce qu'on y fait. Les quatre sont visibles d'un coup.
export function ParOuCommencer({ langue }: { langue: Langue }) {
  const t = T[langue];

  return (
    <Section id="ce-qu-on-regle" tone="clair" className="py-12 sm:py-20">
      <SectionHeading
        taille="moyen"
        eyebrow={t.eyebrow}
        title={
          <>
            {t.titre} <em className="text-brand italic">{t.accent}</em>
          </>
        }
      />

      <ul className="mt-7 grid gap-2.5 sm:mt-12 lg:grid-cols-2 lg:gap-4">
        {services[langue].map((service) => (
          <li key={service.slug} className="flex">
            <Link
              href={lien(langue, "services")}
              className="group flex w-full flex-col rounded-2xl border border-line bg-surface px-4 py-3.5 transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-brand/40 hover:shadow-[0_18px_44px_-28px_rgba(16,42,30,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:p-6"
            >
              <span className="sr-only">{t.probleme}</span>
              <span className="text-[0.9rem] leading-[1.45] font-semibold text-ink sm:text-[0.95rem]">
                {service.probleme}
              </span>
              <span className="mt-2 flex gap-2 text-[0.8rem] leading-[1.5] text-ink-muted sm:mt-3 sm:text-[0.85rem]">
                <ArrowRight
                  aria-hidden="true"
                  className="mt-[0.2rem] size-3.5 shrink-0 text-brand transition-transform duration-300 group-hover:translate-x-0.5"
                />
                <span>
                  <span className="sr-only">{t.solution}</span>
                  {service.resultat}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { lien, type Langue } from "@/lib/i18n";

const enTetes: Record<Langue, { titre: string; sous: string; lien: string }> = {
  en: {
    titre: "You run a small business",
    sous: "The four situations we see most often in small businesses.",
    lien: "See the business offer",
  },
  fr: {
    titre: "Vous dirigez une entreprise",
    sous: "Les quatre situations que nous rencontrons le plus souvent en PME.",
    lien: "Voir l'offre entreprises",
  },
};

export function ParOuCommencer({ langue }: { langue: Langue }) {
  const liste = services[langue];
  const entete = enTetes[langue];
  const en = langue === "en";

  return (
    <div className="mt-12">
    <section aria-labelledby="rang-entreprises">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="inline-flex w-fit rounded-full bg-surface-invert px-3 py-1 text-[0.62rem] font-semibold tracking-[0.16em] text-ink-invert uppercase">
            {en ? "Small businesses" : "PME"}
          </p>
          <h3
            id="rang-entreprises"
            className="mt-4 font-display text-[1.45rem] leading-[1.15] font-bold tracking-[-0.025em] text-ink sm:text-[1.75rem]"
          >
            {entete.titre}
          </h3>
          <p className="mt-3 max-w-md text-[0.9rem] leading-[1.7] text-ink-muted">
            {entete.sous}
          </p>
        </div>

        <Link
          href={lien(langue, "entreprises")}
          className="group inline-flex min-h-11 shrink-0 items-center gap-2 text-[0.85rem] font-semibold text-brand"
        >
          {entete.lien}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      <div className="-mx-5 mt-8 sm:-mx-8 lg:mx-0">
        <ul
          className="rail-situations flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-4 sm:px-8 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0 xl:grid-cols-4"
          aria-label={`${en ? "Situations: " : "Situations : "}${entete.titre.toLowerCase()}`}
        >
          {liste.map((service) => (
            <li
              key={service.slug}

              className="flex w-[17rem] shrink-0 snap-center sm:w-[20rem] lg:w-auto lg:shrink"
            >
              <Link
                href={lien(langue, "services")}
                className="group flex w-full flex-col rounded-3xl border border-line bg-surface p-7 transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-brand/40 hover:shadow-[0_18px_44px_-28px_rgba(16,42,30,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <p className="text-[0.68rem] font-medium tracking-[0.2em] text-ink-muted uppercase">
                  {en ? "The situation" : "La situation"}
                </p>
                <p className="mt-4 text-[0.98rem] leading-[1.55] font-semibold text-ink">
                  {service.probleme}
                </p>

                <span
                  aria-hidden="true"
                  className="mt-6 block h-px w-8 bg-brand/40 transition-all duration-500 group-hover:w-16 group-hover:bg-brand"
                />

                <p className="mt-6 text-[0.85rem] leading-[1.7] text-ink-muted">
                  {service.resultat}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-[0.8rem] font-semibold text-brand">
                  {service.nom}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Display } from "@/components/ui";
import { lien, type Langue } from "@/lib/i18n";

const T = {
  en: {
    lignes: ["Your small business grew.", "Your structure didn't."],
    intro:
      "Small business consulting for operations, branding and growth, so everything stops depending on you.",
    reserver: "Book a call",
    offre: "See what we do",
  },
  fr: {
    lignes: ["Votre PME a grandi.", "Pas votre structure."],
    intro:
      "Superflux accompagne les PME dans leur structuration et leur croissance, pour que tout ne repose plus sur vous.",
    reserver: "Prendre rendez-vous",
    offre: "Voir ce qu'on fait",
  },
};

export function HeroV4({ langue }: { langue: Langue }) {
  const t = T[langue];
  return (
    <section className="sur-sombre relative isolate flex flex-col overflow-hidden bg-surface-invert text-ink-invert lg:min-h-[calc(100svh-6.5rem)]">

      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/images/business-hero.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          quality={82}
          className="object-cover object-[79%_center] lg:object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,14,0.78)_0%,rgba(7,20,14,0.68)_52%,rgba(7,20,14,0.54)_72%,rgba(7,20,14,0.72)_100%)] lg:bg-[linear-gradient(100deg,rgba(7,20,14,0.92)_0%,rgba(7,20,14,0.78)_34%,rgba(7,20,14,0.28)_62%,rgba(7,20,14,0.42)_100%)]"
        />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center py-12 sm:py-16 lg:py-20">
        <div className="flex max-w-2xl flex-col lg:max-w-3xl">
          <Display
            as="h1"
            taille="geant"
            className="text-[clamp(2.3rem,6vw,4.25rem)] leading-[1.02] font-light text-ink-invert"
          >
            <span className="block">{t.lignes[0]}</span>
            <span className="block font-extrabold text-accent">{t.lignes[1]}</span>
          </Display>

          <p className="mt-6 max-w-md text-[1.02rem] leading-[1.6] text-ink-invert sm:mt-7 sm:text-[1.15rem]">
            {t.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Link
              href={lien(langue, "contact")}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-[0.95rem] font-bold text-surface-invert transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {t.reserver}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href={lien(langue, "entreprises")}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-invert-line bg-white/[0.07] px-7 text-[0.95rem] font-semibold text-ink-invert backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {t.offre}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

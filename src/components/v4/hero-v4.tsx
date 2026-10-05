import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container, Display } from "@/components/ui";
import { lien, type Langue } from "@/lib/i18n";

const T = {
  en: {
    engagement: "Free 45-minute discovery call",
    lignes: ["Your small business is growing.", "Your structure should too.", "Let's build what's next."],
    intro:
      "Superflux helps small businesses structure their operations, sharpen their brand and positioning, and grow with a clear 90-day roadmap.",
    reserver: "Book your discovery call",
    reserverDetail: "45 minutes, free, by video call",
    offre: "See the business offer",
    offreDetail: "Operations, branding, positioning, growth",
  },
  fr: {
    engagement: "Diagnostic de 45 minutes, sans frais",
    lignes: ["Votre PME grandit.", "Votre structure doit suivre.", "On construit la suite ensemble."],
    intro:
      "Superflux aide les PME à structurer leurs opérations, clarifier leur image et leur positionnement, et à grandir avec une feuille de route de 90 jours.",
    reserver: "Réserver un diagnostic",
    reserverDetail: "45 minutes, sans frais, en visioconférence",
    offre: "Voir l'offre entreprises",
    offreDetail: "Structuration, branding, positionnement, croissance",
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

      <Container className="relative z-10 flex flex-1 flex-col justify-center py-8 sm:py-16 lg:py-20">
        <div className="flex max-w-2xl flex-col lg:max-w-3xl">
          <p className="order-1 inline-flex w-fit items-center gap-2 rounded-full border border-invert-line bg-white/[0.07] px-4 py-1.5 text-[0.72rem] font-medium tracking-[0.12em] text-ink-invert uppercase backdrop-blur-sm">
            <Check aria-hidden="true" className="size-3.5 text-accent" />
            {t.engagement}
          </p>

          <Display
            as="h1"
            taille="geant"
            className="order-2 mt-6 text-[clamp(1.95rem,5.1vw,3.5rem)] leading-[1.02] font-light text-ink-invert sm:mt-8"
          >
            <span className="block">{t.lignes[0]}</span>
            <span className="block text-ink-invert-muted">{t.lignes[1]}</span>
            <span className="block font-extrabold text-accent">{t.lignes[2]}</span>
          </Display>

          <p className="order-4 mt-8 max-w-lg text-[0.95rem] leading-[1.75] text-ink-invert-muted sm:order-3 sm:mt-7 sm:text-[1.05rem]">
            {t.intro}
          </p>

          <div className="order-3 mt-6 flex flex-col gap-3 sm:order-4 sm:mt-9 sm:flex-row">
            {(
              [
                {
                  href: lien(langue, "contact"),
                  libelle: t.reserver,
                  detail: t.reserverDetail,
                  plein: true,
                },
                {
                  href: lien(langue, "entreprises"),
                  libelle: t.offre,
                  detail: t.offreDetail,
                  plein: false,
                },
              ] as const
            ).map((choix) => (
              <Link
                key={choix.href}
                href={choix.href}
                className={`group flex flex-1 items-center justify-between gap-4 rounded-2xl px-5 py-4 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  choix.plein
                    ? "bg-accent text-surface-invert hover:bg-white"
                    : "border border-invert-line bg-white/[0.07] text-ink-invert backdrop-blur-sm hover:bg-white/[0.14]"
                }`}
              >
                <span className="flex flex-col gap-1">
                  <span className="text-[0.98rem] font-bold">{choix.libelle}</span>

                  <span className="text-[0.8rem] leading-[1.4] font-medium">
                    {choix.detail}
                  </span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

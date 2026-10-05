import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  tone = "clair",
  grille = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "clair" | "creuse" | "sombre";

  grille?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate py-20 sm:py-28",
        sectionTones[tone],
        tone === "sombre" && "sur-sombre",
        className,
      )}
    >
      {grille ? (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 grille-fondue",
            tone === "sombre" ? "grille-invert" : "grille",
          )}
        />
      ) : null}
      <Container className="scroll-reveal-contenu">{children}</Container>
    </section>
  );
}

const sectionTones = {
  clair: "bg-surface text-ink",
  creuse: "bg-surface-raised text-ink",
  sombre: "bg-surface-invert text-ink-invert",
} as const;

export function Eyebrow({
  children,
  tone = "clair",
  align = "left",
}: {
  children: ReactNode;
  tone?: "clair" | "sombre";

  align?: "left" | "center";
}) {
  const filet = cn("h-px w-7", tone === "sombre" ? "bg-accent/60" : "bg-brand/50");
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[0.68rem] font-medium tracking-[0.24em] uppercase",
        tone === "sombre" ? "text-accent" : "text-brand",
      )}
    >
      <span className={filet} />
      {children}
      {align === "center" ? <span className={filet} /> : null}
    </span>
  );
}

export function Fort({
  children,
  tone = "clair",
}: {
  children: ReactNode;
  tone?: "clair" | "sombre";
}) {
  return (
    <strong
      className={cn(
        "font-semibold",
        tone === "sombre" ? "text-accent" : "text-brand",
      )}
    >
      {children}
    </strong>
  );
}

export function Display({
  children,
  className,
  as: Tag = "h2",
  taille = "moyen",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  taille?: "geant" | "grand" | "moyen";
}) {
  return (
    <Tag
      className={cn(
        "font-display font-extrabold text-balance",
        displayTailles[taille],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

const displayTailles = {
  geant: "text-[clamp(2.15rem,7.2vw,5.2rem)] leading-[0.94] tracking-[-0.04em]",
  grand: "text-[clamp(2.1rem,5.2vw,3.9rem)] leading-[0.98] tracking-[-0.035em]",
  moyen: "text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.04] tracking-[-0.03em]",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Tag = "h2",
  tone = "clair",
  taille = "grand",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";

  as?: "h1" | "h2";
  tone?: "clair" | "sombre";
  taille?: "geant" | "grand" | "moyen";
}) {
  const centered = align === "center";
  const sombre = tone === "sombre";
  return (
    <div
      className={
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"
      }
    >
      {eyebrow ? (
        <div className={centered ? "flex justify-center" : ""}>
          <Eyebrow tone={tone} align={align}>
            {eyebrow}
          </Eyebrow>
        </div>
      ) : null}
      <Display
        as={Tag}
        taille={taille}
        className={cn("mt-6", sombre ? "text-ink-invert" : "text-ink")}
      >
        {title}
      </Display>
      {subtitle ? (
        <p
          className={cn(
            "mt-6 max-w-xl text-[1.05rem] leading-[1.75]",
            centered && "mx-auto",
            sombre ? "text-ink-invert-muted" : "text-ink-muted",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  titre,
  titreAccent,
  intro,
  children,
}: {
  eyebrow: string;
  titre: ReactNode;
  titreAccent?: string;
  intro?: ReactNode;

  children?: ReactNode;
}) {
  return (
    <section className="page-hero sur-sombre relative isolate overflow-hidden bg-surface-invert text-ink-invert">
      <div
        aria-hidden="true"
        className="grille-invert grille-fondue pointer-events-none absolute inset-0 -z-10"
      />
      <Anneaux className="top-[-30%] right-[-14%] hidden size-[32rem] lg:block" />
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <Eyebrow tone="sombre">{eyebrow}</Eyebrow>
          <Display as="h1" taille="grand" className="mt-6 text-ink-invert">
            {titre}
            {titreAccent ? (
              <>
                {" "}
                <em className="text-accent italic">{titreAccent}</em>
              </>
            ) : null}
          </Display>
          {intro ? (
            <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.8] text-ink-invert-muted">
              {intro}
            </p>
          ) : null}
          {children ? <div className="mt-9">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost" | "invert";
  withArrow?: boolean;
};

export function ButtonLink({
  variant = "primary",
  withArrow = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonBase, buttonVariants[variant], className)}
      {...props}
    >
      {children}
      {withArrow ? (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
}

const buttonBase =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border px-7 py-3.5 text-[0.9rem] font-semibold tracking-[-0.01em] transition-[background-color,color,border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5";

const buttonVariants = {
  primary: "border-transparent bg-brand text-on-brand hover:bg-brand-strong",
  secondary:
    "border-line-strong bg-surface text-ink hover:border-brand hover:text-brand",
  ghost: "border-transparent text-ink-muted hover:text-brand",

  invert:
    "border-transparent bg-accent text-surface-invert hover:bg-ink-invert",
} as const;

export function Card({
  children,
  className,
  tone = "clair",
}: {
  children: ReactNode;
  className?: string;
  tone?: "clair" | "sombre";
}) {
  return (
    <div
      className={cn(
        "carte overflow-hidden p-7",
        tone === "sombre"
          ? "border border-invert-line bg-invert-raised hover:border-accent/40"
          : "border border-line bg-surface hover:border-line-strong",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Anneaux({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute -z-10", className)}
    >
      <div className="absolute inset-0 rounded-full border border-accent/15 motion-safe:animate-[anneau-tourne_44s_linear_infinite]" />
      <div className="absolute inset-[18%] rounded-full border border-accent/10 motion-safe:animate-[anneau-tourne_30s_linear_infinite_reverse]" />
      <div className="absolute inset-[36%] rounded-full border border-dashed border-accent/10" />
    </div>
  );
}

export function Filigrane({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -z-10 bg-accent/[0.13]",
        "lg:[mask-image:url(/logo-symbole.webp)] lg:[mask-position:center] lg:[mask-repeat:no-repeat] lg:[mask-size:contain]",
        className,
      )}
    />
  );
}

export function Stat({
  value,
  label,
  tone = "clair",
}: {
  value: string;
  label: string;
  tone?: "clair" | "sombre";
}) {
  return (
    <div>
      <div
        className={cn(
          "font-display text-[clamp(2.2rem,4vw,3.25rem)] leading-none font-extrabold tracking-[-0.04em]",
          tone === "sombre" ? "text-accent" : "text-brand",
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "mt-3 text-sm leading-snug",
          tone === "sombre" ? "text-ink-invert-muted" : "text-ink-muted",
        )}
      >
        {label}
      </div>
    </div>
  );
}

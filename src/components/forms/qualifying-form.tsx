"use client";

import { useId, useState } from "react";
import { track } from "@vercel/analytics";
import type { Langue } from "@/lib/i18n";

const T = {
  en: {
    tropDeDemandes:
      "Too many requests from this connection. Please try again in a few minutes, or give us a call.",
    echec: "Your message couldn't be sent. Please try again, or email us directly.",
    succes: "Message received. We'll get back to you soon, usually within one business day.",
    reseau: "Your message couldn't be sent. Check your connection, or email us directly.",
    siteWeb: "Website",
    nom: "Your name",
    courriel: "Your email",
    telephone: "Your phone",
    entreprise: "Your company",
    facultatif: "(optional)",
    message: "What you're looking to solve",
    envoi: "Sending",
    envoyer: "Send",
  },
  fr: {
    tropDeDemandes:
      "Trop de demandes envoyées depuis cette connexion. Réessayez dans quelques minutes, ou appelez-nous.",
    echec: "L'envoi n'a pas fonctionné. Réessayez, ou écrivez-nous directement par courriel.",
    succes: "Message reçu. Nous vous répondons rapidement, en général sous un jour ouvrable.",
    reseau: "L'envoi n'a pas fonctionné. Vérifiez votre connexion, ou écrivez-nous directement par courriel.",
    siteWeb: "Site web",
    nom: "Votre nom",
    courriel: "Votre courriel",
    telephone: "Votre téléphone",
    entreprise: "Votre entreprise",
    facultatif: "(facultatif)",
    message: "Ce que vous cherchez à régler",
    envoi: "Envoi en cours",
    envoyer: "Envoyer",
  },
};

type Etat = "repos" | "envoi" | "succes" | "erreur";

export function QualifyingForm({ langue }: { langue: Langue }) {
  const t = T[langue];
  const [etat, setEtat] = useState<Etat>("repos");
  const [message, setMessage] = useState("");
  const statusId = useId();

  async function envoyer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEtat("envoi");

    const data = { ...Object.fromEntries(new FormData(event.currentTarget)), langue };

    try {
      const reponse = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!reponse.ok) {
        setEtat("erreur");
        setMessage(
          reponse.status === 429 ? t.tropDeDemandes : t.echec,
        );
        return;
      }

      setEtat("succes");
      track("formulaire_envoye", { langue });
      setMessage(t.succes);
    } catch {
      setEtat("erreur");
      setMessage(t.reseau);
    }
  }

  if (etat === "succes") {
    return (
      <p
        role="status"
        className="rounded-2xl border border-line bg-surface-raised p-8 text-sm leading-relaxed text-ink"
      >
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={envoyer} className="space-y-5" noValidate={false}>

      <div aria-hidden className="hidden">
        <label htmlFor="site-web">{t.siteWeb}</label>
        <input id="site-web" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Champ nom="name" label={t.nom} facultatif={t.facultatif} autoComplete="name" requis />
      <Champ
        nom="email"
        label={t.courriel}
        facultatif={t.facultatif}
        type="email"
        autoComplete="email"
        requis
      />
      <Champ
        nom="phone"
        label={t.telephone}
        facultatif={t.facultatif}
        type="tel"
        autoComplete="tel"
      />
      <Champ
        nom="company"
        label={t.entreprise}
        facultatif={t.facultatif}
        autoComplete="organization"
      />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          className={champClasses}
        />
      </div>

      <button
        type="submit"
        disabled={etat === "envoi"}
        aria-describedby={etat === "erreur" ? statusId : undefined}
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-on-brand transition-colors hover:bg-brand-strong disabled:opacity-60"
      >
        {etat === "envoi" ? t.envoi : t.envoyer}
      </button>

      {etat === "erreur" ? (
        <p id={statusId} role="status" className="text-sm text-danger">
          {message}
        </p>
      ) : null}
    </form>
  );
}

const champClasses =
  "mt-2 block w-full rounded-xl border border-line px-4 py-3 text-sm text-ink outline-none focus:border-brand";

function Champ({
  nom,
  label,
  facultatif,
  type = "text",
  autoComplete,
  requis = false,
}: {
  nom: string;
  label: string;
  facultatif: string;
  type?: string;
  autoComplete?: string;
  requis?: boolean;
}) {
  return (
    <div>
      <label htmlFor={nom} className="block text-sm font-medium text-ink">
        {label}
        {requis ? null : (
          <span className="ml-1 font-normal text-ink-muted">{facultatif}</span>
        )}
      </label>
      <input
        id={nom}
        name={nom}
        type={type}
        autoComplete={autoComplete}
        required={requis}
        className={champClasses}
      />
    </div>
  );
}

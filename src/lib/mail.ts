import type { Piste } from "./piste";

const API_BREVO = "https://api.brevo.com/v3/smtp/email";
// Envoi des demandes du formulaire par Brevo.
// Variables : BREVO_API_KEY, LEAD_FROM_EMAIL (expéditeur vérifié dans Brevo), LEAD_TO_EMAIL.
export async function envoyerPisteParCourriel(piste: Piste): Promise<boolean> {
  const apiKey = process.env.BREVO_API_KEY;
  const destinataire = process.env.LEAD_TO_EMAIL;
  const expediteur = process.env.LEAD_FROM_EMAIL;

  if (!apiKey || !destinataire || !expediteur) {
    if (process.env.NODE_ENV === "production") {
      console.error(
        "BREVO_API_KEY, LEAD_TO_EMAIL ou LEAD_FROM_EMAIL manquant : la piste ne peut pas être livrée.",
      );
      return false;
    }
    console.info("[lead] pas de configuration Brevo, piste journalisée :", piste);
    return true;
  }

  const lignes: [string, string][] = [
    ["Nom", piste.nom],
    ["Courriel", piste.courriel],
    ["Téléphone", piste.telephone || "non fourni"],
    ["Entreprise", piste.entreprise || "non fournie"],
    ["Parcours", piste.parcours],
    ["Langue du site", piste.langue],
  ];

  const html = `
    <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0e1116">
      <h2 style="margin:0 0 16px">Nouvelle demande depuis le site</h2>
      <table style="border-collapse:collapse">
        ${lignes
          .map(
            ([label, valeur]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#5a6472">${label}</td><td style="padding:4px 0"><strong>${escapeHtml(valeur)}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap">${escapeHtml(piste.message)}</p>
    </div>
  `;

  try {
    const reponse = await fetch(API_BREVO, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Site Superflux", email: expediteur },
        to: [{ email: destinataire }],
        replyTo: { email: piste.courriel, name: piste.nom },
        subject: `Nouvelle demande, ${piste.nom}${piste.entreprise ? ` (${piste.entreprise})` : ""}`,
        htmlContent: html,
      }),
    });

    if (!reponse.ok) {
      console.error("Erreur Brevo:", reponse.status, await reponse.text());
      return false;
    }
    return true;
  } catch (erreur) {
    console.error("Envoi de la piste impossible:", erreur);
    return false;
  }
}

function escapeHtml(valeur: string) {
  return valeur
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

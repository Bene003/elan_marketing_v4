import { NextResponse } from "next/server";
import { createLead, type Piste } from "@/lib/piste";

const LONGUEURS_MAX = {
  name: 120,
  email: 160,
  phone: 40,
  company: 160,
  parcours: 20,
  langue: 2,
  message: 4000,
} as const;

type Champ = keyof typeof LONGUEURS_MAX;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function lireChamp(corps: Record<string, unknown>, champ: Champ) {
  const valeur = corps[champ];
  if (typeof valeur !== "string") return "";
  return valeur.trim().slice(0, LONGUEURS_MAX[champ]);
}

export async function POST(request: Request) {
  let corps: Record<string, unknown>;
  try {
    corps = await request.json();
  } catch {
    return NextResponse.json({ error: "corps_invalide" }, { status: 400 });
  }

  if (typeof corps.website === "string" && corps.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const piste: Piste = {
    nom: lireChamp(corps, "name"),
    courriel: lireChamp(corps, "email"),
    telephone: lireChamp(corps, "phone"),
    entreprise: lireChamp(corps, "company"),
    parcours:
      lireChamp(corps, "parcours") === "particulier"
        ? "particulier"
        : "entreprise",
    langue: lireChamp(corps, "langue") === "fr" ? "français" : "anglais",
    message: lireChamp(corps, "message"),
  };

  if (
    !piste.nom ||
    !EMAIL_RE.test(piste.courriel) ||
    piste.message.length < 10
  ) {
    return NextResponse.json({ error: "champs_invalides" }, { status: 400 });
  }

  const resultat = await createLead(piste);

  if (!resultat.ok) {
    return NextResponse.json({ error: "livraison_impossible" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, transport: resultat.transport });
}

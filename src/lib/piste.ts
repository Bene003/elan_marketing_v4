import { envoyerPisteParCourriel } from "./mail";

export type Piste = {
  nom: string;
  courriel: string;
  telephone: string;
  entreprise: string;
  parcours: string;

  langue: string;
  message: string;
};

export type ResultatPiste = {
  ok: boolean;

  transport: "courriel" | "aucun";
};

export async function createLead(piste: Piste): Promise<ResultatPiste> {
  const courriel = await envoyerPisteParCourriel(piste);
  return { ok: courriel, transport: courriel ? "courriel" : "aucun" };
}

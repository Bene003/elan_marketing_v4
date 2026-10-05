// Coordonnées et identité, utilisées partout sur le site.
export const entreprise = {
  nom: "Superflux",
  raisonSociale: "9544-4386 Québec inc.",
  representant: "Yliès El Safadi",
  fonction: { en: "Founder", fr: "Fondateur" },
  adresse: {
    rue: "2700 rue Angus",
    ville: "Montréal",
    region: "QC",
    codePostal: "H2H 1P3",
    pays: "CA",
  },
  telephone: "+1 579-373-0226",
  telephoneAffiche: "579 373-0226",
  courriel: "ysafadi@elanmarketinginc.ca",
  // Domaine définitif du site : sert aux adresses canoniques et au plan du site.
  domaine: "https://www.elanmarketingagence.ca",
  ficheGoogle: "",
} as const;

export const siteName = entreprise.nom;
export const baseUrl = entreprise.domaine;

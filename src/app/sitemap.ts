import type { MetadataRoute } from "next";
import { baseUrl } from "@/content/entreprise";
import { LANGUES, lien, type Page } from "@/lib/i18n";

const pages: { page: Page; priorite: number }[] = [
  { page: "accueil", priorite: 1 },
  { page: "entreprises", priorite: 0.9 },
  { page: "contact", priorite: 0.9 },
  { page: "services", priorite: 0.8 },
  { page: "methode", priorite: 0.7 },
  { page: "resultats", priorite: 0.7 },
  { page: "a-propos", priorite: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const modifiee = new Date();

  return pages.flatMap(({ page, priorite }) =>
    LANGUES.map((langue) => ({
      url: `${baseUrl}${lien(langue, page)}`,
      lastModified: modifiee,
      changeFrequency: "monthly" as const,
      priority: priorite,
      alternates: {
        languages: {
          "en-CA": `${baseUrl}${lien("en", page)}`,
          "fr-CA": `${baseUrl}${lien("fr", page)}`,
          "x-default": `${baseUrl}${lien("en", page)}`,
        },
      },
    })),
  );
}

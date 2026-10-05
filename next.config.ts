import type { NextConfig } from "next";
import { PAGES, SLUGS } from "./src/lib/i18n";

const traduites = PAGES.filter((page) => SLUGS.en[page] !== SLUGS.fr[page]);

// Les pages vivent dans app/[lang]/<dossier français> ; les adresses anglaises
// (/en/businesses...) sont réécrites vers ces dossiers.
const nextConfig: NextConfig = {
  experimental: {

    globalNotFound: true,
  },
  async rewrites() {

    return {
      beforeFiles: traduites.map((page) => ({
        source: `/en/${SLUGS.en[page]}`,
        destination: `/en/${SLUGS.fr[page]}`,
      })),
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [
      ...traduites.map((page) => ({
        source: `/en/${SLUGS.fr[page]}`,
        destination: `/en/${SLUGS.en[page]}`,
        permanent: true,
      })),

      { source: "/en/individuals", destination: "/en/businesses", permanent: true },
      { source: "/en/particuliers", destination: "/en/businesses", permanent: true },
      { source: "/fr/particuliers", destination: "/fr/entreprises", permanent: true },
      { source: "/fr/individuals", destination: "/fr/entreprises", permanent: true },
    ];
  },
};

export default nextConfig;

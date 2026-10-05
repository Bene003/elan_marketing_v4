import type { MetadataRoute } from "next";
import { baseUrl } from "@/content/entreprise";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",

      disallow: "/api/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

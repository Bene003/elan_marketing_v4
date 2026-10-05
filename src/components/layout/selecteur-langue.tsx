"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LANGUE_COOKIE, lien, pageDuChemin, type Langue } from "@/lib/i18n";

export function SelecteurLangue({
  langue,
  libelle,
  className,
}: {
  langue: Langue;

  libelle?: string;
  className?: string;
}) {
  const chemin = usePathname();
  const autre: Langue = langue === "en" ? "fr" : "en";
  const page = pageDuChemin(chemin)?.page ?? "accueil";

  return (
    <Link
      href={lien(autre, page)}
      hrefLang={autre}
      lang={autre}
      onClick={() => {
        document.cookie = `${LANGUE_COOKIE}=${autre}; path=/; max-age=31536000; SameSite=Lax`;
      }}
      className={className}
    >
      {libelle ?? (
        <>
          <span aria-hidden="true">{autre.toUpperCase()}</span>
          <span className="sr-only">{autre === "fr" ? "Français" : "English"}</span>
        </>
      )}
    </Link>
  );
}

import { NextResponse, type NextRequest } from "next/server";
import {
  LANGUE_COOKIE,
  LANGUE_PAR_DEFAUT,
  PAGES,
  SLUGS,
  estLangue,
  lien,
  type Langue,
  type Page,
} from "@/lib/i18n";

const ANCIENNES: Record<string, [Page, string?]> = {
  home: ["accueil"],
  about: ["a-propos"],
  method: ["methode"],
  results: ["resultats"],
  career: ["a-propos", "carriere"],
};

function langueDuVisiteur(request: NextRequest): Langue {
  const choisie = request.cookies.get(LANGUE_COOKIE)?.value;
  if (choisie && estLangue(choisie)) return choisie;

  const preferees = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((morceau) => {
      const [code = "", q] = morceau.trim().split(";q=");
      return { code: code.slice(0, 2).toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  return preferees.find((p) => estLangue(p.code))?.code as Langue | undefined ??
    LANGUE_PAR_DEFAUT;
}

// Adresses sans langue (racine, anciens liens) : redirige vers /en ou /fr
// selon le choix mémorisé, puis la langue du navigateur.
export function proxy(request: NextRequest) {
  const segment = request.nextUrl.pathname.split("/")[1]?.toLowerCase() ?? "";
  const url = request.nextUrl.clone();

  const ancienne = ANCIENNES[segment];
  if (ancienne) {
    const [page, ancre] = ancienne;
    url.pathname = lien("fr", page);
    url.hash = ancre ? `#${ancre}` : "";
    return NextResponse.redirect(url, 308);
  }

  const page =
    segment === ""
      ? "accueil"
      : segment === "particuliers" || segment === "individuals"
        ? "entreprises"
        : PAGES.find((p) => SLUGS.fr[p] === segment || SLUGS.en[p] === segment);
  if (!page) return NextResponse.next();

  url.pathname = lien(langueDuVisiteur(request), page);
  const reponse = NextResponse.redirect(url, 307);
  reponse.headers.set("Vary", "Accept-Language, Cookie");
  return reponse;
}

export const config = {

  matcher: ["/((?!en(?:/|$)|fr(?:/|$)|api/|_next/|_vercel/|.*\\..*).*)"],
};

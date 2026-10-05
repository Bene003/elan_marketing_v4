import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { gzipSync } from "node:zlib";

const BUDGETS_KO = {
  "/": 155,
  "/entreprises": 200,
  "/particuliers": 200,
  "/methode": 200,
  defaut: 175,
};

const dossier = ".next/server/app";

if (!existsSync(dossier)) {
  console.error("Aucune build trouvée. Lancer `npm run build` d'abord.");
  process.exit(1);
}

const fichiers = readdirSync(dossier, { recursive: true })
  .map(String)
  .filter((f) => /^(en|fr)(\/[^/]+)?\.html$/.test(f));

const resultats = fichiers
  .map((fichier) => {
    const html = readFileSync(join(dossier, fichier), "utf8");
    const scripts = [...html.matchAll(/<script([^>]*)>/g)]
      .filter((m) => !m[1].includes("noModule"))
      .map((m) => m[1].match(/src="\/_next\/(static\/[^"]+\.js)"/)?.[1])
      .filter(Boolean);

    const poids = [...new Set(scripts)].reduce((total, chemin) => {
      const p = join(".next", chemin);
      return existsSync(p) ? total + gzipSync(readFileSync(p)).length : total;
    }, 0);

    const route = `/${fichier.slice(0, -5)}`;
    const page = route.replace(/^\/(en|fr)/, "") || "/";
    return { route, page, ko: poids / 1024 };
  })
  .sort((a, b) => b.ko - a.ko);

let depassements = 0;

for (const { route, page, ko } of resultats) {
  const budget = BUDGETS_KO[page] ?? BUDGETS_KO.defaut;
  const depasse = ko > budget;
  if (depasse) depassements += 1;
  console.log(
    `${depasse ? "DÉPASSÉ" : "  ok   "}  ${ko.toFixed(1).padStart(7)} ko / ${String(budget).padStart(3)} ko   ${route}`,
  );
}

if (depassements > 0) {
  console.error(`\n${depassements} route(s) hors budget.`);
  process.exit(1);
}
console.log("\nBudget de premier chargement tenu sur toutes les routes.");

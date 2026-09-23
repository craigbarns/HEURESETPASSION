import { existsSync } from "node:fs";
import { brands } from "../src/data/brands.ts";
import { watches } from "../src/data/watches.ts";
import { services, afterSales } from "../src/data/services.ts";
import { store } from "../src/data/store.ts";

const errors: string[] = [];
function check(condition: unknown, message: string) {
  if (!condition) errors.push(message);
}
function slugs(items: { slug: string }[], label: string) {
  const seen = new Set<string>();
  for (const item of items) {
    check(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug), `${label}: slug invalide « ${item.slug} »`);
    check(!seen.has(item.slug), `${label}: slug dupliqué « ${item.slug} »`);
    seen.add(item.slug);
  }
}
function image(src: string, context: string) {
  check(
    src.startsWith("/images/") && !src.includes(".."),
    `${context}: utiliser un chemin local /images/...`,
  );
  check(existsSync(`public${src}`), `${context}: fichier manquant ${src}`);
}
slugs(brands, "Marques");
slugs(watches, "Montres");
slugs(services, "Services");
slugs(afterSales.services, "SAV");
for (const brand of brands) {
  check(
    brand.name.trim() && brand.description.trim(),
    `${brand.slug}: nom ou description manquant`,
  );
  if (brand.logo) image(brand.logo, brand.slug);
  if (brand.image) {
    image(brand.image.src, brand.slug);
    check(brand.image.alt.trim(), `${brand.slug}: texte alternatif manquant`);
  }
}
for (const watch of watches) {
  check(
    brands.some((b) => b.slug === watch.brand),
    `${watch.slug}: marque inconnue ${watch.brand}`,
  );
  check(
    watch.model.trim() && watch.description.trim(),
    `${watch.slug}: modèle ou description manquant`,
  );
  check(
    watch.price === null || (Number.isFinite(watch.price) && watch.price > 0),
    `${watch.slug}: prix invalide`,
  );
  check(
    ["available", "on-request", "unavailable"].includes(watch.availability),
    `${watch.slug}: disponibilité invalide`,
  );
  check(!watch.diameter || watch.diameter > 0, `${watch.slug}: diamètre invalide`);
  watch.images.forEach((item) => {
    image(item.src, watch.slug);
    check(item.alt.trim(), `${watch.slug}: texte alternatif manquant`);
  });
}
if (
  process.env.SITE_INDEXABLE === "true" ||
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENABLED === "true"
) {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  check(
    url && /^https:\/\/[^\s/]+\.[^\s/]+\/?$/.test(url),
    "Publication : NEXT_PUBLIC_SITE_URL doit contenir le domaine HTTPS définitif.",
  );
  for (const key of [
    "companyName",
    "legalForm",
    "registration",
    "publicationDirector",
    "email",
    "retentionPeriod",
  ] as const)
    check(store.legal[key], `Publication : renseigner store.legal.${key}.`);
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else
  console.log(
    `Données vérifiées : ${brands.length} marque(s), ${watches.length} montre(s), ${services.length} prestation(s). Les listes vides sont intentionnelles.`,
  );

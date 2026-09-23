import type { Metadata } from "next";
import { store } from "@/data/store";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.URL;
export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;
export const indexable = Boolean(
  siteUrl &&
  process.env.SITE_INDEXABLE === "true" &&
  (!process.env.CONTEXT || process.env.CONTEXT === "production"),
);

export function metadata(
  title: string,
  description: string,
  path: string,
  noindex = false,
): Metadata {
  return {
    title,
    description,
    alternates: siteUrl ? { canonical: new URL(path, siteUrl).href } : undefined,
    openGraph: {
      title: `${title} — ${store.name}`,
      description,
      type: "website",
      locale: "fr_FR",
      siteName: store.name,
      ...(siteUrl ? { url: new URL(path, siteUrl).href } : {}),
      images: [
        {
          url: "/images/social.jpg",
          width: 1200,
          height: 630,
          alt: "Heures & Passion — Horlogerie à Marseille",
        },
      ],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/social.jpg"] },
    robots: noindex || !indexable ? { index: false, follow: true } : { index: true, follow: true },
  };
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

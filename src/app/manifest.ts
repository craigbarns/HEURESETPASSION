import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Heures & Passion — Horlogerie Marseille",
    short_name: "Heures & Passion",
    description: "Réparation de montres et bracelets au 66 Rue Paradis, 13006 Marseille.",
    start_url: "/",
    display: "browser",
    lang: "fr",
    background_color: "#f7f6f2",
    theme_color: "#171e19",
    icons: [
      { src: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

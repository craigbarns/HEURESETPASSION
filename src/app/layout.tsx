import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { SiteStructuredData } from "@/components/structured-data";
import { siteUrl, indexable } from "@/lib/site";
import "./globals.css";

const manrope = localFont({
  src: "../../public/fonts/manrope-variable.woff2",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
});
const cormorant = localFont({
  src: [
    { path: "../../public/fonts/cormorant-regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/cormorant-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Heures & Passion — Réparation de montres & bracelets à Marseille",
    template: "%s | Heures & Passion Marseille",
  },
  description:
    "Réparation et entretien de montres, bracelets et bracelets sur mesure. Retrouvez Heures & Passion au 66 Rue Paradis, 13006 Marseille.",
  applicationName: "Heures & Passion",
  creator: "Heures & Passion",
  category: "Horlogerie",
  robots: { index: indexable, follow: true },
  icons: { icon: "/icon.svg", apple: "/images/apple-touch-icon.png" },
  manifest: "/manifest.webmanifest",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#171e19" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
        <SiteStructuredData />
      </body>
    </html>
  );
}

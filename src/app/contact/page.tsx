import { Suspense } from "react";
import { PageIntro } from "@/components/page-intro";
import { ContactForm } from "@/components/contact-form";
import { StoreLocation } from "@/components/store-location";
import { TextLink } from "@/components/ui";
import { store } from "@/data/store";
import { metadata as createMetadata } from "@/lib/site";
export const metadata = createMetadata(
  "Contact & visite en boutique",
  "Réparation de montre, entretien ou bracelet : contactez Heures & Passion au 04 91 54 99 98 ou au 66 Rue Paradis, 13006 Marseille.",
  "/contact",
);
export default function ContactPage() {
  return (
    <div className="inner-page">
      <PageIntro
        current="Contact"
        eyebrow="Le début d’une conversation"
        title={
          <>
            Prenons <em>contact.</em>
          </>
        }
        description="Une montre à réparer ou à entretenir, un bracelet à remplacer ou à réaliser sur mesure ? Écrivez-nous ou appelez la boutique pour préparer votre visite."
      />
      <div className="container contact-layout page-section">
        <Suspense fallback={<p>Chargement du formulaire…</p>}>
          <ContactForm />
        </Suspense>
        <aside className="contact-aside">
          <p className="eyebrow">En direct avec la boutique</p>
          <h2>Heures & Passion</h2>
          <address>
            66 Rue Paradis
            <br />
            13006 Marseille
            <br />
            France
          </address>
          <a href={store.phoneHref} className="phone-number">
            {store.phone}
          </a>
          <p className="small-text">
            Pour une demande de rendez-vous, indiquez vos disponibilités. La date sera convenue avec
            la boutique après échange.
          </p>
          <TextLink href={store.directionsUrl} external>
            Calculer mon itinéraire
          </TextLink>
        </aside>
      </div>
      <StoreLocation withMap />
    </div>
  );
}

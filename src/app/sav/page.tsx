import { PageIntro } from "@/components/page-intro";
import { TextLink } from "@/components/ui";
import { afterSales } from "@/data/services";
import { metadata as createMetadata } from "@/lib/site";
export const metadata = createMetadata(
  "Suivi de réparation",
  "Contactez Heures & Passion à Marseille pour le suivi d’une réparation ou une question sur l’intervention réalisée sur votre montre.",
  "/sav",
  !afterSales.confirmed,
);
export default function SavPage() {
  return (
    <div className="inner-page">
      <PageIntro
        current="Suivi de réparation"
        eyebrow="Votre montre, notre attention"
        title={
          <>
            Le suivi de votre <em>réparation.</em>
          </>
        }
        description="Une question sur une réparation en cours ou une intervention réalisée ? Contactez la boutique."
      />
      <section className="container page-section">
        <div className="service-notice">
          <div>
            <p className="eyebrow">Restons en contact</p>
            <h2>
              Une question
              <br />
              <em>sur votre montre ?</em>
            </h2>
          </div>
          <div>
            <p>
              Pour le suivi d’une réparation, précisez votre nom et la montre concernée lors de
              votre échange avec la boutique. Pour une nouvelle demande, retrouvez nos prestations
              de réparation, d’entretien et de bracelets.
            </p>
            <TextLink href="/services">Découvrir nos prestations horlogères</TextLink>
            <br />
            <TextLink href="/contact?objet=sav">Contacter la boutique pour un suivi</TextLink>
          </div>
        </div>
      </section>
    </div>
  );
}

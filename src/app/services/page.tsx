import { PageIntro } from "@/components/page-intro";
import { TextLink } from "@/components/ui";
import { services } from "@/data/services";
import { store } from "@/data/store";
import { metadata as createMetadata } from "@/lib/site";
export const metadata = createMetadata(
  "Réparation, entretien & bracelets",
  "Changement de pile, bracelets sur mesure, contrôle d’étanchéité, polissage et révision de montres quartz et automatiques chez Heures & Passion à Marseille.",
  "/services",
);
export default function ServicesPage() {
  return (
    <div className="inner-page">
      <PageIntro
        current="Réparation & entretien"
        eyebrow="Nos prestations horlogères"
        title={
          <>
            Le soin <em>du détail.</em>
          </>
        }
        description="Du changement de pile à la révision du mouvement, du polissage au bracelet sur mesure : onze façons de prendre soin de votre montre."
      />
      <div className="container page-section">
        {services.length ? (
          <div className="service-list">
            {services.map((service, index) => (
              <article key={service.slug} id={service.slug} className="service-item service-item--numbered">
                <span className="service-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div className="service-item-copy">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                {service.details && <p>{service.details}</p>}
                </div>
                <TextLink href={`/contact?objet=${service.slug.includes("bracelet") ? "bracelet" : "montre"}`}>Parlons-en</TextLink>
              </article>
            ))}
          </div>
        ) : (
          <div className="service-notice">
            <div>
              <p className="eyebrow">Les prestations de la boutique</p>
              <h2>
                Parlons de
                <br />
                <em>votre demande.</em>
              </h2>
            </div>
            <div>
              <p>
                Le détail de nos prestations sera publié après confirmation. Pour savoir si nous
                pouvons répondre à votre besoin, contactez directement la boutique avant votre
                déplacement.
              </p>
              <TextLink href={store.phoneHref}>Appeler le {store.phone}</TextLink>
            </div>
          </div>
        )}
        <div className="mt-10">
          <TextLink href="/contact?objet=autre">Écrire à la boutique</TextLink>
        </div>
      </div>
    </div>
  );
}

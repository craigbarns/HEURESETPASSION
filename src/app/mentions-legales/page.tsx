import { PageIntro } from "@/components/page-intro";
import { store } from "@/data/store";
import { metadata as createMetadata } from "@/lib/site";
export const metadata = createMetadata(
  "Mentions légales",
  "Informations légales relatives au site Heures & Passion, horlogerie à Marseille.",
  "/mentions-legales",
  true,
);
export default function LegalPage() {
  const fields = [
    ["Raison sociale", store.legal.companyName],
    ["Forme juridique", store.legal.legalForm],
    ["Capital social", store.legal.capital],
    ["Immatriculation", store.legal.registration],
    ["Numéro de TVA", store.legal.vatNumber],
    ["Directeur de publication", store.legal.publicationDirector],
    ["Email de contact", store.legal.email],
  ];
  return (
    <div className="inner-page">
      <PageIntro
        current="Mentions légales"
        eyebrow="Informations du site"
        title="Mentions légales."
        description="Les informations relatives à l’éditeur et à l’hébergement de ce site."
      />
      <div className="container">
        <div className="legal-content">
          {fields.some(([, value]) => !value) && (
            <section className="form-notice">
              <p>
                Informations de l’éditeur en cours de renseignement. Les champs manquants doivent
                être complétés avant la publication du site.
              </p>
            </section>
          )}
          <section>
            <h2>Éditeur</h2>
            <p>
              Enseigne : {store.name}
              <br />
              66 Rue Paradis, 13006 Marseille, France
              <br />
              Téléphone : <a href={store.phoneHref}>{store.phone}</a>
            </p>
            <dl>
              {fields.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value || "À renseigner par l’éditeur"}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section>
            <h2>Hébergement prévu</h2>
            <p>
              Netlify, Inc. Les coordonnées contractuelles de l’hébergeur et le domaine définitif
              doivent être renseignés lors de la mise en ligne. Informations :{" "}
              <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
                netlify.com
              </a>
              .
            </p>
          </section>
          <section>
            <h2>Photographies et crédits</h2>
            <p>
              La photographie de mouvement utilisée comme visuel d’ambiance est l’œuvre de
              Raminagrobis :{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Buren_1000_watch_movement.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                source sur Wikimedia Commons
              </a>
              , sous licence{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC BY-SA 4.0
              </a>
              . Redimensionnement, compression WebP, cadrage et traitement visuel par CSS. Les
              adaptations de cette photographie sont proposées sous la même licence. Il s’agit
              d’un visuel d’ambiance illustrant l’univers de l’horlogerie.
            </p>
            <p>
              Polices Cormorant Garamond et Manrope sous licence SIL Open Font License. Les autres
              emplacements visuels en attente de photographies sont explicitement identifiés.
            </p>
          </section>
          <section>
            <h2>Informations commerciales</h2>
            <p>
              Ce site présente les prestations de réparation et d’entretien de montres ainsi que
              les bracelets proposés par Heures & Passion. Il permet de contacter la boutique pour
              préparer une intervention ou une visite. Il ne permet pas de commander ni de régler
              en ligne.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

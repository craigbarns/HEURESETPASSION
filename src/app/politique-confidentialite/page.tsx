import { PageIntro } from "@/components/page-intro";
import { store } from "@/data/store";
import { metadata as createMetadata } from "@/lib/site";
export const metadata = createMetadata(
  "Politique de confidentialité",
  "Informations sur le formulaire de contact, les données personnelles et les services tiers du site Heures & Passion.",
  "/politique-confidentialite",
  true,
);
export default function PrivacyPage() {
  return (
    <div className="inner-page">
      <PageIntro
        current="Confidentialité"
        eyebrow="Vos données"
        title="Politique de confidentialité."
        description="Comprendre les informations transmises lorsque vous utilisez notre site."
      />
      <div className="container">
        <div className="legal-content">
          <section>
            <h2>Responsable du traitement</h2>
            <p>
              {store.legal.companyName ||
                "L’identité juridique de l’exploitant de Heures & Passion est à compléter avant la mise en ligne."}{" "}
              Adresse de la boutique : 66 Rue Paradis, 13006 Marseille. Contact :{" "}
              <a href={store.phoneHref}>{store.phone}</a>
              {store.legal.email
                ? ` — ${store.legal.email}`
                : ". L’adresse email dédiée aux demandes relatives aux données personnelles reste à renseigner."}
            </p>
          </section>
          <section>
            <h2>Le formulaire de contact</h2>
            <p>
              Lorsque le formulaire est activé et envoyé, les informations transmises sont votre
              nom, votre prénom, votre email, votre numéro de téléphone si vous le renseignez,
              l’objet de votre demande, votre message et votre consentement. Elles servent à
              répondre à votre demande et à organiser les échanges avec la boutique. Les champs
              obligatoires sont signalés par un astérisque. Le téléphone est facultatif.
            </p>
            <p>
              Ce traitement repose sur le consentement donné au moment de l’envoi. Vous pouvez le
              retirer en contactant la boutique, sans remettre en cause le traitement réalisé avant
              ce retrait. Les informations ne sont pas utilisées pour envoyer des communications
              publicitaires.
            </p>
          </section>
          <section>
            <h2>Réception et conservation</h2>
            <p>
              Les demandes sont destinées aux personnes habilitées de Heures & Passion. Netlify
              Forms est le prestataire technique prévu pour leur réception et leur protection contre
              le spam. Des données techniques, notamment l’adresse IP, peuvent être traitées par
              l’hébergeur pour le fonctionnement et la sécurité du service.
            </p>
            <p>
              Durée de conservation :{" "}
              {store.legal.retentionPeriod ||
                "à définir par l’exploitant avant l’activation du formulaire"}
              . La configuration d’hébergement, les sous-traitants, les éventuels transferts hors de
              l’Espace économique européen et leurs garanties doivent être vérifiés dans le contrat
              du prestataire avant activation.{" "}
              <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">
                Consulter la politique de confidentialité de Netlify
              </a>
              .
            </p>
          </section>
          <section>
            <h2>Vos droits</h2>
            <p>
              Vous pouvez demander l’accès à vos données, leur rectification ou leur effacement, la
              limitation de leur traitement et, lorsque les conditions sont réunies, leur
              portabilité. Vous pouvez également retirer votre consentement et adresser une
              réclamation à la{" "}
              <a
                href="https://www.cnil.fr/fr/adresser-une-plainte"
                target="_blank"
                rel="noopener noreferrer"
              >
                CNIL
              </a>
              . Pour exercer vos droits auprès de la boutique, utilisez les coordonnées ci-dessus.
            </p>
          </section>
          <section>
            <h2>Cookies et carte</h2>
            <p>
              Ce site n’installe pas d’outil de mesure d’audience ni de traceur publicitaire. Les
              polices et les images sont hébergées avec le site. La carte Google Maps n’est chargée
              qu’après un clic explicite sur « Afficher la carte Google ». Google reçoit alors des
              informations techniques, dont votre adresse IP, et peut utiliser des cookies selon ses
              propres conditions. Vous pouvez choisir d’ouvrir uniquement le lien d’itinéraire sur
              son site.{" "}
              <a
                href="https://policies.google.com/privacy?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Politique de confidentialité de Google
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

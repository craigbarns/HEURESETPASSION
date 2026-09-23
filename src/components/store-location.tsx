import Image from "next/image";
import { store } from "@/data/store";
import { Button, PhotoPlaceholder, TextLink } from "./ui";
import { Icon } from "./icon";
import { StoreMap } from "./store-map";
export function StoreLocation({ withMap = false }: { withMap?: boolean }) {
  return (
    <section className="store-section" id="boutique" aria-labelledby="store-heading">
      <div className="container store-grid">
        <div className="store-visual" data-reveal>
          {store.boutiqueImage ? (
            <Image
              src={store.boutiqueImage.src}
              alt={store.boutiqueImage.alt}
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          ) : (
            <PhotoPlaceholder />
          )}
          <span className="store-location-tag">
            <Icon name="pin" />
            MARSEILLE · 6<sup>e</sup> ARRONDISSEMENT
          </span>
        </div>
        <div className="store-copy" data-reveal>
          <p className="eyebrow">Une adresse, à Marseille</p>
          <h2 id="store-heading">
            Prenons
            <br />
            <em>le temps.</em>
          </h2>
          <p>
            Une réparation, un entretien, un nouveau bracelet.
            <br />
            Retrouvons-nous rue Paradis.
          </p>
          <address>
            <strong>HEURES & PASSION</strong>
            <span>
              66 Rue Paradis
              <br />
              13006 Marseille
            </span>
            <a href={store.phoneHref}>{store.phone}</a>
          </address>
          {store.hours.length ? (
            <dl className="hours">
              {store.hours.map((row) => (
                <div key={row.days}>
                  <dt>{row.days}</dt>
                  <dd>{row.hours}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="small-text">Pour connaître nos horaires, appelez la boutique.</p>
          )}
          <div className="store-actions">
            <Button href={store.directionsUrl} external>
              Itinéraire
            </Button>
            <TextLink href="/contact?objet=rendez-vous">Préparer ma visite</TextLink>
          </div>
        </div>
      </div>
      {withMap && (
        <div className="container map-container">
          <StoreMap />
        </div>
      )}
    </section>
  );
}

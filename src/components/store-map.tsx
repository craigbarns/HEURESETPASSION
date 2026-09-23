"use client";
import { useState } from "react";
import { store } from "@/data/store";
import { Icon } from "./icon";
export function StoreMap() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="store-map">
      {loaded ? (
        <iframe
          title="Localisation de Heures & Passion, 66 Rue Paradis à Marseille"
          src="https://www.google.com/maps?q=66+Rue+Paradis+13006+Marseille&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer"
          allowFullScreen
        />
      ) : (
        <div className="map-gate">
          <Icon name="pin" />
          <h3>66, rue Paradis.</h3>
          <p>13006 Marseille</p>
          <button type="button" className="button button--dark" onClick={() => setLoaded(true)}>
            Afficher la carte Google
            <Icon name="plus" />
          </button>
          <p className="small-text">
            En affichant la carte, vous autorisez le chargement de Google Maps, qui reçoit notamment
            votre adresse IP.
          </p>
          <a
            className="text-link"
            href={store.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ouvrir l’itinéraire
            <Icon name="external" />
          </a>
        </div>
      )}
    </div>
  );
}

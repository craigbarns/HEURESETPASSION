import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { PhotoPlaceholder, TextLink } from "@/components/ui";
import { StoreLocation } from "@/components/store-location";
import { store } from "@/data/store";
import { metadata as createMetadata } from "@/lib/site";
export const metadata = createMetadata(
  "La Maison",
  "Heures & Passion à Marseille : réparation et entretien de montres, bracelets et bracelets sur mesure au 66 Rue Paradis.",
  "/la-maison",
);
export default function MaisonPage() {
  return (
    <div className="inner-page">
      <PageIntro
        current="La Maison"
        eyebrow="Horlogerie · Rue Paradis · Marseille"
        title={
          <>
            Heures <em>&</em> Passion.
          </>
        }
        description="Réparer, entretenir et accompagner votre montre. Retrouvez-nous à Marseille pour vos réparations et vos bracelets."
      />
      <section className="container story-grid page-section">
        <PhotoPlaceholder />
        <div className="story-copy">
          <p className="eyebrow">Une passion à partager</p>
          <h2>
            Le goût des montres.
            <br />
            <em>Le sens du détail.</em>
          </h2>
          {store.story ? (
            <p>{store.story}</p>
          ) : (
            <>
              <p>
                Heures & Passion vous accueille au 66 Rue Paradis, dans le 6e arrondissement de
                Marseille, pour la réparation et l’entretien de vos montres.
              </p>
              <p>
                Changement de pile, révision, remplacement de verre ou de bracelet : découvrez
                nos prestations et nos bracelets, également proposés sur mesure.
              </p>
            </>
          )}
          <TextLink href="/contact">Rencontrons-nous</TextLink>
        </div>
      </section>
      <section className="editorial-banner">
        <div className="editorial-visual">
          <Image
            src="/images/movement.webp"
            alt="Détail d’un mouvement mécanique, photographie d’ambiance horlogère"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
          />
          <span>PHOTOGRAPHIE D’AMBIANCE HORLOGÈRE</span>
        </div>
        <div className="editorial-copy">
          <p className="eyebrow">Prendre soin de votre montre</p>
          <h2>
            Votre montre,
            <br />
            une attention <em>au quotidien.</em>
          </h2>
          <p>
            Une pile à remplacer, une montre à réviser ou un bracelet à changer ? Contactez-nous
            pour échanger sur votre besoin et préparer votre visite.
          </p>
          <TextLink href="/services" light>
            Découvrir nos prestations
          </TextLink>
        </div>
      </section>
      <StoreLocation />
    </div>
  );
}

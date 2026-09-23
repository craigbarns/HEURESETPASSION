import Image from "next/image";
import { Button } from "./ui";
import { Icon } from "./icon";
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-image">
        <Image
          src="/images/movement.webp"
          alt="Rouages et ponts d’un mouvement mécanique, photographie d’ambiance horlogère"
          fill
          sizes="(max-width: 760px) 150vw, 95vw"
          preload
        />
      </div>
      <div className="hero-shade" />
      <div className="hero-orbit" aria-hidden="true"><span>H&P</span></div>
      <div className="container hero-content">
        <p className="eyebrow">
          <span className="tiny-line" /> RÉPARATION DE MONTRES · MARSEILLE
        </p>
        <h1 id="hero-title">
          Le temps passe.
          <br />
          <em>La passion reste.</em>
        </h1>
        <p className="hero-description">
          Réparation de montres, entretien et bracelets.
          <br />
          Une attention à chaque détail, au cœur de Marseille.
        </p>
        <div className="hero-actions">
          <Button href="/services" variant="light">
            Prendre soin de ma montre
          </Button>
          <a href="#boutique" className="hero-secondary">
            Nous rendre visite
            <Icon name="external" />
          </a>
        </div>
      </div>
      <div className="container hero-bottom">
        <a href="#signature" className="scroll-cue" aria-label="Découvrir la Maison">
          <span>DÉCOUVRIR LA MAISON</span>
          <Icon name="down" />
        </a>
        <p>
          66 RUE PARADIS <span>—</span> MARSEILLE 6<sup>e</sup>
        </p>
        <span className="hero-caption">MOUVEMENT HORLOGER · VISUEL D’AMBIANCE</span>
      </div>
      <div className="hero-side-note" aria-hidden="true">
        RÉPARER · ENTRETENIR · TRANSMETTRE
      </div>
    </section>
  );
}

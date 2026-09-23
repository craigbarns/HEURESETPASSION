import Image from "next/image";
import { Hero } from "@/components/hero";
import { StoreLocation } from "@/components/store-location";
import { ReviewsSection } from "@/components/reviews-section";
import { Button, SectionTitle, TextLink } from "@/components/ui";
import { Icon } from "@/components/icon";
import { metadata as createMetadata } from "@/lib/site";

export const metadata = createMetadata(
  "Réparation de montres & bracelets à Marseille",
  "Réparation et entretien de montres à Marseille : piles, révisions quartz et automatiques, polissage, bracelets et sur mesure. Heures & Passion, 66 rue Paradis.",
  "/",
);

const expertise = [
  { number: "01", title: "L’énergie du quotidien.", label: "Piles & étanchéité", description: "Changement de pile, avec ou sans contrôle d’étanchéité. Les gestes essentiels pour votre montre.", href: "/services#changement-de-pile", motif: "energy" },
  { number: "02", title: "Le cœur du mouvement.", label: "Révisions & réparations", description: "Révision quartz ou automatique, échange de mouvement, aiguillage et interventions partielles.", href: "/services#revision-montre-quartz", motif: "movement" },
  { number: "03", title: "La beauté des détails.", label: "Verre & polissage", description: "Un verre à remplacer, un éclat à raviver. Retrouvez nos prestations pour prendre soin de votre montre.", href: "/services#changement-de-verre", motif: "finish" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="craft-strip" aria-label="Nos domaines d’intervention">
        <span>Réparation</span><i aria-hidden="true">✦</i><span>Entretien</span><i aria-hidden="true">✦</i>
        <span>Bracelets</span><i aria-hidden="true">✦</i><span>Sur mesure</span>
      </div>
      <section className="signature container" id="signature" data-reveal>
        <span className="signature-mark" aria-hidden="true" />
        <p className="eyebrow">L’attention fait la différence</p>
        <h2>Votre montre a une histoire.<br /><em>Faisons-la durer.</em></h2>
        <p>
          Celle que vous portez chaque jour. Celle que l’on vous a transmise.
          Chez Heures & Passion, la réparation et l’entretien prolongent le lien
          qui vous unit à votre montre.
        </p>
        <TextLink href="/la-maison">L’esprit Heures & Passion</TextLink>
      </section>
      <section className="home-services-section" aria-labelledby="expertise-title">
        <div className="container">
          <div className="section-heading-row" data-reveal>
            <SectionTitle eyebrow="Nos prestations" title={<span id="expertise-title">Le soin du <em>détail.</em></span>} />
            <TextLink href="/services">Explorer les 11 prestations</TextLink>
          </div>
          <div className="expertise-grid">
            {expertise.map((item) => (
              <a className="expertise-card" href={item.href} key={item.number} data-reveal>
                <div className="expertise-card-top"><span>{item.number}</span><Icon /></div>
                <div className={`craft-symbol craft-symbol--${item.motif}`} aria-hidden="true"><span /><i /></div>
                <p className="eyebrow">{item.label}</p>
                <h3>{item.title}</h3>
                <p className="expertise-description">{item.description}</p>
                <span className="expertise-link">Découvrir la prestation <span aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="bracelet-section container" id="bracelets" aria-labelledby="bracelets-title">
        <div className="bracelet-visual" role="img" aria-label="Composition illustrative de trois bracelets de montre, teintes cognac, olive et noir">
          <span className="bracelet-visual-label">LE DÉTAIL QUI CHANGE TOUT</span>
          <div className="strap strap--cognac"><span /><i /></div>
          <div className="strap strap--olive"><span /><i /></div>
          <div className="strap strap--black"><span /><i /></div>
          <span className="bracelet-visual-note">ÉTUDE DE MATIÈRES · ILLUSTRATION</span>
          <span className="bracelet-monogram" aria-hidden="true">H&P</span>
        </div>
        <div className="bracelet-copy" data-reveal>
          <p className="eyebrow">Bracelets & sur mesure</p>
          <h2 id="bracelets-title">La même montre.<br /><em>Une autre allure.</em></h2>
          <p>
            Un bracelet change la façon de porter une montre.
            Remplacez le vôtre ou imaginez un bracelet sur mesure :
            parlons de votre montre, de votre poignet et de vos envies.
          </p>
          <ul className="bracelet-details">
            <li><span>01</span> Bracelets de montre</li>
            <li><span>02</span> Changement de bracelet</li>
            <li><span>03</span> Bracelets sur mesure</li>
          </ul>
          <Button href="/contact?objet=bracelet">Parlons de votre bracelet</Button>
        </div>
      </section>
      <section className="editorial-banner">
        <div className="editorial-visual">
          <Image src="/images/movement.webp" alt="Rouages et détails d’un mouvement horloger, photographie d’ambiance" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <span>AU CŒUR DU TEMPS · VISUEL D’AMBIANCE</span>
        </div>
        <div className="editorial-copy" data-reveal>
          <p className="eyebrow">Quartz & automatique</p>
          <h2>Chaque mouvement<br />mérite <em>de l’attention.</em></h2>
          <p>
            Une montre qui s’arrête, une aiguille à reprendre, une révision à prévoir.
            Expliquez-nous ce qui vous amène : nous échangerons sur l’intervention
            adaptée à votre montre.
          </p>
          <TextLink href="/contact?objet=montre" light>Parlons de votre réparation</TextLink>
        </div>
      </section>
      <ReviewsSection />
      <StoreLocation />
    </>
  );
}

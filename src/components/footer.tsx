import Link from "next/link";
import { navigation, store } from "@/data/store";
import { Icon } from "./icon";
export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <Link href="/" className="wordmark">
              <span>
                HEURES <i>&</i> PASSION
              </span>
              <small>HORLOGERIE · MARSEILLE</small>
            </Link>
            <p>Réparation de montres & bracelets.<br />Le temps, notre passion.</p>
          </div>
          <div>
            <p className="eyebrow">La boutique</p>
            <address>
              66 Rue Paradis
              <br />
              13006 Marseille
            </address>
            <a className="footer-phone" href={store.phoneHref}>
              {store.phone}
            </a>
          </div>
          <nav aria-label="Navigation de pied de page">
            <p className="eyebrow">Explorer</p>
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Heures & Passion</p>
          <div>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite">Confidentialité</Link>
          </div>
          <span>MARSEILLE, FRANCE</span>
        </div>
      </footer>
      <nav className="mobile-action-bar" aria-label="Accès rapide">
        <a href={store.phoneHref}>
          <Icon name="phone" />
          Appeler
        </a>
        <a href={store.directionsUrl} target="_blank" rel="noopener noreferrer">
          <Icon name="pin" />
          Itinéraire
        </a>
        <Link href="/contact">
          <Icon name="mail" />
          Contact
        </Link>
      </nav>
    </>
  );
}

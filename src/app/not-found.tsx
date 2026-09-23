import { Button } from "@/components/ui";
export default function NotFound() {
  return (
    <div className="inner-page">
      <div className="container not-found">
        <div className="dial-motif" aria-hidden="true">
          <span />
        </div>
        <p className="eyebrow">Erreur 404</p>
        <h1>
          Le temps semble
          <br />
          <em>s’être arrêté.</em>
        </h1>
        <p>La page que vous recherchez n’est plus disponible.</p>
        <Button href="/">Retour à Heures & Passion</Button>
      </div>
    </div>
  );
}

"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="inner-page">
      <div className="container not-found">
        <p className="eyebrow">Une interruption momentanée</p>
        <h1>
          Un instant,
          <br />
          <em>s’il vous plaît.</em>
        </h1>
        <p>La page n’a pas pu s’afficher. Vous pouvez réessayer.</p>
        <button className="button button--dark" onClick={reset}>
          Réessayer
        </button>
      </div>
    </div>
  );
}

import { store } from "@/data/store";
import { TextLink } from "./ui";
export function ReviewsSection() {
  return (
    <section className="reviews-section">
      <div className="container reviews-inner" data-reveal>
        <div>
          <p className="eyebrow">Vos expériences</p>
          <h2>
            Vos retours comptent.
            <br />
            <em>Parlons-en.</em>
          </h2>
        </div>
        <div className="reviews-detail">
          <p className="reviews-google">Google</p>
          <p className="small-text">Consultez les avis et partagez votre expérience.</p>
          {store.reviewsUrl ? (
            <TextLink href={store.reviewsUrl} external>
              Découvrez les avis de nos clients
            </TextLink>
          ) : (
            <TextLink href={store.mapsUrl} external>
              Retrouver la boutique sur Google
            </TextLink>
          )}
        </div>
      </div>
    </section>
  );
}

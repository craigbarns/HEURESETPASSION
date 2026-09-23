import Image from "next/image";
import Link from "next/link";
import { brands } from "@/data/brands";
import { availabilityLabels, type Watch } from "@/data/watches";
import { formatPrice } from "@/lib/site";
import { Icon } from "./icon";
export function WatchCard({ watch }: { watch: Watch }) {
  const brand = brands.find((brand) => brand.slug === watch.brand);
  return (
    <Link href={`/montres/${watch.slug}`} className="watch-card">
      <div className="watch-card-image">
        {watch.images[0] ? (
          <Image
            src={watch.images[0].src}
            alt={watch.images[0].alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <span className="small-text">Photographie à venir</span>
        )}
      </div>
      <div className="watch-card-info">
        <p className="eyebrow">{brand?.name}</p>
        <h3>{watch.model}</h3>
        {watch.reference && <p className="small-text">Réf. {watch.reference}</p>}
        <div className="watch-card-meta">
          <span>
            {watch.price !== null
              ? formatPrice(watch.price)
              : availabilityLabels[watch.availability]}
          </span>
          <span>
            Découvrir
            <Icon />
          </span>
        </div>
      </div>
    </Link>
  );
}

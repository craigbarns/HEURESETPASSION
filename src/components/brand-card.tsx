import Link from "next/link";
import Image from "next/image";
import type { Brand } from "@/data/brands";
import { Icon } from "./icon";
export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link href={`/marques/${brand.slug}`} className="brand-card">
      {brand.logo ? (
        <Image src={brand.logo} alt={brand.name} width={180} height={80} />
      ) : (
        <h3>{brand.name}</h3>
      )}
      <span>
        Découvrir la maison
        <Icon />
      </span>
    </Link>
  );
}

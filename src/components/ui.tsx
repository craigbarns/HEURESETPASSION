import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./icon";

export function Button({
  href,
  children,
  variant = "dark",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline";
  external?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`button button--${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <Icon name={external ? "external" : "arrow"} />
    </Link>
  );
}

export function TextLink({
  href,
  children,
  light = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-link ${light ? "text-link--light" : ""}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <Icon name={external ? "external" : "arrow"} />
    </Link>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-description">{children}</p>}
    </div>
  );
}

export function EmptyCollection({ kind = "watches" }: { kind?: "watches" | "brands" }) {
  return (
    <div className="empty-collection">
      <div className="dial-motif" aria-hidden="true">
        <span />
      </div>
      <p className="eyebrow">{kind === "watches" ? "Notre sélection" : "Nos maisons horlogères"}</p>
      <h3>
        {kind === "watches"
          ? "La rencontre se fait en boutique."
          : "Des noms à découvrir, en boutique."}
      </h3>
      <p>
        {kind === "watches"
          ? "Notre sélection en ligne se prépare. Pour connaître les montres et les disponibilités, échangeons directement."
          : "La liste de nos marques sera présentée ici prochainement. Contactez-nous pour connaître les maisons disponibles."}
      </p>
      <TextLink href={`/contact?objet=montre`}>Contacter la boutique</TextLink>
    </div>
  );
}

export function PhotoPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`photo-placeholder ${className}`}>
      <span className="placeholder-monogram" aria-hidden="true">
        H<span>&</span>P
      </span>
      <div>
        <p className="eyebrow">66, rue Paradis</p>
        <p>Un lieu. Une passion.</p>
        <span className="placeholder-caption">Photographies de la boutique à venir</span>
      </div>
    </div>
  );
}

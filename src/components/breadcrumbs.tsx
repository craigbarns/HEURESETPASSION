import Link from "next/link";
import { JsonLd } from "./structured-data";
import { siteUrl } from "@/lib/site";
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const all = [{ label: "Accueil", href: "/" }, ...items];
  return (
    <>
      <nav className="breadcrumbs" aria-label="Fil d’Ariane">
        <ol>
          {all.map((item, i) => (
            <li key={item.label}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {item.href && i < all.length - 1 ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      {siteUrl && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: all.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.label,
              ...(item.href ? { item: new URL(item.href, siteUrl).href } : {}),
            })),
          }}
        />
      )}
    </>
  );
}

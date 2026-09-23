import { store } from "@/data/store";
import { siteUrl } from "@/lib/site";
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
export function SiteStructuredData() {
  if (!siteUrl) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": `${siteUrl}/#store`,
            name: store.name,
            description: store.description,
            url: siteUrl,
            telephone: "+33491549998",
            address: {
              "@type": "PostalAddress",
              streetAddress: store.street,
              postalCode: store.postalCode,
              addressLocality: store.city,
              addressCountry: store.country,
            },
            ...(store.socialLinks.length ? { sameAs: store.socialLinks.map((s) => s.url) } : {}),
          },
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            name: store.name,
            url: siteUrl,
            inLanguage: "fr-FR",
            publisher: { "@id": `${siteUrl}/#store` },
          },
        ],
      }}
    />
  );
}

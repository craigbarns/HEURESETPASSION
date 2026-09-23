/** Informations confirmées par le propriétaire dans le brief. Null = à renseigner. */
export const store = {
  name: "Heures & Passion",
  description:
    "Heures & Passion : réparation et entretien de montres, bracelets et bracelets sur mesure au 66 Rue Paradis, 13006 Marseille.",
  street: "66 Rue Paradis",
  postalCode: "13006",
  city: "Marseille",
  country: "FR",
  phone: "04 91 54 99 98",
  phoneHref: "tel:+33491549998",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Heures+%26+Passion+66+Rue+Paradis+13006+Marseille",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=66+Rue+Paradis+13006+Marseille",
  // Renseigner le lien direct vers la fiche Google, jamais un faux lien d'avis.
  reviewsUrl: null as string | null,
  hours: [] as { days: string; hours: string }[],
  story: null as string | null,
  boutiqueImage: null as { src: string; alt: string } | null,
  socialLinks: [] as { label: string; url: string }[],
  legal: {
    companyName: null as string | null,
    legalForm: null as string | null,
    capital: null as string | null,
    registration: null as string | null,
    vatNumber: null as string | null,
    publicationDirector: null as string | null,
    email: null as string | null,
    retentionPeriod: null as string | null,
  },
};

export const navigation = [
  { href: "/services", label: "Réparations" },
  { href: "/#bracelets", label: "Bracelets" },
  { href: "/la-maison", label: "La Maison" },
  { href: "/sav", label: "Suivi" },
  { href: "/contact", label: "Contact" },
];

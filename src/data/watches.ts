export type Watch = {
  slug: string;
  brand: string;
  model: string;
  reference?: string;
  description: string;
  price: number | null;
  availability: "available" | "on-request" | "unavailable";
  images: { src: string; alt: string }[];
  collection?: string;
  category?: string;
  gender?: "Homme" | "Femme" | "Mixte";
  movement?: string;
  diameter?: number;
  caseMaterial?: string;
  dial?: string;
  crystal?: string;
  bracelet?: string;
  waterResistance?: string;
  powerReserve?: string;
  functions?: string[];
  warranty?: string;
  featured?: boolean;
};
/** Catalogue volontairement vide : aucun modèle ni aucune disponibilité inventés. */
export const watches: Watch[] = [];
export const availabilityLabels = {
  available: "Disponible en boutique",
  "on-request": "Disponibilité sur demande",
  unavailable: "Actuellement indisponible",
};

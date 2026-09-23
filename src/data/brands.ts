export type Brand = {
  slug: string;
  name: string;
  description: string;
  logo?: string;
  image?: { src: string; alt: string };
  collections?: string[];
};
/** Ajouter uniquement les maisons dont la distribution est confirmée. */
export const brands: Brand[] = [];

export type Service = { slug: string; title: string; description: string; details?: string };
/** N'ajouter que les prestations et modalités confirmées par la boutique. */
export const services: Service[] = [
  {
    slug: "changement-de-pile",
    title: "Changement de pile",
    description: "Remplacement de la pile de votre montre à quartz.",
  },
  {
    slug: "changement-de-bracelet",
    title: "Changement de bracelet",
    description: "Remplacement du bracelet de votre montre.",
  },
  {
    slug: "pile-controle-etancheite",
    title: "Pile et contrôle d’étanchéité",
    description: "Changement de pile accompagné d’un contrôle de l’étanchéité de votre montre.",
  },
  {
    slug: "changement-de-verre",
    title: "Changement de verre",
    description: "Remplacement du verre de votre montre.",
  },
  {
    slug: "polissage",
    title: "Polissage",
    description: "Polissage pour raviver l’éclat de votre montre.",
  },
  {
    slug: "bracelets-sur-mesure",
    title: "Bracelets sur mesure",
    description: "Un bracelet sur mesure pour votre montre, selon vos envies.",
  },
  {
    slug: "echange-standard-mouvement-quartz",
    title: "Échange standard de mouvement quartz",
    description: "Remplacement du mouvement à quartz de votre montre par échange standard.",
  },
  {
    slug: "revision-montre-quartz",
    title: "Révision de montre à quartz",
    description: "Révision et entretien de votre montre à quartz.",
  },
  {
    slug: "revision-montre-automatique",
    title: "Révision de montre automatique",
    description: "Révision et entretien de votre montre automatique.",
  },
  {
    slug: "aiguillage",
    title: "Aiguillage",
    description: "Intervention sur les aiguilles de votre montre.",
  },
  {
    slug: "intervention-partielle",
    title: "Intervention partielle",
    description: "Une intervention ciblée selon le besoin de votre montre.",
  },
];
export const afterSales = {
  confirmed: false,
  introduction: null as string | null,
  services: [] as Service[],
  depositInstructions: null as string | null,
};

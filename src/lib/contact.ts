export const contactSubjects = [
  { value: "montre", label: "Réparation et entretien de montre" },
  { value: "bracelet", label: "Bracelets et sur mesure" },
  { value: "rendez-vous", label: "Rendez-vous" },
  { value: "sav", label: "Suivi de réparation" },
  { value: "autre", label: "Autre demande" },
] as const;
export type ContactInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: string;
  "bot-field": string;
};
export function validateContact(input: ContactInput): string | null {
  if (input["bot-field"]) return "L’envoi n’a pas pu être effectué. Veuillez nous appeler.";
  if (
    ![input.firstName, input.lastName].every(
      (value) => value.trim().length >= 1 && value.trim().length <= 80,
    )
  )
    return "Renseignez votre prénom et votre nom (80 caractères maximum chacun).";
  if (input.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim()))
    return "Renseignez une adresse email valide.";
  if (input.phone && !/^[+\d\s().-]{6,30}$/.test(input.phone))
    return "Vérifiez votre numéro de téléphone.";
  if (!contactSubjects.some((subject) => subject.value === input.subject))
    return "Choisissez l’objet de votre demande.";
  if (input.message.trim().length < 10 || input.message.trim().length > 5000)
    return "Votre message doit contenir entre 10 et 5 000 caractères.";
  if (input.consent !== "yes")
    return "Veuillez accepter l’utilisation de vos coordonnées pour répondre à votre demande.";
  return null;
}

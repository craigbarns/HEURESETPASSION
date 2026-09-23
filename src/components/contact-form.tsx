"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";
import { contactSubjects, validateContact, type ContactInput } from "@/lib/contact";
import { store } from "@/data/store";
import { Icon } from "./icon";
export function ContactForm() {
  const params = useSearchParams();
  const subject = contactSubjects.some((s) => s.value === params.get("objet"))
    ? params.get("objet")!
    : "autre";
  const reference = params.get("montre")?.slice(0, 200);
  const enabled = process.env.NEXT_PUBLIC_CONTACT_FORM_ENABLED === "true";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const entries = Object.fromEntries(new FormData(form));
    const input = Object.fromEntries(
      ["firstName", "lastName", "email", "phone", "subject", "message", "consent", "bot-field"].map(
        (key) => [key, String(entries[key] ?? "").trim()],
      ),
    ) as ContactInput;
    const validation = validateContact(input);
    if (validation) {
      setError(validation);
      setStatus("error");
      return;
    }
    if (!enabled || ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname)) {
      setError(
        "L’envoi en ligne n’est pas encore activé. Votre message n’a pas été envoyé. Appelez-nous au 04 91 54 99 98.",
      );
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "contact", ...input }).toString(),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Envoi refusé");
      setStatus("success");
      requestAnimationFrame(() => statusRef.current?.focus());
    } catch {
      setStatus("error");
      setError(
        "La réception de votre demande n’a pas pu être confirmée. Votre texte est conservé ici. Réessayez ou appelez la boutique au 04 91 54 99 98.",
      );
    } finally {
      window.clearTimeout(timeout);
    }
  }
  if (status === "success")
    return (
      <div className="form-success" role="status" tabIndex={-1} ref={statusRef}>
        <p className="eyebrow">Message reçu</p>
        <h2>Merci pour votre confiance.</h2>
        <p>
          Votre demande a bien été transmise à Heures & Passion.
          <br />
          Nous vous répondrons aux coordonnées indiquées.
        </p>
        <Link className="text-link" href="/">
          Retour à la Maison
          <Icon />
        </Link>
      </div>
    );
  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      action="/__forms.html"
      onSubmit={submit}
      aria-busy={status === "sending"}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label>
          Ne pas remplir ce champ
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {!enabled && (
        <p className="form-notice form-wide">
          Le formulaire sera disponible prochainement. Pour votre demande, appelez-nous au{" "}
          <a href={store.phoneHref}>{store.phone}</a>.
        </p>
      )}
      <div className="form-field">
        <label htmlFor="lastName">Nom *</label>
        <input id="lastName" name="lastName" autoComplete="family-name" required maxLength={80} />
      </div>
      <div className="form-field">
        <label htmlFor="firstName">Prénom *</label>
        <input id="firstName" name="firstName" autoComplete="given-name" required maxLength={80} />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email *</label>
        <input id="email" type="email" name="email" autoComplete="email" required maxLength={254} />
      </div>
      <div className="form-field">
        <label htmlFor="phone">
          Téléphone <span className="small-text">(facultatif)</span>
        </label>
        <input id="phone" type="tel" name="phone" autoComplete="tel" maxLength={30} />
      </div>
      <div className="form-field form-wide">
        <label htmlFor="subject">Objet *</label>
        <select key={subject} id="subject" name="subject" defaultValue={subject} required>
          {contactSubjects.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-field form-wide">
        <label htmlFor="message">Votre message *</label>
        <textarea
          key={reference}
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          defaultValue={
            reference
              ? `Bonjour, je souhaite me renseigner sur la réparation ou l’entretien de ma montre ${reference}.`
              : ""
          }
          placeholder="Décrivez votre besoin : réparation, entretien, bracelet ou suivi d’une intervention."
          aria-describedby="message-help"
        />
        <span id="message-help" className="small-text">
          10 à 5 000 caractères. Ne transmettez pas de données sensibles.
        </span>
      </div>
      <label className="form-consent form-wide">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          J’accepte que mes coordonnées soient utilisées pour répondre à ma demande. Consultez notre{" "}
          <Link href="/politique-confidentialite">politique de confidentialité</Link>. *
        </span>
      </label>
      {status === "error" && (
        <p className="form-error form-wide" role="alert">
          {error}
        </p>
      )}
      <div className="form-bottom form-wide">
        <span className="small-text">* Champs obligatoires</span>
        <button
          className="button button--dark"
          type="submit"
          disabled={!enabled || status === "sending"}
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
          <Icon />
        </button>
      </div>
      <noscript>
        <p className="form-wide small-text">
          Pour envoyer votre demande sans JavaScript, appelez directement la boutique.
        </p>
      </noscript>
    </form>
  );
}

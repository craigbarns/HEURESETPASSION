import { test } from "node:test";
import assert from "node:assert/strict";
import { validateContact, type ContactInput } from "../src/lib/contact.ts";
const valid: ContactInput = {
  firstName: "Test",
  lastName: "Technique",
  email: "qa@example.org",
  phone: "",
  subject: "montre",
  message: "Message de vérification technique, sans envoi réel.",
  consent: "yes",
  "bot-field": "",
};
test("accepte une demande complète et le téléphone facultatif", () =>
  assert.equal(validateContact(valid), null));
test("refuse le honeypot rempli", () =>
  assert.ok(validateContact({ ...valid, "bot-field": "spam" })));
test("refuse email invalide, consentement absent, sujet inconnu et dépassement de taille", () => {
  for (const input of [
    { email: "invalid" },
    { consent: "" },
    { subject: "injected" },
    { firstName: " " },
    { message: "x".repeat(5001) },
    { message: "short" },
    { phone: "<script>" },
  ])
    assert.ok(validateContact({ ...valid, ...input }));
});
test("accepte les accents, apostrophes et téléphone international", () =>
  assert.equal(
    validateContact({
      ...valid,
      firstName: "Éloïse",
      lastName: "D’Angelo",
      phone: "+33 (0)4 91 54 99 98",
    }),
    null,
  ));

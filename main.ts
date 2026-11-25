// Pigeon Pitch, One Line — entry program.
//
// Writes one original English line to /output/entry.txt: the elevator pitch
// a city pigeon gives investors for its startup. The joke is the business
// model: the pigeons already own the city, they are just the first ones to
// charge rent for it — and the only currency they accept is breadcrumbs.

import { mkdirSync, writeFileSync } from "node:fs";

// One line, at most 200 characters. Startup metrics a pigeon would brag
// about: daily actives, zero churn, a monopoly on the statues.
const PITCH =
  "We're Perch: 10,000 daily active users, zero churn, a monopoly on every statue in the city — raising $500K, payable in breadcrumbs.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Enforce it here so a bad pitch can never ship.
function validatePitch(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("Pitch must not be blank.");
  }
  if (text.length < 1 || text.length > 200) {
    throw new Error(`Pitch must be 1-200 characters, got ${text.length}.`);
  }
  if (text.includes("\n")) {
    throw new Error("Pitch must be a single line.");
  }
}

validatePitch(PITCH);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to /output/entry.txt`);

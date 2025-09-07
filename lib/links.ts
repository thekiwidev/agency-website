// Centralized external CTA links for Book a Call and Get a Quote.
// Configure via env at build time.

export const BOOK_CALL_URL =
  process.env.NEXT_PUBLIC_BOOK_CALL_URL ||
  "https://cal.com/your-org/30min";

export const GET_QUOTE_URL =
  process.env.NEXT_PUBLIC_GET_QUOTE_URL || BOOK_CALL_URL;

export type ContactIntent = "call" | "quote";

export function contactLink(intent: ContactIntent = "call"): string {
  return intent === "quote" ? GET_QUOTE_URL : BOOK_CALL_URL;
}


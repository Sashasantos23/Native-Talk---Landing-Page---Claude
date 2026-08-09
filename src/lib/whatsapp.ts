// Single source of truth for the WhatsApp booking action.
const PHONE = "5519987681112";

export function waLink(message: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

// The one canonical booking link used across the page.
export const WA_BOOK = waLink(
  "Oi Sasha! Quero agendar minha aula experimental gratuita de inglês."
);

export const INSTAGRAM_URL = "https://instagram.com/native_talkbr";

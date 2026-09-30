// Single source of truth for contact details (previously the navbar and
// contact section used two different phone numbers).
export const PHONE_TEL = "+919040823523";
export const PHONE_DISPLAY = "+91 90408 23523";
export const WHATSAPP_NUMBER = "919040823523";
export const ADDRESS = "Industrial Estate, Ankuli Main Road, Brahmapur";
export const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Leads+Academy+Industrial+Estate+Ankuli+Main+Road+Brahmapur";

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

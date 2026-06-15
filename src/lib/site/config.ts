export const SITE = {
  name: "Landscapes By Tyler",
  shortName: "Landscapes By Tyler",
  tagline: "Professional Lawn Care & Landscape Services",
  description:
    "Reliable lawn mowing, edging, trimming, weed removal, yard cleanups and lawn maintenance delivered with attention to detail and pride in every job. Free estimates available.",
  // NOTE: Replace with owner's actual phone number when available.
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@landscapesbytyler.com",
  serviceArea: "Local residential lawn care service",
  owner: "Tyler",
  hours: "Mon – Sat · 7:00 AM – 7:00 PM",
  // NOTE: Replace with Formspree endpoint when available.
  formspreeEndpoint: "https://formspree.io/f/REPLACE_WITH_ID",
  social: {
    instagram: "https://www.instagram.com/landscapes.byty/",
    facebook: "#",
  },
  designer: {
    name: "Imtiaz Nayeem",
    url: "https://imtiaznayeem.com",
  },
} as const;

export type ServiceSlug =
  | "lawn-mowing"
  | "lawn-edging"
  | "trimming"
  | "weed-removal"
  | "yard-cleanup"
  | "fall-cleanup"
  | "lawn-maintenance";

export interface ServiceCard {
  slug: ServiceSlug;
  title: string;
  short: string;
  image: string;
  to?: string;
}

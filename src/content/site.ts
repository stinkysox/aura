// Centralized content. Edit here to update the entire site.

export const site = {
  name: "Aesthesia",
  tagline: "The Skin Atelier",
  city: "New Delhi",
  address: "12, Amrita Shergill Marg · Lutyens' Delhi · 110003",
  phone: "+91 11 4000 0000",
  email: "atelier@aesthesia.in",
  hours: "Tuesday — Saturday · 10:00 — 19:00",
};

export const nav = [
  { label: "Atelier", to: "/about" },
  { label: "Treatments", to: "/treatments" },
  { label: "Specialists", to: "/doctors" },
  { label: "Concerns", to: "/concerns" },
  { label: "Technology", to: "/technology" },
  { label: "Gallery", to: "/gallery" },
  { label: "Experience", to: "/experience" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
];

export const philosophy = {
  eyebrow: "Philosophy",
  title: "Skin, considered as architecture.",
  body: "We approach the surface of the body the way an architect studies light — with patience, precision, and reverence for the material. Every protocol at Aesthesia is composed, never prescribed.",
};

export type Treatment = {
  slug: string;
  number: string;
  name: string;
  family: string;
  duration: string;
  description: string;
  poetry: string;
};

export const treatments: Treatment[] = [
  { slug: "luminance", number: "01", name: "Luminance", family: "Resurfacing", duration: "75 min",
    description: "A medical-grade resurfacing protocol composed of layered acids and cold-light therapy, calibrated to the season and the skin.",
    poetry: "The slow return of light beneath the surface." },
  { slug: "atelier-lift", number: "02", name: "Atelier Lift", family: "Architectural", duration: "120 min",
    description: "Ultrasound-guided collagen architecture. Non-surgical contouring drawn along the natural lines of the face.",
    poetry: "Structure, redrawn with quiet intention." },
  { slug: "obsidian", number: "03", name: "Obsidian", family: "Pigment", duration: "90 min",
    description: "A pigment-correcting sequence pairing picosecond laser with a topical biome-restorative for deep tonal clarity.",
    poetry: "An even field. A clean canvas. Nothing more." },
  { slug: "veil", number: "04", name: "Veil", family: "Hydration", duration: "60 min",
    description: "Polynucleotide infusion and lymphatic sculpting — the deepest hydration the dermis can hold.",
    poetry: "Water, returned to its rightful chamber." },
  { slug: "ember", number: "05", name: "Ember", family: "Acne & Inflammation", duration: "75 min",
    description: "A measured anti-inflammatory protocol using LED, blue-light and clinical extractions for sensitised skin.",
    poetry: "Heat, drawn out, leaves the skin still." },
  { slug: "horizon", number: "06", name: "Horizon", family: "Longevity", duration: "150 min",
    description: "An annual longevity composition: exosomes, regenerative peptides and mesotherapy delivered as a single sitting.",
    poetry: "A long view, written into the dermis." },
];

export const doctors = [
  { name: "Dr. Aanya Kohli", role: "Founder · Dermatology", bio: "Trained at AIIMS and the Sorbonne. Aanya founded Aesthesia after a decade of editorial dermatology in Paris and Delhi." },
  { name: "Dr. Ishaan Verma", role: "Aesthetic Surgery", bio: "A measured hand and a sculptor's eye. Ishaan leads the clinic's architectural protocols." },
  { name: "Dr. Meera Raghavan", role: "Cellular Medicine", bio: "Stanford-trained. Meera oversees longevity, exosome and regenerative therapies." },
  { name: "Dr. Rohan Kapoor", role: "Laser Sciences", bio: "A specialist in pigment, scarring and the physics of light on Indian skin." },
];

export const concerns = [
  { name: "Pigmentation", note: "Melasma, sun-mark, post-inflammatory tonality." },
  { name: "Texture", note: "Pore architecture, scarring, surface refinement." },
  { name: "Loss of Volume", note: "Architectural restoration. Non-surgical contour." },
  { name: "Sensitivity", note: "Reactive skin, rosacea, barrier repair." },
  { name: "Acne", note: "Active, hormonal, post-inflammatory." },
  { name: "Longevity", note: "Cellular renewal. The long arc of skin." },
];

export const journal = [
  { slug: "the-quiet-science", title: "The Quiet Science of Doing Less", date: "April 2026", read: "8 min", excerpt: "On restraint as the most modern form of dermatology." },
  { slug: "light-as-medicine", title: "Light, as Medicine", date: "March 2026", read: "6 min", excerpt: "A short essay on photons, pigment, and the Indian dermis." },
  { slug: "the-architecture-of-a-face", title: "The Architecture of a Face", date: "February 2026", read: "11 min", excerpt: "How we map structure before we touch a single millimetre of skin." },
  { slug: "winter-protocols", title: "Notes on a Winter Protocol", date: "January 2026", read: "5 min", excerpt: "Seasonal calibration and the discipline of the cold months." },
];

export const testimonials = [
  { quote: "There is a stillness here I have not encountered in a clinic before.", author: "K. M.", note: "Patient since 2022" },
  { quote: "They corrected what a decade of work in other cities had not. Quietly.", author: "S. R.", note: "Editor, Mumbai" },
  { quote: "It feels less like medicine and more like being read carefully.", author: "A. V.", note: "Architect" },
];

export const technology = [
  { name: "Picoway · Resolve", note: "Picosecond laser for pigment and tonal clarity." },
  { name: "Ultherapy · MPT", note: "Micro-focused ultrasound for architectural lift." },
  { name: "Lumenis Stellar M22", note: "Multi-application platform for vascular and texture." },
  { name: "Endymed 3DEEP", note: "Radiofrequency for collagen architecture." },
];

export const faqs = [
  { q: "How does a first consultation unfold?", a: "Ninety minutes in private. A full diagnostic, a written protocol, and a tea. Nothing is prescribed without consideration." },
  { q: "Do you accept walk-ins?", a: "We do not. The atelier is built around appointment, silence and time." },
  { q: "Is the clinic suitable for sensitive skin?", a: "Particularly so. Half of our protocols are calibrated for reactive and post-procedural skin." },
  { q: "Do you publish before-and-after imagery?", a: "Only with consent, only in our private gallery, and never as marketing." },
];

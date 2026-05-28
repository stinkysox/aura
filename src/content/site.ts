// Centralized content. Edit here to update the entire site.

export const site = {
  name: "AURA Skin and Hair Clinic",
  tagline: "A holistic center for your skin and hair problems",
  city: "Udaipur",
  address: "221, Sardarpura, Hanuman Mandir wali gali, Udaipur",
  phone: "+91 97855-00336",
  email: "auraskinandhairclinic@gmail.com",
  hours: "By appointment",
};

/**
 * CENTRALIZED IMAGE MANAGEMENT
 *
 * Easy swap guide:
 * 1. Local images: Replace URLs with /images/category/filename.jpg
 * 2. Upload to public/images/ in the directory structure below
 * 3. All references update automatically site-wide
 */
export const assets = {
  home: {
    philosophy: "https://i.pinimg.com/736x/56/86/91/568691dff91597e5a16a53acb3b714dd.jpg", // Skincare/wellness
    editorial1: "https://i.pinimg.com/736x/64/bd/e5/64bde5ebf3a9763a207a1f8e83446a66.jpg", // Professional medical
    editorial2: "https://i.pinimg.com/736x/c1/e6/b9/c1e6b9e39633d586ab2903d924f928d0.jpg", // Skincare treatment
    technology: "https://i.pinimg.com/736x/7c/59/32/7c59324608843107af3e4f88d20ab8c0.jpg", // Medical instruments
  },
  doctors: {
    placeholder: "https://i.pinimg.com/736x/c7/6e/a1/c76ea103a30faa0e13c92e79cffe2fdf.jpg",

    "nidheesh-agarwal": "https://i.pinimg.com/736x/0c/e0/da/0ce0da30bceee3a1c274cf376860ea12.jpg", // Professional doctor
  },
  treatments: {
    placeholder: "https://i.pinimg.com/736x/c7/6e/a1/c76ea103a30faa0e13c92e79cffe2fdf.jpg",
    // Local and clinical treatment asset mappings
    "clinical-dermatology":
      "https://i.pinimg.com/736x/1d/6b/95/1d6b951264840c4e07ec3c57c9e8cfd3.jpg", // Fixed typo here (hhttps -> https)
    "hair-treatments": "https://i.pinimg.com/736x/2d/c5/56/2dc5562191c79a70835f4a82fdb2513d.jpg",
    "hair-transplantation":
      "https://i.pinimg.com/736x/d3/e0/2d/d3e02dfe7645c6cf64e84207672dc511.jpg",
    cosmetology: "https://i.pinimg.com/736x/8d/0a/83/8d0a83ee14cf6cd5e88867bac29ba3ab.jpg",
    "skin-surgeries": "https://i.pinimg.com/736x/48/2a/7b/482a7bb5508d5c4ebcb9f968fbb350fb.jpg",
    "pediatric-dermatology":
      "https://i.pinimg.com/736x/c6/1b/f5/c61bf503eb65036e8085e131c91493bd.jpg",
    "systemic-dermatology":
      "https://i.pinimg.com/736x/99/d8/75/99d875a247e2c398e53d4dba003cf559.jpg",
    "genital-dermatology":
      "https://i.pinimg.com/236x/cd/25/d4/cd25d418c8f0b359a0196ef165da44e1.jpg",
  },
  blog: {
    placeholder: "/images/blog/blog-placeholder.svg",
    // Blog hero images
    "dermatologist-in-udaipur":
      "https://images.unsplash.com/photo-1576091160550-112405c3e149?w=1000&q=80",
    "acne-treatment": "https://images.unsplash.com/photo-1576091160500-112405c3e149?w=1000&q=80",
    "hair-fall-treatment":
      "https://images.unsplash.com/photo-1576091160495-112405c3e149?w=1000&q=80",
  },
  gallery: {
    // Before/after images - these can be replaced with real patient results (with consent)
    1: {
      before: "https://images.unsplash.com/photo-1576091160550-112405c3e149?w=800&q=80",
      after: "https://images.unsplash.com/photo-1576091160505-112405c3e149?w=800&q=80",
      label: "Luminance",
    },
    2: {
      before: "https://images.unsplash.com/photo-1576091160495-112405c3e149?w=800&q=80",
      after: "https://images.unsplash.com/photo-1576091160490-112405c3e149?w=800&q=80",
      label: "Clinic Lift",
    },
    3: {
      before: "https://images.unsplash.com/photo-1576091160485-112405c3e149?w=800&q=80",
      after: "https://images.unsplash.com/photo-1576091160480-112405c3e149?w=800&q=80",
      label: "Obsidian",
    },
    4: {
      before: "https://images.unsplash.com/photo-1576091160475-112405c3e149?w=800&q=80",
      after: "https://images.unsplash.com/photo-1576091160470-112405c3e149?w=800&q=80",
      label: "Veil",
    },
    5: {
      before: "https://images.unsplash.com/photo-1576091160465-112405c3e149?w=800&q=80",
      after: "https://images.unsplash.com/photo-1576091160460-112405c3e149?w=800&q=80",
      label: "Ember",
    },
    6: {
      before: "https://images.unsplash.com/photo-1576091160455-112405c3e149?w=800&q=80",
      after: "https://images.unsplash.com/photo-1576091160450-112405c3e149?w=800&q=80",
      label: "Horizon",
    },
    7: {
      before: "https://images.unsplash.com/photo-1576091160445-112405c3e149?w=800&q=80",
      after: "https://images.unsplash.com/photo-1576091160440-112405c3e149?w=800&q=80",
      label: "Refine",
    },
    8: {
      before: "https://images.unsplash.com/photo-1576091160435-112405c3e149?w=800&q=80",
      after: "https://images.unsplash.com/photo-1576091160430-112405c3e149?w=800&q=80",
      label: "Radiance",
    },
    9: {
      before: "https://images.unsplash.com/photo-1576091160425-112405c3e149?w=800&q=80",
      after: "https://images.unsplash.com/photo-1576091160420-112405c3e149?w=800&q=80",
      label: "Clarity",
    },
  },
  og: {
    cover: "/images/og/og-cover.svg",
  },
} as const;

export const nav = [
  { label: "Clinic", to: "/about" },
  { label: "Treatments", to: "/treatments" },
  { label: "Specialist", to: "/doctors" },
  { label: "Concerns", to: "/concerns" },
  { label: "Technology", to: "/technology" },
  { label: "Gallery", to: "/gallery" },
  { label: "Experience", to: "/experience" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
];

export const philosophy = {
  eyebrow: "Philosophy",
  title: "Skin and hair, together as one system.",
  body: "We treat the surface of the body as an integrated expression of health. Every intervention at AURA begins with a diagnosis, a dialogue and a commitment to holistic, affordable care.",
};

export type Treatment = {
  slug: string;
  number: string;
  name: string;
  family: string;
  duration: string;
  description: string;
  poetry: string;
  image?: string; // Image URL - uses placeholder if not provided
};

export const treatments: Treatment[] = [
  {
    slug: "clinical-dermatology",
    number: "01",
    name: "Clinical Dermatology",
    family: "Medical dermatology",
    duration: "Variable",
    description:
      "Care for fungal infections, vitiligo, pigmentation, psoriasis, eczema, acne, hives and other medical skin concerns.",
    poetry: "A systematic response to what the skin is asking for.",
    image: assets.treatments["clinical-dermatology"],
  },
  {
    slug: "hair-treatments",
    number: "02",
    name: "Hair Treatments",
    family: "Scalp and growth",
    duration: "Variable",
    description:
      "Programs for hair fall, dandruff, brittle hair, alopecia, PRP and scalp health in women and men.",
    poetry: "Strength from root to strand.",
    image: assets.treatments["hair-treatments"],
  },
  {
    slug: "hair-transplantation",
    number: "03",
    name: "Hair Transplantation",
    family: "Restoration",
    duration: "Variable",
    description:
      "Restoration for scalp baldness, beard and moustache, eyebrows and sparse facial hair with precision grafting.",
    poetry: "Density returned with subtle design.",
    image: assets.treatments["hair-transplantation"],
  },
  {
    slug: "cosmetology",
    number: "04",
    name: "Cosmetology",
    family: "Aesthetic dermatology",
    duration: "Variable",
    description:
      "Anti-ageing, chemical peels, laser hair removal, pigmentation treatments, microdermabrasion, Botox, fillers and skin tightening.",
    poetry: "Beauty that feels honest and intact.",
    image: assets.treatments["cosmetology"],
  },
  {
    slug: "skin-surgeries",
    number: "05",
    name: "Skin Surgeries",
    family: "Minor surgical care",
    duration: "Variable",
    description:
      "Cryotherapy, wart removal, skin tag and corn removal, acne scar surgery and vitiligo procedures.",
    poetry: "Precision surgery with a careful hand.",
    image: assets.treatments["skin-surgeries"],
  },
  {
    slug: "pediatric-dermatology",
    number: "06",
    name: "Children's Dermatology",
    family: "Pediatric skin care",
    duration: "Variable",
    description:
      "Gentle care for white spots, rashes, diaper dermatitis, birthmarks, infections and molluscum in children.",
    poetry: "Comfort for the smallest skin.",
    image: assets.treatments["pediatric-dermatology"],
  },
  {
    slug: "systemic-dermatology",
    number: "07",
    name: "Skin & Systemic Health",
    family: "Integrated diagnosis",
    duration: "Variable",
    description:
      "Dermatology for skin concerns linked to pregnancy, diabetes, thyroid, kidney, digestive and cancer-related conditions.",
    poetry: "The skin as a mirror of the whole body.",
    image: assets.treatments["systemic-dermatology"],
  },
  {
    slug: "genital-dermatology",
    number: "08",
    name: "Genital Dermatology",
    family: "Intimate care",
    duration: "Variable",
    description:
      "Care for premature ejaculation, erectile dysfunction, genital ulcers, STDs and other intimate dermatological concerns.",
    poetry: "Private concerns treated with respect.",
    image: assets.treatments["genital-dermatology"],
  },
];

export const doctors = [
  {
    name: "Dr. Nidheesh Agarwal",
    role: "M.B.B.S., M.D. (Dermatology) · Dermatologist · Cosmetologist · Hair Transplant Surgeon",
    image: assets.doctors["nidheesh-agarwal"],
    bio: "Dr. Nidheesh Agarwal is a dermatologist, cosmetologist and hair transplant surgeon based in Udaipur. He completed his M.B.B.S. and M.D. in Dermatology from RNT Medical College, Udaipur. During his post-graduation he presented his research on chicken pox scars at the 2013 World Congress of Cosmetic Dermatology in Greece and received the Global Education Award from the International Society of Dermatology in 2014. After serving as Assistant Professor at Geetanjali Medical College for four years, he founded AURA Skin and Hair Clinic to provide holistic, affordable solutions for skin and hair concerns.",
  },
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
  {
    slug: "the-quiet-science",
    title: "The Quiet Science of Doing Less",
    date: "April 2026",
    read: "8 min",
    excerpt: "On restraint as the most modern form of dermatology.",
  },
  {
    slug: "light-as-medicine",
    title: "Light, as Medicine",
    date: "March 2026",
    read: "6 min",
    excerpt: "A short essay on photons, pigment, and the Indian dermis.",
  },
  {
    slug: "the-architecture-of-a-face",
    title: "The Architecture of a Face",
    date: "February 2026",
    read: "11 min",
    excerpt: "How we map structure before we touch a single millimetre of skin.",
  },
  {
    slug: "winter-protocols",
    title: "Notes on a Winter Protocol",
    date: "January 2026",
    read: "5 min",
    excerpt: "Seasonal calibration and the discipline of the cold months.",
  },
];

export const testimonials = [
  {
    quote: "There is a stillness here I have not encountered in a clinic before.",
    author: "K. M.",
    note: "Patient since 2022",
  },
  {
    quote: "They corrected what a decade of work in other cities had not. Quietly.",
    author: "S. R.",
    note: "Editor, Mumbai",
  },
  {
    quote: "It feels less like medicine and more like being read carefully.",
    author: "A. V.",
    note: "Architect",
  },
];

export const technology = [
  { name: "Picoway · Resolve", note: "Picosecond laser for pigment and tonal clarity." },
  { name: "Ultherapy · MPT", note: "Micro-focused ultrasound for architectural lift." },
  { name: "Lumenis Stellar M22", note: "Multi-application platform for vascular and texture." },
  { name: "Endymed 3DEEP", note: "Radiofrequency for collagen architecture." },
];

export const faqs = [
  {
    q: "How does a first consultation unfold?",
    a: "Ninety minutes in private. A full diagnostic, a written protocol, and a tea. Nothing is prescribed without consideration.",
  },
  {
    q: "Do you accept walk-ins?",
    a: "We do not. The clinic is built around appointment, silence and time.",
  },
  {
    q: "Is the clinic suitable for sensitive skin?",
    a: "Particularly so. Half of our protocols are calibrated for reactive and post-procedural skin.",
  },
  {
    q: "Do you publish before-and-after imagery?",
    a: "Only with consent, only in our private gallery, and never as marketing.",
  },
];

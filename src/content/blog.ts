export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  read: string;
  excerpt: string;
  keywords: string[];
  heroImage: string;
  body: string[];
};

// Easy to edit: add a new object to this array.
export const blogPosts: BlogPost[] = [
  {
    slug: "dermatologist-in-udaipur-how-to-choose",
    title: "Dermatologist in Udaipur: How to choose the right clinic",
    date: "May 2026",
    read: "7 min",
    excerpt:
      "A practical checklist: diagnosis-first consultations, transparent plans, safe procedures, and follow-ups that actually happen.",
    keywords: ["Dermatologist in Udaipur", "Skin and Hair Clinic in Udaipur", "acne", "pigmentation"],
    heroImage: "/images/blog/blog-placeholder.svg",
    body: [
      "Searching for a dermatologist in Udaipur can feel overwhelming — every clinic promises quick results. A better approach is to look for a diagnosis-first consultation.",
      "At AURA Skin and Hair Clinic in Udaipur, we start by mapping your skin or scalp: triggers, timeline, past treatments, and what your lifestyle is doing to the condition.",
      "A good clinic will explain options with trade-offs: what will improve quickly, what will take time, and what should not be rushed. If a plan feels like a sales pitch, pause.",
      "Finally, choose a clinic that offers clear follow-up. Skin and hair concerns rarely resolve in one visit — the aftercare is part of the treatment.",
    ],
  },
  {
    slug: "skin-and-hair-clinic-in-udaipur-acne",
    title: "Skin and Hair Clinic in Udaipur: Acne, marks, and long-term control",
    date: "May 2026",
    read: "6 min",
    excerpt: "How we treat acne: calm inflammation first, then address marks and texture — without over-procedures.",
    keywords: ["Skin and Hair Clinic in Udaipur", "acne treatment in Udaipur", "Dermatologist in Udaipur"],
    heroImage: "/images/blog/blog-placeholder.svg",
    body: [
      "Acne is not just a surface problem — it’s a cycle of inflammation, barrier disruption, and sometimes hormones or stress.",
      "Step one is control: reduce active breakouts, protect the barrier, and simplify routines. Many patients improve just by stopping conflicting products.",
      "Step two is repair: once acne is stable, we can address marks, pigmentation, and texture with peels, lasers, or procedural care — only if needed.",
      "If you want acne treatment in Udaipur, the best plan is the one you can follow for 8–12 weeks consistently.",
    ],
  },
  {
    slug: "hair-fall-udaipur-prp-and-scalp-health",
    title: "Hair fall in Udaipur: PRP, diagnosis, and scalp health",
    date: "April 2026",
    read: "8 min",
    excerpt: "PRP works best when we understand why hair is shedding. Here’s the sequence we follow.",
    keywords: ["hair fall treatment in Udaipur", "PRP in Udaipur", "Dermatologist in Udaipur"],
    heroImage: "/images/blog/blog-placeholder.svg",
    body: [
      "Hair fall can be pattern loss, shedding, breakage, or scalp inflammation. Each needs a different plan.",
      "A proper evaluation includes timing (sudden vs gradual), nutrition, stress, postpartum changes, and scalp examination.",
      "PRP in Udaipur can be helpful — but it works best as part of a plan, not as a single standalone procedure.",
      "If you’re considering PRP, book an appointment so we can map the cause first, then choose the right protocol.",
    ],
  },
];


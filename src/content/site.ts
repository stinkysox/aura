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

export type Condition = {
  slug: string;
  name: string;
  overview: string;
  symptoms: string[];
  treatments?: string;
  image?: string;
};

export type Treatment = {
  slug: string;
  number: string;
  name: string;
  family: string;
  duration: string;
  description: string;
  poetry: string;
  conditions?: string[]; // Array of condition slugs related to this treatment
  image?: string; // Image URL - uses placeholder if not provided
};

/**
 * COMPREHENSIVE CONDITIONS/PROBLEMS DATABASE
 * These are specific skin, hair and health conditions that can be treated
 * Link to treatments for detailed care information
 */
export const conditions: Condition[] = [
  // Hair & Scalp Conditions
  {
    slug: "hair-fall",
    name: "Hair Fall",
    overview:
      "Hair fall or alopecia can occur due to multiple factors including stress, nutritional deficiencies, hormonal changes, and genetic predisposition. We provide comprehensive diagnostic protocols and tailored treatment plans.",
    symptoms: [
      "Excessive hair shedding",
      "Visible hair loss on pillow or after shower",
      "Thinning of hair volume",
      "Widening of hair parting",
    ],
    treatments:
      "Hair treatments with specialized protocols, scalp analysis, nutritional assessment, and growth therapies.",
  },
  {
    slug: "dandruff",
    name: "Dandruff",
    overview:
      "Dandruff is a common scalp condition characterized by flaking and often accompanied by itching. It can result from fungal infections, dry skin, or sensitivity and requires both topical and systemic management.",
    symptoms: [
      "White or yellowish flakes on scalp",
      "Scalp itching",
      "Oily or dry scalp",
      "Red, irritated scalp skin",
    ],
    treatments:
      "Specialized shampoos, antifungal treatments, scalp therapy, and lifestyle modifications.",
  },
  {
    slug: "brittle-hair",
    name: "Brittle Hair",
    overview:
      "Brittle hair is fragile and prone to breakage due to loss of moisture and protein. This can result from excessive heat styling, chemical treatments, nutritional deficiencies, or environmental damage.",
    symptoms: [
      "Hair breaks easily",
      "Dry, rough texture",
      "Lack of shine",
      "Split ends",
      "Difficulty combing or styling",
    ],
    treatments:
      "Protein treatments, moisture-sealing protocols, protective styling, and nutritional supplementation.",
  },
  {
    slug: "alopecia",
    name: "Alopecia",
    overview:
      "Alopecia refers to hair loss from any cause. It can be androgenetic (male/female pattern baldness), alopecia areata (patchy loss), or other forms. We provide comprehensive diagnosis and targeted treatment.",
    symptoms: [
      "Receding hairline",
      "Crown baldness",
      "Diffuse hair thinning",
      "Circular patches of hair loss",
      "Sudden hair shedding",
    ],
    treatments: "Hair treatments, PRP therapy, hair transplantation, topical and oral medications.",
  },
  {
    slug: "prp-hair-therapy",
    name: "PRP Hair Therapy",
    overview:
      "Platelet-Rich Plasma therapy harnesses growth factors from your own blood to stimulate hair follicles and promote natural regrowth. It's a non-invasive option for various hair loss conditions.",
    symptoms: ["Hair thinning", "Early stage hair loss", "Need for preventive treatment"],
    treatments: "PRP therapy is available as part of our hair treatments program.",
  },
  {
    slug: "scalp-health",
    name: "Scalp Health",
    overview:
      "Scalp health is fundamental to healthy hair growth. Issues range from sensitivity and inflammation to infections and excessive oiliness. We provide comprehensive scalp analysis and treatment.",
    symptoms: ["Itching", "Redness", "Excessive oiliness or dryness", "Sensitivity", "Bad odor"],
    treatments: "Customized scalp care, therapeutic treatments, and preventive protocols.",
  },

  // Skin Conditions
  {
    slug: "fungal-infections",
    name: "Fungal Infections",
    overview:
      "Fungal skin infections include conditions like tinea (ringworm), candidiasis, and others. They require proper diagnosis and targeted antifungal treatment for complete resolution.",
    symptoms: [
      "Red, itchy patches",
      "Circular rash patterns",
      "Scaling or flaking",
      "Burning sensation",
      "Discharge in moist areas",
    ],
    treatments: "Antifungal treatments, topical and oral medications, hygiene protocols.",
  },
  {
    slug: "vitiligo",
    name: "Vitiligo",
    overview:
      "Vitiligo is a depigmentation disorder causing white patches on the skin due to loss of melanocytes. We offer both camouflage and therapeutic treatment options.",
    symptoms: [
      "White patches on skin",
      "Loss of skin color",
      "Premature graying of hair in affected areas",
      "Light sensitivity in depigmented areas",
    ],
    treatments:
      "Topical steroids, phototherapy, depigmentation, surgical grafting, cosmetic cover options.",
  },
  {
    slug: "pigmentation",
    name: "Pigmentation Issues",
    overview:
      "Pigmentation problems include hyperpigmentation (dark patches), hypopigmentation (light patches), and uneven tone. Causes include sun exposure, melasma, and post-inflammatory changes.",
    symptoms: [
      "Dark patches (melasma)",
      "Uneven skin tone",
      "Dark spots or sun spots",
      "Post-acne marks",
      "Post-inflammatory hyperpigmentation",
    ],
    treatments:
      "Chemical peels, laser treatments, topical depigmenting agents, sun protection protocols.",
  },
  {
    slug: "psoriasis",
    name: "Psoriasis",
    overview:
      "Psoriasis is a chronic autoimmune condition causing red, scaly patches. It requires long-term management and personalized treatment protocols.",
    symptoms: [
      "Red, inflamed patches",
      "Thick, silvery scales",
      "Itching or burning",
      "Nail changes",
      "Joint pain",
    ],
    treatments: "Topical treatments, phototherapy, systemic medications, lifestyle management.",
  },
  {
    slug: "eczema",
    name: "Eczema",
    overview:
      "Eczema or dermatitis causes inflammation, itching, and compromised skin barrier. We provide both acute relief and long-term barrier repair strategies.",
    symptoms: [
      "Intense itching",
      "Red, inflamed skin",
      "Dry patches",
      "Blisters",
      "Crusting and weeping",
    ],
    treatments:
      "Emollients, topical steroids, antihistamines, barrier repair therapy, trigger identification.",
  },
  {
    slug: "acne",
    name: "Acne",
    overview:
      "Acne is a common inflammatory condition affecting hair follicles and sebaceous glands. We treat active acne, post-inflammatory marks, and prevent future breakouts.",
    symptoms: [
      "Comedones (blackheads/whiteheads)",
      "Papules and pustules",
      "Nodules or cysts",
      "Oily skin",
      "Post-acne scars",
    ],
    treatments:
      "Topical treatments, oral medications, chemical peels, laser therapy, extraction and drainage.",
  },
  {
    slug: "hives",
    name: "Hives/Urticaria",
    overview:
      "Hives are raised, itchy welts on the skin caused by histamine release. They can be acute or chronic and require identifying underlying triggers.",
    symptoms: [
      "Red or pink welts",
      "Intense itching",
      "Welts that move around",
      "Angioedema (swelling)",
      "Variable appearance",
    ],
    treatments:
      "Antihistamines, topical treatments, trigger identification and avoidance, systemic management.",
  },

  // Anti-aging & Aesthetic Concerns
  {
    slug: "anti-aging",
    name: "Anti-Aging",
    overview:
      "Anti-aging treatments address fine lines, wrinkles, loss of volume, and skin laxity. We provide both preventive and restorative options.",
    symptoms: [
      "Fine lines and wrinkles",
      "Loss of volume",
      "Sagging skin",
      "Age spots",
      "Dull complexion",
    ],
    treatments:
      "Botox, fillers, chemical peels, laser treatments, radiofrequency, skincare protocols.",
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    overview:
      "Laser hair removal permanently reduces body hair using targeted light energy. It's safe, effective, and works on various skin and hair types.",
    symptoms: ["Unwanted body or facial hair"],
    treatments: "Laser hair removal treatments with multiple sessions.",
  },
  {
    slug: "microdermabrasion",
    name: "Microdermabrasion",
    overview:
      "Microdermabrasion is a mechanical exfoliation treatment that removes dead skin cells and promotes cell renewal for smoother, brighter skin.",
    symptoms: ["Dull skin", "Surface irregularities", "Fine lines", "Acne scars"],
    treatments: "Microdermabrasion sessions, may be combined with other treatments.",
  },
  {
    slug: "skin-tightening",
    name: "Skin Tightening",
    overview:
      "Skin tightening treatments use radiofrequency, ultrasound, or laser technology to stimulate collagen and improve skin elasticity.",
    symptoms: ["Loose or sagging skin", "Loss of elasticity", "Fine lines"],
    treatments: "Radiofrequency, ultrasound, laser treatments.",
  },

  // Skin Procedures
  {
    slug: "wart-removal",
    name: "Wart Removal",
    overview:
      "Warts are viral infections of the skin. We provide multiple removal options including cryotherapy and surgical techniques.",
    symptoms: ["Hard growths on skin", "Rough texture", "May bleed if traumatized"],
    treatments: "Cryotherapy (freezing), topical treatments, surgical removal.",
  },
  {
    slug: "skin-tag-removal",
    name: "Skin Tag Removal",
    overview:
      "Skin tags are benign growths that can be safely removed for cosmetic or comfort reasons.",
    symptoms: ["Small, soft growths", "Usually on neck, armpits, groin"],
    treatments: "Surgical removal, cauterization, ligation.",
  },
  {
    slug: "corn-removal",
    name: "Corn Removal",
    overview:
      "Corns are thickened areas of skin caused by pressure and friction. We provide effective removal and prevention strategies.",
    symptoms: ["Hard, painful bumps on feet", "Tenderness"],
    treatments: "Topical removal, paring, orthotics.",
  },
  {
    slug: "acne-scar-surgery",
    name: "Acne Scar Surgery",
    overview:
      "Acne scars can be significantly improved through surgical and non-surgical techniques including subcision, excision, and resurfacing.",
    symptoms: ["Atrophic scars (ice pick, boxcar)", "Hypertrophic scars"],
    treatments: "Subcision, chemical peels, laser resurfacing, microneedling, filler injections.",
  },

  // Specialized Concerns
  {
    slug: "premature-ejaculation",
    name: "Premature Ejaculation",
    overview:
      "Premature ejaculation is a treatable condition. We provide confidential assessment and effective topical and systemic treatments.",
    symptoms: [
      "Ejaculation with minimal stimulation",
      "Lack of control",
      "Stress and relationship concerns",
    ],
    treatments: "Topical anesthetics, behavioral therapy, systemic medications.",
  },
  {
    slug: "erectile-dysfunction",
    name: "Erectile Dysfunction",
    overview:
      "Erectile dysfunction can have multiple causes. We provide comprehensive evaluation and treatment options including topical and oral medications.",
    symptoms: [
      "Difficulty achieving erection",
      "Inability to maintain erection",
      "Reduced sexual desire",
    ],
    treatments: "Oral medications, topical treatments, counseling, vascular assessment.",
  },
  {
    slug: "genital-ulcers",
    name: "Genital Ulcers",
    overview:
      "Genital ulcers can result from infections (HSV, etc.) or other causes. Proper diagnosis and treatment prevent complications and transmission.",
    symptoms: ["Painful ulcers", "Blisters", "Discharge", "Lymphadenopathy"],
    treatments: "Antiviral therapy, topical treatments, pain management.",
  },
  {
    slug: "stds",
    name: "STDs - Dermatological Aspects",
    overview:
      "We treat the dermatological manifestations of sexually transmitted infections with confidentiality and expertise.",
    symptoms: ["Genital lesions", "Discharge", "Warts", "Rashes"],
    treatments: "Infection-specific treatments, contact tracing guidance, prevention education.",
  },

  // Children's Skin Conditions
  {
    slug: "diaper-dermatitis",
    name: "Diaper Dermatitis",
    overview:
      "Diaper rash is inflammation caused by moisture, friction, and microbial overgrowth. We provide effective treatment and prevention strategies.",
    symptoms: ["Red, inflamed skin in diaper area", "Tenderness", "May have pustules or erosions"],
    treatments: "Moisture barriers, antifungal treatments, topical steroids, hygiene protocols.",
  },
  {
    slug: "birthmarks",
    name: "Birthmarks",
    overview:
      "Birthmarks can be vascular (hemangiomas, port-wine stains) or pigmented (nevi). We evaluate and offer appropriate treatment options.",
    symptoms: ["Visible colored marks at birth or in infancy"],
    treatments: "Laser treatments, surgical removal if needed, monitoring.",
  },
  {
    slug: "molluscum",
    name: "Molluscum Contagiosum",
    overview:
      "Molluscum is a viral infection common in children. While self-limited, treatment can prevent spread and hasten resolution.",
    symptoms: ["Small, pearly bumps", "Central dimple", "Clusters", "May spread"],
    treatments: "Topical treatments, cryotherapy, extraction, immunotherapy.",
  },
  {
    slug: "white-spots",
    name: "White Spots/Tinea Versicolor",
    overview:
      "White spots in children can indicate pityriasis alba, tinea versicolor, or early vitiligo. Proper diagnosis guides treatment.",
    symptoms: ["Light-colored patches", "May be slightly scaly"],
    treatments: "Antifungal treatments if fungal, moisturization, sun protection.",
  },

  // Other Medical Conditions
  {
    slug: "pregnancy-skin-changes",
    name: "Pregnancy-Related Skin Changes",
    overview:
      "Pregnancy causes various skin changes including melasma, striae, and vascular changes. We provide safe treatment options for expectant mothers.",
    symptoms: ["Melasma (chloasma)", "Stretch marks", "Vascular changes", "Increased pigmentation"],
    treatments: "Safe topical treatments, sun protection, post-pregnancy interventions.",
  },
  {
    slug: "diabetes-skin-concerns",
    name: "Diabetes-Related Skin Concerns",
    overview:
      "Diabetes can manifest with various skin conditions. We coordinate with your physician for comprehensive care.",
    symptoms: [
      "Bacterial infections",
      "Fungal infections",
      "Necrobiosis lipoidica",
      "Diabetic bullae",
    ],
    treatments: "Infection management, skin care, coordination with endocrinologist.",
  },
  {
    slug: "thyroid-skin-effects",
    name: "Thyroid Condition Skin Effects",
    overview:
      "Thyroid disorders can cause skin manifestations including myxedema, pretibial myxedema, and hair changes.",
    symptoms: ["Myxedema", "Dry skin", "Hair loss", "Nail changes"],
    treatments: "Coordination with endocrinologist, symptomatic skin care.",
  },
];

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
    conditions: [
      "fungal-infections",
      "vitiligo",
      "pigmentation",
      "psoriasis",
      "eczema",
      "acne",
      "hives",
    ],
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
    conditions: [
      "hair-fall",
      "dandruff",
      "brittle-hair",
      "alopecia",
      "prp-hair-therapy",
      "scalp-health",
    ],
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
    conditions: ["alopecia"],
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
    conditions: [
      "anti-aging",
      "laser-hair-removal",
      "pigmentation",
      "microdermabrasion",
      "skin-tightening",
    ],
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
    conditions: [
      "wart-removal",
      "skin-tag-removal",
      "corn-removal",
      "acne-scar-surgery",
      "vitiligo",
    ],
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
    conditions: ["white-spots", "diaper-dermatitis", "birthmarks", "molluscum"],
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
    conditions: ["pregnancy-skin-changes", "diabetes-skin-concerns", "thyroid-skin-effects"],
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
    conditions: ["premature-ejaculation", "erectile-dysfunction", "genital-ulcers", "stds"],
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

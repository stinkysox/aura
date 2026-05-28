import { Helmet } from "react-helmet-async";
import { site } from "@/content/site";

function stripNonDigits(phone: string) {
  return phone.replace(/[^\d]/g, "");
}

export function LocalBusinessSchema() {
  const phoneDigits = stripNonDigits(site.phone);
  const mapQuery = encodeURIComponent(`${site.name}, ${site.address}, ${site.city}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    name: site.name,
    description:
      "Dermatologist in Udaipur. Skin and Hair Clinic in Udaipur providing medical dermatology, cosmetology, and hair restoration by appointment.",
    url: "https://auraskinandhairclinic.com/",
    telephone: `+${phoneDigits}`,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: site.city },
      { "@type": "AdministrativeArea", name: "Rajasthan" },
    ],
    keywords: [
      "Dermatologist in Udaipur",
      "Skin and Hair Clinic in Udaipur",
      "Hair fall treatment in Udaipur",
      "Acne treatment in Udaipur",
      "PRP in Udaipur",
      "Hair transplant in Udaipur",
    ],
    sameAs: [],
    hasMap: `https://www.google.com/maps?q=${mapQuery}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}


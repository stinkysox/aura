import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion";
import { useGSAP } from "@gsap/react";
import { treatments } from "@/content/site";
import { Link } from "react-router-dom";

// Premium clinic-themed placeholders to test the scaling and parallax depth
const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80", // Facial Therapy
  "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&w=1000&q=80", // Serum/Formulation
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80", // Clinical Wellness
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80", // Scalp/Hair Care
];

export function TreatmentScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(
    () => {
      const cards = cardsRef.current.filter(Boolean);
      if (!cards.length) return;

      cards.forEach((card) => {
        // Reveal and scale the card container smoothly as it scrolls into view
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 60, 
            scale: 0.96 
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%", 
              end: "top 55%",   
              scrub: 0.8,       
              invalidateOnRefresh: true,
            },
          }
        );

        // Counter-parallax movement on the inner image layers
        const img = card.querySelector(".parallax-img");
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative bg-[#f5f1eb] py-24 md:py-36">
      {/* STATIC BACKGROUND EMBELLISHMENTS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="sticky top-[10vh] left-[5vw] font-serif text-[16vw] leading-none tracking-[-0.05em] text-black/[0.015]">
          02
        </div>
      </div>

      {/* HEADER SECTION */}
      <div className="relative z-10 mx-auto mb-20 max-w-5xl px-6 flex items-end justify-between gap-4 md:mb-32 md:px-12">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-black/40">
            N° 02 · The Catalogue
          </span>
          <h2 className="font-serif text-4xl font-light tracking-[-0.02em] text-black md:text-5xl">
            Selected Treatments
          </h2>
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-black/50 pb-1">
          {treatments.length} compositions
        </span>
      </div>

      {/* EDITORIAL VERTICAL STACK */}
      <div className="mx-auto flex max-w-5xl flex-col gap-24 px-6 md:gap-40 md:px-12">
        {treatments.map((t, index) => {
          const isEven = index % 2 === 0;
          // Cycles seamlessly through placeholder images array
          const sampleImgSrc = PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length];

          return (
            <Link
              key={t.slug}
              to={`/treatments/${t.slug}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`
                group
                relative
                flex
                w-full
                flex-col
                overflow-hidden
                rounded-[2rem]
                border
                border-black/[0.04]
                bg-white/90
                shadow-[0_10px_40px_rgba(0,0,0,0.02)]
                will-change-transform
                transition-shadow
                duration-700
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)]
                md:h-[460px]
                ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
              `}
            >
              {/* IMAGE COLUMN (With overflow crop for parallax effect) */}
              <div className="relative w-full shrink-0 overflow-hidden bg-[#ebe7e0] md:w-[42%]">
                <div className="relative h-[260px] w-full scale-110 overflow-hidden md:h-full">
                  <img
                    src={sampleImgSrc}
                    alt={`${t.name} — Clinic Formulation`}
                    className="parallax-img absolute inset-0 h-[120%] w-full object-cover will-change-transform"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black/[0.01] transition-colors duration-500 group-hover:bg-transparent" />
              </div>

              {/* CONTENT COLUMN */}
              <div className="relative flex w-full flex-col justify-center p-8 md:w-[58%] md:p-12 lg:p-16">
                {/* CARD META */}
                <div className="mb-6 flex items-baseline justify-between border-b border-black/[0.06] pb-4">
                  <span className="font-serif text-xs italic text-black/50">
                    Composition N° {t.number}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                    {t.family} · {t.duration}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mb-4 font-serif text-3xl font-light leading-[1.05] tracking-[-0.03em] text-black transition-transform duration-500 group-hover:translate-x-1 md:text-4xl lg:text-5xl">
                  {t.name}
                </h3>

                {/* POETRY */}
                <p className="mb-5 font-serif text-lg italic leading-snug text-black/65 md:text-xl">
                  "{t.poetry}"
                </p>

                {/* DESCRIPTION */}
                <p className="max-w-md text-sm leading-relaxed text-black/55 line-clamp-3">
                  {t.description}
                </p>

                {/* INTERACTIVE LINK FOOTER */}
                <div className="mt-8 flex items-center gap-4 pt-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-black">
                    Explore Protocol
                  </span>
                  <span className="inline-block h-[1px] w-8 bg-black/20 transition-all duration-500 ease-out group-hover:w-16 group-hover:bg-black/60" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
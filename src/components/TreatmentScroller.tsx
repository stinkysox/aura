import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion";
import { treatments } from "@/content/site";
import { Link } from "react-router-dom";

export function TreatmentScroller() {
  const sectionRef = useRef<HTMLElement>(null);

  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      // =========================
      // INITIAL STATES
      // =========================

      gsap.set(cards, {
        position: "absolute",
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
        transformPerspective: 1600,
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
        force3D: true,
      });

      // =========================
      // MASTER TIMELINE
      // =========================

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 1100}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // =========================
      // CARD CHOREOGRAPHY
      // =========================

      cards.forEach((card, index) => {
        if (!card) return;

        const direction = index % 2 === 0 ? 1 : -1;

        // ===== ENTRY =====

        tl.fromTo(
          card,
          {
            x: 260 * direction,
            y: 50,
            rotateY: 10 * direction,
            rotateZ: 1.5 * direction,
            scale: 0.96,
            opacity: 0,
            filter: "blur(2px)",
          },
          {
            x: 0,
            y: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
          },
          index * 1.3
        );

        // ===== READING WINDOW =====

        tl.to(
          card,
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
          },
          index * 1.3 + 0.5
        );

        // ===== EXIT =====

        tl.to(
          card,
          {
            x: -220 * direction,
            y: -40,
            rotateY: -6 * direction,
            rotateZ: -1 * direction,
            scale: 0.98,
            opacity: 0,
            filter: "blur(1px)",
            duration: 1,
          },
          index * 1.3 + 1.9
        );
      });

      // =========================
      // FLOATING AMBIENT MOTION
      // =========================

      cards.forEach((card, index) => {
        if (!card) return;

        gsap.to(card, {
          y: `+=${8 + index * 2}`,
          duration: 4 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // =========================
      // BACKGROUND TYPOGRAPHY
      // =========================

      gsap.to(".treatment-number", {
        yPercent: -10,
        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#f5f1eb]"
    >
      {/* ========================= */}
      {/* ATMOSPHERIC BACKGROUND */}
      {/* ========================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* RADIAL GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[70vw]
            w-[70vw]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            opacity-50
          "
          style={{
            background: `
              radial-gradient(
                circle,
                rgba(212,175,55,0.08),
                transparent 70%
              )
            `,
          }}
        />

        {/* CINEMATIC GRADIENT */}

        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(255,255,255,0.72),
                rgba(245,241,235,0.96)
              )
            `,
          }}
        />

        {/* GIANT TYPOGRAPHY */}

        <div
          className="
            treatment-number
            absolute
            left-[5vw]
            top-[10vh]
            font-serif
            text-[18vw]
            leading-none
            tracking-[-0.05em]
            text-black/[0.03]
          "
        >
          02
        </div>

        <div
          className="
            treatment-number
            absolute
            bottom-[5vh]
            right-[5vw]
            font-serif
            text-[12vw]
            italic
            leading-none
            text-black/[0.03]
          "
        >
          Treatments
        </div>
      </div>

      {/* ========================= */}
      {/* TOP BAR */}
      {/* ========================= */}

      <div className="relative z-20 flex items-center justify-between px-6 pb-12 pt-10 md:px-12">
        <span className="text-[10px] uppercase tracking-[0.35em] text-black/50">
          N° 02 · The Catalogue
        </span>

        <span className="text-[10px] uppercase tracking-[0.35em] text-black/50">
          {treatments.length} compositions
        </span>
      </div>

      {/* ========================= */}
      {/* STAGE */}
      {/* ========================= */}

      <div
        className="relative h-[calc(100vh-120px)] w-full"
        style={{
          perspective: "1600px",
        }}
      >
        {treatments.map((t, index) => (
          <Link
            key={t.slug}
            to={`/treatments/${t.slug}`}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="
              group
              absolute
              left-1/2
              top-1/2
              w-[88vw]
              max-w-[760px]
              -translate-x-1/2
              -translate-y-1/2
              overflow-hidden
              rounded-[2.5rem]
              border
              border-black/[0.06]
              bg-white/[0.78]
              p-8
              shadow-[0_20px_70px_rgba(0,0,0,0.06)]
              backdrop-blur-md
              md:p-14
            "
          >
            <div className="mb-7 overflow-hidden rounded-3xl border border-black/10 bg-white/50">
              <img
                src="/images/treatments/treatment-placeholder.svg"
                alt={`${t.name} — Skin and Hair Clinic in Udaipur`}
                className="h-44 w-full object-cover md:h-56"
                loading="lazy"
              />
            </div>
            {/* ========================= */}
            {/* SUBTLE GLOW */}
            {/* ========================= */}

            <div
              className="
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-700
                group-hover:opacity-100
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  rounded-[2.5rem]
                "
                style={{
                  background: `
                    radial-gradient(
                      circle at top,
                      rgba(212,175,55,0.06),
                      transparent 60%
                    )
                  `,
                }}
              />
            </div>

            {/* ========================= */}
            {/* CONTENT */}
            {/* ========================= */}

            <div className="relative z-10">
              {/* META */}

              <div className="mb-10 flex items-baseline justify-between border-b border-black/[0.06] pb-6">
                <span className="font-serif text-sm italic text-black/60">
                  N° {t.number}
                </span>

                <span className="text-[10px] uppercase tracking-[0.3em] text-black/45">
                  {t.family} · {t.duration}
                </span>
              </div>

              {/* TITLE */}

              <h3
                className="
                  mb-8
                  max-w-[12ch]
                  font-serif
                  text-5xl
                  font-light
                  leading-[0.92]
                  tracking-[-0.04em]
                  text-black
                  transition-transform
                  duration-700
                  md:text-7xl
                  group-hover:translate-x-1
                "
              >
                {t.name}
              </h3>

              {/* POETRY */}

              <p
                className="
                  max-w-[18ch]
                  font-serif
                  text-2xl
                  italic
                  leading-snug
                  text-black/65
                  md:text-3xl
                "
              >
                "{t.poetry}"
              </p>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-8
                  max-w-xl
                  text-base
                  leading-relaxed
                  text-black/62
                  md:text-lg
                "
              >
                {t.description}
              </p>

              {/* FOOTER */}

              <div className="mt-12 flex items-center gap-4">
                <span
                  className="
                    inline-block
                    h-px
                    w-12
                    bg-black/30
                    transition-all
                    duration-500
                    group-hover:w-20
                  "
                />

                <span className="text-[11px] uppercase tracking-[0.24em] text-black">
                  Read Protocol
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
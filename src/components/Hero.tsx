import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { gsap } from "@/lib/motion";

/**
 * Cinematic hero with pinned scroll choreography.
 * Separates GSAP (idle) and Framer (scroll) to avoid transform conflicts.
 */
export function CinematicHero() {
  const root = useRef<HTMLDivElement>(null);

  // 1. Framer Motion handles the Scroll-driven "Camera" movement
  const { scrollYProgress } = useScroll({
    target: root,
    offset: ["start start", "end start"],
  });

  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.45]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    // 2. GSAP handles the "Idle" floating animation on a nested child
    const ctx = gsap.context(() => {
      gsap.to(".orb-float-layer", {
        y: -25,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[150vh] overflow-hidden bg-background">
      <div className="sticky top-0 flex h-screen w-full max-w-full items-center overflow-hidden">
        {/* Atmospheric backdrop */}
        <div className="hero-atmosphere absolute inset-0 z-0" />

        {/* 
          SCROLL LAYER (Framer Motion)
          Controls the primary parallax and scale.
        */}
        <motion.div
          style={{ scale: orbScale, y: orbY }}
          className="pointer-events-none absolute top-1/2 right-0 z-10 w-[min(85vh,92vw)] -translate-y-1/2 translate-x-[30%] md:translate-x-[22%]"
        >
          {/* 
            IDLE LAYER (GSAP)
            Controls the floating. Keeping this separate prevents the "jitter".
          */}
          <div className="orb-float-layer">
            <div
              className="orb relative aspect-square w-full rounded-full shadow-2xl"
              style={{
                background: "linear-gradient(135deg, var(--clinic-bone), var(--clinic-stone))",
              }}
            />
          </div>
        </motion.div>

        {/* Editorial label rail — left vertical */}
        <div className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 -rotate-90 origin-left md:block">
          <span className="eyebrow text-[10px] uppercase tracking-widest opacity-50">
            N° 001 — Spring Clinic · MMXXVI
          </span>
        </div>

        {/* Top-right meta */}
        <div className="absolute right-12 top-28 z-20 hidden flex-col items-end text-right md:flex">
          <span className="eyebrow mb-2">A study in restraint</span>
          <span className="font-serif text-sm italic text-graphite/60">— Udaipur</span>
        </div>

        {/* The headline */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-20 mx-auto w-full max-w-[1700px] px-6 md:px-12"
        >
          <div className="max-w-[68rem]">
            <span className="eyebrow mb-8 block opacity-70">
              AURA Skin and Hair Clinic · Udaipur
            </span>
            <h1 className="max-w-full text-5xl font-light tracking-tight md:text-7xl lg:text-[6rem] xl:text-[7rem] 2xl:text-[7.5rem] whitespace-nowrap">
              <Lines lines={["The slow art", "of skin and hair."]} />
            </h1>
            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
              <div className="md:col-span-5 md:col-start-7">
                <p className="text-lg leading-relaxed text-graphite/80 md:text-xl">
                  A holistic center for your skin and hair problems in Udaipur. Thoughtful care,
                  medical expertise and accessible solutions.
                </p>
                <div className="mt-10">
                  <HeroCTA />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ y: subY }}
          className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-center"
        >
          <span className="eyebrow block text-[10px] uppercase tracking-[0.3em]">
            Scroll · slowly
          </span>
          <div className="mx-auto mt-3 h-10 w-px bg-graphite/20" />
        </motion.div>
      </div>
    </section>
  );
}

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="relative block overflow-hidden pb-2">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.15 }}
            className="block"
          >
            {line.split(" ").map((w, j) => (
              <span key={j} className="mr-[0.25em] inline-block last:mr-0 italic-alt">
                {w}
              </span>
            ))}
          </motion.span>
        </span>
      ))}
    </>
  );
}

export function HeroCTA() {
  return (
    <Link
      to="/book"
      className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-background transition-all hover:opacity-90 active:scale-95"
    >
      Begin a consultation
      <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
    </Link>
  );
}

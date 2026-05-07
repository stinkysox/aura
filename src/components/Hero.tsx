import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { gsap, ScrollTrigger } from "@/lib/motion";

/**
 * Cinematic hero with pinned scroll choreography.
 * - Liquid chrome orb (pure CSS, GPU)
 * - Editorial typography reveal
 * - Slow camera-push effect via transform
 */
export function CinematicHero() {
  const root = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });

  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.45]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(".orb-float", {
        y: -18,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, el);
    return () => { ctx.revert(); ScrollTrigger.refresh(); };
  }, []);

  return (
    <section ref={root} className="relative h-[150vh]">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        {/* atmospheric backdrop */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 70% 40%, oklch(0.96 0.012 80) 0%, oklch(0.985 0.005 80) 60%)",
          }}
        />

        {/* The orb — partially off-screen, right side */}
        <motion.div
          style={{ scale: orbScale, y: orbY }}
          className="orb-float absolute right-[-18vw] top-1/2 -translate-y-1/2"
        >
          <motion.div
            style={{ y: 0 }}
            className="orb relative rounded-full"
          >
            <div style={{ width: "min(85vh, 95vw)", aspectRatio: "1 / 1" }} />
          </motion.div>
        </motion.div>

        {/* Editorial label rail — left vertical */}
        <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 origin-left md:block">
          <span className="eyebrow">N° 001 — Spring Atelier · MMXXVI</span>
        </div>

        {/* Top-right meta */}
        <div className="absolute right-6 top-28 hidden flex-col items-end text-right md:flex">
          <span className="eyebrow mb-2">A study in restraint</span>
          <span className="font-serif text-sm italic text-graphite">— New Delhi</span>
        </div>

        {/* The headline */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-10 mx-auto w-full max-w-[1700px] px-6 md:px-12"
        >
          <div className="max-w-[68rem]">
            <span className="eyebrow mb-8 block">Aesthesia · Est. MMXIX</span>
            <h1 className="display-xl">
              <Lines lines={["The slow art", "of skin."]} />
            </h1>
            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
              <p className="body-lg md:col-span-5 md:col-start-7">
                A private dermatology atelier in Lutyens' Delhi.
                Considered protocols. Architectural results. A long, quiet conversation
                with the surface of the body.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ y: subY }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
        >
          <span className="eyebrow block">Scroll · slowly</span>
          <div className="mx-auto mt-3 h-10 w-px bg-graphite/40" />
        </motion.div>
      </div>
    </section>
  );
}

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="block reveal-mask">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.18 }}
            className="block"
          >
            {line.split(" ").map((w, j) => (
              <span key={j} className="mr-[0.25em] inline-block italic-alt">{w}</span>
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
      className="group inline-flex items-center gap-4 rounded-full border border-ink px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] transition-colors hover:bg-ink hover:text-background"
    >
      Begin a consultation
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}

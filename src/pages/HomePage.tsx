import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CinematicHero, HeroCTA } from "@/components/Hero";
import { TreatmentScroller } from "@/components/TreatmentScroller";
import { Section, Hairline } from "@/components/Section";
import { Plate } from "@/components/Placeholder";
import { Reveal, FadeIn } from "@/lib/motion";
import { philosophy, technology, testimonials, doctors } from "@/content/site";
import { Seo } from "@/seo/seo";
import { LocalBusinessSchema } from "@/seo/schema";

export function HomePage() {
  return (
    <div>
      <Seo
        title="Dermatologist in Udaipur"
        description="Dermatologist in Udaipur — AURA Skin and Hair Clinic. Holistic care for skin and hair concerns including acne, pigmentation, hair fall, PRP, lasers and hair transplantation."
        path="/"
      />
      <LocalBusinessSchema />
      <CinematicHero />

      <Hairline />

      {/* Philosophy — editorial split */}
      <Section eyebrow={philosophy.eyebrow} num="N° 01">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-24">
          <div className="md:col-span-7">
            <h2 className="display-lg">
              <Reveal>{philosophy.title}</Reveal>
            </h2>
          </div>
          <FadeIn className="md:col-span-4 md:col-start-9 md:pt-6">
            <p className="body-lg">{philosophy.body}</p>
            <Link
              to="/about"
              className="mt-10 inline-block border-b border-accent pb-1 text-[12px] uppercase tracking-[0.22em] text-accent hover:text-accent-foreground hover:opacity-80"
            >
              The clinic →
            </Link>
          </FadeIn>
        </div>
      </Section>

      {/* Editorial diptych with parallax */}
      <ParallaxDiptych />

      {/* Treatments horizontal scroller */}
      <TreatmentScroller />

      {/* Technology — Apple-style sticky reveal */}
      <TechnologySection />

      {/* Specialists */}
      <Section eyebrow="The Hands" num="N° 04">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="display-md">
              <Reveal>One specialist. One quiet philosophy.</Reveal>
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul>
              {doctors.map((d, i) => (
                <FadeIn key={d.name} delay={i * 0.05}>
                  <li className="grid grid-cols-12 items-baseline border-b border-border py-8">
                    <span className="col-span-1 hidden text-xs text-graphite md:block">0{i + 1}</span>
                    <span className="col-span-3 md:col-span-2">
                      <img
                        src={d.image}
                        alt={`${d.name} — Dermatologist in Udaipur`}
                        className="h-14 w-14 rounded-full object-cover border border-border"
                        loading="lazy"
                      />
                    </span>
                    <span className="col-span-9 md:col-span-4 font-serif text-2xl">{d.name}</span>
                    <span className="col-span-3 hidden text-sm text-graphite md:block">{d.role}</span>
                    <span className="col-span-3 hidden text-right text-xs text-graphite md:block">
                      → Profile
                    </span>
                  </li>
                </FadeIn>
              ))}
            </ul>
            <Link
              to="/doctors"
              className="mt-8 inline-block border-b border-ink pb-1 text-[12px] uppercase tracking-[0.22em] hover:opacity-60"
            >
              The Specialists →
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials — minimal floating quotes */}
      <Section eyebrow="Voices" num="N° 05" className="bg-bone">
        <div className="space-y-32 md:space-y-48">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={0.1} y={40}>
              <blockquote
                className={`mx-auto max-w-4xl ${i % 2 ? "md:ml-auto md:mr-12 md:text-right" : "md:ml-12"}`}
              >
                <p className="font-serif text-3xl leading-snug md:text-5xl">"{t.quote}"</p>
                <footer className="mt-8 text-xs uppercase tracking-[0.22em] text-graphite">
                  {t.author} · {t.note}
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Closing CTA — silence and a single gesture */}
      <Section className="text-center" eyebrow="A beginning" num="N° 06">
        <FadeIn>
          <h2 className="display-xl mx-auto max-w-5xl">
            <Reveal>The first session is a conversation.</Reveal>
          </h2>
          <p className="body-lg mx-auto mt-12 max-w-xl">
            Ninety minutes, in private, with a senior specialist. No prescription is written until
            we have read the skin slowly.
          </p>
          <div className="mt-16">
            <HeroCTA />
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}

function ParallaxDiptych() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 80]);

  return (
    <section ref={ref} className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto grid max-w-[1700px] grid-cols-12 gap-6 md:gap-10">
        <motion.div style={{ y: y1 }} className="col-span-7 md:col-span-5">
          <Plate tone="skin" ratio="3 / 4" label="Surface · 01" />
        </motion.div>
        <div className="col-span-5 flex flex-col justify-end pb-6 md:col-span-3">
          <span className="eyebrow mb-4">N° 02</span>
          <p className="font-serif text-xl italic leading-snug">
            "The dermis remembers what the surface cannot say."
          </p>
        </div>
        <motion.div
          style={{ y: y2 }}
          className="col-span-12 mt-12 md:col-span-4 md:col-start-9 md:mt-32"
        >
          <Plate tone="stone" ratio="4 / 5" label="Material · 02" />
        </motion.div>
      </div>
    </section>
  );
}

function TechnologySection() {
  return (
    <section className="bg-ink text-background">
      <div className="px-6 py-32 md:px-12 md:py-48">
        <div className="mx-auto max-w-[1700px]">
          <div className="mb-20 flex items-baseline justify-between">
            <span className="eyebrow tech-muted">
              N° 03 · Instruments
            </span>
            <span className="eyebrow tech-muted">
              {technology.length} platforms
            </span>
          </div>
          <h2 className="display-lg max-w-4xl">
            <Reveal>The most considered instruments, used least.</Reveal>
          </h2>
          <div className="mt-24 grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <Plate tone="graphite" ratio="4 / 5" label="Instrument · still" />
            </div>
            <ul className="md:col-span-6 md:col-start-7">
              {technology.map((t, i) => (
                <FadeIn key={t.name} delay={i * 0.05}>
                  <li className="tech-border border-b py-8">
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-2xl">{t.name}</span>
                      <span className="tech-muted text-xs">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="tech-note mt-3 max-w-md text-sm">
                      {t.note}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


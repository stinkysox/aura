import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { faqs } from "@/content/site";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Questions — AURA Skin and Hair Clinic" },
      { name: "description", content: "Considered answers." },
      { property: "og:title", content: "Questions — AURA Skin and Hair Clinic" },
      { property: "og:description", content: "On consultation, walk-ins, sensitive skin, imagery." },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="pt-40">
      <Section eyebrow="Questions" num="Considered answers">
        <h1 className="display-xl"><Reveal>A few things asked.</Reveal></h1>
      </Section>
      <section className="px-6 md:px-12 pb-32">
        <div className="mx-auto max-w-4xl">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full border-t border-border py-10 text-left"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <h2 className="font-serif text-2xl md:text-4xl tracking-tight">{f.q}</h2>
                  <span className="text-xs uppercase tracking-[0.22em] text-graphite shrink-0">
                    {open === i ? "—" : "+"}
                  </span>
                </div>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="body-lg max-w-2xl mt-6 overflow-hidden"
                    >
                      {f.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { faqs } from "@/content/site";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="pt-24">
      <Section eyebrow="Questions" num="Considered answers">
        <h1 className="display-xl">
          <Reveal>A few things asked.</Reveal>
        </h1>
      </Section>
      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full border-t border-border py-10 text-left"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <h2 className="font-serif text-2xl tracking-tight md:text-4xl">{f.q}</h2>
                  <span className="shrink-0 text-xs uppercase tracking-[0.22em] text-graphite">
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
                      className="body-lg mt-6 max-w-2xl overflow-hidden"
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


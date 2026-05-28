import { Section } from "@/components/Section";
import { Reveal } from "@/lib/motion";

export function Legal({ title }: { title: string }) {
  return (
    <div className="pt-40">
      <Section eyebrow="Considered, in writing" num={title}>
        <h1 className="display-xl">
          <Reveal>{`${title}.`}</Reveal>
        </h1>
      </Section>
      <section className="px-6 pb-40 md:px-12">
        <div className="mx-auto max-w-2xl space-y-6 text-foreground/80">
          {Array.from({ length: 6 }).map((_, i) => (
            <p key={i} className="text-base leading-relaxed">
              At AURA Skin and Hair Clinic we treat patient information the way we treat the
              patient — with restraint, precision and an instinct toward the minimum necessary.
              This document outlines the small number of ways we collect, hold, and consider
              information shared with us.
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}


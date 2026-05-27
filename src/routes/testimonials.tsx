import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { testimonials } from "@/content/site";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Voices — AURA Skin and Hair Clinic" },
      { name: "description", content: "What our patients have said, quietly." },
      { property: "og:title", content: "Voices — AURA Skin and Hair Clinic" },
      { property: "og:description", content: "Patient voices." },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <div className="pt-40">
      <Section eyebrow="Voices" num="N° 05">
        <h1 className="display-xl"><Reveal>Said quietly.</Reveal></h1>
      </Section>
      <section className="px-6 md:px-12 pb-32">
        <div className="mx-auto max-w-[1400px] space-y-48">
          {[...testimonials, ...testimonials].map((t, i) => (
            <FadeIn key={i} y={40}>
              <blockquote className={`max-w-3xl ${i % 3 === 0 ? "" : i % 3 === 1 ? "ml-auto text-right" : "mx-auto text-center"}`}>
                <p className="font-serif text-3xl md:text-5xl leading-snug">"{t.quote}"</p>
                <footer className="mt-8 text-xs uppercase tracking-[0.22em] text-graphite">{t.author} · {t.note}</footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

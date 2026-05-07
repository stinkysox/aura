import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { concerns } from "@/content/site";

export const Route = createFileRoute("/concerns")({
  head: () => ({
    meta: [
      { title: "Skin Concerns — Aesthesia" },
      { name: "description", content: "Six considered concerns." },
      { property: "og:title", content: "Skin Concerns — Aesthesia" },
      { property: "og:description", content: "Pigmentation, texture, volume, sensitivity, acne, longevity." },
    ],
  }),
  component: Concerns,
});

function Concerns() {
  return (
    <div className="pt-40">
      <Section eyebrow="Concerns" num="N° 03">
        <h1 className="display-xl max-w-5xl"><Reveal>What the skin asks for.</Reveal></h1>
      </Section>
      <section className="px-6 md:px-12">
        <div className="mx-auto max-w-[1700px]">
          {concerns.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.04}>
              <div className="grid grid-cols-12 items-baseline gap-4 border-t border-border py-14 md:py-20">
                <span className="col-span-1 font-serif text-sm italic text-graphite">0{i + 1}</span>
                <h2 className="col-span-11 md:col-span-6 font-serif text-4xl md:text-6xl tracking-tight">{c.name}</h2>
                <p className="col-span-12 md:col-span-5 body-lg">{c.note}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

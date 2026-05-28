import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { concerns } from "@/content/site";

export function ConcernsPage() {
  return (
    <div className="pt-40">
      <Section eyebrow="Concerns" num="N° 03">
        <h1 className="display-xl max-w-5xl">
          <Reveal>What the skin asks for.</Reveal>
        </h1>
      </Section>
      <section className="px-6 md:px-12">
        <div className="mx-auto max-w-[1700px]">
          {concerns.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.04}>
              <div className="grid grid-cols-12 items-baseline gap-4 border-t border-border py-14 md:py-20">
                <span className="col-span-1 font-serif text-sm italic text-graphite">
                  0{i + 1}
                </span>
                <h2 className="col-span-11 font-serif text-4xl tracking-tight md:col-span-6 md:text-6xl">
                  {c.name}
                </h2>
                <p className="col-span-12 body-lg md:col-span-5">{c.note}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}


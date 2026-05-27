import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Plate } from "@/components/Placeholder";
import { Reveal, FadeIn } from "@/lib/motion";
import { journal } from "@/content/site";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Journal — AURA Skin and Hair Clinic" },
      { name: "description", content: "Notes from the clinic." },
      { property: "og:title", content: "Journal — AURA Skin and Hair Clinic" },
      { property: "og:description", content: "Editorial writing on skin and restraint." },
    ],
  }),
  component: Journal,
});

function Journal() {
  return (
    <div className="pt-40">
      <Section eyebrow="The Journal" num="MMXXVI">
        <h1 className="display-xl"><Reveal>Notes from the clinic.</Reveal></h1>
      </Section>
      <section className="px-6 md:px-12">
        <div className="mx-auto max-w-[1700px]">
          {journal.map((j, i) => (
            <FadeIn key={j.slug} delay={i * 0.04}>
              <Link to="/journal/$slug" params={{ slug: j.slug }}
                className="group grid grid-cols-12 gap-6 border-t border-border py-12 md:py-16 items-baseline">
                <span className="col-span-2 md:col-span-1 text-xs uppercase tracking-[0.22em] text-graphite">{j.date}</span>
                <h2 className="col-span-10 md:col-span-7 font-serif text-3xl md:text-5xl tracking-tight transition-transform duration-700 group-hover:translate-x-2">
                  {j.title}
                </h2>
                <p className="col-span-12 md:col-span-3 body-lg md:text-base">{j.excerpt}</p>
                <span className="col-span-12 md:col-span-1 text-right text-xs uppercase tracking-[0.22em] text-graphite">{j.read}</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
      <Section>
        <Plate tone="bone" ratio="21/9" label="From the clinic · still life" />
      </Section>
    </div>
  );
}

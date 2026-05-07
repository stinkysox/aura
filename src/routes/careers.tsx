import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Aesthesia" },
      { name: "description", content: "On joining the atelier." },
      { property: "og:title", content: "Careers — Aesthesia" },
      { property: "og:description", content: "Open positions at Aesthesia." },
    ],
  }),
  component: Careers,
});

const roles = [
  { t: "Senior Dermatologist", loc: "New Delhi · Full-time" },
  { t: "Aesthetic Nurse Practitioner", loc: "New Delhi · Full-time" },
  { t: "Atelier Host", loc: "New Delhi · Part-time" },
  { t: "Patient Coordinator", loc: "New Delhi · Full-time" },
];

function Careers() {
  return (
    <div className="pt-40">
      <Section eyebrow="The Atelier" num="On joining">
        <h1 className="display-xl max-w-6xl"><Reveal>We hire slowly.</Reveal></h1>
        <p className="body-lg mt-12 max-w-xl">
          Aesthesia is a small house. We add one person, perhaps two, in a year — and only after a
          long conversation.
        </p>
      </Section>
      <section className="px-6 md:px-12 pb-32">
        <div className="mx-auto max-w-[1700px]">
          {roles.map((r, i) => (
            <FadeIn key={r.t} delay={i * 0.04}>
              <div className="grid grid-cols-12 items-baseline gap-4 border-t border-border py-12">
                <span className="col-span-1 text-xs text-graphite">0{i + 1}</span>
                <h2 className="col-span-11 md:col-span-7 font-serif text-3xl md:text-5xl">{r.t}</h2>
                <span className="col-span-6 md:col-span-3 text-xs uppercase tracking-[0.22em] text-graphite">{r.loc}</span>
                <span className="col-span-6 md:col-span-1 text-right text-xs uppercase tracking-[0.22em] text-graphite">→ Apply</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

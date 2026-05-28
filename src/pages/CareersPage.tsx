import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";

const roles = [
  { t: "Senior Dermatologist", loc: "Udaipur · Full-time" },
  { t: "Aesthetic Nurse Practitioner", loc: "Udaipur · Full-time" },
  { t: "Clinic Host", loc: "Udaipur · Part-time" },
  { t: "Patient Coordinator", loc: "Udaipur · Full-time" },
];

export function CareersPage() {
  return (
    <div className="pt-40">
      <Section eyebrow="The Clinic" num="On joining">
        <h1 className="display-xl max-w-6xl">
          <Reveal>We hire slowly.</Reveal>
        </h1>
        <p className="body-lg mt-12 max-w-xl">
          AURA Skin and Hair Clinic is a small clinic. We add one person, perhaps two, in a year —
          and only after a long conversation.
        </p>
      </Section>
      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-[1700px]">
          {roles.map((r, i) => (
            <FadeIn key={r.t} delay={i * 0.04}>
              <div className="grid grid-cols-12 items-baseline gap-4 border-t border-border py-12">
                <span className="col-span-1 text-xs text-graphite">0{i + 1}</span>
                <h2 className="col-span-11 font-serif text-3xl md:col-span-7 md:text-5xl">
                  {r.t}
                </h2>
                <span className="col-span-6 text-xs uppercase tracking-[0.22em] text-graphite md:col-span-3">
                  {r.loc}
                </span>
                <span className="col-span-6 text-right text-xs uppercase tracking-[0.22em] text-graphite md:col-span-1">
                  → Apply
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}


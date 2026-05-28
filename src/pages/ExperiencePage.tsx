import { Section } from "@/components/Section";
import { Plate } from "@/components/Placeholder";
import { Reveal, FadeIn } from "@/lib/motion";

const acts = [
  { t: "I", name: "The Vestibule", note: "Linen drapes. A reading list. The city, gone." },
  { t: "II", name: "The Reading", note: "Ninety quiet minutes. Diagnostic, mapping, tea." },
  { t: "III", name: "The Protocol", note: "Composed in the room beside yours. Written, never recited." },
  { t: "IV", name: "The Treatment", note: "Light, sound, pressure. Always slow." },
  { t: "V", name: "The Departure", note: "A small linen bag. The same calm air." },
];

export function ExperiencePage() {
  return (
    <div className="pt-24">
      <Section eyebrow="A choreographed visit" num="In five acts">
        <h1 className="display-xl">
          <Reveal>The visit, in five acts.</Reveal>
        </h1>
      </Section>
      <div className="px-6 md:px-12">
        <div className="mx-auto max-w-[1700px] space-y-32">
          {acts.map((a, i) => (
            <FadeIn key={a.t} delay={i * 0.05}>
              <article className="grid grid-cols-12 items-end gap-6 md:gap-10">
                <div className="col-span-2 md:col-span-1">
                  <span className="font-serif text-3xl italic text-graphite">{a.t}</span>
                </div>
                <div className="col-span-10 md:col-span-5">
                  <h2 className="display-md mb-4">{a.name}</h2>
                  <p className="body-lg">{a.note}</p>
                </div>
                <div className="col-span-12 md:col-span-5 md:col-start-8">
                  <Plate tone={i % 2 ? "bone" : "skin"} ratio="16/10" label={`Act ${a.t}`} />
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}


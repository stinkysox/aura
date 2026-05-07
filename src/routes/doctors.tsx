import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Plate } from "@/components/Placeholder";
import { Reveal, FadeIn } from "@/lib/motion";
import { doctors } from "@/content/site";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Specialists — Aesthesia" },
      { name: "description", content: "Four specialists. One quiet philosophy." },
      { property: "og:title", content: "Specialists — Aesthesia" },
      { property: "og:description", content: "The hands behind the atelier." },
    ],
  }),
  component: Doctors,
});

function Doctors() {
  return (
    <div className="pt-40">
      <Section eyebrow="The Hands" num="N° 04">
        <h1 className="display-xl"><Reveal>Four specialists.</Reveal></h1>
      </Section>
      <section className="px-6 md:px-12">
        <div className="mx-auto max-w-[1700px] space-y-32 md:space-y-48">
          {doctors.map((d, i) => (
            <FadeIn key={d.name} delay={i * 0.05}>
              <article className={`grid grid-cols-12 items-end gap-6 md:gap-10 ${i % 2 ? "" : "md:[&>*:first-child]:order-2"}`}>
                <div className="col-span-12 md:col-span-5">
                  <Plate tone={i % 2 ? "bone" : "skin"} ratio="3/4" label={d.name} />
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-7">
                  <span className="eyebrow mb-4 block">0{i + 1} · {d.role}</span>
                  <h2 className="display-md mb-6">{d.name}</h2>
                  <p className="body-lg">{d.bio}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

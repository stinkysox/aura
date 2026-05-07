import { createFileRoute } from "@tanstack/react-router";
import { Section, Hairline } from "@/components/Section";
import { Plate } from "@/components/Placeholder";
import { Reveal, FadeIn } from "@/lib/motion";
import { site } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Atelier — Aesthesia" },
      { name: "description", content: "A private dermatology atelier in Lutyens' Delhi. Founded MMXIX." },
      { property: "og:title", content: "The Atelier — Aesthesia" },
      { property: "og:description", content: "Founded on restraint, light and the long view." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="pt-40">
      <Section eyebrow="Manifesto" num="N° 00">
        <h1 className="display-xl max-w-6xl">
          <Reveal>A clinic the size of a quiet room.</Reveal>
        </h1>
      </Section>

      <section className="px-6 md:px-12">
        <div className="mx-auto grid max-w-[1700px] grid-cols-12 gap-6 md:gap-10">
          <FadeIn className="col-span-12 md:col-span-7"><Plate tone="bone" ratio="16 / 10" label="Atelier · Drawing Room" /></FadeIn>
          <div className="col-span-12 mt-12 md:col-span-4 md:col-start-9 md:mt-24">
            <p className="eyebrow mb-6">Founded MMXIX</p>
            <p className="font-serif text-2xl italic leading-snug">
              "We wanted a place that felt the way good light feels — undemanding, exact."
            </p>
            <p className="mt-8 text-sm text-graphite">— Dr. Aanya Kohli, Founder</p>
          </div>
        </div>
      </section>

      <Section eyebrow="The Philosophy" num="N° 01">
        <div className="grid grid-cols-12 gap-10">
          <h2 className="display-md col-span-12 md:col-span-5">
            <Reveal>Three quiet beliefs.</Reveal>
          </h2>
          <div className="col-span-12 grid grid-cols-1 gap-12 md:col-span-6 md:col-start-7 md:grid-cols-1">
            {[
              { t: "Restraint", b: "We will recommend less than we are asked for. The first answer is almost always: do less." },
              { t: "Architecture", b: "Skin is structural. We map and we draw before we treat." },
              { t: "Time", b: "Every protocol is calibrated to the season, the age and the patience of the patient." },
            ].map((x, i) => (
              <FadeIn key={x.t} delay={i * 0.08}>
                <div className="border-t border-border pt-6">
                  <p className="eyebrow mb-3">0{i + 1}</p>
                  <h3 className="font-serif text-3xl">{x.t}</h3>
                  <p className="body-lg mt-3">{x.b}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Hairline />

      <Section eyebrow="The Building" num="N° 02">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <FadeIn className="col-span-12 md:col-span-4"><Plate tone="stone" ratio="3/4" label="Vestibule" /></FadeIn>
          <FadeIn delay={0.1} className="col-span-12 md:col-span-5 md:mt-24"><Plate tone="bone" ratio="4/5" label="Treatment · 02" /></FadeIn>
          <div className="col-span-12 md:col-span-3 md:mt-40">
            <p className="font-serif text-xl italic leading-snug">
              A late-modern bungalow on Amrita Shergill Marg. Restored quietly, in linen, lime and oak.
            </p>
            <p className="mt-6 text-sm text-graphite">{site.address}</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

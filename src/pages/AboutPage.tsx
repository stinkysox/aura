import { Section, Hairline } from "@/components/Section";
import { Plate } from "@/components/Placeholder";
import { Reveal, FadeIn } from "@/lib/motion";
import { site } from "@/content/site";

export function AboutPage() {
  return (
    <div className="pt-24">
      <Section eyebrow="Manifesto" num="N° 00">
        <h1 className="display-xl max-w-6xl">
          <Reveal>A holistic center for skin and hair.</Reveal>
        </h1>
      </Section>

      <section className="px-6 md:px-12">
        <div className="mx-auto grid max-w-[1700px] grid-cols-12 gap-6 md:gap-10">
          <FadeIn className="col-span-12 md:col-span-7">
            <Plate tone="bone" ratio="16 / 10" label="AURA Skin and Hair Clinic" />
          </FadeIn>
          <div className="col-span-12 mt-12 md:col-span-4 md:col-start-9 md:mt-24">
            <p className="eyebrow mb-6">Founded in Udaipur</p>
            <p className="font-serif text-2xl italic leading-snug">
              "Our work begins with what the patient brings, not with what the clinic offers. Every
              plan is built around skin, hair and context."
            </p>
            <p className="mt-8 text-sm text-graphite">— Dr. Nidheesh Agarwal</p>
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
              {
                t: "Holism",
                b: "Skin and hair are part of the same story. We look for the root, the rhythm and the system behind every condition.",
              },
              {
                t: "Clarity",
                b: "Diagnosis comes before treatment. We describe the concern clearly and then design care that is measured and kind.",
              },
              {
                t: "Care",
                b: "Affordable, respectful and sustainable care is not optional. It is the only way we can honour the trust of our patients.",
              },
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
          <FadeIn className="col-span-12 md:col-span-4">
            <Plate tone="stone" ratio="3/4" label="Reception" />
          </FadeIn>
          <FadeIn delay={0.1} className="col-span-12 md:col-span-5 md:mt-24">
            <Plate tone="bone" ratio="4/5" label="Treatment Room" />
          </FadeIn>
          <div className="col-span-12 md:col-span-3 md:mt-40">
            <p className="font-serif text-xl italic leading-snug">
              AURA Skin and Hair Clinic sits in Sardarpura, Udaipur. It is quiet, practical and
              built around the needs of skin and hair care.
            </p>
            <p className="mt-6 text-sm text-graphite">{site.address}</p>
          </div>
        </div>
      </Section>
    </div>
  );
}


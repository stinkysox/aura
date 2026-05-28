import { Section } from "@/components/Section";
import { Plate } from "@/components/Placeholder";
import { Reveal, FadeIn } from "@/lib/motion";
import { technology } from "@/content/site";

export function TechnologyPage() {
  return (
    <div className="pt-40">
      <Section eyebrow="Instruments" num="N° 03">
        <h1 className="display-xl max-w-6xl">
          <Reveal>The most considered instruments, used least.</Reveal>
        </h1>
      </Section>
      <div className="px-6 md:px-12">
        <div className="mx-auto max-w-[1700px] space-y-48">
          {technology.map((t, i) => (
            <FadeIn key={t.name} delay={0.05}>
              <article
                className={`grid grid-cols-12 gap-6 md:gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="col-span-12 md:col-span-7">
                  <Plate tone={i % 2 ? "graphite" : "stone"} ratio="16/10" label={t.name} />
                </div>
                <div className="col-span-12 md:col-span-4 md:col-start-9">
                  <span className="eyebrow mb-4 block">N° 0{i + 1}</span>
                  <h2 className="display-md mb-6">{t.name}</h2>
                  <p className="body-lg">{t.note}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}


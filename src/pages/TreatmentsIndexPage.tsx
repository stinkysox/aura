import { Link } from "react-router-dom";
import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { treatments } from "@/content/site";

export function TreatmentsIndexPage() {
  return (
    <div className="pt-24">
      <Section eyebrow="The Catalogue" num="MMXXVI">
        <h1 className="display-xl">
          <Reveal>Six compositions.</Reveal>
        </h1>
        <p className="body-lg mt-12 max-w-xl">
          Each protocol is an arrangement — of acids, light, time and silence — drawn from a
          vocabulary of six families.
        </p>
      </Section>

      <section className="px-6 md:px-12">
        <div className="mx-auto max-w-[1700px]">
          <ul>
            {treatments.map((t, i) => (
              <FadeIn key={t.slug} delay={i * 0.04}>
                <li>
                  <Link
                    to={`/treatments/${t.slug}`}
                    className="group grid grid-cols-12 items-baseline gap-4 border-t border-border py-12 transition-colors hover:bg-bone md:py-16"
                  >
                    <span className="col-span-1 font-serif text-sm italic text-graphite">
                      N° {t.number}
                    </span>
                    <span className="col-span-11 font-serif text-5xl tracking-tight transition-transform duration-700 group-hover:translate-x-3 md:col-span-6 md:text-7xl">
                      {t.name}
                    </span>
                    <span className="col-span-6 text-xs uppercase tracking-[0.22em] text-graphite md:col-span-3">
                      {t.family}
                    </span>
                    <span className="col-span-6 text-right text-xs uppercase tracking-[0.22em] text-graphite md:col-span-2">
                      {t.duration}
                    </span>
                  </Link>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}


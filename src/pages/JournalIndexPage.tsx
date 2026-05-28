import { Link } from "react-router-dom";
import { Section } from "@/components/Section";
import { Plate } from "@/components/Placeholder";
import { Reveal, FadeIn } from "@/lib/motion";
import { journal } from "@/content/site";

export function JournalIndexPage() {
  return (
    <div className="pt-40">
      <Section eyebrow="The Journal" num="MMXXVI">
        <h1 className="display-xl">
          <Reveal>Notes from the clinic.</Reveal>
        </h1>
      </Section>
      <section className="px-6 md:px-12">
        <div className="mx-auto max-w-[1700px]">
          {journal.map((j, i) => (
            <FadeIn key={j.slug} delay={i * 0.04}>
              <Link
                to={`/journal/${j.slug}`}
                className="group grid grid-cols-12 items-baseline gap-6 border-t border-border py-12 md:py-16"
              >
                <span className="col-span-2 text-xs uppercase tracking-[0.22em] text-graphite md:col-span-1">
                  {j.date}
                </span>
                <h2 className="col-span-10 font-serif text-3xl tracking-tight transition-transform duration-700 group-hover:translate-x-2 md:col-span-7 md:text-5xl">
                  {j.title}
                </h2>
                <p className="col-span-12 body-lg md:col-span-3 md:text-base">{j.excerpt}</p>
                <span className="col-span-12 text-right text-xs uppercase tracking-[0.22em] text-graphite md:col-span-1">
                  {j.read}
                </span>
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


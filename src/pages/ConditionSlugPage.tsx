import { Link, useParams } from "react-router-dom";
import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { conditions, treatments } from "@/content/site";
import { NotFoundPage } from "./NotFoundPage";

export function ConditionSlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const condition = conditions.find((x) => x.slug === slug);

  if (!condition) return <NotFoundPage />;

  // Find treatments related to this condition
  const relatedTreatments = treatments.filter((t) => t.conditions && t.conditions.includes(slug));

  return (
    <div className="pt-24">
      {/* HEADER SECTION */}
      <Section eyebrow="Condition" num={`Health · Info`}>
        <h1 className="display-xl">
          <Reveal>{condition.name}</Reveal>
        </h1>
        <p className="mt-12 max-w-3xl font-serif text-3xl italic leading-snug text-graphite">
          {condition.overview}
        </p>
      </Section>

      {/* MAIN CONTENT GRID */}
      <section className="px-6 md:px-12">
        <div className="mx-auto grid max-w-425 grid-cols-12 gap-6 md:gap-10">
          {/* SYMPTOMS COLUMN */}
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4">Common Symptoms</p>
            <div className="space-y-3">
              {condition.symptoms.map((symptom, idx) => (
                <FadeIn key={idx} delay={idx * 0.05}>
                  <div className="flex items-start gap-4">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ink"></div>
                    <p className="body-lg">{symptom}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* INFORMATION COLUMN */}
          <div className="col-span-12 mt-12 md:col-span-4 md:col-start-9 md:mt-0">
            <p className="eyebrow mb-4">Treatment Options</p>
            <p className="body-lg text-graphite">{condition.treatments}</p>

            <p className="eyebrow mb-4 mt-12">Related Treatments</p>
            <ul className="space-y-2 border-t border-border pt-6">
              {relatedTreatments.length > 0 ? (
                relatedTreatments.map((t) => (
                  <li key={t.slug}>
                    <Link to={`/treatments/${t.slug}`} className="text-sm hover:underline">
                      → {t.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-sm text-graphite">No specific treatments found</li>
              )}
            </ul>

            <Link
              to="/book"
              className="mt-12 inline-flex items-center gap-3 rounded-full border border-ink px-6 py-3 text-[12px] uppercase tracking-[0.22em] hover:bg-ink hover:text-background"
            >
              Schedule Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED CONDITIONS SECTION */}
      {relatedTreatments.length > 0 && (
        <Section eyebrow="Learn More">
          <div className="grid grid-cols-12 gap-6">
            {relatedTreatments.slice(0, 3).map((treatment) => (
              <Link
                key={treatment.slug}
                to={`/treatments/${treatment.slug}`}
                className="group col-span-12 md:col-span-4"
              >
                <div className="overflow-hidden rounded-3xl border border-border bg-stone">
                  <img
                    src={treatment.image}
                    alt={`${treatment.name}`}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 font-serif text-2xl transition-transform group-hover:translate-x-1">
                  {treatment.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-graphite">
                  {treatment.family}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

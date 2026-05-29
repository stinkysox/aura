import { Link, useParams } from "react-router-dom";
import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { assets, treatments, conditions as allConditions } from "@/content/site";
import { NotFoundPage } from "./NotFoundPage";

export function TreatmentsSlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const t = treatments.find((x) => x.slug === slug);

  if (!t) return <NotFoundPage />;

  // Get the conditions related to this treatment
  const treatmentConditions = t.conditions
    ? allConditions.filter((c) => t.conditions?.includes(c.slug))
    : [];

  return (
    <div className="pt-24">
      {/* HEADER SECTION (Preserving exact original typography classes) */}
      <Section eyebrow={`Treatment Category · ${t.family}`} num={`ID: #0${t.number}`}>
        <h1 className="display-xl">
          <Reveal>{t.name}</Reveal>
        </h1>
        <p className="mt-12 max-w-3xl font-serif text-3xl italic leading-snug text-graphite">
          {t.poetry
            ? t.poetry.replace(/^"|"$/g, "")
            : "Clinical procedure overview and treatment strategy."}
        </p>
      </Section>

      {/* MAIN SPECIFICATIONS GRID */}
      <section className="px-6 md:px-12">
        <div className="mx-auto grid max-w-425 grid-cols-12 gap-6 md:gap-10">
          {/* VISUAL REFERENCE COLUMN (Original sizes & colors intact) */}
          <FadeIn className="col-span-12 md:col-span-7">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-bone">
              <img
                src={t.image || assets.treatments.placeholder}
                alt={`${t.name} Procedure — Clinical Reference`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-ink">
                <span className="opacity-70">{t.name}</span>
                <span className="opacity-50">— Clinical Reference</span>
              </div>
            </div>
          </FadeIn>

          {/* MEDICAL DATA COLUMN */}
          <div className="col-span-12 mt-12 md:col-span-4 md:col-start-9 md:mt-32">
            <p className="eyebrow mb-4">Treatment Overview</p>
            <p className="body-lg">{t.description}</p>

            {treatmentConditions.length > 0 && (
              <>
                <p className="eyebrow mb-4 mt-12">Conditions We Treat</p>
                <ul className="space-y-2 border-t border-border pt-6">
                  {treatmentConditions.map((condition) => (
                    <li key={condition.slug}>
                      <Link
                        to={`/conditions/${condition.slug}`}
                        className="text-sm uppercase tracking-[0.12em] text-ink underline hover:opacity-70 transition-opacity"
                      >
                        {condition.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <Link
              to="/book"
              className="mt-12 inline-flex items-center gap-3 rounded-full border border-ink px-6 py-3 text-[12px] uppercase tracking-[0.22em] hover:bg-ink hover:text-background"
            >
              Schedule Appointment →
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES SECTION */}
      <Section eyebrow="Related Treatments">
        <div className="grid grid-cols-12 gap-6">
          {treatments
            .filter((x) => x.slug !== t.slug)
            .slice(0, 3)
            .map((x) => (
              <Link
                key={x.slug}
                to={`/treatments/${x.slug}`}
                className="group col-span-12 md:col-span-4"
              >
                <div className="overflow-hidden rounded-3xl border border-border bg-stone">
                  <img
                    src={x.image || assets.treatments.placeholder}
                    alt={`${x.name} — Clinical Service`}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 font-serif text-2xl transition-transform group-hover:translate-x-1">
                  {x.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-graphite">{x.family}</p>
              </Link>
            ))}
        </div>
      </Section>
    </div>
  );
}

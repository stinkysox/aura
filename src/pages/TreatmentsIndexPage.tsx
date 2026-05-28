import { Link } from "react-router-dom";
import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { assets, treatments } from "@/content/site";

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
          <ul className="space-y-12 md:space-y-16">
            {treatments.map((t, i) => {
              // Dynamic mapping with fallback protection
              const treatmentImage =
                assets?.treatments[t.slug as keyof typeof assets.treatments] ||
                assets?.treatments.placeholder;

              return (
                <FadeIn key={t.slug} delay={i * 0.04}>
                  <li>
                    <Link
                      to={`/treatments/${t.slug}`}
                      className="group grid grid-cols-12 items-start gap-6 border-t border-border py-12 transition-colors hover:bg-bone md:gap-8 md:py-16"
                    >
                      {/* Treatment image container */}
                      <div className="col-span-12 md:col-span-3">
                        <div
                          className="relative overflow-hidden rounded bg-stone"
                          style={{ aspectRatio: "4 / 5" }}
                        >
                          <img
                            src={treatmentImage}
                            alt={`${t.name} — Clinical Reference`}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Treatment info */}
                      <div className="col-span-12 md:col-span-9 flex flex-col justify-between h-full">
                        <div>
                          <div className="grid grid-cols-12 items-baseline gap-4">
                            <span className="col-span-1 font-serif text-sm italic text-graphite">
                              N° {t.number}
                            </span>
                            <span className="col-span-11 font-serif text-5xl tracking-tight transition-transform duration-700 group-hover:translate-x-3 md:text-6xl">
                              {t.name}
                            </span>
                          </div>
                          <p className="mt-6 text-sm leading-relaxed text-graphite max-w-2xl">
                            {t.description}
                          </p>
                        </div>

                        {/* Metadata Row + Green Accent Button */}
                        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between border-t border-border/40 pt-6">
                          <div className="grid grid-cols-2 gap-8 md:gap-12">
                            <div>
                              <span className="block text-xs uppercase tracking-[0.22em] text-graphite">
                                Family
                              </span>
                              <p className="mt-1.5 font-serif text-sm text-ink">{t.family}</p>
                            </div>
                            <div>
                              <span className="block text-xs uppercase tracking-[0.22em] text-graphite">
                                Duration
                              </span>
                              <p className="mt-1.5 font-serif text-sm text-ink">{t.duration}</p>
                            </div>
                          </div>

                          {/* CLINICAL GREEN ACCENT BUTTON */}
                          <div className="inline-flex items-center gap-3 rounded-full bg-emerald-800 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-bone transition-all duration-300 shadow-sm group-hover:bg-emerald-900 group-hover:translate-x-1 self-start sm:self-end">
                            <span>View Details</span>
                            <span className="font-sans text-xs transition-transform duration-300 group-hover:translate-x-0.5">
                              →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                </FadeIn>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { doctors } from "@/content/site";

export function DoctorsPage() {
  return (
    <div className="pt-24 bg-background">
      {/* HEADER SECTION */}
      <Section eyebrow="The Practice" num="N° 03">
        <div className="max-w-4xl">
          <h1 className="display-xl text-ink">
            <Reveal>Clinical Expertise. Quiet Precision.</Reveal>
          </h1>
          <p className="body-lg mt-8 text-graphite max-w-xl">
            A center built around diagnostic discipline, academic contribution, and restrained
            aesthetic interventions.
          </p>
        </div>
      </Section>

      {/* MEDICAL DOSSIER SYSTEM */}
      <section className="px-6 md:px-12 pb-32">
        <div className="mx-auto max-w-[1700px]">
          {doctors.map((d, i) => {
            // Dynamically parse the credentials string into clean clinical tags
            const credentialTags = d.role.split(" · ");

            return (
              <FadeIn key={d.name} delay={i * 0.05}>
                <article className="grid grid-cols-12 gap-y-12 md:gap-x-16 border-t border-border pt-16 mt-12">
                  {/* LEFT COLUMN: EDITORIAL PORTRAIT & STICKY STATS */}
                  <div className="col-span-12 lg:col-span-5 space-y-8">
                    <div className="relative group overflow-hidden rounded-[2.5rem] border border-border bg-bone aspect-[4/5] w-full shadow-sm">
                      {/* Technical Blueprint lines overlaying image for a precision medical look */}
                      <div className="absolute inset-0 pointer-events-none border border-ink/5 m-4 rounded-[2rem] z-10" />

                      <img
                        src={d.image}
                        alt={`${d.name} — Expert Dermatologist in Udaipur`}
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-102"
                        loading="lazy"
                      />

                      {/* Floating Clinical Identity Stamp */}
                      <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-md border border-border/60 p-5 rounded-2xl z-20 flex justify-between items-center">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-graphite font-medium">
                            Department Head
                          </p>
                          <p className="font-serif text-lg text-ink mt-0.5">
                            Dermatology & Hair Transplant
                          </p>
                        </div>
                        <span className="text-xs font-mono text-graphite/40 bg-bone px-2 py-1 rounded border border-border/40">
                          REG: 2013
                        </span>
                      </div>
                    </div>

                    {/* Quick Facts Sidebar Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="p-5 rounded-2xl bg-bone/50 border border-border/40">
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-graphite">
                          Research Recognition
                        </span>
                        <p className="font-serif text-lg text-ink mt-1">Global Education Award</p>
                      </div>
                      <div className="p-5 rounded-2xl bg-bone/50 border border-border/40">
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-graphite">
                          Clinical History
                        </span>
                        <p className="font-serif text-lg text-ink mt-1">
                          Former Assistant Professor
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: BIOGRAPHICAL & ACADEMIC DATA CHRONICLE */}
                  <div className="col-span-12 lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Accent Number Block */}
                      <div className="flex items-center gap-4 mb-6">
                        <span className="h-[1px] w-12 bg-border" />
                        <span className="font-mono text-xs text-graphite tracking-widest">
                          DOSSIER 0{i + 1}
                        </span>
                      </div>

                      {/* Doctor Name */}
                      <h2 className="text-5xl font-serif tracking-tight text-ink md:text-6xl mb-6">
                        {d.name}
                      </h2>

                      {/* Dynamic parsed credential tags layout */}
                      <div className="flex flex-wrap gap-2 mb-10">
                        {credentialTags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] uppercase tracking-wider text-graphite border border-border/80 bg-bone/30 px-3 py-1.5 rounded-full font-medium shadow-2xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Main Narrative - Styled with crisp typography */}
                      <div className="prose prose-stone max-w-3xl">
                        <p className="font-serif text-2xl text-graphite/90 leading-relaxed italic mb-8 border-l-2 border-emerald-800/40 pl-6 py-1">
                          "Every treatment configuration maps back to an integrated understanding of
                          biological health, delivering long-term resolution rather than a temporary
                          cover."
                        </p>
                        <p className="body-lg text-ink/80 leading-relaxed text-justify">{d.bio}</p>
                      </div>
                    </div>

                    {/* ACCADEMIC / PROFESSIONAL METRIC BLOCK FOOTER */}
                    <div className="mt-16 border-t border-border pt-8">
                      <h4 className="text-[11px] uppercase tracking-[0.25em] text-graphite font-semibold mb-6">
                        Clinical Core Philosophy
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                        <div>
                          <p className="font-medium text-ink">01 / Rigorous Diagnostic Protocol</p>
                          <p className="text-xs text-graphite mt-1">
                            We reject brief examinations. Standard consults require thorough
                            assessment of systemic health links.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-ink">02 / Academic Backing</p>
                          <p className="text-xs text-graphite mt-1">
                            Methods verified through global peer-reviewed data frameworks presented
                            across international forums.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-ink">03 / Affordable Access</p>
                          <p className="text-xs text-graphite mt-1">
                            Elevating regional clinical standards through world-class treatments
                            delivered with financial transparency.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </div>
  );
}

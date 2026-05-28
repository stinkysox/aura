import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { treatments } from "@/content/site";
import { site } from "@/content/site";
import { Seo } from "@/seo/seo";

export function BookPage() {
  const mapQuery = encodeURIComponent(`${site.name}, ${site.address}, ${site.city}`);
  const waMsg = encodeURIComponent(`Hi, I want to book an appointment at ${site.name}.`);
  const waHref = `https://wa.me/${site.phone.replace(/[^\d]/g, "")}?text=${waMsg}`;
  const telHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

  return (
    <div className="pt-40">
      <Seo
        title="Book Appointment"
        description={`Book an appointment with a dermatologist in ${site.city}. Call, WhatsApp, or request a consultation at ${site.name}.`}
        path="/book"
      />
      <Section eyebrow="Begin" num="Ninety minutes">
        <h1 className="display-xl max-w-6xl">
          <Reveal>The first consultation.</Reveal>
        </h1>
        <p className="body-lg mt-12 max-w-xl">
          A senior specialist, in private, for ninety minutes. Diagnostic, mapping, a written
          protocol — and a long conversation about time.
        </p>
      </Section>

      <section className="px-6 md:px-12 pb-16">
        <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <Row label="Your name">
              <input className="input" />
            </Row>
            <Row label="Email">
              <input type="email" className="input" />
            </Row>
            <Row label="Phone">
              <input type="tel" className="input" />
            </Row>
            <Row label="A composition you are drawn to">
              <select className="input">
                <option value="">— No preference</option>
                {treatments.map((t) => (
                  <option key={t.slug}>{t.name}</option>
                ))}
              </select>
            </Row>
            <Row label="Preferred week">
              <input type="date" className="input" />
            </Row>
            <Row label="A short note (optional)">
              <textarea rows={4} className="input resize-none" />
            </Row>
            <FadeIn>
              <button className="rounded-full border border-ink px-8 py-4 text-[12px] uppercase tracking-[0.22em] hover:bg-ink hover:text-background">
                Request a consultation
              </button>
            </FadeIn>
          </form>
          </div>
          <aside className="md:col-span-4 md:col-start-9 md:pt-6">
            <FadeIn>
              <div className="rounded-3xl border border-border bg-bone p-6 shadow-clinic">
                <p className="eyebrow mb-4">Appointments</p>
                <p className="font-serif text-2xl leading-snug">Call or WhatsApp to confirm a slot.</p>
                <div className="mt-6 grid grid-cols-1 gap-3">
                  <a
                    href={telHref}
                    className="rounded-xl bg-ink px-5 py-3 text-center text-[12px] uppercase tracking-[0.22em] text-background hover:opacity-90"
                  >
                    Call {site.phone}
                  </a>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-ink/25 bg-background px-5 py-3 text-center text-[12px] uppercase tracking-[0.22em] hover:bg-ink hover:text-background"
                  >
                    WhatsApp appointment
                  </a>
                </div>
                <p className="mt-6 text-sm text-graphite">{site.address}</p>
                <p className="mt-2 text-sm text-graphite">{site.hours}</p>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-40">
        <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <FadeIn>
              <p className="eyebrow mb-4">Find us</p>
              <h2 className="display-md">A short walk from the city’s center.</h2>
              <p className="body-lg mt-8 text-graphite">
                Search “{site.name}” on Google Maps or use the embedded map.
              </p>
            </FadeIn>
          </div>
          <div className="md:col-span-7">
            <FadeIn>
              <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-clinic">
                <iframe
                  title={`${site.name} map`}
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[420px] w-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <style>{`
        .input { width:100%; background:transparent; border:0; border-bottom:1px solid oklch(0.22 0.006 270 / 0.6); padding:0.75rem 0; font-family: var(--font-serif); font-size:1.5rem; outline:none; }
        .input:focus { border-color: var(--color-ink); }
      `}</style>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <FadeIn>
      <label className="block">
        <span className="eyebrow mb-3 block">{label}</span>
        {children}
      </label>
    </FadeIn>
  );
}


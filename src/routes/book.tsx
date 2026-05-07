import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { treatments } from "@/content/site";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Aesthesia" },
      { name: "description", content: "Begin a quiet conversation with the skin." },
      { property: "og:title", content: "Book a Consultation — Aesthesia" },
      { property: "og:description", content: "Ninety minutes, in private." },
    ],
  }),
  component: Book,
});

function Book() {
  return (
    <div className="pt-40">
      <Section eyebrow="Begin" num="Ninety minutes">
        <h1 className="display-xl max-w-6xl">
          <Reveal>The first consultation.</Reveal>
        </h1>
        <p className="body-lg mt-12 max-w-xl">
          A senior specialist, in private, for ninety minutes. Diagnostic, mapping, a written
          protocol — and a long conversation about time.
        </p>
      </Section>

      <section className="px-6 md:px-12 pb-40">
        <div className="mx-auto max-w-3xl">
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <Row label="Your name"><input className="input" /></Row>
            <Row label="Email"><input type="email" className="input" /></Row>
            <Row label="Phone"><input type="tel" className="input" /></Row>
            <Row label="A composition you are drawn to">
              <select className="input">
                <option value="">— No preference</option>
                {treatments.map((t) => <option key={t.slug}>{t.name}</option>)}
              </select>
            </Row>
            <Row label="Preferred week"><input type="date" className="input" /></Row>
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

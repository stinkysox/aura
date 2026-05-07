import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aesthesia" },
      { name: "description", content: `${site.address} · By appointment.` },
      { property: "og:title", content: "Contact — Aesthesia" },
      { property: "og:description", content: site.address },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="pt-40">
      <Section eyebrow="Reach the atelier" num="By appointment">
        <h1 className="display-xl max-w-6xl">
          <Reveal>A quiet line, always answered.</Reveal>
        </h1>
      </Section>

      <section className="px-6 md:px-12 pb-32">
        <div className="mx-auto grid max-w-[1700px] grid-cols-12 gap-10">
          <FadeIn className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-6">Atelier</p>
            <p className="font-serif text-2xl leading-snug">{site.address}</p>
            <p className="mt-8 text-sm text-graphite">{site.hours}</p>
            <p className="mt-12 text-sm">{site.email}</p>
            <p className="text-sm">{site.phone}</p>
          </FadeIn>

          <FadeIn delay={0.1} className="col-span-12 md:col-span-6 md:col-start-7">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <Field label="Your name" />
              <Field label="Email" type="email" />
              <Field label="A short note" textarea />
              <button className="border-b border-ink pb-1 text-[12px] uppercase tracking-[0.22em] hover:opacity-60">
                Send a quiet message →
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function Field({ label, type = "text", textarea = false }: { label: string; type?: string; textarea?: boolean }) {
  return (
    <label className="block">
      <span className="eyebrow mb-3 block">{label}</span>
      {textarea ? (
        <textarea rows={4} className="w-full resize-none border-b border-ink/60 bg-transparent py-3 font-serif text-2xl outline-none focus:border-ink" />
      ) : (
        <input type={type} className="w-full border-b border-ink/60 bg-transparent py-3 font-serif text-2xl outline-none focus:border-ink" />
      )}
    </label>
  );
}

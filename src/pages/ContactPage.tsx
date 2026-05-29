import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { site } from "@/content/site";

export function ContactPage() {
  return (
    <div className="pt-24">
      <Section eyebrow="Reach the clinic" num="By appointment">
        <h1 className="display-xl max-w-6xl">
          <Reveal>A quiet line, always answered.</Reveal>
        </h1>
      </Section>

      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto grid max-w-[1700px] grid-cols-12 gap-10">
          <FadeIn className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-6">Clinic</p>
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
              <button className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[12px] uppercase tracking-[0.22em] text-background transition-all hover:opacity-90 active:scale-95">
                Send a quiet message →
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  type = "text",
  textarea = false,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow mb-3 block">{label}</span>
      {textarea ? (
        <textarea
          rows={4}
          className="w-full resize-none border-b border-ink/60 bg-transparent py-3 font-serif text-2xl outline-none focus:border-ink"
        />
      ) : (
        <input
          type={type}
          className="w-full border-b border-ink/60 bg-transparent py-3 font-serif text-2xl outline-none focus:border-ink"
        />
      )}
    </label>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Plate } from "@/components/Placeholder";
import { Reveal, FadeIn } from "@/lib/motion";
import { treatments } from "@/content/site";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const t = treatments.find((x) => x.slug === params.slug);
    if (!t) throw notFound();
    return t;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Treatment"} — Aesthesia` },
      { name: "description", content: loaderData?.description ?? "" },
      { property: "og:title", content: `${loaderData?.name ?? "Treatment"} — Aesthesia` },
      { property: "og:description", content: loaderData?.description ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="eyebrow mb-4">Not in the catalogue</p>
        <Link to="/treatments" className="font-serif text-3xl underline">Return to catalogue</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-sm text-graphite">{error.message}</p>
    </div>
  ),
  component: TreatmentDetail,
});

function TreatmentDetail() {
  const t = Route.useLoaderData();
  return (
    <div className="pt-40">
      <Section eyebrow={`Composition · ${t.family}`} num={`N° ${t.number}`}>
        <h1 className="display-xl">
          <Reveal>{t.name}</Reveal>
        </h1>
        <p className="font-serif text-3xl italic leading-snug text-graphite mt-12 max-w-3xl">
          "{t.poetry}"
        </p>
      </Section>

      <section className="px-6 md:px-12">
        <div className="mx-auto grid max-w-[1700px] grid-cols-12 gap-6 md:gap-10">
          <FadeIn className="col-span-12 md:col-span-7"><Plate tone="bone" ratio="4/5" label={`${t.name} · still`} /></FadeIn>
          <div className="col-span-12 mt-12 md:col-span-4 md:col-start-9 md:mt-32">
            <p className="eyebrow mb-4">The protocol</p>
            <p className="body-lg">{t.description}</p>
            <dl className="mt-12 space-y-4 border-t border-border pt-6 text-sm">
              <Row k="Duration" v={t.duration} />
              <Row k="Family" v={t.family} />
              <Row k="Recovery" v="None to minimal" />
              <Row k="Frequency" v="Quarterly · seasonal" />
            </dl>
            <Link
              to="/book"
              className="mt-12 inline-flex items-center gap-3 rounded-full border border-ink px-6 py-3 text-[12px] uppercase tracking-[0.22em] hover:bg-ink hover:text-background"
            >
              Book consultation →
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Adjacent compositions">
        <div className="grid grid-cols-12 gap-6">
          {treatments.filter((x) => x.slug !== t.slug).slice(0, 3).map((x) => (
            <Link key={x.slug} to="/treatments/$slug" params={{ slug: x.slug }}
                  className="group col-span-12 md:col-span-4">
              <Plate tone="stone" ratio="4/5" label={`N° ${x.number}`} />
              <p className="mt-4 font-serif text-2xl group-hover:translate-x-1 transition-transform">{x.name}</p>
              <p className="text-xs uppercase tracking-[0.22em] text-graphite mt-1">{x.family}</p>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border pb-4">
      <dt className="text-graphite">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}

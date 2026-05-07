import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Plate } from "@/components/Placeholder";
import { Reveal, FadeIn } from "@/lib/motion";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Aesthesia" },
      { name: "description", content: "A private archive of considered results." },
      { property: "og:title", content: "Gallery — Aesthesia" },
      { property: "og:description", content: "Before & after, viewed quietly." },
    ],
  }),
  component: Gallery,
});

const items = Array.from({ length: 9 }).map((_, i) => ({
  i, tone: (["bone", "stone", "skin", "graphite"] as const)[i % 4],
  label: ["Luminance", "Atelier Lift", "Obsidian", "Veil", "Ember", "Horizon"][i % 6],
}));

function Gallery() {
  return (
    <div className="pt-40">
      <Section eyebrow="The Archive" num="By consent only">
        <h1 className="display-xl"><Reveal>Quiet results.</Reveal></h1>
        <p className="body-lg mt-10 max-w-xl">
          We publish before-and-after work only with explicit patient consent, and only here.
          Nothing is used in advertising.
        </p>
      </Section>
      <section className="px-6 md:px-12">
        <div className="mx-auto grid max-w-[1700px] grid-cols-12 gap-6 md:gap-10">
          {items.map((it, idx) => (
            <FadeIn key={it.i} delay={(idx % 3) * 0.08}
              className={
                idx % 5 === 0 ? "col-span-12 md:col-span-7" :
                idx % 5 === 1 ? "col-span-12 md:col-span-5 md:mt-24" :
                idx % 5 === 2 ? "col-span-6 md:col-span-4" :
                idx % 5 === 3 ? "col-span-6 md:col-span-4 md:mt-16" :
                                "col-span-12 md:col-span-4"
              }
            >
              <Plate tone={it.tone} ratio={idx % 2 ? "4/5" : "3/4"} label={`${it.label} · before / after`} />
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-graphite">N° {String(idx + 1).padStart(2, "0")} · {it.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

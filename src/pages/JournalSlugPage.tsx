import { Link, useParams } from "react-router-dom";
import { Section } from "@/components/Section";
import { Plate } from "@/components/Placeholder";
import { Reveal, FadeIn } from "@/lib/motion";
import { journal } from "@/content/site";
import { NotFoundPage } from "./NotFoundPage";

export function JournalSlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const j = journal.find((x) => x.slug === slug);

  if (!j) return <NotFoundPage />;

  return (
    <article className="pt-40">
      <Section eyebrow={`${j.date} · ${j.read}`} num="Journal">
        <h1 className="display-xl max-w-6xl">
          <Reveal>{j.title}</Reveal>
        </h1>
      </Section>
      <section className="px-6 md:px-12">
        <FadeIn className="mx-auto max-w-[1700px]">
          <Plate tone="bone" ratio="21/9" label={j.title} />
        </FadeIn>
      </section>
      <section className="px-6 py-32 md:px-12">
        <div className="mx-auto max-w-2xl space-y-8">
          <p className="font-serif text-2xl italic leading-snug text-graphite">{j.excerpt}</p>
          {[
            "There is, in modern dermatology, a temptation toward the maximal — toward the catalogue of every device, the layered protocol, the busy face.",
            "We have come to think of this as a kind of noise. Skin, like architecture, asks for editing. The question is rarely what to add. It is almost always what to leave alone.",
            "What follows is a short defence of restraint, written for a season — winter — when the temptation to over-correct is highest, and the reward for patience is greatest.",
            "Begin with one thing. Hold it for six weeks. Read the surface again. Then, only then, consider the second.",
          ].map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-foreground/85">
              {p}
            </p>
          ))}
        </div>
      </section>
      <Section>
        <Link
          to="/journal/"
          className="border-b border-ink pb-1 text-[12px] uppercase tracking-[0.22em]"
        >
          ← Return to journal
        </Link>
      </Section>
    </article>
  );
}


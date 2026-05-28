import { Link, useParams } from "react-router-dom";
import { Section } from "@/components/Section";
import { Plate } from "@/components/Placeholder";
import { Reveal, FadeIn } from "@/lib/motion";
import { blogPosts } from "@/content/blog";
import { NotFoundPage } from "./NotFoundPage";
import { Seo } from "@/seo/seo";

export function JournalSlugPage() {
  const { slug } = useParams<{ slug: string }>();
  const j = blogPosts.find((x) => x.slug === slug);

  if (!j) return <NotFoundPage />;

  return (
    <article className="pt-24">
      <Seo
        title={j.title}
        description={j.excerpt}
        path={`/journal/${j.slug}`}
        imageUrl={j.heroImage}
      />
      <Section eyebrow={`${j.date} · ${j.read}`} num="Journal">
        <h1 className="display-xl max-w-6xl">
          <Reveal>{j.title}</Reveal>
        </h1>
      </Section>
      <section className="px-6 md:px-12">
        <FadeIn className="mx-auto max-w-[1700px]">
          <div className="overflow-hidden rounded-3xl border border-border bg-bone shadow-clinic">
            <img
              src={j.heroImage}
              alt={`${j.title} — Dermatologist in Udaipur`}
              className="h-[320px] w-full object-cover md:h-[420px]"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </section>
      <section className="px-6 py-32 md:px-12">
        <div className="mx-auto max-w-2xl space-y-8">
          <p className="font-serif text-2xl italic leading-snug text-graphite">{j.excerpt}</p>
          {j.body.map((p, i) => (
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


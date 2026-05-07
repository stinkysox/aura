import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/motion";
import { treatments } from "@/content/site";
import { Link } from "@tanstack/react-router";

/**
 * Pinned vertical→horizontal storytelling for treatments.
 * Restrained: long pin distance, slow ease.
 */
export function TreatmentScroller() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t = track.current!;
      const distance = t.scrollWidth - window.innerWidth;
      gsap.to(t, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.5}`,
          pin: true,
          scrub: 1.1,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className="relative overflow-hidden bg-ivory">
      <div className="flex items-center justify-between px-6 pb-12 pt-24 md:px-12">
        <span className="eyebrow">N° 02 · The Catalogue</span>
        <span className="eyebrow">{treatments.length} compositions</span>
      </div>
      <div ref={track} className="flex h-screen items-center gap-[10vw] pl-[8vw] pr-[20vw] will-change-transform">
        {treatments.map((t) => (
          <Link
            key={t.slug}
            to="/treatments/$slug"
            params={{ slug: t.slug }}
            className="group relative w-[60vw] shrink-0 md:w-[42vw]"
          >
            <div className="mb-10 flex items-baseline justify-between border-b border-border pb-6">
              <span className="font-serif text-sm italic text-graphite">N° {t.number}</span>
              <span className="eyebrow">{t.family} · {t.duration}</span>
            </div>
            <h3 className="display-lg mb-8 transition-transform duration-700 group-hover:-translate-x-2">
              {t.name}
            </h3>
            <p className="font-serif text-2xl italic leading-snug text-graphite md:text-3xl">
              "{t.poetry}"
            </p>
            <p className="body-lg mt-8 max-w-md">{t.description}</p>
            <span className="mt-10 inline-block border-b border-ink pb-1 text-[12px] uppercase tracking-[0.22em]">
              Read protocol →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

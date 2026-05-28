import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { galleryItems } from "@/content/gallery";

export function GalleryPage() {
  return (
    <div className="pt-24">
      <Section eyebrow="The Archive" num="By consent only">
        <h1 className="display-xl">
          <Reveal>Quiet results.</Reveal>
        </h1>
        <p className="body-lg mt-10 max-w-xl">
          We publish before-and-after work only with explicit patient consent, and only here.
          Nothing is used in advertising.
        </p>
      </Section>
      <section className="px-6 md:px-12">
        <div className="mx-auto grid max-w-[1700px] grid-cols-12 gap-6 md:gap-10">
          {galleryItems.map((item, idx) => (
            <FadeIn
              key={item.id}
              delay={(idx % 3) * 0.08}
              className={
                idx % 5 === 0
                  ? "col-span-12 md:col-span-7"
                  : idx % 5 === 1
                    ? "col-span-12 md:col-span-5 md:mt-24"
                    : idx % 5 === 2
                      ? "col-span-6 md:col-span-4"
                      : idx % 5 === 3
                        ? "col-span-6 md:col-span-4 md:mt-16"
                        : "col-span-12 md:col-span-4"
              }
            >
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-bone">
                {/* Before/After Toggle with Hover */}
                <img
                  src={item.before}
                  alt={`${item.label} — Before`}
                  className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  loading="lazy"
                />
                <img
                  src={item.after}
                  alt={`${item.label} — After`}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Label Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-ink">
                  <span className="opacity-70">{item.label}</span>
                  <span className="opacity-50">— before / after</span>
                </div>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-graphite">
                N° {String(item.id).padStart(2, "0")} · {item.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

import { Section } from "@/components/Section";
import { Reveal, FadeIn } from "@/lib/motion";
import { doctors } from "@/content/site";

export function DoctorsPage() {
  return (
    <div className="pt-24">
      <Section eyebrow="The Hand" num="N° 04">
        <h1 className="display-xl">
          <Reveal>One specialist.</Reveal>
        </h1>
      </Section>
      <section className="px-6 md:px-12">
        <div className="mx-auto max-w-[1700px] space-y-32 md:space-y-48">
          {doctors.map((d, i) => (
            <FadeIn key={d.name} delay={i * 0.05}>
              <article
                className={`grid grid-cols-12 items-end gap-6 md:gap-10 ${i % 2 ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className="col-span-12 md:col-span-5">
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-bone">
                    <img
                      src={d.image}
                      alt={`${d.name} — Dermatologist in Udaipur`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-7">
                  <span className="eyebrow mb-4 block">
                    0{i + 1} · {d.role}
                  </span>
                  <h2 className="display-md mb-6">{d.name}</h2>
                  <p className="body-lg">{d.bio}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}


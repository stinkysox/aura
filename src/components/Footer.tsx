import { Link } from "react-router-dom";
import { site, nav } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-border bg-bone">
      {/* Main grid */}
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-16 px-6 py-20 md:grid-cols-12 md:px-12">

        {/* Brand + CTA */}
        <div className="md:col-span-5">
          <p className="eyebrow mb-3">{site.name} · {site.city}</p>
          <h3 className="display-md max-w-sm leading-tight">
            A long quiet conversation with the skin.
          </h3>
          <Link
            to="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-background transition-all duration-300 hover:opacity-80 active:scale-95"
          >
            Begin a consultation
            <span className="inline-block transition-transform duration-300 hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Clinic */}
        <div className="md:col-span-3">
          <p className="eyebrow mb-5">Clinic</p>
          <p className="text-sm leading-relaxed text-graphite">{site.address}</p>
          <p className="mt-3 text-sm text-graphite">{site.hours}</p>
        </div>

        {/* Contact */}
        <div className="md:col-span-2">
          <p className="eyebrow mb-5">Contact</p>
          <a
            href={`mailto:${site.email}`}
            className="block text-sm text-graphite transition-colors hover:text-ink"
          >
            {site.email}
          </a>
          <a
            href={`tel:${site.phone}`}
            className="mt-1 block text-sm text-graphite transition-colors hover:text-ink"
          >
            {site.phone}
          </a>
        </div>

        {/* Index */}
        <div className="md:col-span-2">
          <p className="eyebrow mb-5">Index</p>
          <ul className="space-y-1.5 text-sm">
            {nav.slice(0, 7).map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-graphite transition-colors hover:text-ink"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1700px] flex-wrap items-center justify-between gap-4 px-6 py-5 text-[11px] text-graphite md:px-12">
          <p>© {year} {site.name}. A private dermatology clinic.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="transition-colors hover:text-ink">Privacy</Link>
            <Link to="/terms" className="transition-colors hover:text-ink">Terms</Link>
            <Link to="/careers" className="transition-colors hover:text-ink">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

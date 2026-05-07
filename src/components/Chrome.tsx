import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site, nav } from "@/content/site";
import { Magnetic } from "@/lib/motion";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[padding,background] duration-700 ${
          scrolled ? "py-4 bg-background/70 backdrop-blur-xl" : "py-7"
        }`}
      >
        <div className="mx-auto flex max-w-[1700px] items-center justify-between px-6 md:px-12">
          <Link to="/" className="group flex items-baseline gap-3">
            <span className="font-serif text-2xl tracking-tight">{site.name}</span>
            <span className="eyebrow hidden md:inline">— {site.tagline}</span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {nav.slice(0, 5).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative text-[13px] tracking-wide text-foreground/80 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Magnetic>
              <Link
                to="/book"
                className="hidden rounded-full border border-ink/80 px-5 py-2.5 text-[12px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-background md:inline-block"
              >
                Book Consultation
              </Link>
            </Magnetic>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
              aria-label="Menu"
            >
              <span className={`block h-px w-6 bg-ink transition-transform duration-500 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-ink transition-transform duration-500 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ivory"
          >
            <div className="mx-auto grid h-full max-w-[1700px] grid-cols-1 items-center px-6 pt-28 md:grid-cols-12 md:px-12">
              <div className="md:col-span-7">
                <p className="eyebrow mb-8">Index</p>
                <ul className="space-y-3">
                  {nav.map((n, i) => (
                    <motion.li
                      key={n.to}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay: 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link to={n.to} className="font-serif text-5xl leading-tight tracking-tight md:text-7xl">
                        <span className="mr-6 align-middle text-xs text-graphite">0{i + 1}</span>
                        {n.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:col-span-5 md:block">
                <p className="eyebrow mb-6">Atelier</p>
                <p className="font-serif text-2xl leading-snug">{site.address}</p>
                <p className="mt-8 text-sm text-graphite">{site.hours}</p>
                <p className="mt-2 text-sm">{site.email}</p>
                <p className="text-sm">{site.phone}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-bone">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-16 px-6 py-24 md:grid-cols-12 md:px-12">
        <div className="md:col-span-5">
          <p className="eyebrow mb-4">{site.name} · {site.city}</p>
          <h3 className="display-md max-w-md">A long quiet conversation with the skin.</h3>
          <Link
            to="/book"
            className="mt-10 inline-block border-b border-ink pb-1 text-sm tracking-wide hover:opacity-60"
          >
            Begin a consultation →
          </Link>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow mb-6">Atelier</p>
          <p className="text-sm leading-relaxed text-graphite">{site.address}</p>
          <p className="mt-4 text-sm text-graphite">{site.hours}</p>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow mb-6">Contact</p>
          <p className="text-sm">{site.email}</p>
          <p className="text-sm">{site.phone}</p>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow mb-6">Index</p>
          <ul className="space-y-2 text-sm">
            {nav.slice(0, 6).map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:opacity-60">{n.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1700px] flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-graphite md:px-12">
          <p>© {new Date().getFullYear()} {site.name}. A private dermatology atelier.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-ink">Privacy</Link>
            <Link to="/terms" className="hover:text-ink">Terms</Link>
            <Link to="/careers" className="hover:text-ink">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

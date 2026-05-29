import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site, nav } from "@/content/site";
import { Magnetic } from "@/lib/motion";
import { ConversionBar } from "@/components/ConversionBar";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [path]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Header bar ─────────────────────────────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-700 ${
          scrolled
            ? "bg-background/80 py-4 backdrop-blur-xl shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1700px] items-center justify-between px-6 md:px-10 lg:px-12">

          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-baseline gap-2">
            <span className="font-serif text-base tracking-tight sm:text-[1.05rem]">
              {site.name}
            </span>
          </Link>

          {/* Desktop nav — centre */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`group relative text-[10px] uppercase tracking-[0.18em] transition-colors duration-200 hover:text-foreground ${
                  path === n.to ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {n.label}
                {/* active underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                    path === n.to ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop right actions */}
          <div className="flex items-center gap-4">
            <Magnetic>
              <Link
                to="/book"
                className="hidden rounded-full border border-ink/80 px-4 py-1.5 text-[10px] uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:bg-ink hover:text-background lg:inline-flex"
              >
                Book Consultation
              </Link>
            </Magnetic>

            {/* Hamburger — only below lg */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-px w-5 bg-ink transition-all duration-400 ${
                  open ? "translate-y-[4.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-ink transition-all duration-400 ${
                  open ? "-translate-y-[4.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Fullscreen mobile menu ──────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ivory px-6 pb-12 pt-28 md:px-10"
          >
            {/* Nav links */}
            <ul className="flex-1 space-y-1">
              {nav.map((n, i) => (
                <motion.li
                  key={n.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.08 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    to={n.to}
                    className="flex items-baseline gap-4 py-1 font-serif text-[2.2rem] leading-tight tracking-tight transition-opacity hover:opacity-60"
                  >
                    <span className="text-[10px] text-graphite opacity-60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {n.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Footer strip inside mobile menu */}
            <div className="mt-12 border-t border-border pt-8">
              <p className="eyebrow mb-3">Clinic</p>
              <p className="text-sm leading-relaxed text-graphite">{site.address}</p>
              <p className="mt-1 text-sm text-graphite">{site.hours}</p>
              <div className="mt-4 flex gap-6 text-sm">
                <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
                <a href={`tel:${site.phone}`} className="hover:underline">{site.phone}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ConversionBar hidden={open} />
    </>
  );
}

import { site } from "@/content/site";
import { Link, useLocation } from "react-router-dom";

function toTel(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

function toWhatsApp(phone: string, message: string) {
  const digits = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function ConversionBar() {
  const location = useLocation();
  const msg = `Hi, I want to book an appointment at ${site.name}. Page: ${location.pathname}`;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] md:left-auto md:right-6 md:w-[360px]">
      <div className="rounded-2xl border border-border bg-background/80 p-3 shadow-clinic backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <a
            href={toTel(site.phone)}
            className="flex-1 rounded-xl bg-ink px-4 py-3 text-center text-[12px] uppercase tracking-[0.22em] text-background hover:opacity-90"
          >
            Call
          </a>
          <a
            href={toWhatsApp(site.phone, msg)}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-xl border border-ink/30 bg-bone px-4 py-3 text-center text-[12px] uppercase tracking-[0.22em] text-ink hover:bg-ink hover:text-background"
          >
            WhatsApp
          </a>
          <Link
            to="/book"
            className="flex-1 rounded-xl border border-ink/30 bg-background px-4 py-3 text-center text-[12px] uppercase tracking-[0.22em] text-ink hover:bg-ink hover:text-background"
          >
            Book
          </Link>
        </div>
        <p className="mt-2 text-center text-[11px] text-graphite">
          {site.city} · {site.hours}
        </p>
      </div>
    </div>
  );
}


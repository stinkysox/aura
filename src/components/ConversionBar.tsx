import { CalendarDays, MessageCircle, Phone } from "lucide-react";
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

type ConversionBarProps = {
  hidden?: boolean;
};

export function ConversionBar({ hidden = false }: ConversionBarProps) {
  const location = useLocation();
  const msg = `Hi, I want to book an appointment at ${site.name}. Page: ${location.pathname}`;

  if (hidden) return null;

  const btnBase =
    "flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-[11px] uppercase tracking-[0.18em] transition-colors";

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-6 md:w-[360px]">
      <div className="rounded-2xl border border-border bg-background/90 p-3 shadow-clinic backdrop-blur-xl">
        <div className="flex items-stretch justify-between gap-2">
          <a
            href={toTel(site.phone)}
            className={`${btnBase} bg-ink text-background hover:opacity-90`}
            aria-label="Call clinic"
          >
            <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
            <span>Call</span>
          </a>
          <a
            href={toWhatsApp(site.phone, msg)}
            target="_blank"
            rel="noreferrer"
            className={`${btnBase} border border-ink/30 bg-bone text-ink hover:bg-ink hover:text-background`}
            aria-label="WhatsApp clinic"
          >
            <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
            <span className="hidden min-[380px]:inline">WhatsApp</span>
            <span className="min-[380px]:hidden">WA</span>
          </a>
          <Link
            to="/book"
            className={`${btnBase} border border-ink/30 bg-background text-ink hover:bg-ink hover:text-background`}
            aria-label="Book appointment"
          >
            <CalendarDays className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
            <span>Book</span>
          </Link>
        </div>
        <p className="mt-2 text-center text-[11px] text-graphite">
          {site.city} · {site.hours}
        </p>
      </div>
    </div>
  );
}

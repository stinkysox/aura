/**
 * Tactile, non-photo placeholder. Pure CSS — feels like soft-lit material.
 * Variants tuned for editorial neutrals.
 */
type Tone = "bone" | "stone" | "graphite" | "ink" | "skin" | "steel";

const tones: Record<Tone, string> = {
  bone: "linear-gradient(135deg, var(--clinic-placeholder-bone-a), var(--clinic-placeholder-bone-b))",
  stone:
    "linear-gradient(135deg, var(--clinic-placeholder-stone-a), var(--clinic-placeholder-stone-b))",
  graphite:
    "linear-gradient(135deg, var(--clinic-placeholder-graphite-a), var(--clinic-placeholder-graphite-b))",
  ink: "linear-gradient(135deg, var(--clinic-placeholder-ink-a), var(--clinic-placeholder-ink-b))",
  skin: "linear-gradient(135deg, var(--clinic-placeholder-skin-a), var(--clinic-placeholder-skin-b))",
  steel:
    "linear-gradient(135deg, var(--clinic-placeholder-steel-a), var(--clinic-placeholder-steel-b))",
};

export function Plate({
  tone = "bone",
  className = "",
  label,
  ratio = "4 / 5",
}: {
  tone?: Tone;
  className?: string;
  label?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio, background: tones[tone] }}
    >
      {/* soft light wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 30% 15%, oklch(1 0 0 / 0.35), transparent 55%), radial-gradient(80% 60% at 80% 95%, oklch(0 0 0 / 0.18), transparent 60%)",
          mixBlendMode: "soft-light",
        }}
      />
      {/* subtle grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/></svg>\")",
        }}
      />
      {label && (
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.25em]"
             style={{ color: tone === "ink" || tone === "graphite" ? "var(--color-background)" : "var(--color-ink)" }}>
          <span className="opacity-70">{label}</span>
          <span className="opacity-50">— still life</span>
        </div>
      )}
    </div>
  );
}

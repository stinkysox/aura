import { type ReactNode } from "react";

export function Section({
  children,
  className = "",
  eyebrow,
  num,
}: {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  num?: string;
}) {
  return (
    <section className={`relative px-6 py-16 md:px-12 md:py-24 ${className}`}>
      {(eyebrow || num) && (
        <div className="mx-auto mb-16 flex max-w-[1700px] items-center justify-between">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {num && <span className="eyebrow">{num}</span>}
        </div>
      )}
      <div className="mx-auto max-w-[1700px]">{children}</div>
    </section>
  );
}

export function Hairline() {
  return (
    <div className="mx-auto max-w-[1700px] px-6 md:px-12">
      <div className="hairline" />
    </div>
  );
}

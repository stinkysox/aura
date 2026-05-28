import { Section } from "@/components/Section";
import { Reveal } from "@/lib/motion";

export function Legal({ title }: { title: string }) {
  const isPrivacy = title.toLowerCase().includes("privacy");
  const heading = isPrivacy ? "Privacy Policy" : "Terms & Conditions";
  const sections = isPrivacy
    ? [
        "We collect only the details needed to schedule and manage your consultation: name, phone, email and treatment preferences.",
        "Your details are used only for appointment communication, follow-up care and clinic records. We do not sell personal data.",
        "Medical records are handled with confidentiality and shared only when required by law or with your explicit consent.",
        "If you contact us on WhatsApp, you also agree to WhatsApp's own privacy terms for message handling.",
        "To request correction or deletion of your basic contact details, please write to the clinic email listed on this site.",
      ]
    : [
        "Online booking requests are appointment requests, not confirmed slots. Our team confirms final timing over call or WhatsApp.",
        "Please provide accurate health history and contact details so the doctor can prepare safely for your consultation.",
        "Treatment outcomes vary from person to person; no result can be guaranteed in a fixed time period.",
        "Fees, treatment plans and procedure recommendations are finalized only after an in-person clinical evaluation.",
        "By submitting the booking form, you confirm that you have read these terms and agree to proceed.",
      ];

  return (
    <div className="pt-24">
      <Section eyebrow="Considered, in writing" num={title}>
        <h1 className="display-xl">
          <Reveal>{heading}</Reveal>
        </h1>
      </Section>
      <section className="px-6 pb-40 md:px-12">
        <div className="mx-auto max-w-2xl space-y-6 text-foreground/80">
          {sections.map((section) => (
            <p key={section} className="text-base leading-relaxed">
              {section}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}


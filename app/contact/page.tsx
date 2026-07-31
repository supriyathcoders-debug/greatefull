import type { Metadata } from "next";
// Contact form removed per client instructions — we now show direct contact details only
import { CtaButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";
import { REVENUE_AUDIT_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Grateful Marketing™ and book a strategy call.",
};

export default function ContactPage() {
  return (
    <div className="pt-28">
      <section className="section-fade">
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-14 sm:px-6 md:pt-20">
          <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            Contact
          </p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">Let&apos;s Build Your AI Revenue System</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Share your goals and current challenges. We&apos;ll map out the fastest route to better lead conversion.
          </p>
        </div>
      </section>

      {/* Contact details block removed per client request */}

      <Section title="Prefer to Talk Live?">
        <div className="flex flex-wrap gap-3">
          <CtaButton href={REVENUE_AUDIT_URL}>Get Your AI Revenue Audit</CtaButton>
          <CtaButton href="/pre-booking">Let&apos;s have a conversation</CtaButton>
          <CtaButton href="https://app.growthhub365.com/v2/preview/QAuss4a9CGC8EExSO5WE" variant="secondary">
            See Demo
          </CtaButton>
        </div>
      </Section>

      <Section title="Other Ways to Reach Us">
        <div className="flex flex-col gap-2">
          <a href="mailto:client-services@grateful-marketing.com" className="text-[0.95rem] text-muted no-underline font-medium hover:text-brand">client-services@grateful-marketing.com</a>
          <a href="tel:+12263329712" className="text-[0.95rem] text-muted no-underline font-medium hover:text-brand">+1 (226) 332-9712</a>
        </div>
      </Section>
    </div>
  );
}

import type { Metadata } from "next";
import { CtaButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Andrea and the mission behind Grateful Marketing™.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="section-fade">
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-14 sm:px-6 md:pt-20">
          <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            About Grateful Marketing™
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Founder-Led. Revenue-Focused. AI-Driven.</h1>
        </div>
      </section>

      <Section
        title="Andrea’s Story"
        description="Andrea Gureckas founded Grateful Marketing™ after seeing the same pattern across service businesses: strong demand, but inconsistent lead follow-up and lost sales opportunities. She built a premium AI automation agency to solve the conversion bottlenecks that silently drain revenue."
      />

      <Section
        title="Our Mission"
        description="Our mission is simple: help businesses capture and convert more of the leads they already have through practical, high-performance AI systems that work every day."
      />

      <Section
        title="Why Clients Trust Us"
        description="We combine strategic consulting with implementation support, so you get both the roadmap and the execution. Every system is designed around one goal: booked revenue."
      >
        <div className="flex flex-wrap gap-3">
          <CtaButton href="/services">Explore Services</CtaButton>
          <CtaButton href="/contact" variant="secondary">
            Contact Us
          </CtaButton>
        </div>
      </Section>
    </div>
  );
}

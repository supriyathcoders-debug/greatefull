import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { CtaButton } from "@/components/ui/cta-button";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the four AI service pillars from Grateful Marketing™.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="section-fade">
        <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-14 sm:px-6 md:pt-20">
          <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            Services
          </p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Four Pillars to Build Your AI Growth Engine
          </h1>
        </div>
      </section>

      <Section
        title="Service Pillars"
        description="Choose a focused engagement or combine services into a full-funnel AI growth partnership."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="AI Revenue Engine™" description="Automated lead capture, qualification, and appointment booking system." />
          <Card title="AI Strategy & Consulting" description="Strategic planning to prioritize highest ROI AI opportunities." />
          <Card title="AI Training & Implementation" description="Hands-on rollout support and team upskilling for sustainable adoption." />
          <div className="rounded-2xl border border-border bg-surface p-7 shadow-[0_10px_26px_rgba(28,28,28,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(123,92,255,0.14)]">
            <h3 className="text-2xl font-semibold">AI Voice Agents</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">24/7 AI call handling and conversion workflows to prevent missed revenue.</p>
            <Link href="/ai-voice-agents" className="mt-4 inline-flex text-sm font-semibold text-brand hover:underline">
              Learn more about AI Voice Agents
            </Link>
          </div>
        </div>
      </Section>

      <Section title="Let’s Build Your Roadmap">
        <div className="flex flex-wrap gap-3">
          <CtaButton href="/ai-revenue-audit">Get Your AI Revenue Audit</CtaButton>
          <CtaButton href="https://app.growthhub365.com/v2/preview/QAuss4a9CGC8EExSO5WE" variant="secondary">
            See Demo
          </CtaButton>
          <CtaButton href="/pre-booking" variant="secondary">
            Book a Strategy Call
          </CtaButton>
        </div>
      </Section>
    </div>
  );
}

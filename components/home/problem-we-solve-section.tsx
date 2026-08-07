"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { PremiumButton } from "@/components/ui/premium-button";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { PROBLEM } from "@/lib/content/home";
import { REVENUE_AUDIT_URL, BOOKING_URL } from "@/lib/constants";

export function ProblemWeSolveSection() {
  return (
    <section id="problem" className="pt-14 pb-28 section-shell relative section-noise">
      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] blob-gold opacity-20 pointer-events-none" aria-hidden="true" />

        {/* Intro */}
        <StaggerReveal className="max-w-[720px] mb-20">
          <StaggerItem>
            <Eyebrow className="mb-5">{PROBLEM.eyebrow}</Eyebrow>
            <SectionHeading className="mb-6">{PROBLEM.mainHeading}</SectionHeading>
            <p className="text-lg text-muted leading-relaxed mb-8 whitespace-pre-line">
              {PROBLEM.mainDescription}
            </p>
          </StaggerItem>


        </StaggerReveal>

        {/* Pull quote */}
        <StaggerReveal className="mb-20">
          <StaggerItem>
            <blockquote className="relative pl-8 py-6 bg-gradient-to-r from-brand/5 to-transparent rounded-2xl border-l-4 border-brand">
              <p className="font-heading text-[clamp(1.1rem,1.8vw,1.4rem)] italic text-foreground leading-[1.7]">
                &ldquo;{PROBLEM.pullQuote}&rdquo;
              </p>
            </blockquote>
          </StaggerItem>
        </StaggerReveal>

        {/* Subheading + Personas */}
        <StaggerReveal className="mb-20">
          <StaggerItem>
            <h3 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-semibold text-foreground mb-4">
              {PROBLEM.subheading}
            </h3>
          </StaggerItem>
          <StaggerItem>
            <p className="text-base text-muted leading-[1.88] font-light mb-10">
              {PROBLEM.subIntro}
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="card-modern overflow-hidden">
              {/* Desktop Header */}
              <div className="hidden lg:grid grid-cols-12 gap-6 border-b border-brand/20 bg-brand/5 py-5 px-6">
                <div className="col-span-3 font-heading text-sm font-bold text-foreground uppercase tracking-wider">
                  Industry
                </div>
                <div className="col-span-4 font-heading text-sm font-bold text-foreground uppercase tracking-wider">
                  Problem
                </div>
                <div className="col-span-5 font-heading text-sm font-bold text-brand uppercase tracking-wider">
                  How Grateful Marketing Helps
                </div>
              </div>
              
              {/* Rows */}
              <div className="divide-y divide-border-subtle/50">
                {PROBLEM.personas.map((persona) => (
                  <div key={persona.title} className="group hover:bg-surface-light/30 transition-colors p-6 flex flex-col lg:grid lg:grid-cols-12 lg:gap-6">
                    {/* Industry */}
                    <div className="lg:col-span-3 mb-5 lg:mb-0">
                      <span className="lg:hidden text-[0.7rem] font-bold uppercase tracking-wider text-muted block mb-1">Industry</span>
                      <h4 className="font-heading text-[1.05rem] font-semibold text-foreground">
                        {persona.title}
                      </h4>
                    </div>
                    {/* Problem */}
                    <div className="lg:col-span-4 mb-5 lg:mb-0">
                      <span className="lg:hidden text-[0.7rem] font-bold uppercase tracking-wider text-muted block mb-1">Problem</span>
                      <p className="text-[0.95rem] text-muted leading-[1.7] font-light">
                        {persona.description}
                      </p>
                    </div>
                    {/* How We Help */}
                    <div className="lg:col-span-5">
                      <span className="lg:hidden text-[0.7rem] font-bold uppercase tracking-wider text-brand block mb-1">How Grateful Marketing Helps</span>
                      <p className="text-[0.95rem] text-foreground/90 leading-[1.7] font-light">
                        {persona.howWeHelp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerReveal>

        {/* Insight */}
        <StaggerReveal className="mb-20 max-w-[720px]">
          <StaggerItem>
            <p className="text-base text-foreground leading-[1.88] font-medium">
              {PROBLEM.insight}
            </p>
          </StaggerItem>
        </StaggerReveal>

        {/* Five Cracks */}
        <StaggerReveal className="mb-20">
          <StaggerItem>
            <h3 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-semibold text-foreground mb-4">
              {PROBLEM.cracksHeading}
            </h3>
          </StaggerItem>
          <StaggerItem>
            <p className="text-base text-muted leading-[1.88] font-light mb-10">
              {PROBLEM.cracksIntro}
            </p>
          </StaggerItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PROBLEM.cracks.map((crack) => (
              <StaggerItem key={crack.number}>
                <div className="card-glass flex gap-5 p-6 group">
                  <span className="font-heading text-[1.5rem] font-bold text-brand/30 leading-none shrink-0">
                    {crack.number}
                  </span>
                  <div>
                    <h4 className="font-heading text-[0.95rem] font-semibold text-foreground mb-2">
                      {crack.title}
                    </h4>
                    <p className="text-[0.82rem] text-muted leading-[1.75] font-light">
                      {crack.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerReveal>

        {/* Outcomes */}
        <StaggerReveal className="mb-16">
          <StaggerItem>
            <h3 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-semibold text-foreground mb-8">
              {PROBLEM.outcomesHeading}
            </h3>
          </StaggerItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROBLEM.outcomes.map((outcome, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-surface/40 hover:bg-surface/60 transition-colors">
                  <span className="w-6 h-6 rounded-full bg-brand/15 text-brand flex items-center justify-center text-[0.65rem] font-bold shrink-0 mt-0.5">
                    &#10003;
                  </span>
                  <p className="text-[0.88rem] text-muted leading-[1.8] font-light">
                    {outcome}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerReveal>

        {/* CTA */}
        <StaggerReveal>
          <StaggerItem>
            <p className="text-[0.95rem] text-foreground font-heading font-medium mb-8">
              {PROBLEM.ctaLabel}
            </p>
            <div className="flex flex-wrap gap-4">
              <PremiumButton href={REVENUE_AUDIT_URL} external>
                Get your AI Revenue Audit
              </PremiumButton>
              <PremiumButton href={BOOKING_URL} variant="secondary">
                Let&apos;s have a conversation
              </PremiumButton>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}

"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { PillarIcon } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { GRATITUDE_PILLARS } from "@/lib/content/home";

export function GratitudeFrameworkSection() {
  return (
    <section id="gratitude" className="py-24 section-shell">
      <StaggerReveal className="mb-12">
        <StaggerItem>
          <Eyebrow className="mb-4">The GRATITUDE™ Framework</Eyebrow>
          <SectionHeading className="mb-4">
            Human-first strategy.{" "}
            <em className="italic text-brand font-light">AI-powered execution.</em>
          </SectionHeading>
          <p className="text-sm text-muted leading-[1.85] font-light max-w-[560px]">
            Our globally trademarked methodology ensures every AI integration
            and marketing campaign is built on data, driven by purpose, and
            designed for measurable ROI.
          </p>
        </StaggerItem>
      </StaggerReveal>

      <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {GRATITUDE_PILLARS.map((pillar) => (
          <StaggerItem key={pillar.title}>
            <article className="group h-full p-5 bg-brand-soft/40 border border-border-subtle relative overflow-hidden transition-all duration-500 hover:border-brand/35 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(212,175,55,0.06)]">
              <div className="absolute top-0 left-0 w-0 h-px bg-brand transition-all duration-500 group-hover:w-full" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 flex items-center justify-center border border-brand/25 text-brand bg-brand/5">
                  <PillarIcon name={pillar.icon} className="w-4 h-4" />
                </div>
                <span className="font-heading text-lg font-bold text-brand/25">
                  {pillar.letter}
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold mb-1.5">
                {pillar.title}
              </h3>
              <p className="text-[0.78rem] text-muted leading-relaxed font-light">
                {pillar.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}

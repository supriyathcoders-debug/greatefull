"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { PillarIcon } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { GRATITUDE, GRATITUDE_PILLARS, IMAGES } from "@/lib/content/home";

export function GratitudeFrameworkSection() {
  return (
    <section id="gratitude" className="py-28 section-shell">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <StaggerReveal>
            <StaggerItem>
              <BrandImage
                src={IMAGES.heartCircuitGratitude}
                alt="The heart of Gratitude™ — human connection powered by AI"
                className="max-w-[520px] mx-auto lg:mx-0"
              />
            </StaggerItem>
          </StaggerReveal>

          <StaggerReveal>
            <StaggerItem>
              <Eyebrow className="mb-5">{GRATITUDE.eyebrow}</Eyebrow>
              <SectionHeading className="mb-4">{GRATITUDE.heading}</SectionHeading>
              <p className="text-sm text-brand/80 tracking-wide mb-5 font-light">
                {GRATITUDE.subhead}
              </p>
              <p className="text-base text-muted leading-[1.88] font-light mb-8">
                {GRATITUDE.intro}
              </p>
              <div className="relative pl-6 py-5 border-l-2 border-brand/40 bg-brand-soft/30 rounded-r-xl mt-8">
                <p className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-brand mb-2 flex items-center gap-2">
                  <span className="w-4 h-px bg-brand" />
                  Pain to Purpose
                </p>
                <p className="text-[0.9rem] text-foreground/80 leading-[1.85] font-light italic">
                  {GRATITUDE.personalStory}
                </p>
              </div>
            </StaggerItem>
          </StaggerReveal>
        </div>

        <StaggerReveal className="flex flex-col border border-border-subtle bg-brand-soft/5 rounded-lg overflow-hidden mt-8 shadow-sm">
          {GRATITUDE_PILLARS.map((pillar, index) => (
            <StaggerItem key={pillar.title}>
              <article className={`flex flex-col sm:flex-row items-stretch ${index !== GRATITUDE_PILLARS.length - 1 ? 'border-b border-border-subtle/60' : ''}`}>
                <div className="flex sm:w-20 lg:w-24 flex-shrink-0 items-center justify-center bg-brand-soft/20 border-b sm:border-b-0 sm:border-r border-border-subtle/60 p-4">
                  <span className="font-heading text-3xl lg:text-4xl font-bold text-brand">
                    {pillar.letter}
                  </span>
                </div>
                <div className="flex-1 p-5 lg:p-6 flex items-center bg-background/50 hover:bg-brand-soft/5 transition-colors">
                  <p className="text-[0.9rem] lg:text-[0.95rem] text-muted leading-[1.8] font-light">
                    <strong className="text-foreground font-semibold mr-1">{pillar.title} —</strong>
                    {pillar.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

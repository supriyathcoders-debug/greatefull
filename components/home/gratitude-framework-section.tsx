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
              <p className="text-base text-muted leading-[1.88] font-light">
                {GRATITUDE.intro}
              </p>
            </StaggerItem>
          </StaggerReveal>
        </div>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GRATITUDE_PILLARS.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <article className="p-6 border border-border-subtle bg-brand-soft/20 hover:border-brand/25 transition-colors h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-heading text-lg font-bold text-brand">
                    {pillar.letter}
                  </span>
                  <div className="w-8 h-8 flex items-center justify-center border border-brand/25 text-brand">
                    <PillarIcon name={pillar.icon} className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[0.8rem] text-muted leading-relaxed font-light">
                  {pillar.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

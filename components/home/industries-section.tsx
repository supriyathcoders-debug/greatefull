"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { PillarIcon } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { INDUSTRIES } from "@/lib/content/home";

export function IndustriesSection() {
  return (
    <section id="industries" className="py-28 section-shell bg-brand-soft/20">
      <StaggerReveal className="mb-12">
        <StaggerItem>
          <Eyebrow className="mb-5">{INDUSTRIES.eyebrow}</Eyebrow>
          <SectionHeading className="mb-5">
            {INDUSTRIES.heading}
            <br />
            <span className="font-light">
              <em className="italic text-brand">{INDUSTRIES.headingEm}</em>
            </span>
          </SectionHeading>
          <p className="text-base text-muted leading-[1.88] font-light max-w-[580px]">
            {INDUSTRIES.intro}
          </p>
        </StaggerItem>
      </StaggerReveal>

      <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {INDUSTRIES.items.map((industry) => (
          <StaggerItem key={industry.title}>
            <article className="p-7 border border-border-subtle bg-background/40 h-full hover:border-brand/25 transition-colors">
              <div className="w-10 h-10 flex items-center justify-center border border-brand/25 text-brand mb-4">
                <PillarIcon name={industry.icon} className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {industry.title}
              </h3>
              <p className="text-sm text-muted leading-[1.82] font-light">
                {industry.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}

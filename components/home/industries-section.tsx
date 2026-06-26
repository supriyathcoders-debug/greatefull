"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { PillarIcon } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { INDUSTRIES } from "@/lib/content/home";

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 section-shell bg-brand-soft/20">
      <StaggerReveal className="mb-12">
        <StaggerItem>
          <Eyebrow className="mb-4">Industries We Serve</Eyebrow>
          <SectionHeading className="mb-4">
            Built for organizations ready to lead{" "}
            <em className="italic text-brand font-light">with trust.</em>
          </SectionHeading>
          <p className="text-sm text-muted leading-[1.85] font-light max-w-[520px]">
            Purpose-driven organizations across regulated, trust-dependent
            sectors — where compliance and authentic connection are
            non-negotiable.
          </p>
        </StaggerItem>
      </StaggerReveal>

      <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {INDUSTRIES.map((industry) => (
          <StaggerItem key={industry.title}>
            <article className="p-6 bg-background/40 border border-border-subtle transition-all duration-500 hover:border-brand/25 hover:-translate-y-0.5 group h-full">
              <div className="w-10 h-10 flex items-center justify-center border border-brand/25 text-brand mb-4 group-hover:bg-brand/10 transition-colors">
                <PillarIcon name={industry.icon} className="w-4 h-4" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">
                {industry.title}
              </h3>
              <p className="text-[0.82rem] text-muted leading-[1.75] font-light">
                {industry.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}

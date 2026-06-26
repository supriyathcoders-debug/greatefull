"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { PillarIcon } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { PLATFORM_FEATURES } from "@/lib/content/home";

export function AiPlatformSection() {
  return (
    <section id="platform" className="py-24 section-shell">
      <StaggerReveal className="mb-10">
        <StaggerItem>
          <Eyebrow className="mb-4">The AI Platform</Eyebrow>
          <SectionHeading className="mb-4">
            Powerful tools.{" "}
            <em className="italic text-brand font-light">Thoughtful deployment.</em>
          </SectionHeading>
          <p className="text-sm text-muted leading-[1.85] font-light max-w-[520px]">
            Proprietary all-in-one platform with North American data residency
            — engineered for legal, financial, and insurance clients.
          </p>
        </StaggerItem>
      </StaggerReveal>

      <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {PLATFORM_FEATURES.map((feature) => (
          <StaggerItem key={feature.title}>
            <article className="p-6 border border-border-subtle bg-brand-soft/30 transition-all duration-500 hover:border-brand/25 hover:-translate-y-0.5 group h-full">
              <div className="w-10 h-10 flex items-center justify-center border border-brand/25 text-brand bg-brand/5 mb-4 group-hover:bg-brand/15 transition-colors">
                <PillarIcon name={feature.icon} className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold mb-2">{feature.title}</h3>
              <p className="text-[0.78rem] text-muted font-light leading-relaxed">
                {feature.description}
              </p>
            </article>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}

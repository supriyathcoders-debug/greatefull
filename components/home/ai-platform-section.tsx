"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { PillarIcon } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { IMAGES, PLATFORM } from "@/lib/content/home";

export function AiPlatformSection() {
  return (
    <section id="platform" className="py-28 section-shell">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-12">
          <StaggerReveal>
            <StaggerItem>
              <Eyebrow className="mb-5">{PLATFORM.eyebrow}</Eyebrow>
              <SectionHeading className="mb-5">
                {PLATFORM.heading}{" "}
                <em className="italic text-brand font-light">{PLATFORM.headingEm}</em>
                <br />
                <span className="font-light">{PLATFORM.headingSuffix}</span>
              </SectionHeading>
              <p className="text-base text-muted leading-[1.88] font-light">
                {PLATFORM.intro}
              </p>
            </StaggerItem>
          </StaggerReveal>

          <StaggerReveal>
            <StaggerItem>
              <BrandImage
                src={IMAGES.aiPlatformDataConfidence}
                alt="Data-driven confidence — Grateful Marketing AI platform"
                className="max-w-[520px] mx-auto lg:ml-auto"
              />
            </StaggerItem>
          </StaggerReveal>
        </div>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLATFORM.features.map((feature) => (
            <StaggerItem key={feature.title}>
              <article className="p-7 border border-border-subtle bg-brand-soft/30 h-full">
                <div className="w-10 h-10 flex items-center justify-center border border-brand/25 text-brand mb-4">
                  <PillarIcon name={feature.icon} className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold mb-2">{feature.title}</h3>
                <p className="text-[0.8rem] text-muted font-light leading-relaxed">
                  {feature.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

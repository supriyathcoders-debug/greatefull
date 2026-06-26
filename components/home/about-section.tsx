"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { ABOUT, IMAGES } from "@/lib/content/home";

export function AboutSection() {
  return (
    <section id="about" className="py-28 section-shell bg-brand-soft/30">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <StaggerReveal>
          <StaggerItem className="max-w-[360px] mx-auto lg:mx-0">
            <div className="border border-brand/20 bg-[#0b0b2b] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-brand/50" />
              <img
                src={IMAGES.founderReflection}
                alt="Andrea, Founder of Grateful Marketing"
                className="w-full h-auto object-contain"
              />
            </div>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal>
          <StaggerItem>
            <Eyebrow className="mb-5">{ABOUT.eyebrow}</Eyebrow>
            <SectionHeading className="mb-8">
              {ABOUT.heading}{" "}
              <em className="italic text-brand font-light">{ABOUT.headingEm}</em>
            </SectionHeading>
          </StaggerItem>
          {ABOUT.paragraphs.map((p) => (
            <StaggerItem key={p.slice(0, 30)}>
              <p className="text-[0.93rem] text-muted leading-[1.9] font-light mb-5">
                {p}
              </p>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

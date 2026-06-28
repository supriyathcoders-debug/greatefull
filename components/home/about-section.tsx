"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { ABOUT, IMAGES } from "@/lib/content/home";

export function AboutSection() {
  return (
    <section id="about" className="py-28 section-shell bg-brand-soft/30">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <StaggerReveal className="order-2 lg:order-1">
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

        <StaggerReveal className="order-1 lg:order-2">
          <StaggerItem>
            <BrandImage
              src={IMAGES.agencyProfessionalWoman}
              alt="Grateful Marketing — founder-led AI marketing consultancy"
              className="max-w-[480px] mx-auto lg:ml-auto"
            />
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}

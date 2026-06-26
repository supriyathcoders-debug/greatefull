"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedBrandImage } from "@/components/ui/animated-brand-image";
import { DiamondDivider } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { IMAGES } from "@/lib/content/home";

export function AboutSection() {
  return (
    <section id="about" className="py-24 section-shell bg-brand-soft/30">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-16 items-start">
        <StaggerReveal>
          <StaggerItem>
            <AnimatedBrandImage
              src={IMAGES.founderReflection}
              alt="Andrea — founder of Grateful Marketing"
              size="md"
              animate="scale"
            />
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal>
          <StaggerItem>
            <Eyebrow className="mb-4">Meet the Founder</Eyebrow>
            <SectionHeading className="mb-5">
              Andrea — where experience meets{" "}
              <em className="italic text-brand font-light">purpose.</em>
            </SectionHeading>
            <DiamondDivider className="mb-6 max-w-[200px]" />
          </StaggerItem>

          <StaggerItem>
            <div className="space-y-4">
              <p className="text-[0.9rem] text-muted leading-[1.85] font-light">
                Grateful Marketing™ is a{" "}
                <strong className="text-foreground font-medium">
                  North American AI marketing consultancy
                </strong>{" "}
                founded by Andrea — a strategic leader with over 25 years of
                experience across technology, business consulting, and digital
                marketing.
              </p>
              <p className="text-[0.9rem] text-muted leading-[1.85] font-light">
                We believe the most powerful marketing isn&apos;t just smart —
                it&apos;s <strong className="text-foreground font-medium">grateful</strong>.
                When you work with us, you work directly with Andrea — no junior
                handoffs, no account managers.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-8 flex flex-wrap gap-8 pt-6 border-t border-border-subtle">
              {[
                { label: "Certified AI Consultant", sub: "Industry certified" },
                { label: "25+ Years", sub: "Strategic expertise" },
                { label: "Founder-Led", sub: "Direct engagement" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-sm font-medium text-brand">{item.label}</div>
                  <div className="text-[0.7rem] text-muted font-light mt-0.5">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}

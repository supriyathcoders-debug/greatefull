"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { DiamondDivider } from "@/components/ui/icons";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { FOUNDER_QUOTE, IMAGES } from "@/lib/content/home";

export function FounderQuoteSection() {
  return (
    <section id="quote" className="py-24 section-shell">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <StaggerReveal className="hidden lg:block">
          <StaggerItem>
            <BrandImage
              src={IMAGES.founderStrategicReflection}
              alt="Strategic reflection — Andrea, Founder of Grateful Marketing"
            />
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal>
          <StaggerItem>
            <div className="border border-brand/15 bg-brand-soft/30 px-8 py-14 md:px-12 md:py-16">
              <span
                className="font-heading text-6xl text-brand/12 leading-none block mb-4 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="font-heading text-[clamp(1.05rem,2vw,1.45rem)] italic leading-[1.7] text-brand/90 mb-8">
                {FOUNDER_QUOTE}
              </blockquote>
              <DiamondDivider className="max-w-[180px] mb-6" />
              <footer>
                <cite className="not-italic">
                  <div className="text-sm font-medium text-foreground">Andrea</div>
                  <div className="text-[0.72rem] text-muted mt-1 font-light">
                    Founder & CEO, Grateful Marketing™
                  </div>
                </cite>
              </footer>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}

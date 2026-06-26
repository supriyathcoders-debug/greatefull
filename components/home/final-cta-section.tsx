"use client";

import { PremiumButton } from "@/components/ui/premium-button";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { BOOKING_URL } from "@/lib/constants";
import { FINAL_CTA } from "@/lib/content/home";

export function FinalCtaSection() {
  return (
    <section id="consultation" className="py-28 section-shell bg-brand-soft/30">
      <StaggerReveal>
        <StaggerItem>
          <div className="max-w-[720px] mx-auto text-center border border-brand/20 px-8 py-14 md:px-12">
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.15] mb-5">
              {FINAL_CTA.heading}
            </h2>
            <p className="text-base text-muted font-light max-w-md mx-auto mb-8 leading-relaxed">
              {FINAL_CTA.body}
            </p>
            <PremiumButton href={BOOKING_URL} external>
              {FINAL_CTA.ctaPrimary}
            </PremiumButton>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </section>
  );
}

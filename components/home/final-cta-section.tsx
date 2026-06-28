"use client";

import { BrandImage } from "@/components/ui/brand-image";
import { PremiumButton } from "@/components/ui/premium-button";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { BOOKING_URL } from "@/lib/constants";
import { FINAL_CTA, IMAGES } from "@/lib/content/home";

export function FinalCtaSection() {
  return (
    <section id="consultation" className="py-28 section-shell bg-brand-soft/30">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <StaggerReveal>
          <StaggerItem>
            <p className="text-sm tracking-[0.12em] uppercase text-brand mb-5 font-light">
              {FINAL_CTA.tagline}
            </p>
            <p className="text-base text-muted font-light leading-[1.88] mb-8 max-w-md">
              {FINAL_CTA.body}
            </p>
            <PremiumButton href={BOOKING_URL} external>
              {FINAL_CTA.ctaPrimary}
            </PremiumButton>
          </StaggerItem>
        </StaggerReveal>

        <StaggerReveal>
          <StaggerItem>
            <BrandImage
              src={IMAGES.writingNextChapter}
              alt="Writing the next chapter — begin your Grateful Marketing journey"
              className="max-w-[520px] mx-auto lg:ml-auto"
            />
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}

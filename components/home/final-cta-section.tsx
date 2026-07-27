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
            <div className="mb-12 border-b border-border-subtle/50 pb-12">
              <h2 className="font-heading text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-[1.1] mb-4">
                {FINAL_CTA.heading}
              </h2>
              <p className="text-lg text-muted font-light mb-6">
                {FINAL_CTA.subheading}
              </p>
              <div className="flex flex-wrap gap-4">
                <PremiumButton href={BOOKING_URL}>
                  {FINAL_CTA.buttonPrimary}
                </PremiumButton>
                <PremiumButton href="/pre-booking" variant="secondary">
                  {FINAL_CTA.buttonSecondary}
                </PremiumButton>
              </div>
            </div>
            
            <p className="text-sm tracking-[0.12em] uppercase text-brand mb-5 font-light">
              {FINAL_CTA.tagline}
            </p>
            <p className="text-base text-muted font-light leading-[1.88] max-w-md">
              {FINAL_CTA.body}
            </p>
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

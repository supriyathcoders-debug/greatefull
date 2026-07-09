"use client";

import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { PremiumButton } from "@/components/ui/premium-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BOOKING_URL } from "@/lib/constants";
import { HERO, IMAGES } from "@/lib/content/home";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden bg-[#12082a]"
    >
      {/* Full hero background — image never cropped */}
      <div
        className="absolute inset-0 z-0 bg-[#12082a] bg-contain bg-center bg-no-repeat lg:bg-[length:auto_100%] lg:bg-right"
        style={{ backgroundImage: `url(${IMAGES.heroGoldSilhouette})` }}
        aria-hidden="true"
      />

      {/* Desktop — left gradient so text reads over the background */}
      <div
        className="absolute inset-0 z-[1] hidden bg-gradient-to-r from-[#12082a] from-0% via-[#12082a]/95 via-[45%] to-transparent to-100% lg:block"
        aria-hidden="true"
      />

      {/* Mobile — bottom fade so text sits on solid purple, not over the portrait */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent from-40% via-[#12082a]/90 via-58% to-[#12082a] to-100% lg:hidden"
        aria-hidden="true"
      />

      {/* Text */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-end lg:justify-center section-shell pb-10 pt-28 lg:py-32">
        <StaggerReveal className="max-w-[640px]">
          <StaggerItem>
            <Eyebrow className="mb-6 lg:mb-8">{HERO.eyebrow}</Eyebrow>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-heading text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.08] mb-6 lg:mb-8">
              {HERO.headline}{" "}
              <em className="italic text-brand font-light">{HERO.headlineEm}</em>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-[540px] text-base font-light leading-[1.86] text-muted mb-8 lg:mb-10">
              {HERO.supporting}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:gap-5">
              <PremiumButton href={BOOKING_URL} external className="w-full lg:w-auto text-center">
                {HERO.ctaPrimary}
              </PremiumButton>
              <PremiumButton
                href={HERO.ctaSecondaryHref}
                variant="secondary"
                className="w-full lg:w-auto text-center"
              >
                {HERO.ctaSecondary}
              </PremiumButton>
            </div>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}

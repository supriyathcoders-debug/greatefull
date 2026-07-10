"use client";

import { useEffect, useState } from "react";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { PremiumButton } from "@/components/ui/premium-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BOOKING_URL } from "@/lib/constants";
import { HERO, IMAGES } from "@/lib/content/home";

const DESKTOP_MQ = "(min-width: 1024px)";

function HeroContent() {
  return (
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
  );
}

function HeroMobile() {
  return (
    <section id="hero" className="hero-layout-mobile bg-[#12082a]">
      <div className="bg-[#12082a] pt-20">
        <img
          src={IMAGES.heroGoldSilhouette}
          alt="Human First. AI Second. — Grateful Marketing"
          className="block w-full h-auto"
          draggable={false}
        />
      </div>
      <div className="bg-[#12082a] section-shell py-10 pb-12">
        <HeroContent />
      </div>
    </section>
  );
}

function HeroDesktop() {
  return (
    <section id="hero" className="hero-layout-desktop relative min-h-[100dvh] overflow-hidden bg-[#12082a]">
      <div
        className="absolute inset-0 bg-[#12082a] bg-[length:auto_100%] bg-contain bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.heroGoldSilhouette})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#12082a] from-0% via-[#12082a]/95 via-[45%] to-transparent to-100%"
        aria-hidden="true"
      />
      <div className="relative z-10 flex min-h-[100dvh] items-center section-shell py-32">
        <HeroContent />
      </div>
    </section>
  );
}

export function HeroSection() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // SSR + first paint: mobile layout (prevents desktop overlay on phones)
  if (isDesktop !== true) {
    return <HeroMobile />;
  }

  return <HeroDesktop />;
}

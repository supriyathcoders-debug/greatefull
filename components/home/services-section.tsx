"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PremiumButton } from "@/components/ui/premium-button";
import { Marquee } from "@/components/ui/marquee";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { PillarIcon } from "@/components/ui/icons";
import { getOffersInOrder } from "@/lib/content/offers";
import { SERVICES } from "@/lib/content/home";

const PILLAR_MARQUEE_ITEMS = [
  { name: "Time", icon: "clock", desc: "Respect every second" },
  { name: "Gratitude", icon: "heart", desc: "Lead with appreciation" },
  { name: "Innovation", icon: "bulb", desc: "Reimagine what's possible" },
  { name: "Productivity", icon: "zap", desc: "Do more with less" },
  { name: "Potential", icon: "rocket", desc: "Unlock what's next" },
] as const;

const MARQUEE_PILLARS = [
  ...PILLAR_MARQUEE_ITEMS,
  ...PILLAR_MARQUEE_ITEMS,
  ...PILLAR_MARQUEE_ITEMS,
];

function PillarMarqueeCard({
  name,
  icon,
  desc,
}: (typeof PILLAR_MARQUEE_ITEMS)[number]) {
  return (
    <div className="w-[190px] shrink-0 rounded-2xl border border-brand/15 bg-gradient-to-b from-surface/80 to-surface/40 p-5 text-center transition-colors hover:border-brand/35 flex flex-col items-center">
      <div className="mb-3 text-brand/80">
        <PillarIcon name={icon} className="w-8 h-8" />
      </div>
      <div className="mb-1 font-heading text-[0.75rem] font-semibold text-brand">
        {name}
      </div>
      <div className="text-[0.62rem] font-light leading-relaxed text-muted/70">
        {desc}
      </div>
    </div>
  );
}

export function ServicesSection() {
  const offers = getOffersInOrder();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      setSlidesPerView(
        window.innerWidth >= 1024 ? 2 : window.innerWidth >= 768 ? 2 : 1,
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, offers.length - 1);

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > currentIndex ? 1 : -1);
      setCurrentIndex(Math.min(Math.max(next, 0), maxIndex));
    },
    [currentIndex, maxIndex],
  );

  const next = useCallback(() => {
    if (currentIndex < maxIndex) goTo(currentIndex + 1);
    else goTo(0);
  }, [currentIndex, maxIndex, goTo]);

  const prev = useCallback(() => {
    if (currentIndex > 0) goTo(currentIndex - 1);
    else goTo(maxIndex);
  }, [currentIndex, maxIndex, goTo]);


  const visible = offers.slice(currentIndex, currentIndex + slidesPerView);
  const padded =
    visible.length < slidesPerView && offers.length >= slidesPerView
      ? [...visible, ...offers.slice(0, slidesPerView - visible.length)]
      : visible;

  return (
    <section id="services" className="py-28 section-shell relative section-noise">
      <div className="max-w-[1200px] mx-auto">
        <div className="absolute right-1/4 top-0 w-[400px] h-[400px] blob-purple opacity-20 pointer-events-none" aria-hidden="true" />

        <StaggerReveal className="mb-16 max-w-[720px]">
          <StaggerItem>
            <Eyebrow className="mb-5">{SERVICES.eyebrow}</Eyebrow>
            <h2 className="font-heading text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold leading-[1.1] mb-4 text-foreground">
              {SERVICES.heading}{" "}
              <em className="italic text-brand font-light">{SERVICES.headingEm}</em>{" "}
              {SERVICES.headingSuffix}
            </h2>
            <p className="text-[0.95rem] text-muted leading-[1.88] font-light max-w-[620px]">
              {SERVICES.intro}
            </p>
          </StaggerItem>
        </StaggerReveal>

        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {offers.map((offer, index) => {
            let tabLabel = offer.title;
            if (tabLabel === "Grateful Growth AI and Marketing Retainer") tabLabel = "AI Growth Retainer";
            if (tabLabel === 'AI Agents / "AI Employees"') tabLabel = "AI Agents";
            if (tabLabel === "AI Content Development & Systems") tabLabel = "AI Content & Systems";
            
            const isActive = index === currentIndex;
            
            return (
              <button
                key={offer.id}
                onClick={() => goTo(index)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-none text-[0.85rem] font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-brand text-background shadow-lg shadow-brand/25 border-transparent"
                    : "bg-surface/50 text-muted border border-border-subtle hover:border-brand/40 hover:text-foreground"
                }`}
              >
                {tabLabel}
              </button>
            );
          })}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-fr"
            >
              {padded.map((offer) => (
                <article
                  key={offer.id}
                  id={offer.id}
                  className="card-modern group flex flex-col overflow-hidden relative scroll-mt-28"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-heading text-[1.3rem] font-semibold mb-2 text-foreground leading-tight group-hover:text-brand transition-colors duration-300">
                      {offer.title}
                    </h3>
                    <p className="text-[0.75rem] tracking-[0.08em] uppercase text-brand font-bold mb-4">
                      {offer.subtitle}
                    </p>
                    <p className="text-[0.88rem] text-muted leading-[1.85] font-light mb-4 whitespace-pre-line">
                      {offer.description}
                    </p>
                    
                    <div className="flex flex-col gap-3 mb-6 flex-1">
                      {offer.result && (
                        <p className="text-[0.88rem] text-muted leading-[1.6] font-light">
                          <strong className="text-foreground font-medium">The result:</strong> {offer.result}
                        </p>
                      )}
                      {offer.promise && (
                        <p className="text-[0.88rem] text-muted leading-[1.6] font-light">
                          <strong className="text-foreground font-medium">Our Promise:</strong> {offer.promise}
                        </p>
                      )}
                      {offer.limitedAvailability && (
                        <p className="text-[0.88rem] text-muted leading-[1.6] font-light">
                          <strong className="text-foreground font-medium">Limited Availability:</strong> {offer.limitedAvailability}
                        </p>
                      )}
                      {offer.riskReversal && (
                        <p className="text-[0.88rem] text-muted leading-[1.6] font-light">
                          <strong className="text-foreground font-medium">Risk Reversal:</strong> {offer.riskReversal}
                        </p>
                      )}
                      {offer.bonus && (
                        <p className="text-[0.88rem] text-muted leading-[1.6] font-light">
                          <strong className="text-foreground font-medium">Bonus:</strong> {offer.bonus}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {offer.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.68rem] tracking-[0.05em] uppercase text-brand font-semibold bg-brand/10 border border-brand/20 px-3 py-1.5 rounded-md shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <PremiumButton href={offer.href} variant="ghost">
                        {offer.cta}
                      </PremiumButton>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          {offers.length > slidesPerView && (
            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1 transition-all duration-300 ${
                      i === currentIndex
                        ? "w-8 bg-brand"
                        : "w-4 bg-border-subtle hover:bg-brand/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous offers"
                  className="w-11 h-11 border border-border-subtle flex items-center justify-center text-brand transition-all hover:border-brand hover:bg-brand/10"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next offers"
                  className="w-11 h-11 border border-border-subtle flex items-center justify-center text-brand transition-all hover:border-brand hover:bg-brand/10"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

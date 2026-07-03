"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandImage } from "@/components/ui/brand-image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PremiumButton } from "@/components/ui/premium-button";
import { Marquee } from "@/components/ui/marquee";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { SERVICES } from "@/lib/content/home";

const PILLAR_MARQUEE_ITEMS = [
  { name: "Time", icon: "⏱", desc: "Respect every second" },
  { name: "Gratitude", icon: "🙏", desc: "Lead with appreciation" },
  { name: "Innovation", icon: "💡", desc: "Reimagine what's possible" },
  { name: "Productivity", icon: "⚡", desc: "Do more with less" },
  { name: "Potential", icon: "🚀", desc: "Unlock what's next" },
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
    <div className="w-[190px] shrink-0 rounded-2xl border border-brand/15 bg-gradient-to-b from-surface/80 to-surface/40 p-5 text-center transition-colors hover:border-brand/35">
      <div className="mb-2 text-2xl">{icon}</div>
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      setSlidesPerView(window.innerWidth >= 1024 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const items = useMemo(() => SERVICES.items, []);

  const maxIndex = Math.max(0, items.length - slidesPerView);

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

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const visible = items.slice(currentIndex, currentIndex + slidesPerView);
  const padded =
    visible.length < slidesPerView
      ? [...visible, ...items.slice(0, slidesPerView - visible.length)]
      : visible;

  return (
    <section id="services" className="py-28 section-shell relative section-noise">
      <div className="max-w-[1200px] mx-auto">
        {/* Decorative blob */}
        <div className="absolute right-1/4 top-0 w-[400px] h-[400px] blob-purple opacity-20 pointer-events-none" aria-hidden="true" />

        {/* Section header */}
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

        {/* Five Pillars — scrolling promotional bar */}
        <StaggerReveal className="mb-6 max-w-[720px]">
          <StaggerItem>
            <p className="text-[0.8rem] font-light text-muted">
              The 5 Pillars of Gratitude&#8482; — Approved Reference Visual
            </p>
          </StaggerItem>
        </StaggerReveal>

        <div className="relative left-1/2 mb-16 w-screen max-w-none -translate-x-1/2">
          <div className="border-y border-brand/10 bg-brand-soft/25 py-5 section-noise">
            <Marquee speed={38}>
              {MARQUEE_PILLARS.map((pillar, index) => (
                <PillarMarqueeCard key={`${pillar.name}-${index}`} {...pillar} />
              ))}
            </Marquee>
          </div>
          <p className="section-shell mt-3 text-[0.65rem] font-light text-muted/60">
            &#9888;&#65039; Client asset required: Replace with day_5.png from Developer Handoff package
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-7"
            >
              {padded.map((service) => (
                <article
                  key={service.title}
                  className="card-modern group h-full flex flex-col overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  <div className="overflow-hidden rounded-t-2xl">
                    <BrandImage
                      src={service.image}
                      alt={service.imageAlt}
                      frame="none"
                      className="border-0 w-full"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <span className="font-heading text-[0.82rem] text-brand/50 mb-3 font-medium tracking-wider group-hover:text-brand transition-colors duration-300">
                      {service.number}
                    </span>
                    <h3 className="font-heading text-[1.3rem] font-semibold mb-3 text-foreground leading-tight group-hover:text-brand transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[0.88rem] text-muted leading-[1.85] font-light mb-4 flex-1">
                      {service.description}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.62rem] tracking-[0.06em] uppercase text-brand/60 bg-brand-soft/30 px-3 py-1.5 font-medium rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {service.href && (
                      <div className="mt-auto">
                        <PremiumButton href={service.href} variant="ghost">
                          Learn More
                        </PremiumButton>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          {items.length > slidesPerView && (
            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "w-8 bg-brand glow-brand"
                        : "w-4 bg-white/10 hover:bg-brand/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous services"
                  className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-muted transition-all hover:border-brand hover:text-brand hover:bg-brand/10 hover:shadow-[0_0_20px_rgba(201,168,76,0.1)]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next services"
                  className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-muted transition-all hover:border-brand hover:text-brand hover:bg-brand/10 hover:shadow-[0_0_20px_rgba(201,168,76,0.1)]"
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

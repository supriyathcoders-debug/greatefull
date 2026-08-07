"use client";

import React, { useMemo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonialsData, { Testimonial } from "@/lib/testimonials";
import TestimonialCard from "@/components/ui/testimonial-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrandImage } from "@/components/ui/brand-image";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { IMAGES, TESTIMONIALS } from "@/lib/content/home";
import {
  getOfferFilterTabs,
  getTestimonialOfferIndex,
} from "@/lib/content/offers";

type Props = {
  hideHeading?: boolean;
  categoryFilter?: string;
};

export function TestimonialsSection({ hideHeading, categoryFilter }: Props) {
  const filterTabs = getOfferFilterTabs();
  const [activeOfferId, setActiveOfferId] = useState<string | null>(() => {
    if (!categoryFilter) return null;
    return (
      filterTabs.find((tab) => tab.categories.includes(categoryFilter))
        ?.offerId ?? null
    );
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const filtered = useMemo(() => {
    const activeTab = filterTabs.find((tab) => tab.offerId === activeOfferId);
    const items =
      activeTab == null
        ? [...testimonialsData].sort(
            (a, b) =>
              getTestimonialOfferIndex(a.category) -
              getTestimonialOfferIndex(b.category),
          )
        : testimonialsData.filter((t) =>
            activeTab.categories.includes(t.category),
          );

    return items;
  }, [activeOfferId, filterTabs]);

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      setSlidesPerView(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1,
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, filtered.length - slidesPerView);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeOfferId]);

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
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const visible = filtered.slice(currentIndex, currentIndex + slidesPerView);
  const padded =
    visible.length < slidesPerView
      ? [...visible, ...filtered.slice(0, slidesPerView - visible.length)]
      : visible;

  return (
    <section id="testimonials" className="py-28 section-shell bg-brand-soft/20">
      <div className="max-w-[1200px] mx-auto">
        {!hideHeading && (
          <>
            {/* <StaggerReveal className="mb-10"> */}
              {/* <StaggerItem>
                <BrandImage
                  src={IMAGES.handsMeetingMinimalist}
                  alt="The AI partnership — trusted client collaboration"
                  className="max-w-[900px] mx-auto mb-10"
                />
              </StaggerItem> */}
            {/* </StaggerReveal> */}
            <StaggerReveal className="mb-10 max-w-[720px]">
              <StaggerItem>
                <Eyebrow className="mb-4">{TESTIMONIALS.eyebrow}</Eyebrow>
                <SectionHeading>
                  {TESTIMONIALS.heading}{" "}
                  <em className="italic text-brand font-light">
                    {TESTIMONIALS.headingEm}
                  </em>
                </SectionHeading>
              </StaggerItem>
            </StaggerReveal>
          </>
        )}

        <ScrollReveal delay={0.1}>
          {!categoryFilter && (
          <div
            role="tablist"
            aria-label="Testimonial Categories"
            className="flex flex-wrap gap-2 mb-10"
          >
            <button
              role="tab"
              aria-selected={activeOfferId === null}
              onClick={() => setActiveOfferId(null)}
              className={`text-[0.72rem] tracking-[0.08em] uppercase px-4 py-2.5 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand ${
                activeOfferId === null
                  ? "bg-brand text-background border-brand"
                  : "bg-transparent text-muted border-border-subtle hover:border-brand/40 hover:text-brand"
              }`}
            >
              All
            </button>
            {filterTabs.map((tab) => (
              <button
                key={tab.offerId}
                role="tab"
                aria-selected={activeOfferId === tab.offerId}
                onClick={() =>
                  setActiveOfferId((current) =>
                    current === tab.offerId ? null : tab.offerId,
                  )
                }
                className={`text-[0.72rem] tracking-[0.08em] uppercase px-4 py-2.5 border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand ${
                  activeOfferId === tab.offerId
                    ? "bg-brand text-background border-brand"
                    : "bg-transparent text-muted border-border-subtle hover:border-brand/40 hover:text-brand"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          )}
        </ScrollReveal>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${activeOfferId}-${currentIndex}`}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
            >
              {padded.map((t: Testimonial) => (
                <TestimonialCard key={t.id} item={t} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length > slidesPerView && (
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
                  aria-label="Previous testimonials"
                  className="w-11 h-11 border border-border-subtle flex items-center justify-center text-brand transition-all hover:border-brand hover:bg-brand/10"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonials"
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

export default TestimonialsSection;

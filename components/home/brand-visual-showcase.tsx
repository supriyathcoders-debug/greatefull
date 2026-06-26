"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { IMAGES } from "@/lib/constants";

const SLIDES = [
  { src: IMAGES.heartGratitude, alt: "The heart of gratitude" },
  { src: IMAGES.growthWithAi, alt: "Growing with AI" },
  { src: IMAGES.sparkInnovation, alt: "The spark of innovation" },
  { src: IMAGES.dataConfidence, alt: "Data-driven confidence" },
  { src: IMAGES.communityPower, alt: "The power of community" },
  { src: IMAGES.celebratingWins, alt: "Celebrating wins" },
  { src: IMAGES.acceleratingGrowth, alt: "Accelerating growth" },
  { src: IMAGES.gratitudeAlways, alt: "Gratitude always" },
] as const;

const STACK = [
  { src: IMAGES.pillarsGratitude, alt: "GRATITUDE pillars" },
  { src: IMAGES.aiOpportunity, alt: "The AI opportunity" },
  { src: IMAGES.pathForward, alt: "The path forward" },
  { src: IMAGES.nextChapter, alt: "Writing the next chapter" },
  { src: IMAGES.aiPartnership, alt: "The AI partnership" },
] as const;

/** Image-only showcase — no extra marketing copy added */
export function BrandVisualShowcase() {
  const [active, setActive] = useState(0);
  const [stackTop, setStackTop] = useState(0);

  const nextSlide = useCallback(() => {
    setActive((i) => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const t = setInterval(nextSlide, 5500);
    return () => clearInterval(t);
  }, [nextSlide]);

  useEffect(() => {
    const t = setInterval(() => {
      setStackTop((i) => (i + 1) % STACK.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section aria-label="Brand visuals" className="py-16 section-shell border-y border-border-subtle/60 bg-brand-soft/10">
      <StaggerReveal className="max-w-[900px] mx-auto">
        <StaggerItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[220px] max-w-[280px] mx-auto md:mx-0 w-full">
              {[0, 1, 2].map((offset) => {
                const idx = (stackTop + offset) % STACK.length;
                const card = STACK[idx];
                const depth = 2 - offset;

                return (
                  <motion.div
                    key={`${stackTop}-${offset}`}
                    animate={{
                      opacity: depth === 2 ? 1 : depth === 1 ? 0.72 : 0.48,
                      scale: 1 - offset * 0.05,
                      y: offset * 12,
                      x: offset * 8,
                      rotate: offset * 2,
                      zIndex: depth,
                    }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-x-0 top-0 overflow-hidden border border-brand/20 bg-[#0b0b2b] shadow-lg"
                  >
                    <img
                      src={card.src}
                      alt={card.alt}
                      className="w-full h-[160px] object-contain p-2"
                    />
                  </motion.div>
                );
              })}
            </div>

            <div className="relative max-w-[280px] mx-auto md:ml-auto w-full">
              <div className="relative overflow-hidden border border-brand/20 bg-[#0b0b2b] h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={SLIDES[active].src}
                    src={SLIDES[active].src}
                    alt={SLIDES[active].alt}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-contain p-3"
                  />
                </AnimatePresence>
              </div>
              <div className="flex items-center justify-center gap-1.5 mt-4">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-0.5 transition-all duration-500 ${
                      i === active ? "w-5 bg-brand" : "w-2.5 bg-border-subtle hover:bg-brand/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </section>
  );
}

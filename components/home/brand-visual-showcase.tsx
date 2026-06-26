"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerReveal, StaggerItem } from "@/components/ui/stagger-reveal";
import { IMAGES } from "@/lib/constants";

const SLIDES = [
  { src: IMAGES.heartGratitude, alt: "The heart of gratitude" },
  { src: IMAGES.growthWithAi, alt: "Growing with AI" },
  { src: IMAGES.sparkInnovation, alt: "The spark of innovation" },
  { src: IMAGES.dataConfidence, alt: "Data-driven confidence" },
  { src: IMAGES.communityPower, alt: "The power of community" },
  { src: IMAGES.celebratingWins, alt: "Celebrating wins" },
] as const;

const STACK = [
  { src: IMAGES.pillarsGratitude, alt: "GRATITUDE pillars", rotate: -3, x: -8, y: 0 },
  { src: IMAGES.aiOpportunity, alt: "The AI opportunity", rotate: 2, x: 12, y: 16 },
  { src: IMAGES.pathForward, alt: "The path forward", rotate: -1, x: 0, y: 32 },
] as const;

export function BrandVisualShowcase() {
  const [active, setActive] = useState(0);
  const [stackTop, setStackTop] = useState(0);

  const nextSlide = useCallback(() => {
    setActive((i) => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const t = setInterval(nextSlide, 5000);
    return () => clearInterval(t);
  }, [nextSlide]);

  useEffect(() => {
    const t = setInterval(() => {
      setStackTop((i) => (i + 1) % STACK.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const orderedStack = [
    ...STACK.slice(stackTop),
    ...STACK.slice(0, stackTop),
  ].reverse();

  return (
    <section className="py-24 section-shell border-t border-border-subtle">
      <StaggerReveal className="max-w-[1100px] mx-auto">
        <StaggerItem>
          <Eyebrow className="mb-4">Brand Visuals</Eyebrow>
          <SectionHeading className="mb-4">
            Human-first strategy,{" "}
            <em className="italic text-brand font-light">beautifully crafted.</em>
          </SectionHeading>
          <p className="text-sm text-muted font-light max-w-md mb-12 leading-relaxed">
            A curated glimpse into the Grateful Marketing philosophy — refined,
            intentional, and built around your people.
          </p>
        </StaggerItem>

        <StaggerItem>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Stack cards */}
            <div className="relative h-[280px] sm:h-[320px] max-w-[360px] mx-auto lg:mx-0 w-full">
              <AnimatePresence mode="popLayout">
                {orderedStack.map((card, i) => {
                  const isTop = i === orderedStack.length - 1;
                  return (
                    <motion.div
                      key={card.src}
                      layout
                      initial={{ opacity: 0, scale: 0.9, rotate: card.rotate }}
                      animate={{
                        opacity: isTop ? 1 : 0.55 - i * 0.12,
                        scale: 1 - (orderedStack.length - 1 - i) * 0.04,
                        rotate: card.rotate,
                        x: card.x,
                        y: card.y - (orderedStack.length - 1 - i) * 12,
                        zIndex: i,
                      }}
                      exit={{ opacity: 0, scale: 0.85, y: -20 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-x-4 top-0 overflow-hidden border border-brand/20 bg-[#0b0b2b] shadow-xl"
                    >
                      <img
                        src={card.src}
                        alt={card.alt}
                        className="w-full h-[200px] sm:h-[240px] object-contain p-2"
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Slider */}
            <div className="relative max-w-[400px] mx-auto lg:ml-auto w-full">
              <div className="relative overflow-hidden border border-brand/20 bg-[#0b0b2b] aspect-[4/3]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent z-10" />
                <AnimatePresence mode="wait">
                  <motion.img
                    key={SLIDES[active].src}
                    src={SLIDES[active].src}
                    alt={SLIDES[active].alt}
                    initial={{ opacity: 0, x: 30, scale: 1.03 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, scale: 0.97 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-contain p-3"
                  />
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="flex gap-1.5">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={`h-1 transition-all duration-500 ${
                        i === active ? "w-6 bg-brand" : "w-3 bg-border-subtle hover:bg-brand/40"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActive((i) => (i - 1 + SLIDES.length) % SLIDES.length)}
                    className="w-8 h-8 border border-border-subtle text-brand text-xs hover:border-brand transition-colors"
                    aria-label="Previous"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-8 h-8 border border-border-subtle text-brand text-xs hover:border-brand transition-colors"
                    aria-label="Next"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </section>
  );
}

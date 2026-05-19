"use client";
import React, { useMemo, useState, useEffect } from 'react';
import testimonialsData, { Testimonial } from '@/lib/testimonials';
import TestimonialCard from '@/components/ui/testimonial-card';

const CATEGORIES = [
  'AI Business Consulting',
  'AI Marketing Strategy & Deployment',
  'AI Team Training & Empowerment',
  'Integrated Solutions',
];

export function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [revealKey, setRevealKey] = useState(0);

  const filtered = useMemo(() => {
    if (!activeCategory) return testimonialsData;
    return testimonialsData.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  const visible = showAll ? filtered : filtered.slice(0, 6);

  // When category changes, bump the revealKey to trigger CSS animation via key
  useEffect(() => {
    setRevealKey((k) => k + 1);
    setShowAll(false);
  }, [activeCategory]);

  return (
    <section id="testimonials" className="py-24 px-[6vw]">
      <div className="max-w-[1100px] mx-auto">
        <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-3"><span className="w-7 h-px bg-brand"></span>Testimonials</div>
        <h2 className="font-heading text-[clamp(1.6rem,3.5vw,2.6rem)] font-semibold leading-[1.12] mb-3">Testimonials</h2>
        <p className="text-muted font-light mb-6">What Our Clients Say</p>

        <div role="tablist" aria-label="Testimonial Categories" className="flex flex-wrap gap-3 mb-8">
          <button
            role="tab"
            aria-selected={activeCategory === null}
            onClick={() => setActiveCategory(null)}
            className={`text-sm px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-brand ${activeCategory === null ? 'bg-brand text-background border-brand' : 'bg-transparent text-muted border-border-subtle'}`}
          >
            All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={activeCategory === c}
              onClick={() => setActiveCategory((s) => (s === c ? null : c))}
              className={`text-sm px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-brand ${activeCategory === c ? 'bg-brand text-background border-brand' : 'bg-transparent text-muted border-border-subtle'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div key={revealKey} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fade-up_0.6s_ease_both] auto-rows-fr">
          {visible.map((t: Testimonial) => (
            <TestimonialCard key={t.id} item={t} />
          ))}
        </div>

        {filtered.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll((s) => !s)}
              className="inline-block text-sm font-medium tracking-[0.12em] uppercase px-8 py-3 border border-border-subtle bg-transparent hover:bg-brand hover:text-background transition-colors"
            >
              {showAll ? 'Show Less' : 'View More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default TestimonialsSection;

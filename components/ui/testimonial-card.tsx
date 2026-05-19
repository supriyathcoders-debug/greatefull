import React from 'react';
import { Testimonial } from '@/lib/testimonials';

type Props = {
  item: Testimonial;
};

export function TestimonialCard({ item }: Props) {
  return (
    <article className="h-full flex flex-col p-7 border border-border-subtle bg-background/40 rounded-md hover:shadow-xl transition-transform hover:-translate-y-1 will-change-transform">
      <div className="text-brand/80 mb-3 text-4xl leading-none select-none">“</div>

      {/* main content grows so footer stays at bottom */}
      <div className="flex-1">
        <p className="text-sm text-muted leading-relaxed mb-4">{item.quote}</p>
      </div>

      <div className="mt-4 pt-4 border-t border-border-subtle">
        <div className="text-sm font-semibold text-foreground">{item.name}</div>
        <div className="text-[0.72rem] text-muted mt-0.5">{item.title}</div>
        {item.industry && <div className="text-[0.68rem] text-muted mt-1 font-light">{item.industry}</div>}
      </div>
    </article>
  );
}

export default TestimonialCard;

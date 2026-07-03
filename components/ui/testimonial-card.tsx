import React from "react";
import { Testimonial } from "@/lib/testimonials";

type Props = {
  item: Testimonial;
};

export function TestimonialCard({ item }: Props) {
  return (
    <article className="card-glass group h-full flex flex-col p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="text-brand/40 mb-4 text-4xl leading-none select-none font-heading italic">
        &ldquo;
      </div>

      <div className="flex-1">
        <p className="text-sm text-muted leading-[1.85] font-light">
          {item.quote}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-border-subtle">
        <div className="text-sm font-medium text-foreground">{item.name}</div>
        <div className="text-[0.72rem] text-muted mt-0.5 font-light">
          {item.title}
        </div>
        {item.industry ? (
          <div className="text-[0.62rem] tracking-[0.14em] uppercase text-brand/70 mt-2 font-medium">
            {item.industry}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default TestimonialCard;

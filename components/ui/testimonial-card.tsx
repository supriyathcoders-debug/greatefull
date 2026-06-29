import React from "react";
import { Testimonial } from "@/lib/testimonials";

type Props = {
  item: Testimonial;
};

export function TestimonialCard({ item }: Props) {
  return (
    <article className="h-full flex flex-col p-8 border border-border-subtle bg-background/60 relative overflow-hidden transition-all duration-300 hover:border-brand/30 hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)] group">
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand transition-all duration-500 group-hover:w-full" />

      <div className="text-brand/60 mb-4 text-3xl leading-none select-none font-heading">
        &ldquo;
      </div>

      <div className="flex-1">
        <p className="text-sm text-muted leading-[1.85] font-light">
          {item.quote}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-border-subtle">
        <div className="text-sm font-medium text-foreground">{item.title}</div>
        {item.industry && (
          <div className="text-[0.65rem] text-brand/70 mt-2 tracking-[0.08em] uppercase font-light">
            {item.industry}
          </div>
        )}
      </div>
    </article>
  );
}

export default TestimonialCard;

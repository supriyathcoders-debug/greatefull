import React from "react";
import { CaseStudy } from "@/lib/case-studies";

type Props = {
  item: CaseStudy;
};

export function CaseStudyCard({ item }: Props) {
  return (
    <article className="card-glass group h-full flex flex-col p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="mb-6 pb-5 border-b border-border-subtle">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-1">{item.client}</h3>
        <div className="text-[0.62rem] tracking-[0.14em] uppercase text-brand mt-1 font-medium">
          {item.industry}
        </div>
        <div className="text-[0.7rem] tracking-wide text-brand/70 mt-2">
          {item.services}
        </div>
      </div>

      <div className="flex-1 space-y-5">
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-2">The Challenge</h4>
          <p className="text-sm text-muted leading-[1.75] font-light">
            {item.challenge}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-2">The Approach</h4>
          <ul className="text-sm text-muted leading-[1.75] font-light list-disc pl-4 space-y-1.5">
            {item.approach.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-2">The Impact</h4>
          <p className="text-sm text-muted leading-[1.75] font-light">
            {item.impact}
          </p>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-border-subtle">
        <h4 className="text-[0.65rem] font-semibold text-foreground uppercase tracking-widest mb-2">Capabilities Applied</h4>
        <p className="text-[0.75rem] text-muted leading-[1.6]">
          {item.capabilities}
        </p>
      </div>
    </article>
  );
}

export default CaseStudyCard;

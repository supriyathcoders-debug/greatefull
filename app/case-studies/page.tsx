import type { Metadata } from "next";
import CaseStudiesSection from "@/components/case-studies-section";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real results from real partnerships.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-28">
      <section className="section-fade">
        <div className="mx-auto w-full max-w-[1200px] px-6 pb-12 pt-14 md:pt-20">
          <p className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5">
            <span className="w-7 h-px bg-brand" aria-hidden="true" />
            Client Case Studies
          </p>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.1] mb-6">
            Real results from{" "}
            <em className="italic text-brand font-light">real partnerships.</em>
          </h1>
        </div>
      </section>

      <CaseStudiesSection hideHeading />
    </div>
  );
}

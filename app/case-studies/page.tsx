import type { Metadata } from "next";
import Image from "next/image";
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

          <div className="max-w-4xl mt-12 text-muted">
            <h2 className="text-2xl text-foreground font-heading mb-6">Overview: Four Capabilities, One Approach</h2>
            <p className="mb-8 text-lg">
              The case studies below are organized around the four disciplines that define how Grateful Marketing® delivers for clients:
              hands-on digital marketing management, end-to-end marketing management, disciplined project management, and — increasingly
              — AI strategy and deployment. Each engagement draws on real client work, including work delivered prior to founding Grateful Marketing®.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
              <div className="card-glass p-6">
                <h3 className="text-brand font-medium mb-3 uppercase tracking-wider text-sm">Digital Marketing Management</h3>
                <p className="text-sm">Hands-on ownership of digital channels: paid social and search, email, CMS websites, SEO/SEM, and marketing automation, including platform-level execution using Meta Ads Manager, LinkedIn Campaign Manager, WordPress, and Webflow.</p>
              </div>

              <div className="card-glass p-6">
                <h3 className="text-brand font-medium mb-3 uppercase tracking-wider text-sm">Marketing Management</h3>
                <p className="text-sm">End-to-end campaign ownership: translating business goals into marketing objectives and investment recommendations, setting strategy across story, audience, and channel mix, and defining the KPIs and governance that keep a program accountable.</p>
              </div>

              <div className="card-glass p-6">
                <h3 className="text-brand font-medium mb-3 uppercase tracking-wider text-sm">Project Management</h3>
                <p className="text-sm">Scoping, budget, and timeline ownership across concurrent workstreams: coordinating internal teams, agencies, and distributed team members, using MS Project, Jira, and Smartsheet to keep delivery on schedule.</p>
              </div>

              <div className="card-glass p-6">
                <h3 className="text-brand font-medium mb-3 uppercase tracking-wider text-sm">AI Strategy & Deployment</h3>
                <p className="text-sm">From early AI-assisted production workflows in enterprise consulting to a fully built AI team and methodology at Grateful Marketing® today, using AI daily for research, content development, and campaign analysis, and training client teams to do the same.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudiesSection hideHeading hideTabs />

      <section className="py-12 md:py-20 border-t border-border mt-12">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
            <Image
              src="/certificate.png"
              alt="Certificate"
              width={400}
              height={400}
              className="w-[250px] md:w-[350px] h-auto object-contain"
            />
            <Image
              src="/women.png"
              alt="Women in Business"
              width={400}
              height={400}
              className="w-[250px] md:w-[350px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="section-fade py-20 border-t border-border mt-12 relative section-noise">
        <div className="mx-auto w-full max-w-[800px] px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6">Let’s Talk</h2>
          <h3 className="text-xl md:text-2xl text-brand mb-8 italic">Bring This Experience to Your Team</h3>
          <p className="text-muted text-lg mb-10 leading-relaxed">
            Every case study here started the same way: a business goal, a stakeholder who needed to trust the plan, and a team ready to execute — managed with the same rigor whether the deliverable was a digital campaign, a full marketing program, a multi-workstream project, or an AI deployment. That’s the same starting point for every Grateful Marketing® engagement today.
          </p>
          <a href="/contact" className="btn-primary">
            Book an AI Audit or an Introductory Call
          </a>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Grateful Marketing®️ to discuss your AI marketing and automation solutions.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <section className="section-fade">
        <div className="mx-auto w-full max-w-4xl px-6 pb-12 pt-14 md:pt-20">
          <p className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5">
            <span className="w-7 h-px bg-brand" aria-hidden="true" />
            Contact Us
          </p>
          <h1 className="font-heading text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.1] mb-6">
            Get in{" "}
            <em className="italic text-brand font-light">Touch.</em>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-muted font-light leading-relaxed mb-12">
            Share your goals and challenges. Send us a message and our team will get back to you with the right approach for your organization.
          </p>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}

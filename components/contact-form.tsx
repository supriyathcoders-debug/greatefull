"use client";

import { useState } from "react";
import { submitLeadDirectly } from "@/lib/crm/client-submit";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const company = formData.company.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setErrorMessage("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    try {
      const result = await submitLeadDirectly({
        form: "contact",
        fullName: name,
        email,
        phone: phone || undefined,
        company: company || undefined,
        message,
        service: "General Contact Inquiry",
      });

      if (!result.ok) {
        const detail = result.detail ? ` (${result.detail})` : "";
        setErrorMessage(
          (result.error || "Something went wrong. Please try again.") + detail,
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <div className="w-full">
      {status === "success" ? (
        <div className="card-modern p-8 md:p-12 text-center animate-[fade-up_0.5s_ease-out]">
          <div className="w-16 h-16 bg-brand/15 text-brand rounded-full flex items-center justify-center mx-auto mb-6 border border-brand/30">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-foreground">
            Thank You
          </h3>
          <p className="text-muted text-base font-light max-w-md mx-auto mb-8 leading-relaxed">
            Your message has been received. Our team will review your inquiry and get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-xs font-semibold tracking-widest uppercase text-brand border border-brand/40 px-6 py-3 hover:bg-brand hover:text-background transition-all"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className="card-modern p-8 md:p-12 space-y-6 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted block">
                Full Name <span className="text-brand">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={status === "submitting"}
                className="w-full bg-brand-soft/40 border border-border-subtle rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground placeholder:text-muted/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted block">
                Email Address <span className="text-brand">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
                disabled={status === "submitting"}
                className="w-full bg-brand-soft/40 border border-border-subtle rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground placeholder:text-muted/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted block">
                Phone Number <span className="text-muted/60 text-[0.7rem] lowercase">(optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                disabled={status === "submitting"}
                className="w-full bg-brand-soft/40 border border-border-subtle rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground placeholder:text-muted/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted block">
                Company / Organization <span className="text-muted/60 text-[0.7rem] lowercase">(optional)</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                disabled={status === "submitting"}
                className="w-full bg-brand-soft/40 border border-border-subtle rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground placeholder:text-muted/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted block">
              Message <span className="text-brand">*</span>
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business, goals, or what you're looking to achieve."
              required
              disabled={status === "submitting"}
              className="w-full bg-brand-soft/40 border border-border-subtle rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground placeholder:text-muted/50 resize-y"
            />
          </div>

          {status === "error" && errorMessage ? (
            <div
              className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
              role="alert"
            >
              {errorMessage}
            </div>
          ) : null}

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto bg-brand text-background px-10 py-4 rounded-none font-bold uppercase tracking-widest text-[0.75rem] hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand/20"
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

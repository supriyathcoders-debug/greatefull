"use client";

import { useState } from "react";
import { submitLeadDirectly } from "@/lib/crm/client-submit";

export default function AiRevenueAuditPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    company: "",
    website: "",
    location: "",
    industry: "",
    teamSize: "",
    revenue: "",
    challenges: [],
    primaryGoal: "",
    aiAdoption: "",
    solutions: [],
    budget: "",
    timeline: "",
    notes: "",
    source: "",
    newsletter: false,
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 5;

  const steps = [
    { n: 1, name: "About You", subtitle: "Let's start with the basics." },
    { n: 2, name: "Your Business", subtitle: "Context helps us identify opportunities." },
    { n: 3, name: "Goals & Challenges", subtitle: "What's holding your revenue back?" },
    { n: 4, name: "AI Readiness", subtitle: "Where are you with AI today?" },
    { n: 5, name: "Final Details", subtitle: "Anything else we should know?" },
  ];

  const validateStep = (step: number) => {
    const newErrors: string[] = [];
    if (step === 1) {
      if (!formData.firstName) newErrors.push("firstName");
      if (!formData.lastName) newErrors.push("lastName");
      if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.push("email");
      if (!formData.role) newErrors.push("role");
    } else if (step === 2) {
      if (!formData.company) newErrors.push("company");
      if (!formData.industry) newErrors.push("industry");
    } else if (step === 3) {
      if (formData.challenges.length === 0) newErrors.push("challenges");
      if (!formData.primaryGoal) newErrors.push("primaryGoal");
    } else if (step === 4) {
      if (!formData.aiAdoption) newErrors.push("aiAdoption");
    } else if (step === 5) {
      if (!formData.timeline) newErrors.push("timeline");
    }
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const fieldLabel: Record<string, string> = {
    firstName: "First name",
    lastName: "Last name",
    email: "Business email",
    role: "Your role (choose from the list)",
    company: "Company name",
    industry: "Industry",
    challenges: "At least one growth challenge",
    primaryGoal: "Your #1 goal",
    aiAdoption: "AI adoption level",
    timeline: "Implementation timeline",
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setSubmitError(null);
      if (currentStep < totalSteps) {
        setCurrentStep((prevStep) => prevStep + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      requestAnimationFrame(() => {
        document.getElementById("audit-form-feedback")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setSubmitError(null);
      setCurrentStep((prevStep) => prevStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
    e?.preventDefault();
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      setSubmitError(null);

      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      const message = [
        `Role: ${formData.role}`,
        `Company: ${formData.company}`,
        `Website: ${formData.website || "—"}`,
        `Location: ${formData.location || "—"}`,
        `Industry: ${formData.industry}`,
        `Team size: ${formData.teamSize || "—"}`,
        `Revenue: ${formData.revenue || "—"}`,
        `Challenges: ${formData.challenges.join(", ")}`,
        `Primary goal: ${formData.primaryGoal}`,
        `AI adoption: ${formData.aiAdoption}`,
        `Solutions of interest: ${formData.solutions.join(", ") || "—"}`,
        `Budget: ${formData.budget || "—"}`,
        `Timeline: ${formData.timeline}`,
        `How they heard about us: ${formData.source || "—"}`,
        `Newsletter opt-in: ${formData.newsletter ? "yes" : "no"}`,
        "",
        "Additional notes:",
        formData.notes?.trim() || "—",
      ].join("\n");

      const metadata = {
        submittedAt: new Date().toISOString(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        role: formData.role,
        company: formData.company,
        website: formData.website,
        location: formData.location,
        industry: formData.industry,
        teamSize: formData.teamSize,
        revenue: formData.revenue,
        challenges: formData.challenges,
        primaryGoal: formData.primaryGoal,
        aiAdoption: formData.aiAdoption,
        solutions: formData.solutions,
        budget: formData.budget,
        timeline: formData.timeline,
        notes: formData.notes,
        source: formData.source,
        newsletter: formData.newsletter,
      };

      try {
        const result = await submitLeadDirectly({
          form: "ai-revenue-audit",
          fullName,
          email: formData.email,
          phone: formData.phone?.trim() || undefined,
          company: formData.company?.trim() || undefined,
          message,
          service: "AI Revenue Audit",
          metadata,
        });

        if (!result.ok) {
          const detail = result.detail ? ` (${result.detail})` : "";
          setSubmitError(result.error + detail);
          return;
        }

        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("Submission error:", error);
        setSubmitError("Network error. Please check your connection and try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "challenges" || name === "solutions") {
        const currentArr = formData[name];
        if (checked) {
          setFormData({ ...formData, [name]: [...currentArr, value] });
        } else {
          setFormData({ ...formData, [name]: currentArr.filter((item: string) => item !== value) });
        }
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (errors.includes(name)) {
      setErrors(errors.filter((err) => err !== name));
    }
  };

  return (
    <div className="pt-24 pb-32 px-[6vw] min-h-screen">
      <div className="max-w-[800px] mx-auto">

        {/* HERO */}
        <div className="text-center mb-16 animate-[fade-up_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5 text-[0.66rem] tracking-[0.2em] uppercase text-brand font-medium">
            ✨ AI Revenue Audit
          </div>
          <h1 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] mb-6">
            Scale Your Revenue with <em className="italic text-brand font-light">Intelligence.</em>
          </h1>
          <p className="text-muted text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Discover where AI can unlock hidden growth, save your team hours, and elevate your customer experience.
          </p>
        </div>

        {/* PROGRESS */}
        <div className="sticky top-20 z-40 mb-12 animate-[fade-up_0.8s_0.2s_ease-out_both]">
          <div className="bg-surface/80 backdrop-blur-md border border-border-subtle rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between items-end mb-4">
              <div className="text-[0.65rem] uppercase tracking-[0.15em] text-muted font-medium">
                Step <span className="text-brand text-sm font-bold">{currentStep}</span> of {totalSteps}
              </div>
              <div className="font-heading text-xl text-foreground font-semibold">
                {steps[currentStep - 1].name}
              </div>
            </div>
            <div className="h-1.5 w-full bg-brand-soft rounded-full overflow-hidden">
              <div
                className="h-full bg-brand transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_0_10px_rgba(200,169,81,0.4)]"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="bg-surface border border-border-subtle rounded-[2rem] p-8 md:p-16 shadow-2xl relative overflow-hidden animate-[fade-up_0.8s_0.4s_ease-out_both]">
          <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -mr-32 -mt-32" aria-hidden />

          {!isSubmitted ? (
            <div className="relative z-10">
              <div className="mb-12">
                <h2 className="font-heading text-3xl font-bold mb-3">{steps[currentStep - 1].name}</h2>
                <p className="text-muted font-light">{steps[currentStep - 1].subtitle}</p>
              </div>

              <div className="space-y-8">
                {currentStep === 1 && (
                  <div className="grid gap-6 animate-[section-fade_0.5s_ease-out]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted">First Name <span className="text-brand">*</span></label>
                        <input
                          type="text" name="firstName" placeholder="Jane" value={formData.firstName} onChange={handleInputChange}
                          className={`w-full bg-brand-soft border ${errors.includes("firstName") ? 'border-red-500/50' : 'border-border-subtle'} rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground`}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted">Last Name <span className="text-brand">*</span></label>
                        <input
                          type="text" name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleInputChange}
                          className={`w-full bg-brand-soft border ${errors.includes("lastName") ? 'border-red-500/50' : 'border-border-subtle'} rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground`}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted">Business Email <span className="text-brand">*</span></label>
                        <input
                          type="email" name="email" placeholder="jane@company.com" value={formData.email} onChange={handleInputChange}
                          className={`w-full bg-brand-soft border ${errors.includes("email") ? 'border-red-500/50' : 'border-border-subtle'} rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground`}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted">Phone Number</label>
                        <input
                          type="tel" name="phone" placeholder="(555) 000-0000" value={formData.phone} onChange={handleInputChange}
                          className="w-full bg-brand-soft border border-border-subtle rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted">Your Role <span className="text-brand">*</span></label>
                      <select
                        name="role" value={formData.role} onChange={handleInputChange}
                        className={`w-full bg-brand-soft border ${errors.includes("role") ? 'border-red-500/50' : 'border-border-subtle'} rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground appearance-none`}
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23c8a951' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1.25rem' }}
                      >
                        <option value="" className="bg-[#0b1825]">Select position...</option>
                        <option value="Owner / Founder" className="bg-[#0b1825]">Owner / Founder</option>
                        <option value="CEO / President" className="bg-[#0b1825]">CEO / President</option>
                        <option value="Marketing Lead" className="bg-[#0b1825]">Marketing Lead</option>
                        <option value="Operations Manager" className="bg-[#0b1825]">Operations Manager</option>
                        <option value="Sales Lead" className="bg-[#0b1825]">Sales Lead</option>
                        <option value="Other" className="bg-[#0b1825]">Other</option>
                      </select>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="grid gap-6 animate-[section-fade_0.5s_ease-out]">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted">Company Name <span className="text-brand">*</span></label>
                      <input
                        type="text" name="company" placeholder="Grateful Enterprises" value={formData.company} onChange={handleInputChange}
                        className={`w-full bg-brand-soft border ${errors.includes("company") ? 'border-red-500/50' : 'border-border-subtle'} rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground`}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted">Website</label>
                        <input type="url" name="website" placeholder="https://" value={formData.website} onChange={handleInputChange} className="w-full bg-brand-soft border border-border-subtle rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted">Location</label>
                        <input type="text" name="location" placeholder="City, Region" value={formData.location} onChange={handleInputChange} className="w-full bg-brand-soft border border-border-subtle rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted">Team Size</label>
                        <select
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleInputChange}
                          className="w-full bg-brand-soft border border-border-subtle rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground appearance-none"
                          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23c8a951' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1.25rem' }}
                        >
                          <option value="" className="bg-[#0b1825]">Select team size...</option>
                          <option className="bg-[#0b1825]">1-5</option>
                          <option className="bg-[#0b1825]">6-20</option>
                          <option className="bg-[#0b1825]">21-50</option>
                          <option className="bg-[#0b1825]">51-200</option>
                          <option className="bg-[#0b1825]">200+</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted">Annual Revenue</label>
                        <select
                          name="revenue"
                          value={formData.revenue}
                          onChange={handleInputChange}
                          className="w-full bg-brand-soft border border-border-subtle rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground appearance-none"
                          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23c8a951' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1.25rem' }}
                        >
                          <option value="" className="bg-[#0b1825]">Select revenue range...</option>
                          <option className="bg-[#0b1825]">Under $100k</option>
                          <option className="bg-[#0b1825]">$100k-$500k</option>
                          <option className="bg-[#0b1825]">$500k-$1M</option>
                          <option className="bg-[#0b1825]">$1M-$5M</option>
                          <option className="bg-[#0b1825]">$5M+</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted">Industry <span className="text-brand">*</span></label>
                      <select name="industry" value={formData.industry} onChange={handleInputChange} className={`w-full bg-brand-soft border ${errors.includes("industry") ? 'border-red-500/50' : 'border-border-subtle'} rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground appearance-none`} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23c8a951' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1.25rem' }}>
                        <option value="" className="bg-[#0b1825]">Select industry...</option>
                        <option className="bg-[#0b1825]">Health & Wellness</option>
                        <option className="bg-[#0b1825]">Personal Services (Salon/Spa)</option>
                        <option className="bg-[#0b1825]">Pet Care & Services</option>
                        <option className="bg-[#0b1825]">Professional Services (Legal/Consulting)</option>
                        <option className="bg-[#0b1825]">Home Services (Trades)</option>
                        <option className="bg-[#0b1825]">Retail / E-commerce / DTC</option>
                        <option className="bg-[#0b1825]">B2B / SaaS / Tech</option>
                        <option className="bg-[#0b1825]">Non-Profit</option>
                        <option className="bg-[#0b1825]">Other</option>
                      </select>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="grid gap-8 animate-[section-fade_0.5s_ease-out]">
                    <div className="space-y-4">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted">Top Growth Challenges <span className="text-brand">*</span></label>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { id: "missed-leads", label: "Missed leads & slow follow-up", desc: "Calls go unanswered or inquiries fall through the cracks." },
                          { id: "booking", label: "Booking & scheduling friction", desc: "Too much back-and-forth to confirm appointments." },
                          { id: "visibility", label: "Low online visibility", desc: "Hard to be found or weak content presence." },
                          { id: "retention", label: "Customer retention", desc: "Past clients aren't returning consistently." },
                          { id: "time", label: "Team is stretched thin", desc: "Repetitive admin work eats up too many hours." },
                          { id: "ai-confusion", label: "Unsure how to use AI", desc: "Want guidance on where AI actually fits." },
                        ].map((opt) => (
                          <label key={opt.id} className={`flex items-start gap-4 p-5 rounded-2xl border transition-all cursor-pointer ${formData.challenges.includes(opt.id) ? 'bg-brand/10 border-brand' : 'bg-brand-soft border-border-subtle hover:border-brand/40'}`}>
                            <input type="checkbox" name="challenges" value={opt.id} checked={formData.challenges.includes(opt.id)} onChange={handleInputChange} className="mt-1.5 accent-brand w-4 h-4" />
                            <div>
                              <div className="font-bold text-foreground mb-1">{opt.label}</div>
                              <div className="text-xs text-muted font-light">{opt.desc}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted">Your #1 Goal <span className="text-brand">*</span></label>
                      <select name="primaryGoal" value={formData.primaryGoal} onChange={handleInputChange} className={`w-full bg-brand-soft border ${errors.includes("primaryGoal") ? 'border-red-500/50' : 'border-border-subtle'} rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground appearance-none`} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23c8a951' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1.25rem' }}>
                        <option value="" className="bg-[#0b1825]">Select your top priority...</option>
                        <option className="bg-[#0b1825]">Increase revenue</option>
                        <option className="bg-[#0b1825]">Grow client base</option>
                        <option className="bg-[#0b1825]">Improve customer experience</option>
                        <option className="bg-[#0b1825]">Free up team time</option>
                        <option className="bg-[#0b1825]">Build stronger brand presence</option>
                        <option className="bg-[#0b1825]">Better understand marketing ROI</option>
                      </select>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="grid gap-8 animate-[section-fade_0.5s_ease-out]">
                    <div className="space-y-4">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted text-center block">Current AI Adoption <span className="text-brand">*</span></label>
                      <div className="grid grid-cols-5 gap-3">
                        {[
                          { v: "1", l: "None" },
                          { v: "2", l: "Intro" },
                          { v: "3", l: "Basic" },
                          { v: "4", l: "Active" },
                          { v: "5", l: "Pro" },
                        ].map((s) => (
                          <label key={s.v} className={`flex flex-col items-center p-4 rounded-xl border transition-all cursor-pointer ${formData.aiAdoption === s.v ? 'bg-brand border-brand text-background' : 'bg-brand-soft border-border-subtle text-foreground hover:border-brand/40'}`}>
                            <input type="radio" name="aiAdoption" value={s.v} checked={formData.aiAdoption === s.v} onChange={handleInputChange} className="hidden" />
                            <span className="font-heading text-2xl font-bold mb-1">{s.v}</span>
                            <span className="text-[0.6rem] uppercase tracking-wider font-bold opacity-70">{s.l}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted">Solutions you're curious about</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: "voice", label: "AI Voice Agents", desc: "24/7 phone automation" },
                          { id: "chat", label: "Intelligent Chat", desc: "Real-time web conversion" },
                          { id: "content", label: "Content Systems", desc: "Scaling your brand voice" },
                          { id: "email", label: "Email Automation", desc: "Nurturing on autopilot" },
                        ].map((opt) => (
                          <label key={opt.id} className={`flex items-start gap-4 p-5 rounded-2xl border transition-all cursor-pointer ${formData.solutions.includes(opt.id) ? 'bg-brand/10 border-brand' : 'bg-brand-soft border-border-subtle hover:border-brand/40'}`}>
                            <input type="checkbox" name="solutions" value={opt.id} checked={formData.solutions.includes(opt.id)} onChange={handleInputChange} className="mt-1.5 accent-brand w-4 h-4" />
                            <div>
                              <div className="font-bold text-foreground mb-1">{opt.label}</div>
                              <div className="text-xs text-muted font-light">{opt.desc}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="grid gap-8 animate-[section-fade_0.5s_ease-out]">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted">Implementation Timeline <span className="text-brand">*</span></label>
                      <select name="timeline" value={formData.timeline} onChange={handleInputChange} className={`w-full bg-brand-soft border ${errors.includes("timeline") ? 'border-red-500/50' : 'border-border-subtle'} rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground appearance-none`} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23c8a951' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1.25rem' }}>
                        <option value="" className="bg-[#0b1825]">Select timeframe...</option>
                        <option className="bg-[#0b1825]">Immediately (within 30 days)</option>
                        <option className="bg-[#0b1825]">Soon (1–3 months)</option>
                        <option className="bg-[#0b1825]">Planning ahead (3–6 months)</option>
                        <option className="bg-[#0b1825]">Just exploring</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted">Specific focus areas? (Optional)</label>
                      <textarea name="notes" placeholder="Tell us more about your specific needs..." value={formData.notes} onChange={handleInputChange} className="w-full bg-brand-soft border border-border-subtle rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground min-h-[120px] resize-none" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted">Estimated Budget</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full bg-brand-soft border border-border-subtle rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground appearance-none"
                          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23c8a951' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.25rem center', backgroundSize: '1.25rem' }}
                        >
                          <option value="" className="bg-[#0b1825]">Select budget range...</option>
                          <option className="bg-[#0b1825]">Under $1,000 / month</option>
                          <option className="bg-[#0b1825]">$1,000-$3,000 / month</option>
                          <option className="bg-[#0b1825]">$3,000-$10,000 / month</option>
                          <option className="bg-[#0b1825]">$10,000+ / month</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-muted">How did you find us?</label>
                        <input
                          type="text"
                          name="source"
                          placeholder="Google, referral, social media..."
                          value={formData.source}
                          onChange={handleInputChange}
                          className="w-full bg-brand-soft border border-border-subtle rounded-xl px-5 py-4 focus:outline-none focus:border-brand transition-colors text-foreground"
                        />
                      </div>
                    </div>
                    <label className={`flex items-start gap-4 p-5 rounded-2xl border transition-all cursor-pointer ${formData.newsletter ? 'bg-brand/10 border-brand' : 'bg-brand-soft border-border-subtle hover:border-brand/40'}`}>
                      <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleInputChange} className="mt-1.5 accent-brand w-4 h-4" />
                      <div>
                        <div className="font-bold text-foreground mb-1">Get AI Marketing Insights</div>
                        <div className="text-xs text-muted font-light">Occasional practical advice to your inbox. Unsubscribe anytime.</div>
                      </div>
                    </label>
                  </div>
                )}
              </div>
              <div
                id="audit-form-feedback"
                className={
                  errors.length > 0
                    ? "mt-8 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                    : "sr-only"
                }
                aria-live="polite"
              >
                {errors.length > 0 ? (
                  <>
                    <p className="font-semibold text-red-100">Please complete the following to continue:</p>
                    <ul className="mt-2 list-disc pl-5 leading-relaxed">
                      {errors.map((key) => (
                        <li key={key}>{fieldLabel[key] ?? key}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
              {submitError ? (
                <p className="mt-6 text-sm text-red-300 leading-relaxed" role="alert">
                  {submitError}
                </p>
              ) : null}

              {/* NAVIGATION */}
              <div className="flex justify-between items-center mt-16 pt-10 border-t border-border-subtle">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={isSubmitting}
                  className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted hover:text-brand transition-colors ${currentStep === 1 ? 'invisible' : 'visible'} disabled:opacity-30`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                  Back
                </button>
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}  
                    className="bg-brand text-background px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[0.7rem] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(200,169,81,0.2)]"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-brand text-background px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[0.7rem] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(200,169,81,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Generate My Audit"}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 animate-[fade-up_0.8s_ease-out]">
              <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-10 border border-brand/20">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="font-heading text-4xl font-bold mb-6">Audit Initiated.</h2>
              <p className="text-muted text-lg font-light leading-relaxed max-w-lg mx-auto mb-12">
                Andrea and the team have received your responses. We're now crafting your personalized revenue opportunity report.
              </p>
              <div className="p-8 bg-brand-soft rounded-2xl border border-border-subtle inline-block">
                <p className="text-foreground font-medium mb-1">Expect your report via email</p>
                <p className="text-brand font-bold uppercase tracking-[0.2em] text-xs">Within 2 Business Days</p>
              </div>
              <div className="mt-16 font-heading text-2xl italic text-brand opacity-60">
                "The difference is in the approach."
              </div>
            </div>
          )}
        </div>

        <footer className="mt-16 text-center text-[0.65rem] uppercase tracking-[0.2em] text-muted font-light">
          Powered by the <strong className="text-brand font-bold">Gratitude™</strong> methodology &middot; Est. 2022
        </footer>
      </div>
    </div>
  );
}

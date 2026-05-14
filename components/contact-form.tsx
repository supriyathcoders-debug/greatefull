"use client";

import { useState } from "react";
import { submitLeadDirectly } from "@/lib/crm/client-submit";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    try {
      const result = await submitLeadDirectly({
        form: "contact",
        fullName: name,
        email,
        message,
        service: "Contact form",
      });

      if (!result.ok) {
        const detail = typeof result.detail === "string" ? result.detail : "";
        setErrorMessage(
          (result.error || "Something went wrong. Please try again or email us directly.") +
            (detail ? ` ${detail}` : ""),
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-2xl border border-border bg-surface p-6 shadow-[0_10px_24px_rgba(28,28,28,0.06)]"
    >
      <label className="text-sm font-medium text-foreground">
        Name
        <input
          type="text"
          name="name"
          autoComplete="name"
          className="mt-2 w-full rounded-xl border border-border px-3 py-2 outline-none transition focus:border-brand"
          required
          disabled={status === "submitting"}
        />
      </label>
      <label className="text-sm font-medium text-foreground">
        Email
        <input
          type="email"
          name="email"
          autoComplete="email"
          className="mt-2 w-full rounded-xl border border-border px-3 py-2 outline-none transition focus:border-brand"
          required
          disabled={status === "submitting"}
        />
      </label>
      <label className="text-sm font-medium text-foreground">
        Message
        <textarea
          name="message"
          rows={5}
          className="mt-2 w-full rounded-xl border border-border px-3 py-2 outline-none transition focus:border-brand"
          placeholder="Tell us what you want to automate and improve."
          required
          disabled={status === "submitting"}
        />
      </label>
      {status === "success" ? (
        <p className="text-sm text-brand font-medium" role="status">
          Thanks — your message was sent. We&apos;ll be in touch soon.
        </p>
      ) : null}
      {status === "error" && errorMessage ? (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

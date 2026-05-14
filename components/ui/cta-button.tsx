"use client";

import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function CtaButton({ href, children, variant = "primary" }: CtaButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5";
  const variantClasses =
    variant === "primary"
      ? "border-brand bg-brand text-background shadow-[0_12px_28px_rgba(200,169,81,0.28)] hover:bg-brand-dark"
      : "border-border bg-transparent text-foreground hover:border-brand hover:text-brand";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}

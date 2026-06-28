import Link from "next/link";

type PremiumButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

export function PremiumButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: PremiumButtonProps) {
  const base =
    "inline-flex items-center justify-center no-underline font-semibold text-[0.77rem] tracking-[0.12em] uppercase px-10 py-4 transition-all duration-300";

  const variants = {
    primary:
      "bg-brand text-background border-2 border-brand hover:brightness-110 hover:shadow-[0_8px_32px_rgba(212,175,55,0.25)]",
    secondary:
      "bg-transparent text-foreground border border-foreground/20 hover:border-brand hover:text-brand",
    ghost:
      "bg-transparent text-brand border border-brand/40 px-6 py-2.5 hover:bg-brand hover:text-background",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

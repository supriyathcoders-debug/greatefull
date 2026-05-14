import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href?: string;
};

export function Card({ title, description, href }: CardProps) {
  const content = (
    <>
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-brand transition-all duration-500 group-hover:w-full"></div>
      <h3 className="font-heading text-xl font-semibold leading-tight mb-3 text-foreground">{title}</h3>
      <p className="text-sm leading-[1.82] font-light text-muted">{description}</p>
    </>
  );

  const className = "block p-10 border border-border-subtle relative overflow-hidden transition-colors hover:bg-brand-soft group bg-surface";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <article className={className}>
      {content}
    </article>
  );
}

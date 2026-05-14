type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`section-fade py-16 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-[580px] mb-16">
          {eyebrow ? (
            <div className="inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal mb-5">
              <span className="w-7 h-px bg-brand"></span>
              {eyebrow}
            </div>
          ) : null}
          <h2 className="font-heading text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.12] mb-5">{title}</h2>
          {description ? <p className="text-base text-muted leading-[1.88] font-light">{description}</p> : null}
        </div>
        {children ? <div>{children}</div> : null}
      </div>
    </section>
  );
}

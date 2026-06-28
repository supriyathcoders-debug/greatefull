type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag
      className={`font-heading text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.12] ${className}`}
    >
      {children}
    </Tag>
  );
}

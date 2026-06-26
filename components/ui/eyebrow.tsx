type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[0.66rem] tracking-[0.24em] uppercase text-brand font-normal ${className}`}
    >
      <span className="w-7 h-px bg-brand" aria-hidden="true" />
      {children}
    </div>
  );
}

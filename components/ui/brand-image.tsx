import { cn } from "@/lib/utils";

type BrandImageProps = {
  src: string;
  alt: string;
  className?: string;
  frame?: "gold" | "subtle" | "none";
  priority?: boolean;
};

/**
 * Brand marketing graphics include typography — always show full artwork
 * with object-contain on the navy background, never crop with object-cover.
 */
export function BrandImage({
  src,
  alt,
  className,
  frame = "gold",
}: BrandImageProps) {
  const frameClasses = {
    gold: "border border-brand/25 gold-glow bg-[#0b0b2b]",
    subtle: "border border-border-subtle bg-[#0b0b2b]",
    none: "bg-[#0b0b2b]",
  };

  return (
    <div className={cn("relative overflow-hidden", frameClasses[frame], className)}>
      {frame === "gold" && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand via-brand-light to-brand z-10"
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        className="w-full h-auto block object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

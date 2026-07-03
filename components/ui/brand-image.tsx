"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type BrandImageProps = {
  src: string;
  alt: string;
  className?: string;
  frame?: "gold" | "subtle" | "none" | "glass";
  priority?: boolean;
  aspectRatio?: string;
  floating?: boolean;
  blob?: boolean;
};

export function BrandImage({
  src,
  alt,
  className,
  frame = "gold",
  priority,
  aspectRatio = "3/2",
  floating,
  blob,
}: BrandImageProps) {
  const frameClasses = {
    gold:
      "border border-brand/20 bg-surface shadow-[0_4px_24px_rgba(0,0,0,0.2)]",
    subtle:
      "border border-border bg-surface",
    none:
      "bg-transparent",
    glass:
      "glass shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
  };

  return (
    <div className={cn("relative", floating && "animate-float-slow", className)}>
      {blob && (
        <div
          className="blob-gold absolute -inset-8 -z-10"
          aria-hidden="true"
        />
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.01 }}
        className={cn(
          "relative overflow-hidden rounded-2xl",
          frameClasses[frame],
        )}
      >
        {frame === "gold" && (
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand/30 via-brand to-brand/30 z-10 origin-left"
            aria-hidden="true"
          />
        )}
        <div className="w-full" style={{ aspectRatio }}>
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-full object-cover block"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </motion.div>
    </div>
  );
}

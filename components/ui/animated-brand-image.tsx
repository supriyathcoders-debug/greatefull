"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  animate?: "float" | "fade" | "scale";
};

const sizeClasses = {
  sm: "max-w-[200px]",
  md: "max-w-[280px]",
  lg: "max-w-[360px]",
};

export function AnimatedBrandImage({
  src,
  alt,
  className,
  size = "md",
  animate = "float",
}: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      animate={
        animate === "float" && !reduceMotion ? { y: [0, -6, 0] } : undefined
      }
      transition={{
        opacity: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
        y: animate === "float"
          ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
          : { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
      }}
      className={cn(
        "relative mx-auto overflow-hidden border border-brand/20 bg-[#0b0b2b] shadow-[0_16px_48px_rgba(0,0,0,0.3)]",
        sizeClasses[size],
        className,
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent z-10" />
      <img
        src={src}
        alt={alt}
        className="w-full h-auto block object-contain"
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
}

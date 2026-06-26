"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  animate?: "float" | "fade" | "scale";
};

const sizeClasses = {
  sm: "max-w-[220px]",
  md: "max-w-[320px]",
  lg: "max-w-[420px]",
};

export function AnimatedBrandImage({
  src,
  alt,
  className,
  size = "md",
  animate = "float",
}: Props) {
  const motionProps =
    animate === "float"
      ? {
          initial: { opacity: 0, y: 24, scale: 0.96 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          animate: { y: [0, -8, 0] },
          transition: {
            opacity: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 1, ease: [0.16, 1, 0.3, 1] },
          },
        }
      : animate === "scale"
        ? {
            initial: { opacity: 0, scale: 0.92 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
          }
        : {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
          };

  return (
    <motion.div
      {...motionProps}
      viewport={{ once: true, margin: "-40px" }}
      className={cn(
        "relative mx-auto overflow-hidden border border-brand/20 bg-[#0b0b2b] shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
        sizeClasses[size],
        className,
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent z-10" />
      <img
        src={src}
        alt={alt}
        className="w-full h-auto block object-contain p-1"
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
}

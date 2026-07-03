"use client";

type MarqueeProps = {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
};

export function Marquee({
  children,
  speed = 35,
  className = "",
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={`marquee-track-wrapper overflow-hidden ${pauseOnHover ? "marquee-pause-hover" : ""} ${className}`}
    >
      <div
        className="marquee-track flex w-max items-stretch gap-4"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 items-stretch gap-4">{children}</div>
        <div className="flex shrink-0 items-stretch gap-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

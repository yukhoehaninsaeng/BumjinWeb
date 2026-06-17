"use client";

import { cn } from "@/lib/utils";

interface ProgressiveBlurProps {
  className?: string;
  direction?: "left" | "right" | "top" | "bottom";
  blurIntensity?: number;
  layers?: number;
}

export function ProgressiveBlur({
  className,
  direction = "left",
  blurIntensity = 1,
  layers = 8,
}: ProgressiveBlurProps) {
  const isHorizontal = direction === "left" || direction === "right";

  const positionClass = {
    left: "left-0 top-0 bottom-0",
    right: "right-0 top-0 bottom-0",
    top: "top-0 left-0 right-0",
    bottom: "bottom-0 left-0 right-0",
  }[direction];

  const gradientDirection = {
    left: "to right",
    right: "to left",
    top: "to bottom",
    bottom: "to top",
  }[direction];

  const sizeClass = isHorizontal ? "w-32 h-full" : "h-32 w-full";

  return (
    <div
      className={cn("absolute pointer-events-none z-10", positionClass, sizeClass, className)}
      aria-hidden="true"
    >
      {Array.from({ length: layers }).map((_, i) => {
        const blur = (i + 1) * blurIntensity * 1.5;
        const startPct = (i / layers) * 100;
        const endPct = ((i + 1) / layers) * 100;

        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: `linear-gradient(${gradientDirection}, black ${startPct}%, transparent ${endPct}%)`,
              WebkitMaskImage: `linear-gradient(${gradientDirection}, black ${startPct}%, transparent ${endPct}%)`,
            }}
          />
        );
      })}
    </div>
  );
}

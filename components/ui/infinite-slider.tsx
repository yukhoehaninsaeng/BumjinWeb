"use client";

import { useRef, useState, useEffect, Children } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
}

export function InfiniteSlider({
  children,
  gap = 24,
  duration = 30,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);
  const currentDuration = isPaused && durationOnHover ? durationOnHover : duration;
  const isHorizontal = direction === "horizontal";

  const childArray = Children.toArray(children);

  useEffect(() => {
    const animateProps = isHorizontal
      ? { x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }
      : { y: reverse ? ["0%", "50%"] : ["0%", "-50%"] };

    controls.start({
      ...animateProps,
      transition: {
        duration: currentDuration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [currentDuration, controls, isHorizontal, reverse]);

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => durationOnHover && setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={controls}
        className={cn(
          "flex w-max",
          isHorizontal ? "flex-row" : "flex-col"
        )}
        style={{ gap: `${gap}px` }}
      >
        {/* Original set */}
        {childArray.map((child, i) => (
          <div key={`orig-${i}`} className="flex-shrink-0">
            {child}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {childArray.map((child, i) => (
          <div key={`dupe-${i}`} aria-hidden className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

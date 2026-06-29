"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Process } from "@/types/business";

function ProcessStep({
  process,
  index,
  isLast,
}: {
  process: Process;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex gap-8"
    >
      {/* Left: number + line */}
      <div className="flex flex-col items-center shrink-0 w-12">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#111111] text-white text-[11px] font-bold shrink-0">
          {process.step}
        </div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.12 + 0.3,
              ease: "easeInOut",
            }}
            className="w-px flex-1 mt-3 origin-top"
            style={{ background: "#E5E5E5", minHeight: "48px" }}
          />
        )}
      </div>

      {/* Right: content */}
      <div className={`pb-10 ${isLast ? "" : ""}`}>
        <h3 className="text-[18px] font-bold text-[#111111] mb-2 leading-snug">
          {process.title}
        </h3>
        <p className="text-[14px] font-light text-[#666666] leading-[1.9] max-w-xl">
          {process.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ProcessSteps({ processes }: { processes: Process[] }) {
  return (
    <div>
      {processes.map((process, i) => (
        <ProcessStep
          key={process.step}
          process={process}
          index={i}
          isLast={i === processes.length - 1}
        />
      ))}
    </div>
  );
}

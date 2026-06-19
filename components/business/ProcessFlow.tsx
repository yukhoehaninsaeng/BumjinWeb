"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ProcessFlowItem } from "@/types/business";

function FlowCell({
  item,
  index,
  compact,
}: {
  item: ProcessFlowItem;
  index: number;
  compact: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="relative border-r border-b border-[#E5E5E5] bg-white p-5 lg:p-7"
    >
      <p
        className="font-black leading-none select-none mb-4 text-[#111111]/[0.06]"
        style={{ fontSize: compact ? "40px" : "52px" }}
        aria-hidden="true"
      >
        {item.step}
      </p>
      <h4
        className={`font-semibold text-[#111111] leading-snug ${
          compact ? "text-[13px]" : "text-[16px] mb-3"
        }`}
      >
        {item.title}
      </h4>
      {item.description && (
        <p className="text-[13px] font-light text-[#666666] leading-[1.8] mt-2">
          {item.description}
        </p>
      )}
    </motion.div>
  );
}

export function ProcessFlow({
  items,
  compact = false,
}: {
  items: ProcessFlowItem[];
  compact?: boolean;
}) {
  const cols = compact
    ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={`grid ${cols} border-l border-t border-[#E5E5E5]`}>
      {items.map((item, i) => (
        <FlowCell key={item.step} item={item} index={i} compact={compact} />
      ))}
    </div>
  );
}

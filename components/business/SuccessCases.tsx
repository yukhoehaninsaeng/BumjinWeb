"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Wind,
  CloudRain,
  Smartphone,
  Activity,
  type LucideIcon,
} from "lucide-react";
import type { SuccessCase } from "@/types/business";

const ICON_MAP: Record<string, LucideIcon> = {
  Wind,
  CloudRain,
  Smartphone,
  Activity,
};

function CaseCard({
  item,
  index,
}: {
  item: SuccessCase;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = ICON_MAP[item.icon] ?? Wind;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border border-[#E5E5E5] rounded-xl p-7 bg-white hover:shadow-lg transition-all duration-300 cursor-default"
    >
      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#F5F5F3] group-hover:bg-red-50 transition-colors">
        <Icon className="size-5 text-[#C0392B]" />
      </div>
      <h3 className="text-[15px] font-medium text-[#111111] mb-1.5 leading-snug">
        {item.title}
      </h3>
      <p className="text-[13px] font-light text-[#999999]">{item.subtitle}</p>
    </motion.div>
  );
}

export function SuccessCases({ cases }: { cases: SuccessCase[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {cases.map((item, i) => (
        <CaseCard key={item.id} item={item} index={i} />
      ))}
    </div>
  );
}

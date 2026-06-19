"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Speaker,
  Mic2,
  MonitorSpeaker,
  Radio,
  Monitor,
  Settings2,
  Sparkles,
  Layers,
  PenTool,
  Wind,
  CloudRain,
  Smartphone,
  Activity,
  type LucideIcon,
} from "lucide-react";
import type { Product } from "@/types/business";

const ICON_MAP: Record<string, LucideIcon> = {
  Speaker,
  Mic2,
  MonitorSpeaker,
  Radio,
  Monitor,
  Settings2,
  Sparkles,
  Layers,
  PenTool,
  Wind,
  CloudRain,
  Smartphone,
  Activity,
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = ICON_MAP[product.icon] ?? Speaker;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 2) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border border-[#E5E5E5] rounded-xl p-6 hover:border-[#C0392B] transition-all duration-300 relative overflow-hidden bg-white cursor-default"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C0392B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="mb-5 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#F5F5F3] group-hover:bg-red-50 transition-colors">
        <Icon className="size-5 text-[#666666] group-hover:text-[#C0392B] transition-colors" />
      </div>

      <p
        className="text-[10px] font-medium tracking-[2px] uppercase text-[#999999] mb-1.5"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {product.nameEn}
      </p>
      <h3 className="text-[15px] font-medium text-[#111111] mb-2">
        {product.name}
      </h3>
      <p className="text-[13px] font-light text-[#666666] leading-relaxed">
        {product.description}
      </p>
    </motion.div>
  );
}

export function ProductGrid({
  products,
  columns = 2,
}: {
  products: Product[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-4 ${
        columns === 3
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "sm:grid-cols-2"
      }`}
    >
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  );
}

"use client";

import Image from "next/image";
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
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = ICON_MAP[product.icon] ?? Speaker;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}
      className="group bg-white border-r border-b border-[#E5E5E5] flex flex-col cursor-default"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] bg-[#F6F6F4] overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="size-14 text-[#D0D0D0] transition-colors duration-300 group-hover:text-[#C0392B]/30" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-1">
        <p
          className="text-[11px] font-semibold text-[#C0392B] tracking-[0.5px]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {product.nameEn}
        </p>
        <h3 className="text-[15px] font-semibold text-[#111111] leading-snug">
          {product.name}
        </h3>
        <p className="text-[12px] text-[#999999] font-light leading-relaxed">
          {product.description}
        </p>
      </div>
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
      className={`grid border-l border-t border-[#E5E5E5] ${
        columns === 3
          ? "grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  );
}

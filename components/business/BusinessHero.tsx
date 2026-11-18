"use client";

import { motion } from "framer-motion";
import { getBusinessHeroCopy } from "@/lib/data/business";
import { useLang } from "@/lib/hooks/useLang";
import { StatsBand } from "./StatsBand";

export function BusinessHero() {
  const [lang] = useLang();
  const copy = getBusinessHeroCopy(lang);

  return (
    <section className="relative bg-[#111111] overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-16 pt-32 pb-20 lg:pt-44 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#C0392B] text-[10px] font-medium tracking-[4px] uppercase mb-7"
        >
          {copy.badge}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-black leading-[1.05] tracking-[-2px] mb-8"
          style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
        >
          {copy.line1}
          <br />
          {copy.line2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/65 text-[15px] font-light leading-[1.9] max-w-xl"
        >
          {copy.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <StatsBand stats={copy.stats} />
        </motion.div>
      </div>
    </section>
  );
}

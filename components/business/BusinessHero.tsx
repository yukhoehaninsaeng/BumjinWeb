"use client";

import { motion } from "framer-motion";
import { HERO_STATS } from "@/lib/data/business";
import { StatsBand } from "./StatsBand";

export function BusinessHero() {
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
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Business Domain
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-black leading-[1.0] tracking-[-2px] mb-8"
          style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
        >
          범진전자가
          <br />
          할 수 있는 것
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/55 text-[15px] font-light leading-[1.9] max-w-xl"
        >
          설계부터 생산, 판매까지 — 전 공정 수직계열화로 고객에게 가장
          경쟁력 있는 제품을 제공합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <StatsBand stats={HERO_STATS} />
        </motion.div>
      </div>
    </section>
  );
}

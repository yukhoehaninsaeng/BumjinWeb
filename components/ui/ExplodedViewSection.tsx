"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

/* ── Layer data ─────────────────────────────────────── */

interface LayerDef {
  id: string;
  label: string;
  title: string;
  detail: string;
  h: number;        // height in px
  baseTop: number;  // stacked offset when assembled
}

const LAYERS: LayerDef[] = [
  {
    id: "chassis",
    label: "Layer 01",
    title: "Acoustic Mesh & ABS Upper Casing",
    detail: "UV-resistant ABS polymer shell with precision-tuned steel acoustic mesh. Wall thickness: 2.4 mm.",
    h: 56,
    baseTop: 0,
  },
  {
    id: "drivers",
    label: "Layer 02",
    title: "Custom Neodymium Drivers & Silk Dome Tweeters",
    detail: "3× N50 neodymium woofers + dual 25 mm silk dome tweeters. Frequency response: 45 Hz – 40 kHz.",
    h: 80,
    baseTop: 56,
  },
  {
    id: "pcba",
    label: "Layer 03",
    title: "DSP Architecture & Class-D Amp Stage",
    detail: "40-bit floating-point DSP + 3×60 W Class-D amplifiers on a 6-layer PCB. THD+N < 0.005 %.",
    h: 90,
    baseTop: 136,
  },
  {
    id: "base",
    label: "Layer 04",
    title: "Precision Injected Base & Thermal Heatsink",
    detail: "PA6-GF30 injection-moulded base with extruded aluminium heatsink. ΔT < 12 °C at full load.",
    h: 52,
    baseTop: 226,
  },
];

const TOTAL_H = 56 + 80 + 90 + 52; // 278 px

/* ── Per-layer inner detail ─────────────────────────── */

function LayerDetail({ id, active }: { id: string; active: boolean }) {
  const glow = active ? "opacity-100" : "opacity-40";

  if (id === "chassis") {
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-500 ${glow}`}
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "7px 7px",
        }}
      />
    );
  }

  if (id === "drivers") {
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 flex items-center gap-5 px-8 transition-opacity duration-500 ${glow}`}
      >
        {[52, 52, 52, 30, 30].map((d, i) => (
          <div
            key={i}
            className="rounded-full border border-white/15 shrink-0 flex items-center justify-center"
            style={{ width: d, height: d }}
          >
            <div
              className="rounded-full border border-white/10"
              style={{ width: d * 0.48, height: d * 0.48 }}
            />
          </div>
        ))}
      </div>
    );
  }

  if (id === "pcba") {
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-500 ${glow}`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.07) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(6,182,212,0.07) 1px, transparent 1px)",
          backgroundSize: "11px 11px",
        }}
      >
        {/* IC chip blocks */}
        <div className="absolute left-7 top-1/2 -translate-y-1/2 flex gap-3">
          {[
            { w: 40, h: 30 },
            { w: 56, h: 38 },
            { w: 30, h: 30 },
            { w: 22, h: 22 },
          ].map(({ w, h }, i) => (
            <div
              key={i}
              className="border border-cyan-700/40 bg-cyan-950/30"
              style={{ width: w, height: h }}
            />
          ))}
        </div>
      </div>
    );
  }

  // base — heatsink fins
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 flex items-center gap-[3px] px-7 transition-opacity duration-500 ${glow}`}
    >
      {Array.from({ length: 28 }).map((_, i) => (
        <div key={i} className="flex-1 h-7 bg-slate-600/30" />
      ))}
    </div>
  );
}

/* ── Layer colour / border configs ─────────────────── */

const LAYER_STYLES: Record<
  string,
  { bg: string; border: string; shadow: string }
> = {
  chassis: {
    bg: "linear-gradient(to bottom, #4B5563, #374151)",
    border: "1px solid rgba(148,163,184,0.25)",
    shadow: "0 -2px 12px rgba(0,0,0,0.5)",
  },
  drivers: {
    bg: "linear-gradient(to bottom, #374151, #1F2937)",
    border: "1px solid rgba(100,116,139,0.2)",
    shadow: "none",
  },
  pcba: {
    bg: "linear-gradient(to bottom, #0c1929, #07101e)",
    border: "1px solid rgba(6,182,212,0.15)",
    shadow: "none",
  },
  base: {
    bg: "linear-gradient(to bottom, #1e293b, #0f172a)",
    border: "1px solid rgba(71,85,105,0.3)",
    shadow: "0 4px 16px rgba(0,0,0,0.6)",
  },
};

/* ── Main component ──────────────────────────────────── */

export function ExplodedViewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.25) setActiveLayer(0);
    else if (v < 0.5) setActiveLayer(1);
    else if (v < 0.75) setActiveLayer(2);
    else setActiveLayer(3);
  });

  // Per-layer y transforms (spec: Layer1 [-140], Layer2 [-45], Layer3 [45], Layer4 [140])
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const op1 = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const yMVs = [y1, y2, y3, y4];
  const opMVs = [op1, undefined, undefined, undefined];

  // Header fades in once user starts scrolling
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12], [0.4, 1]);

  return (
    <div ref={sectionRef} className="relative" style={{ minHeight: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

        {/* ── Blueprint background ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundColor: "#060B14",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 25%, rgba(6,11,20,0.88) 100%)",
          }}
        />

        {/* ── Section label (top) ── */}
        <motion.div
          style={{ opacity: headerOpacity }}
          className="absolute top-10 left-0 right-0 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <p className="text-[9px] font-bold tracking-[3px] uppercase text-cyan-400/40">
            Engineering Anatomy
          </p>
          <p className="text-[18px] font-black text-white/50 tracking-tight">
            Scroll to Disassemble
          </p>
        </motion.div>

        {/* ── Content row: layers + captions ── */}
        <div className="relative z-10 flex items-center gap-12 lg:gap-20 px-6">

          {/* Left: dimension label (desktop only) */}
          <div className="hidden xl:flex flex-col items-end gap-1 w-40 text-right select-none">
            <p className="text-[9px] font-mono text-slate-600 tracking-widest uppercase">
              Assembly ·&nbsp;Exploded
            </p>
            <p className="text-[9px] font-mono text-slate-700">Scale 1:4</p>
          </div>

          {/* Center: 4 hardware layers */}
          <div
            className="relative shrink-0"
            style={{
              width: "clamp(280px, 44vw, 480px)",
              height: `${TOTAL_H}px`,
            }}
          >
            {LAYERS.map((layer, i) => {
              const styles = LAYER_STYLES[layer.id];
              return (
                <motion.div
                  key={layer.id}
                  style={{
                    y: yMVs[i],
                    opacity: opMVs[i],
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: layer.baseTop,
                    height: layer.h,
                    background: styles.bg,
                    border: styles.border,
                    boxShadow:
                      activeLayer === i
                        ? `${styles.shadow}, 0 0 0 1px rgba(6,182,212,0.25)`
                        : styles.shadow,
                  }}
                  className="overflow-hidden transition-shadow duration-400"
                >
                  <LayerDetail id={layer.id} active={activeLayer === i} />

                  {/* Layer badge (far right) */}
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[7.5px] font-mono text-white/10 tracking-widest select-none">
                    {layer.label}
                  </span>
                </motion.div>
              );
            })}

            {/* Separation glow lines between layers */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`sep-${i}`}
                aria-hidden="true"
                className="absolute left-0 right-0 pointer-events-none"
                style={{
                  top: LAYERS[i].baseTop + LAYERS[i].h,
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.35) 50%, transparent 100%)",
                  opacity: scrollYProgress,
                }}
              />
            ))}
          </div>

          {/* Right: caption cards */}
          <div className="hidden lg:flex flex-col gap-2.5 w-60">
            {LAYERS.map((layer, i) => (
              <div
                key={layer.id}
                className={`p-4 border transition-all duration-500 ${
                  activeLayer === i
                    ? "border-cyan-500/35 bg-cyan-950/25"
                    : "border-white/[0.04] bg-white/[0.015]"
                }`}
              >
                <p
                  className={`text-[8px] font-bold tracking-[2.5px] uppercase mb-1.5 transition-colors duration-300 ${
                    activeLayer === i ? "text-cyan-400" : "text-white/18"
                  }`}
                >
                  {layer.label}
                </p>
                <p
                  className={`text-[11.5px] font-semibold leading-snug transition-colors duration-300 ${
                    activeLayer === i ? "text-white" : "text-white/22"
                  }`}
                >
                  {layer.title}
                </p>
                {activeLayer === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                    className="text-[10.5px] text-slate-400 leading-relaxed overflow-hidden"
                  >
                    {layer.detail}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom progress bar ── */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none">
          <div className="w-28 h-px bg-white/8 overflow-hidden">
            <motion.div
              className="h-full bg-cyan-400/50"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
          <p className="text-[8px] text-white/18 tracking-[2.5px] uppercase">
            Scroll to explore
          </p>
        </div>
      </div>
    </div>
  );
}

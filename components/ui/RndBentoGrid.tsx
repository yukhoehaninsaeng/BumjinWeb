"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

/* ──────────────────────────────────────────────────────
   Card 1 — Animated sine-wave oscilloscope
────────────────────────────────────────────────────── */

function SineWaveCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offsetRef = useRef(0);

  useAnimationFrame((_, delta) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    offsetRef.current += delta * 0.0006;

    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // Draw subtle grid
    ctx.strokeStyle = "rgba(6,182,212,0.08)";
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= W; x += W / 8) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y <= H; y += H / 4) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Draw primary wave
    const grad = ctx.createLinearGradient(0, 0, W, 0);
    grad.addColorStop(0, "rgba(6,182,212,0)");
    grad.addColorStop(0.3, "rgba(6,182,212,0.9)");
    grad.addColorStop(0.7, "rgba(6,182,212,0.9)");
    grad.addColorStop(1, "rgba(6,182,212,0)");

    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.8;
    ctx.shadowColor = "rgba(6,182,212,0.5)";
    ctx.shadowBlur = 6;
    ctx.beginPath();

    for (let px = 0; px <= W; px++) {
      const t = (px / W) * Math.PI * 4 + offsetRef.current * Math.PI * 2;
      const amp = H * 0.28;
      const py = H / 2 + Math.sin(t) * amp + Math.sin(t * 2.5 + 1) * amp * 0.15;
      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Secondary harmonic (dimmer)
    ctx.strokeStyle = "rgba(99,102,241,0.35)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let px = 0; px <= W; px++) {
      const t = (px / W) * Math.PI * 8 + offsetRef.current * Math.PI * 4;
      const amp = H * 0.12;
      const py = H / 2 + Math.sin(t) * amp;
      if (px === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
  });

  return (
    <div className="col-span-2 relative overflow-hidden p-6 flex flex-col gap-4 border border-white/[0.06] bg-gradient-to-br from-[#080f1e] to-[#040810]">
      {/* Label */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8.5px] font-bold tracking-[3px] uppercase text-cyan-400/50 mb-1">
            Acoustic Lab
          </p>
          <p className="text-[14px] font-bold text-white tracking-tight">
            Anechoic Chamber
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] text-slate-500 font-mono">LIVE</span>
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={560}
        height={140}
        className="w-full rounded-sm"
        style={{ height: "140px" }}
      />

      {/* Spec row */}
      <div className="flex gap-6">
        {[
          { k: "Freq Range", v: "45 Hz – 40 kHz" },
          { k: "THD+N", v: "< 0.005 %" },
          { k: "SNR", v: "≥ 105 dB" },
        ].map(({ k, v }) => (
          <div key={k}>
            <p className="text-[8px] font-bold tracking-[1.5px] uppercase text-slate-600 mb-0.5">{k}</p>
            <p className="text-[11px] font-mono text-cyan-300">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────
   Card 2 — EQ / Spectrum bar animation
────────────────────────────────────────────────────── */

const EQ_BANDS = [
  { freq: "63", base: 0.55, speed: 1.1 },
  { freq: "125", base: 0.72, speed: 0.85 },
  { freq: "250", base: 0.60, speed: 1.3 },
  { freq: "500", base: 0.78, speed: 0.9 },
  { freq: "1k", base: 0.88, speed: 1.0 },
  { freq: "2k", base: 0.93, speed: 1.2 },
  { freq: "4k", base: 0.82, speed: 0.75 },
  { freq: "8k", base: 0.65, speed: 1.4 },
  { freq: "16k", base: 0.45, speed: 1.05 },
];

function EqBarsCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tRef = useRef(0);

  useAnimationFrame((_, delta) => {
    tRef.current += delta * 0.001;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const barW = Math.floor(W / EQ_BANDS.length);
    const gap = 3;

    EQ_BANDS.forEach(({ base, speed }, i) => {
      const noise =
        Math.sin(tRef.current * speed + i * 1.3) * 0.12 +
        Math.sin(tRef.current * speed * 2.1 + i * 0.7) * 0.06;
      const h = Math.min(1, Math.max(0.05, base + noise));
      const barH = H * h;
      const x = i * barW + gap / 2;
      const y = H - barH;

      // Gradient fill
      const g = ctx.createLinearGradient(0, y, 0, H);
      g.addColorStop(0, i < 3 ? "rgba(16,185,129,0.9)" : i < 6 ? "rgba(6,182,212,0.9)" : "rgba(99,102,241,0.9)");
      g.addColorStop(1, "rgba(6,182,212,0.1)");
      ctx.fillStyle = g;
      ctx.fillRect(x, y, barW - gap, barH);

      // Peak cap
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.fillRect(x, y, barW - gap, 1.5);
    });
  });

  return (
    <div className="relative overflow-hidden p-6 flex flex-col gap-4 border border-white/[0.06] bg-gradient-to-br from-[#070d1c] to-[#030810]">
      <div>
        <p className="text-[8.5px] font-bold tracking-[3px] uppercase text-cyan-400/50 mb-1">
          DSP Engineering
        </p>
        <p className="text-[14px] font-bold text-white tracking-tight">
          40-bit Floating-Point EQ
        </p>
      </div>

      <canvas
        ref={canvasRef}
        width={240}
        height={110}
        className="w-full rounded-sm"
        style={{ height: "110px" }}
      />

      {/* Freq labels */}
      <div className="flex justify-between px-0.5">
        {EQ_BANDS.map(({ freq }) => (
          <span key={freq} className="text-[7px] font-mono text-slate-600">{freq}</span>
        ))}
      </div>

      <div className="flex gap-4 mt-1">
        {[{ k: "Bands", v: "40-bit FP" }, { k: "Latency", v: "< 2 ms" }].map(({ k, v }) => (
          <div key={k}>
            <p className="text-[8px] font-bold tracking-[1.5px] uppercase text-slate-600 mb-0.5">{k}</p>
            <p className="text-[11px] font-mono text-cyan-300">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────
   Card 3 — Pulsating thermal / radar ring
────────────────────────────────────────────────────── */

function ThermalCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tRef = useRef(0);

  useAnimationFrame((_, delta) => {
    tRef.current += delta * 0.0008;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const cx = W / 2;
    const cy = H / 2;
    const maxR = Math.min(W, H) * 0.42;

    // Background rings
    for (let r = 1; r <= 4; r++) {
      ctx.beginPath();
      ctx.arc(cx, cy, (maxR / 4) * r, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(6,182,212,0.08)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Spinning scan line
    const scanAngle = tRef.current * Math.PI * 2;
    // Draw rotating wedge sweep
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(scanAngle);
    const sweep = ctx.createLinearGradient(0, 0, maxR, 0);
    sweep.addColorStop(0, "rgba(6,182,212,0.0)");
    sweep.addColorStop(0.7, "rgba(6,182,212,0.18)");
    sweep.addColorStop(1, "rgba(6,182,212,0.0)");
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, maxR, -0.45, 0.45);
    ctx.closePath();
    ctx.fillStyle = sweep;
    ctx.fill();
    ctx.restore();

    // Rotating bright arm
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(scanAngle);
    ctx.strokeStyle = "rgba(6,182,212,0.7)";
    ctx.lineWidth = 1;
    ctx.shadowColor = "rgba(6,182,212,0.5)";
    ctx.shadowBlur = 5;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(maxR, 0);
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.restore();

    // Heat points
    const hotspots = [
      { ang: 0.8, r: 0.55, temp: 42 },
      { ang: 2.1, r: 0.7, temp: 38 },
      { ang: 3.9, r: 0.4, temp: 51 },
      { ang: 5.1, r: 0.65, temp: 35 },
    ];
    hotspots.forEach(({ ang, r, temp }) => {
      const px = cx + Math.cos(ang) * maxR * r;
      const py = cy + Math.sin(ang) * maxR * r;
      const pulse = 0.5 + 0.5 * Math.sin(tRef.current * 3.5 + ang);
      const radius = 5 + pulse * 3;

      const g = ctx.createRadialGradient(px, py, 0, px, py, radius * 2);
      const color = temp > 48 ? "255,80,80" : temp > 40 ? "255,160,0" : "16,185,129";
      g.addColorStop(0, `rgba(${color},0.7)`);
      g.addColorStop(1, `rgba(${color},0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(px, py, radius * 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(${color},0.9)`;
      ctx.beginPath();
      ctx.arc(px, py, 2, 0, Math.PI * 2);
      ctx.fill();
    });

    // Center dot
    ctx.fillStyle = "rgba(6,182,212,0.8)";
    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  return (
    <div className="relative overflow-hidden p-6 flex flex-col gap-4 border border-white/[0.06] bg-gradient-to-br from-[#090b1a] to-[#040608]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8.5px] font-bold tracking-[3px] uppercase text-orange-400/50 mb-1">
            Thermal &amp; Stress Lab
          </p>
          <p className="text-[14px] font-bold text-white tracking-tight">
            IR Thermal Scan
          </p>
        </div>
        <span className="text-[9px] font-mono text-orange-400/60">ΔT &lt; 12 °C</span>
      </div>

      <canvas
        ref={canvasRef}
        width={240}
        height={160}
        className="w-full rounded-sm"
        style={{ height: "160px" }}
      />

      <div className="flex gap-4">
        {[
          { k: "Max ΔT", v: "< 12 °C" },
          { k: "Scan rate", v: "30 fps" },
          { k: "Load", v: "Full (3×60 W)" },
        ].map(({ k, v }) => (
          <div key={k}>
            <p className="text-[8px] font-bold tracking-[1.5px] uppercase text-slate-600 mb-0.5">{k}</p>
            <p className="text-[11px] font-mono text-orange-300">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────
   Main export — 3-card bento grid
────────────────────────────────────────────────────── */

export function RndBentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.03]">
      {/* Sine wave spans full width on large, 2 cols on md */}
      <div className="md:col-span-2 lg:col-span-2">
        <SineWaveCard />
      </div>
      <EqBarsCard />
      <ThermalCard />
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ──────────────────────────────────────────────────────
   Equirectangular projection helpers
   viewBox: "0 0 800 400"
   x = (lon + 180) / 360 * 800
   y = (90  - lat) / 180 * 400
────────────────────────────────────────────────────── */

function geoToSvg(lon: number, lat: number) {
  return {
    x: ((lon + 180) / 360) * 800,
    y: ((90 - lat) / 180) * 400,
  };
}

/* ── Hub data ────────────────────────────────────────── */

type HubType = "Manufacturing" | "R&D" | "Sales";

interface GlobalHub {
  id: string;
  city: string;
  country: string;
  type: HubType;
  coords: { x: number; y: number };
  lines: string;
  targetMarket: string;
  capacity: string;
  leadTime: string;
}

const GLOBAL_HUBS: GlobalHub[] = [
  {
    id: "suwon",
    city: "Suwon",
    country: "South Korea",
    type: "Manufacturing",
    coords: geoToSvg(127.0, 37.3),      // ~(682, 117)
    lines: "SMT / Moulding / Assembly",
    targetMarket: "Global",
    capacity: "2.1 M units / yr",
    leadTime: "Lead time HQ: —",
  },
  {
    id: "dongguan",
    city: "Dongguan",
    country: "China",
    type: "Manufacturing",
    coords: geoToSvg(113.7, 23.0),      // ~(652, 149)
    lines: "SMT / PCB / Injection",
    targetMarket: "Asia-Pacific",
    capacity: "3.8 M units / yr",
    leadTime: "Lead time to EU: 18 days",
  },
  {
    id: "bacninh",
    city: "Bac Ninh",
    country: "Vietnam",
    type: "Manufacturing",
    coords: geoToSvg(106.1, 21.1),      // ~(636, 153)
    lines: "Final Assembly / QC",
    targetMarket: "EU / US",
    capacity: "1.5 M units / yr",
    leadTime: "Lead time to EU: 24 days",
  },
  {
    id: "tijuana",
    city: "Tijuana",
    country: "Mexico",
    type: "Manufacturing",
    coords: geoToSvg(-117.1, 32.5),     // ~(140, 128)
    lines: "SMT / Injection",
    targetMarket: "North America",
    capacity: "1.2 M units / yr",
    leadTime: "Lead time to US: 48 hrs",
  },
  {
    id: "sanjose",
    city: "San Jose",
    country: "United States",
    type: "Sales",
    coords: geoToSvg(-121.9, 37.3),     // ~(129, 117)
    lines: "Sales / BD",
    targetMarket: "Americas",
    capacity: "—",
    leadTime: "Response: 24 hrs",
  },
];

/* ── Continent SVG paths (equirectangular, 800×400) ─── */

const CONTINENT_PATHS = [
  // North America
  {
    id: "na",
    d: "M 33,67 L 111,40 L 142,44 L 200,55 L 284,95 L 270,120 L 250,138 L 222,143 L 207,180 L 180,170 L 167,156 L 145,140 L 133,128 L 124,95 L 89,72 Z",
  },
  // South America
  {
    id: "sa",
    d: "M 222,175 L 267,173 L 310,200 L 325,215 L 310,255 L 285,285 L 260,320 L 238,322 L 230,295 L 228,270 L 237,245 L 235,215 L 222,198 Z",
  },
  // Europe
  {
    id: "eu",
    d: "M 380,113 L 387,80 L 395,65 L 422,42 L 460,44 L 465,75 L 458,104 L 482,118 L 455,122 L 435,118 L 415,120 L 393,120 Z",
  },
  // Africa
  {
    id: "af",
    d: "M 380,113 L 393,120 L 468,118 L 510,155 L 518,190 L 490,250 L 460,278 L 435,278 L 408,260 L 385,230 L 352,200 L 347,165 L 357,135 L 370,120 Z",
  },
  // Asia (main body including Middle East, India, Russia far east)
  {
    id: "as",
    d: "M 458,104 L 482,118 L 505,112 L 518,125 L 540,140 L 556,148 L 585,158 L 615,148 L 638,153 L 652,149 L 682,117 L 715,120 L 740,95 L 778,55 L 745,38 L 700,25 L 622,18 L 533,35 L 495,55 L 475,65 L 462,44 L 450,32 L 438,48 L 440,75 L 455,104 Z",
  },
  // Southeast Asia (peninsula)
  {
    id: "sea",
    d: "M 600,155 L 625,150 L 645,165 L 645,185 L 630,188 L 610,178 Z",
  },
  // Australia
  {
    id: "au",
    d: "M 645,250 L 690,228 L 733,242 L 738,270 L 722,285 L 695,288 L 662,278 L 645,262 Z",
  },
  // Japan (small island)
  {
    id: "jp",
    d: "M 712,95 L 725,90 L 732,105 L 726,118 L 714,112 Z",
  },
  // UK / Ireland
  {
    id: "uk",
    d: "M 366,65 L 378,58 L 384,70 L 376,77 Z",
  },
  // New Zealand (tiny)
  {
    id: "nz",
    d: "M 755,295 L 762,285 L 768,295 L 762,305 Z",
  },
];

/* Arc paths between hubs (trans-Pacific and intra-Asia) */
const ARC_PATHS = [
  // Suwon → Tijuana (trans-Pacific, great-circle arcs north)
  { id: "arc1", d: `M ${GLOBAL_HUBS[0].coords.x},${GLOBAL_HUBS[0].coords.y} Q 400,8 ${GLOBAL_HUBS[3].coords.x},${GLOBAL_HUBS[3].coords.y}` },
  // Suwon → San Jose
  { id: "arc2", d: `M ${GLOBAL_HUBS[0].coords.x},${GLOBAL_HUBS[0].coords.y} Q 405,14 ${GLOBAL_HUBS[4].coords.x},${GLOBAL_HUBS[4].coords.y}` },
  // Suwon → Dongguan
  { id: "arc3", d: `M ${GLOBAL_HUBS[0].coords.x},${GLOBAL_HUBS[0].coords.y} Q 668,130 ${GLOBAL_HUBS[1].coords.x},${GLOBAL_HUBS[1].coords.y}` },
  // Dongguan → Bac Ninh
  { id: "arc4", d: `M ${GLOBAL_HUBS[1].coords.x},${GLOBAL_HUBS[1].coords.y} Q 644,149 ${GLOBAL_HUBS[2].coords.x},${GLOBAL_HUBS[2].coords.y}` },
  // Tijuana → San Jose
  { id: "arc5", d: `M ${GLOBAL_HUBS[3].coords.x},${GLOBAL_HUBS[3].coords.y} Q 134,122 ${GLOBAL_HUBS[4].coords.x},${GLOBAL_HUBS[4].coords.y}` },
];

const TYPE_COLOR: Record<HubType, string> = {
  Manufacturing: "#10b981",
  "R&D": "#6366f1",
  Sales: "#f59e0b",
};

/* ── Main component ─────────────────────────────────── */

export function GlobalHubMap() {
  const [active, setActive] = useState<GlobalHub | null>(null);

  return (
    <div className="relative w-full select-none">
      {/* 2:1 aspect ratio container */}
      <div className="relative w-full" style={{ aspectRatio: "2 / 1" }}>

        {/* ── SVG world map ── */}
        <svg
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <defs>
            {/* Glow filter for arcs */}
            <filter id="arc-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Radial gradient for markers */}
            <radialGradient id="hub-glow-mfg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="hub-glow-sales" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Continent fills */}
          {CONTINENT_PATHS.map((p) => (
            <path
              key={p.id}
              d={p.d}
              fill="#1e293b"
              stroke="#334155"
              strokeWidth="0.5"
              strokeDasharray="2 2.5"
            />
          ))}

          {/* Arc connection lines */}
          {ARC_PATHS.map((arc) => (
            <path
              key={arc.id}
              d={arc.d}
              fill="none"
              stroke="rgba(6,182,212,0.25)"
              strokeWidth="0.8"
              strokeDasharray="4 3"
              filter="url(#arc-glow)"
            />
          ))}

          {/* Hub dot halos in SVG */}
          {GLOBAL_HUBS.map((hub) => {
            const color = TYPE_COLOR[hub.type];
            return (
              <circle
                key={`halo-${hub.id}`}
                cx={hub.coords.x}
                cy={hub.coords.y}
                r="8"
                fill={hub.type === "Manufacturing" ? "url(#hub-glow-mfg)" : "url(#hub-glow-sales)"}
              />
            );
          })}
        </svg>

        {/* ── HTML overlay: interactive hub markers ── */}
        {GLOBAL_HUBS.map((hub) => {
          const xPct = (hub.coords.x / 800) * 100;
          const yPct = (hub.coords.y / 400) * 100;
          const color = TYPE_COLOR[hub.type];
          const isActive = active?.id === hub.id;

          return (
            <button
              key={hub.id}
              onClick={() => setActive(isActive ? null : hub)}
              style={{ left: `${xPct}%`, top: `${yPct}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group"
              aria-label={`${hub.city}, ${hub.country}`}
            >
              {/* Ping ring */}
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-60"
                style={{ backgroundColor: color }}
              />
              {/* Solid dot */}
              <span
                className="relative block w-3 h-3 rounded-full ring-1 ring-white/20 transition-transform duration-200 group-hover:scale-150"
                style={{ backgroundColor: color }}
              />
            </button>
          );
        })}

        {/* ── Hub detail card ── */}
        <AnimatePresence>
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute z-20 w-56 bg-slate-900/95 border border-slate-700 backdrop-blur-sm shadow-xl p-4"
              style={{
                // Position card: prefer right-side, push left if near east edge
                left: active.coords.x / 800 > 0.7
                  ? `calc(${(active.coords.x / 800) * 100}% - 15rem)`
                  : `calc(${(active.coords.x / 800) * 100}% + 1rem)`,
                top: active.coords.y / 400 > 0.65
                  ? `calc(${(active.coords.y / 400) * 100}% - 10rem)`
                  : `calc(${(active.coords.y / 400) * 100}% + 0.5rem)`,
              }}
            >
              {/* Close */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-2 right-2 text-slate-500 hover:text-white transition-colors"
              >
                <X className="size-3" />
              </button>

              {/* Header */}
              <div className="flex items-start gap-2 mb-3 pr-4">
                <span
                  className="mt-1 shrink-0 w-2 h-2 rounded-full"
                  style={{ backgroundColor: TYPE_COLOR[active.type] }}
                />
                <div>
                  <p className="text-[13px] font-bold text-white leading-tight">
                    {active.city}
                  </p>
                  <p className="text-[10px] text-slate-400">{active.country}</p>
                </div>
              </div>

              {/* Type badge */}
              <span
                className="inline-block text-[8px] font-bold tracking-[1.5px] uppercase px-2 py-0.5 mb-3"
                style={{
                  color: TYPE_COLOR[active.type],
                  border: `1px solid ${TYPE_COLOR[active.type]}40`,
                  backgroundColor: `${TYPE_COLOR[active.type]}10`,
                }}
              >
                {active.type}
              </span>

              {/* Stats */}
              <div className="space-y-2">
                {[
                  { label: "Lines", value: active.lines },
                  { label: "Capacity", value: active.capacity },
                  { label: "Market", value: active.targetMarket },
                  { label: "Speed", value: active.leadTime },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-baseline gap-2">
                    <span className="text-[9px] font-bold tracking-wide text-slate-500 uppercase shrink-0">
                      {label}
                    </span>
                    <span className="text-[10px] text-slate-200 text-right leading-tight">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap gap-4">
        {(Object.entries(TYPE_COLOR) as [HubType, string][]).map(([type, color]) => (
          <div key={type} className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
            <span className="text-[10px] text-slate-500">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

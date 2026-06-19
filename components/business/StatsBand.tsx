"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroStat } from "@/types/business";

function CountUp({ value }: { value: string }) {
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const numMatch = value.match(/\d+/);
          if (!numMatch) {
            setDisplayed(value);
            return;
          }
          const target = parseInt(numMatch[0], 10);
          const suffix = value.replace(/\d+/, "");
          const duration = 1200;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setDisplayed(Math.round(current) + suffix);
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayed}</span>;
}

export function StatsBand({ stats }: { stats: HeroStat[] }) {
  return (
    <div className="border-t border-white/10 mt-14 pt-10 grid grid-cols-3 gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-3xl lg:text-4xl font-black text-white tracking-tight">
            <CountUp value={stat.value} />
          </p>
          <p className="mt-1.5 text-[11px] font-medium tracking-[0.2em] text-white/50 uppercase">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useEffect, useRef, useCallback } from "react";
import createGlobe, { type COBEOptions } from "cobe";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 1.9,
  theta: 0.25,
  dark: 1,
  diffuse: 0.35,
  mapSamples: 20000,
  mapBrightness: 1.4,
  baseColor: [0.04, 0.04, 0.1],
  markerColor: [1.0, 0.78, 0.2],
  glowColor: [0.12, 0.28, 0.85],
  markers: [
    // HQ — Bumjin C&L, Suwon, KR
    { location: [37.244, 126.972], size: 0.08 },
    // Bumjin IND Mold Facility, Suwon, KR
    { location: [37.243, 126.969], size: 0.04 },
    // Bumjin IND Injection Molding, Anseong, KR
    { location: [37.008, 127.279], size: 0.04 },
    // BJAM MEXICANA, Tijuana, MX
    { location: [32.514, -117.038], size: 0.06 },
    // Indonesia Plant, Cikarang, ID
    { location: [-6.285, 107.14], size: 0.06 },
    // Vietnam Plant, Quang Ninh, VN
    { location: [20.948, 106.812], size: 0.06 },
    // China Plant, Huizhou, Guangdong, CN
    { location: [23.021, 114.247], size: 0.06 },
    // Hungary Plant, Lorinci, HU
    { location: [47.741, 19.673], size: 0.06 },
  ],
};

interface GlobeFeatureSectionProps {
  className?: string;
  config?: Partial<COBEOptions>;
}

export function GlobeFeatureSection({
  className,
  config = {},
}: GlobeFeatureSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(GLOBE_CONFIG.phi ?? 1.9);
  const widthRef = useRef(0);

  const onRender = useCallback(
    (state: Record<string, number>) => {
      if (!pointerInteracting.current) {
        phiRef.current += 0.003;
      }
      state["phi"] = phiRef.current;
      state["width"] = widthRef.current * 2;
      state["height"] = widthRef.current * 2;
    },
    []
  );

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      ...GLOBE_CONFIG,
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 100);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [config, onRender, onResize]);

  return (
    <div
      className={cn(
        "relative aspect-square w-full max-w-[600px] mx-auto",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            phiRef.current = phiRef.current + delta * 0.005;
            pointerInteracting.current = e.clientX;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            phiRef.current = phiRef.current + delta * 0.005;
            pointerInteracting.current = e.touches[0].clientX;
          }
        }}
        style={{ cursor: "grab" }}
      />
    </div>
  );
}

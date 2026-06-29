"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BUSINESS_DEPARTMENTS } from "@/lib/data/business";
import { ProcessFlow } from "@/components/business/ProcessFlow";
import { ProductGrid } from "@/components/business/ProductGrid";
import { ContactBand } from "@/components/business/ContactBand";
import { useAdminContent } from "@/lib/hooks/useAdminContent";

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ElectronicsPage() {
  const adminContent = useAdminContent();
  const staticDept = BUSINESS_DEPARTMENTS.find((d) => d.id === "electronics")!;
  const adminOverride = adminContent?.business?.electronics;
  const images = adminContent?.images ?? {};

  const dept = {
    ...staticDept,
    ...(adminOverride ?? {}),
    products: (adminOverride?.products ?? staticDept.products ?? []).map((p) => ({
      ...p,
      image: images[p.id] ?? undefined,
    })),
  };

  return (
    <div className="mx-auto max-w-[1280px] px-6 lg:px-16">

      {/* ── Overview ─ split column ── */}
      <section className="pt-16 lg:pt-24 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">
          <div>
            <Reveal>
              <p
                className="text-[11px] font-medium tracking-[3px] uppercase text-[#C0392B] mb-6"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {staticDept.index} &mdash; {staticDept.labelEn}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="font-black text-[#111111] leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(38px, 6vw, 76px)" }}
              >
                {dept.title.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </Reveal>
          </div>

          <div className="lg:pt-20">
            <Reveal delay={0.14}>
              <p
                className="text-[11px] font-medium tracking-[2px] uppercase text-[#CCCCCC] mb-5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {dept.tagline}
              </p>
              <p className="text-[15px] font-light text-[#666666] leading-[1.9]">
                {dept.description}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ODM ── */}
      {dept.odmBody && dept.odmFlow && (
        <section className="border-t-2 border-[#111111] pt-12 pb-16 lg:pb-24">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-6 mb-8">
              <span
                className="font-black text-[#111111] leading-none tracking-[-3px] select-none"
                style={{ fontSize: "clamp(64px, 10vw, 120px)" }}
              >
                ODM
              </span>
              <div className="sm:pb-2">
                <p className="text-[16px] font-medium text-[#333333] leading-snug">제조자 개발생산</p>
                <p
                  className="text-[13px] text-[#999999] font-light"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Original Development Manufacturing
                </p>
              </div>
            </div>
            <p className="text-[15px] font-light text-[#666666] leading-[1.9] max-w-2xl mb-10">
              {dept.odmBody}
            </p>
          </Reveal>

          <ProcessFlow items={dept.odmFlow} compact />
        </section>
      )}

      {/* ── Products ── */}
      {dept.products && dept.products.length > 0 && (
        <section className="pb-16 lg:pb-24">
          <Reveal>
            <div className="flex items-center gap-6 mb-8">
              <h3 className="text-[26px] lg:text-[32px] font-bold text-[#111111] shrink-0">
                제품 라인업
              </h3>
              <div className="flex-1 h-px bg-[#E5E5E5]" />
            </div>
          </Reveal>

          <ProductGrid products={dept.products} columns={3} />
        </section>
      )}

      {/* ── Contact ── */}
      <section className="pb-20 lg:pb-28">
        <Reveal>
          <ContactBand contacts={dept.contacts} />
        </Reveal>
      </section>
    </div>
  );
}

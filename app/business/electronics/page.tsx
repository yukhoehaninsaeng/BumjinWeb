"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { BUSINESS_DEPARTMENTS } from "@/lib/data/business";
import { ProductGrid } from "@/components/business/ProductGrid";
import { ContactBand } from "@/components/business/ContactBand";

function FadeIn({
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
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function OdmFlow({ steps }: { steps: string[] }) {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  return (
    <div className="flex flex-wrap gap-0 mt-6">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center">
          <button
            onMouseEnter={() => setHoveredStep(i)}
            onMouseLeave={() => setHoveredStep(null)}
            className={`px-4 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200 border ${
              hoveredStep === i
                ? "bg-[#C0392B] text-white border-[#C0392B] shadow-md"
                : "bg-white text-[#333333] border-[#E5E5E5] hover:border-[#C0392B]/40"
            }`}
          >
            {step}
          </button>
          {i < steps.length - 1 && (
            <ChevronRight
              className={`size-4 mx-1 transition-colors ${
                hoveredStep === i ? "text-[#C0392B]" : "text-[#CCCCCC]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function ElectronicsPage() {
  const dept = BUSINESS_DEPARTMENTS.find((d) => d.id === "electronics")!;

  return (
    <div className="mx-auto max-w-[1280px] px-6 lg:px-16 py-16 lg:py-24 space-y-20 lg:space-y-28">
      {/* Overview */}
      <section>
        <FadeIn>
          <p
            className="text-[10px] font-medium tracking-[4px] uppercase text-[#C0392B] mb-5"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {dept.index} — {dept.labelEn}
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <p
            className="text-[12px] font-medium tracking-[3px] uppercase text-[#999999] mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {dept.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-black text-[#111111] leading-[1.1] tracking-tight mb-7"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            {dept.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < dept.title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>
        </FadeIn>
        <FadeIn delay={0.16} className="max-w-2xl">
          <p className="text-[15px] font-light text-[#666666] leading-[1.9]">
            {dept.description}
          </p>
        </FadeIn>
      </section>

      {/* ODM block */}
      {dept.odmTitle && dept.odmBody && dept.odmFlow && (
        <section>
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left */}
              <div>
                <p
                  className="text-[10px] font-medium tracking-[4px] uppercase text-[#999999] mb-5"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  What is ODM
                </p>
                <h3 className="text-[26px] lg:text-[32px] font-bold text-[#111111] mb-5 leading-snug">
                  {dept.odmTitle}
                </h3>
                <p className="text-[15px] font-light text-[#666666] leading-[1.9] mb-7">
                  {dept.odmBody}
                </p>

                {/* Flow highlight box */}
                <div className="rounded-xl border border-[#E5E5E5] bg-[#F5F5F3] p-5">
                  <p
                    className="text-[10px] font-medium tracking-[3px] uppercase text-[#C0392B] mb-3"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    ODM 전 공정
                  </p>
                  <p className="text-[14px] text-[#333333] font-medium leading-relaxed">
                    {dept.odmFlow.join(" → ")}
                  </p>
                </div>
              </div>

              {/* Right: interactive flow */}
              <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8">
                <p className="text-[13px] font-medium text-[#999999] mb-3">
                  단계별 프로세스
                </p>
                <OdmFlow steps={dept.odmFlow} />
                <p className="mt-5 text-[12px] text-[#BBBBBB] font-light">
                  각 단계에 마우스를 올려보세요
                </p>
              </div>
            </div>
          </FadeIn>
        </section>
      )}

      {/* Product grid */}
      {dept.products && (
        <section>
          <FadeIn>
            <p
              className="text-[10px] font-medium tracking-[4px] uppercase text-[#999999] mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Product Lineup
            </p>
            <h3 className="text-[24px] lg:text-[30px] font-bold text-[#111111] mb-8">
              제품 라인업
            </h3>
          </FadeIn>
          <ProductGrid products={dept.products} columns={2} />
        </section>
      )}

      {/* Contact */}
      <section>
        <FadeIn>
          <p
            className="text-[10px] font-medium tracking-[4px] uppercase text-[#999999] mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Contact
          </p>
          <ContactBand contacts={dept.contacts} />
        </FadeIn>
      </section>
    </div>
  );
}

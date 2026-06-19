"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BUSINESS_DEPARTMENTS } from "@/lib/data/business";
import { ProcessSteps } from "@/components/business/ProcessSteps";
import { SuccessCases } from "@/components/business/SuccessCases";
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

export default function StartupPage() {
  const dept = BUSINESS_DEPARTMENTS.find((d) => d.id === "startup")!;

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

      {/* Process timeline */}
      {dept.processes && (
        <section>
          <FadeIn>
            <p
              className="text-[10px] font-medium tracking-[4px] uppercase text-[#999999] mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              How We Work
            </p>
            <h3 className="text-[24px] lg:text-[30px] font-bold text-[#111111] mb-10">
              4단계 협업 프로세스
            </h3>
          </FadeIn>
          <ProcessSteps processes={dept.processes} />
        </section>
      )}

      {/* Success cases */}
      {dept.successCases && (
        <section>
          <FadeIn>
            <p
              className="text-[10px] font-medium tracking-[4px] uppercase text-[#999999] mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Success Cases
            </p>
            <h3 className="text-[24px] lg:text-[30px] font-bold text-[#111111] mb-8">
              성공사례
            </h3>
          </FadeIn>
          <SuccessCases cases={dept.successCases} />
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

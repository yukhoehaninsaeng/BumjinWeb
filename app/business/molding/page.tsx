"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BUSINESS_DEPARTMENTS } from "@/lib/data/business";
import { ProductGrid } from "@/components/business/ProductGrid";
import { ContactBand } from "@/components/business/ContactBand";

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

export default function MoldingPage() {
  const dept = BUSINESS_DEPARTMENTS.find((d) => d.id === "molding")!;

  return (
    <div className="mx-auto max-w-[1280px] px-6 lg:px-16">

      {/* ── Overview ── */}
      <section className="pt-16 lg:pt-24 pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">
          <div>
            <Reveal>
              <p
                className="text-[11px] font-medium tracking-[3px] uppercase text-[#C0392B] mb-6"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {dept.index} &mdash; {dept.labelEn}
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
              <p className="text-[15px] font-light text-[#666666] leading-[1.9] mb-7">
                {dept.description}
              </p>
              {dept.tags && (
                <div className="flex flex-wrap gap-2">
                  {dept.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 border border-[#E5E5E5] text-[12px] font-medium text-[#555555] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      {dept.products && (
        <section className="border-t border-[#E5E5E5] pt-12 pb-16 lg:pb-24">
          <Reveal>
            <div className="flex items-center gap-6 mb-8">
              <h3 className="text-[26px] lg:text-[32px] font-bold text-[#111111] shrink-0">
                기술 역량
              </h3>
              <div className="flex-1 h-px bg-[#E5E5E5]" />
            </div>
          </Reveal>
          <ProductGrid products={dept.products} columns={2} />
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

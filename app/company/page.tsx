"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, ExternalLink, ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { useAdminContent } from "@/lib/hooks/useAdminContent";
import { useLang } from "@/lib/hooks/useLang";
import { getCompanyTranslations, type CompanyTranslations } from "@/lib/data/company-translations";
import type { Lang } from "@/lib/translations";
import type { VisionMeaningItem, CoreValueItem, SubsidiaryItem, HistoryEntry } from "@/lib/content-store";

/* ─── helpers ─── */

function FadeIn({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── SUB-NAV ─── */

const SUB_NAV_IDS = ["overview", "ceo", "vision", "group", "history", "location"];

function SubNav({ active, items }: { active: string; items: { id: string; label: string }[] }) {
  return (
    <nav className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`shrink-0 px-5 py-4 text-[12px] font-medium tracking-wide transition-colors border-b-[1.5px] ${
                active === id
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-400 hover:text-gray-700"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ─── SECTION 1: OVERVIEW ─── */

function OverviewSection({
  t,
  lang,
  headline,
  intro,
  coreMessage,
}: {
  t: CompanyTranslations["overview"];
  lang: Lang;
  headline?: string;
  intro?: string;
  coreMessage?: string;
}) {
  const headlineLines = headline
    ? headline.split("\n")
    : t.headlineLines;

  return (
    <section id="overview" className="bg-white">
      {/* Intro */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <FadeIn>
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-gray-400 mb-10">
            {t.eyebrow}
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            className="font-black text-gray-900 leading-[0.95] tracking-tight mb-12 lg:mb-16"
            style={{ fontSize: "clamp(48px, 7vw, 110px)" }}
          >
            {headlineLines.map((line, i) => (
              <span key={i}>
                {i === 1 ? <span className="text-red-600">{line}</span> : line}
                {i < headlineLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </FadeIn>
        <FadeIn delay={0.16} className="max-w-xl">
          <p className="text-gray-500 text-[15px] leading-relaxed">
            {intro ?? t.intro}
          </p>
        </FadeIn>
      </div>

      {/* Full-width divider */}
      <div className="h-px bg-gray-100 mx-6 lg:mx-10" />

      {/* 사훈 — Motrex-style hairline grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-0">
        <p className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-gray-500 mb-8">
          <span aria-hidden="true" className="w-3 h-[2px] bg-red-600 inline-block" />
          <span>{t.visionEyebrow}</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-l border-t border-gray-200 bg-white">
          {t.mottoItems.map((item) => (
            <div
              key={item.num}
              className="p-6 lg:p-7 border-r border-b border-gray-200 hover:bg-[#F8F9FB] transition-colors flex flex-col justify-between"
            >
              <div>
                <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-5 tabular-nums">
                  {item.num}
                </p>
                <h3 className="text-[18px] font-bold text-gray-900 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] font-medium text-gray-400 tracking-wide mb-5">
                  {item.en}
                </p>
              </div>
              <p className="text-[13px] text-gray-600 leading-[1.75] pt-4 border-t border-gray-100">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Core message block */}
      <FadeIn>
        <div
          className="mx-auto px-12 pb-20"
          style={{ maxWidth: "1200px", marginTop: "48px" }}
        >
          <div style={{ paddingTop: "40px" }}>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-start">
              <span
                className="shrink-0"
                style={{
                  color: "#999999",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  paddingTop: "4px",
                }}
              >
                {t.coreMessageLabel}
              </span>
              <p
                style={{
                  color: "#111111",
                  fontSize: "clamp(19px, 2.2vw, 27px)",
                  fontWeight: 500,
                  lineHeight: 1.75,
                }}
              >
                {coreMessage ?? t.coreMessage}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ─── SECTION 2: CEO ─── */

function CEOSection({
  t,
  ceoOpening,
  ceoParagraphs,
  ceoPhoto,
}: {
  t: CompanyTranslations["ceo"];
  ceoOpening?: string;
  ceoParagraphs?: string[];
  ceoPhoto?: string;
}) {
  const opening = ceoOpening ?? t.opening;
  const paragraphs = ceoParagraphs ?? t.paragraphs;

  return (
    <section id="ceo" className="bg-white">
      {/* Large pull-quote header */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-0 lg:pt-36">
          <FadeIn>
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-gray-400 mb-10">
              {t.eyebrow}
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2
              className="font-black text-gray-900 leading-[0.95] tracking-tight mb-16"
              style={{ fontSize: "clamp(44px, 6.5vw, 96px)" }}
            >
              {t.titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t.titleLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </FadeIn>
        </div>
      </div>

      {/* CEO content — 2 col */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Photo */}
          <FadeIn className="lg:col-span-2">
            <div className="bg-gray-100 aspect-[3/4] relative overflow-hidden">
              {ceoPhoto ? (
                <Image src={ceoPhoto} alt="CEO" fill className="object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    aria-hidden
                    className="font-black text-gray-200 select-none"
                    style={{ fontSize: "clamp(140px, 22vw, 240px)" }}
                  >
                    B
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/70 to-transparent">
                <p className="text-[18px] font-black text-white">{t.ceoTitle}</p>
                <p className="text-[12px] text-white/55 mt-0.5">
                  {t.ceoCompany}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Message */}
          <FadeIn delay={0.12} className="lg:col-span-3 pt-4">
            {/* Big opening line */}
            <p
              className="font-bold text-gray-900 leading-snug mb-10"
              style={{ fontSize: "clamp(18px, 2vw, 26px)" }}
            >
              {opening}
            </p>
            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-[14px] text-gray-600 leading-[1.85]">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-[13px] text-gray-400">{t.thanks}</p>
                <p className="text-[16px] font-black text-gray-900 mt-1">{t.ceoTitle}</p>
              </div>
              <Image
                src="/images/cen_sign.png"
                alt="CEO Signature"
                width={120}
                height={48}
                className="h-10 w-auto object-contain opacity-85"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 경영철학 — dark bg */}
      <div className="bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <FadeIn>
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-gray-400 mb-14">
              {t.philosophyEyebrow}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 divide-white/5">
            {t.philosophy.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`py-10 ${
                  i % 2 === 0 ? "lg:pr-14 lg:border-r lg:border-white/5" : "lg:pl-14"
                } ${i >= 2 ? "lg:border-t lg:border-white/5 lg:pt-10" : ""}`}
              >
                <div className="flex items-baseline gap-5 mb-6">
                  <span className="text-[11px] font-mono text-red-600 shrink-0">{item.num}</span>
                  <p className="text-[16px] lg:text-[18px] font-bold text-white leading-snug">
                    {item.title}
                  </p>
                </div>
                <ul className="space-y-3 pl-8">
                  {item.items.map((li, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-red-600 shrink-0 mt-2" />
                      <span className="text-[13px] text-gray-400 leading-relaxed">{li}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: VISION ─── */

function VisionSection({
  t,
  visionStatement,
  visionMeaning: visionMeaningProp,
  coreValues: coreValuesProp,
}: {
  t: CompanyTranslations["vision"];
  visionStatement?: string;
  visionMeaning?: VisionMeaningItem[];
  coreValues?: CoreValueItem[];
}) {
  const vm = visionMeaningProp ?? t.meaning;
  const cv = coreValuesProp ?? t.coreValues;
  const statement = visionStatement ?? t.statement;

  return (
    <section id="vision" className="bg-white">
      {/* Full-bleed Vision statement */}
      <div className="bg-red-600 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40 relative">
          <div
            aria-hidden
            className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-black text-white/[0.06] select-none pointer-events-none leading-none"
            style={{ fontSize: "clamp(160px, 28vw, 360px)" }}
          >
            Vision
          </div>
          <FadeIn>
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-red-200 mb-8">
              {t.eyebrow}
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p
              className="font-black text-white leading-[1.05] tracking-tight max-w-3xl"
              style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
            >
              {statement}
            </p>
          </FadeIn>
          <FadeIn delay={0.16} className="mt-10 max-w-2xl">
            <p className="text-red-100 text-[14px] leading-[1.9]">
              {t.description}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Goals */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {t.goals.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.07}>
              <div
                className={`py-12 ${
                  i % 2 === 0 ? "pl-0 pr-6" : "pl-6 pr-0"
                } ${i === 0 ? "lg:pl-0 lg:pr-10" : "lg:px-10"}`}
              >
                <p
                  className="font-black text-gray-900 leading-none tracking-tighter"
                  style={{ fontSize: "clamp(36px, 4vw, 60px)" }}
                >
                  {item.value}
                </p>
                <p className="text-[12px] text-gray-400 mt-2">{item.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Vision meaning */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <FadeIn>
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-gray-400 mb-10">
              {t.meaningEyebrow}
            </p>
            {vm.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className="flex gap-6 py-5 border-b border-gray-100 group"
              >
                <span className="text-[13px] font-bold text-red-600 shrink-0 w-24 pt-0.5">
                  {item.term}
                </span>
                <span className="text-[13px] text-gray-600 leading-relaxed">{item.desc}</span>
              </motion.div>
            ))}
          </FadeIn>

          {/* Core Values */}
          <FadeIn delay={0.1}>
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-gray-400 mb-10">
              {t.coreValuesEyebrow}
            </p>
            {cv.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="py-6 border-b border-gray-100 group hover:pl-2 transition-all duration-300"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-[10px] font-mono text-red-600">{item.num}</span>
                  <span className="text-[15px] font-bold text-gray-900">{item.title}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gray-300 hidden sm:block">
                    {item.en}
                  </span>
                </div>
                <p className="text-[12px] text-gray-500 leading-relaxed pl-8">{item.body}</p>
              </motion.div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 4: GROUP ─── */

function GroupSection({
  t,
  subsidiaries,
}: {
  t: CompanyTranslations["group"];
  subsidiaries?: SubsidiaryItem[];
}) {
  const data = subsidiaries ?? t.subsidiaries;
  const [selectedIdx, setSelectedIdx] = useState(0);

  const scrollToAffiliate = (idx: number) => {
    setSelectedIdx(idx);
    const el = document.getElementById(`affiliate-${idx}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="group" className="bg-[#F8F9FB] border-t border-gray-200/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-12 lg:pt-32 lg:pb-14">
        <p className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-gray-500 mb-4">
          <span aria-hidden="true" className="w-3 h-[2px] bg-red-600 inline-block" />
          <span>{t.eyebrow}</span>
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2
            className="font-bold text-gray-900 leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            {t.title}
          </h2>
          <p className="text-gray-500 text-[14px] max-w-md leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Motrex-style Affiliate Anchor Pill Tabs */}
        <div className="flex flex-wrap gap-2.5 mt-10">
          {data.map((sub, idx) => (
            <button
              key={sub.name}
              onClick={() => scrollToAffiliate(idx)}
              className={`px-5 py-2.5 text-[13px] font-semibold rounded-sm border transition-all ${
                selectedIdx === idx
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
              }`}
            >
              {sub.name}
            </button>
          ))}
        </div>
      </div>

      {/* Affiliate Cards — Motrex affiliates.php layout */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-20 lg:pb-28 space-y-10">
        {data.map((sub, si) => {
          const meta = t.affiliatesMeta[si] ?? t.affiliatesMeta[0];
          return (
            <motion.article
              id={`affiliate-${si}`}
              key={sub.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onViewportEnter={() => setSelectedIdx(si)}
              className="bg-white border border-gray-200 overflow-hidden"
            >

              {/* Affiliate Header Row */}
              <div className="px-7 py-7 lg:px-10 lg:py-8 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-red-600 mb-2">
                    {meta?.category ?? sub.en}
                  </p>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="text-[26px] lg:text-[32px] font-bold text-gray-900 tracking-tight leading-none">
                      {sub.name}
                    </h3>
                    <span className="text-[13px] font-medium text-gray-400">
                      {sub.en}
                    </span>
                  </div>
                </div>
                <Link
                  href={meta?.href ?? "/business"}
                  className="inline-flex items-center gap-2 self-start sm:self-center px-5 py-2.5 text-[12px] font-semibold text-gray-900 border border-gray-300 hover:border-red-600 hover:bg-red-600 hover:text-white transition-all rounded-sm"
                >
                  <span>{t.visitSiteLabel}</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>

              {/* 2-Column Body: Description + Stats (Left) | Spec Table (Right) */}
              <div className="grid lg:grid-cols-[1.15fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                {/* Left: Description & Key Metrics */}
                <div className="p-7 lg:p-10 flex flex-col justify-between gap-8">
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">
                      {t.descriptionLabel}
                    </p>
                    <p className="text-[16px] font-semibold text-gray-900 mb-3 leading-snug">
                      {sub.tagline}
                    </p>
                    <p className="text-[14px] text-gray-600 leading-[1.85]">
                      {sub.desc}
                    </p>
                  </div>

                  <div>
                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 border-t border-gray-100 pt-6 mb-6">
                      <div className="pr-6 border-r border-gray-100">
                        <p className="text-[28px] lg:text-[34px] font-bold text-gray-900 leading-none tracking-tight tabular-nums">
                          {sub.revenue}
                        </p>
                        <p className="text-[12px] text-gray-400 mt-1.5">{t.revenueLabel}</p>
                      </div>
                      <div className="pl-6">
                        <p className="text-[28px] lg:text-[34px] font-bold text-gray-900 leading-none tracking-tight tabular-nums">
                          {sub.employees}
                        </p>
                        <p className="text-[12px] text-gray-400 mt-1.5">{t.employeesLabel}</p>
                      </div>
                    </div>

                    {/* Roles */}
                    <div className="flex flex-wrap gap-2">
                      {sub.roles.map((role) => (
                        <span
                          key={role}
                          className="text-[11px] font-medium px-3 py-1.5 bg-[#F8F9FB] text-gray-700 border border-gray-200/80 rounded-sm"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Motrex-style Key-Value Spec Table */}
                <div className="p-7 lg:p-10 bg-[#FCFCFD]">
                  <dl className="divide-y divide-gray-200/80">
                    <div className="py-3.5 first:pt-0 grid grid-cols-[100px_1fr] gap-4 items-start">
                      <dt className="text-[12px] font-semibold text-gray-400">{t.foundedLabel}</dt>
                      <dd className="text-[13px] font-medium text-gray-900">{meta?.founded}</dd>
                    </div>
                    <div className="py-3.5 grid grid-cols-[100px_1fr] gap-4 items-start">
                      <dt className="text-[12px] font-semibold text-gray-400">{t.businessFieldLabel}</dt>
                      <dd className="text-[13px] font-medium text-gray-900 leading-relaxed">{meta?.businessField}</dd>
                    </div>
                    <div className="py-3.5 grid grid-cols-[100px_1fr] gap-4 items-start">
                      <dt className="text-[12px] font-semibold text-gray-400">{t.hqLabel}</dt>
                      <dd className="text-[13px] font-medium text-gray-900">{meta?.hq}</dd>
                    </div>
                    <div className="py-3.5 grid grid-cols-[100px_1fr] gap-4 items-start">
                      <dt className="text-[12px] font-semibold text-gray-400">{t.locationsLabel}</dt>
                      <dd className="text-[13px] text-gray-700 leading-relaxed">
                        {sub.locations.join(" · ")}
                      </dd>
                    </div>
                    <div className="py-3.5 last:pb-0 grid grid-cols-[100px_1fr] gap-4 items-start">
                      <dt className="text-[12px] font-semibold text-gray-400">{sub.productsLabel}</dt>
                      <dd className="text-[13px] text-gray-700 leading-relaxed">
                        {sub.products.join(" · ")}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Core message */}
      <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-16">
          <FadeIn>
            <p
              className="font-semibold text-gray-900 leading-relaxed border-l-4 border-red-600 pl-6"
              style={{ fontSize: "clamp(15px, 1.6vw, 19px)" }}
            >
              {t.coreMessage}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: HISTORY ─── */

function HistorySection({
  t,
  historyData,
}: {
  t: CompanyTranslations["history"];
  historyData?: HistoryEntry[];
}) {
  const data = historyData ?? t.entries;
  return (
    <section id="history" className="bg-white border-t border-gray-100">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-24">
        <FadeIn>
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-gray-400 mb-10">
            {t.eyebrow}
          </p>
        </FadeIn>
        <FadeIn delay={0.07}>
          <h2
            className="font-black text-gray-900 leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: "clamp(48px, 7vw, 110px)" }}
          >
            {t.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.14} className="max-w-md">
          <p className="text-gray-500 text-[14px] leading-relaxed">
            {t.subtitle}
          </p>
        </FadeIn>
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-28 lg:pb-36">
        <div className="relative">
          {/* Line */}
          <div className="absolute left-0 lg:left-[120px] top-0 bottom-0 w-px bg-gray-100" />

          {data.map((entry, i) => (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: Math.min(i * 0.03, 0.2),
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex gap-8 lg:gap-16 py-6 border-b border-gray-50 group"
            >
              {/* Year */}
              <div className="relative shrink-0 w-0 lg:w-[120px]">
                <span
                  className="hidden lg:block font-black text-gray-900 group-hover:text-red-600 transition-colors leading-none"
                  style={{ fontSize: "clamp(20px, 2vw, 28px)" }}
                >
                  {entry.year}
                </span>
                {/* Dot */}
                <div className="absolute right-[-5px] lg:right-[-5px] top-2 w-2 h-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-red-600 group-hover:bg-red-600 transition-all" />
              </div>

              {/* Events */}
              <div className="flex-1 pl-6 lg:pl-8">
                {/* Mobile year */}
                <p className="lg:hidden text-[13px] font-black text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                  {entry.year}
                </p>
                <div className="space-y-2">
                  {entry.events.map((ev, j) => (
                    <div key={j} className="flex gap-5 items-start">
                      <span className="text-[10px] font-mono text-red-600 shrink-0 w-5 pt-0.5">
                        {ev.month}
                      </span>
                      <span className="text-[14px] text-gray-700 leading-[1.7]">{ev.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 6: LOCATION ─── */

function LocationSection({
  t,
  locations,
}: {
  t: CompanyTranslations["location"];
  locations?: CompanyTranslations["location"]["locations"];
}) {
  const locs = locations ?? t.locations;
  const sliderRef = useRef<HTMLDivElement>(null);

  function scrollSlider(dir: -1 | 1) {
    if (!sliderRef.current) return;
    const card = sliderRef.current.firstElementChild as HTMLElement;
    const w = card ? card.offsetWidth + 16 : 360;
    sliderRef.current.scrollBy({ left: dir * w, behavior: "smooth" });
  }

  return (
    <section id="location" className="bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <FadeIn>
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-gray-400 mb-10">
            {t.eyebrow}
          </p>
        </FadeIn>
        <FadeIn delay={0.07}>
          <h2
            className="font-black text-white leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: "clamp(48px, 7vw, 110px)" }}
          >
            {t.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.14} className="max-w-md">
          <p className="text-gray-500 text-[14px] leading-relaxed">
            {t.subtitle}
          </p>
        </FadeIn>
      </div>

      <div className="pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {locs.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.06, 0.18), duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="snap-start shrink-0 w-[min(340px,80vw)] lg:w-[360px] bg-gray-900 hover:bg-gray-800 transition-colors duration-300 flex flex-col group"
              >
                {/* Google Maps embed */}
                <div className="aspect-video relative overflow-hidden">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed&hl=${t.mapHl}&z=16`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={loc.name}
                    className="grayscale-[30%]"
                  />
                  <a
                    href={`https://maps.google.com/maps?q=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[10px] font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors px-3 py-1.5 z-10"
                  >
                    {t.viewLarge} <ExternalLink className="size-2.5" />
                  </a>
                </div>

                <div className="flex-1 p-6 lg:p-8">
                  <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-red-600 mb-3">
                    {loc.type}
                  </p>
                  <p className="text-[18px] font-black text-white mb-5 leading-snug">
                    {loc.name}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="size-3.5 text-gray-600 shrink-0 mt-0.5" />
                      <span className="text-[13px] text-gray-400 leading-relaxed">{loc.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="size-3.5 text-gray-600 shrink-0" />
                      <a
                        href={`tel:${loc.phone.replace(/-/g, "")}`}
                        className="text-[13px] text-gray-400 hover:text-white transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>
                    {loc.note && (
                      <p className="text-[12px] text-gray-600 leading-relaxed">{loc.note}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Slider controls */}
          <div className="flex items-center justify-between mt-5">
            <p className="text-[11px] text-gray-700">{t.sitesCountLabel(locs.length)}</p>
            <div className="flex gap-2">
              <button
                onClick={() => scrollSlider(-1)}
                aria-label={t.prevLabel}
                className="w-9 h-9 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => scrollSlider(1)}
                aria-label={t.nextLabel}
                className="w-9 h-9 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HEADER ─── */

/* ─── PAGE HERO ─── */

function PageHero({ t }: { t: CompanyTranslations["hero"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div ref={ref} className="relative bg-gray-950 pt-36 pb-16 lg:pt-44 lg:pb-24 flex items-end overflow-hidden border-b border-white/10">
      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full"
      >
        <p className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.14em] uppercase text-gray-400 mb-4">
          <span aria-hidden="true" className="w-3 h-[2px] bg-red-600 inline-block" />
          <span>{t.eyebrow}</span>
        </p>
        <h1
          className="font-bold text-white leading-[1.06] tracking-tight mb-5"
          style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
        >
          {t.title}
        </h1>
        <p className="text-gray-400 text-[14px] lg:text-[15px] leading-relaxed max-w-md">
          {t.subtitle}
        </p>
      </motion.div>
    </div>
  );
}

/* ─── FOOTER ─── */

function CompanyFooter({ t }: { t: CompanyTranslations["footer"] }) {
  return (
    <footer className="bg-gray-950 border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Image
          src="/bumjin-logo-dark.png"
          alt="Bumjin Electronics"
          width={140}
          height={42}
          className="h-7 w-auto object-contain opacity-85"
        />
        <p className="text-gray-700 text-[11px]">
          © {new Date().getFullYear()} Bumjin Electronics Co., Ltd.
        </p>
        <Link
          href="/"
          className="flex items-center gap-1.5 text-[12px] text-gray-600 hover:text-gray-300 transition-colors"
        >
          {t.mainHome}
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */

export default function CompanyPage() {
  const [lang] = useLang();
  const [activeSection, setActiveSection] = useState("overview");
  const adminContent = useAdminContent();
  const t = getCompanyTranslations(lang);
  const co = lang === "ko" ? (adminContent?.company ?? null) : null;
  const images = adminContent?.images ?? {};

  useEffect(() => {
    const els = SUB_NAV_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => observer.observe(el!));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <SiteHeader />
      <PageHero t={t.hero} />
      <SubNav active={activeSection} items={t.subNav} />
      <main>
        <OverviewSection
          t={t.overview}
          lang={lang}
          headline={co?.overviewHeadline}
          intro={co?.overviewIntro}
          coreMessage={co?.coreMessage}
        />
        <CEOSection
          t={t.ceo}
          ceoOpening={co?.ceoOpening}
          ceoParagraphs={co?.ceoParagraphs}
          ceoPhoto={images["company-ceo"]}
        />
        <VisionSection
          t={t.vision}
          visionStatement={co?.visionStatement}
          visionMeaning={co?.visionMeaning}
          coreValues={co?.coreValues}
        />
        <GroupSection t={t.group} subsidiaries={co?.subsidiaries} />
        <HistorySection t={t.history} historyData={co?.historyData} />
        <LocationSection t={t.location} locations={co?.locations} />
      </main>
      <CompanyFooter t={t.footer} />
    </div>
  );
}

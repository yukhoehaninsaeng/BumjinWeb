"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, ExternalLink, ArrowUpRight, ChevronDown } from "lucide-react";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { useAdminContent } from "@/lib/hooks/useAdminContent";
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

const SUB_NAV = [
  { id: "overview", label: "개요" },
  { id: "ceo", label: "CEO 인사말" },
  { id: "vision", label: "비전" },
  { id: "group", label: "범진" },
  { id: "history", label: "연혁" },
  { id: "location", label: "찾아오시는 길" },
];

function SubNav({ active }: { active: string }) {
  return (
    <nav className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SUB_NAV.map(({ id, label }) => (
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

const MOTTO_ITEMS = [
  {
    num: "01",
    title: "도전과 혁신",
    en: "Challenge & Innovation",
    body: "지속적인 도전과 혁신을 통해 풍부한 가치를 창조합니다.",
  },
  {
    num: "02",
    title: "인재경영",
    en: "People Management",
    body: "범진의 미래는 인재에 달려있다는 믿음으로 인재 양성을 추구합니다.",
  },
  {
    num: "03",
    title: "고객만족",
    en: "Customer Satisfaction",
    body: "혁신적인 선도기술을 바탕으로 고객 감동을 실천합니다.",
  },
  {
    num: "04",
    title: "정도경영",
    en: "Integrity Management",
    body: "준법경영 실천을 통해 임직원, 고객 그리고 사회와의 약속을 지켜갑니다.",
  },
  {
    num: "05",
    title: "변화추구",
    en: "Pursuit of Change",
    body: "대담한 도전으로 새로운 가치를 창조하며 미래를 선도합니다.",
  },
];

function OverviewSection({ headline, intro, coreMessage }: { headline?: string; intro?: string; coreMessage?: string }) {
  const defaultHeadline = ["도전과 혁신,", "사람과 고객", "중심의 기업."];
  const defaultIntro = "범진은 글로벌 전자·제조 전문 기업으로, 음향기기와 금형·사출 분야에서 30년 이상의 기술력과 신뢰를 축적해 왔습니다.";
  const defaultCoreMessage = '"도전과 혁신, 인재와 고객 중심의 가치 실현을 통해 지속 가능한 성장을 만들어가는 기업"';

  const headlineLines = headline
    ? headline.split("\n")
    : defaultHeadline;

  return (
    <section id="overview" className="bg-white">
      {/* Intro */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <FadeIn>
          <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-10">
            About Us
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
            {intro ?? defaultIntro}
          </p>
        </FadeIn>
      </div>

      {/* Full-width divider */}
      <div className="h-px bg-gray-100 mx-6 lg:mx-10" />

      {/* 사훈 — arch layout */}
      <div className="mx-auto pt-20 pb-0 px-12" style={{ maxWidth: "1200px" }}>
        <FadeIn>
          <p
            className="font-semibold tracking-[0.4em] uppercase mb-16"
            style={{ fontSize: "11px", color: "#999999" }}
          >
            Vision
          </p>
        </FadeIn>

        {/* Horizontal scroll wrapper for narrow viewports */}
        <div className="overflow-x-auto">
          <div style={{ minWidth: "680px" }}>
            {/* All 5 arches in a single SVG for seamless stroke alignment */}
            <FadeIn>
              <svg
                viewBox="0 0 1000 115"
                className="w-full block"
                aria-hidden="true"
                style={{ aspectRatio: "1000 / 115" }}
              >
                {MOTTO_ITEMS.map((item, i) => (
                  <g key={i}>
                    {/* Arch: M start-x,base A radius radius 0 0 0 end-x,base */}
                    <path
                      d={`M ${i * 200} 108 A 100 100 0 0 0 ${i * 200 + 200} 108`}
                      stroke="#111111"
                      strokeWidth="1"
                      fill="none"
                    />
                    {/* Junction dot between arches */}
                    {i > 0 && (
                      <circle cx={i * 200} cy={108} r="3.5" fill="#111111" />
                    )}
                    {/* Korean keyword centered inside arch */}
                    <text
                      x={i * 200 + 100}
                      y={78}
                      textAnchor="middle"
                      fontFamily="Noto Sans KR, sans-serif"
                      fontSize={31}
                      fontWeight={700}
                      fill="#c0392b"
                    >
                      {item.title}
                    </text>
                  </g>
                ))}
              </svg>
            </FadeIn>

            {/* Detail columns */}
            <div className="grid grid-cols-5 divide-x divide-[#e8e8e8] border-t border-[#e8e8e8]">
              {MOTTO_ITEMS.map((item, i) => (
                <motion.div
                  key={item.en}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ padding: "24px 20px 40px" }}
                >
                  <p
                    style={{
                      color: "#c0392b",
                      fontSize: "11px",
                      letterSpacing: "2px",
                      marginBottom: "8px",
                    }}
                  >
                    {item.num}
                  </p>
                  <p
                    style={{
                      color: "#111111",
                      fontSize: "clamp(16px, 1.7vw, 24px)",
                      fontWeight: 500,
                      marginBottom: "6px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.en}
                  </p>
                  <p
                    style={{
                      color: "#999999",
                      fontSize: "16px",
                      marginBottom: "14px",
                    }}
                  >
                    {item.title}
                  </p>
                  <div
                    style={{
                      height: "1px",
                      backgroundColor: "#e0e0e0",
                      marginBottom: "14px",
                    }}
                  />
                  <p
                    style={{
                      color: "#666666",
                      fontSize: "15px",
                      fontWeight: 400,
                      lineHeight: 1.8,
                    }}
                  >
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
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
                Core Message
              </span>
              <p
                style={{
                  color: "#111111",
                  fontSize: "clamp(19px, 2.2vw, 27px)",
                  fontWeight: 500,
                  lineHeight: 1.75,
                }}
              >
                {coreMessage ?? defaultCoreMessage}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ─── SECTION 2: CEO ─── */

const CEO_PARAGRAPHS = [
  "범진은 고객의 행복한 삶이라는 가치 실현을 위해 끊임없이 도전하며 성장해 왔습니다.",
  "1991년 창립 이후 범진은 견고한 기술력과 투명한 경영을 바탕으로 국내 시장에서 경쟁력을 확보하고, 세계 각국에 생산기지를 구축하며 음향기기 및 금형·사출 분야의 전문 기업으로 성장해 왔습니다. 모두가 불가능하다고 했던 꿈을 현실로 만들어 온 지난 시간처럼, 범진은 미래를 향한 도전을 멈추지 않을 것입니다.",
  "범진은 단순한 외형적 성장에 만족하지 않습니다. 지속적인 투자와 연구개발을 통해 고객에게 더 큰 가치를 제공하고, 글로벌 시장에서 신뢰받는 기업으로 자리매김하기 위해 최선을 다하고 있습니다. 고객의 성공이 곧 우리의 성공이라는 믿음 아래 최고의 품질과 혁신적인 기술로 고객 만족을 실현해 나가겠습니다.",
  "또한 범진은 고객, 임직원, 협력사와 함께 성장하는 기업을 지향합니다. 신뢰와 투명성을 바탕으로 정도경영을 실천하며, 인재를 소중히 여기고 사회적 책임을 다하는 기업으로서 지속 가능한 미래를 만들어 가겠습니다.",
  "저희 임직원 모두는 현재의 자부심을 지키며 미래에 대한 확고한 비전으로 새로운 내일을 향해 나아가겠습니다.",
  "앞으로도 범진의 도전과 성장에 변함없는 관심과 성원을 부탁드립니다.",
];

const MGMT_PHILOSOPHY = [
  {
    num: "01",
    title: "인재를 소중하게 생각하며",
    items: [
      "고객과 직원의 풍요로운 삶과 행복을 최우선으로 생각합니다.",
      "인재 육성을 통해 기업과 직원이 함께 성장하는 문화를 만들어 갑니다.",
      "최고의 인재가 주인의식을 가지고 역량을 발휘할 수 있는 일터를 조성합니다.",
    ],
  },
  {
    num: "02",
    title: "법과 윤리를 준수하고",
    items: [
      "신뢰와 투명성을 바탕으로 정도경영을 실천합니다.",
      "성실한 납세와 책임 있는 경영으로 국가경제 발전에 기여합니다.",
    ],
  },
  {
    num: "03",
    title: "최고의 제품으로",
    items: [
      "고객에게 최고의 만족을 제공하는 혁신적인 기술과 제품을 개발합니다.",
      "삶의 질 향상에 기여하는 기술 개발을 지속적으로 추진합니다.",
      "탁월한 품질과 브랜드 가치로 고객이 먼저 인정하는 제품을 만들어 갑니다.",
    ],
  },
  {
    num: "04",
    title: "기업가치를 향상시킨다",
    items: [
      "사회적 가치 창출과 혁신을 통해 지속 가능한 성장을 추구합니다.",
      "업계를 선도하는 기업으로 성장하여 미래 시장 경쟁력을 확보합니다.",
      "경쟁사가 배우고 싶어 하는 모범적인 기업으로 발전해 나가겠습니다.",
    ],
  },
];

function CEOSection({ ceoOpening, ceoParagraphs, ceoPhoto }: { ceoOpening?: string; ceoParagraphs?: string[]; ceoPhoto?: string }) {
  const opening = ceoOpening ?? CEO_PARAGRAPHS[0];
  const paragraphs = ceoParagraphs ?? CEO_PARAGRAPHS.slice(1);

  return (
    <section id="ceo" className="bg-white">
      {/* Large pull-quote header */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-0 lg:pt-36">
          <FadeIn>
            <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-10">
              CEO Message
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2
              className="font-black text-gray-900 leading-[0.95] tracking-tight mb-16"
              style={{ fontSize: "clamp(44px, 6.5vw, 96px)" }}
            >
              CEO
              <br />
              인사말
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
                <p className="text-[18px] font-black text-white">대표이사</p>
                <p className="text-[12px] text-white/55 mt-0.5">
                  범진전자(주) · 범진아이엔디(주)
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
                <p className="text-[13px] text-gray-400">감사합니다.</p>
                <p className="text-[16px] font-black text-gray-900 mt-1">대표이사</p>
              </div>
              <Image
                src="/bumjin%20icon.jpg"
                alt="Bumjin Electronics"
                width={80}
                height={24}
                className="h-6 w-auto object-contain opacity-20"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 경영철학 — dark bg */}
      <div className="bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <FadeIn>
            <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-gray-600 mb-14">
              경영철학
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 divide-white/5">
            {MGMT_PHILOSOPHY.map((item, i) => (
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

const VISION_MEANING = [
  { term: "범진은", desc: "글로벌 범진 전체를 의미하며, 모든 사업과 성장의 중심이 되는 우리 모두를 뜻합니다." },
  { term: "고객은", desc: "고객, 협력사, 주주 등 범진과 함께하는 모든 파트너를 의미합니다." },
  { term: "범진인은", desc: "범진의 모든 사업을 이끌어가는 구성원 전체를 의미합니다." },
  { term: "동행으로는", desc: "핵심가치의 실천을 통해 고객을 감동시키고 일류 경쟁력을 확보하는 것을 의미합니다." },
  { term: "성장한다는", desc: "도전과 혁신을 통한 지속성장으로 백년기업을 추구하고 구성원의 행복과 가치를 실현하는 것을 의미합니다." },
];

const CORE_VALUES = [
  { num: "01", title: "고객 최우선", en: "Customer First", body: "최고의 제품과 최상의 서비스를 제공하는 것을 최우선으로 하며, 범진의 모든 가치 중심에 고객을 두고 고객감동 문화를 만들어갑니다." },
  { num: "02", title: "인재존중과 열린 조직문화", en: "People & Culture", body: "기업의 기본은 사람이라는 신념 아래 우수한 인재를 육성하고, 구성원들이 열정과 꿈을 펼칠 수 있는 행복한 회사를 만들어갑니다." },
  { num: "03", title: "도전과 실행", en: "Challenge & Execution", body: "급변하는 글로벌 경영환경 속에서도 기존의 틀을 뛰어넘는 차별화된 아이디어와 창의적인 실행력으로 목표를 달성합니다." },
  { num: "04", title: "열린 소통과 협력", en: "Communication & Partnership", body: "고객, 협력사, 그리고 내부 조직 간의 원활한 소통과 협력을 통해 조직 발전의 시너지 효과를 창출합니다." },
  { num: "05", title: "투명·정도경영", en: "Integrity Management", body: "고객과 구성원의 신뢰를 바탕으로 투명경영과 준법경영을 실천하며, 사회적 책임을 다하는 지속가능한 기업으로 성장합니다." },
];

function VisionSection({
  visionStatement,
  visionMeaning: visionMeaningProp,
  coreValues: coreValuesProp,
}: {
  visionStatement?: string;
  visionMeaning?: VisionMeaningItem[];
  coreValues?: CoreValueItem[];
}) {
  const vm = visionMeaningProp ?? VISION_MEANING;
  const cv = coreValuesProp ?? CORE_VALUES;
  const statement = visionStatement ?? '"범진은 고객과 범진人의 동행으로 성장한다."';

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
            <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-red-200 mb-8">
              Vision 2025
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
              Vision 2025는 2025년까지 매출 1조 달성을 목표로 백년기업으로 성장 가능한 핵심
              사업군을 발굴하고, R&amp;D 및 인프라를 지속적으로 발전시키며, 중견기업으로 도약하기
              위한 인재 육성과 활기찬 조직문화를 구축하여 고객과 함께 성장하는 미래를
              만들어갑니다.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Goals */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {[
            { value: "1조", label: "2025 매출 목표" },
            { value: "100년", label: "장기 목표" },
            { value: "30+", label: "창립 연수" },
            { value: "6개국", label: "글로벌 생산 거점" },
          ].map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.07}>
              <div className="py-12 px-6 lg:px-10 first:pl-0">
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
            <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-10">
              비전의 의미
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
                <span className="text-[13px] font-bold text-red-600 shrink-0 w-20 pt-0.5">
                  {item.term}
                </span>
                <span className="text-[13px] text-gray-600 leading-relaxed">{item.desc}</span>
              </motion.div>
            ))}
          </FadeIn>

          {/* Core Values */}
          <FadeIn delay={0.1}>
            <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-10">
              핵심가치
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

const SUBSIDIARIES = [
  {
    name: "범진전자",
    en: "Bumjin Electronics",
    tagline: "글로벌 전자제품 통합 제조 솔루션",
    desc: "범진전자는 글로벌 전자제품 제조 전문 기업으로 연구개발부터 생산, 품질관리까지 통합 제조 솔루션을 제공합니다.",
    locations: ["범진전자 (한국)", "범진전자 중국", "범진전자 베트남", "범진전자 인도네시아"],
    revenue: "3,578억",
    employees: "2,150",
    productsLabel: "주력 제품",
    products: ["Sound Bar", "Speaker", "Home Theater"],
    roles: ["전자제품 연구개발", "ODM/OEM 생산", "글로벌 생산 및 품질관리"],
    dark: true,
  },
  {
    name: "범진IND",
    en: "Bumjin IND",
    tagline: "정밀 금형·사출성형 핵심 부품 공급",
    desc: "범진IND는 금형 설계·제작 및 사출성형 분야의 전문 기업으로 생활가전과 자동차 산업에 필요한 핵심 부품을 공급하고 있습니다.",
    locations: ["범진IND 금형·성형사업장", "범진IND 멕시코", "범진IND 헝가리"],
    revenue: "2,069억",
    employees: "1,200",
    productsLabel: "주력 사업",
    products: ["금형 설계·제작", "생활가전 사출성형", "자동차 부품 사출성형"],
    roles: ["정밀 금형 개발", "사출성형 생산", "글로벌 제조 지원"],
    dark: false,
  },
];

function GroupSection({ subsidiaries }: { subsidiaries?: SubsidiaryItem[] }) {
  const data = subsidiaries ?? SUBSIDIARIES;
  return (
    <section id="group" className="bg-white">
      <div className="border-t border-gray-100 mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <FadeIn>
          <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-10">
            Bumjin Group
          </p>
        </FadeIn>
        <FadeIn delay={0.07}>
          <h2
            className="font-black text-gray-900 leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(48px, 7vw, 110px)" }}
          >
            범진
          </h2>
        </FadeIn>
      </div>

      {/* Subsidiaries — alternating full-bleed layout */}
      {data.map((sub, si) => (
        <motion.div
          key={sub.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${sub.dark ? "bg-gray-950" : "bg-gray-50"} border-t border-gray-100`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 ${si % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              {/* Text */}
              <div className={si % 2 === 1 ? "lg:order-2" : ""}>
                <FadeIn delay={0.05}>
                  <p className={`text-[10px] font-semibold tracking-[0.35em] uppercase mb-3 ${sub.dark ? "text-gray-600" : "text-gray-400"}`}>
                    {sub.en}
                  </p>
                  <p
                    className={`font-black leading-tight tracking-tight mb-3 ${sub.dark ? "text-white" : "text-gray-900"}`}
                    style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}
                  >
                    {sub.name}
                  </p>
                  <p className="text-red-500 text-[13px] font-semibold mb-6">{sub.tagline}</p>
                  <p className={`text-[14px] leading-[1.85] mb-10 ${sub.dark ? "text-gray-400" : "text-gray-600"}`}>
                    {sub.desc}
                  </p>
                </FadeIn>

                {/* Stats */}
                <FadeIn delay={0.1}>
                  <div className={`grid grid-cols-2 gap-0 border-t ${sub.dark ? "border-white/10" : "border-gray-200"}`}>
                    <div className={`py-7 pr-8 border-r ${sub.dark ? "border-white/10" : "border-gray-200"}`}>
                      <p
                        className={`font-black leading-none tracking-tighter ${sub.dark ? "text-white" : "text-gray-900"}`}
                        style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
                      >
                        {sub.revenue}
                      </p>
                      <p className={`text-[11px] mt-2 ${sub.dark ? "text-gray-500" : "text-gray-400"}`}>매출</p>
                    </div>
                    <div className="py-7 pl-8">
                      <p
                        className={`font-black leading-none tracking-tighter ${sub.dark ? "text-white" : "text-gray-900"}`}
                        style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
                      >
                        {sub.employees}
                      </p>
                      <p className={`text-[11px] mt-2 ${sub.dark ? "text-gray-500" : "text-gray-400"}`}>임직원</p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Details card */}
              <div className={si % 2 === 1 ? "lg:order-1" : ""}>
                <FadeIn delay={0.15}>
                  <div className={`rounded-none border ${sub.dark ? "border-white/10 bg-white/5" : "border-gray-200 bg-white"} p-8 lg:p-10`}>
                    {/* Locations */}
                    <div className="mb-8">
                      <p className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-4 ${sub.dark ? "text-gray-500" : "text-gray-400"}`}>
                        사업장
                      </p>
                      <ul className="space-y-2.5">
                        {sub.locations.map((loc) => (
                          <li key={loc} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                            <span className={`text-[13px] ${sub.dark ? "text-gray-300" : "text-gray-700"}`}>{loc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`h-px mb-8 ${sub.dark ? "bg-white/10" : "bg-gray-100"}`} />

                    {/* Products */}
                    <div className="mb-8">
                      <p className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-4 ${sub.dark ? "text-gray-500" : "text-gray-400"}`}>
                        {sub.productsLabel}
                      </p>
                      <ul className="space-y-2.5">
                        {sub.products.map((p) => (
                          <li key={p} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                            <span className={`text-[13px] ${sub.dark ? "text-gray-300" : "text-gray-700"}`}>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`h-px mb-8 ${sub.dark ? "bg-white/10" : "bg-gray-100"}`} />

                    {/* Roles */}
                    <div>
                      <p className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-4 ${sub.dark ? "text-gray-500" : "text-gray-400"}`}>
                        주요 역할
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {sub.roles.map((role) => (
                          <span
                            key={role}
                            className={`text-[11px] font-medium px-3 py-1.5 ${
                              sub.dark
                                ? "bg-white/10 text-gray-300"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Core message */}
      <div className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
          <FadeIn>
            <p
              className="font-bold text-gray-900 leading-relaxed border-l-4 border-red-600 pl-6"
              style={{ fontSize: "clamp(15px, 1.8vw, 20px)" }}
            >
              "연구개발, 생산, 금형, 사출성형까지 아우르는 글로벌 제조 밸류체인을 구축하여
              고객의 성공을 지원합니다."
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 5: HISTORY ─── */

const HISTORY_DATA = [
  { year: "2023", events: [{ month: "02", text: "DENON 거래 개시 (AV Receiver 생산)" }] },
  { year: "2019", events: [{ month: "10", text: "범진전자베트남 유한공사 설립" }] },
  { year: "2018", events: [{ month: "01", text: "멀티미디어연구소 설립 (사운드바 자체 개발)" }] },
  { year: "2017", events: [{ month: "12", text: "범진 신사옥 신축 완공" }] },
  { year: "2016", events: [{ month: "12", text: "제53회 무역의 날 3,000만불 수출의 탑 수상" }] },
  { year: "2015", events: [{ month: "12", text: "블루투스 스피커 출시 (자사 브랜드 : TONN)" }] },
  {
    year: "2014",
    events: [
      { month: "12", text: "삼성전자(주) 자랑스런 삼성인상 특별상 수상" },
      { month: "08", text: "헝가리범진전자 KFT 설립" },
      { month: "02", text: "삼성전자(주) 올해의 강소기업 인증" },
    ],
  },
  { year: "2013", events: [{ month: "07", text: "범진아이엔디(주) 수원공장 신축 이전" }] },
  { year: "2011", events: [{ month: "11", text: "제48회 무역의 날 500만불 수출의 탑 수상" }] },
  { year: "2010", events: [{ month: "04", text: "범진전자 인도네시아 설립 (스피커시스템, 사출)" }] },
  {
    year: "2008",
    events: [
      { month: "09", text: "범진시엔엘(주) 기업부설연구소 인증" },
      { month: "08", text: "범진시엔엘(주) 안산공장 신축 이전" },
      { month: "01", text: "천진범진전자유한공사 설립" },
    ],
  },
  { year: "2007", events: [{ month: "09", text: "범진공업(주) 기업부설연구소 인증" }] },
  { year: "2005", events: [{ month: "04", text: "범진공업(주) 성형사업부 설립" }] },
  {
    year: "2004",
    events: [
      { month: "08", text: "중국범진전자유한공사 설립 (스피커시스템)" },
      { month: "05", text: "범진전자(주) 설립 (스피커시스템)" },
    ],
  },
  { year: "1991", events: [{ month: "10", text: "범진공업사 설립 (금형, 서울 영등포 소재)" }] },
];

function HistorySection({ historyData }: { historyData?: HistoryEntry[] }) {
  const data = historyData ?? HISTORY_DATA;
  return (
    <section id="history" className="bg-white border-t border-gray-100">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-24">
        <FadeIn>
          <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-gray-400 mb-10">
            History
          </p>
        </FadeIn>
        <FadeIn delay={0.07}>
          <h2
            className="font-black text-gray-900 leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: "clamp(48px, 7vw, 110px)" }}
          >
            연혁
          </h2>
        </FadeIn>
        <FadeIn delay={0.14} className="max-w-md">
          <p className="text-gray-500 text-[14px] leading-relaxed">
            1991년 창립 이후 지속적인 도전과 혁신으로 성장해 온 범진의 발자취입니다.
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

const LOCATION_DATA = [
  {
    name: "범진전자 수원사업장",
    type: "본사 · 전자사업장",
    address: "경기도 수원시 권선구 산업로155번길 217 (고색동)",
    phone: "031-493-9415",
    note: "1호선 고색역 인근",
  },
  {
    name: "범진IND 금형사업장",
    type: "금형 제조",
    address: "경기도 수원시 권선구 고색동",
    phone: "031-676-1461",
    note: "금형 설계 및 제작 전문 사업장",
  },
  {
    name: "범진IND 성형사업장",
    type: "사출성형 제조",
    address: "경기도 안성시",
    phone: "031-210-4930",
    note: "생활가전·자동차 부품 사출성형",
  },
];

function LocationSection({ locations }: { locations?: typeof LOCATION_DATA }) {
  const locs = locations ?? LOCATION_DATA;

  return (
    <section id="location" className="bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-24">
        <FadeIn>
          <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-gray-600 mb-10">
            Location
          </p>
        </FadeIn>
        <FadeIn delay={0.07}>
          <h2
            className="font-black text-white leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: "clamp(48px, 7vw, 110px)" }}
          >
            찾아오시는 길
          </h2>
        </FadeIn>
        <FadeIn delay={0.14} className="max-w-md">
          <p className="text-gray-500 text-[14px] leading-relaxed">
            범진의 사업장을 방문하시기 전 아래 정보를 확인해 주세요.
          </p>
        </FadeIn>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-28 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10">
          {locs.map((loc, i) => (
            <FadeIn key={loc.name} delay={i * 0.08}>
              <div className="bg-gray-950 p-8 lg:p-10 h-full flex flex-col group hover:bg-gray-900 transition-colors duration-300">
                {/* Google Maps embed */}
                <div className="aspect-video relative overflow-hidden mb-8">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed&hl=ko&z=16`}
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
                    크게 보기 <ExternalLink className="size-2.5" />
                  </a>
                </div>

                <div className="flex-1">
                  <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-red-600 mb-3">
                    {loc.type}
                  </p>
                  <p className="text-[18px] font-black text-white mb-6 leading-snug">
                    {loc.name}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="size-3.5 text-gray-600 shrink-0 mt-0.5" />
                      <span className="text-[13px] text-gray-400 leading-relaxed">
                        {loc.address}
                      </span>
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
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HEADER ─── */

/* ─── PAGE HERO ─── */

function PageHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={ref} className="relative bg-gray-950 min-h-[90vh] flex items-end overflow-hidden">
      {/* Subtle animated gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-lines opacity-[0.04]" />
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 60%, rgba(232,0,29,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Large background text */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 font-black leading-none text-white/[0.025] select-none pointer-events-none overflow-hidden"
        style={{ fontSize: "clamp(200px, 35vw, 520px)" }}
      >
        BJ
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full pt-40 pb-20 lg:pb-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-[11px] font-semibold tracking-[0.45em] uppercase text-gray-500 mb-8"
        >
          Company Introduction
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="font-black text-white leading-[0.9] tracking-tight mb-8"
          style={{ fontSize: "clamp(60px, 11vw, 160px)" }}
        >
          회사소개
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-6"
        >
          <p className="text-gray-500 text-[14px] leading-relaxed max-w-xs">
            1991년 창립 이후 도전과 혁신으로 성장해 온 범진을 소개합니다.
          </p>
          <ChevronDown className="size-5 text-gray-600 animate-bounce shrink-0" />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── FOOTER ─── */

function CompanyFooter() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Image
          src="/bumjin%20icon.jpg"
          alt="Bumjin Electronics"
          width={120}
          height={36}
          className="h-8 w-auto object-contain brightness-0 invert opacity-40"
        />
        <p className="text-gray-700 text-[11px]">
          © {new Date().getFullYear()} Bumjin Electronics Co., Ltd.
        </p>
        <Link
          href="/"
          className="flex items-center gap-1.5 text-[12px] text-gray-600 hover:text-gray-300 transition-colors"
        >
          메인 홈페이지
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */

export default function CompanyPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const adminContent = useAdminContent();
  const co = adminContent?.company ?? null;
  const images = adminContent?.images ?? {};

  useEffect(() => {
    const els = SUB_NAV.map(({ id }) => document.getElementById(id)).filter(Boolean);
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
      <PageHero />
      <SubNav active={activeSection} />
      <main>
        <OverviewSection
          headline={co?.overviewHeadline}
          intro={co?.overviewIntro}
          coreMessage={co?.coreMessage}
        />
        <CEOSection
          ceoOpening={co?.ceoOpening}
          ceoParagraphs={co?.ceoParagraphs}
          ceoPhoto={images["company-ceo"]}
        />
        <VisionSection
          visionStatement={co?.visionStatement}
          visionMeaning={co?.visionMeaning}
          coreValues={co?.coreValues}
        />
        <GroupSection subsidiaries={co?.subsidiaries} />
        <HistorySection historyData={co?.historyData} />
        <LocationSection locations={co?.locations} />
      </main>
      <CompanyFooter />
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Phone,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

/* ─── helpers ─── */

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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-gray-400 mb-6">
      {children}
    </p>
  );
}

/* ─── SUB-NAVIGATION ─── */

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
    <nav className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center overflow-x-auto gap-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SUB_NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`shrink-0 px-5 py-4 text-[13px] font-medium border-b-2 transition-colors ${
                active === id
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-500 hover:text-gray-900"
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
    title: "도전과 혁신",
    body: "지속적인 도전과 혁신을 통해 풍부한 가치를 창조합니다.",
  },
  {
    title: "인재경영",
    body: "범진의 미래는 인재에 달려있다는 믿음으로 인재 양성을 추구합니다.",
  },
  {
    title: "고객만족",
    body: "혁신적인 선도기술을 바탕으로 고객 감동을 실천합니다.",
  },
  {
    title: "정도경영",
    body: "준법경영 실천을 통해 임직원, 고객 그리고 사회와의 약속을 지켜갑니다.",
  },
  {
    title: "변화추구",
    body: "대담한 도전으로 새로운 가치를 창조하며 미래를 선도합니다.",
  },
];

function OverviewSection() {
  return (
    <section id="overview" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionLabel>About Us</SectionLabel>
          <h2
            className="font-black text-gray-900 leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(36px, 4.5vw, 68px)" }}
          >
            도전과 혁신으로
            <br />
            <span className="text-red-600">미래를 만들어갑니다</span>
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mb-16">
            범진은 글로벌 전자·제조 전문 기업으로, 음향기기와 금형·사출 분야에서
            30년 이상의 기술력과 신뢰를 축적해 왔습니다.
          </p>
        </FadeIn>

        {/* 사훈 */}
        <FadeIn delay={0.05}>
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-gray-400 mb-6">
            사훈
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-gray-200 divide-y sm:divide-y-0 lg:divide-x divide-gray-200 mb-16">
          {MOTTO_ITEMS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.07}>
              <div className="p-8 lg:p-9 group hover:bg-red-600 transition-colors h-full">
                <p className="text-[11px] font-mono text-gray-300 group-hover:text-red-200 mb-4 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-[15px] font-bold text-gray-900 group-hover:text-white mb-3 leading-snug">
                  {item.title}
                </p>
                <p className="text-[13px] text-gray-500 group-hover:text-red-100 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Core message */}
        <FadeIn delay={0.15}>
          <div className="bg-gray-950 px-8 py-10 lg:px-12 lg:py-12">
            <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-gray-500 mb-4">
              Core Message
            </p>
            <p className="text-white text-[18px] lg:text-[22px] font-bold leading-relaxed">
              "도전과 혁신, 인재와 고객 중심의 가치 실현을 통해
              <br className="hidden lg:block" />
              지속 가능한 성장을 만들어가는 기업"
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── SECTION 2: CEO ─── */

const CEO_PARAGRAPHS = [
  "범진은 고객의 행복한 삶이라는 가치 실현을 위해 끊임없이 도전하며 성장해 왔습니다.",
  "1991년 창립 이후 범진은 견고한 기술력과 투명한 경영을 바탕으로 국내 시장에서 경쟁력을 확보하고, 세계 각국에 생산기지를 구축하며 음향기기 및 금형·사출 분야의 전문 기업으로 성장해 왔습니다. 모두가 불가능하다고 했던 꿈을 현실로 만들어 온 지난 시간처럼, 범진은 미래를 향한 도전을 멈추지 않을 것입니다.",
  "범진은 단순한 외형적 성장에 만족하지 않습니다. 지속적인 투자와 연구개발을 통해 고객에게 더 큰 가치를 제공하고, 글로벌 시장에서 신뢰받는 기업으로 자리매김하기 위해 최선을 다하고 있습니다. 고객의 성공이 곧 우리의 성공이라는 믿음 아래 최고의 품질과 혁신적인 기술로 고객 만족을 실현해 나가겠습니다.",
  "또한 범진은 고객, 임직원, 협력사와 함께 성장하는 기업을 지향합니다. 신뢰와 투명성을 바탕으로 정도경영을 실천하며, 인재를 소중히 여기고 사회적 책임을 다하는 기업으로서 지속 가능한 미래를 만들어 가겠습니다.",
  "저희 임직원 모두는 현재의 자부심을 지키며 미래에 대한 확고한 비전으로 새로운 내일을 향해 나아가겠습니다. 이것이 바로 미래를 향한 범진의 변함없는 약속이자 다짐입니다.",
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

function CEOSection() {
  return (
    <section id="ceo" className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionLabel>CEO Message</SectionLabel>
          <h2
            className="font-black text-gray-900 leading-[1.0] tracking-tight mb-16"
            style={{ fontSize: "clamp(32px, 4vw, 60px)" }}
          >
            CEO 인사말
          </h2>
        </FadeIn>

        {/* CEO letter */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
          <FadeIn className="lg:col-span-1">
            <div className="bg-gray-200 aspect-[3/4] relative overflow-hidden flex items-end">
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-black text-gray-300 select-none"
                  style={{ fontSize: "clamp(120px, 20vw, 200px)" }}
                >
                  B
                </span>
              </div>
              <div className="relative z-10 p-6 bg-gradient-to-t from-gray-900/80 to-transparent w-full">
                <p className="text-[20px] font-black text-white">대표이사</p>
                <p className="text-[12px] text-white/60 mt-1">
                  범진전자(주) · 범진아이엔디(주)
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2 flex flex-col justify-center">
            <div className="space-y-5">
              {CEO_PARAGRAPHS.map((para, i) => (
                <p
                  key={i}
                  className={`leading-relaxed ${
                    i === 0
                      ? "text-[17px] font-semibold text-gray-900"
                      : "text-[14px] text-gray-600"
                  }`}
                >
                  {para}
                </p>
              ))}
              <p className="text-[14px] text-gray-500 pt-4 border-t border-gray-200">
                감사합니다.
                <br />
                <span className="font-bold text-gray-900 text-[15px]">대표이사</span>
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 경영철학 */}
        <FadeIn>
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-gray-400 mb-8">
            경영철학
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
          {MGMT_PHILOSOPHY.map((item, i) => (
            <FadeIn key={item.num} delay={i * 0.07}>
              <div className="bg-white p-8 lg:p-10">
                <div className="flex items-start gap-5 mb-5">
                  <span className="text-[11px] font-mono text-red-600 shrink-0 mt-0.5">
                    {item.num}
                  </span>
                  <p className="text-[16px] font-bold text-gray-900 leading-snug">
                    {item.title}
                  </p>
                </div>
                <ul className="space-y-2.5 pl-8">
                  {item.items.map((li, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-red-600 shrink-0 mt-2" />
                      <span className="text-[13px] text-gray-600 leading-relaxed">{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: VISION ─── */

const VISION_MEANING = [
  {
    term: "범진은",
    desc: "글로벌 범진 전체를 의미하며, 모든 사업과 성장의 중심이 되는 우리 모두를 뜻합니다.",
  },
  {
    term: "고객은",
    desc: "고객, 협력사, 주주 등 범진과 함께하는 모든 파트너를 의미합니다.",
  },
  {
    term: "범진인은",
    desc: "범진의 모든 사업을 이끌어가는 구성원 전체를 의미합니다.",
  },
  {
    term: "동행으로는",
    desc: "핵심가치의 실천을 통해 고객을 감동시키고 일류 경쟁력을 확보하는 것을 의미합니다.",
  },
  {
    term: "성장한다는",
    desc: "도전과 혁신을 통한 지속성장으로 백년기업을 추구하고 구성원의 행복과 가치를 실현하는 것을 의미합니다.",
  },
];

const CORE_VALUES = [
  {
    num: "01",
    title: "고객 최우선",
    en: "Customer First",
    body: "최고의 제품과 최상의 서비스를 제공하는 것을 최우선으로 하며, 범진의 모든 가치 중심에 고객을 두고 고객감동 문화를 만들어갑니다.",
  },
  {
    num: "02",
    title: "인재존중과 열린 조직문화",
    en: "People & Culture",
    body: "기업의 기본은 사람이라는 신념 아래 우수한 인재를 육성하고, 구성원들이 열정과 꿈을 펼칠 수 있는 행복한 회사를 만들어갑니다.",
  },
  {
    num: "03",
    title: "도전과 실행",
    en: "Challenge & Execution",
    body: "급변하는 글로벌 경영환경 속에서도 기존의 틀을 뛰어넘는 차별화된 아이디어와 창의적인 실행력으로 목표를 달성합니다.",
  },
  {
    num: "04",
    title: "열린 소통과 협력",
    en: "Communication & Partnership",
    body: "고객, 협력사, 그리고 내부 조직 간의 원활한 소통과 협력을 통해 조직 발전의 시너지 효과를 창출합니다.",
  },
  {
    num: "05",
    title: "투명·정도경영",
    en: "Integrity Management",
    body: "고객과 구성원의 신뢰를 바탕으로 투명경영과 준법경영을 실천하며, 사회적 책임을 다하는 지속가능한 기업으로 성장합니다.",
  },
];

function VisionSection() {
  return (
    <section id="vision" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionLabel>Vision</SectionLabel>
          <h2
            className="font-black text-gray-900 leading-[1.0] tracking-tight mb-16"
            style={{ fontSize: "clamp(32px, 4vw, 60px)" }}
          >
            비전
          </h2>
        </FadeIn>

        {/* Vision 2025 */}
        <FadeIn delay={0.05}>
          <div className="relative bg-red-600 py-14 lg:py-20 px-8 lg:px-16 mb-16 overflow-hidden">
            <div
              aria-hidden
              className="absolute top-0 right-[-5%] text-[220px] font-black text-white/[0.05] leading-none select-none pointer-events-none"
            >
              V
            </div>
            <p className="text-red-200 text-[11px] font-semibold tracking-[0.35em] uppercase mb-4">
              Vision 2025
            </p>
            <p className="text-white text-[22px] lg:text-[30px] font-black leading-snug mb-8 max-w-xl">
              "범진은 고객과 범진人의 동행으로 성장한다."
            </p>
            <p className="text-red-100 text-[14px] leading-relaxed max-w-3xl">
              Vision 2025는 2025년까지 매출 1조 달성을 목표로 백년기업으로 성장 가능한 핵심
              사업군을 발굴하고, R&amp;D 및 인프라를 지속적으로 발전시키며, 중견기업으로 도약하기
              위한 인재 육성과 활기찬 조직문화를 구축하여 고객과 함께 성장하는 미래를
              만들어갑니다.
            </p>
          </div>
        </FadeIn>

        {/* Vision meaning + goal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <FadeIn>
            <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-gray-400 mb-8">
              비전의 의미
            </p>
            <div>
              {VISION_MEANING.map((item, i) => (
                <motion.div
                  key={item.term}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="flex gap-4 py-4 border-b border-gray-100"
                >
                  <span className="text-[13px] font-bold text-red-600 shrink-0 w-20">
                    {item.term}
                  </span>
                  <span className="text-[13px] text-gray-600 leading-relaxed">{item.desc}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-gray-50 border border-gray-200 p-8 lg:p-10 h-full flex flex-col justify-center gap-8">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-gray-400 mb-4">
                  매출 목표
                </p>
                <p className="text-[52px] lg:text-[64px] font-black text-gray-900 leading-none tracking-tighter">
                  1조
                </p>
                <p className="text-[13px] text-gray-500 mt-2">2025년 매출 목표</p>
              </div>
              <div className="h-px bg-gray-200" />
              <div>
                <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-gray-400 mb-4">
                  장기 목표
                </p>
                <p className="text-[52px] lg:text-[64px] font-black text-red-600 leading-none tracking-tighter">
                  100년
                </p>
                <p className="text-[13px] text-gray-500 mt-2">백년기업을 향한 여정</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Core Values */}
        <FadeIn>
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-gray-400 mb-8">
            핵심가치 (Core Value)
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-200 border border-gray-200">
          {CORE_VALUES.map((item, i) => (
            <FadeIn key={item.num} delay={i * 0.06}>
              <div className="bg-white p-6 lg:p-7 h-full">
                <p className="text-[10px] font-mono text-red-600 mb-3">{item.num}</p>
                <p className="text-[14px] font-bold text-gray-900 mb-1 leading-snug">
                  {item.title}
                </p>
                <p className="text-[10px] text-gray-400 tracking-wide mb-4">{item.en}</p>
                <p className="text-[12px] text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            </FadeIn>
          ))}
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
    desc: "범진전자는 글로벌 전자제품 제조 전문 기업으로 연구개발부터 생산, 품질관리까지 통합 제조 솔루션을 제공합니다.",
    locations: [
      "범진전자 (한국)",
      "범진전자 중국",
      "범진전자 베트남",
      "범진전자 인도네시아",
    ],
    revenue: "3,578억",
    revenueSub: "매출",
    employees: "2,150명",
    employeesSub: "임직원",
    productsLabel: "주력 제품",
    products: ["Sound Bar", "Speaker", "Home Theater"],
    roles: ["전자제품 연구개발", "ODM/OEM 생산", "글로벌 생산 및 품질관리"],
    dark: true,
  },
  {
    name: "범진IND",
    en: "Bumjin IND",
    desc: "범진IND는 금형 설계·제작 및 사출성형 분야의 전문 기업으로 생활가전과 자동차 산업에 필요한 핵심 부품을 공급하고 있습니다.",
    locations: [
      "범진IND 금형·성형사업장",
      "범진IND 멕시코",
      "범진IND 헝가리",
    ],
    revenue: "2,069억",
    revenueSub: "매출",
    employees: "1,200명",
    employeesSub: "임직원",
    productsLabel: "주력 사업",
    products: [
      "금형 설계",
      "금형 제작",
      "생활가전 사출성형",
      "자동차 부품 사출성형",
    ],
    roles: ["정밀 금형 개발", "사출성형 생산", "글로벌 제조 지원"],
    dark: false,
  },
];

function GroupSection() {
  return (
    <section id="group" className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionLabel>Bumjin Group</SectionLabel>
          <h2
            className="font-black text-gray-900 leading-[1.0] tracking-tight mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 60px)" }}
          >
            범진
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mb-16">
            범진그룹은 음향 전자제품 제조 전문 기업 범진전자와 금형·사출 전문 기업
            범진IND를 중심으로 글로벌 제조 밸류체인을 구축하고 있습니다.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {SUBSIDIARIES.map((sub, si) => (
            <FadeIn key={sub.name} delay={si * 0.1}>
              <div className="bg-white border border-gray-200 overflow-hidden h-full flex flex-col">
                {/* Header */}
                <div className={`p-8 ${sub.dark ? "bg-red-600" : "bg-gray-900"}`}>
                  <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-2">
                    {sub.en}
                  </p>
                  <p className="text-[28px] font-black text-white mb-3">{sub.name}</p>
                  <p className="text-[13px] text-white/70 leading-relaxed">{sub.desc}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 divide-x divide-gray-100 border-b border-gray-100">
                  <div className="px-6 py-5">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">
                      {sub.revenueSub}
                    </p>
                    <p className="text-[22px] font-black text-gray-900">{sub.revenue}</p>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">
                      {sub.employeesSub}
                    </p>
                    <p className="text-[22px] font-black text-gray-900">{sub.employees}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 divide-x divide-gray-100 flex-1">
                  <div className="p-6">
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">
                      사업장
                    </p>
                    <ul className="space-y-2">
                      {sub.locations.map((loc) => (
                        <li key={loc} className="flex items-start gap-2">
                          <MapPin className="size-3 text-red-600 shrink-0 mt-0.5" />
                          <span className="text-[12px] text-gray-600">{loc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">
                      {sub.productsLabel}
                    </p>
                    <ul className="space-y-2">
                      {sub.products.map((prod) => (
                        <li key={prod} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-red-600 shrink-0 mt-1.5" />
                          <span className="text-[12px] text-gray-600">{prod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Roles */}
                <div className="px-6 py-5 border-t border-gray-100">
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">
                    주요 역할
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sub.roles.map((role) => (
                      <span
                        key={role}
                        className="text-[11px] font-medium text-gray-600 bg-gray-100 px-3 py-1.5"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Core message */}
        <FadeIn delay={0.15}>
          <div className="border-l-4 border-red-600 pl-6 py-1">
            <p className="text-[15px] lg:text-[17px] font-semibold text-gray-900 leading-relaxed">
              "연구개발, 생산, 금형, 사출성형까지 아우르는 글로벌 제조 밸류체인을 구축하여
              고객의 성공을 지원합니다."
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── SECTION 5: HISTORY ─── */

const HISTORY_DATA = [
  {
    year: "2023",
    events: [{ month: "02", text: "DENON 거래 개시 (AV Receiver 생산)" }],
  },
  {
    year: "2019",
    events: [{ month: "10", text: "범진전자베트남 유한공사 설립" }],
  },
  {
    year: "2018",
    events: [{ month: "01", text: "멀티미디어연구소 설립 (사운드바 자체 개발)" }],
  },
  {
    year: "2017",
    events: [{ month: "12", text: "범진 신사옥 신축 완공" }],
  },
  {
    year: "2016",
    events: [{ month: "12", text: "제53회 무역의 날 3,000만불 수출의 탑 수상" }],
  },
  {
    year: "2015",
    events: [{ month: "12", text: "블루투스 스피커 출시 (자사 브랜드 : TONN)" }],
  },
  {
    year: "2014",
    events: [
      { month: "12", text: "삼성전자(주) 자랑스런 삼성인상 특별상 수상" },
      { month: "08", text: "헝가리범진전자 KFT 설립" },
      { month: "02", text: "삼성전자(주) 올해의 강소기업 인증" },
    ],
  },
  {
    year: "2013",
    events: [{ month: "07", text: "범진아이엔디(주) 수원공장 신축 이전" }],
  },
  {
    year: "2011",
    events: [{ month: "11", text: "제48회 무역의 날 500만불 수출의 탑 수상" }],
  },
  {
    year: "2010",
    events: [{ month: "04", text: "범진전자 인도네시아 설립 (스피커시스템, 사출)" }],
  },
  {
    year: "2008",
    events: [
      { month: "09", text: "범진시엔엘(주) 기업부설연구소 인증" },
      { month: "08", text: "범진시엔엘(주) 안산공장 신축 이전" },
      { month: "01", text: "천진범진전자유한공사 설립" },
    ],
  },
  {
    year: "2007",
    events: [{ month: "09", text: "범진공업(주) 기업부설연구소 인증" }],
  },
  {
    year: "2005",
    events: [{ month: "04", text: "범진공업(주) 성형사업부 설립" }],
  },
  {
    year: "2004",
    events: [
      { month: "08", text: "중국범진전자유한공사 설립 (스피커시스템)" },
      { month: "05", text: "범진전자(주) 설립 (스피커시스템)" },
    ],
  },
  {
    year: "1991",
    events: [{ month: "10", text: "범진공업사 설립 (금형, 서울 영등포 소재)" }],
  },
];

function HistorySection() {
  return (
    <section id="history" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionLabel>History</SectionLabel>
          <h2
            className="font-black text-gray-900 leading-[1.0] tracking-tight mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 60px)" }}
          >
            연혁
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-16">
            1991년 창립 이후 지속적인 도전과 혁신으로 성장해 온 범진의 발자취입니다.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[80px] lg:left-[96px] top-0 bottom-0 w-px bg-gray-100" />

          <div className="space-y-0">
            {HISTORY_DATA.map((entry, i) => (
              <motion.div
                key={entry.year}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.03, 0.25), duration: 0.5 }}
                className="flex gap-8 lg:gap-12 py-5 border-b border-gray-50 group"
              >
                {/* Year */}
                <div className="relative shrink-0 w-[80px] lg:w-[96px]">
                  <span className="text-[14px] font-black text-gray-900 group-hover:text-red-600 transition-colors">
                    {entry.year}
                  </span>
                  {/* Dot on line */}
                  <div className="absolute right-[-5px] top-[5px] w-2.5 h-2.5 rounded-full bg-white border-2 border-gray-300 group-hover:border-red-600 transition-colors" />
                </div>

                {/* Events */}
                <div className="flex-1 space-y-2 pl-4">
                  {entry.events.map((ev, j) => (
                    <div key={j} className="flex gap-4 items-start">
                      <span className="text-[11px] font-mono text-red-600 shrink-0 w-5 mt-0.5">
                        {ev.month}
                      </span>
                      <span className="text-[14px] text-gray-700 leading-relaxed">
                        {ev.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 6: LOCATION ─── */

const LOCATION_DATA = [
  {
    name: "범진전자 (수원사업장)",
    type: "본사 · 전자사업장",
    address: "경기도 수원시 권선구 산업로155번길 217 (고색동)",
    phone: "031-493-9415",
    note: "1호선 고색역 인근",
    mapUrl:
      "https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EA%B6%8C%EC%84%A0%EA%B5%AC%20%EC%82%B0%EC%97%85%EB%A1%9C155%EB%B2%88%EA%B8%B8%20217",
  },
  {
    name: "범진IND (금형사업장)",
    type: "금형 제조",
    address: "경기도 수원시 권선구 고색동",
    phone: "031-676-1461",
    note: "금형 설계 및 제작 전문 사업장",
    mapUrl:
      "https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EA%B6%8C%EC%84%A0%EA%B5%AC%20%EA%B3%A0%EC%83%89%EB%8F%99",
  },
  {
    name: "범진IND (성형사업장)",
    type: "사출성형 제조",
    address: "경기도 안성시",
    phone: "031-210-4930",
    note: "생활가전 및 자동차 부품 사출성형",
    mapUrl: "https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%95%88%EC%84%B1%EC%8B%9C",
  },
];

function LocationSection() {
  return (
    <section id="location" className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionLabel>Location</SectionLabel>
          <h2
            className="font-black text-gray-900 leading-[1.0] tracking-tight mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 60px)" }}
          >
            찾아오시는 길
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-16">
            범진의 사업장을 방문하시기 전 아래 정보를 확인해 주세요.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {LOCATION_DATA.map((loc, i) => (
            <FadeIn key={loc.name} delay={i * 0.08}>
              <div className="bg-white border border-gray-200 overflow-hidden h-full flex flex-col">
                {/* Map placeholder */}
                <div className="aspect-video bg-gray-100 relative overflow-hidden flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-gray-300">
                    <MapPin className="size-10 text-red-200" />
                    <span className="text-[12px] font-medium text-gray-400">{loc.type}</span>
                  </div>
                  {/* Grid lines on map placeholder */}
                  <div className="absolute inset-0 grid-lines opacity-40" />
                  {/* View map button */}
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[11px] font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors px-3 py-2"
                  >
                    지도 보기
                    <ExternalLink className="size-3" />
                  </a>
                </div>

                {/* Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[10px] font-semibold text-red-600 tracking-[0.25em] uppercase mb-2">
                    {loc.type}
                  </p>
                  <p className="text-[16px] font-black text-gray-900 mb-5">{loc.name}</p>
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start gap-3">
                      <MapPin className="size-3.5 text-gray-400 shrink-0 mt-0.5" />
                      <span className="text-[13px] text-gray-600 leading-relaxed">
                        {loc.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="size-3.5 text-gray-400 shrink-0" />
                      <a
                        href={`tel:${loc.phone.replace(/-/g, "")}`}
                        className="text-[13px] text-gray-600 hover:text-red-600 transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>
                    {loc.note && (
                      <p className="text-[12px] text-gray-400 leading-relaxed pt-1">
                        {loc.note}
                      </p>
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

function CompanyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 shadow-[0_1px_0_#E5E7EB]"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src="/bumjin%20icon.jpg"
            alt="Bumjin Electronics"
            width={160}
            height={48}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <span className="text-[13px] font-semibold text-red-600 border-b border-red-600 pb-0.5">
            회사소개
          </span>
          <Link
            href="/#solutions"
            className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            사업영역
          </Link>
          <Link
            href="/#capabilities"
            className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            기술역량
          </Link>
          <Link
            href="/#operations"
            className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            글로벌 네트워크
          </Link>
          <Link
            href="/#clients"
            className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            주요 고객사
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden sm:block"
          >
            <button className="text-[13px] font-semibold text-white bg-red-600 hover:bg-red-700 px-5 py-2 transition-colors">
              문의하기
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

/* ─── PAGE HERO ─── */

function PageHero() {
  return (
    <div className="relative bg-gray-950 pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-[0.04]" />
      <div
        aria-hidden
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none text-white/[0.025]"
        style={{ fontSize: "clamp(200px, 40vw, 500px)" }}
      >
        BJ
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-semibold tracking-[0.35em] uppercase text-gray-500 mb-4"
        >
          Company Introduction
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-black text-white leading-[1.0] tracking-tight"
          style={{ fontSize: "clamp(44px, 7vw, 100px)" }}
        >
          회사소개
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="text-gray-500 text-[15px] mt-5 max-w-md leading-relaxed"
        >
          1991년 창립 이후 도전과 혁신으로 성장해 온 범진을 소개합니다.
        </motion.p>
      </div>
    </div>
  );
}

/* ─── FOOTER ─── */

function CompanyFooter() {
  return (
    <footer className="bg-charcoal py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Image
            src="/bumjin%20icon.jpg"
            alt="Bumjin Electronics"
            width={130}
            height={40}
            className="h-10 w-auto object-contain brightness-0 invert opacity-60"
          />
          <p className="text-gray-600 text-[11px] text-center">
            © {new Date().getFullYear()} Bumjin Electronics Co., Ltd. All rights reserved.
          </p>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[12px] text-gray-500 hover:text-gray-300 transition-colors"
          >
            메인 홈페이지
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */

export default function CompanyPage() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const ids = SUB_NAV.map(({ id }) => id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
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
      <CompanyHeader />
      <PageHero />
      <SubNav active={activeSection} />
      <main>
        <OverviewSection />
        <CEOSection />
        <VisionSection />
        <GroupSection />
        <HistorySection />
        <LocationSection />
      </main>
      <CompanyFooter />
    </div>
  );
}

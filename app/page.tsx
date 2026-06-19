"use client";

import Image from "next/image";
import { Fragment, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import {
  type LucideIcon,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Globe2,
  Shield,
  BadgeCheck,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  Download,
  Target,
  PenTool,
  Settings2,
  Wrench,
  ShieldCheck,
  Package,
  CornerDownLeft,
  Waves,
  Activity,
  Speaker,
  Zap,
  Cpu,
  Layers,
  Music,
  Award,
} from "lucide-react";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { FactoryGlobeMap } from "@/components/ui/factory-globe-map";
import { translations, type Lang } from "@/lib/translations";

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
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-gray-400 mb-8">
      {children}
    </p>
  );
}

/* ─── NAVIGATION ─── */

const LANG_OPTIONS: { code: Lang; label: string }[] = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
];

function Navigation({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: t.company, href: "/company" },
    { label: t.business, href: "/business" },
    { label: t.technology, href: "#capabilities" },
    { label: t.global, href: "#operations" },
    { label: t.clients, href: "#clients" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/97 shadow-[0_1px_0_#E5E7EB]" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="shrink-0">
          <Image src="/bumjin%20icon.jpg" alt="Bumjin Electronics" width={160} height={48} priority className="h-12 w-auto object-contain" />
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-[12px] font-medium text-gray-500 hover:text-gray-900 transition-colors px-2 py-1"
            >
              Language
              <ChevronDown className="size-3" />
            </button>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 top-full mt-2 bg-white border border-gray-100 shadow-xl rounded overflow-hidden z-50 min-w-[110px]"
              >
                {LANG_OPTIONS.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => { setLang(opt.code); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-[12px] font-medium transition-colors hover:bg-gray-50 ${
                      lang === opt.code ? "text-red-600" : "text-gray-700"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          <a href="#contact" className="hidden sm:block">
            <button className="text-[13px] font-semibold text-white bg-red-600 hover:bg-red-700 px-5 py-2 transition-colors">
              {t.contact}
            </button>
          </a>

          <button className="lg:hidden p-1 text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-6 py-4 text-[13px] font-medium text-gray-700 border-b border-gray-50 hover:text-red-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 py-3 flex flex-wrap gap-2 border-b border-gray-50">
            {LANG_OPTIONS.map((opt) => (
              <button
                key={opt.code}
                onClick={() => { setLang(opt.code); setMobileOpen(false); }}
                className={`text-[11px] font-semibold px-3 py-1.5 border transition-colors ${
                  lang === opt.code ? "bg-red-600 text-white border-red-600" : "border-gray-200 text-gray-600"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="px-6 py-4">
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              <button className="w-full text-[13px] font-semibold text-white bg-red-600 py-3 transition-colors">
                {t.contact}
              </button>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

/* ─── SOUND WAVE BACKGROUND ─── */

function SoundWaveBackground() {
  const radii = [70, 150, 230, 310, 390, 470, 550, 630];
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      <svg
        className="absolute right-[-3%] top-1/2 -translate-y-1/2 w-[58vw] max-w-[680px] h-auto"
        viewBox="0 0 680 680"
        fill="none"
      >
        {radii.map((r, i) => (
          <motion.circle
            key={r}
            cx="680"
            cy="340"
            r={r}
            stroke="#C0392B"
            strokeWidth={i < 2 ? 1.5 : 1}
            fill="none"
            animate={{
              opacity: [
                0.03 + (radii.length - i) * 0.007,
                0.13 + (radii.length - i) * 0.007,
                0.03 + (radii.length - i) * 0.007,
              ],
            }}
            transition={{
              duration: 3.4,
              delay: i * 0.22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/* ─── HERO ─── */

function HeroSection({ lang }: { lang: Lang }) {
  const t = translations[lang].hero;
  const stats = [
    { value: "30+", label: t.stat1 },
    { value: "8", label: t.stat2 },
    { value: "50M+", label: t.stat3 },
    { value: "6", label: t.stat4 },
  ];

  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      <SoundWaveBackground />

      {/* Giant background "B" — subtle brand watermark */}
      <div
        aria-hidden
        className="absolute right-[-4%] top-1/2 -translate-y-[55%] text-[52vw] font-black leading-none select-none pointer-events-none text-gray-50"
        style={{ letterSpacing: "-0.04em" }}
      >
        B
      </div>

      {/* Hero body — left-aligned, editorial */}
      <div className="relative flex-1 flex items-end pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full pt-36">
          <FadeIn delay={0.05}>
            <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-gray-400 mb-10">
              Since 1994 — Bumjin Electronics
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1
              className="font-black leading-[1.1] tracking-[-0.02em] text-gray-900 mb-10"
              style={{ fontSize: "clamp(52px, 8.5vw, 130px)" }}
            >
              {t.line1}
              <br />
              <span className="text-red-600">{t.line2}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 max-w-3xl">
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-xs shrink-0">
                {t.subtitle}
              </p>
              <div className="flex gap-3 shrink-0">
                <a href="#contact">
                  <button className="text-[13px] font-bold text-white bg-red-600 hover:bg-red-700 px-8 py-3.5 transition-colors">
                    {t.cta1}
                  </button>
                </a>
                <a href="#about">
                  <button className="text-[13px] font-bold text-gray-700 border border-gray-300 hover:border-gray-600 px-8 py-3.5 transition-colors">
                    {t.cta2}
                  </button>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Stats strip */}
      <FadeIn delay={0.5}>
        <div className="border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {stats.map((s) => (
              <div key={s.label} className="py-7 px-6 lg:px-10 first:pl-0">
                <p className="text-[28px] font-black text-gray-900 leading-none">{s.value}</p>
                <p className="text-[11px] text-gray-400 tracking-wide mt-1.5 uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Scroll cue */}
      <motion.button
        className="absolute bottom-20 right-10 hidden lg:flex flex-col items-center gap-2 text-gray-300 hover:text-gray-500 transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-semibold">Scroll</span>
        <ChevronDown className="size-4" />
      </motion.button>
    </section>
  );
}

/* ─── COMPANY ─── */

function CompanySection({ lang }: { lang: Lang }) {
  const t = translations[lang].company;

  return (
    <section id="about" className="bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>{t.label}</SectionLabel>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          <FadeIn>
            <h2
              className="font-black leading-[1.0] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(36px, 4.5vw, 68px)" }}
            >
              {t.heading}
              <br />
              <span className="text-red-600">{t.headingAccent}</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col justify-end">
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">{t.body}</p>
            <a href="#contact" className="inline-flex items-center gap-2 text-red-600 font-semibold text-[13px] hover:gap-3 transition-all group">
              {t.inquiryLink}
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </FadeIn>
        </div>

        {/* Large stats — no containers, just numbers */}
        <div className="border-t border-gray-100 pt-14 grid grid-cols-2 lg:grid-cols-5 gap-y-10">
          {t.stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.06}>
              <div className={i < t.stats.length - 1 ? "lg:pr-10 lg:border-r lg:border-gray-100" : "lg:pl-0"}>
                <p className="text-[52px] lg:text-[64px] font-black text-gray-900 leading-none tracking-tighter">
                  {s.value}
                </p>
                <p className="text-[13px] font-semibold text-gray-700 mt-3">{s.label}</p>
                {s.sub && <p className="text-[11px] text-gray-400 mt-1">{s.sub}</p>}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── BUSINESS AREAS — editorial numbered list ─── */

function BusinessSection({ lang }: { lang: Lang }) {
  const t = translations[lang].business;

  return (
    <section id="solutions" className="bg-gray-50 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between border-b border-gray-200 pb-10 mb-0">
          <div>
            <SectionLabel>{t.label}</SectionLabel>
            <h2
              className="font-black text-gray-900 leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
            >
              {t.heading}
            </h2>
          </div>
          <p className="text-gray-400 text-[13px] max-w-[220px] hidden lg:block leading-relaxed pb-1">
            {t.subtitle}
          </p>
        </div>

        {/* Numbered list */}
        {t.areas.map((area, i) => (
          <motion.div
            key={area.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="group flex items-center gap-6 lg:gap-16 py-9 border-b border-gray-200 hover:bg-white -mx-6 lg:-mx-10 px-6 lg:px-10 transition-colors cursor-pointer"
          >
            <span className="text-[11px] font-mono text-gray-300 shrink-0 w-6 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 grid lg:grid-cols-3 gap-2 lg:gap-12 items-center min-w-0">
              <div className="lg:col-span-1">
                <p className="text-[18px] lg:text-[22px] font-bold text-gray-900 leading-snug">
                  {area.title}
                </p>
                <p className="text-[12px] text-gray-400 mt-0.5">{area.titleSub}</p>
              </div>
              <p className="text-gray-500 text-[13px] leading-relaxed lg:col-span-2 hidden lg:block">
                {area.desc}
              </p>
            </div>
            <ArrowUpRight className="size-5 text-gray-200 group-hover:text-red-600 transition-colors shrink-0" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── CAPABILITIES — Filtering Tabs ─── */

type CapCategory = "all" | "acoustic" | "manufacturing" | "certification";

interface CapItem {
  id: string;
  category: Exclude<CapCategory, "all">;
  title: string;
  desc: string;
  icon: LucideIcon;
}

const CAPABILITIES_DATA: CapItem[] = [
  { id: "c1",  category: "acoustic",       title: "DSP 엔지니어링 & 음향 튜닝",     desc: "24비트 DSP 알고리즘 설계, 무향실 측정, 목표 커브 매칭으로 정밀 음색 구현.",          icon: Waves      },
  { id: "c2",  category: "acoustic",       title: "커스텀 드라이버 제조",            desc: "우퍼·트위터 맞춤 설계, 마그넷 최적화, 보이스코일 와인딩 내재화.",                   icon: Speaker    },
  { id: "c3",  category: "acoustic",       title: "Dolby Atmos / DTS:X 인증",      desc: "공간음향 렌더링 파이프라인 구축 및 Dolby·DTS 공식 인증 라이선스 취득.",             icon: Activity   },
  { id: "c4",  category: "acoustic",       title: "AirPlay 2 / Chromecast 연동",   desc: "Wi-Fi 멀티룸 스트리밍 모듈 통합 및 iOS·Android 전 플랫폼 호환성 검증.",            icon: Zap        },
  { id: "c5",  category: "manufacturing",  title: "Class-D & Class-AB 앰프 설계",  desc: "고효율 D급 앰프 및 저왜율 AB급 앰프 고객사 사양 맞춤 설계.",                       icon: Cpu        },
  { id: "c6",  category: "manufacturing",  title: "Wi-Fi 6 & Bluetooth 5.3 통합", desc: "최신 무선 모듈 통합, 레이턴시 최적화, 각국 RF 공인 시험 일괄 지원.",               icon: Layers     },
  { id: "c7",  category: "manufacturing",  title: "인하우스 CNC & EDM 금형",        desc: "자체 NC·방전 가공 설비로 리드타임 업계 평균 대비 40% 단축 달성.",                  icon: Settings2  },
  { id: "c8",  category: "manufacturing",  title: "SMT 실장 & AOI 검사",           desc: "고속 SMT 라인(0201 부품 대응), 자동 광학검사 100% 전수 적용.",                    icon: Wrench     },
  { id: "c9",  category: "certification",  title: "Hi-Res Audio 인증",             desc: "일본음향협회 기준 40kHz 이상 재생 능력 검증 및 로고 라이선싱 취득.",                icon: Music      },
  { id: "c10", category: "certification",  title: "HDMI eARC / HDMI 2.1 모듈",    desc: "최신 HDMI 규격 전면 대응, eARC 음성 패스스루 회로 자체 설계.",                     icon: Award      },
  { id: "c11", category: "certification",  title: "무향실 측정",                   desc: "자체 운영 무향실에서 FR·THD·방향성·지향성 전 항목 정밀 측정.",                    icon: ShieldCheck },
  { id: "c12", category: "certification",  title: "ISO 9001 / IATF 16949 QMS",    desc: "전사 품질경영시스템 인증 유지, 자동차 전장 품질 기준 완전 대응.",                   icon: BadgeCheck },
];

const CAP_TABS: { key: CapCategory; label: string }[] = [
  { key: "all",           label: "전체"     },
  { key: "acoustic",      label: "음향 설계" },
  { key: "manufacturing", label: "제조"     },
  { key: "certification", label: "품질 인증" },
];

function TechnologySection({ lang }: { lang: Lang }) {
  const t = translations[lang].technology;
  const [activeTab, setActiveTab] = useState<CapCategory>("all");

  const filtered =
    activeTab === "all"
      ? CAPABILITIES_DATA
      : CAPABILITIES_DATA.filter((c) => c.category === activeTab);

  return (
    <section id="capabilities" className="bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionLabel>{t.label}</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <h2
              className="font-black text-gray-900 leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(34px, 4.2vw, 60px)" }}
            >
              {t.heading}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {CAP_TABS.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 text-[12px] font-semibold tracking-wide transition-all ${
                    activeTab === tab.key
                      ? "bg-[#111111] text-white"
                      : "border border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((cap) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-[#E8E8E8] p-7 group hover:border-gray-300 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#F6F6F4] flex items-center justify-center mb-5 group-hover:bg-red-50 transition-colors">
                    <Icon className="size-5 text-gray-400 group-hover:text-[#C0392B] transition-colors" />
                  </div>
                  <h3 className="text-[14px] font-bold text-gray-900 mb-2 leading-snug">{cap.title}</h3>
                  <p className="text-[12px] text-gray-400 leading-relaxed">{cap.desc}</p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── GLOBAL OPERATIONS ─── */

function GlobalSection({ lang }: { lang: Lang }) {
  const t = translations[lang].global;

  return (
    <section id="operations" className="bg-gray-50 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div>
            <FadeIn>
              <SectionLabel>{t.label}</SectionLabel>
              <h2
                className="font-black text-gray-900 leading-[1.0] tracking-tight mb-6"
                style={{ fontSize: "clamp(34px, 4.5vw, 64px)" }}
              >
                {t.heading}
                <span className="block text-red-600">{t.headingAccent}</span>
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-10">{t.subtitle}</p>
            </FadeIn>

            <div>
              {t.locations.map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="flex items-center gap-4 py-3.5 border-b border-gray-200"
                >
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${loc.type === "hq" ? "bg-red-600" : "bg-gray-300"}`} />
                  <span className="text-[13px] font-medium text-gray-900 flex-1">{loc.city}</span>
                  <span className="text-[11px] text-gray-400">{loc.role}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <FadeIn delay={0.1} className="w-full">
            <FactoryGlobeMap mapHint={t.mapHint} lang={lang} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS — Interactive Grid ─── */

interface ProcessStep {
  step: string;
  title: string;
  titleEn: string;
  body: string;
  icon: LucideIcon;
  detail: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01", title: "기획", titleEn: "Planning", icon: Target,
    body: "R&D 공동 기획, 시장 조사, 음향 모델링, 산업 디자인 방향 수립.",
    detail: "클라이언트 R&D팀과 공동으로 제품 기획 단계를 진행합니다. 시장 조사, 타겟 사양 정의, 음향 모델링, PCB 구성 검토, 산업 디자인 방향 수립까지 전 과정을 지원합니다.",
  },
  {
    step: "02", title: "설계", titleEn: "Engineering", icon: PenTool,
    body: "PCB·기구·음향 통합 설계. DFM·DFA 검토 완료 후 시제품 제작.",
    detail: "회로 설계(PCB 레이아웃, EMC 최적화), 기구 설계(3D CAD), 음향 설계(FEA 시뮬레이션)를 통합적으로 수행합니다. 시제품 제작 전 DFM·DFA 검토를 완료합니다.",
  },
  {
    step: "03", title: "사출", titleEn: "Molding", icon: Settings2,
    body: "자체 CNC·EDM 금형. 리드타임 업계 평균 대비 40% 단축.",
    detail: "자체 CNC 및 EDM 설비로 금형을 제작합니다. 리드타임은 업계 평균 대비 40% 단축되며 PP·ABS·PC 등 다양한 수지 재료를 지원합니다. 게이트 위치 최적화로 싱크·워프를 최소화합니다.",
  },
  {
    step: "04", title: "조립", titleEn: "Assembly", icon: Wrench,
    body: "고속 SMT·AOI 검사. 로봇 자동 조립, 100% 음향 캘리브레이션.",
    detail: "고속 SMT 라인(0201 대응)과 AOI 자동광학검사를 거쳐 PCB를 실장합니다. 로봇 자동화 조립 라인에서 드라이버·앰프·DSP 모듈을 통합하고 100% 라인엔드 음향 캘리브레이션을 수행합니다.",
  },
  {
    step: "05", title: "품질", titleEn: "Quality", icon: ShieldCheck,
    body: "AQL 샘플링, CE·FCC·UL 인증, ISO 9001 / IATF 16949 준수.",
    detail: "AQL 샘플링 검사, CE·FCC·UL 인증 대응, 고객사별 맞춤 패키징을 진행합니다. ISO 9001 / IATF 16949 품질경영 시스템을 기반으로 전수 검사와 신뢰성 시험을 병행합니다.",
  },
  {
    step: "06", title: "물류", titleEn: "Logistics", icon: Package,
    body: "6개 거점 항공·해상·철도 네트워크. 3PL 연동·실시간 추적.",
    detail: "6개 거점(한국·중국·베트남·폴란드·미국·일본)에서 항공·해상·철도를 활용한 글로벌 배송 네트워크를 운영합니다. 3PL 직접 연동 및 실시간 재고 추적 시스템을 제공합니다.",
  },
];

function ProcessCard({ step, onClick }: { step: ProcessStep; onClick: () => void }) {
  const Icon = step.icon;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
      className="pt-8 pb-6 pr-4 lg:pr-6 pl-4 first:pl-0 cursor-pointer group border-t-2 border-transparent hover:border-[#C0392B] transition-[border-color] duration-200"
    >
      <p className="text-[11px] font-mono text-red-600 mb-4 tracking-wider">{step.step}</p>
      <Icon className="size-4 text-gray-300 group-hover:text-[#C0392B] transition-colors mb-3" />
      <p className="text-[13px] font-bold text-gray-900 mb-2 leading-snug">{step.title}</p>
      <p className="text-[12px] text-gray-400 leading-relaxed">{step.body}</p>
      <p className="text-[11px] text-[#C0392B] mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        상세 보기 →
      </p>
    </motion.div>
  );
}

function ProcessModal({ step, onClose }: { step: ProcessStep; onClose: () => void }) {
  const Icon = step.icon;
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-white z-[61] p-8 shadow-2xl"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-[11px] font-mono text-[#C0392B] tracking-wider mb-2">{step.step}</p>
            <h3 className="text-[26px] font-black text-[#111111] leading-tight">{step.title}</h3>
            <p
              className="text-[10px] font-medium text-[#CCCCCC] tracking-[2.5px] uppercase mt-1"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {step.titleEn}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-300 hover:text-gray-900 transition-colors shrink-0"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="w-12 h-12 bg-[#F6F6F4] flex items-center justify-center mb-6">
          <Icon className="size-6 text-[#C0392B]" />
        </div>
        <p className="text-gray-600 text-[14px] leading-[1.8]">{step.detail}</p>
      </motion.div>
    </>
  );
}

function ProcessSection({ lang }: { lang: Lang }) {
  const t = translations[lang].process;
  const [activeStep, setActiveStep] = useState<ProcessStep | null>(null);

  return (
    <section className="bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between pb-10 border-b border-gray-200 mb-0">
          <div>
            <SectionLabel>{t.label}</SectionLabel>
            <h2
              className="font-black text-gray-900 leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(34px, 4.2vw, 60px)" }}
            >
              {t.heading}
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 text-[13px] font-bold text-gray-700 border border-gray-300 hover:border-gray-900 px-6 py-3 transition-colors mt-4 lg:mt-0"
          >
            {t.cta}
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 divide-x divide-gray-100">
          {PROCESS_STEPS.map((step) => (
            <ProcessCard key={step.step} step={step} onClick={() => setActiveStep(step)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeStep && (
          <ProcessModal step={activeStep} onClose={() => setActiveStep(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─── CLIENTS ─── */

const CLIENT_LOGOS = [
  { name: "Samsung Electronics", svg: <svg width="160" height="40" viewBox="0 0 160 40" fill="none"><text x="0" y="30" fontFamily="var(--font-noto),system-ui" fontSize="22" fontWeight="700" letterSpacing="-0.5" fill="#9CA3AF">SAMSUNG</text></svg> },
  { name: "LG Electronics", svg: <svg width="100" height="40" viewBox="0 0 100 40" fill="none"><text x="0" y="30" fontFamily="var(--font-noto),system-ui" fontSize="26" fontWeight="700" letterSpacing="2" fill="#9CA3AF">LG</text></svg> },
  { name: "SONY", svg: <svg width="120" height="40" viewBox="0 0 120 40" fill="none"><text x="0" y="30" fontFamily="var(--font-noto),system-ui" fontSize="24" fontWeight="300" letterSpacing="6" fill="#9CA3AF">SONY</text></svg> },
  { name: "Harman Kardon", svg: <svg width="200" height="40" viewBox="0 0 200 40" fill="none"><text x="0" y="28" fontFamily="var(--font-noto),system-ui" fontSize="16" fontWeight="400" letterSpacing="3" fill="#9CA3AF">HARMAN KARDON</text></svg> },
  { name: "JBL", svg: <svg width="80" height="40" viewBox="0 0 80 40" fill="none"><text x="0" y="32" fontFamily="var(--font-noto),system-ui" fontSize="32" fontWeight="900" letterSpacing="-1" fill="#9CA3AF">JBL</text></svg> },
  { name: "Panasonic", svg: <svg width="170" height="40" viewBox="0 0 170 40" fill="none"><text x="0" y="29" fontFamily="var(--font-noto),system-ui" fontSize="20" fontWeight="500" letterSpacing="4" fill="#9CA3AF">Panasonic</text></svg> },
  { name: "HP", svg: <svg width="60" height="40" viewBox="0 0 60 40" fill="none"><text x="0" y="32" fontFamily="var(--font-noto),system-ui" fontSize="30" fontWeight="800" fill="#9CA3AF">hp</text></svg> },
  { name: "Dell", svg: <svg width="90" height="40" viewBox="0 0 90 40" fill="none"><text x="0" y="30" fontFamily="var(--font-noto),system-ui" fontSize="22" fontWeight="400" letterSpacing="2" fill="#9CA3AF">DELL</text></svg> },
];

function ClientsSection({ lang }: { lang: Lang }) {
  const t = translations[lang].clients;

  return (
    <section id="clients" className="bg-gray-50 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 mb-16 items-end">
          <div className="lg:col-span-1">
            <SectionLabel>{t.label}</SectionLabel>
            <h2
              className="font-black text-gray-900 leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(34px, 4vw, 56px)" }}
            >
              {t.heading}
              <span className="block text-red-600">{t.headingAccent}</span>
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">{t.subtitle}</p>
            <div className="grid grid-cols-3 gap-6">
              {t.stats.map((item) => (
                <div key={item.label} className="border-t-2 border-red-600 pt-4">
                  <p className="text-[28px] font-black text-gray-900">{item.value}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <ProgressiveBlur direction="left" blurIntensity={1} className="z-20" />
          <ProgressiveBlur direction="right" blurIntensity={1} className="z-20" />
          <InfiniteSlider gap={72} duration={30} className="py-6">
            {CLIENT_LOGOS.map((c) => (
              <div key={c.name} className="flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity min-w-[80px]">
                {c.svg}
              </div>
            ))}
          </InfiniteSlider>
          <InfiniteSlider gap={72} duration={38} reverse className="py-4">
            {[...CLIENT_LOGOS].reverse().map((c) => (
              <div key={`r-${c.name}`} className="flex items-center justify-center opacity-25 hover:opacity-50 transition-opacity min-w-[80px]">
                {c.svg}
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA STRIP ─── */

function CTAStrip({ lang }: { lang: Lang }) {
  const t = translations[lang].cta;

  return (
    <div className="relative bg-red-600 py-24 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-[0.07]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <FadeIn>
          <p className="text-white/60 text-[11px] font-semibold tracking-[0.4em] uppercase mb-6">{t.label}</p>
          <h2
            className="font-black text-white mb-6 leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(36px, 6vw, 96px)" }}
          >
            {t.heading}
          </h2>
          <p className="text-white/60 text-[15px] mb-10 max-w-sm mx-auto leading-relaxed">{t.subtitle}</p>
          <a href="#contact">
            <button className="text-[13px] font-bold text-red-600 bg-white hover:bg-gray-50 px-10 py-4 transition-colors shadow-xl inline-flex items-center gap-2">
              {t.btn}
              <ArrowUpRight className="size-4" />
            </button>
          </a>
        </FadeIn>
      </div>
    </div>
  );
}

/* ─── CONTACT ─── */

function FormField({ label, id, type = "text", placeholder, required }: {
  label: string; id: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-500 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
        {label}
      </label>
      <input
        id={id} name={id} type={type} placeholder={placeholder} required={required}
        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[13px] px-4 py-3 focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-300"
      />
    </div>
  );
}

function ContactSection({ lang }: { lang: Lang }) {
  const t = translations[lang].contact;
  const [submitted, setSubmitted] = useState(false);
  const [ndaAccepted, setNdaAccepted] = useState(false);

  return (
    <section id="contact" className="bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <FadeIn>
              <SectionLabel>{t.label}</SectionLabel>
              <h2
                className="font-black text-gray-900 leading-[1.0] tracking-tight mb-6"
                style={{ fontSize: "clamp(34px, 4.5vw, 64px)" }}
              >
                {t.heading}
                <span className="block text-red-600">{t.headingAccent}</span>
                {t.headingEnd && <span className="block text-gray-900">{t.headingEnd}</span>}
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-10">{t.subtitle}</p>
            </FadeIn>

            <FadeIn delay={0.1} className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-500">
                <span className="text-red-600 shrink-0"><Mail className="size-4" /></span>
                <span className="text-[13px]">bd@bumjin.co.kr</span>
              </div>
              <div className="flex items-start gap-3 text-gray-500">
                <span className="text-red-600 shrink-0 mt-0.5"><Phone className="size-4" /></span>
                <div className="text-[13px] space-y-1">
                  <p><span className="text-gray-400 w-10 inline-block">전자</span> 031-493-9415</p>
                  <p><span className="text-gray-400 w-10 inline-block">금형</span> 031-676-1461</p>
                  <p><span className="text-gray-400 w-10 inline-block">성형</span> 031-210-4930</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <span className="text-red-600 shrink-0"><MapPin className="size-4" /></span>
                <span className="text-[13px]">수원시 권선구 고색동, 경기도</span>
              </div>
            </FadeIn>

            {/* Download buttons */}
            <FadeIn delay={0.12} className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="https://drive.google.com/file/d/1AgTHbT-8cOA8aY0oUcxPmB6OSDs0g3Fw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-700 text-[13px] font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
              >
                <Download className="size-3.5 shrink-0" />
                Brochure Download
              </a>
              <a
                href="https://drive.google.com/file/d/1OMeKEWeAUa3uC3UYUXJz3uirCXcg57UE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-700 text-[13px] font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
              >
                <Download className="size-3.5 shrink-0" />
                CES2025 Catalogue
              </a>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="p-5 border border-red-100 bg-red-50">
                <p className="text-[10px] text-red-600 font-bold tracking-[0.25em] uppercase mb-2">NDA Policy</p>
                <p className="text-gray-600 text-[13px] leading-relaxed">{t.ndaBox}</p>
              </div>
            </FadeIn>
          </div>

          {/* Right: form */}
          <FadeIn delay={0.15}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-24 border border-gray-100">
                <div className="w-14 h-14 border border-red-200 flex items-center justify-center mb-6">
                  <BadgeCheck className="size-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{t.form.successTitle}</h3>
                <p className="text-gray-400 text-[13px] leading-relaxed max-w-xs">{t.form.successBody}</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label={t.form.firstName} id="fname" placeholder="길동" required />
                  <FormField label={t.form.lastName} id="lname" placeholder="홍" required />
                </div>
                <FormField label={t.form.company} id="company" placeholder="Samsung Electronics" required />
                <FormField label={t.form.email} id="email" type="email" placeholder="example@company.com" required />
                <FormField label={t.form.phone} id="phone" type="tel" placeholder="+82 10 1234 5678" />

                <div>
                  <label className="block text-gray-500 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
                    {t.form.category}
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-[13px] px-4 py-3 focus:outline-none focus:border-red-500 transition-colors" required>
                    <option value="">{t.form.categoryPlaceholder}</option>
                    <option>Soundbar ODM</option>
                    <option>Soundbar OEM</option>
                    <option>Custom Acoustic Driver</option>
                    <option>DSP Module</option>
                    <option>Full System Design</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-500 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
                    {t.form.brief}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.form.briefPlaceholder}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-[13px] px-4 py-3 focus:outline-none focus:border-red-500 transition-colors resize-none placeholder:text-gray-300"
                    required
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="relative mt-0.5 shrink-0">
                    <input type="checkbox" checked={ndaAccepted} onChange={(e) => setNdaAccepted(e.target.checked)} className="peer sr-only" required />
                    <div className="w-4 h-4 border border-gray-300 bg-white peer-checked:border-red-500 peer-checked:bg-red-50 transition-colors" />
                    {ndaAccepted && (
                      <svg className="absolute inset-0 m-auto w-2.5 h-2.5 text-red-600" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-400 text-[12px] leading-relaxed">{t.form.ndaCheck}</span>
                </label>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 text-[13px] font-bold text-white bg-red-600 hover:bg-red-700 py-4 transition-colors">
                  {t.form.submit}
                  <ChevronRight className="size-4" />
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */

function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  return (
    <footer className="bg-charcoal py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Image src="/bumjin%20icon.jpg" alt="Bumjin Electronics" width={150} height={44} className="h-12 w-auto mb-5 object-contain brightness-0 invert opacity-70" />
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-xs mb-5">{t.desc}</p>
            <a href="https://bumjin.career.greetinghr.com/ko/home" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-red-400 text-[13px] hover:text-red-300 transition-colors">
              {t.careers}
              <ExternalLink className="size-3" />
            </a>
          </div>

          <div>
            <p className="text-white/70 text-[10px] font-bold tracking-[0.25em] uppercase mb-5">{t.solutions}</p>
            <ul className="space-y-3">
              {["Soundbar ODM", "Soundbar OEM", "Acoustic Drivers", "DSP Engineering", "Smart Integration"].map((item) => (
                <li key={item}>
                  <a href="#solutions" className="text-gray-500 text-[13px] hover:text-gray-300 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/70 text-[10px] font-bold tracking-[0.25em] uppercase mb-5">{t.company}</p>
            <ul className="space-y-3">
              {[
                { label: nav.global, href: "#operations" },
                { label: nav.clients, href: "#clients" },
                { label: nav.contact, href: "#contact" },
                { label: t.careers, href: "https://bumjin.career.greetinghr.com/ko/home", ext: true },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} target={item.ext ? "_blank" : undefined} rel={item.ext ? "noopener noreferrer" : undefined} className="text-gray-500 text-[13px] hover:text-gray-300 transition-colors inline-flex items-center gap-1">
                    {item.label}
                    {item.ext && <ExternalLink className="size-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-[11px]">© {new Date().getFullYear()} {t.copyright}</p>
          <p className="text-gray-700 text-[10px] tracking-[0.3em] uppercase">{t.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── HERO VIDEO — small → full screen on scroll ─── */

const HERO_COPY: Record<Lang, { tag: string; headline: string; body: string }> = {
  ko: {
    tag: "Since 1994 — Bumjin Electronics",
    headline: "Your complete\nmanufacturing partner",
    body: "범진은 고객의 아이디어를 현실로 구현하기 위해 기획부터 설계, 금형, 생산까지 전 과정을 함께합니다. 축적된 제조 기술력과 품질 경쟁력을 바탕으로 전자산업의 혁신을 이끌며, 고객과 함께 성장하는 글로벌 제조 파트너로 나아가고 있습니다.",
  },
  en: {
    tag: "Since 1994 — Bumjin Electronics",
    headline: "Your complete\nmanufacturing partner",
    body: "From concept to mass production, Bumjin walks every step with our clients — design, tooling, injection molding, and assembly. Backed by 30 years of manufacturing excellence, we drive innovation in the electronics industry as a trusted global partner.",
  },
  zh: {
    tag: "自1994年 — 范振电子",
    headline: "您的全程\n制造合作伙伴",
    body: "从创意到量产，范振陪伴客户走过每一步——设计、模具、注塑成型、组装。依托30年制造卓越，我们作为值得信赖的全球合作伙伴，引领电子行业创新。",
  },
  ja: {
    tag: "1994年創業 — 범진電子",
    headline: "お客様の完全な\n製造パートナー",
    body: "コンセプトから量産まで、設計・金型・射出成形・組立のすべてをご一緒します。30年の製造技術と品質競争力を背景に、電子産業の革新を牽引するグローバル製造パートナーとして歩んでいます。",
  },
};

function HeroVideo({ lang }: { lang: Lang }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const c = HERO_COPY[lang];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Video window: 72% → 100% of viewport */
  const scale        = useTransform(scrollYProgress, [0, 0.85], [0.72, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.75], [16, 0]);

  /* Text: visible at start, fades as video expands */
  const textOpacity = useTransform(scrollYProgress, [0, 0.32], [1, 0]);
  const textY       = useTransform(scrollYProgress, [0, 0.32], [0, -20]);

  /* Scroll hint: fades quickly */
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <div ref={containerRef} style={{ height: "200vh" }}>
      <div className="sticky top-0 h-screen bg-white overflow-hidden flex items-center justify-center">
        <motion.div
          className="relative w-full h-full overflow-hidden"
          style={{ scale, borderRadius }}
        >
          {/* Video */}
          <video
            src="/Bumjin_Web_video_720p"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay so text is readable */}
          <div className="absolute inset-0 bg-black/52" />

          {/* Text overlay — fades out as video expands */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
            style={{ opacity: textOpacity, y: textY }}
          >
            <p className="text-[15px] font-bold tracking-[0.45em] uppercase text-white/55 mb-7">
              {c.tag}
            </p>
            <h1
              className="font-black text-white leading-[1.05] tracking-[-0.02em] mb-7 whitespace-pre-line"
              style={{ fontSize: "clamp(57px, 7.5vw, 114px)" }}
            >
              {c.headline}
            </h1>
            <p className="text-white/65 text-[21px] leading-relaxed max-w-xl">
              {c.body}
            </p>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 text-white/40 pointer-events-none"
            style={{ opacity: hintOpacity }}
          >
            <p className="text-[9px] tracking-[0.4em] uppercase">Scroll</p>
            <ChevronDown className="size-3.5 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── PAGE ─── */

export default function Page() {
  const [lang, setLang] = useState<Lang>("ko");

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation lang={lang} setLang={setLang} />
      <main>
        <HeroVideo lang={lang} />
        <CompanySection lang={lang} />
        <BusinessSection lang={lang} />
        <TechnologySection lang={lang} />
        <GlobalSection lang={lang} />
        <ProcessSection lang={lang} />
        <ClientsSection lang={lang} />
        <CTAStrip lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

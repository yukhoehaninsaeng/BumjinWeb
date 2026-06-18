"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Globe2,
  Shield,
  BadgeCheck,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
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
    { label: t.company, href: "#about" },
    { label: t.business, href: "#solutions" },
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
          <Image src="/bumjin%20icon.jpg" alt="Bumjin Electronics" width={120} height={36} priority className="h-9 w-auto object-contain" />
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
              {LANG_OPTIONS.find((o) => o.code === lang)?.label}
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

/* ─── CAPABILITIES — 2-col list ─── */

const CAPABILITIES = [
  "DSP Engineering & Acoustic Tuning",
  "Custom Driver Manufacturing",
  "Dolby Atmos / DTS:X Certification",
  "Class-D & Class-AB Amplifier Design",
  "Wi-Fi 6 & Bluetooth 5.3 Integration",
  "HDMI eARC / HDMI 2.1 Modules",
  "In-house CNC & EDM Tooling",
  "SMT Assembly & AOI Verification",
  "Hi-Res Audio Certification",
  "AirPlay 2 / Chromecast Integration",
  "Anechoic Chamber Measurement",
  "ISO 9001 / IATF 16949 QMS",
];

function TechnologySection({ lang }: { lang: Lang }) {
  const t = translations[lang].technology;

  return (
    <section id="capabilities" className="bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          <FadeIn>
            <SectionLabel>{t.label}</SectionLabel>
            <h2
              className="font-black text-gray-900 leading-[1.0] tracking-tight mb-6"
              style={{ fontSize: "clamp(34px, 4.2vw, 60px)" }}
            >
              {t.heading}
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">{t.subtitle}</p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {CAPABILITIES.map((cap, i) => (
                <div key={i} className="flex items-center gap-3 py-3.5 border-b border-gray-100">
                  <div className="w-1 h-1 rounded-full bg-red-600 shrink-0" />
                  <span className="text-gray-700 text-[13px]">{cap}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── GLOBAL OPERATIONS ─── */

const LOCATIONS = [
  { city: "수원, 한국", role: "HQ · 금형사업장", type: "hq" },
  { city: "안성, 한국", role: "사출성형 공장", type: "plant" },
  { city: "티후아나, 멕시코", role: "BJAM MEXICANA", type: "plant" },
  { city: "찌카랑, 인도네시아", role: "동남아 생산 거점", type: "plant" },
  { city: "꽝닌, 베트남", role: "베트남 제조 허브", type: "plant" },
  { city: "후이저우, 중국", role: "광동 부품 공장", type: "plant" },
  { city: "뢰린치, 헝가리", role: "유럽 제조 거점", type: "plant" },
];

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
              {LOCATIONS.map((loc, i) => (
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
            <FactoryGlobeMap mapHint={t.mapHint} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS — horizontal grid ─── */

const PROCESS_STEPS = [
  { step: "01", title: "Design & Engineering", body: "Co-development with client R&D. Acoustic modelling, PCB review, industrial design." },
  { step: "02", title: "Tooling & Mold", body: "In-house CNC & EDM mold fab. Lead times 40% below industry average." },
  { step: "03", title: "Component & SMT", body: "Dual-source procurement. High-speed SMT with 0201 accuracy & AOI." },
  { step: "04", title: "Assembly & Calibration", body: "Robotic assembly. 100% end-of-line acoustic calibration & DSP flash." },
  { step: "05", title: "QC & Compliance", body: "AQL sampling, CE/FCC/UL compliance, brand-specific packaging." },
  { step: "06", title: "Global Logistics", body: "Air, sea & rail from 6 regional hubs. Direct 3PL integration." },
];

function ProcessSection({ lang }: { lang: Lang }) {
  const t = translations[lang].process;

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
          <a href="#contact" className="hidden lg:inline-flex items-center gap-2 text-[13px] font-bold text-gray-700 border border-gray-300 hover:border-gray-900 px-6 py-3 transition-colors mt-4 lg:mt-0">
            {t.cta}
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 divide-x divide-gray-100">
          {PROCESS_STEPS.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.06}>
              <div className="pt-8 pb-4 pr-4 lg:pr-6 pl-4 first:pl-0">
                <p className="text-[11px] font-mono text-red-600 mb-4 tracking-wider">{step.step}</p>
                <p className="text-[13px] font-bold text-gray-900 mb-2 leading-snug">{step.title}</p>
                <p className="text-[12px] text-gray-400 leading-relaxed">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
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
              {[
                { icon: <Mail className="size-4" />, label: "bd@bumjin.co.kr" },
                { icon: <Phone className="size-4" />, label: "031-493-9415" },
                { icon: <MapPin className="size-4" />, label: "수원시 권선구 고색동, 경기도" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-gray-500">
                  <span className="text-red-600 shrink-0">{item.icon}</span>
                  <span className="text-[13px]">{item.label}</span>
                </div>
              ))}
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
            <Image src="/bumjin%20icon.jpg" alt="Bumjin Electronics" width={110} height={34} className="h-9 w-auto mb-5 object-contain brightness-0 invert opacity-70" />
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

/* ─── SCROLL VIDEO SECTION ─── */

const SCROLL_STAGES: Record<Lang, { tag: string; text: string; sub: string }[]> = {
  ko: [
    { tag: "SOUND DESIGN", text: "소리를 설계하는\n기술", sub: "1994년부터 이어온 음향 엔지니어링의 여정" },
    { tag: "GLOBAL MANUFACTURING", text: "세계 6개국\n생산 거점", sub: "한국·멕시코·인도네시아·베트남·중국·헝가리" },
    { tag: "ODM / OEM PARTNERSHIP", text: "30년의 신뢰\n파트너십", sub: "삼성·LG·소니가 선택한 사운드바 제조사" },
    { tag: "FUTURE OF SOUND", text: "소리의 미래를\n함께 설계합니다", sub: "귀하의 브랜드, 범진의 기술" },
  ],
  en: [
    { tag: "SOUND DESIGN", text: "Engineering\nSound", sub: "30 years of acoustic engineering excellence" },
    { tag: "GLOBAL MANUFACTURING", text: "6 Countries.\nOne Standard.", sub: "Korea · Mexico · Indonesia · Vietnam · China · Hungary" },
    { tag: "ODM / OEM PARTNERSHIP", text: "Trusted by\nthe World's Best", sub: "Samsung · LG · Sony choose Bumjin" },
    { tag: "FUTURE OF SOUND", text: "Shaping\nTomorrow's Sound", sub: "Your brand. Our engineering." },
  ],
  zh: [
    { tag: "声音设计", text: "设计声音\n的技术", sub: "自1994年起的声学工程之旅" },
    { tag: "全球制造", text: "全球6个\n国家生产基地", sub: "韩国·墨西哥·印度尼西亚·越南·中国·匈牙利" },
    { tag: "ODM / OEM 合作", text: "30年的信任\n合作伙伴", sub: "三星·LG·索尼选择范振" },
    { tag: "声音的未来", text: "共同设计\n声音的未来", sub: "您的品牌，范振的技术" },
  ],
  ja: [
    { tag: "サウンドデザイン", text: "サウンドを\n設計する技術", sub: "1994年から続く音響エンジニアリングの歩み" },
    { tag: "グローバル製造", text: "世界6カ国\n生産拠点", sub: "韓国·メキシコ·インドネシア·ベトナム·中国·ハンガリー" },
    { tag: "ODM / OEM パートナー", text: "30年の信頼\nパートナーシップ", sub: "Samsung·LG·Sonyが選ぶ" },
    { tag: "サウンドの未来", text: "サウンドの\n未来を共に", sub: "お客様のブランド、범진の技術" },
  ],
};

function ScrollVideoSection({ lang }: { lang: Lang }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 64px", "end end"],
  });

  /* Scrub video.currentTime on scroll without triggering re-renders */
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (p) => {
      const v = videoRef.current;
      if (v && v.readyState >= 2 && v.duration) {
        v.currentTime = p * v.duration;
      }
    });
    return unsub;
  }, [scrollYProgress]);

  /* Stage 0: 0 → 0.28 */
  const op0 = useTransform(scrollYProgress, [0, 0.04, 0.22, 0.28], [0, 1, 1, 0]);
  const y0  = useTransform(scrollYProgress, [0, 0.06], [24, 0]);
  /* Stage 1: 0.28 → 0.54 */
  const op1 = useTransform(scrollYProgress, [0.26, 0.32, 0.48, 0.54], [0, 1, 1, 0]);
  const y1  = useTransform(scrollYProgress, [0.26, 0.34], [24, 0]);
  /* Stage 2: 0.54 → 0.80 */
  const op2 = useTransform(scrollYProgress, [0.52, 0.58, 0.74, 0.80], [0, 1, 1, 0]);
  const y2  = useTransform(scrollYProgress, [0.52, 0.60], [24, 0]);
  /* Stage 3: 0.80 → 1.0 (stays visible at end) */
  const op3 = useTransform(scrollYProgress, [0.78, 0.84, 1.0, 1.0], [0, 1, 1, 1]);
  const y3  = useTransform(scrollYProgress, [0.78, 0.86], [24, 0]);

  /* Progress dots */
  const dot0 = useTransform(scrollYProgress, [0, 0.06, 0.22, 0.28], [0.3, 1, 1, 0.3]);
  const dot1 = useTransform(scrollYProgress, [0.26, 0.34, 0.48, 0.54], [0.3, 1, 1, 0.3]);
  const dot2 = useTransform(scrollYProgress, [0.52, 0.60, 0.74, 0.80], [0.3, 1, 1, 0.3]);
  const dot3 = useTransform(scrollYProgress, [0.78, 0.86, 1.0, 1.0], [0.3, 1, 1, 1]);

  /* Scroll hint fades out after first stage */
  const hintOp = useTransform(scrollYProgress, [0, 0.07], [1, 0]);

  const stageData = [
    { op: op0, y: y0, dot: dot0 },
    { op: op1, y: y1, dot: dot1 },
    { op: op2, y: y2, dot: dot2 },
    { op: op3, y: y3, dot: dot3 },
  ];

  const s = SCROLL_STAGES[lang];

  return (
    <div ref={containerRef} style={{ height: "300vh" }}>
      {/* top-16 = nav height (64px); height fills remaining viewport below nav */}
      <div className="sticky top-16 overflow-hidden bg-black" style={{ height: "calc(100vh - 4rem)" }}>
        <video
          ref={videoRef}
          src="/Soundbar.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/25" />

        {/* Text stages — stack on same spot, each fades in/out */}
        {stageData.map(({ op, y }, i) => (
          <motion.div
            key={i}
            className="absolute bottom-16 left-0 right-0 max-w-7xl mx-auto px-6 lg:px-10"
            style={{ opacity: op, y }}
          >
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-red-400/80 mb-4">
              {s[i].tag}
            </p>
            <h2
              className="font-black text-white leading-[1.05] tracking-[-0.02em] mb-4 whitespace-pre-line"
              style={{ fontSize: "clamp(40px, 5.5vw, 82px)" }}
            >
              {s[i].text}
            </h2>
            <p className="text-white/55 text-[15px]">{s[i].sub}</p>
          </motion.div>
        ))}

        {/* Progress dots — right side */}
        <div className="absolute bottom-10 right-8 flex flex-col gap-2 items-center">
          {stageData.map(({ dot }, i) => (
            <motion.div
              key={i}
              className="w-[3px] h-[3px] rounded-full bg-white"
              style={{ opacity: dot }}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none"
          style={{ opacity: hintOp }}
        >
          <div className="flex flex-col items-center gap-1.5 text-white/40">
            <p className="text-[9px] tracking-[0.4em] uppercase">Scroll</p>
            <ChevronDown className="size-3.5 animate-bounce" />
          </div>
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
        <HeroSection lang={lang} />
        <ScrollVideoSection lang={lang} />
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

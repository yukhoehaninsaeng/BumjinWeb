"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  type LucideIcon,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Globe,
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
  Waves,
  Activity,
  Speaker,
  Zap,
  Cpu,
  Layers,
  Music,
  Award,
  BadgeCheck,
} from "lucide-react";

import { FactoryGlobeMap } from "@/components/ui/factory-globe-map";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { translations, type Lang } from "@/lib/translations";
import { useLang } from "@/lib/hooks/useLang";
import { useAdminContent } from "@/lib/hooks/useAdminContent";
import type { GlobalSiteItem, ClientItem } from "@/lib/content-store";

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
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-red-600 mb-4">
      {children}
    </p>
  );
}

/* ─── COMPANY ─── */

function CompanySection({ lang }: { lang: Lang }) {
  const t = translations[lang].company;

  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>{t.label}</SectionLabel>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16">
          <FadeIn>
            <h2
              className="font-black leading-[1.08] tracking-tight text-gray-900"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              {t.heading}
              <br />
              <span className="text-red-600">{t.headingAccent}</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col justify-end">
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">{t.body}</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#contact" className="inline-flex items-center gap-2 text-red-600 font-semibold text-[13px] hover:gap-3 transition-all group">
                {t.inquiryLink}
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <Link href="/company" className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900 font-medium text-[13px] transition-colors">
                {translations[lang].business.more}
                <ChevronRight className="size-4" />
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Large stats */}
        <div className="border-t border-gray-200 pt-12 grid grid-cols-2 lg:grid-cols-5 gap-y-8">
          {t.stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.05}>
              <div
                className={`${
                  i % 2 === 1 ? "pl-4" : "pr-4"
                } ${i > 0 ? "lg:pl-8" : "lg:pl-0"} ${
                  i < t.stats.length - 1 ? "lg:pr-8 lg:border-r lg:border-gray-200/80" : "lg:pr-0"
                }`}
              >
                <p className="text-[40px] lg:text-[52px] font-black text-gray-900 leading-none tracking-tight">
                  {s.value}
                </p>
                <p className="text-[13px] font-semibold text-gray-800 mt-3">{s.label}</p>
                {s.sub && <p className="text-[11px] text-gray-400 mt-1">{s.sub}</p>}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── BUSINESS AREAS — editorial numbered list with real links ─── */

const BUSINESS_LINKS = [
  "/business/electronics",
  "/business/electronics",
  "/business/molding",
  "/business/electronics",
];

function BusinessSection({ lang }: { lang: Lang }) {
  const t = translations[lang].business;

  return (
    <section id="solutions" className="bg-[#F8F9FB] py-20 lg:py-28 border-y border-gray-200/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header row — Motrex style */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <SectionLabel>{t.label}</SectionLabel>
            <h2
              className="font-bold text-gray-900 leading-[1.12] tracking-tight"
              style={{ fontSize: "clamp(30px, 3.8vw, 48px)" }}
            >
              {t.heading}
            </h2>
          </div>
          <div className="flex flex-col lg:items-end gap-3">
            <p className="text-gray-500 text-[14px] max-w-sm lg:text-right leading-relaxed">
              {t.subtitle}
            </p>
            <Link
              href="/business"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gray-900 hover:text-red-600 transition-colors group"
            >
              <span>{t.more}</span>
              <ArrowUpRight className="size-4 text-red-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4-column hairline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-200 bg-white">
          {t.areas.map((area, i) => (
            <Link
              key={area.label}
              href={BUSINESS_LINKS[i] ?? "/business"}
              className="group relative flex flex-col justify-between p-7 lg:p-8 border-r border-b border-gray-200 hover:bg-[#F8F9FB] transition-colors min-h-[260px]"
            >
              {/* Top red accent bar on hover */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-[2px] bg-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[12px] font-semibold text-red-600 tracking-wider tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="size-4 text-gray-300 group-hover:text-red-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-[19px] font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-snug mb-1.5">
                  {area.title}
                </h3>
                <p className="text-[11px] font-medium tracking-wide text-gray-400 uppercase mb-4">
                  {area.titleSub}
                </p>
              </div>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                {area.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CAPABILITIES — Filtering Tabs ─── */

type CapCategory = "all" | "acoustic" | "manufacturing" | "certification";

const CAP_ICON_MAP: Record<string, LucideIcon> = {
  c1: Waves,
  c2: Speaker,
  c3: Activity,
  c4: Zap,
  c5: Cpu,
  c6: Layers,
  c7: Settings2,
  c8: Wrench,
  c9: Music,
  c10: Award,
  c11: ShieldCheck,
  c12: BadgeCheck,
};

function TechnologySection({ lang }: { lang: Lang }) {
  const t = translations[lang].technology;
  const [activeTab, setActiveTab] = useState<CapCategory>("all");

  const tabs: { key: CapCategory; label: string }[] = [
    { key: "all", label: t.tabs.all },
    { key: "acoustic", label: t.tabs.acoustic },
    { key: "manufacturing", label: t.tabs.manufacturing },
    { key: "certification", label: t.tabs.certification },
  ];

  const filtered =
    activeTab === "all"
      ? t.items
      : t.items.filter((c) => c.category === activeTab);

  return (
    <section id="capabilities" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <SectionLabel>{t.label}</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <h2
              className="font-black text-gray-900 leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(30px, 3.8vw, 52px)" }}
            >
              {t.heading}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 text-[12px] font-semibold tracking-wide rounded-sm transition-all ${
                    activeTab === tab.key
                      ? "bg-gray-900 text-white"
                      : "border border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900"
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
              const Icon = CAP_ICON_MAP[cap.id] ?? Cpu;
              return (
                <motion.div
                  key={cap.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-gray-200 rounded-sm p-6 group hover:border-gray-400 hover:shadow-sm transition-all bg-white"
                >
                  <div className="w-10 h-10 rounded-sm bg-gray-50 flex items-center justify-center mb-5 group-hover:bg-red-50 transition-colors">
                    <Icon className="size-5 text-gray-500 group-hover:text-red-600 transition-colors" />
                  </div>
                  <h3 className="text-[14px] font-bold text-gray-900 mb-2 leading-snug">{cap.title}</h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{cap.desc}</p>
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

function GlobalSection({ lang, globalSites }: { lang: Lang; globalSites?: GlobalSiteItem[] | null }) {
  const t = translations[lang].global;
  const locations = (globalSites && globalSites.length > 0) ? globalSites : t.locations;

  return (
    <section id="operations" className="bg-gray-50 py-20 lg:py-28 border-y border-gray-200/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <FadeIn>
              <SectionLabel>{t.label}</SectionLabel>
              <h2
                className="font-black text-gray-900 leading-[1.05] tracking-tight mb-5"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                {t.heading}
                <span className="block text-red-600">{t.headingAccent}</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">{t.subtitle}</p>
            </FadeIn>

            <div>
              {locations.map((loc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.45 }}
                  className="flex items-center gap-4 py-3.5 border-b border-gray-200"
                >
                  <div className={`w-2 h-2 rounded-full shrink-0 ${loc.type === "hq" ? "bg-red-600" : "bg-gray-400"}`} />
                  <span className="text-[13px] font-semibold text-gray-900 flex-1">{loc.city}</span>
                  <span className="text-[12px] text-gray-500">{loc.role}</span>
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

interface ProcessStepItem {
  step: string;
  title: string;
  titleEn: string;
  body: string;
  detail: string;
  icon: LucideIcon;
}

const PROCESS_ICONS: LucideIcon[] = [Target, PenTool, Settings2, Wrench, ShieldCheck, Package];

function ProcessCard({
  step,
  viewDetailLabel,
  onClick,
}: {
  step: ProcessStepItem;
  viewDetailLabel: string;
  onClick: () => void;
}) {
  const Icon = step.icon;
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
      className="pt-8 pb-6 pr-5 lg:pr-7 pl-5 lg:pl-7 first:pl-0 cursor-pointer group border-t-2 border-transparent hover:border-red-600 transition-[border-color] duration-200"
    >
      <p className="text-[11px] font-mono text-red-600 mb-4 tracking-wider">{step.step}</p>
      <Icon className="size-4 text-gray-400 group-hover:text-red-600 transition-colors mb-3" />
      <p className="text-[14px] font-bold text-gray-900 mb-2 leading-snug">{step.title}</p>
      <p className="text-[12px] text-gray-500 leading-relaxed">{step.body}</p>
      <p className="text-[11px] font-medium text-red-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {viewDetailLabel} →
      </p>
    </motion.div>
  );
}

function ProcessModal({ step, onClose }: { step: ProcessStepItem; onClose: () => void }) {
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
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-white rounded-sm z-[61] p-8 shadow-2xl border border-gray-200"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-[11px] font-mono text-red-600 tracking-wider mb-2">{step.step}</p>
            <h3 className="text-[24px] font-black text-gray-900 leading-tight">{step.title}</h3>
            <p className="text-[11px] font-medium text-gray-400 tracking-[2px] uppercase mt-1">
              {step.titleEn}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-900 transition-colors shrink-0"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="w-11 h-11 rounded-sm bg-gray-50 flex items-center justify-center mb-5">
          <Icon className="size-5 text-red-600" />
        </div>
        <p className="text-gray-600 text-[14px] leading-[1.75]">{step.detail}</p>
      </motion.div>
    </>
  );
}

function ProcessSection({ lang }: { lang: Lang }) {
  const t = translations[lang].process;
  const [activeStep, setActiveStep] = useState<ProcessStepItem | null>(null);

  const steps: ProcessStepItem[] = t.steps.map((s, i) => ({
    ...s,
    icon: PROCESS_ICONS[i] ?? Target,
  }));

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between pb-10 border-b border-gray-200 mb-0">
          <div>
            <SectionLabel>{t.label}</SectionLabel>
            <h2
              className="font-black text-gray-900 leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(30px, 3.8vw, 52px)" }}
            >
              {t.heading}
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 text-[13px] font-bold text-gray-700 border border-gray-300 hover:border-gray-900 px-6 py-3 rounded-sm transition-colors mt-4 lg:mt-0"
          >
            {t.cta}
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 divide-x divide-gray-100">
          {steps.map((step) => (
            <ProcessCard
              key={step.step}
              step={step}
              viewDetailLabel={t.viewDetail}
              onClick={() => setActiveStep(step)}
            />
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

const CLIENT_PARTNERS = [
  { name: "SAMSUNG", tracking: "tracking-[0.06em]" },
  { name: "LG", tracking: "tracking-[0.14em]" },
  { name: "SONY", tracking: "tracking-[0.22em]" },
  { name: "HARMAN KARDON", tracking: "tracking-[0.14em]" },
  { name: "JBL", tracking: "tracking-[0.08em]" },
  { name: "PANASONIC", tracking: "tracking-[0.12em]" },
  { name: "HP", tracking: "tracking-[0.1em]" },
  { name: "DELL", tracking: "tracking-[0.16em]" },
];

function ClientsSection({
  lang,
  clients,
  images,
}: {
  lang: Lang;
  clients?: ClientItem[] | null;
  images?: Record<string, string>;
}) {
  const t = translations[lang].clients;
  const hasAdminClients = clients && clients.length > 0;

  const sliderItems = hasAdminClients
    ? clients!.map((c) => ({
        key: c.id,
        img: images?.[c.id],
        name: c.name,
        tracking: "tracking-[0.12em]",
      }))
    : CLIENT_PARTNERS.map((c) => ({ key: c.name, img: undefined, name: c.name, tracking: c.tracking }));

  function renderLogo(item: typeof sliderItems[0]) {
    if (item.img) {
      return (
        <Image
          src={item.img}
          alt={item.name}
          width={160}
          height={40}
          className="object-contain max-h-10 w-auto"
        />
      );
    }
    return (
      <span
        className={`text-[15px] lg:text-[17px] font-bold text-gray-500 hover:text-gray-900 transition-colors select-none whitespace-nowrap ${item.tracking}`}
      >
        {item.name}
      </span>
    );
  }

  return (
    <section id="clients" className="bg-gray-50 py-20 lg:py-28 border-y border-gray-200/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-14 items-end">
          <div className="lg:col-span-1">
            <SectionLabel>{t.label}</SectionLabel>
            <h2
              className="font-black text-gray-900 leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(30px, 3.6vw, 48px)" }}
            >
              {t.heading}
              <span className="block text-red-600">{t.headingAccent}</span>
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8">{t.subtitle}</p>
            <div className="grid grid-cols-3 gap-6">
              {t.stats.map((item) => (
                <div key={item.label} className="border-t-2 border-red-600 pt-4">
                  <p className="text-[28px] font-black text-gray-900">{item.value}</p>
                  <p className="text-[11px] text-gray-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 border-l border-t border-gray-200 bg-white">
          {sliderItems.map((c) => (
            <div
              key={c.key}
              className="flex items-center justify-center h-24 sm:h-28 px-6 border-r border-b border-gray-200 hover:bg-[#F8F9FB] transition-colors"
            >
              {renderLogo(c)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA STRIP ─── */

function CTAStrip({ lang }: { lang: Lang }) {
  const t = translations[lang].cta;

  return (
    <div className="relative bg-red-600 py-20 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-[0.06]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <FadeIn>
          <p className="text-white/75 text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">{t.label}</p>
          <h2
            className="font-black text-white mb-5 leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(28px, 4.2vw, 52px)" }}
          >
            {t.heading}
          </h2>
          <p className="text-white/85 text-[15px] mb-9 max-w-md mx-auto leading-relaxed">{t.subtitle}</p>
          <a href="#contact">
            <button className="text-[13px] font-bold text-red-600 bg-white hover:bg-gray-100 px-8 py-3.5 rounded-sm transition-colors shadow-lg inline-flex items-center gap-2">
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
      <label htmlFor={id} className="block text-gray-600 text-[11px] font-semibold tracking-wider uppercase mb-2">
        {label}
      </label>
      <input
        id={id} name={id} type={type} placeholder={placeholder} required={required}
        className="w-full bg-gray-50 border border-gray-200 rounded-sm text-gray-900 text-[13px] px-4 py-3 focus:outline-none focus:border-red-600 focus:bg-white transition-colors placeholder:text-gray-400"
      />
    </div>
  );
}

function ContactSection({ lang }: { lang: Lang }) {
  const t = translations[lang].contact;
  const [submitted, setSubmitted] = useState(false);
  const [ndaAccepted, setNdaAccepted] = useState(false);

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <FadeIn>
              <SectionLabel>{t.label}</SectionLabel>
              <h2
                className="font-black text-gray-900 leading-[1.08] tracking-tight mb-5"
                style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
              >
                {t.heading}
                <span className="block text-red-600">{t.headingAccent}</span>
                {t.headingEnd && <span className="block text-gray-900">{t.headingEnd}</span>}
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">{t.subtitle}</p>
            </FadeIn>

            <FadeIn delay={0.1} className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-600">
                <span className="text-red-600 shrink-0"><Mail className="size-4" /></span>
                <span className="text-[13px]">bd@bumjin.co.kr</span>
              </div>
              <div className="flex items-start gap-3 text-gray-600">
                <span className="text-red-600 shrink-0 mt-0.5"><Phone className="size-4" /></span>
                <div className="text-[13px] space-y-1">
                  {t.phones.map((p) => (
                    <p key={p.dept}>
                      <span className="text-gray-400 w-12 inline-block">{p.dept}</span> {p.num}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <span className="text-red-600 shrink-0"><MapPin className="size-4" /></span>
                <span className="text-[13px]">{t.address}</span>
              </div>
            </FadeIn>

            {/* Download buttons */}
            <FadeIn delay={0.12} className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="https://drive.google.com/file/d/1AgTHbT-8cOA8aY0oUcxPmB6OSDs0g3Fw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-gray-300 rounded-sm text-gray-700 text-[13px] font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
              >
                <Download className="size-3.5 shrink-0" />
                Brochure Download
              </a>
              <a
                href="https://drive.google.com/file/d/1OMeKEWeAUa3uC3UYUXJz3uirCXcg57UE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-gray-300 rounded-sm text-gray-700 text-[13px] font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
              >
                <Download className="size-3.5 shrink-0" />
                CES2025 Catalogue
              </a>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="p-5 border border-red-100 bg-red-50/70 rounded-sm">
                <p className="text-[10px] text-red-600 font-bold tracking-[0.2em] uppercase mb-2">NDA Policy</p>
                <p className="text-gray-600 text-[13px] leading-relaxed">{t.ndaBox}</p>
              </div>
            </FadeIn>
          </div>

          {/* Right: form */}
          <FadeIn delay={0.15}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-24 border border-gray-200 rounded-sm">
                <div className="w-14 h-14 rounded-sm border border-red-200 bg-red-50 flex items-center justify-center mb-6">
                  <BadgeCheck className="size-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{t.form.successTitle}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed max-w-xs">{t.form.successBody}</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5 bg-white border border-gray-200 rounded-sm p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label={t.form.firstName} id="fname" placeholder={t.form.firstNamePlaceholder} required />
                  <FormField label={t.form.lastName} id="lname" placeholder={t.form.lastNamePlaceholder} required />
                </div>
                <FormField label={t.form.company} id="company" placeholder="Samsung Electronics" required />
                <FormField label={t.form.email} id="email" type="email" placeholder="example@company.com" required />
                <FormField label={t.form.phone} id="phone" type="tel" placeholder="+82 10 1234 5678" />

                <div>
                  <label className="block text-gray-600 text-[11px] font-semibold tracking-wider uppercase mb-2">
                    {t.form.category}
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-sm text-gray-700 text-[13px] px-4 py-3 focus:outline-none focus:border-red-600 focus:bg-white transition-colors" required>
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
                  <label className="block text-gray-600 text-[11px] font-semibold tracking-wider uppercase mb-2">
                    {t.form.brief}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.form.briefPlaceholder}
                    className="w-full bg-gray-50 border border-gray-200 rounded-sm text-gray-900 text-[13px] px-4 py-3 focus:outline-none focus:border-red-600 focus:bg-white transition-colors resize-none placeholder:text-gray-400"
                    required
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="relative mt-0.5 shrink-0">
                    <input type="checkbox" checked={ndaAccepted} onChange={(e) => setNdaAccepted(e.target.checked)} className="peer sr-only" required />
                    <div className="w-4 h-4 rounded-sm border border-gray-300 bg-white peer-checked:border-red-600 peer-checked:bg-red-50 transition-colors" />
                    {ndaAccepted && (
                      <svg className="absolute inset-0 m-auto w-2.5 h-2.5 text-red-600" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-500 text-[12px] leading-relaxed">{t.form.ndaCheck}</span>
                </label>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 text-[13px] font-bold text-white bg-red-600 hover:bg-red-700 py-4 rounded-sm transition-colors">
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
            <div className="mb-5">
              <Image
                src="/bumjin-logo-dark.png"
                alt="Bumjin Electronics"
                width={140}
                height={42}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-[13px] leading-relaxed max-w-xs mb-5">{t.desc}</p>
            <a href="https://bumjin.career.greetinghr.com/ko/home" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-red-400 text-[13px] hover:text-red-300 transition-colors">
              {t.careers}
              <ExternalLink className="size-3" />
            </a>
          </div>

          <div>
            <p className="text-white/80 text-[10px] font-bold tracking-[0.25em] uppercase mb-5">{t.solutions}</p>
            <ul className="space-y-3">
              {[
                { label: "Soundbar ODM", href: "/business/electronics" },
                { label: "Soundbar OEM", href: "/business/electronics" },
                { label: "Precision Molding", href: "/business/molding" },
                { label: "Startup Lab", href: "/business/startup" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 text-[13px] hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/80 text-[10px] font-bold tracking-[0.25em] uppercase mb-5">{t.company}</p>
            <ul className="space-y-3">
              {[
                { label: nav.company, href: "/company" },
                { label: nav.global, href: "#operations" },
                { label: nav.clients, href: "#clients" },
                { label: nav.contact, href: "#contact" },
                { label: t.careers, href: "https://bumjin.career.greetinghr.com/ko/home", ext: true },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} target={item.ext ? "_blank" : undefined} rel={item.ext ? "noopener noreferrer" : undefined} className="text-gray-400 text-[13px] hover:text-white transition-colors inline-flex items-center gap-1">
                    {item.label}
                    {item.ext && <ExternalLink className="size-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[11px]">© {new Date().getFullYear()} {t.copyright}</p>
          <p className="text-gray-500 text-[10px] tracking-[0.25em] uppercase">{t.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── HERO VIDEO — Clean Full-Bleed Corporate Hero ─── */

const HERO_COPY: Record<Lang, { tag: string; headline: string; body: string }> = {
  ko: {
    tag: "Since 1993 — Bumjin Electronics",
    headline: "Your complete\nmanufacturing partner",
    body: "범진은 기획부터 설계, 금형, 사출, 조립까지 전 공정을 내재화하여 고객의 아이디어를 글로벌 양산 제품으로 완성합니다.",
  },
  en: {
    tag: "Since 1993 — Bumjin Electronics",
    headline: "Your complete\nmanufacturing partner",
    body: "From concept and acoustic engineering to in-house tooling, injection molding, and mass assembly — Bumjin delivers end-to-end electronics manufacturing.",
  },
  zh: {
    tag: "自1993年 — 范振电子",
    headline: "您的全程\n制造合作伙伴",
    body: "从产品策划、声学设计到自主模具、注塑与量产组装，范振提供全流程内制化的全球电子制造服务。",
  },
  ja: {
    tag: "1993年創業 — 範珍電子",
    headline: "お客様の完全な\n製造パートナー",
    body: "企画・音響設計から自社金型・射出成形・量産組立まで全工程を内製化し、お客様のアイデアを確かな製品へと導きます。",
  },
};

function HeroVideo({ lang }: { lang: Lang }) {
  const c = HERO_COPY[lang];
  const heroT = translations[lang].hero;
  const stats = [
    { value: "1993", label: heroT.stat1 },
    { value: "8", label: heroT.stat2 },
    { value: "50M+", label: heroT.stat3 },
    { value: "6", label: heroT.stat4 },
  ];

  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] pt-16 flex flex-col justify-between bg-gray-950 overflow-hidden">
      {/* Background Video */}
      <video
        src="/Bumjin_Web_video_720p.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Directional contrast overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/35" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full">
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-red-400 mb-5">
            {c.tag}
          </p>
          <h1
            className="font-black text-white leading-[1.08] tracking-tight mb-6 whitespace-pre-line max-w-4xl"
            style={{ fontSize: "clamp(36px, 5vw, 68px)" }}
          >
            {c.headline}
          </h1>
          <p className="text-white/80 text-[15px] lg:text-[17px] leading-relaxed max-w-xl mb-9">
            {c.body}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact">
              <button className="text-[13px] font-bold text-white bg-red-600 hover:bg-red-700 px-7 py-3.5 rounded-sm transition-colors inline-flex items-center gap-2">
                {heroT.cta1}
                <ArrowUpRight className="size-4" />
              </button>
            </a>
            <Link href="/business">
              <button className="text-[13px] font-semibold text-white border border-white/35 hover:border-white hover:bg-white/10 px-7 py-3.5 rounded-sm transition-colors">
                {heroT.cta2}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom key metrics bar */}
      <div className="relative z-10 border-t border-white/15 bg-black/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/15">
          {stats.map((s) => (
            <div key={s.label} className="py-5 px-6 lg:px-8 first:pl-0">
              <p className="text-[24px] lg:text-[28px] font-black text-white leading-none">{s.value}</p>
              <p className="text-[11px] text-white/65 tracking-wide mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */

export default function Page() {
  const [lang] = useLang();
  const adminContent = useAdminContent();

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <SiteHeader />
      <main>
        <HeroVideo lang={lang} />
        <CompanySection lang={lang} />
        <BusinessSection lang={lang} />
        <TechnologySection lang={lang} />
        <GlobalSection lang={lang} globalSites={adminContent?.global} />
        <ProcessSection lang={lang} />
        <ClientsSection lang={lang} clients={adminContent?.clients} images={adminContent?.images} />
        <CTAStrip lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
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
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 6 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.12em] uppercase text-gray-500 mb-3">
      <span aria-hidden="true" className="w-3 h-[2px] bg-red-600 inline-block" />
      <span>{children}</span>
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
              className="group flex flex-col justify-between p-7 lg:p-8 border-r border-b border-gray-200 hover:bg-[#F8F9FB] transition-colors min-h-[260px]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[12px] font-semibold text-gray-400 group-hover:text-red-600 transition-colors tracking-wider tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="size-4 text-gray-300 group-hover:text-red-600 transition-colors" />
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

/* ─── CAPABILITIES — 3-Pillar Architecture ─── */

function TechnologySection({ lang }: { lang: Lang }) {
  const t = translations[lang].technology;

  const pillars: {
    key: "acoustic" | "manufacturing" | "certification";
    num: string;
    title: string;
  }[] = [
    { key: "acoustic", num: "01", title: t.tabs.acoustic },
    { key: "manufacturing", num: "02", title: t.tabs.manufacturing },
    { key: "certification", num: "03", title: t.tabs.certification },
  ];

  return (
    <section id="capabilities" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12">
          <SectionLabel>{t.label}</SectionLabel>
          <h2
            className="font-black text-gray-900 leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(30px, 3.8vw, 48px)" }}
          >
            {t.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-l border-t border-gray-200">
          {pillars.map((pillar) => {
            const items = t.items.filter((c) => c.category === pillar.key);
            return (
              <div
                key={pillar.key}
                className="border-r border-b border-gray-200 bg-white flex flex-col"
              >
                <div className="px-7 py-6 border-b border-gray-200 bg-[#F8F9FB] flex items-baseline justify-between">
                  <h3 className="text-[17px] font-bold text-gray-900">
                    {pillar.title}
                  </h3>
                  <span className="text-[12px] font-semibold text-gray-400 tabular-nums">
                    {pillar.num}
                  </span>
                </div>
                <dl className="divide-y divide-gray-100 flex-1">
                  {items.map((cap) => (
                    <div key={cap.id} className="px-7 py-5">
                      <dt className="text-[14px] font-bold text-gray-900 mb-1.5 leading-snug">
                        {cap.title}
                      </dt>
                      <dd className="text-[13px] text-gray-500 leading-relaxed">
                        {cap.desc}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>
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

/* ─── PROCESS — Structured 6-Step Manufacturing Architecture ─── */

function ProcessSection({ lang }: { lang: Lang }) {
  const t = translations[lang].process;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <SectionLabel>{t.label}</SectionLabel>
            <h2
              className="font-black text-gray-900 leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(30px, 3.8vw, 48px)" }}
            >
              {t.heading}
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 text-[13px] font-semibold text-gray-700 border border-gray-300 hover:border-gray-900 px-6 py-3 rounded-sm transition-colors"
          >
            {t.cta}
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-gray-200">
          {t.steps.map((step) => (
            <div
              key={step.step}
              className="p-7 lg:p-8 border-r border-b border-gray-200 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-5">
                  <span className="text-[12px] font-semibold text-gray-400 tracking-wider tabular-nums">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-medium tracking-wider uppercase text-gray-400">
                    {step.titleEn}
                  </span>
                </div>
                <h3 className="text-[18px] font-bold text-gray-900 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13px] font-medium text-gray-700 mb-3 leading-relaxed">
                  {step.body}
                </p>
              </div>
              <p className="text-[12px] text-gray-500 leading-relaxed pt-4 border-t border-gray-100">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
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

        {/* Affiliates & Family Site strip (Motrex + BUMJIN.html) */}
        <div className="pt-8 pb-6 border-t border-white/10 grid lg:grid-cols-[1fr_auto] gap-6 items-start">
          <div className="grid sm:grid-cols-3 gap-4 text-[12px] text-gray-400">
            <div>
              <p className="text-white/90 font-semibold mb-1">
                {lang === "ko" ? "범진전자(주)" : "Bumjin Electronics Co., Ltd."}
              </p>
              <p className="text-gray-500 text-[11px] leading-relaxed">
                {lang === "ko"
                  ? "경기도 수원시 권선구 산업로 155번길 217"
                  : "217, Saneop-ro 155beon-gil, Suwon-si"}
                <br />
                TEL. 031-493-9415
              </p>
            </div>
            <div>
              <p className="text-white/90 font-semibold mb-1">
                {lang === "ko" ? "범진아이엔디(주)" : "Bumjin I&D Co., Ltd."}
              </p>
              <p className="text-gray-500 text-[11px] leading-relaxed">
                {lang === "ko"
                  ? "경기도 수원시 권선구 산업로 174-14"
                  : "174-14, Saneop-ro, Gwonseon-gu, Suwon-si"}
                <br />
                TEL. 031-676-1461
              </p>
            </div>
            <div>
              <p className="text-white/90 font-semibold mb-1">
                {lang === "ko" ? "범진시엔엘(주)" : "Bumjin C&L Co., Ltd."}
              </p>
              <p className="text-gray-500 text-[11px] leading-relaxed">
                {lang === "ko"
                  ? "경기도 수원시 권선구 산업로 155번길 217"
                  : "217, Saneop-ro 155beon-gil, Suwon-si"}
                <br />
                TEL. 031-493-9415
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">
              Family Site
            </span>
            <Link href="/company#affiliate-0" className="text-[12px] text-gray-400 hover:text-white transition-colors">
              {lang === "ko" ? "범진전자" : "Bumjin Electronics"}
            </Link>
            <Link href="/company#affiliate-1" className="text-[12px] text-gray-400 hover:text-white transition-colors">
              {lang === "ko" ? "범진IND" : "Bumjin I&D"}
            </Link>
            <Link href="/company#affiliate-2" className="text-[12px] text-gray-400 hover:text-white transition-colors">
              {lang === "ko" ? "범진C&L" : "Bumjin C&L"}
            </Link>
            <a
              href="https://bumjin.career.greetinghr.com/ko/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12px] text-red-400 hover:text-red-300 transition-colors"
            >
              <span>Bumjin Recruit</span>
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
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

  return (
    <section className="relative min-h-[84vh] lg:min-h-[90vh] pt-16 flex items-center bg-gray-950 overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

      {/* Main content */}
      <div className="relative z-10 py-16 lg:py-24 w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full">
          <p className="inline-flex items-center gap-2.5 text-[12px] font-medium tracking-[0.16em] uppercase text-white/75 mb-5">
            <span aria-hidden="true" className="w-4 h-[2px] bg-red-600 inline-block" />
            <span>{c.tag}</span>
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
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

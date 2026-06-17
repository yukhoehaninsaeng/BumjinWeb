"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Cpu,
  Globe2,
  Layers,
  Mic2,
  Settings2,
  Shield,
  Zap,
  Factory,
  FlaskConical,
  PackageCheck,
  Truck,
  BadgeCheck,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  Volume2,
  Headphones,
  Wrench,
  Boxes,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { FactoryGlobeMap } from "@/components/ui/factory-globe-map";
import { translations, type Lang } from "@/lib/translations";

/* ─────────────── helpers ─────────────── */

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function RedLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-red-600 border-b-2 border-red-600 pb-1">
      {children}
    </span>
  );
}

function Divider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
  );
}

/* ─────────────── NAVIGATION ─────────────── */

const LANG_OPTIONS: { code: Lang; label: string }[] = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
];

function Navigation({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
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
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.svg"
            alt="Bumjin Electronics"
            width={140}
            height={44}
            priority
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-red-600 border border-gray-200 rounded px-3 py-1.5 transition-colors"
            >
              {LANG_OPTIONS.find((o) => o.code === lang)?.label}
              <ChevronDown className="size-3" />
            </button>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 top-full mt-1.5 bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden z-50 min-w-[110px]"
              >
                {LANG_OPTIONS.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      setLang(opt.code);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors hover:bg-red-50 hover:text-red-600 ${
                      lang === opt.code
                        ? "bg-red-50 text-red-600"
                        : "text-gray-700"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Contact CTA */}
          <a href="#contact" className="hidden sm:block">
            <button className="text-sm font-semibold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors">
              {t.contact}
            </button>
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-1.5 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-b border-gray-100 shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-6 py-3.5 text-sm font-medium text-gray-700 border-b border-gray-50 hover:bg-red-50 hover:text-red-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {/* Mobile language picker */}
          <div className="px-6 py-3 flex flex-wrap gap-2 border-b border-gray-50">
            {LANG_OPTIONS.map((opt) => (
              <button
                key={opt.code}
                onClick={() => {
                  setLang(opt.code);
                  setMobileOpen(false);
                }}
                className={`text-xs font-semibold px-3 py-1.5 rounded border transition-colors ${
                  lang === opt.code
                    ? "bg-red-600 text-white border-red-600"
                    : "border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-600"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="px-6 py-4">
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              <button className="w-full text-sm font-semibold text-white bg-red-600 hover:bg-red-700 py-3 rounded transition-colors">
                {t.contact}
              </button>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

/* ─────────────── HERO ─────────────── */

function HeroSection({ lang }: { lang: Lang }) {
  const t = translations[lang].hero;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 grid-lines" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-radial from-red-600/5 via-transparent to-transparent pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.025] pointer-events-none select-none">
        <SpeakerDiagramSVG />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full pt-24 pb-10">
        {/* Badge */}
        <FadeUp delay={0.05}>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] uppercase text-red-600 border border-red-200 bg-red-50 px-4 py-2 rounded mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            {t.badge}
          </span>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.15}>
          <h1 className="font-bold leading-[1.05] tracking-tight mb-8">
            <span className="block text-gray-900 text-5xl sm:text-7xl lg:text-8xl xl:text-[90px]">
              {t.line1}
            </span>
            <span className="block text-gradient-red text-5xl sm:text-7xl lg:text-8xl xl:text-[90px]">
              {t.line2}
            </span>
          </h1>
        </FadeUp>

        {/* Subtitle */}
        <FadeUp delay={0.28}>
          <p className="text-gray-500 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            {t.subtitle}
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a href="#contact">
              <button className="inline-flex items-center gap-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 px-8 py-4 rounded transition-colors shadow-lg shadow-red-600/20">
                {t.cta1}
                <ArrowUpRight className="size-4" />
              </button>
            </a>
            <a href="#solutions">
              <button className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 bg-white border border-gray-200 hover:border-red-300 hover:text-red-600 px-8 py-4 rounded transition-colors">
                {t.cta2}
              </button>
            </a>
          </div>
        </FadeUp>

        {/* Stats bar */}
        <FadeUp delay={0.55}>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100 border border-gray-100 rounded-xl overflow-hidden shadow-sm">
            {[
              { value: "30+", label: t.stat1 },
              { value: "8", label: t.stat2 },
              { value: "50M+", label: t.stat3 },
              { value: "6", label: t.stat4 },
            ].map((s) => (
              <div key={s.label} className="bg-white px-6 py-5 text-center">
                <p className="text-3xl font-bold text-red-600">{s.value}</p>
                <p className="text-gray-500 text-xs tracking-wide mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-gray-300 text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="size-5 text-gray-300" />
      </motion.div>
    </section>
  );
}

/* ─────────────── SPEAKER SVG ─────────────── */

function SpeakerDiagramSVG() {
  return (
    <svg width="700" height="700" viewBox="0 0 700 700" fill="none">
      <rect x="50" y="200" width="600" height="300" rx="12" stroke="#E8001D" strokeWidth="1.5" />
      <circle cx="200" cy="350" r="120" stroke="#E8001D" strokeWidth="1" />
      <circle cx="200" cy="350" r="90" stroke="#E8001D" strokeWidth="0.8" />
      <circle cx="200" cy="350" r="55" stroke="#E8001D" strokeWidth="0.8" />
      <circle cx="200" cy="350" r="20" stroke="#E8001D" strokeWidth="1.5" fill="#E8001D" fillOpacity="0.06" />
      <circle cx="420" cy="350" r="60" stroke="#111827" strokeWidth="1" />
      <circle cx="420" cy="350" r="35" stroke="#111827" strokeWidth="0.8" />
      <circle cx="420" cy="350" r="12" stroke="#111827" strokeWidth="1.5" fill="#111827" fillOpacity="0.04" />
      <circle cx="570" cy="350" r="45" stroke="#E8001D" strokeWidth="0.8" />
      <circle cx="570" cy="350" r="22" stroke="#E8001D" strokeWidth="0.8" />
      <circle cx="570" cy="350" r="8" stroke="#E8001D" strokeWidth="1.5" fill="#E8001D" fillOpacity="0.06" />
      <line x1="50" y1="460" x2="650" y2="460" stroke="#E5E7EB" strokeWidth="1" />
      <rect x="310" y="230" width="60" height="40" rx="3" stroke="#111827" strokeWidth="1" fill="#111827" fillOpacity="0.03" />
    </svg>
  );
}

/* ─────────────── COMPANY SECTION ─────────────── */

function CompanySection({ lang }: { lang: Lang }) {
  const t = translations[lang].company;

  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <FadeUp>
            <RedLabel>{t.label}</RedLabel>
            <h2 className="mt-6 text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              {t.heading}
              <br />
              <span className="text-gradient-red">{t.headingAccent}</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15} className="flex flex-col justify-end pt-4">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{t.body}</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm hover:gap-3 transition-all"
            >
              {t.inquiryLink}
              <ArrowUpRight className="size-4" />
            </a>
          </FadeUp>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 pt-14 border-t border-gray-100">
          {t.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-5xl lg:text-6xl font-bold text-gray-900 leading-none">{s.value}</p>
              <p className="text-gray-900 text-sm font-semibold mt-3">{s.label}</p>
              <p className="text-gray-400 text-xs mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── BUSINESS AREAS ─────────────── */

const BUSINESS_ICONS = [
  { icon: <Volume2 className="size-8" />, color: "#E8001D" },
  { icon: <Headphones className="size-8" />, color: "#111827" },
  { icon: <Wrench className="size-8" />, color: "#E8001D" },
  { icon: <Boxes className="size-8" />, color: "#111827" },
];

function BusinessSection({ lang }: { lang: Lang }) {
  const t = translations[lang].business;

  return (
    <section id="solutions" className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeUp>
            <RedLabel>{t.label}</RedLabel>
          </FadeUp>
          <FadeUp delay={0.1} className="mt-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t.heading}
            </h2>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-4">
            <p className="text-gray-500 text-lg leading-relaxed">{t.subtitle}</p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {t.areas.map((area, i) => (
            <FadeUp key={area.label} delay={i * 0.08}>
              <div className="group relative bg-white rounded-xl border border-gray-100 p-8 lg:p-10 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex items-start justify-between mb-6">
                  <span style={{ color: BUSINESS_ICONS[i].color }}>{BUSINESS_ICONS[i].icon}</span>
                  <span className="text-xs font-mono text-gray-200 font-bold text-lg">{area.label}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{area.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{area.titleSub}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-red-600">
                  <span>{t.more}</span>
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── TECHNOLOGY ─────────────── */

const TECH_CARDS = [
  {
    icon: <Cpu className="size-5" />,
    badge: "DSP Engineering",
    title: "Precision Digital Signal Processing",
    body: "In-house DSP tuning pipelines with parametric EQ, active crossover design, and room-correction algorithms — calibrated in our anechoic measurement chambers.",
    accent: "red",
  },
  {
    icon: <Mic2 className="size-5" />,
    badge: "Acoustic Drivers",
    title: "Custom Acoustic Driver Manufacturing",
    body: "Full vertical integration of woofer, mid-range, and tweeter production. Proprietary voice-coil winding and cone-forming processes optimised for SPL and THD performance.",
    accent: "dark",
  },
  {
    icon: <BadgeCheck className="size-5" />,
    badge: "Certification",
    title: "Dolby Atmos & Hi-Res Audio Ready",
    body: "End-to-end Dolby Atmos, DTS:X, and Hi-Res Audio certification pipelines embedded in our production workflow — reducing client time-to-market by 40%.",
    accent: "red",
  },
  {
    icon: <Zap className="size-5" />,
    badge: "Amplification",
    title: "Class-D & Class-AB Amplifier Design",
    body: "Custom Class-D amplifier ICs with power outputs from 20W to 1000W RMS, full EMC compliance, and thermal management solutions engineered for sustained peak loads.",
    accent: "dark",
  },
  {
    icon: <Layers className="size-5" />,
    badge: "Integration",
    title: "Wireless & Smart Platform Integration",
    body: "Integrated Wi-Fi 6, Bluetooth 5.3, AirPlay 2, Chromecast, HDMI eARC, and HDMI 2.1 modules with proprietary multi-room synchronisation firmware.",
    accent: "red",
  },
  {
    icon: <Shield className="size-5" />,
    badge: "Quality",
    title: "Zero-Defect Quality Architecture",
    body: "AI-driven optical inspection, 100% end-of-line acoustic test, and ISO 9001 / IATF 16949 certified quality management across all facilities.",
    accent: "dark",
  },
];

function TechnologySection({ lang }: { lang: Lang }) {
  const t = translations[lang].technology;

  return (
    <section id="capabilities" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <RedLabel>{t.label}</RedLabel>
          </FadeUp>
          <FadeUp delay={0.1} className="mt-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">{t.heading}</h2>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-4">
            <p className="text-gray-500 text-lg leading-relaxed">{t.subtitle}</p>
          </FadeUp>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECH_CARDS.map((card, i) => (
            <FadeUp key={card.badge} delay={i * 0.07}>
              <div className="group relative h-full bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    card.accent === "red" ? "bg-red-600" : "bg-gray-900"
                  }`}
                />
                <span
                  className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded mb-5 border ${
                    card.accent === "red"
                      ? "text-red-600 bg-red-50 border-red-100"
                      : "text-gray-700 bg-gray-50 border-gray-100"
                  }`}
                >
                  <span className={card.accent === "red" ? "text-red-600" : "text-gray-700"}>
                    {card.icon}
                  </span>
                  {card.badge}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── GLOBAL OPERATIONS (white) ─────────────── */

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
    <section id="operations" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <FadeUp>
              <RedLabel>
                <Globe2 className="size-3" />
                {t.label}
              </RedLabel>
            </FadeUp>
            <FadeUp delay={0.1} className="mt-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                {t.heading}
                <span className="block text-gradient-red">{t.headingAccent}</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2} className="mt-6">
              <p className="text-gray-600 text-lg leading-relaxed">{t.subtitle}</p>
            </FadeUp>

            <FadeUp delay={0.3} className="mt-10 space-y-3">
              {LOCATIONS.map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      loc.type === "hq"
                        ? "bg-red-600 shadow-[0_0_8px_rgba(232,0,29,0.7)]"
                        : "bg-gray-300"
                    }`}
                  />
                  <div className="flex-1 flex items-baseline justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-900 text-sm font-medium">{loc.city}</span>
                    <span className="text-gray-400 text-xs">{loc.role}</span>
                  </div>
                </motion.div>
              ))}
            </FadeUp>
          </div>

          {/* Right: rotating globe */}
          <FadeUp delay={0.15} className="relative w-full">
            <FactoryGlobeMap mapHint={t.mapHint} />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── MANUFACTURING PROCESS (light gray) ─────────────── */

const TIMELINE_STEPS = [
  {
    icon: <FlaskConical className="size-5" />,
    step: "01",
    title: "Design & Engineering",
    body: "Co-development with client R&D teams. Acoustic modelling, PCB schematic review, and industrial design feasibility.",
  },
  {
    icon: <Factory className="size-5" />,
    step: "02",
    title: "Tooling & Mold Production",
    body: "In-house CNC machining and EDM mold fabrication at our Suwon & Anseong facilities. Lead times 40% below industry average.",
  },
  {
    icon: <Layers className="size-5" />,
    step: "03",
    title: "Component Sourcing & SMT",
    body: "Global component procurement with dual-source strategy. High-speed SMT lines with 0201 placement accuracy and AOI verification.",
  },
  {
    icon: <Settings2 className="size-5" />,
    step: "04",
    title: "Final Assembly & Calibration",
    body: "Automated pick-and-place assembly with robotic speaker integration. 100% end-of-line acoustic calibration and DSP flashing.",
  },
  {
    icon: <PackageCheck className="size-5" />,
    step: "05",
    title: "QC, Compliance & Packaging",
    body: "Multi-stage quality gates: AQL sampling, regulatory compliance (CE, FCC, UL), and brand-specific packaging line integration.",
  },
  {
    icon: <Truck className="size-5" />,
    step: "06",
    title: "Global Logistics & Delivery",
    body: "Flexible shipment via air, sea, and rail from any of our 6 regional hubs. Direct integration with client 3PL partners.",
  },
];

function ProcessSection({ lang }: { lang: Lang }) {
  const t = translations[lang].process;

  return (
    <section className="relative bg-gray-50 py-24 lg:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Sticky left */}
          <div className="lg:sticky lg:top-32">
            <FadeUp>
              <RedLabel>
                <Factory className="size-3" />
                {t.label}
              </RedLabel>
            </FadeUp>
            <FadeUp delay={0.1} className="mt-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                {t.heading}
                <span className="block text-gradient-red">{t.headingAccent}</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2} className="mt-6">
              <p className="text-gray-600 text-lg leading-relaxed">{t.subtitle}</p>
            </FadeUp>
            <FadeUp delay={0.3} className="mt-8">
              <a href="#contact">
                <button className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 border border-gray-200 hover:border-red-500 hover:text-red-600 px-6 py-3 rounded transition-colors">
                  {t.cta}
                  <ArrowUpRight className="size-4" />
                </button>
              </a>
            </FadeUp>
          </div>

          {/* Steps */}
          <div className="relative">
            <div className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-red-600/50 via-gray-200 to-transparent" />
            <div className="space-y-0">
              {TIMELINE_STEPS.map((step, i) => (
                <FadeUp key={step.step} delay={i * 0.08}>
                  <div className="relative pl-14 pb-10 group">
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-lg bg-white border border-gray-200 group-hover:border-red-400 flex items-center justify-center transition-colors z-10 shadow-sm">
                      <span className="text-red-600">{step.icon}</span>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-lg p-5 group-hover:border-gray-200 group-hover:shadow-md transition-all shadow-sm">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-xs font-mono text-red-400 tracking-wider">{step.step}</span>
                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CLIENTS (white) ─────────────── */

const CLIENT_LOGOS = [
  {
    name: "Samsung Electronics",
    svg: (
      <svg width="160" height="40" viewBox="0 0 160 40" fill="none">
        <text x="0" y="30" fontFamily="var(--font-noto),system-ui" fontSize="22" fontWeight="700" letterSpacing="-0.5" fill="#9CA3AF">SAMSUNG</text>
      </svg>
    ),
  },
  {
    name: "LG Electronics",
    svg: (
      <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
        <text x="0" y="30" fontFamily="var(--font-noto),system-ui" fontSize="26" fontWeight="700" letterSpacing="2" fill="#9CA3AF">LG</text>
      </svg>
    ),
  },
  {
    name: "SONY",
    svg: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
        <text x="0" y="30" fontFamily="var(--font-noto),system-ui" fontSize="24" fontWeight="300" letterSpacing="6" fill="#9CA3AF">SONY</text>
      </svg>
    ),
  },
  {
    name: "Harman Kardon",
    svg: (
      <svg width="200" height="40" viewBox="0 0 200 40" fill="none">
        <text x="0" y="28" fontFamily="var(--font-noto),system-ui" fontSize="16" fontWeight="400" letterSpacing="3" fill="#9CA3AF">HARMAN KARDON</text>
      </svg>
    ),
  },
  {
    name: "JBL",
    svg: (
      <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
        <text x="0" y="32" fontFamily="var(--font-noto),system-ui" fontSize="32" fontWeight="900" letterSpacing="-1" fill="#9CA3AF">JBL</text>
      </svg>
    ),
  },
  {
    name: "Panasonic",
    svg: (
      <svg width="170" height="40" viewBox="0 0 170 40" fill="none">
        <text x="0" y="29" fontFamily="var(--font-noto),system-ui" fontSize="20" fontWeight="500" letterSpacing="4" fill="#9CA3AF">Panasonic</text>
      </svg>
    ),
  },
  {
    name: "HP",
    svg: (
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
        <text x="0" y="32" fontFamily="var(--font-noto),system-ui" fontSize="30" fontWeight="800" fill="#9CA3AF">hp</text>
      </svg>
    ),
  },
  {
    name: "Dell",
    svg: (
      <svg width="90" height="40" viewBox="0 0 90 40" fill="none">
        <text x="0" y="30" fontFamily="var(--font-noto),system-ui" fontSize="22" fontWeight="400" letterSpacing="2" fill="#9CA3AF">DELL</text>
      </svg>
    ),
  },
];

function ClientsSection({ lang }: { lang: Lang }) {
  const t = translations[lang].clients;

  return (
    <section id="clients" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <FadeUp>
            <RedLabel>{t.label}</RedLabel>
          </FadeUp>
          <FadeUp delay={0.1} className="mt-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t.heading}
              <span className="block text-gradient-red">{t.headingAccent}</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-4">
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
          </FadeUp>
        </div>

        <FadeUp delay={0.3}>
          <div className="relative">
            <ProgressiveBlur direction="left" blurIntensity={1} className="z-20" />
            <ProgressiveBlur direction="right" blurIntensity={1} className="z-20" />
            <InfiniteSlider gap={72} duration={28} className="py-6">
              {CLIENT_LOGOS.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 min-w-[80px]"
                  title={client.name}
                >
                  {client.svg}
                </div>
              ))}
            </InfiniteSlider>
            <InfiniteSlider gap={72} duration={34} reverse className="py-6 mt-2">
              {[...CLIENT_LOGOS].reverse().map((client) => (
                <div
                  key={`rev-${client.name}`}
                  className="flex items-center justify-center opacity-30 hover:opacity-70 transition-opacity duration-300 min-w-[80px]"
                  title={client.name}
                >
                  {client.svg}
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </FadeUp>

        <FadeUp delay={0.4} className="mt-14 grid grid-cols-3 gap-6 max-w-xl mx-auto text-center">
          {t.stats.map((item) => (
            <div key={item.label} className="border border-gray-100 rounded-xl p-5">
              <p className="text-2xl font-bold text-red-600">{item.value}</p>
              <p className="text-gray-500 text-xs mt-1">{item.label}</p>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}

/* ─────────────── CTA STRIP ─────────────── */

function CTAStrip({ lang }: { lang: Lang }) {
  const t = translations[lang].cta;

  return (
    <div className="relative bg-red-600 py-20 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <FadeUp>
          <p className="text-white/70 text-[11px] font-bold tracking-[0.35em] uppercase mb-5">{t.label}</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">{t.heading}</h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">{t.subtitle}</p>
          <a href="#contact">
            <button className="inline-flex items-center gap-2 text-sm font-bold text-red-600 bg-white hover:bg-gray-50 px-8 py-4 rounded transition-colors shadow-xl">
              {t.btn}
              <ArrowUpRight className="size-4" />
            </button>
          </a>
        </FadeUp>
      </div>
    </div>
  );
}

/* ─────────────── CONTACT (white) ─────────────── */

function FormField({
  label,
  id,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-gray-600 text-xs font-semibold tracking-widest uppercase mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-400"
      />
    </div>
  );
}

function ContactSection({ lang }: { lang: Lang }) {
  const t = translations[lang].contact;
  const [submitted, setSubmitted] = useState(false);
  const [ndaAccepted, setNdaAccepted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-radial from-red-50 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <FadeUp>
              <RedLabel>
                <Shield className="size-3" />
                {t.label}
              </RedLabel>
            </FadeUp>
            <FadeUp delay={0.1} className="mt-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                {t.heading}
                <span className="block text-gradient-red">{t.headingAccent}</span>
                {t.headingEnd}
              </h2>
            </FadeUp>
            <FadeUp delay={0.2} className="mt-6">
              <p className="text-gray-600 text-lg leading-relaxed">{t.subtitle}</p>
            </FadeUp>

            <FadeUp delay={0.3} className="mt-10 space-y-4">
              {[
                { icon: <Mail className="size-4" />, label: "bd@bumjin.co.kr" },
                { icon: <Phone className="size-4" />, label: "031-493-9415" },
                { icon: <MapPin className="size-4" />, label: "수원시 권선구 고색동, 경기도" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-gray-600">
                  <span className="text-red-600">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </FadeUp>

            <FadeUp delay={0.4} className="mt-10 p-5 border border-red-200 bg-red-50 rounded-lg">
              <p className="text-xs text-red-600 font-bold tracking-widest uppercase mb-2">NDA Policy</p>
              <p className="text-gray-600 text-sm leading-relaxed">{t.ndaBox}</p>
            </FadeUp>
          </div>

          {/* Right: form */}
          <FadeUp delay={0.2}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 bg-gray-50 border border-gray-100 rounded-xl p-8">
                <div className="w-16 h-16 rounded-full border border-red-200 flex items-center justify-center mb-6">
                  <BadgeCheck className="size-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.form.successTitle}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">{t.form.successBody}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-100 rounded-xl p-7 space-y-5 shadow-sm"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label={t.form.firstName} id="fname" placeholder="길동" required />
                  <FormField label={t.form.lastName} id="lname" placeholder="홍" required />
                </div>
                <FormField label={t.form.company} id="company" placeholder="Samsung Electronics" required />
                <FormField label={t.form.email} id="email" type="email" placeholder="example@company.com" required />
                <FormField label={t.form.phone} id="phone" type="tel" placeholder="+82 10 1234 5678" />

                <div>
                  <label className="block text-gray-600 text-xs font-semibold tracking-widest uppercase mb-2">
                    {t.form.category}
                  </label>
                  <select
                    className="w-full bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors"
                    required
                  >
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
                  <label className="block text-gray-600 text-xs font-semibold tracking-widest uppercase mb-2">
                    {t.form.brief}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.form.briefPlaceholder}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors resize-none placeholder:text-gray-400"
                    required
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="relative mt-0.5 flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={ndaAccepted}
                      onChange={(e) => setNdaAccepted(e.target.checked)}
                      className="peer sr-only"
                      required
                    />
                    <div className="w-4 h-4 border border-gray-300 rounded bg-white peer-checked:border-red-500 peer-checked:bg-red-50 transition-colors" />
                    {ndaAccepted && (
                      <svg className="absolute inset-0 m-auto w-2.5 h-2.5 text-red-600" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-500 text-xs leading-relaxed">{t.form.ndaCheck}</span>
                </label>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 py-4 rounded-lg transition-colors"
                >
                  {t.form.submit}
                  <ChevronRight className="size-4" />
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FOOTER (charcoal) ─────────────── */

function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  return (
    <footer className="relative bg-charcoal border-t border-white/8 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.svg"
              alt="Bumjin Electronics"
              width={130}
              height={40}
              className="h-9 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-5">{t.desc}</p>
            <a
              href="https://bumjin.career.greetinghr.com/ko/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-red-400 text-sm hover:text-red-300 transition-colors"
            >
              {t.careers}
              <ExternalLink className="size-3" />
            </a>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">{t.solutions}</p>
            <ul className="space-y-2.5">
              {["Soundbar ODM", "Soundbar OEM", "Acoustic Drivers", "DSP Engineering", "Smart Integration"].map((item) => (
                <li key={item}>
                  <a href="#solutions" className="text-gray-400 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">{t.company}</p>
            <ul className="space-y-2.5">
              {[
                { label: nav.global, href: "#operations" },
                { label: nav.clients, href: "#clients" },
                { label: nav.contact, href: "#contact" },
                { label: t.careers, href: "https://bumjin.career.greetinghr.com/ko/home", ext: true },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.ext ? "_blank" : undefined}
                    rel={item.ext ? "noopener noreferrer" : undefined}
                    className="text-gray-400 text-sm hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {item.label}
                    {item.ext && <ExternalLink className="size-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} {t.copyright}</p>
          <p className="text-gray-600 text-xs tracking-widest uppercase">{t.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── PAGE ─────────────── */

export default function Page() {
  const [lang, setLang] = useState<Lang>("ko");

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation lang={lang} setLang={setLang} />
      <main>
        <HeroSection lang={lang} />
        <CompanySection lang={lang} />
        <BusinessSection lang={lang} />
        <TechnologySection lang={lang} />
        <Divider />
        <GlobalSection lang={lang} />
        <Divider />
        <ProcessSection lang={lang} />
        <Divider />
        <ClientsSection lang={lang} />
        <CTAStrip lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

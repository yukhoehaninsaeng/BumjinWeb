"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
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
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { FactoryGlobeMap } from "@/components/ui/factory-globe-map";

/* ─────────────────────────── helpers ─────────────────────────── */

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
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-gold border border-gold/20 bg-gold/5 px-3 py-1.5 rounded-sm">
      {children}
    </span>
  );
}

function Divider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-charcoal-border to-transparent" />
  );
}

/* ───────────────────────── navigation ────────────────────────── */

const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Global Operations", href: "#operations" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative">
        {/* Glass backdrop */}
        <div className="absolute inset-0 bg-midnight/80 backdrop-blur-xl border-b border-charcoal-border/40" />
        <nav className="relative mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors">
              <span className="text-gold font-fraunces font-bold text-sm">B</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-cream text-sm font-semibold tracking-wider">BUMJIN</p>
              <p className="text-cream-dim text-[10px] tracking-[0.2em] uppercase">Electronics</p>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-cream-muted text-sm hover:text-cream transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Careers CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://bumjin.career.greetinghr.com/ko/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="careers" size="sm">
                Careers
                <ExternalLink className="!size-3" />
              </Button>
            </a>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-cream-muted hover:text-cream p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1">
                <span
                  className={`h-px bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5 w-5" : "w-5"}`}
                />
                <span
                  className={`h-px bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 w-0" : "w-4"}`}
                />
                <span
                  className={`h-px bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1.5 w-5" : "w-5"}`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative lg:hidden bg-midnight/95 backdrop-blur-xl border-b border-charcoal-border/40 px-6 pb-4"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-cream-muted hover:text-cream border-b border-charcoal-border/20 text-sm tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
}

/* ─────────────────────────── hero ────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background: layered grid + radial gradient */}
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="absolute inset-0 bg-gradient-radial from-electric-dark/10 via-transparent to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-radial from-gold/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Speaker cross-section diagram (SVG) */}
      <div className="absolute inset-0 flex items-center justify-end opacity-5 pr-8 lg:pr-24 pointer-events-none select-none">
        <SpeakerDiagramSVG />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20">
        <FadeUp delay={0.1}>
          <SectionLabel>
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" />
            ODM / OEM Manufacturing Partner
          </SectionLabel>
        </FadeUp>

        <FadeUp delay={0.25} className="mt-8">
          <h1 className="font-fraunces font-bold leading-[1.05] tracking-tight">
            <span className="block text-cream text-5xl sm:text-6xl lg:text-8xl xl:text-[6.5rem]">
              We Engineer
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-8xl xl:text-[6.5rem] text-gradient-gold">
              the Future
            </span>
            <span className="block text-cream text-5xl sm:text-6xl lg:text-8xl xl:text-[6.5rem]">
              of Sound.
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.4} className="mt-8 max-w-2xl">
          <p className="text-cream-muted text-lg lg:text-xl leading-relaxed">
            Bumjin Electronics delivers world-class soundbar ODM/OEM manufacturing
            across 8 global facilities — from precision mold engineering to automated
            mass assembly certified for Dolby Atmos, Harman, and beyond.
          </p>
        </FadeUp>

        <FadeUp delay={0.55} className="mt-10 flex flex-wrap gap-4 items-center">
          <a href="#contact">
            <Button variant="default" size="xl">
              Start a Partnership
              <ChevronRight />
            </Button>
          </a>
          <a href="#capabilities">
            <Button variant="outline" size="xl">
              Explore Capabilities
            </Button>
          </a>
        </FadeUp>

        {/* Key stats */}
        <FadeUp delay={0.7} className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-charcoal-border/40">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-fraunces text-3xl lg:text-4xl font-bold text-gradient-gold">
                  {stat.value}
                </p>
                <p className="text-cream-dim text-sm mt-1 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
    </section>
  );
}

const HERO_STATS = [
  { value: "8", label: "Global Facilities" },
  { value: "30+", label: "Years of Excellence" },
  { value: "50M+", label: "Units Shipped Annually" },
  { value: "100%", label: "Dolby Atmos Certified" },
];

function SpeakerDiagramSVG() {
  return (
    <svg
      width="700"
      height="700"
      viewBox="0 0 700 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer housing */}
      <rect x="50" y="200" width="600" height="300" rx="12" stroke="#C8A84B" strokeWidth="1.5" />
      {/* Woofer cone */}
      <circle cx="200" cy="350" r="120" stroke="#C8A84B" strokeWidth="1" />
      <circle cx="200" cy="350" r="90" stroke="#C8A84B" strokeWidth="0.8" />
      <circle cx="200" cy="350" r="55" stroke="#C8A84B" strokeWidth="0.8" />
      <circle cx="200" cy="350" r="20" stroke="#C8A84B" strokeWidth="1.5" fill="#C8A84B" fillOpacity="0.08" />
      {/* Tweeter */}
      <circle cx="420" cy="350" r="60" stroke="#3B82F6" strokeWidth="1" />
      <circle cx="420" cy="350" r="35" stroke="#3B82F6" strokeWidth="0.8" />
      <circle cx="420" cy="350" r="12" stroke="#3B82F6" strokeWidth="1.5" fill="#3B82F6" fillOpacity="0.08" />
      {/* Mid range */}
      <circle cx="570" cy="350" r="45" stroke="#C8A84B" strokeWidth="0.8" />
      <circle cx="570" cy="350" r="22" stroke="#C8A84B" strokeWidth="0.8" />
      <circle cx="570" cy="350" r="8" stroke="#C8A84B" strokeWidth="1.5" fill="#C8A84B" fillOpacity="0.08" />
      {/* PCB traces */}
      <line x1="50" y1="460" x2="650" y2="460" stroke="#2E2E42" strokeWidth="1" />
      <line x1="100" y1="460" x2="100" y2="490" stroke="#3B82F6" strokeWidth="0.8" />
      <line x1="150" y1="460" x2="150" y2="480" stroke="#C8A84B" strokeWidth="0.8" />
      <line x1="300" y1="460" x2="300" y2="490" stroke="#3B82F6" strokeWidth="0.8" />
      <line x1="500" y1="460" x2="500" y2="480" stroke="#C8A84B" strokeWidth="0.8" />
      {/* Labels */}
      <text x="200" y="500" textAnchor="middle" fill="#C8A84B" fontSize="9" letterSpacing="2">WOOFER</text>
      <text x="420" y="430" textAnchor="middle" fill="#3B82F6" fontSize="9" letterSpacing="2">TWEETER</text>
      <text x="570" y="415" textAnchor="middle" fill="#C8A84B" fontSize="9" letterSpacing="2">MID</text>
      {/* DSP chip */}
      <rect x="310" y="230" width="60" height="40" rx="3" stroke="#3B82F6" strokeWidth="1" fill="#3B82F6" fillOpacity="0.05" />
      <text x="340" y="255" textAnchor="middle" fill="#3B82F6" fontSize="7" letterSpacing="1.5">DSP</text>
    </svg>
  );
}

/* ──────────────────── global operations (globe) ──────────────── */

const LOCATIONS = [
  { city: "Suwon, Korea", role: "Headquarters & Mold Facility", type: "hq" },
  { city: "Anseong, Korea", role: "Injection Molding Plant", type: "plant" },
  { city: "Tijuana, Mexico", role: "BJAM MEXICANA Assembly", type: "plant" },
  { city: "Cikarang, Indonesia", role: "Southeast Asia Production", type: "plant" },
  { city: "Quang Ninh, Vietnam", role: "Vietnam Manufacturing Hub", type: "plant" },
  { city: "Huizhou, China", role: "Guangdong Component Plant", type: "plant" },
  { city: "Lőrinci, Hungary", role: "European Manufacturing", type: "plant" },
];

function GlobalOperationsSection() {
  return (
    <section id="operations" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0F]" />
      <div className="absolute inset-0 bg-gradient-radial from-electric-dark/8 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text content */}
          <div>
            <FadeUp>
              <SectionLabel>
                <Globe2 className="!size-3" />
                Global Footprint
              </SectionLabel>
            </FadeUp>

            <FadeUp delay={0.15} className="mt-6">
              <h2 className="font-fraunces text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-cream">
                Manufacturing
                <span className="block text-gradient-electric">Without Borders.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.25} className="mt-6">
              <p className="text-cream-muted text-lg leading-relaxed">
                With 8 strategically positioned facilities spanning 6 countries,
                Bumjin delivers flexible, cost-optimised production at every
                global supply-chain node — from Korean R&D roots to European
                and American nearshore capacity.
              </p>
            </FadeUp>

            <FadeUp delay={0.35} className="mt-10 space-y-3">
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
                        ? "bg-gold shadow-[0_0_6px_rgba(200,168,75,0.8)]"
                        : "bg-electric shadow-[0_0_4px_rgba(59,130,246,0.6)]"
                    }`}
                  />
                  <div className="flex-1 flex items-baseline justify-between border-b border-charcoal-border/20 pb-2">
                    <span className="text-cream text-sm font-medium">{loc.city}</span>
                    <span className="text-cream-dim text-xs">{loc.role}</span>
                  </div>
                </motion.div>
              ))}
            </FadeUp>
          </div>

          {/* Right: interactive factory map */}
          <FadeUp delay={0.2} className="relative w-full">
            <FactoryGlobeMap />
            <p className="mt-2 text-center text-[11px] text-cream-dim">
              마커를 클릭하면 사업장 정보를 확인할 수 있습니다
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── audio engineering ──────────────────────── */

const TECH_CARDS = [
  {
    icon: <Cpu className="size-5" />,
    badge: "DSP Engineering",
    title: "Precision Digital Signal Processing",
    body:
      "In-house DSP tuning pipelines with parametric EQ, active crossover design, and room-correction algorithms — calibrated in our anechoic measurement chambers.",
    accent: "electric",
  },
  {
    icon: <Mic2 className="size-5" />,
    badge: "Acoustic Drivers",
    title: "Custom Acoustic Driver Manufacturing",
    body:
      "Full vertical integration of woofer, mid-range, and tweeter production. Proprietary voice-coil winding and cone-forming processes optimised for SPL and THD performance.",
    accent: "gold",
  },
  {
    icon: <BadgeCheck className="size-5" />,
    badge: "Certification",
    title: "Dolby Atmos & Hi-Res Audio Ready",
    body:
      "End-to-end Dolby Atmos, DTS:X, and Hi-Res Audio certification pipelines embedded in our production workflow — reducing client time-to-market by 40%.",
    accent: "electric",
  },
  {
    icon: <Zap className="size-5" />,
    badge: "Amplification",
    title: "Class-D & Class-AB Amplifier Design",
    body:
      "Custom Class-D amplifier ICs with power outputs from 20W to 1000W RMS, full EMC compliance, and thermal management solutions engineered for sustained peak loads.",
    accent: "gold",
  },
  {
    icon: <Layers className="size-5" />,
    badge: "Integration",
    title: "Wireless & Smart Platform Integration",
    body:
      "Integrated Wi-Fi 6, Bluetooth 5.3, AirPlay 2, Chromecast, HDMI eARC, and HDMI 2.1 modules with proprietary multi-room synchronisation firmware.",
    accent: "electric",
  },
  {
    icon: <Shield className="size-5" />,
    badge: "Quality",
    title: "Zero-Defect Quality Architecture",
    body:
      "AI-driven optical inspection, 100% end-of-line acoustic test, and ISO 9001 / IATF 16949 certified quality management across all facilities.",
    accent: "gold",
  },
];

function AudioEngineeringSection() {
  return (
    <section id="capabilities" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 grid-lines opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <FadeUp>
            <SectionLabel>
              <Settings2 className="!size-3" />
              Technical Capabilities
            </SectionLabel>
          </FadeUp>
          <FadeUp delay={0.15} className="mt-6">
            <h2 className="font-fraunces text-4xl lg:text-5xl xl:text-6xl font-bold text-cream leading-tight">
              Where Acoustics
              <span className="block text-gradient-gold">Meet Engineering.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.25} className="mt-5">
            <p className="text-cream-muted text-lg leading-relaxed">
              Six core competencies that make Bumjin the manufacturing partner of choice
              for the world's most demanding audio brands.
            </p>
          </FadeUp>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TECH_CARDS.map((card, i) => (
            <FadeUp key={card.badge} delay={i * 0.08}>
              <div className="group relative h-full bg-charcoal border border-charcoal-border hover:border-charcoal-border/80 rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Hover glow */}
                <div
                  className={`absolute -top-px left-0 right-0 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                    card.accent === "gold"
                      ? "bg-gradient-to-r from-transparent via-gold/60 to-transparent"
                      : "bg-gradient-to-r from-transparent via-electric/60 to-transparent"
                  }`}
                />

                {/* Badge */}
                <span
                  className={`inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm mb-5 ${
                    card.accent === "gold"
                      ? "text-gold bg-gold/8 border border-gold/20"
                      : "text-electric bg-electric/8 border border-electric/20"
                  }`}
                >
                  <span
                    className={
                      card.accent === "gold" ? "text-gold" : "text-electric"
                    }
                  >
                    {card.icon}
                  </span>
                  {card.badge}
                </span>

                <h3 className="font-fraunces text-xl font-semibold text-cream mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-cream-muted text-sm leading-relaxed">{card.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── manufacturing timeline ─────────────────── */

const TIMELINE_STEPS = [
  {
    icon: <FlaskConical className="size-5" />,
    step: "01",
    title: "Design & Engineering",
    body:
      "Co-development with client R&D teams. Acoustic modelling, PCB schematic review, and industrial design feasibility.",
  },
  {
    icon: <Factory className="size-5" />,
    step: "02",
    title: "Tooling & Mold Production",
    body:
      "In-house CNC machining and EDM mold fabrication at our Suwon & Anseong facilities. Lead times 40% below industry average.",
  },
  {
    icon: <Layers className="size-5" />,
    step: "03",
    title: "Component Sourcing & SMT",
    body:
      "Global component procurement with dual-source strategy. High-speed SMT lines with 0201 placement accuracy and AOI verification.",
  },
  {
    icon: <Settings2 className="size-5" />,
    step: "04",
    title: "Final Assembly & Calibration",
    body:
      "Automated pick-and-place assembly with robotic speaker integration. 100% end-of-line acoustic calibration and DSP flashing.",
  },
  {
    icon: <PackageCheck className="size-5" />,
    step: "05",
    title: "QC, Compliance & Packaging",
    body:
      "Multi-stage quality gates: AQL sampling, regulatory compliance (CE, FCC, UL), and brand-specific packaging line integration.",
  },
  {
    icon: <Truck className="size-5" />,
    step: "06",
    title: "Global Logistics & Delivery",
    body:
      "Flexible shipment via air, sea, and rail from any of our 6 regional hubs. Direct integration with client 3PL partners.",
  },
];

function ManufacturingTimelineSection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0F]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-32">
            <FadeUp>
              <SectionLabel>
                <Factory className="!size-3" />
                Turn-Key Manufacturing
              </SectionLabel>
            </FadeUp>
            <FadeUp delay={0.15} className="mt-6">
              <h2 className="font-fraunces text-4xl lg:text-5xl xl:text-6xl font-bold text-cream leading-tight">
                From Concept to
                <span className="block text-gradient-gold">Mass Assembly.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.25} className="mt-6">
              <p className="text-cream-muted text-lg leading-relaxed">
                A six-stage turn-key pipeline engineered to bring premium audio
                products from initial brief to retail-ready units at scale —
                with full transparency at every node.
              </p>
            </FadeUp>
            <FadeUp delay={0.35} className="mt-8">
              <a href="#contact">
                <Button variant="outline" size="lg" className="group">
                  Request a Factory Tour
                  <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </a>
            </FadeUp>
          </div>

          {/* Right: steps */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-gold/40 via-charcoal-border to-transparent" />

            <div className="space-y-0">
              {TIMELINE_STEPS.map((step, i) => (
                <FadeUp key={step.step} delay={i * 0.1}>
                  <div className="relative pl-14 pb-10 group">
                    {/* Step icon node */}
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-sm bg-charcoal border border-charcoal-border group-hover:border-gold/40 flex items-center justify-center transition-colors duration-300 z-10">
                      <span className="text-gold">{step.icon}</span>
                    </div>

                    <div className="bg-charcoal border border-charcoal-border rounded-sm p-5 group-hover:border-charcoal-border/80 transition-all duration-300">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-xs font-mono text-gold/60 tracking-wider">
                          {step.step}
                        </span>
                        <h3 className="font-fraunces text-lg font-semibold text-cream">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-cream-muted text-sm leading-relaxed">{step.body}</p>
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

/* ──────────────────── client banner slider ───────────────────── */

const CLIENT_LOGOS = [
  {
    name: "Samsung Electronics",
    svg: (
      <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="30" fontFamily="var(--font-inter), system-ui" fontSize="22" fontWeight="700" letterSpacing="-0.5" fill="#C8C0B0">
          SAMSUNG
        </text>
      </svg>
    ),
  },
  {
    name: "LG Electronics",
    svg: (
      <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="30" fontFamily="var(--font-inter), system-ui" fontSize="26" fontWeight="700" letterSpacing="2" fill="#C8C0B0">
          LG
        </text>
      </svg>
    ),
  },
  {
    name: "SONY Corporation",
    svg: (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="30" fontFamily="var(--font-inter), system-ui" fontSize="24" fontWeight="300" letterSpacing="6" fill="#C8C0B0">
          SONY
        </text>
      </svg>
    ),
  },
  {
    name: "Harman Kardon",
    svg: (
      <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="28" fontFamily="var(--font-inter), system-ui" fontSize="16" fontWeight="400" letterSpacing="3" fill="#C8C0B0">
          HARMAN KARDON
        </text>
      </svg>
    ),
  },
  {
    name: "JBL",
    svg: (
      <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="32" fontFamily="var(--font-inter), system-ui" fontSize="32" fontWeight="900" letterSpacing="-1" fill="#C8C0B0">
          JBL
        </text>
      </svg>
    ),
  },
  {
    name: "Panasonic",
    svg: (
      <svg width="170" height="40" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="29" fontFamily="var(--font-inter), system-ui" fontSize="20" fontWeight="500" letterSpacing="4" fill="#C8C0B0">
          Panasonic
        </text>
      </svg>
    ),
  },
  {
    name: "HP",
    svg: (
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="32" fontFamily="var(--font-inter), system-ui" fontSize="30" fontWeight="800" fill="#C8C0B0">
          hp
        </text>
      </svg>
    ),
  },
  {
    name: "Dell",
    svg: (
      <svg width="90" height="40" viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="30" fontFamily="var(--font-inter), system-ui" fontSize="22" fontWeight="400" letterSpacing="2" fill="#C8C0B0">
          DELL
        </text>
      </svg>
    ),
  },
];

function ClientBannerSection() {
  return (
    <section id="clients" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 grid-lines opacity-15" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <FadeUp>
            <SectionLabel>
              <BadgeCheck className="!size-3" />
              Client Portfolio
            </SectionLabel>
          </FadeUp>
          <FadeUp delay={0.15} className="mt-6">
            <h2 className="font-fraunces text-4xl lg:text-5xl font-bold text-cream">
              Trusted by the
              <span className="block text-gradient-gold">World's Leading Audio Brands.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.25} className="mt-4">
            <p className="text-cream-muted text-lg max-w-2xl mx-auto">
              From consumer electronics giants to boutique audiophile marques —
              Bumjin manufactures the sound behind the brands you trust.
            </p>
          </FadeUp>
        </div>

        {/* Infinite slider with progressive blur edges */}
        <FadeUp delay={0.3}>
          <div className="relative">
            <ProgressiveBlur direction="left" blurIntensity={1} className="z-20" />
            <ProgressiveBlur direction="right" blurIntensity={1} className="z-20" />

            <InfiniteSlider gap={72} duration={28} className="py-6">
              {CLIENT_LOGOS.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center opacity-50 hover:opacity-90 transition-opacity duration-300 grayscale hover:grayscale-0 min-w-[80px]"
                  title={client.name}
                >
                  {client.svg}
                </div>
              ))}
            </InfiniteSlider>

            {/* Second row, reversed */}
            <InfiniteSlider gap={72} duration={34} reverse className="py-6 mt-2">
              {[...CLIENT_LOGOS].reverse().map((client) => (
                <div
                  key={`rev-${client.name}`}
                  className="flex items-center justify-center opacity-30 hover:opacity-70 transition-opacity duration-300 grayscale hover:grayscale-0 min-w-[80px]"
                  title={client.name}
                >
                  {client.svg}
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </FadeUp>

        {/* Partner count indicators */}
        <FadeUp delay={0.4} className="mt-14 grid grid-cols-3 gap-6 max-w-xl mx-auto text-center">
          {[
            { value: "6+", label: "Fortune 500 Partners" },
            { value: "18", label: "Countries Distributed" },
            { value: "15+", label: "Years of Partnership" },
          ].map((item) => (
            <div key={item.label} className="border border-charcoal-border rounded-sm p-4">
              <p className="font-fraunces text-2xl font-bold text-gradient-gold">{item.value}</p>
              <p className="text-cream-dim text-xs mt-1">{item.label}</p>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}

/* ────────────────── enterprise inquiry portal ────────────────── */

function EnterpriseInquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [ndaAccepted, setNdaAccepted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0F]" />
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <FadeUp>
              <SectionLabel>
                <Shield className="!size-3" />
                Enterprise Inquiry
              </SectionLabel>
            </FadeUp>
            <FadeUp delay={0.15} className="mt-6">
              <h2 className="font-fraunces text-4xl lg:text-5xl xl:text-6xl font-bold text-cream leading-tight">
                Begin a
                <span className="block text-gradient-gold">World-Class</span>
                Partnership.
              </h2>
            </FadeUp>
            <FadeUp delay={0.25} className="mt-6">
              <p className="text-cream-muted text-lg leading-relaxed">
                All enquiries are handled under mutual NDA by our senior business
                development team. We typically respond within 24 hours.
              </p>
            </FadeUp>

            <FadeUp delay={0.35} className="mt-10 space-y-4">
              {[
                { icon: <Mail className="size-4" />, label: "bd@bumjin.co.kr" },
                { icon: <Phone className="size-4" />, label: "+82 31 123 4567" },
                { icon: <MapPin className="size-4" />, label: "Suwon, Gyeonggi-do, Korea" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-cream-muted">
                  <span className="text-gold">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </FadeUp>

            <FadeUp delay={0.45} className="mt-10 p-5 border border-gold/20 bg-gold/5 rounded-sm">
              <p className="text-xs text-gold/80 font-semibold tracking-widest uppercase mb-2">
                NDA Policy
              </p>
              <p className="text-cream-muted text-sm leading-relaxed">
                All information shared during initial consultation is automatically
                covered under our standard Mutual Non-Disclosure Agreement (MNDA).
                Full NDA documentation will be provided upon first response.
              </p>
            </FadeUp>
          </div>

          {/* Right: form */}
          <FadeUp delay={0.2}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 bg-charcoal border border-charcoal-border rounded-sm p-8">
                <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mb-6">
                  <BadgeCheck className="size-7 text-gold" />
                </div>
                <h3 className="font-fraunces text-2xl font-bold text-cream mb-3">
                  Inquiry Received
                </h3>
                <p className="text-cream-muted text-sm leading-relaxed max-w-sm">
                  Thank you for reaching out to Bumjin Electronics. Our business
                  development team will contact you within 24 hours under strict NDA.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-charcoal border border-charcoal-border rounded-sm p-7 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label="First Name" id="fname" placeholder="John" required />
                  <FormField label="Last Name" id="lname" placeholder="Smith" required />
                </div>
                <FormField label="Company" id="company" placeholder="Sony Corporation" required />
                <FormField
                  label="Business Email"
                  id="email"
                  type="email"
                  placeholder="j.smith@sony.com"
                  required
                />
                <FormField label="Phone" id="phone" type="tel" placeholder="+1 (213) 555-0100" />

                <div>
                  <label className="block text-cream-muted text-xs font-semibold tracking-widest uppercase mb-2">
                    Product Category
                  </label>
                  <select
                    className="w-full bg-midnight border border-charcoal-border text-cream-muted text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-gold/50 focus:text-cream transition-colors"
                    required
                  >
                    <option value="">Select category…</option>
                    <option>Soundbar ODM</option>
                    <option>Soundbar OEM</option>
                    <option>Custom Acoustic Driver</option>
                    <option>DSP Module</option>
                    <option>Full System Design</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-cream-muted text-xs font-semibold tracking-widest uppercase mb-2">
                    Project Brief
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your product requirements, target markets, and estimated annual volumes…"
                    className="w-full bg-midnight border border-charcoal-border text-cream text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors resize-none placeholder:text-cream-dim"
                    required
                  />
                </div>

                {/* NDA acknowledgement */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5 flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={ndaAccepted}
                      onChange={(e) => setNdaAccepted(e.target.checked)}
                      className="peer sr-only"
                      required
                    />
                    <div className="w-4 h-4 border border-charcoal-border rounded-sm bg-midnight peer-checked:border-gold peer-checked:bg-gold/20 transition-colors" />
                    {ndaAccepted && (
                      <svg
                        className="absolute inset-0 m-auto w-2.5 h-2.5 text-gold"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-cream-muted text-xs leading-relaxed">
                    I acknowledge that all information shared will be protected under
                    Bumjin Electronics' standard{" "}
                    <span className="text-gold underline underline-offset-2 cursor-pointer">
                      Mutual Non-Disclosure Agreement
                    </span>
                    .
                  </span>
                </label>

                <Button type="submit" variant="default" size="xl" className="w-full">
                  Submit Enterprise Inquiry
                  <ChevronRight />
                </Button>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

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
        className="block text-cream-muted text-xs font-semibold tracking-widest uppercase mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-midnight border border-charcoal-border text-cream text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-cream-dim"
      />
    </div>
  );
}

/* ─────────────────────────── footer ─────────────────────────── */

function Footer() {
  return (
    <footer className="relative border-t border-charcoal-border/40 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center">
                <span className="text-gold font-fraunces font-bold text-sm">B</span>
              </div>
              <div>
                <p className="text-cream text-sm font-semibold tracking-wider">BUMJIN ELECTRONICS</p>
                <p className="text-cream-dim text-[10px] tracking-[0.2em] uppercase">Co., Ltd.</p>
              </div>
            </div>
            <p className="text-cream-muted text-sm leading-relaxed max-w-xs">
              Premium soundbar ODM/OEM manufacturing with global production capacity
              across 8 facilities in 6 countries.
            </p>
            <a
              href="https://bumjin.career.greetinghr.com/ko/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-5 text-gold text-sm hover:text-gold-light transition-colors"
            >
              <span>Join Our Team</span>
              <ExternalLink className="size-3" />
            </a>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-cream text-xs font-semibold tracking-[0.2em] uppercase mb-4">Solutions</p>
            <ul className="space-y-2.5">
              {["Soundbar ODM", "Soundbar OEM", "Acoustic Drivers", "DSP Engineering", "Smart Platform Integration"].map((item) => (
                <li key={item}>
                  <a href="#capabilities" className="text-cream-muted text-sm hover:text-cream transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-cream text-xs font-semibold tracking-[0.2em] uppercase mb-4">Company</p>
            <ul className="space-y-2.5">
              {[
                { label: "Global Operations", href: "#operations" },
                { label: "Clients", href: "#clients" },
                { label: "Contact", href: "#contact" },
                { label: "Careers", href: "https://bumjin.career.greetinghr.com/ko/home", external: true },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-cream-muted text-sm hover:text-cream transition-colors inline-flex items-center gap-1"
                  >
                    {item.label}
                    {item.external && <ExternalLink className="size-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider />

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-dim text-xs">
            © {new Date().getFullYear()} Bumjin Electronics Co., Ltd. All rights reserved.
          </p>
          <p className="text-cream-dim text-xs tracking-widest uppercase">
            We Engineer the Future of Sound
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── page ───────────────────────────── */

export default function Page() {
  return (
    <div className="bg-midnight text-cream min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <Divider />
        <GlobalOperationsSection />
        <Divider />
        <AudioEngineeringSection />
        <Divider />
        <ManufacturingTimelineSection />
        <Divider />
        <ClientBannerSection />
        <Divider />
        <EnterpriseInquirySection />
      </main>
      <Footer />
    </div>
  );
}

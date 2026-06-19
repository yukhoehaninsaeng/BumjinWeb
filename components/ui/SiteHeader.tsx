"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { translations, type Lang } from "@/lib/translations";

const LANG_OPTIONS: { code: Lang; label: string }[] = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [lang, setLang] = useState<Lang>("ko");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const t = translations[lang].nav;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: t.company, href: "/company" },
    { label: t.business, href: "/business" },
    { label: t.technology, href: "/#capabilities" },
    { label: t.global, href: "/#operations" },
    { label: t.clients, href: "/#clients" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/business") return pathname.startsWith("/business");
    return pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 shadow-[0_1px_0_#E5E7EB]"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[13px] font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-gray-900 border-b border-gray-900 pb-0.5"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: language + CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          {/* Language dropdown */}
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
                    onClick={() => {
                      setLang(opt.code);
                      setLangOpen(false);
                    }}
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

          {/* 문의하기 */}
          <a href="/#contact" className="hidden sm:block">
            <button className="text-[13px] font-semibold text-white bg-red-600 hover:bg-red-700 px-5 py-2 transition-colors">
              {t.contact}
            </button>
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-1 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block px-6 py-4 text-[13px] font-medium border-b border-gray-50 transition-colors ${
                isActive(link.href)
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 py-3 flex flex-wrap gap-2 border-b border-gray-50">
            {LANG_OPTIONS.map((opt) => (
              <button
                key={opt.code}
                onClick={() => {
                  setLang(opt.code);
                  setMobileOpen(false);
                }}
                className={`text-[11px] font-semibold px-3 py-1.5 border transition-colors ${
                  lang === opt.code
                    ? "bg-red-600 text-white border-red-600"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="px-6 py-4">
            <a href="/#contact" onClick={() => setMobileOpen(false)}>
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

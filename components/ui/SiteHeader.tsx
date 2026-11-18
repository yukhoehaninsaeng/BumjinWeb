"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, Globe, Menu, X } from "lucide-react";
import { type Lang } from "@/lib/translations";
import { useLang } from "@/lib/hooks/useLang";

const LANG_OPTIONS: { code: Lang; label: string; short: string }[] = [
  { code: "ko", label: "한국어", short: "KR" },
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "ZH" },
  { code: "ja", label: "日本語", short: "JA" },
];

interface SubMenuItem {
  label: string;
  href: string;
  external?: boolean;
}

interface NavCategory {
  id: string;
  label: string;
  href: string;
  matchPrefix?: string;
  items: SubMenuItem[];
}

const MENU_DATA: Record<
  Lang,
  {
    categories: NavCategory[];
    contactBtn: string;
    sitemapTitle: string;
    closeLabel: string;
    openMenuLabel: string;
  }
> = {
  ko: {
    contactBtn: "문의하기",
    sitemapTitle: "전체 메뉴",
    closeLabel: "닫기",
    openMenuLabel: "전체 메뉴 열기",
    categories: [
      {
        id: "company",
        label: "회사정보",
        href: "/company",
        matchPrefix: "/company",
        items: [
          { label: "회사개요", href: "/company#overview" },
          { label: "CEO 인사말", href: "/company#ceo" },
          { label: "비전 · 핵심가치", href: "/company#vision" },
          { label: "범진 그룹", href: "/company#group" },
          { label: "연혁", href: "/company#history" },
          { label: "찾아오시는 길", href: "/company#location" },
        ],
      },
      {
        id: "business",
        label: "사업소개",
        href: "/business",
        matchPrefix: "/business",
        items: [
          { label: "전자사업부 (ODM/OEM)", href: "/business/electronics" },
          { label: "금형 · 사출사업부", href: "/business/molding" },
          { label: "스타트업 랩", href: "/business/startup" },
        ],
      },
      {
        id: "tech",
        label: "기술 · 공정",
        href: "/#capabilities",
        items: [
          { label: "핵심 기술력", href: "/#capabilities" },
          { label: "제조 프로세스", href: "/#process" },
        ],
      },
      {
        id: "global",
        label: "글로벌 · 고객사",
        href: "/#operations",
        items: [
          { label: "글로벌 네트워크", href: "/#operations" },
          { label: "주요 고객사", href: "/#clients" },
        ],
      },
      {
        id: "recruit",
        label: "인재채용 · 문의",
        href: "/#contact",
        items: [
          { label: "비즈니스 문의", href: "/#contact" },
          {
            label: "채용정보",
            href: "https://bumjin.career.greetinghr.com/ko/home",
            external: true,
          },
        ],
      },
    ],
  },
  en: {
    contactBtn: "Contact",
    sitemapTitle: "All Menu",
    closeLabel: "Close",
    openMenuLabel: "Open full menu",
    categories: [
      {
        id: "company",
        label: "Company",
        href: "/company",
        matchPrefix: "/company",
        items: [
          { label: "Overview", href: "/company#overview" },
          { label: "CEO Message", href: "/company#ceo" },
          { label: "Vision & Core Values", href: "/company#vision" },
          { label: "Bumjin Group", href: "/company#group" },
          { label: "History", href: "/company#history" },
          { label: "Location", href: "/company#location" },
        ],
      },
      {
        id: "business",
        label: "Business",
        href: "/business",
        matchPrefix: "/business",
        items: [
          { label: "Electronics (ODM/OEM)", href: "/business/electronics" },
          { label: "Mold & Injection", href: "/business/molding" },
          { label: "Startup Lab", href: "/business/startup" },
        ],
      },
      {
        id: "tech",
        label: "Tech & Process",
        href: "/#capabilities",
        items: [
          { label: "Core Capabilities", href: "/#capabilities" },
          { label: "Manufacturing Process", href: "/#process" },
        ],
      },
      {
        id: "global",
        label: "Global & Clients",
        href: "/#operations",
        items: [
          { label: "Global Network", href: "/#operations" },
          { label: "Key Partners", href: "/#clients" },
        ],
      },
      {
        id: "recruit",
        label: "Careers & Contact",
        href: "/#contact",
        items: [
          { label: "Business Inquiry", href: "/#contact" },
          {
            label: "Careers",
            href: "https://bumjin.career.greetinghr.com/ko/home",
            external: true,
          },
        ],
      },
    ],
  },
  zh: {
    contactBtn: "联系我们",
    sitemapTitle: "全部菜单",
    closeLabel: "关闭",
    openMenuLabel: "打开全部菜单",
    categories: [
      {
        id: "company",
        label: "公司信息",
        href: "/company",
        matchPrefix: "/company",
        items: [
          { label: "公司概要", href: "/company#overview" },
          { label: "CEO致辞", href: "/company#ceo" },
          { label: "愿景 · 核心价值", href: "/company#vision" },
          { label: "凡真集团", href: "/company#group" },
          { label: "发展历程", href: "/company#history" },
          { label: "交通指南", href: "/company#location" },
        ],
      },
      {
        id: "business",
        label: "业务介绍",
        href: "/business",
        matchPrefix: "/business",
        items: [
          { label: "电子事业部 (ODM/OEM)", href: "/business/electronics" },
          { label: "模具 · 注塑事业部", href: "/business/molding" },
          { label: "初创实验室", href: "/business/startup" },
        ],
      },
      {
        id: "tech",
        label: "技术 · 工艺",
        href: "/#capabilities",
        items: [
          { label: "核心技术力", href: "/#capabilities" },
          { label: "制造流程", href: "/#process" },
        ],
      },
      {
        id: "global",
        label: "全球 · 客户",
        href: "/#operations",
        items: [
          { label: "全球网络", href: "/#operations" },
          { label: "主要客户", href: "/#clients" },
        ],
      },
      {
        id: "recruit",
        label: "人才招聘 · 咨询",
        href: "/#contact",
        items: [
          { label: "业务咨询", href: "/#contact" },
          {
            label: "招聘信息",
            href: "https://bumjin.career.greetinghr.com/ko/home",
            external: true,
          },
        ],
      },
    ],
  },
  ja: {
    contactBtn: "お問い合わせ",
    sitemapTitle: "全メニュー",
    closeLabel: "閉じる",
    openMenuLabel: "全メニューを開く",
    categories: [
      {
        id: "company",
        label: "会社情報",
        href: "/company",
        matchPrefix: "/company",
        items: [
          { label: "会社概要", href: "/company#overview" },
          { label: "CEOご挨拶", href: "/company#ceo" },
          { label: "ビジョン · コアバリュー", href: "/company#vision" },
          { label: "ボムジングループ", href: "/company#group" },
          { label: "沿革", href: "/company#history" },
          { label: "アクセス", href: "/company#location" },
        ],
      },
      {
        id: "business",
        label: "事業紹介",
        href: "/business",
        matchPrefix: "/business",
        items: [
          { label: "電子事業部 (ODM/OEM)", href: "/business/electronics" },
          { label: "金型 · 射出成形事業部", href: "/business/molding" },
          { label: "スタートアップラボ", href: "/business/startup" },
        ],
      },
      {
        id: "tech",
        label: "技術 · 工程",
        href: "/#capabilities",
        items: [
          { label: "コア技術力", href: "/#capabilities" },
          { label: "製造プロセス", href: "/#process" },
        ],
      },
      {
        id: "global",
        label: "グローバル · 顧客",
        href: "/#operations",
        items: [
          { label: "グローバルネットワーク", href: "/#operations" },
          { label: "主要取引先", href: "/#clients" },
        ],
      },
      {
        id: "recruit",
        label: "採用 · お問い合わせ",
        href: "/#contact",
        items: [
          { label: "ビジネス相談", href: "/#contact" },
          {
            label: "採用情報",
            href: "https://bumjin.career.greetinghr.com/ko/home",
            external: true,
          },
        ],
      },
    ],
  },
};

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [lang, setLang] = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sitemapOpen, setSitemapOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const menu = MENU_DATA[lang];
  const activeLangOption = LANG_OPTIONS.find((o) => o.code === lang) ?? LANG_OPTIONS[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close overlays on route change
  useEffect(() => {
    setMegaOpen(false);
    setSitemapOpen(false);
    setLangOpen(false);
  }, [pathname]);

  const isTransparent = isHome && !scrolled && !megaOpen && !sitemapOpen;

  const isCatActive = (cat: NavCategory) => {
    if (cat.matchPrefix) return pathname.startsWith(cat.matchPrefix);
    return false;
  };

  return (
    <>
      <header
        onMouseLeave={() => {
          setMegaOpen(false);
          setActiveCategory(null);
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-transparent border-b border-white/10"
            : "bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-[0_1px_12px_rgba(0,0,0,0.03)]"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src={isTransparent ? "/bumjin-logo-dark.png" : "/bumjin%20icon.jpg"}
              alt="Bumjin Electronics"
              width={160}
              height={48}
              priority
              className="h-9 w-auto object-contain transition-opacity duration-200"
            />
          </Link>

          {/* Desktop GNB */}
          <ul
            className="hidden lg:flex items-center h-full"
            onMouseEnter={() => setMegaOpen(true)}
          >
            {menu.categories.map((cat) => {
              const active = isCatActive(cat) || activeCategory === cat.id;
              return (
                <li
                  key={cat.id}
                  onMouseEnter={() => {
                    setMegaOpen(true);
                    setActiveCategory(cat.id);
                  }}
                  className="h-full flex items-center"
                >
                  <Link
                    href={cat.href}
                    className={`relative px-5 h-full flex items-center text-[14px] font-semibold tracking-tight transition-colors ${
                      isTransparent
                        ? active
                          ? "text-white"
                          : "text-white/85 hover:text-white"
                        : active
                          ? "text-red-600"
                          : "text-gray-800 hover:text-red-600"
                    }`}
                  >
                    {cat.label}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-5 right-5 h-[2px] bg-red-600"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right utilities: Language + Contact + Sitemap */}
          <div className="flex items-center gap-2.5">
            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-sm transition-colors ${
                  isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <Globe className={`size-3.5 ${isTransparent ? "text-white/70" : "text-gray-400"}`} />
                <span>{activeLangOption.short}</span>
                <ChevronDown className={`size-3 ${isTransparent ? "text-white/70" : "text-gray-400"}`} />
              </button>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 top-full mt-2 bg-white border border-gray-200 shadow-lg rounded-sm overflow-hidden z-50 min-w-[126px]"
                >
                  {LANG_OPTIONS.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => {
                        setLang(opt.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-[12px] font-medium transition-colors hover:bg-gray-50 flex items-center justify-between ${
                        lang === opt.code ? "text-red-600 bg-red-50/40" : "text-gray-700"
                      }`}
                    >
                      <span>{opt.label}</span>
                      <span className="text-[10px] text-gray-400 font-mono">{opt.short}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Contact CTA */}
            <Link href="/#contact" className="hidden sm:block">
              <button className="text-[12px] font-semibold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-sm transition-colors">
                {menu.contactBtn}
              </button>
            </Link>

            {/* Full Sitemap / Mobile Menu Toggle */}
            <button
              onClick={() => setSitemapOpen(!sitemapOpen)}
              aria-label={sitemapOpen ? menu.closeLabel : menu.openMenuLabel}
              className={`p-2 rounded-sm transition-colors ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              {sitemapOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {/* Desktop Full-Width Mega Menu Dropdown (Motrex-style) */}
        <AnimatePresence>
          {megaOpen && !sitemapOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="hidden lg:block bg-white border-t border-gray-100 border-b border-gray-200 shadow-xl"
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8">
                <div className="grid grid-cols-5 gap-8">
                  {menu.categories.map((cat) => (
                    <div
                      key={cat.id}
                      onMouseEnter={() => setActiveCategory(cat.id)}
                      className="border-l border-gray-100 pl-5 first:border-l-0 first:pl-0"
                    >
                      <Link
                        href={cat.href}
                        onClick={() => setMegaOpen(false)}
                        className={`block text-[13px] font-bold mb-4 transition-colors ${
                          activeCategory === cat.id ? "text-red-600" : "text-gray-900 hover:text-red-600"
                        }`}
                      >
                        {cat.label}
                      </Link>
                      <ul className="space-y-2.5">
                        {cat.items.map((item) => (
                          <li key={item.label}>
                            {item.external ? (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMegaOpen(false)}
                                className="inline-flex items-center gap-1 text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                              >
                                <span>{item.label}</span>
                                <ExternalLink className="size-3 text-gray-400" />
                              </a>
                            ) : (
                              <Link
                                href={item.href}
                                onClick={() => setMegaOpen(false)}
                                className="block text-[13px] text-gray-500 hover:text-red-600 transition-colors"
                              >
                                {item.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Full Sitemap / Mobile Menu Drawer */}
      <AnimatePresence>
        {sitemapOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-white overflow-y-auto border-t border-gray-200"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 lg:py-16">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400">
                  {menu.sitemapTitle}
                </p>
                <div className="flex flex-wrap gap-2 sm:hidden">
                  {LANG_OPTIONS.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => setLang(opt.code)}
                      className={`text-[11px] font-semibold px-2.5 py-1 border rounded-sm transition-colors ${
                        lang === opt.code
                          ? "bg-red-600 text-white border-red-600"
                          : "border-gray-200 text-gray-600"
                      }`}
                    >
                      {opt.short}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
                {menu.categories.map((cat, idx) => (
                  <div key={cat.id}>
                    <p className="text-[11px] font-bold text-red-600 mb-2 tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </p>
                    <Link
                      href={cat.href}
                      onClick={() => setSitemapOpen(false)}
                      className="block text-[18px] font-bold text-gray-900 hover:text-red-600 transition-colors mb-4 pb-3 border-b border-gray-100"
                    >
                      {cat.label}
                    </Link>
                    <ul className="space-y-3">
                      {cat.items.map((item) => (
                        <li key={item.label}>
                          {item.external ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setSitemapOpen(false)}
                              className="inline-flex items-center gap-1.5 text-[14px] text-gray-600 hover:text-gray-900 transition-colors"
                            >
                              <span>{item.label}</span>
                              <ExternalLink className="size-3.5 text-gray-400" />
                            </a>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setSitemapOpen(false)}
                              className="block text-[14px] text-gray-600 hover:text-red-600 transition-colors"
                            >
                              {item.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

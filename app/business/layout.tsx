import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BusinessHero } from "@/components/business/BusinessHero";
import { BusinessNav } from "@/components/business/BusinessNav";

export const metadata: Metadata = {
  title: "사업영역 — 범진전자",
  description:
    "설계부터 생산, 판매까지 전 공정 수직계열화. 전자부문, 금형·성형부문, 스타트업 지원부문의 전문 사업 역량을 소개합니다.",
  openGraph: {
    title: "사업영역 — 범진전자",
    description:
      "설계부터 생산, 판매까지 전 공정 수직계열화. 전자부문, 금형·성형부문, 스타트업 지원부문.",
    type: "website",
  },
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal top bar */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 lg:px-16 pt-6">
        <div className="mx-auto max-w-[1280px] flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-[13px] font-medium"
          >
            <ArrowLeft className="size-4" />
            홈으로
          </Link>
          <Link
            href="/"
            className="text-white/90 text-[15px] font-black tracking-tight"
          >
            BJ
          </Link>
        </div>
      </header>

      <BusinessHero />
      <BusinessNav />

      <main>{children}</main>
    </div>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/ui/SiteHeader";
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
      <SiteHeader />
      <BusinessHero />
      <BusinessNav />
      <main>{children}</main>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "관리자 패널 — 범진전자",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

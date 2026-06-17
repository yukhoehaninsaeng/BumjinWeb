import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bumjin Electronics — We Engineer the Future of Sound",
  description:
    "Premium ODM/OEM soundbar manufacturing partner for the world's leading audio brands. Facilities across Korea, Mexico, Indonesia, Vietnam, China and Hungary.",
  keywords: [
    "soundbar ODM",
    "soundbar OEM",
    "audio manufacturing",
    "Bumjin Electronics",
    "premium speaker manufacturing",
  ],
  openGraph: {
    title: "Bumjin Electronics — We Engineer the Future of Sound",
    description:
      "Premium ODM/OEM soundbar manufacturing partner for the world's leading audio brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable} suppressHydrationWarning>
      <body className="bg-white text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

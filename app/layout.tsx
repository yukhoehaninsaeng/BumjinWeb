import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-midnight text-cream font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

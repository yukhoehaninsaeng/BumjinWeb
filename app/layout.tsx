import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="bg-white text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

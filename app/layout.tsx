import type { Metadata } from "next";
import { fonts } from "@/utils/fonts";
import Header from "@/components/common/header";
import TopAnimation from "@/components/top/top-animation";
import { lc } from "@/utils/tw-lc";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | 10-ui",
    default: "Portfolio",
  },
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={lc(fonts.notoSansJP.className, "bg-gray-500")}>
        <Header />
        <TopAnimation />
        {children}
      </body>
    </html>
  );
}

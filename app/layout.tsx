import type { Metadata } from "next";
import { fonts } from "@/utils/fonts";
import "./globals.css";
import Header from "@/components/common/header";
import { lc } from "@/utils/tw-lc";

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
        {children}
      </body>
    </html>
  );
}

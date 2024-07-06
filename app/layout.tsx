import type { Metadata } from "next";
import logo from "@/public/logo.png";
import { fonts } from "@/utils/fonts";
import { lc } from "@/utils/tw-lc";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | 10-ui",
    default: "Portfolio",
  },
  description: "Portfolio",
  icons: [
    {
      rel: "icon",
      url: logo.src,
      sizes: "32x32",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={lc(fonts.notoSansJP.className, "bg-gray-500")}>
        <main className='flex select-none flex-col'>{children}</main>
      </body>
    </html>
  );
}

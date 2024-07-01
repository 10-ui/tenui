import { Red_Hat_Display, Noto_Sans_JP } from "next/font/google";
import local from "next/font/local";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });
const lineSeedJP = local({
  src: [
    {
      path: "font/LINESeedJP_OTF_Th.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "font/LINESeedJP_OTF_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "font/LINESeedJP_OTF_Bd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "font/LINESeedJP_OTF_Eb.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export const fonts = {
  redHatDisplay,
  notoSansJP,
  lineSeedJP,
};

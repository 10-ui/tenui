import CoreValue from "@/components/top/corevalue";
import { Icons } from "@/components/common/icons";
import { fonts } from "@/utils/fonts";
import { lc } from "@/utils/tw-lc";
import Skills from "@/components/top/skills";

export default function Home() {
  return (
    <>
      <main className='flex select-none flex-col'>
        <div
          className={lc(
            "flex min-h-screen flex-row items-center justify-center gap-28 rounded-3xl bg-main",
            fonts.lineSeedJP.className,
          )}>
          <h2 className='flex flex-col gap-2'>
            <span className='text-5xl font-bold'>想いをカタチにできる、</span>
            <span className='text-5xl font-bold'>そんなエンジニアへ。</span>
          </h2>
          <Icons.topImage />
        </div>
        <CoreValue />
        <Skills />
      </main>
    </>
  );
}

import { Icons } from "@/components/common/icons";
import { fonts } from "@/utils/fonts";
import { lc } from "@/utils/tw-lc";

export default function Home() {
  return (
    <main className='flex select-none flex-col'>
      <div
        className={lc(
          "rounded-4xl flex min-h-screen flex-row items-center justify-center gap-28 bg-main",
          fonts.lineSeedJP.className,
        )}>
        <h2 className='flex flex-col gap-2'>
          <span className='text-5xl font-bold'>想いをカタチにできる、</span>
          <span className='text-5xl font-bold'>そんなエンジニアへ。</span>
        </h2>
        <Icons.topImage />
      </div>
      <div className='rounded-4xl flex min-h-screen items-center justify-center bg-main'>
        <h2 className='text-2xl font-bold'>トップページ</h2>
      </div>
    </main>
  );
}

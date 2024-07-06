import { lc } from "@/utils/tw-lc";
import { fonts } from "@/utils/fonts";
import Link from "next/link";
import { Icons } from "@/components/common/icons";

export default function Footer() {
  return (
    <footer className='flex h-[20dvh] flex-row items-center justify-between rounded-4xl bg-main p-28'>
      <Link href='/' className='flex items-center gap-2'>
        <Icons.logo className='h-10 w-10' />
        <span className='text-xl font-semibold'>Tenui</span>
      </Link>
      <div
        className={lc(
          "flex items-center gap-8 rounded-full px-6 py-2.5 text-xs font-semibold duration-500",
          fonts.lineSeedJP.className,
        )}>
        <Link
          href='/works'
          className='relative text-lg duration-300 hover:scale-125'>
          WORKS
          <span className='absolute -top-4 left-1/2 translate-x-[-50%] text-xl text-black/0 duration-500 hover:text-black/70'>
            ・
          </span>
        </Link>
        <Link
          href='/about'
          className='relative text-lg duration-300 hover:scale-125'>
          ABOUT
          <span className='absolute -top-4 left-1/2 translate-x-[-50%] text-xl text-black/0 duration-500 hover:text-black/70'>
            ・
          </span>
        </Link>
        <Link
          href='https://zenn.dev/10_ui'
          className='flex items-center gap-0.5 text-lg duration-300 hover:scale-125 hover:text-black/70'>
          BLOG
          <Icons.rightArrow className='h-4.5 w-4.5' />
        </Link>
      </div>
      <p className='text-sm'>© 2024 Tenui All Rights Reserved.</p>
    </footer>
  );
}

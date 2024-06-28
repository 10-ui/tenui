"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fonts } from "@/utils/fonts";
import { lc } from "@/utils/tw-lc";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  let basisScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > basisScrollY);
      basisScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className='h-22 fixed left-0 top-0 flex w-full items-center justify-between px-10 py-4'>
      <Link href='/' className='flex items-center gap-2'>
        <Icons.logo className='h-14 w-14' />
        <span className='text-xl font-semibold'>Tenui</span>
      </Link>
      <div
        className={lc(
          "flex items-center gap-4 rounded-full bg-white px-6 py-2.5 text-xs font-semibold duration-500",
          fonts.lineSeedJP.className,
          isScrolled ? "opacity-0" : "opacity-100",
        )}>
        <Link href='/works' className='relative'>
          WORKS
          <span
            className={lc(
              "absolute -top-4 left-1/2 translate-x-[-50%] text-xl text-black/0 duration-500",
              pathname === "/works" && "text-black",
            )}>
            ・
          </span>
        </Link>
        <Link href='/about' className='relative'>
          ABOUT
          <span
            className={lc(
              "absolute -top-4 left-1/2 translate-x-[-50%] text-xl text-black/0 duration-500",
              pathname === "/about" && "text-black",
            )}>
            ・
          </span>
        </Link>
      </div>
      <div
        className={lc(
          "flex items-center gap-1 duration-500",
          isScrolled ? "opacity-0" : "opacity-100",
        )}>
        <Button size='icon' variant='outline' className='rounded-full'>
          <Icons.gitHub className='h-4 w-4' />
        </Button>
        <Button size='icon' variant='outline' className='rounded-full'>
          <Icons.mail className='h-4 w-4' />
        </Button>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fonts } from "@/utils/fonts";
import { lc } from "@/utils/tw-lc";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";
import { usePathname } from "next/navigation";

import BreadCrumbs from "@/components/common/bread-crumbs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Header() {
  const path = usePathname();
  const pathNames = path.split("/").filter((path) => path);
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
    <header className='fixed left-0 top-0 flex h-29 w-full flex-col gap-2 px-10 py-4'>
      <div className='flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-2'>
          <Icons.logo className='h-10 w-10' />
          <span className='text-xl font-semibold'>Tenui</span>
        </Link>
        <div
          className={lc(
            "flex items-center gap-4 rounded-full bg-white px-6 py-2.5 text-xs font-semibold duration-500",
            fonts.lineSeedJP.className,
            isScrolled ? "opacity-0" : "opacity-100",
          )}>
          <Link href='/works' className='relative duration-300 hover:scale-125'>
            WORKS
            <span
              className={lc(
                "absolute -top-4 left-1/2 translate-x-[-50%] text-xl text-black/0 duration-500",
                path === "/works" && "text-black",
                "hover:text-black/70",
              )}>
              ・
            </span>
          </Link>
          <Link href='/about' className='relative duration-300 hover:scale-125'>
            ABOUT
            <span
              className={lc(
                "absolute -top-4 left-1/2 translate-x-[-50%] text-xl text-black/0 duration-500",
                path === "/about" && "text-blac",
                "hover:text-black/70",
              )}>
              ・
            </span>
          </Link>
          <Link
            href='https://zenn.dev/10_ui'
            className='flex items-center gap-0.5 duration-300 hover:scale-125 hover:text-black/70'>
            BLOG
            <Icons.rightArrow className='h-3.5 w-3.5' />
          </Link>
        </div>
        <div
          className={lc(
            "flex items-center gap-1 duration-500",
            isScrolled ? "opacity-0" : "opacity-100",
          )}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size='icon'
                  variant='outline'
                  className='rounded-full'
                  asChild>
                  <Link href='/admin/u/login'>
                    <Icons.account className='h-5 w-5' />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>管理者ページへ</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size='icon'
                  variant='outline'
                  className='rounded-full'
                  asChild>
                  <Link href='https://github.com/10-ui'>
                    <Icons.gitHub className='h-4 w-4' />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size='icon'
                  variant='outline'
                  className='rounded-full'
                  asChild>
                  <Link href='/contact'>
                    <Icons.mail className='h-4 w-4' />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>お問い合わせ</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <BreadCrumbs pathNames={pathNames} />
    </header>
  );
}

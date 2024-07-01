"use client";
import { Icons } from "@/components/common/icons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function TopAnimation() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#animation_logo",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: "none",
      },
    );
    tl.to(
      "#animation_container",
      {
        x: 300,
        opacity: 0,
        duration: 0.5,
        ease: "none",
      },
      "+=2",
    );
  }, []);
  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-main'
      id='animation_container'>
      <Icons.logo className='h-40 w-40' id='animation_logo' />
    </div>
  );
}

"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoreValue() {
  useGSAP(() => {
    gsap.from("#core-value", {
      scale: 0.8,
      x: -250,
      opacity: 0,
      scrollTrigger: {
        start: "35% 60%",
        end: "45% center",
        scrub: true,
      },
    });
    gsap.from("#core-value-title", {
      y: 150,
      opacity: 0,
      scrollTrigger: {
        start: "35% 60%",
        end: "50% center",
        scrub: true,
      },
    });
    gsap.from("#core-value-text1", {
      y: 150,
      opacity: 0,
      scrollTrigger: {
        start: "45% 60%",
        end: "50% center",
        scrub: true,
      },
    });
    gsap.from("#core-value-text2", {
      y: 150,
      opacity: 0,
      scrollTrigger: {
        start: "45% 60%",
        end: "50% center",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className='flex min-h-screen flex-row items-center justify-center rounded-4xl bg-main p-28'>
      <div className='flex w-full items-start justify-between'>
        <h2 className='mb-16 text-3xl font-bold' id='core-value'>
          作品制作に掛ける思い
        </h2>
        <div className='flex flex-col'>
          <p className='text-2xl font-semibold' id='core-value-title'>
            「四方良し」のWeb制作
          </p>
          <br />
          <p className='text-xl' id='core-value-text1'>
            みんなが気持ちよく、心を一つに問題解決に向かっていけるよう
          </p>
          <p className='text-xl' id='core-value-text2'>
            一緒に考えることができるエンジニアになりたいと考えています。
          </p>
        </div>
      </div>
    </div>
  );
}

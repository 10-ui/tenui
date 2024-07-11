"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoreValue() {
  useGSAP(() => {
    gsap.set("#core-value", {
      scale: 0.5,
      x: 980,
      y: -460,
    });
    gsap.set(".core-value-text", {
      opacity: 0,
      y: -50,
    });
    gsap.set("#core-value-title", {
      opacity: 0,
    });
    gsap.to("#core-value", {
      x: 0,
      y: 0,
      scale: 1,
      scrollTrigger: {
        start: "20% 60%",
        end: "40% center",
        scrub: true,
      },
    });
    gsap.to("#core-value-title", {
      opacity: 1,
      scrollTrigger: {
        start: "35% 60%",
        end: "40% center",
        scrub: true,
      },
    });
    gsap.to(".core-value-text", {
      y: 0,
      opacity: 1,
      stagger: 0.6,
      scrollTrigger: {
        start: "40% 60%",
        end: "45% center",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className='flex min-h-screen flex-row items-center justify-center rounded-4xl bg-main p-28'>
      <div className='flex w-full items-start justify-between'>
        <h2 className='mb-16 overflow-clip text-3xl font-bold' id='core-value'>
          作品制作に掛ける思い
        </h2>
        <div className='flex flex-col'>
          <p className='text-2xl font-semibold' id='core-value-title'>
            「四方良し」のWeb制作
          </p>
          <br />
          <p className='core-value-text text-xl'>
            みんなが気持ちよく、心を一つに問題解決に向かっていけるよう
          </p>
          <p className='core-value-text text-xl'>
            一緒に考えることができるエンジニアになりたいと考えています。
          </p>
        </div>
      </div>
    </div>
  );
}

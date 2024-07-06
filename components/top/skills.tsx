"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  useGSAP(() => {
    gsap.from("#skill-value", {
      scale: 0.8,
      x: -250,
      opacity: 0,
      scrollTrigger: {
        start: "35% 60%",
        end: "45% center",
        scrub: true,
      },
    });
    gsap.from("#skill-title", {
      y: 150,
      opacity: 0,
      scrollTrigger: {
        start: "35% 60%",
        end: "50% center",
        scrub: true,
      },
    });
    gsap.from("#skill-text1", {
      y: 150,
      opacity: 0,
      scrollTrigger: {
        start: "45% 60%",
        end: "50% center",
        scrub: true,
      },
    });
    gsap.from("#skill-text2", {
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
        <h2 className='mb-16 text-3xl font-bold' id='skill-value'>
          学習目標
        </h2>
        <div className='flex flex-col'>
          <p className='text-2xl font-semibold' id='skill-title'>
            フロントエンドで終わらない
          </p>
          <br />
          <p className='text-xl' id='skill-text1'>
            日々進化する技術を捉え、自分のものにしていきます。
          </p>
          <p className='text-xl' id='skill-text2'>
            バックエンド環境を学び、フロントエンドとの連携も深めていきます。
          </p>
        </div>
      </div>
    </div>
  );
}

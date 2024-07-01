"use client";
import { Icons } from "@/components/common/icons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { lc } from "@/utils/tw-lc";

gsap.registerPlugin(useGSAP);

export default function TopAnimation() {
  const [isAnimated, setIsAnimated] = useState(false);
  useGSAP(() => {
    if (sessionStorage.getItem("state") === "true") {
      setIsAnimated(true);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("state", "true");
      },
    });

    tl.to("#animation_logo", {
      opacity: 1,
      duration: 1.5,
      ease: "none",
    });
    tl.to(
      "#animation_container",
      {
        x: 400,
        opacity: 0,
        duration: 0.5,
        ease: "none",
      },
      "+=1",
    );
    tl.to("#animation_container", {
      zIndex: -10,
      duration: 0.5,
      ease: "none",
    });
    tl.to("#animation_container", {
      display: "none",
      duration: 0,
      ease: "none",
    });
  }, []);

  return (
    <div
      className={lc(
        "fixed inset-0 flex items-center justify-center bg-main",
        isAnimated ? "hidden" : "flex",
      )}
      id='animation_container'>
      <Icons.logo className='h-40 w-40 opacity-0' id='animation_logo' />
    </div>
  );
}

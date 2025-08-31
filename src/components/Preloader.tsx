"use client";
import { useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function Preloader() {
  const container = useRef<HTMLDivElement>(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useGSAP(() => {
    gsap.to(container.current, {
      opacity: 0,
      duration: 1,
      ease: "power4.inOut",
      onComplete: () => {
        setAnimationComplete(true);
      },
    });
  });

  if (animationComplete) return;

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[99999] w-full h-full bg-background flex justify-center items-center"
    >
      <h1>Jagjot Singh</h1>
    </div>
  );
}

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import { ReactLenis } from "lenis/dist/lenis-react";
import { useEffect, useRef } from "react";

export default function LenisWrapper({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    // <ReactLenis root optons={{ lerp: 0.5, duration: 1.25, smoothWheel: true }}>
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}

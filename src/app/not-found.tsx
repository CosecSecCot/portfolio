"use client";

import Button from "@/components/Button";
import GradientBackground from "@/components/GradientBackground";
import TextReveal from "@/features/animations/TextReveal";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import OpacityReveal from "@/features/animations/OpacityReveal";
gsap.registerPlugin(useGSAP);

export default function NotFound() {
  return (
    <main>
      <div className="w-full min-h-screen px-4 flex flex-col justify-center items-center text-center gap-4">
        <GradientBackground />
        <div className="text-white mix-blend-difference">
          <TextReveal duration={1} splitBy="chars">
            <h1 className="font-serif text-9xl">404</h1>
          </TextReveal>
          <TextReveal splitBy="words" stagger={0.02} duration={1} delay={0.1}>
            <p>
              Looks like you wandered off the map! <br /> I could not find the
              page you are looking for.
            </p>
          </TextReveal>
        </div>
        <OpacityReveal duration={1} delay={0.2}>
          <Button href="/" invert className="mix-blend-difference">
            Go To Home
          </Button>
        </OpacityReveal>
      </div>
    </main>
  );
}

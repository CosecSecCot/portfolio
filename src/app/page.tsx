"use client";

import Preloader from "@/components/Preloader";
import HeroSection from "@/features/pages/home/HeroSection";
import WorkSection from "@/features/pages/home/WorkSection";
import AboutSection from "@/features/pages/home/AboutSection";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  useGSAP(() => {
    gsap.set(".image-reveal", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    });
    ScrollTrigger.batch(".image-reveal", {
      onEnter: (batch) =>
        gsap.fromTo(
          batch,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
          }
        ),
      start: "top 80%",
      once: true,
    });
  });

  return (
    <>
      <Preloader />
      <main>
        <article>
          <HeroSection />
          <WorkSection />
          <AboutSection />
        </article>
      </main>
      <Footer />
    </>
  );
}

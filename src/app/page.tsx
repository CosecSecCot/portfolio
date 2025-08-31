"use client";

import Image from "next/image";
import TextReveal from "@/features/animations/TextReveal";
import ImageReveal from "@/features/animations/ImageReveal";
import OpacityReveal from "@/features/animations/OpacityReveal";
import WorkSection from "@/features/pages/home/WorkSection";
import Preloader from "@/components/Preloader";
import Button from "@/components/Button";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutSection from "@/features/pages/home/AboutSection";
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
          <section
            role="banner"
            className="relative min-h-screen flex flex-col justify-end"
          >
            {/* <GradientBackground /> */}
            <div className="mt-12 p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6">
              <ImageReveal delay={1} duration={1.5} ease="expo.inOut">
                <Image
                  src="/potrait.png"
                  alt=""
                  width={341}
                  height={502}
                  className="flex-shrink-0 object-contain pointer-events-none"
                  priority
                />
              </ImageReveal>
              <div className="md:max-w-[640px] mb-2">
                <TextReveal
                  splitBy="chars"
                  duration={1}
                  stagger={0.025}
                  delay={1}
                >
                  <h1 className="font-serif text-[60px] lg:text-[96px]">
                    Jagjot Singh
                  </h1>
                </TextReveal>
                <TextReveal
                  splitBy="words"
                  stagger={0.02}
                  duration={1.2}
                  delay={1}
                >
                  <p className="text-lg mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Possimus molestias quod laborum debitis laboriosam corporis
                    sit, facere minus libero nobis eius architecto placeat et
                    incidunt sapiente perferendis quaerat porro aliquam?
                  </p>
                </TextReveal>
                <OpacityReveal duration={1} delay={1.4}>
                  <Button href="#about-me">KNOW MORE 🡢</Button>
                </OpacityReveal>
              </div>
            </div>
          </section>
          <WorkSection />
          <AboutSection />
        </article>
      </main>
      <Footer />
    </>
  );
}

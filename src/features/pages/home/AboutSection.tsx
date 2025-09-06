import Image from "next/image";
import OpacityReveal from "@/features/animations/OpacityReveal";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/features/animations/TextReveal";
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function AboutSection() {
  return (
    <section id="about-me" className="min-h-screen py-[25vh] px-4 md:px-6">
      <div className="grid lg:grid-cols-2">
        <OpacityReveal duration={1} start={80}>
          <h1 className="font-serif w-full text-[60px] lg:text-[96px]">
            ✽ About Me
          </h1>
        </OpacityReveal>
        <div>
          <TextReveal splitBy="words" duration={1.5} stagger={0.02}>
            <p className="w-full md:w-[640px] text-lg lg:text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              molestias quod laborum debitis laboriosam corporis sit, facere
              minus libero nobis eius architecto placeat et incidunt sapiente
              perferendis quaerat porro aliquam?
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              molestias quod laborum debitis laboriosam corporis sit, facere
              minus libero nobis eius architecto placeat et incidunt sapiente
              perferendis quaerat porro aliquam?
            </p>
          </TextReveal>
          <Image
            src="/img1.jpg"
            alt="Me at somewhere"
            width={960}
            height={540}
            className="image-reveal mt-4 md:w-[50vw] h-auto aspect-video object-cover"
          />
        </div>
      </div>
    </section>
  );
}

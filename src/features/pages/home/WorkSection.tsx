"use client";

import Image from "next/image";
import OpacityReveal from "@/features/animations/OpacityReveal";
import TextReveal from "@/features/animations/TextReveal";
import Button from "@/components/Button";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WorkSection() {
  const container = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current || !slider.current) return;

    // Calculate the horizontal distance to scroll
    // The scroll width is the total width of the content inside the slider
    const totalScrollWidth =
      slider.current.scrollWidth - container.current.offsetWidth;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: `+=${totalScrollWidth}`,
        scrub: true,
        pin: true,
      },
    });

    timeline.to(slider.current, {
      x: -totalScrollWidth,
      ease: "none",
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section
      ref={container}
      className="min-h-screen flex flex-col overflow-hidden mt-[25vh]"
    >
      <div ref={slider} className="flex-1 h-full flex mt-[32px]">
        <div className="flex-shrink-0 max-w-screen md:w-[60vw] px-4 md:px-6">
          <OpacityReveal duration={1} start={80}>
            <h1 className="font-serif w-full text-right text-[60px] lg:text-[96px]">
              Work ✱
            </h1>
          </OpacityReveal>
          <TextReveal splitBy="words" stagger={0.02} duration={1.5} start={80}>
            <p className="w-full md:ml-auto md:max-w-[640px] text-right text-lg lg:text-xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              molestias quod laborum debitis laboriosam corporis sit, facere
              minus libero nobis eius architecto placeat et incidunt sapiente
              perferendis quaerat porro aliquam?
            </p>
          </TextReveal>
        </div>
        <div className="flex gap-4 md:gap-6">
          {new Array(7).fill(0).map((_, idx) => (
            <WorkCard
              key={idx}
              img="/img1.jpg"
              href="/work/iiitd-sigchi"
              title="IIITD ACM SIGCHI Student Chapter Website"
              description="Web Development, NextJS, GSAP"
            />
          ))}
        </div>
        <div className="flex-shrink-0 w-screen md:w-[50vw] py-4 md:py-6 flex flex-col justify-center items-center">
          <Button href="/work" className="w-max">
            VIEW ALL 🡢
          </Button>
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  img,
  href,
  title,
  description,
}: {
  img: string;
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="w-[calc(100vw-24px)] md:w-[400px] flex flex-col gap-[1em] py-4 lg:py-6 cursor-pointer group"
    >
      <div className="image-reveal relative w-full h-full">
        <Image
          src={img}
          alt="title"
          width={400}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(.7,0,.3,1)]"
        />
      </div>
      <div>
        <h3 className="uppercase text-2xl">{title}</h3>
        <p className="text-secondary">{description}</p>
        <div className="opacity-0 group-hover:opacity-100 mt-[1em]">
          <Button>Check Project 🡢</Button>
        </div>
      </div>
    </Link>
  );
}

"use client";

import Image from "next/image";
import OpacityReveal from "@/features/animations/OpacityReveal";
import TextReveal from "@/features/animations/TextReveal";
import Button from "@/components/Button";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/work";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { useNoHover } from "@/app/hooks/noHover";
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
          {projects.map((project) => (
            <WorkCard
              key={project.slug}
              img={project.images[0] || "/img1.jpg"}
              href={`/work/${project.slug}`}
              title={project.title}
              description={project.details.tools.join(", ")}
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
  const container = useRef(null);
  const [hover, setHover] = useState(false);
  const isTouchDevice = useNoHover();

  useGSAP(
    () => {
      if (isTouchDevice) {
        gsap.set(container.current, {
          height: "auto",
          opacity: 1,
        });
        return;
      }

      if (hover) {
        gsap.to(container.current, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        });
      } else {
        gsap.to(container.current, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power4.out",
        });
      }
    },
    { dependencies: [hover, isTouchDevice] }
  );

  return (
    <Link
      href={href}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="w-[calc(100vw-24px)] md:w-[400px] flex flex-col gap-[1em] py-4 lg:py-6 cursor-pointer"
    >
      <div className="image-reveal relative w-full h-full">
        <Image
          src={img}
          alt="title"
          width={400}
          height={800}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>
      <div
        ref={container}
        className="flex-shrink-0 overflow-hidden"
        style={{
          height: 0,
          opacity: 0,
        }}
      >
        <h3 className="uppercase text-2xl">{title}</h3>
        <p className="text-secondary">{description}</p>
        <div className="mt-4">
          <Button>Check Project 🡢</Button>
        </div>
      </div>
    </Link>
  );
}

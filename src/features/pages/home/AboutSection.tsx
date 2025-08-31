"use client";

import Image from "next/image";
import OpacityReveal from "@/features/animations/OpacityReveal";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const courseWork = {
  "Design Courses": [
    "Introduction to Human Computer Interaction",
    "Design Drawing and Visualization",
    "Design Process and Perspective",
    "Design of Interactive Systems",
    "Prototyping of Interactive Systems",
  ],
  "Computer Science Courses": [
    "Introduction to Programming",
    "Data Structure and Algorithms",
    "Object Oriented Programming",
    "Analysis and Design of Algorithms",
    "Database Management Systems",
    "Computer Graphics",
  ],
};

export default function AboutSection() {
  useGSAP(() => {
    const split = SplitText.create(".split-text-words", {
      type: "words",
      mask: "words",
      onSplit: (self) => {
        gsap.set(self.words, {
          yPercent: 100,
          opacity: 0,
        });
      },
    });

    ScrollTrigger.batch(split.words, {
      onEnter: (batch) =>
        gsap.to(batch, {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.02,
          ease: "circ.out",
        }),
      start: "top 95%",
      once: true,
    });

    return () => {
      if (split.revert) {
        split.revert();
      }
    };
  });

  return (
    <section id="about-me" className="min-h-screen pt-[25vh] px-4 md:px-6">
      <div className="max-w-screen md:w-[640px]">
        <OpacityReveal duration={1} start={80}>
          <h1 className="font-serif w-full text-[60px] lg:text-[96px]">
            ✽ About Me
          </h1>
        </OpacityReveal>
        <p className="split-text-words w-full md:w-[640px] text-lg lg:text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          molestias quod laborum debitis laboriosam corporis sit, facere minus
          libero nobis eius architecto placeat et incidunt sapiente perferendis
          quaerat porro aliquam?
        </p>
      </div>
      <Image
        src="/img1.jpg"
        alt="Me at somewhere"
        width={960}
        height={540}
        className="image-reveal mt-4 md:w-[50vw] h-auto aspect-video object-cover"
      />
      <div className="mt-[64px] lg:mt-[128px] lg:ml-auto lg:w-1/2">
        <div className="grid md:grid-cols-2 gap-[0.5em] md:gap-4">
          <h3 className="split-text-words uppercase text-2xl lg:text-3xl col-span-full">
            Course Work
          </h3>
          {Object.entries(courseWork).map(([title, courses], index) => (
            <div key={index} className="contents">
              <h4 className="split-text-words text-xl lg:text-2xl col-auto max-md:mt-4">
                {title}
              </h4>
              <div className="text-secondary max-md:space-y-2">
                {courses.map((course, courseIndex) => (
                  <p key={courseIndex} className="split-text-words">
                    {course}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-[64px] md:my-[128px] md:ml-auto md:w-1/2 space-y-4">
        <h3 className="split-text-words uppercase text-2xl lg:text-3xl">
          Tools and Technologies
        </h3>
        <p className="split-text-words text-secondary">
          ReactJS, NextJS, NodeJS, ExpressJS, TailwindCSS, GSAP, SDL2, OpenGL,
          Unity, Git, Linux, Vim, Neovim, tmux, Visual Studio Code, IntelliJ,
          Figma, Miro
        </p>
      </div>
    </section>
  );
}

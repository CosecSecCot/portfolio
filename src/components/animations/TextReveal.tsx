"use client";

import { cloneElement, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * `TextReveal` marks a text element for scroll-triggered animation.
 *
 * @param {Object} props
 * @param {React.ReactElement} props.children - The single React element (like <p> or <h2>).
 * @param {'lines' | 'words' | 'chars'} [props.splitBy='lines'] - The unit to split the text by.
 * @param {string?} props.className - Optional additional class names.
 */
const TextReveal = ({
  children,
  start = 100,
  delay = 0,
  duration = 1,
  ease = "circ.out",
  className = "",
  splitBy = "lines", // Prop can now be 'lines', 'words', or 'chars'
  stagger = splitBy === "lines" ? 0.1 : 0.02,
}: {
  children: React.ReactElement<{ ref?: unknown; className?: string }>;
  start?: number;
  delay?: number;
  duration?: number;
  ease?: gsap.EaseFunction | gsap.EaseString;
  className?: string;
  splitBy?: "lines" | "words" | "chars"; // Updated type definition
  stagger?: number;
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const split = SplitText.create(elementRef.current, {
        type: splitBy,
        mask: splitBy,
      });

      const targets = split[splitBy];

      gsap.from(targets, {
        duration: duration,
        yPercent: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: elementRef.current,
          start: `top ${start}%`,
          once: true,
        },
        stagger: stagger,
        delay: delay,
        ease: ease,
      });

      return () => {
        if (split.revert) {
          split.revert();
        }
      };
    },
    { dependencies: [splitBy] }
  );

  return cloneElement(children, {
    ref: elementRef,
    className: cn(className, children.props.className),
  });
};

export default TextReveal;

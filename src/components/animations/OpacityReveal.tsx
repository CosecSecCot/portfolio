"use client";

import { cloneElement, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

/**
 * `OpacityReveal` marks a text element for scroll-triggered animation.
 *
 * @param {Object} props
 * @param {React.ReactElement} props.children - The single React element.
 * @param {string?} props.className - Optional additional class names.
 */
const OpacityReveal = ({
  children,
  start = 100,
  delay = 0,
  duration = 0.6,
  ease = "power4.inOut",
  className = "",
  stagger = 0.1,
}: {
  children: React.ReactElement<{ ref?: unknown; className?: string }>;
  start?: number;
  delay?: number;
  duration?: number;
  ease?: gsap.EaseFunction | gsap.EaseString;
  className?: string;
  stagger?: number;
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.set(elementRef.current, { opacity: 0 });

    gsap.to(elementRef.current, {
      opacity: 1,
      duration: duration,
      scrollTrigger: {
        trigger: elementRef.current,
        start: `top ${start}%`,
      },
      stagger: stagger,
      delay: delay,
      ease: ease,
    });
  });

  return cloneElement(children, {
    ref: elementRef,
    className: cn(children.props.className, className),
  });
};

export default OpacityReveal;

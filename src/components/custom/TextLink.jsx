"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function TextLink({ children, className, href, target }) {
  const [play, setPlay] = useState("play");
  return (
    <Link
      href={href}
      className={cn(`text-link w-fit ${play}`, className)}
      onMouseOver={() => setPlay("")}
      onMouseLeave={() => setPlay("play")}
      target={target}
    >
      <div className="block">
        {children.split("").map((letter, index) => {
          return (
            <span
              key={index}
              className="letter"
              style={{ transitionDelay: `${0.005 * index}s` }}
            >
              {letter.trim() === "" ? "\xa0" : letter}
            </span>
          );
        })}
      </div>
      <div className="block">
        {children.split("").map((letter, index) => {
          return (
            <span
              key={index}
              className="letter"
              style={{ transitionDelay: `${0.03 * index}s` }}
            >
              {letter.trim() === "" ? "\xa0" : letter}
            </span>
          );
        })}
      </div>
    </Link>
  );
}

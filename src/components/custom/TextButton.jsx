"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function TextButton({ children, className, onClick }) {
  const [play, setPlay] = useState("play");
  return (
    <button
      className={cn(`text-button ${play} space-y-[0.25em]`, className)}
      onMouseOver={() => setPlay("")}
      onMouseLeave={() => setPlay("play")}
      onClick={onClick}
    >
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
    </button>
  );
}

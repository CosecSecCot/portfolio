"use client";

import TextButton from "@/components/custom/TextButton";
import TextLink from "@/components/custom/TextLink";
import { TriangleDashed } from "lucide-react";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {}, []);
  return (
    <>
      <audio id="bg-audio" loop autoPlay>
        <source src="/sci-fi-ambient-music-183269.mp3" type="audio/mpeg" />
      </audio>
      <header className="sticky top-0 w-full">
        <div className="absolute z-0 w-full h-[6em] navbar-bg" />
        <nav className="relative z-10 flex md:px-10 px-3 py-[1em] font-mono uppercase justify-between items-center">
          <TriangleDashed size="1.5em" className="md:w-auto w-[3em]" />
          <div className="md:flex hidden gap-[1.5em]">
            <TextLink href="">Home</TextLink>
            <TextLink href="">About</TextLink>
            <TextLink href="">Work</TextLink>
            <TextLink href="">Contact</TextLink>
          </div>
          <TextButton className="md:hidden">MENU</TextButton>
          <TextButton className="hidden md:block">SETTINGS</TextButton>
        </nav>
      </header>
    </>
  );
}

"use client";

import TextLink from "@/components/custom/TextLink";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="md:p-10 p-3 space-y-[10%] w-full">
      <div className="flex md:flex-row flex-col justify-between gap-4">
        <div className="flex flex-col justify-between gap-4 w-full">
          <p className="md:text-3xl text-5xl">Clean Code, Clear Vision.</p>
          <div>
            <p>
              Code that speaks clearly. <br /> Design that works silently.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full">
          <div className="flex flex-col font-mono uppercase">
            <TextLink href="">Home</TextLink>
            <TextLink href="">Work</TextLink>
            <TextLink href="">About</TextLink>
            <TextLink href="">Contact</TextLink>
          </div>
          <div className="flex flex-col font-mono uppercase">
            <TextLink
              href="https://www.instagram.com/cosec_seccot/"
              target="_blank"
            >
              Instagram
            </TextLink>
            <TextLink
              href="https://www.linkedin.com/in/cosecseccot/"
              target="_blank"
            >
              LinkedIn
            </TextLink>
            <TextLink href="https://github.com/CosecSecCot" target="_blank">
              GitHub
            </TextLink>
          </div>
          <div className="flex flex-col">
            <p>New Delhi, India</p>
            <p>110033</p>
          </div>
        </div>
        <div />
      </div>
      <Logo />
    </footer>
  );
}

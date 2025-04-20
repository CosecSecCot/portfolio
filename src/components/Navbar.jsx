"use client";

import TextButton from "@/components/custom/TextButton";
import TextLink from "@/components/custom/TextLink";
import ThemeChanger from "@/components/ThemeChanger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TriangleDashed } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const menuLinks = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { path: "/work", text: "Work" },
  { path: "/contact", text: "Contact" },
];

export default function Navbar() {
  const overlayRef = useRef(null);
  const timeline = useRef(null);
  const settingsTimeline = useRef(null);
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useGSAP(
    () => {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current.to(overlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.0,
        ease: "power4.inout",
      });
    },
    { scope: overlayRef },
  );

  const toggleMenu = () => {
    if (open) {
      timeline.current?.reverse();
    } else {
      timeline.current?.play();
    }
    setOpen(!open);
  };

  const toggleSettings = () => {
    if (settingsOpen) {
      settingsTimeline.current?.reverse();
    } else {
      settingsTimeline.current?.play();
    }
    setSettingsOpen(!settingsOpen);
  };

  return (
    <>
      <audio id="bg-audio" loop autoPlay>
        <source src="/sci-fi-ambient-music-183269.mp3" type="audio/mpeg" />
      </audio>
      <header className="sticky z-50 top-0 w-full">
        <div className="absolute z-0 w-full h-[6em] navbar-bg" />
        <nav className="relative z-10 flex md:px-10 px-3 py-[1em] justify-between items-center">
          <TriangleDashed size="1.5em" className="md:w-auto w-[3em]" />
          <div className="md:flex hidden gap-[1em]">
            {menuLinks.map((menuLink, index) => (
              <TextLink key={index} href={menuLink.path}>
                {menuLink.text}
              </TextLink>
            ))}
          </div>
          <TextButton className="md:hidden" onClick={toggleMenu}>
            MENU
          </TextButton>
          <TextButton className="hidden md:block" onClick={toggleSettings}>
            SETTINGS
          </TextButton>
          <div
            ref={overlayRef}
            className="fixed z-50 top-0 left-0 w-full h-full px-3 py-[1em] bg-background/60 backdrop-blur-xl"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            }}
          >
            <div className="absolute top-0 left-0 w-full px-3 py-[1em] flex justify-between gap-4 items-center">
              <div className="menu-logo">
                <p className="font-sans text-xl">CosecSecCot</p>
              </div>
              <TextButton onClick={toggleMenu}>CLOSE</TextButton>
            </div>
            <div className="menu-copy flex flex-col h-full justify-around">
              <div className="menu-links">
                {menuLinks.map((menuLink, index) => (
                  <div className="menu-link-item" key={index}>
                    <Link
                      href={menuLink.path}
                      className="menu-link font-mono uppercase text-5xl"
                      onClick={toggleMenu}
                    >
                      {menuLink.text}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="grid">
                <div className="menu-info-col flex flex-col">
                  <Link
                    href="https://www.instagram.com/cosec_seccot/"
                    target="_blank"
                  >
                    INSTAGRAM
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/cosecseccot/"
                    target="_blank"
                  >
                    LINKEDIN
                  </Link>
                  <Link href="https://github.com/CosecSecCot" target="_blank">
                    GITHUB
                  </Link>
                </div>
                <div className="menu-info-col"></div>
              </div>
            </div>
            <div className="menu-preview absolute bottom-0 left-0 px-3 py-[1em]">
              <p className="font-mono uppercase">CLEAN CODE, CLEAR VISION</p>
            </div>
          </div>
          <SettingsTab
            open={settingsOpen}
            setOpen={setSettingsOpen}
            timeline={settingsTimeline}
          />
        </nav>
      </header>
    </>
  );
}

function SettingsTab({ open, setOpen, timeline }) {
  const overlayRef = useRef(null);

  useGSAP(
    () => {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current.to(overlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.0,
        ease: "power4.out",
      });
    },
    { scope: overlayRef },
  );

  const toggleMenu = () => {
    if (open) {
      timeline.current?.reverse();
    } else {
      timeline.current?.play();
    }
    setOpen(!open);
  };

  return (
    <div
      ref={overlayRef}
      className="fixed z-50 top-0 right-0 w-full h-full px-10 py-[1em] bg-background/80 backdrop-blur-xl"
      style={{
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      }}
    >
      <div className="absolute top-0 left-0 w-full px-10 py-[1em] flex justify-between gap-4 items-center">
        <div className="menu-logo">
          <p className="font-sans">CosecSecCot</p>
        </div>
        <TextButton onClick={toggleMenu}>CLOSE</TextButton>
      </div>
      <div className="flex flex-col h-full justify-around ml-[10%]">
        <ThemeChanger />
      </div>
      <div className="menu-preview absolute bottom-0 left-0 px-10 py-[1em]">
        <p className="font-mono uppercase">CLEAN CODE, CLEAR VISION</p>
      </div>
    </div>
  );
}

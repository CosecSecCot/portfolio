"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/data/work";
import { cn } from "@/lib/utils";
import { cubicBezier, motion } from "framer-motion";
import { useState } from "react";

const ease = cubicBezier(0.5, 0.1, 0.2, 1);

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  return (
    <motion.header
      animate={active ? "active" : "inactive"}
      className="fixed top-0 right-0 w-full h-max z-[9999]"
      initial={false}
    >
      <motion.nav
        className="absolute z-20 top-0 w-full px-[1.5em] py-[1em] sm:py-[0.5em] flex gap-[1em] justify-between items-center bg-background"
        variants={{
          active: {
            background: "var(--foreground)",
            color: "var(--background)",
          },
          inactive: {
            background: "var(--background)",
            color: "var(--foreground)",
            transition: { delay: 0.5 },
          },
        }}
      >
        {/* <p className="max-md:hidden">✦ Lorem, ipsum.</p> */}
        <Link href="/" className="font-serif text-2xl">
          Jagjot Singh
        </Link>
        <menu className="max-sm:hidden uppercase flex gap-[1em] justify-end">
          <NavLink href="/" pathname={pathname}>
            Home
          </NavLink>
          <NavLink href="/about" pathname={pathname}>
            About
          </NavLink>
          <NavLink href="/projects" pathname={pathname}>
            Projects<sup>({projects.length})</sup>
          </NavLink>
          <NavLink href="/contact" pathname={pathname}>
            Contact
          </NavLink>
        </menu>
        <MenuIcon active={active} setActive={setActive} className="sm:hidden" />
      </motion.nav>
      <MobileDrawer
        pathname={pathname}
        setActive={setActive}
        className="sm:hidden"
      />
    </motion.header>
  );
}

function MobileDrawer({
  className,
  pathname,
  setActive,
}: {
  className?: string;
  pathname: string;
  setActive: (active: boolean) => void;
}) {
  return (
    <motion.div
      style={{
        y: "-100%",
      }}
      variants={{
        active: {
          y: 0,
          scale: 1,
        },
        inactive: {
          y: "-112.5%",
          scale: 1.25,
        },
      }}
      transition={{ delay: 0.1, duration: 0.75, ease: ease }}
      className={cn(
        "absolute z-10 top-0 w-screen h-screen bg-foreground text-background backdrop-blur-2xl p-4 flex flex-col justify-center",
        className
      )}
    >
      <div className="h-full" />
      <motion.menu
        variants={{
          active: {
            transition: {
              staggerChildren: 0.1,
              staggerDirection: 1,
              delayChildren: 0.1,
            },
          },
        }}
        className="flex flex-col h-full font-serif text-[15vw] leading-tight"
      >
        <NavLinkMobile
          href="/"
          pathname={pathname}
          onClick={() => setActive(false)}
        >
          Home
        </NavLinkMobile>
        <NavLinkMobile
          href="/about"
          pathname={pathname}
          onClick={() => setActive(false)}
        >
          About
        </NavLinkMobile>
        <NavLinkMobile
          href="/projects"
          pathname={pathname}
          onClick={() => setActive(false)}
        >
          Projects<sup>({projects.length})</sup>
        </NavLinkMobile>
        <NavLinkMobile
          href="/contact"
          pathname={pathname}
          onClick={() => setActive(false)}
        >
          Contact
        </NavLinkMobile>
      </motion.menu>
      <div className="flex flex-col justify-end h-full">
        <p className="text-background/70 text-xs pb-[10%]">
          &copy; Copyright 2025 Jagjot Singh. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
}

function MenuIcon({
  className,
  active,
  setActive,
}: {
  className?: string;
  active: boolean;
  setActive: (active: boolean) => void;
}) {
  return (
    <motion.button
      onClick={() => setActive(!active)}
      className={cn("relative w-10 h-8", className)}
      animate={active ? "active" : "inactive"}
    >
      <motion.span
        style={{
          top: "35%",
          left: 0,
        }}
        className="absolute h-px w-full bg-foreground"
        variants={{
          active: {
            rotate: 45,
            top: "50%",
            background: "var(--background)",
          },
          inactive: {
            rotate: 0,
            top: "35%",
            background: "var(--foreground)",
            transition: { background: { delay: 0.5 } },
          },
        }}
        transition={{
          ease: "circOut",
        }}
      />
      <motion.span
        style={{
          bottom: "35%",
          left: 0,
        }}
        className="absolute h-px w-full bg-foreground"
        variants={{
          active: {
            rotate: -45,
            bottom: "50%",
            background: "var(--background)",
          },
          inactive: {
            rotate: 0,
            bottom: "35%",
            background: "var(--foreground)",
            transition: { background: { delay: 0.5 } },
          },
        }}
        transition={{
          ease: "circOut",
        }}
      />
    </motion.button>
  );
}

function NavLink({
  href,
  children,
  pathname,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  pathname: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  // Check if the link should be active
  // For the `/` link (homepage), we check for an exact match.
  // For other links, we check if the path starts with the given `href` to handle dynamic slugs.
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <li>
      <Link
        href={href}
        scroll={true}
        className={isActive ? "border-b" : ""}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}

function NavLinkMobile({
  href,
  children,
  pathname,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  pathname: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  // Check if the link should be active
  // For the `/` link (homepage), we check for an exact match.
  // For other links, we check if the path starts with the given `href` to handle dynamic slugs.
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <li>
      <Link
        href={href}
        scroll={true}
        className={cn(
          "relative block overflow-hidden",
          isActive ? "opacity-50" : ""
        )}
        onClick={onClick}
      >
        <motion.div
          variants={{
            active: {
              y: 0,
            },
            inactive: {
              y: "100%",
            },
          }}
          transition={{
            duration: 1,
            ease: ease,
          }}
        >
          {children}
        </motion.div>
      </Link>
    </li>
  );
}

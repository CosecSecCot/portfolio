"use client";

import Link from "next/link";
import Button from "./Button";
import { cn } from "@/lib/utils";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";

const footerLinks = {
  "Quick Links": [
    {
      label: "IIITD ACM SIGCHI Student Chapter",
      href: "/projects/iiitd-sigchi",
    },
    {
      label: "IIITD HCD Department Website",
      href: "/projects/iiitd-hcd",
    },
    {
      label: "Ebony Ray-tracing Engine",
      href: "/projects/ebony",
    },
  ],
  Socials: [
    {
      label: "Instagram",
      href: "",
    },
    {
      label: "LinkedIn",
      href: "",
    },
    {
      label: "GitHub",
      href: "",
    },
    {
      label: "itch.io",
      href: "",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative flex flex-col justify-between p-4 md:p-6 bg-foreground/5">
      <div className="grid md:grid-cols-2 mb-[10vh]">
        <span className="font-serif text-4xl mb-[1em]">Jagjot Singh</span>
        <div>
          <div className="grid md:grid-cols-2 gap-[2em] mb-[5vh]">
            {Object.entries(footerLinks).map(([title, links], index) => (
              <section key={index}>
                <p id={title} className="text-neutral-400">
                  {title}
                </p>
                <menu
                  aria-labelledby={title}
                  className="mt-[0.5em] flex flex-col"
                >
                  {links.map((link, linkIndex) => (
                    <CustomLink key={linkIndex} href={link.href}>
                      {link.label}
                    </CustomLink>
                  ))}
                </menu>
              </section>
            ))}
          </div>
          <div className="mt-[2em] lg:w-1/2 leading-tight">
            <p>
              Get in touch for collaborations or full-time opportunities.
              Let&rsquo;s get acquainted.
            </p>
            <Button href="/contact" className="mt-[1em] justify-between group">
              Contact me
              <ArrowsRightLeftIcon className="size-[1.25em] group-hover:rotate-90 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
      <div className="md:ml-auto md:w-1/2 text-neutral-400 text-xs">
        <p>&copy; Copyright 2025 Jagjot Singh. All rights reserved.</p>
      </div>
    </footer>
  );
}

function CustomLink({
  href,
  children,
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  rest?: object;
}) {
  return (
    <Link
      href={href}
      className={cn("hover:underline w-fit", className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

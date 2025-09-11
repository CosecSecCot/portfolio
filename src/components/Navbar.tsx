"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/data/work";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 right-0 w-full h-max z-[9999] mix-blend-difference">
      <nav className="absolute z-10 top-0 w-full px-[1.5em] py-[1em] flex gap-[1em] justify-end md:justify-between mix-blend-exclusion">
        <p className="text-[#8a8a8a] max-md:hidden">✦ Lorem, ipsum.</p>
        <ul className="uppercase text-white flex gap-[1em] justify-end">
          <NavLink href="/" pathname={pathname}>
            Home
          </NavLink>
          <NavLink href="/about" pathname={pathname}>
            About
          </NavLink>
          <NavLink href="/work" pathname={pathname}>
            Work<sup>({projects.length})</sup>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
  pathname,
}: {
  href: string;
  children: React.ReactNode;
  pathname: string;
}) {
  // Check if the link should be active
  // For the `/` link (homepage), we check for an exact match.
  // For other links, we check if the path starts with the given `href` to handle dynamic slugs.
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <li>
      <Link href={href} className={isActive ? "border-b" : ""}>
        {children}
      </Link>
    </li>
  );
}

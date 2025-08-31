import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ForwardedRef } from "react";

const Button = React.forwardRef(
  (
    {
      children,
      href,
      className,
      type = "default",
      invert = false,
      noUpper = false,
      onClick,
    }: {
      children: React.ReactNode;
      href?: string;
      type?: "default" | "secondary";
      className?: string;
      invert?: boolean;
      noUpper?: boolean;
      onClick?: () => void;
    },
    ref
  ) => {
    const baseClassName = cn(
      "border px-[1em] py-[0.5em] rounded-full transition-colors ease-[cubic-bezier(0.16,1,0.3,1)] duration-300 cursor-pointer",
      type === "secondary"
        ? "border-black bg-black hover:bg-transparent text-white hover:text-black"
        : "border-black hover:bg-black hover:text-white",
      noUpper ? "" : "uppercase",
      className
    );

    return href ? (
      <Link
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        href={href}
        className={baseClassName}
        style={{ filter: invert ? "invert(100%)" : "" }}
      >
        {children}
      </Link>
    ) : (
      <button
        ref={ref as ForwardedRef<HTMLButtonElement>}
        className={baseClassName}
        style={{ filter: invert ? "invert(100%)" : "" }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

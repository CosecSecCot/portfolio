import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ForwardedRef } from "react";

const Button = React.forwardRef(
  (
    {
      children,
      externalLink = false,
      href,
      className,
      type = "default",
      invert = false,
      scroll = true,
      onClick,
    }: {
      children: React.ReactNode;
      externalLink?: boolean;
      href?: string;
      type?: "default" | "secondary";
      className?: string;
      invert?: boolean;
      scroll?: boolean;
      onClick?: () => void;
    },
    ref
  ) => {
    const baseClassName = cn(
      "px-[1em] py-[0.5em] transition-colors ease-[cubic-bezier(0.16,1,0.3,1)] duration-300 cursor-pointer",
      "flex items-center w-full max-w-[400px] gap-2",
      type === "secondary"
        ? "bg-foreground/20 text-foreground border-foreground/20 hover:bg-foreground hover:text-background hover:border-foreground"
        : "bg-foreground text-background border-foreground hover:bg-foreground/10 hover:text-foreground hover:border-foreground/20",
      className
    );

    return href ? (
      <Link
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        target={externalLink ? "_blank" : undefined}
        href={href}
        scroll={scroll}
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

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { ForwardedRef } from "react";

type BaseButtonProps = {
  children: React.ReactNode;
  className?: string;
  buttonStyle?: "default" | "secondary";
  disabled?: boolean;
};

type LinkButtonProps = BaseButtonProps &
  LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never; // Ensure `href` is not passed
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const Button = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(({ className, buttonStyle = "default", children, ...props }, ref) => {
  const baseClassName = cn(
    "px-[1em] py-[0.5em] transition-colors ease-[cubic-bezier(0.16,1,0.3,1)] duration-300 cursor-pointer",
    "flex items-center w-full max-w-[400px] gap-2",
    buttonStyle === "secondary"
      ? "bg-foreground/20 text-foreground border-foreground/20 hover:bg-foreground hover:text-background hover:border-foreground"
      : "bg-foreground text-background border-foreground hover:bg-foreground/10 hover:text-foreground hover:border-foreground/20",
    props.disabled && "opacity-50 cursor-not-allowed",
    className
  );

  // Use the 'href' prop to discriminate between the types
  if ("href" in props && props.href) {
    return (
      <Link
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        className={baseClassName}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as ForwardedRef<HTMLButtonElement>}
      className={baseClassName}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;

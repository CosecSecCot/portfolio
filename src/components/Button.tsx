import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { ForwardedRef } from "react";

type BaseButtonProps = {
  buttonStyle?: "default" | "secondary";
};

type LinkButtonProps = BaseButtonProps &
  LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never; // Ensure `href` is not passed
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

function isLinkProps(props: ButtonProps): props is LinkButtonProps {
  return "href" in props;
}

const Button = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const baseClassName = cn(
    "px-[1em] py-[0.5em] transition-colors ease-[cubic-bezier(0.16,1,0.3,1)] duration-300 cursor-pointer",
    "flex items-center w-full max-w-[400px] gap-2",
    props.buttonStyle === "secondary"
      ? "bg-foreground/20 text-foreground border-foreground/20 hover:bg-foreground hover:text-background hover:border-foreground"
      : "bg-foreground text-background border-foreground hover:bg-foreground/10 hover:text-foreground hover:border-foreground/20",
    props.className
  );

  // Use the 'href' prop to discriminate between the types
  if (isLinkProps(props)) {
    const { className, buttonStyle, ...rest } = props;
    return (
      <Link
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        className={baseClassName}
        {...rest}
      >
        {props.children}
      </Link>
    );
  }

  const { className, buttonStyle, disabled, ...rest } = props;

  return (
    <button
      ref={ref as ForwardedRef<HTMLButtonElement>}
      className={cn(
        baseClassName,
        props.disabled && "opacity-50 cursor-not-allowed"
      )}
      {...rest}
    >
      {props.children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;

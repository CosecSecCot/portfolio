import Link from "next/link";
import Button from "./Button";
import GradientBackground from "./GradientBackground";
import { cn } from "@/lib/utils";
import TextReveal from "@/features/animations/TextReveal";

const footerLinks = {
  "Quick Links": [
    {
      label: "IIITD ACM SIGCHI Student Chapter",
      href: "/work/iiitd-sigchi",
    },
    {
      label: "IIITD HCD Department Website",
      href: "/work/iiitd-hcd",
    },
    {
      label: "Ebony Ray-tracing Engine",
      href: "/work/ebony",
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
      label: "Itch.io",
      href: "",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="relative flex flex-col justify-between min-h-[90vh] mix-blend-difference">
      <GradientBackground color1="#CCCCCC" />

      <div>
        <FooterLinks />
        <div className="pt-[64px] md:pt-[128px] p-4 md:p-6 md:ml-auto md:w-2/3 xl:w-1/2">
          <div className="md:text-lg">
            <p className="w-1/2">
              Get in touch for collaborations or full-time opportunities. Let's
              get acquainted.
            </p>
            <div className="mt-4 flex gap-4 flex-wrap">
              <Button
                href="mailto:cosecseccot581@gmail.com"
                type="secondary"
                noUpper
              >
                cosecseccot581@gmail.com
              </Button>
              <Button type="secondary" noUpper>
                Get CV
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 md:p-6 flex max-md:flex-col justify-between md:items-end">
        <TextReveal splitBy="chars">
          <h2 className="font-serif text-[22vw] md:text-[96px] text-center">
            Jagjot Singh
          </h2>
        </TextReveal>
        <div className="flex gap-4 justify-between items-center">
          <CustomLink href="/imprint" className="text-lg">
            Imprint, Privacy
          </CustomLink>
          <Button href="/" invert className="text-black mix-blend-difference">
            Go To Top 🡡
          </Button>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks() {
  return (
    <div className="pt-[64px] md:pt-[128px] p-4 md:p-6 md:ml-auto md:w-2/3 xl:w-1/2">
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="flex flex-col gap-4">
            <h3 className="uppercase text-xl md:text-2xl">{title}</h3>
            <div className="flex flex-col">
              {links.map((link, index) => (
                <CustomLink key={index} href={link.href} className="md:text-lg">
                  {link.label}
                </CustomLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
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
      className={cn(
        "text-[#666] mix-blend-difference hover:underline inline-block",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

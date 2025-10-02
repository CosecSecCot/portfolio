import OpacityReveal from "@/components/animations/OpacityReveal";
import TextReveal from "@/components/animations/TextReveal";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <main className="mb-[10vh]">
        <article className="mt-[128px] p-4 sm:p-6">
          <div className="relative w-full flex flex-col md:flex-row gap-8">
            <section className="flex-1 space-y-4">
              <OpacityReveal>
                <h1 className="font-serif text-[80px] lg:text-[96px] leading-tight">
                  Contact
                </h1>
              </OpacityReveal>
              <TextReveal splitBy="words">
                <p className="">
                  Always curious and building — I’m constantly working on
                  projects. Get in touch for collaborations or full-time
                  opportunities. Let&rsquo;s get acquainted.
                </p>
              </TextReveal>
              <OpacityReveal delay={0.2}>
                <h2 className="font-serif text-[40px] lg:text-[48px]">
                  Send A Message
                </h2>
              </OpacityReveal>
              <OpacityReveal delay={0.2}>
                <form className="grid grid-cols-2 gap-4">
                  <p className="text-xl lg:text-2xl">To</p>
                  <p className="text-xl lg:text-2xl">Jagjot Singh</p>
                  <label
                    htmlFor="user-email"
                    className="col-span-full text-xl lg:text-2xl"
                  >
                    From
                  </label>
                  <input
                    id="user-email"
                    type="email"
                    placeholder="Your email"
                    className="col-span-full lg:text-lg px-[1em] py-[0.5em] border border-foreground/50"
                  />
                  <label
                    htmlFor="user-message"
                    className="col-span-full text-xl lg:text-2xl"
                  >
                    Message
                  </label>
                  <textarea
                    id="user-message"
                    placeholder="Your message"
                    rows={8}
                    className="col-span-full resize-y lg:text-lg px-[1em] py-[0.5em] border border-foreground/50"
                  />
                  <Button className="max-sm:col-span-full lg:text-lg flex justify-between group">
                    Send message
                    <ArrowRightIcon className="size-[1em] group-hover:rotate-z-45 transition-transform duration-300" />
                  </Button>
                </form>
              </OpacityReveal>
            </section>
            <section className="max-md:hidden md:sticky md:top-[128px] h-fit flex-1 flex flex-col">
              <p id="contact-socials" className="text-neutral-400">
                Socials
              </p>
              <menu
                aria-labelledby="contact-socials"
                className="mt-[0.5em] flex flex-col"
              >
                <CustomLink href="">jagjot23252@iiit.ac.in</CustomLink>
                <CustomLink href="">LinkedIn</CustomLink>
                <CustomLink href="">GitHub</CustomLink>
                <CustomLink href="">itch.io</CustomLink>
              </menu>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
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

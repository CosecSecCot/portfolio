"use client";

import OpacityReveal from "@/components/animations/OpacityReveal";
import TextReveal from "@/components/animations/TextReveal";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { sendEmail } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { ArrowPathIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useActionState } from "react";

export default function Page() {
  const [state, formAction, isPending] = useActionState(sendEmail, null);

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
                  Always curious and building — I&rsquo;m constantly working on
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
                <form action={formAction} className="grid grid-cols-2 gap-4">
                  <p className="text-xl lg:text-2xl">To</p>
                  <Link
                    href="mailto:cosecseccot581@gmail.com"
                    target="_blank"
                    className="text-xl lg:text-2xl text-foreground/60 border-b border-foreground/60 hover:border-foreground hover:text-foreground w-fit"
                  >
                    Jagjot Singh
                  </Link>
                  <label
                    htmlFor="user-email"
                    className="col-span-full text-xl lg:text-2xl"
                  >
                    From
                  </label>
                  {state?.errors?.email && (
                    <p className="col-span-full text-red-600 text-sm">
                      {state.errors.email[0]}
                    </p>
                  )}
                  <input
                    id="user-email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="col-span-full lg:text-lg px-[1em] py-[0.5em] border border-foreground/30"
                  />
                  <label
                    htmlFor="user-message"
                    className="col-span-full text-xl lg:text-2xl"
                  >
                    Message
                  </label>
                  {state?.errors?.message && (
                    <p className="col-span-full text-red-600 text-sm">
                      {state.errors.message[0]}
                    </p>
                  )}
                  <textarea
                    id="user-message"
                    name="message"
                    placeholder="Your message"
                    rows={8}
                    className="col-span-full resize-y lg:text-lg px-[1em] py-[0.5em] border border-foreground/30"
                  />
                  <SubmitButton pending={isPending} />
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
                <CustomLink
                  href="mailto:cosecseccot581@gmail.com"
                  target="_blank"
                >
                  cosecseccot581@gmail.com
                </CustomLink>
                <CustomLink
                  href="https://www.linkedin.com/in/cosecseccot/"
                  target="_blank"
                >
                  LinkedIn
                </CustomLink>
                <CustomLink
                  href="https://github.com/CosecSecCot"
                  target="_blank"
                >
                  GitHub
                </CustomLink>
              </menu>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button
      type="submit"
      disabled={pending}
      className="max-sm:col-span-full lg:text-lg flex justify-between group"
    >
      <div className="flex items-center gap-2">
        {pending && <ArrowPathIcon className="size-[1em] animate-spin" />}
        {pending ? "Sending..." : "Send message"}
      </div>
      {!pending && (
        <ArrowRightIcon className="size-[1em] group-hover:rotate-z-45 transition-transform duration-300" />
      )}
    </Button>
  );
}

function CustomLink({
  href,
  children,
  className,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href ?? ""}
      className={cn("hover:underline w-fit", className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

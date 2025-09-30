import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Potrait from "../../../public/potrait.png";

export default function About() {
  return (
    <>
      <main className="mb-[10vh]">
        <article className="p-4 sm:p-6">
          <h1 className="font-serif text-[80px] lg:text-[96px] mt-[96px]">
            About
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1em]">
            <section>
              <p>
                Hello, I’m Jagjot Singh. I’m pursuing B.Tech in Computer Science
                and Design at IIIT Delhi. I have a little bit of experience in
                creative development and I have been exploring various topics in
                computer science like graphics, networking, design patterns,
                etc.
                <br />
                <br />I believe in project based learning and prototyping,
                learning new things at each step, trying to do better and keep
                improving along with the project.
              </p>
              <Image
                src={Potrait}
                alt=""
                width={1364}
                height={2008}
                priority
                className="mt-[1em] w-full max-w-[320px]"
                placeholder="blur"
              />
            </section>
            <div className="space-y-[2em]">
              <section>
                <h2 className="text-foreground/60">Tools & Technologies</h2>
                <div className="space-y-[1em]">
                  <p>
                    C++, OpenGL, GLSL (OpenGL Shading Language)
                    <br />
                    Javascript, Typescript, React, Next.js, GSAP, Framer Motion
                    <br />
                    Python, Pygame, FastAPI
                    <br />
                    Docker, GitHub, Workflows
                    <br />
                    Linux, Neovim, tmux
                  </p>
                </div>
              </section>
              <section>
                <p>
                  Always curious and building — I’m constantly working on
                  projects. You can browse through my previous and on-going
                  projects.
                </p>
                <Button
                  href="/projects"
                  className="mt-[0.5em] flex justify-between group"
                >
                  View projects
                  <ArrowRightIcon className="size-[1em] group-hover:-rotate-z-45 transition-transform duration-300" />
                </Button>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

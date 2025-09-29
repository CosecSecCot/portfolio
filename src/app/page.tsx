"use client";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import ProjectCardLarge from "@/components/ProjectCardLarge";
import { projects } from "@/data/work";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <main className="mb-[10vh]">
        <article className="min-h-screen flex flex-col justify-between p-4 sm:p-6 gap-[10vh]">
          <section className="md:w-1/2 md:ml-auto mt-[96px] sm:mt-[128px]">
            <h1 className="text-xl lg:text-2xl leading-tight">
              Hi, I&rsquo;m <strong>Jagjot Singh</strong>, B.Tech. student at
              IIIT Delhi — learning by experimenting across design and systems.
              From <strong>graphics</strong> to <strong>networking</strong> to{" "}
              <strong>creative development</strong>, I learn by building and
              improving.
            </h1>
            <Button
              href="/about"
              className="mt-4 justify-between lg:text-lg group"
            >
              Know more
              <ArrowRightIcon className="size-4 lg:size-5 group-hover:-rotate-z-45 transition-transform duration-300" />
            </Button>
          </section>
          <section>
            <h2 className="text-2xl">Latest Work</h2>
            <ProjectCardLarge
              project={projects[0]}
              className="mt-4 max-w-[max(512px,40vw)]"
            />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

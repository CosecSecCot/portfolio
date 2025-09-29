import Button from "@/components/Button";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/work";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <>
      <main className="mb-[10vh]">
        <article className="p-4 sm:p-6">
          <h1 className="font-serif text-[80px] lg:text-[96px] mt-[96px]">
            Projects<sup>({projects.length})</sup>
          </h1>
          <p className="sm:w-1/2">
            These projects represent my journey as a developer, experimenting
            with new ideas and technologies along the way. Have a look, and if
            something sparks your interest, let’s connect!
          </p>
          <Button href="/contact" className="mt-[1em] justify-between group">
            Contact me
            <ArrowRightIcon className="size-[1em] group-hover:-rotate-z-45 transition-transform duration-300" />
          </Button>
          <section className="mt-[80px] grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

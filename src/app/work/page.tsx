import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { Project, projects } from "@/data/work";
import OpacityReveal from "@/features/animations/OpacityReveal";
import TextReveal from "@/features/animations/TextReveal";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main>
        <article>
          <div className="mt-[50vh] mb-12 px-4 md:px-6">
            <OpacityReveal duration={1} stagger={0.02}>
              <h1 className="font-serif text-[60px] lg:text-[96px]">
                Work & Projects<sup>({projects.length})</sup>
              </h1>
            </OpacityReveal>
            <TextReveal splitBy="words">
              <p className="ml-auto md:w-1/2  lg:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis distinctio excepturi beatae nam atque aperiam cupiditate
                repudiandae, vitae architecto fugit repellat unde a vel ea
                dolorem. Inventore sit labore quisquam?
              </p>
            </TextReveal>
          </div>
          <section className="p-4">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              <WorkCard project={projects[0]} />
              <WorkCard project={projects[1]} />
            </div>
          </section>
          <section className="my-[10vh] md:my-[20vh] p-4 md:p-6 grid md:grid-cols-2">
            <div>
              <TextReveal splitBy="words">
                <p className="text-sm md:text-md lg:text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis distinctio excepturi beatae nam atque aperiam
                  cupiditate repudiandae, vitae architecto fugit repellat unde a
                  vel ea dolorem. Inventore sit labore quisquam?
                </p>
              </TextReveal>
              <OpacityReveal duration={1}>
                <Button href="" className="mt-4 max-md:text-sm">
                  Contact me
                </Button>
              </OpacityReveal>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

function WorkCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      <Link href={`/work/${project.slug}`} className="group">
        <Image
          src={project.images[1]}
          alt={project.slug}
          width={1280}
          height={720}
          className="image-reveal w-full h-auto object-cover group-hover:brightness-90 pointer-events-none transition-all ease-in-out duration-200"
        />
      </Link>
      <div className="py-2 md:py-3">
        <h3 className="text-xl xl:text-2xl">{project.title}</h3>
        <p
          className="text-secondary text-sm md:text-md"
          style={{
            width: "min(100%, 512px)",
          }}
        >
          {project.description}
        </p>
      </div>
    </div>
  );
}

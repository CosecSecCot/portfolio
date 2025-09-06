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
          <section className="my-12">
            <div className="mt-[50vh] px-4 md:px-6">
              <div className="flex justify-between">
                <TextReveal splitBy="chars" duration={1} stagger={0.02}>
                  <h1 className="font-serif text-[60px] lg:text-[96px]">
                    Selected Projects
                  </h1>
                </TextReveal>
                <TextReveal splitBy="chars" duration={1} stagger={0.02}>
                  <span className="max-md:hidden font-serif text-[60px] lg:text-[96px]">
                    2023 - 2025
                  </span>
                </TextReveal>
              </div>
              <TextReveal splitBy="words">
                <p className="md:w-1/2 text-lg">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis distinctio excepturi beatae nam atque aperiam
                  cupiditate repudiandae, vitae architecto fugit repellat unde a
                  vel ea dolorem. Inventore sit labore quisquam?
                </p>
              </TextReveal>
            </div>
          </section>
          <section className="p-4">
            <div className="grid md:grid-cols-2 gap-4">
              <WorkCard
                project={projects[0]}
                className="col-span-full h-auto aspect-square md:aspect-auto md:h-[80vh]"
              />
              <WorkCard
                project={projects[1]}
                className="h-auto aspect-square"
              />
            </div>
          </section>
          <section className="my-[10vh] md:my-[20vh] p-4 md:p-6 grid md:grid-cols-2">
            <div>
              <TextReveal splitBy="words">
                <p className="md:text-lg">
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
    <Link
      href={`work/${project.slug}`}
      className={cn("relative w-full h-full overflow-hidden group", className)}
    >
      <div className="image-reveal relative w-full h-full overflow-hidden">
        <Image
          src={project.images[1]}
          alt={project.slug}
          width={1280}
          height={720}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 pointer-events-none transition-transform ease-in-out duration-200"
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/10 to-black/80 group-hover:to-black/70 transition-colors ease-in-out duration-200" />
      </div>
      <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
        <p className="text-secondary">{project.details.year}</p>
        <h3 className="text-lg md:text-2xl">{project.title}</h3>
        <p
          className="max-md:text-sm"
          style={{
            width: "min(100%, 512px)",
          }}
        >
          {project.description}
        </p>
      </div>
    </Link>
  );
}

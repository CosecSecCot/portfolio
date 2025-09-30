import OpacityReveal from "@/components/animations/OpacityReveal";
import TextReveal from "@/components/animations/TextReveal";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import ProjectCardLarge from "@/components/ProjectCardLarge";
import { projects } from "@/data/work";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  let next_index = 0;
  const project = projects.find((proj, index) => {
    if (proj.slug === params.slug) {
      next_index = (index + 1) % projects.length;
      return true;
    }

    return false;
  });

  if (!project) return notFound();

  return (
    <>
      <main className="mb-[10vh]">
        <article className="p-4 sm:p-6">
          <div className="relative w-full min-h-screen flex flex-col md:flex-row gap-8">
            <section className="md:sticky md:top-[96px] max-md:mt-[96px] flex-1 space-y-4 h-fit">
              <OpacityReveal delay={0.1}>
                <Link
                  href="/projects"
                  className="flex items-center gap-2 border-b border-transparent hover:border-foreground w-fit"
                >
                  <ArrowLeftIcon className="size-[1em]" />
                  <span>Back to Projects</span>
                </Link>
              </OpacityReveal>
              <OpacityReveal>
                <h1 className="font-serif text-[72px] lg:text-[80px] leading-tight">
                  {project.title}
                </h1>
              </OpacityReveal>
              <TextReveal splitBy="words">
                <p className="sm:w-2/3">{project.overview}</p>
              </TextReveal>
              <OpacityReveal delay={0.2}>
                <Button
                  externalLink
                  href={project.liveLink}
                  className="justify-between group"
                >
                  Visit Live
                  <ArrowRightIcon className="size-[1em] group-hover:-rotate-z-45 transition-transform duration-300" />
                </Button>
              </OpacityReveal>
              <OpacityReveal delay={0.3}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                  <h2 className="col-span-full font-medium text-lg">
                    Project Details
                  </h2>
                  <h3>Role</h3>
                  <p className="text-foreground/50">{project.details.role}</p>
                  <h3>Associated With</h3>
                  <p className="text-foreground/50">{project.details.client}</p>
                  <h3>Technologies Used</h3>
                  <p className="text-foreground/50">
                    {project.details.tools.join(", ")}
                  </p>
                  <h3>Duration</h3>
                  <p className="text-foreground/50">{project.details.year}</p>
                </div>
              </OpacityReveal>
            </section>
            <section className="flex-1 flex flex-col">
              {project.images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`${project.slug}-image-${index}`}
                  width={1280}
                  height={720}
                  priority
                  placeholder="blur"
                />
              ))}
            </section>
          </div>
          <div className="mt-[72px]">
            <p className="text-2xl">Next Project</p>
            <ProjectCardLarge
              project={projects[next_index]}
              className="mt-4 lg:w-1/2"
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

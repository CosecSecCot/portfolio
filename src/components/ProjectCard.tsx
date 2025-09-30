import Button from "@/components/Button";
import { Project } from "@/data/work";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div className={cn("border border-foreground/20", className)}>
      <div className="relative flex-1 w-full h-auto aspect-square">
        <Image
          src={project.images[0]}
          alt={project.title}
          width={800}
          height={800}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          placeholder="blur"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col gap-[1em] justify-between">
        <div>
          <div className="flex justify-between text-foreground/50">
            <p>{project.details.role}</p>
            <p>{project.details.year}</p>
          </div>
          <h2 className="text-lg lg:text-xl">{project.title}</h2>
          <div className="mt-[0.5em] flex sm:flex-col max-md:gap-1 flex-wrap">
            <p className="text-[0.875em] leading-tight text-foreground/50">
              {project.details.tools.join(", ")}
            </p>
          </div>
        </div>
        <Button
          type="secondary"
          href={`/projects/${project.slug}`}
          scroll={true}
          className="w-full max-w-full justify-between group"
        >
          View project
          <ArrowRightIcon className="size-[1em] group-hover:-rotate-z-45 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
}

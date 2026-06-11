import Image from "next/image";
import type { Project } from "@/lib/constants/projects";

type ProjectCardProps = {
  project: Project;
  onOpenDetail: (project: Project) => void;
};

const typeLabels: Record<Project["type"], string> = {
  mobile: "Mobile App",
  website: "Website",
};

export function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <div className="shadow-card-elevated relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/80 bg-bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[0_24px_48px_-12px_rgba(63,95,144,0.35)]">
        {/* Accent glow */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-60"
          aria-hidden="true"
        />

        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-main sm:aspect-[16/10]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain object-center p-2 transition-transform duration-500 group-hover:scale-[1.02] sm:p-3"
            unoptimized
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-bg-card/80 to-transparent" />
          <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-primary/40 bg-bg-main/80 px-3 py-1 text-xs font-semibold tracking-wide text-primary backdrop-blur-sm">
            {typeLabels[project.type]}
          </span>
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col p-5 sm:p-6">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
            aria-hidden="true"
          />

          <h3 className="text-xl font-bold tracking-tight text-title sm:text-[1.35rem]">
            {project.name}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-body/90 sm:text-base sm:leading-7">
            {project.shortDescription}
          </p>

          <button
            type="button"
            onClick={() => onOpenDetail(project)}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-primary/50 bg-primary/10 px-5 py-3 text-sm font-semibold tracking-wide text-title transition-all duration-300 ease-out hover:border-primary hover:bg-primary hover:shadow-[0_8px_32px_rgba(63,95,144,0.35)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card sm:mt-6 sm:w-auto sm:px-6"
          >
            Lihat Detail
            <svg
              className="h-4 w-4 text-primary transition-colors duration-300 group-hover:text-title"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

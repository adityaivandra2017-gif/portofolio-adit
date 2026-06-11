"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/proyek/ProjectCard";
import { ProjectDetailModal } from "@/components/sections/proyek/ProjectDetailModal";
import { PROJECTS, PROJECTS_SECTION, type Project } from "@/lib/constants/projects";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="proyek"
      className="border-t border-line/60 bg-bg-main"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading title={PROJECTS_SECTION.title} centered />
          <p className="mt-5 text-sm leading-relaxed text-body/85 sm:mt-6 sm:text-base sm:leading-7">
            {PROJECTS_SECTION.subtitle}
          </p>
        </div>

        {/* Project grid */}
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-7 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetail={setSelectedProject}
            />
          ))}
        </div>
      </Container>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

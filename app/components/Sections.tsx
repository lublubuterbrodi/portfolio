"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/app/data/projects";

import DietTrackerMockup from "./mockups/DietTrackerMockup";
import TelegramMockup from "./mockups/TelegramMockup";
import MangaMockup from "./mockups/MangaMockup";

export default function Sections() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-5 py-6 sm:px-6 sm:py-8"
    >
      <div className="max-w-4xl">
        <span className="text-sm font-medium text-[#4F8F5A] sm:text-base">
          Featured Projects
        </span>

        <h2 className="mt-4 text-3xl font-bold leading-tight text-[#252525] sm:text-4xl lg:text-5xl">
          Things I&apos;ve Built
        </h2>

        <p className="mt-5 text-base leading-7 text-neutral-600 sm:mt-6 sm:text-lg sm:leading-8">
          A collection of projects focused on creating clean, responsive, and
          user-friendly digital experiences.
        </p>
      </div>

      <div className="grid mt-12 items-start gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          >
            {project.mockup === "diet" && <DietTrackerMockup />}
            {project.mockup === "telegram" && <TelegramMockup />}
            {project.mockup === "manga" && <MangaMockup />}
          </ProjectCard>
        ))}
      </div>
    </section>
  );
}

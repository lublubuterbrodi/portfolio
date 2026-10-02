"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "@/app/data/projects";

export default function Sections() {
  const fullstackProjects = projects.filter(
    (project) => project.category === "fullstack",
  );

  const frontendProjects = projects.filter(
    (project) => project.category === "frontend",
  );

  const featuredProjects = [
    "Course Progress Tracker",
    "Diet Tracker",
    "React Phone Catalog",
  ];

  const isFeatured = (title: string) => featuredProjects.includes(title);

  return (
    <section
      id="projects"
      className="
        mx-auto
        w-full
        max-w-7xl
        px-5
        py-16

        sm:px-8
        sm:py-20

        lg:px-10
        lg:py-24
      "
    >
      {/* Main heading */}
      <div className="max-w-3xl">
        <h2
          className="
            text-3xl
            font-medium
            tracking-tight
            text-[#252525]

            sm:text-4xl
            lg:text-5xl
          "
        >
          Projects
        </h2>
      </div>

      {/* Full-Stack & Backend */}
      <div className="mt-12 sm:mt-14">
        {/* Category heading */}
        <div className="mb-6 flex items-center gap-4">
          <h3
            className="
              shrink-0
              text-xs
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#4F8F5A]
            "
          >
            Full-Stack & Backend
          </h3>

          <div className="h-px w-full bg-[#E4ECE5]" />
        </div>

        {/* Projects grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:grid-cols-4
          "
        >
          {fullstackProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              featured={isFeatured(project.title)}
            />
          ))}
        </div>
      </div>

      {/* Frontend */}
      <div className="mt-14 sm:mt-16 lg:mt-20">
        {/* Category heading */}
        <div className="mb-6 flex items-center gap-4">
          <h3
            className="
              shrink-0
              text-xs
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#4F8F5A]
            "
          >
            Frontend
          </h3>

          <div className="h-px w-full bg-[#E4ECE5]" />
        </div>

        {/* Projects grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-4

            sm:grid-cols-2
            sm:gap-5

            lg:grid-cols-4
          "
        >
          {frontendProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              featured={isFeatured(project.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

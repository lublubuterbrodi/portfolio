"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  children?: React.ReactNode;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  children,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col overflow-hidden rounded-[28px] border border-[#E6ECE6] bg-white shadow-[0_16px_45px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_24px_70px_rgba(79,143,90,0.12)] sm:rounded-4xl lg:rounded-[36px]"
    >
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center overflow-hidden border-b border-[#EEF2EF] bg-[#F3FBF5] px-6 py-8 transition-colors sm:px-8 sm:py-9"
        >
          <div className="transition duration-500 group-hover:scale-[1.02]">
            {children}
          </div>
        </a>
      ) : (
        <div className="flex justify-center overflow-hidden border-b border-[#EEF2EF] bg-[#F3FBF5] px-6 py-8 sm:px-8 sm:py-9">
          {children}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-start justify-between gap-4"
            >
              <h3 className="text-xl font-semibold text-[#232323] transition group-hover:text-[#4F8F5A] sm:text-2xl">
                {title}
              </h3>

              <ArrowUpRight
                size={20}
                className="mt-1 shrink-0 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          ) : (
            <h3 className="text-xl font-semibold text-[#232323] sm:text-2xl">
              {title}
            </h3>
          )}
        </div>

        <p className="mt-4 line-clamp-4 text-[15px] leading-8 text-neutral-600">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#DCE8DE] bg-[#F8FBF8] px-3 py-1 text-xs font-medium text-[#4F8F5A]"
            >
              {tech}
            </span>
          ))}
        </div>

        {(liveUrl || githubUrl) && (
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F8F5A] transition hover:opacity-70"
              >
                Live Demo →
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 transition hover:text-[#4F8F5A]"
              >
                GitHub →
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

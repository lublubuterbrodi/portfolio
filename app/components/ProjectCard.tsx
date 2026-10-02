"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
      className="
        group
        flex
        h-full
        min-w-0
        flex-col
        rounded-2xl
        border
        border-[#DDE8DF]
        bg-white
        p-5
        transition
        duration-300

        hover:border-[#BFDCC6]
        hover:shadow-[0_12px_35px_rgba(79,143,90,0.10)]

        sm:p-6
        lg:p-5
        xl:p-6
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3
          className="
            min-w-0
            text-lg
            font-medium
            leading-snug
            tracking-tight
            text-[#252525]
            transition-colors
            duration-300
            group-hover:text-[#4F8F5A]

            xl:text-xl
          "
        >
          {title}
        </h3>

        {featured && (
          <span
            className="
              shrink-0
              rounded-full
              bg-[#E8F5EB]
              px-2.5
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-[#4F8F5A]
            "
          >
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p
        className="
          mt-3
          text-sm
          leading-6
          text-neutral-600
        "
      >
        {description}
      </p>

      {/* Technologies */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              bg-[#F3F6F3]
              px-2.5
              py-1
              text-[11px]
              font-medium
              leading-none
              text-[#526056]
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {(liveUrl || githubUrl) && (
        <div
          className="
            mt-auto
            flex
            flex-wrap
            items-center
            gap-x-4
            gap-y-2
            pt-6
          "
        >
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-1
                text-xs
                font-medium
                text-[#4F8F5A]
                transition
                hover:opacity-70
              "
            >
              Live Demo
              <ArrowUpRight size={14} />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-1.5
                text-xs
                font-medium
                text-neutral-600
                transition
                hover:text-[#4F8F5A]
              "
            >
              <FaGithub size={14} />
              GitHub
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

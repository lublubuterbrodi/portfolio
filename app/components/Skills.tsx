"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "REST APIs",
      "NextAuth/Auth.js",
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "VPS Deployment",
      "Cypress",
    ],
  },
  {
    title: "Development",
    skills: [
      "Responsive Design",
      "CRUD",
      "Authentication",
      "API Integration",
      "State Management",
      "Debugging",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#EEF9F1] blur-[100px]" />
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#F4FAF5] blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-medium tracking-tight text-[#252525] sm:text-4xl lg:text-5xl">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="
                rounded-2xl
                border
                border-[#DDE8DF]
                bg-white
                p-6
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#BFDCC6]
                hover:shadow-[0_12px_35px_rgba(79,143,90,0.10)]

                sm:p-7
                lg:min-h-75
              "
            >
              {/* Card title */}
              <h3 className="text-lg font-medium text-[#252525]">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-[#DCEBDF]
                      bg-[#F3F9F4]
                      px-3
                      py-1.5
                      text-sm
                      font-medium
                      text-[#4F7056]
                      transition
                      duration-200
                      hover:border-[#BFDCC6]
                      hover:bg-[#E8F5EB]
                      hover:text-[#3F784A]
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

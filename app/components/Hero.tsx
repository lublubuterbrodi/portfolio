"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        flex
        min-h-svh
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-white
      "
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            -right-24 -top-20
            h-56 w-56
            rounded-full
            bg-[#DDF4E3]
            blur-[80px]

            sm:-right-28 sm:-top-28
            sm:h-80 sm:w-80
            sm:blur-[100px]

            lg:-right-32 lg:-top-32
            lg:h-96 lg:w-96
            lg:blur-[120px]
          "
        />

        <div
          className="
            absolute
            -bottom-20 -left-20
            h-52 w-52
            rounded-full
            bg-[#EEF9F1]
            blur-[70px]

            sm:-bottom-24 sm:-left-24
            sm:h-64 sm:w-64
            sm:blur-[90px]

            lg:-bottom-32 lg:-left-32
            lg:h-80 lg:w-80
            lg:blur-[100px]
          "
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          ease: "easeOut",
        }}
        className="
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          px-5
          pt-28
          pb-16
          text-center

          sm:px-8
            sm:pt-32
            sm:pb-20

            md:px-10
            md:pt-36

            lg:px-12
            lg:pt-40
            lg:pb-24
        "
      >
        <h1
          className="
            max-w-full
            wrap-break-word
            text-[clamp(2.35rem,11vw,3.25rem)]
            font-medium
            leading-[1.08]
            tracking-[-0.035em]
            text-[#252525]

            sm:text-6xl
            sm:leading-[1.08]

            md:text-[4rem]

            lg:text-7xl
            lg:leading-[1.05]
          "
        >
          Hi, I&apos;m{" "}
          <span className="text-[#4F8F5A]">Haiana Reznichenko</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.12,
            duration: 0.65,
          }}
          className="
            mt-5
            max-w-[90%]
            text-xl
            font-normal
            leading-snug
            text-[#59615B]

            sm:mt-6
            sm:text-2xl

            md:text-3xl

            lg:mt-7
            lg:text-4xl
          "
        >
          Full-Stack &amp; Frontend Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.24,
            duration: 0.65,
          }}
          className="
            mt-5
            max-w-136
            text-[15px]
            leading-6
            text-neutral-600

            sm:mt-7
            sm:max-w-2xl
            sm:text-base
            sm:leading-7

            md:text-lg
            md:leading-8

            lg:mt-8
            lg:max-w-3xl
          "
        >
          I build modern web applications using React, Next.js and TypeScript. I
          enjoy learning new technologies, solving real-world problems and
          delivering software from idea to deployment
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.36,
            duration: 0.65,
          }}
          className="
            mt-7
            flex
            w-full
            max-w-sm
            flex-col
            gap-3

            sm:mt-9
            sm:w-auto
            sm:max-w-none
            sm:flex-row

            lg:mt-10
          "
        >
          <a
            href="#projects"
            className="
              flex
              w-full
              items-center
              justify-center
              rounded-lg
              bg-[#4F8F5A]
              px-7
              py-3.5
              text-sm
              font-medium
              text-white
              transition
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#42784C]
              hover:shadow-lg

              sm:w-auto
              sm:min-w-40
              sm:text-base
            "
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="
              flex
              w-full
              items-center
              justify-center
              rounded-lg
              border
              border-[#D9E4DB]
              bg-white
              px-7
              py-3.5
              text-sm
              font-medium
              text-[#252525]
              transition
              duration-300

              hover:-translate-y-0.5
              hover:border-[#4F8F5A]
              hover:text-[#4F8F5A]

              sm:w-auto
              sm:min-w-40
              sm:text-base
            "
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.52,
            duration: 0.65,
          }}
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-7
            text-[#68706A]

            sm:mt-10

            lg:mt-12
          "
        >
          <a
            href="https://github.com/lublubuterbrodi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              transition
              duration-300
              hover:-translate-y-1
              hover:text-[#4F8F5A]
            "
          >
            <FaGithub className="h-5.5 w-5.5 sm:h-6 sm:w-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/haiana-reznichenko-0898633b4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              transition
              duration-300
              hover:-translate-y-1
              hover:text-[#4F8F5A]
            "
          >
            <FaLinkedinIn className="h-5.5 w-5.5 sm:h-6 sm:w-6" />
          </a>

          <a
            href="mailto:haianareznichenko@gmail.com"
            aria-label="Email"
            className="
              transition
              duration-300
              hover:-translate-y-1
              hover:text-[#4F8F5A]
            "
          >
            <Mail className="h-6 w-6 sm:h-6.5 sm:w-6.5" strokeWidth={1.8} />
          </a>
        </motion.div>

        <motion.a
          href="#skills"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 6, 0],
          }}
          transition={{
            opacity: {
              delay: 0.7,
              duration: 0.5,
            },
            y: {
              delay: 1.2,
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          aria-label="Scroll to projects"
          className="
            mt-8
            text-[#68706A]
            transition
            hover:text-[#4F8F5A]

            sm:mt-10

            lg:mt-12
          "
        >
          <ArrowDown className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.7} />
        </motion.a>
      </motion.div>
    </section>
  );
}

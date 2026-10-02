"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        px-5
        pt-10
        pb-16
        sm:px-8
        sm:pt-12
        sm:pb-20
        lg:px-10
        lg:pt-14
        lg:pb-20
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            -bottom-32
            -right-32
            h-80
            w-80
            rounded-full
            bg-[#E8F6EB]
            blur-[100px]
            lg:h-112
            lg:w-md
            lg:blur-[120px]
          "
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex max-w-3xl flex-col items-center"
        >
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
            Let&apos;s Connect
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-neutral-600
              sm:text-lg
              sm:leading-8
            "
          >
            I&apos;m always interested in new opportunities, interesting
            projects and collaborations Feel free to reach out, I&apos;d love to
            hear from you
          </p>
        </motion.div>

        {/* Contact information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            mt-8
            flex
            w-full
            flex-col
            items-center
            sm:mt-9
          "
        >
          {/* Email */}
          <a
            href="mailto:haianareznichenko@gmail.com"
            className="
              group
              flex
              w-fit
              max-w-full
              items-center
              gap-3
              rounded-2xl
              border
              border-[#DDE8DF]
              bg-white
              px-4
              py-3
              text-left
              transition
              duration-300

              hover:border-[#BFDCC6]
              hover:shadow-[0_8px_25px_rgba(79,143,90,0.08)]

              sm:gap-4
              sm:px-5
              sm:py-4
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#F0F7F2]
                text-[#4F8F5A]

                sm:h-11
                sm:w-11
              "
            >
              <Mail size={20} strokeWidth={1.8} />
            </div>

            {/* Email text */}
            <div className="min-w-0">
              <p className="text-sm font-medium text-[#252525]">Email</p>

              <p className="mt-0.5 truncate text-sm text-neutral-600">
                haianareznichenko@gmail.com
              </p>
            </div>

            {/* Arrow */}
            <ArrowUpRight
              size={17}
              className="
                ml-1
                shrink-0
                text-neutral-400
                transition
                duration-300

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-[#4F8F5A]
              "
            />
          </a>

          {/* Social links */}
          <div className="mt-6">
            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.14em]
                text-neutral-400
              "
            >
              Find me online
            </p>

            <div className="mt-3 flex justify-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/lublubuterbrodi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#DCE8DE]
                  bg-white
                  text-neutral-600
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#4F8F5A]
                  hover:text-[#4F8F5A]
                "
              >
                <FaGithub size={19} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/haiana-r-0898633b4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#DCE8DE]
                  bg-white
                  text-neutral-600
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#4F8F5A]
                  hover:text-[#4F8F5A]
                "
              >
                <FaLinkedinIn size={19} />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/bublecco"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#DCE8DE]
                  bg-white
                  text-neutral-600
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#4F8F5A]
                  hover:text-[#4F8F5A]
                "
              >
                <FaTelegramPlane size={19} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

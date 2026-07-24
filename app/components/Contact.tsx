"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E8F6EB] blur-[90px] sm:h-96 sm:w-96 lg:h-125 lg:w-125 lg:blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[28px] border border-[#E5ECE6] bg-white/80 p-8 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.05)] sm:rounded-[36px] sm:p-10 lg:rounded-[40px] lg:p-12"
        >
          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#252525] sm:mt-5 sm:text-4xl lg:text-5xl">
            Let&apos;s build something together
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-neutral-600 sm:mt-6 sm:text-lg sm:leading-8">
            Whether you have a project, an idea, or just want to say hello,
            I&apos;d love to hear from you.
          </p>

          <a
            href="mailto:haianareznichenko@gmail.com"
            className="mx-auto mt-8 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-[#4F8F5A] px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02] hover:bg-[#42784C] sm:mt-10 sm:w-auto sm:px-8 sm:py-4 sm:text-base lg:mt-12"
          >
            <Mail size={20} />
            Send an Email
          </a>

          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-10 sm:gap-5">
            <a
              href="https://github.com/lublubuterbrodi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#DCE8DE] bg-white p-3 transition hover:-translate-y-1 hover:border-[#4F8F5A] hover:text-[#4F8F5A] sm:p-4"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/haiana-r-0898633b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#DCE8DE] bg-white p-3 transition hover:-translate-y-1 hover:border-[#4F8F5A] hover:text-[#4F8F5A] sm:p-4"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://t.me/bublecco"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#DCE8DE] bg-white p-3 transition hover:-translate-y-1 hover:border-[#4F8F5A] hover:text-[#4F8F5A] sm:p-4"
            >
              <FaTelegram size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

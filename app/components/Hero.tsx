"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#DDF4E3] blur-[90px] sm:h-96 sm:w-96 lg:-right-44 lg:-top-32 lg:h-130 lg:w-130 lg:blur-[120px]" />

        <div className="absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-[#EEF9F1] blur-[80px] sm:h-72 sm:w-72 lg:-bottom-44 lg:-left-28 lg:h-90 lg:w-90 lg:blur-[100px]" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right,#e9efe9 1px,transparent 1px),linear-gradient(to bottom,#e9efe9 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-5 pt-28 pb-16 sm:px-6 lg:pt-0 lg:pb-0">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="hidden lg:inline-flex rounded-full border border-[#CFE7D5] bg-white px-4 py-2 text-sm font-medium text-[#4F8F5A] shadow-sm">
              Frontend/Full-Stack Developer
            </span>

            <h1 className="mt-0 text-4xl font-bold leading-tight tracking-tight text-[#252525] sm:text-5xl lg:mt-8 lg:text-7xl lg:leading-[1.05]">
              Designing
              <br />
              beautiful web
              <br />
              experiences.
            </h1>

            <p className="mx-auto mt-6 max-w-md text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8 lg:mx-0 lg:mt-8">
              Hi, I&apos;m Haiana. I build modern React & Next.js applications
              with clean interfaces, thoughtful UX and attention to detail.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start lg:mt-10">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 rounded-full bg-[#4F8F5A] px-6 py-3 text-white transition hover:bg-[#42784c] hover:scale-[1.02]"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="/cv.pdf"
                download
                className="flex items-center justify-center gap-2 rounded-full border border-[#D9E4DB] bg-white px-6 py-3 transition hover:border-[#4F8F5A]"
              >
                Download CV
                <Download size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative mx-auto h-80 w-full max-w-[320px] sm:h-107.5 sm:max-w-107.5 lg:h-160 lg:max-w-none"
          >
            <div className="absolute right-6 top-6 h-55 w-42.5 rounded-[36px] border border-white/70 bg-white/55 backdrop-blur-2xl shadow-[0_20px_60px_rgba(80,130,90,.12)] sm:right-8 sm:top-8 sm:h-80 sm:w-60 lg:right-12 lg:top-12 lg:h-110 lg:w-85 lg:rounded-[48px]" />
            <div className="absolute left-2 top-36 h-28 w-36 rounded-3xl border border-white/70 bg-white/60 backdrop-blur-xl shadow-xl sm:left-6 sm:top-44 sm:h-36 sm:w-44 lg:left-8 lg:top-56 lg:h-44 lg:w-52" />
            <div className="absolute bottom-10 right-0 h-24 w-32 rounded-3xl border border-white/70 bg-white/60 backdrop-blur-xl shadow-xl sm:bottom-14 sm:h-28 sm:w-36 lg:bottom-20 lg:h-36 lg:w-44" />
            <div className="absolute left-10 top-2 h-58.75 w-46.25 rounded-[40px] border border-[#BFDCC6] sm:left-14 sm:top-4 sm:h-83.75 sm:w-66.25 lg:left-24 lg:top-8 lg:h-117.5 lg:w-92.5 lg:rounded-[56px]" />
            <div className="absolute right-10 top-12 h-24 w-24 rounded-full bg-[#CBEBD2] blur-2xl sm:h-32 sm:w-32 lg:right-20 lg:top-24 lg:h-40 lg:w-40 lg:blur-3xl" />
            <div className="absolute bottom-8 left-10 h-28 w-28 rounded-full bg-[#E5F7E9] blur-2xl sm:h-36 sm:w-36 lg:bottom-16 lg:left-24 lg:h-48 lg:w-48 lg:blur-3xl" />
            <div className="absolute left-0 top-10 h-3 w-3 rounded-full bg-[#6CA678] lg:top-20 lg:h-4 lg:w-4" />
            <div className="absolute right-4 top-0 h-2 w-2 rounded-full bg-[#88C394]" />
            <div className="absolute bottom-0 left-24 h-2 w-2 rounded-full bg-[#6CA678] lg:left-44 lg:h-3 lg:w-3" />
            <div className="absolute left-8 top-20 h-px w-16 bg-[#C8DDCC] sm:w-24 lg:left-14 lg:top-40 lg:w-32" />
            <div className="absolute bottom-20 right-4 h-px w-16 bg-[#C8DDCC] sm:w-20 lg:right-10 lg:bottom-40 lg:w-24" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

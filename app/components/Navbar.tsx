"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-200 bg-white/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-6">
        <Link
          href="/"
          className="max-w-40 truncate text-xl font-bold tracking-tight text-[#356B45] xs:max-w-[220px] sm:max-w-none sm:text-2xl"
        >
          Reznichenko Haiana
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-neutral-700 transition hover:text-[#356B45] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#5C9E68] after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/Haiana_Reznichenko_CV.pdf"
          download
          className="rounded-full bg-[#4F8F5A] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#3F7749] sm:px-5 sm:py-2.5"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}

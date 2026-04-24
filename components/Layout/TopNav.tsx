"use client";

import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/components/data/navLinks";
import ThemeToggle from "@/components/UI/ThemeToggle";
import { playfair, space } from "@/app/font";

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full pl-3 pr-3 sm:px-6 sm:py-4">
      <div
        className={`mx-auto max-w-7xl rounded-full border px-4 py-3 backdrop-blur-2xl transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-slate-200/80 bg-white/90 shadow-xl shadow-slate-900/10 dark:border-slate-700/70 dark:bg-slate-950/85"
            : "border-white/40 bg-white/75 shadow-lg shadow-slate-900/10 dark:border-white/10 dark:bg-slate-950/65"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <Link
            href="#intro"
            onClick={handleNavClick}
            className={`${playfair.className} shrink-0 text-2xl font-black tracking-tight text-slate-950 transition hover:text-cyan-700 sm:text-4xl dark:text-white dark:hover:text-cyan-300`}
          >
            Uzoma N.<span className="text-cyan-700 dark:text-cyan-300">.</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`${space.className} relative text-base font-bold text-slate-800 transition after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-cyan-700 after:transition-all after:duration-300 hover:text-cyan-700 hover:after:w-full dark:text-slate-100 dark:after:bg-cyan-300 dark:hover:text-cyan-300`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <Link
              href="/Uzoma-Nwaiwu-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Uzoma-Nwaiwu-Resume.pdf"
              className={`${space.className} flex items-center gap-2 rounded-full bg-cyan-700 px-5 py-2.5 text-base font-bold text-white shadow-lg shadow-cyan-900/20 transition hover:-translate-y-0.5 hover:bg-cyan-800 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300`}
            >
              <Download size={18} />
              Resume
            </Link>
          </div>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-slate-950 text-white shadow-lg shadow-slate-950/20 backdrop-blur lg:hidden dark:border-slate-700 dark:bg-white dark:text-slate-950"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-1 mt-3 rounded-[2rem] border border-slate-200/80 bg-white/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden dark:border-slate-800 dark:bg-slate-950/95">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={handleNavClick}
                className={`${space.className} rounded-2xl px-5 py-4 text-base font-bold text-slate-800 transition hover:bg-cyan-50 hover:text-cyan-700 dark:text-slate-100 dark:hover:bg-slate-900 dark:hover:text-cyan-300`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex items-center justify-between gap-4 border-t border-slate-200 pt-4 dark:border-slate-800">
            <ThemeToggle />

            <Link
              href="/Uzoma-Nwaiwu-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Uzoma-Nwaiwu-Resume.pdf"
              className={`${space.className} rounded-full bg-cyan-700 px-5 py-2.5 text-base font-bold text-white dark:bg-cyan-400 dark:text-slate-950`}
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
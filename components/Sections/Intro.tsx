"use client";

import { playfair, poppins } from "@/app/font";
import { CircleUser, FileUser, FolderOpenDot } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 bg-[url('/photo.webp')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      <motion.div
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >


        <h1
          className={`${playfair.className} text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl`}
        >
          UZOMA NWAIWU
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 sm:text-xl lg:text-2xl">
          Software Engineer | Full Stack Developer | Frontend Engineer
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="#projects"
            className={`${poppins.className} flex items-center gap-3 rounded-full bg-cyan-800 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-900/30 transition hover:-translate-y-1 hover:bg-emerald-600`}
          >
            <FolderOpenDot size={18} />
            View Projects
          </Link>

          <Link
            href="#contact"
            className={`${poppins.className} flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-500 hover:text-slate-950`}
          >
            <CircleUser size={18} />
            Contact Me
          </Link>

          <Link
            href="/Uzoma-Nwaiwu-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Uzoma-Nwaiwu-Resume.pdf"
            className={`${poppins.className} flex items-center gap-3 rounded-full border border-cyan-300/40 px-7 py-3 text-sm font-semibold text-cyan-100 transition hover:-translate-y-1 hover:border-violet-400 hover:bg-red-600 hover:text-white`}
          >
            <FileUser size={18} />
            Download CV
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
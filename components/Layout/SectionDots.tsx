"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { sectionDots } from "@/components/data/navLinks";
import { motion } from "framer-motion";

export default function SectionDots() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;

      let closestSection = "intro";
      let closestDistance = Number.POSITIVE_INFINITY;

      sectionDots.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section.id;
        }
      });

      setActiveSection(closestSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 md:flex">
      {sectionDots.map((section) => {
        const active = activeSection === section.id;

        return (
          <Link
            key={section.id}
            href={`#${section.id}`}
            aria-label={`Go to ${section.name}`}
            className="group flex items-center gap-3"
          >
            <motion.span
              animate={{
                opacity: active ? 1 : 0,
                x: active ? 0 : 12,
              }}
              transition={{ duration: 0.25 }}
              className="pointer-events-none rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90 dark:text-white"
            >
              {section.name}
            </motion.span>

            <motion.span
              animate={{
                height: active ? 32 : 12,
                width: 12,
                scale: active ? 1.1 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 22,
              }}
              className={`rounded-full border transition-colors duration-300 ${
                active
                  ? "border-cyan-800 bg-cyan-800 shadow-[0_0_24px_rgba(21,94,117,0.75)] dark:border-cyan-400 dark:bg-cyan-400"
                  : "border-slate-400 bg-white hover:border-cyan-800 hover:bg-cyan-800 dark:border-slate-600 dark:bg-slate-900 dark:hover:border-cyan-400 dark:hover:bg-cyan-400"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
}
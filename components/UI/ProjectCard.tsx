"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { projectsData } from "@/components/data/project";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectCard() {
  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);

  const toggleReadMore = (title: string) => {
    setExpandedProjects((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="flex flex-col gap-10">
      {projectsData.map((project, index) => {
        const isExpanded = expandedProjects.includes(project.title);
        const reverse = index % 2 !== 0;

        return (
          <motion.article
            key={project.title}
            className={`group flex flex-col overflow-hidden rounded-[2.2rem] border border-slate-200 bg-slate-50 p-5 shadow-lg transition hover:border-cyan-800 hover:shadow-2xl hover:shadow-cyan-900/10 lg:min-h-[430px] lg:p-8 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-cyan-400 ${
              reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
              delay: index * 0.08,
            }}
          >
            <div className="relative h-[260px] w-full overflow-hidden rounded-[1.7rem] lg:mt-0 lg:h-auto lg:flex-1">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col justify-center p-3 pt-6 lg:p-6">
              <h3 className="text-3xl font-semibold text-slate-950 sm:text-4xl dark:text-white">
                {project.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-cyan-800 px-4 py-2 text-sm font-bold text-white dark:bg-cyan-500 dark:text-slate-950"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p
                className={`mt-6 text-base font-medium leading-8 text-slate-700 sm:text-lg sm:leading-9 dark:text-slate-300 ${
                  isExpanded ? "" : "line-clamp-2"
                }`}
              >
                {project.description}
              </p>

              <button
                onClick={() => toggleReadMore(project.title)}
                className="mt-3 w-fit text-base font-extrabold text-cyan-800 transition hover:text-cyan-950 dark:text-cyan-400 dark:hover:text-cyan-300"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>

              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-base font-bold text-white transition hover:-translate-y-1 hover:bg-cyan-800 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400"
              >
                View Live Project
                <ExternalLink size={18} />
              </Link>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import Container from "@/components/UI/Container";
import SectionHeader from "@/components/UI/SectionHeader";
import SectionWrapper from "@/components/UI/SectionWrapper";
import ProjectCard from "@/components/UI/ProjectCard";

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-slate-950">
      <Container>
        <SectionHeader label="Projects" />

        <p className="mb-12 max-w-4xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9 dark:text-slate-300">
          A collection of applications I have built while improving my frontend,
          backend, API integration, and product implementation skills.
        </p>

        <ProjectCard />

        <div className="mt-14 flex justify-center lg:justify-end">
          <Link
            href="https://github.com/UzomaN-Hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-cyan-800 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-cyan-900/20 transition hover:-translate-y-1 hover:bg-slate-950 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-white"
          >
            <Github size={20} />
            See More Projects
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}
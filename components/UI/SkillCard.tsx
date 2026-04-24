"use client";

import Container from "@/components/UI/Container";
import SectionHeader from "@/components/UI/SectionHeader";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { skillsData } from "@/components/data/skills";
import { motion } from "framer-motion";

export default function SkillCard() {
  return (
    <SectionWrapper id="skills" className="bg-slate-50 dark:bg-slate-900/40">
      <Container>
        <SectionHeader label="Skills" />

        <p className="mb-12 max-w-4xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9 dark:text-slate-300">
          My skill set covers frontend engineering, backend development, database
          systems, deployment, and the professional habits needed to deliver
          reliable software.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillsData.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                className="group min-h-[360px] cursor-pointer rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:border-cyan-800 hover:shadow-2xl hover:shadow-cyan-900/10 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-cyan-400"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
              >
                <div className="mb-8 flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-800 text-white shadow-lg shadow-cyan-900/25 dark:bg-cyan-500">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-300 bg-slate-50 px-5 py-3 text-base font-bold text-slate-800 transition group-hover:border-cyan-800 group-hover:bg-cyan-50 group-hover:text-cyan-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:group-hover:border-cyan-400 dark:group-hover:bg-cyan-500/10 dark:group-hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
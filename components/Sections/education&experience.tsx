"use client";

import Container from "@/components/UI/Container";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { educationData, experienceData } from "@/components/data/experience";
import { playfair, space } from "@/app/font";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationExperience() {
  return (
    <SectionWrapper
      id="education-experience"
      className="bg-slate-50 dark:bg-slate-900/40"
    >
      <Container>
        <div className="group relative mb-12 cursor-pointer">
          <p className="mb-3 text-xl font-extrabold uppercase tracking-[0.35em] text-cyan-800 dark:text-cyan-400">
            Education & Experience
          </p>

          <span className="absolute -bottom-3 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full bg-cyan-800 transition-transform duration-700 ease-out group-hover:scale-x-100 dark:bg-cyan-400" />
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <TimelineColumn
              title="Education"
              icon={<GraduationCap size={26} />}
              items={educationData.map((item) => ({
                heading: item.institution,
                subheading: item.qualification,
                period: item.period,
                description: item.description,
              }))}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
          >
            <TimelineColumn
              title="Experience"
              icon={<BriefcaseBusiness size={26} />}
              items={experienceData.map((item) => ({
                heading: item.role,
                subheading: item.company,
                period: item.period,
                description: item.description,
              }))}
            />
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

interface TimelineColumnProps {
  title: string;
  icon: React.ReactNode;
  items: {
    heading: string;
    subheading: string;
    period: string;
    description: string;
  }[];
}

function TimelineColumn({ title, icon, items }: TimelineColumnProps) {
  return (
    <div className="h-full rounded-[2rem] border border-slate-200 bg-white p-5 shadow-lg sm:p-7 dark:border-slate-800 dark:bg-slate-950">
      <div className="mb-9 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-800 text-white shadow-lg shadow-cyan-900/20 dark:bg-cyan-500">
          {icon}
        </div>

        <h3
          className={`${playfair.className} text-2xl font-black text-slate-950 sm:text-3xl dark:text-white`}
        >
          {title}
        </h3>
      </div>

      {/* pl-6 on mobile (tighter), pl-7 on sm+ so the dot never clips */}
      <div className="space-y-10 border-l-2 border-dashed border-cyan-800/50 pl-6 sm:pl-7 dark:border-cyan-400/50">
        {items.map((item, index) => (
          <motion.div
            key={`${item.heading}-${item.period}`}
            className="relative"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.08,
            }}
          >
            {/* dot — offset matches the border-l so it sits on the line */}
            <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-cyan-800 shadow-[0_0_0_7px_rgba(21,94,117,0.14)] sm:-left-[36px] dark:bg-cyan-400" />

            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-800 sm:text-base dark:text-cyan-400">
              {item.period}
            </p>

            <h4 className="mt-4 text-xl font-black text-slate-950 sm:text-2xl dark:text-white">
              {item.heading}
            </h4>

            <p className="mt-2 text-base font-bold text-slate-700 dark:text-slate-300">
              {item.subheading}
            </p>

            <p
              className={`${space.className} mt-5 text-base font-medium leading-8 text-slate-700 sm:text-lg sm:leading-9 dark:text-slate-300`}
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
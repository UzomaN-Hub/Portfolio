"use client";

import Image from "next/image";
import Container from "@/components/UI/Container";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { playfair, space } from "@/app/font";
import { motion } from "framer-motion";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-slate-950">
      <Container>
        <div className="group relative mb-10 cursor-pointer">
          <p className="mb-3 text-xl font-extrabold uppercase tracking-[0.35em] text-cyan-800 dark:text-cyan-400">
            About Me
          </p>

          <span className="absolute -bottom-3 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full bg-cyan-800 transition-transform duration-700 ease-out group-hover:scale-x-100 dark:bg-cyan-400" />
        </div>

        <div className="relative grid items-center lg:grid-cols-[1.15fr_0.95fr]">
          <motion.div
            className="relative h-[340px] w-full overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl sm:h-[440px] lg:h-[560px] dark:border-slate-800 dark:bg-slate-900"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <Image
              src="/photo.webp"
              alt="Uzoma Nwaiwu"
              fill
              className="object-cover object-[center_25%]"
              priority
            />
          </motion.div>

          <motion.div
            className="relative z-10 mt-6 rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-2xl backdrop-blur-xl sm:p-7 lg:-ml-20 lg:mt-0 lg:p-10 dark:border-slate-800 dark:bg-slate-950/90"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
          >
            <h2
              className={`${playfair.className} mb-5 text-2xl font-black leading-tight text-slate-950 sm:text-3xl lg:text-4xl dark:text-white`}
            >
              I build with clarity, precision, and purpose.
            </h2>

            <div
              className={`${space.className} space-y-4 text-base leading-8 text-slate-800 sm:text-lg sm:leading-8 dark:text-slate-200`}
            >
              <p>
                I am Uzoma Nwaiwu, a software engineer who approaches every
                project with the mindset of building something useful,
                professional, useable and dependable. My work is shaped by strong
                attention to detail, clean execution, time efficiency and the ability to turn
                ideas into digital products that feel structured, and
                ready for real users.
              </p>

              <p>
                With a foundation in STEM and a growing record of practical
                software projects, I bring analytical thinking and
                product awareness into every build. Whether I am creating a
                portfolio, business platform, dashboard, API-driven product, or
                full web application, my focus remains the same: quality,
                usability, performance, scalability and solutions that can grow beyond the
                first version.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
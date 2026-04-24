"use client";

import ThemeProvider from "@/components/Providers/ThemeProvider";
import TopNav from "@/components/Layout/TopNav";
import SectionDots from "@/components/Layout/SectionDots";
import Intro from "@/components/Sections/Intro";
import About from "@/components/Sections/about";
import EducationExperience from "@/components/Sections/education&experience";
import Project from "@/components/Sections/project";
import SkillCard from "@/components/UI/SkillCard";
import Contact from "@/components/Sections/contact";
import Recommendation from "@/components/UI/Recommendation";
import Footer from "@/components/Layout/footer";
import AnimateOnScroll from "@/components/UI/AnimateOnScroll";
import FloatingWhatsApp from "@/components/UI/FloatingWhatsApp";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen scroll-smooth bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
        <TopNav />
        <SectionDots />
        
        <FloatingWhatsApp />
        <Intro />

        <AnimateOnScroll delay={0.1}>
          <About />
        </AnimateOnScroll>

        <EducationExperience />

        <SkillCard />

        <AnimateOnScroll delay={0.1}>
          <Project />
        </AnimateOnScroll>

        <Contact />

        <Recommendation />

        <AnimateOnScroll delay={0.1}>
          <Footer />
        </AnimateOnScroll>
      </main>
    </ThemeProvider>
  );
}
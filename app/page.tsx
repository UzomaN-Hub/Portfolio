// app/page.tsx
"use client";
import { useState, useEffect } from "react"; 
import Intro from "@/components/Sections/Intro";
import About from "@/components/Sections/about";
import EducationExperience from "@/components/Sections/education&experience";
import Project from "@/components/Sections/project";
import Sidenav from "@/components/Layout/sidenav";
import SkillCard from "@/components/UI/SkillCard";
import Contact from "@/components/Sections/contact";
import Recommendation from "@/components/UI/Recommendation";
import Footer from "@/components/Layout/footer";
import AnimateOnScroll from "@/components/UI/AnimateOnScroll";

export default function Home() {
  // Initialize with a default value (e.g., true for light mode) for both server and initial client render
  // updated based on localStorage in a useEffect.
  const [isLightMode, setIsLightMode] = useState(true);

  // useEffect to apply the 'dark' class to the html element AND read from localStorage
  useEffect(() => {
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setIsLightMode(false); // Set to dark mode if saved
      htmlElement.classList.add('dark');
    } else {
      setIsLightMode(true); // Default to light mode
      htmlElement.classList.remove('dark');
    }
  }, []); // Run only once on mount

  // This useEffect ensures the theme class is always applied when isLightMode changes
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (!isLightMode) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isLightMode]); // Re-run this effect whenever isLightMode changes

  const handleToggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <section>
      <Sidenav isLightMode={isLightMode} onToggleTheme={handleToggleTheme} />

      {/* Conditional class based on isLightMode */}
      <div className={`${isLightMode ? 'bg-amber-50 text-oil-brown' : 'bg-dark-eggshell text-dark-text-light-brown'} min-h-screen transition-colors duration-500`}>
        <Intro isLightMode={isLightMode} onToggleTheme={handleToggleTheme} />

        <AnimateOnScroll delay={0.1}>
          <About />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <EducationExperience />
        </AnimateOnScroll>

        <SkillCard />
       
        <AnimateOnScroll delay={0.1}>
          <Project />
        </AnimateOnScroll>

        <Contact />
        
        <Recommendation />
        
        <AnimateOnScroll delay={0.1}>
          <Footer />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
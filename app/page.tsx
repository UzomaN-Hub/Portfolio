
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
  // theme state
  // Initialize from localStorage or default to true (light mode)
  const [isLightMode, setIsLightMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'light' : true; // Default to light if no saved theme
    }
    return true; // Default to light mode on server render
  });

  // useEffect to apply the 'dark' class to the html element
  useEffect(() => {
    const htmlElement = document.documentElement; // This refers to the <html> tag
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
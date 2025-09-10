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
  const [isLightMode, setIsLightMode] = useState(true);

  // Initial theme load from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsLightMode(false);
    } else {
      setIsLightMode(true);
    }
  }, []); // Only runs once on client mount

  // Apply theme class to HTML element and save to localStorage
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (!isLightMode) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isLightMode]); // Runs on isLightMode change

  const handleToggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="flex min-h-screen"> {/* This div now controls the main layout */}
      {/* Side Navigation Area */}
      <Sidenav isLightMode={isLightMode} onToggleTheme={handleToggleTheme} />

      {/* Main page content area */}
      <div className={`flex-grow overflow-y-auto 
                     ${isLightMode ? 'bg-amber-50 text-oil-brown' : 'bg-dark-eggshell text-dark-text-light-brown'} 
                     transition-colors duration-500`}>
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
    </div>
  );
}
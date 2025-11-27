"use client";

import { useState, useEffect } from 'react';
import { playfair, space } from "@/app/font";
import { Wrench, SquareCode, Database, Settings, Speech, Rocket } from "lucide-react";
import { motion } from 'framer-motion';

export default function SkillCard() {
  const skillsData = [
    {
      id: 'frontend',
      title: "Frontend Skills",
      icon: <SquareCode size={24} className="2xl:w-8 2xl:h-8" />, // Added 2xl scaling
      skills: ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "TypeScript", "Zustand", "Shadcn-ui"]
    },
    {
      id: 'database',
      title: "Database Skills",
      icon: <Database size={24} className="2xl:w-8 2xl:h-8" />,
      skills: ["MongoDB", "Postgress SQL", "MySQL", "SQLite"]
    },
    {
      id: 'backend',
      title: "Backend Skills",
      icon: <Settings size={24} className="2xl:w-8 2xl:h-8" />,
      skills: ["Python", "Django", "Fast API", "Node.js", "RESTful APIs" ]
    },
    {
      id: 'deployment',
      title: "Version Control Skills",
      icon: <Rocket size={24} className="2xl:w-8 2xl:h-8" />,
      skills: ["Vercel", "Git & Github", "Netlify", "Render"]
    },
    {
      id: 'soft-skills',
      title: "Soft Skills",
      icon: <Speech size={24} className="2xl:w-8 2xl:h-8" />,
      skills: ["Effective Communication", "Team Collaboration", "Problem-Solving", "Adaptability"]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine how many cards to show based on screen width
  const getCardsToShow = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2; 
    return 3; 
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow);
  const totalSlides = skillsData.length;
  const maxIndex = totalSlides - cardsToShow; 

  useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 
  useEffect(() => {
    if (totalSlides > cardsToShow) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, 3000); 

      return () => clearInterval(interval);
    } else {
      
      setCurrentIndex(0);
    }
  }, [totalSlides, cardsToShow, maxIndex]); 

  // Adjust currentIndex if cardsToShow changes (e.g., on resize)
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex > 0 ? maxIndex : 0);
    }
  }, [cardsToShow, currentIndex, maxIndex]);


  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <motion.div
      id="skills"
      // Added 2xl:p-0 and 2xl:min-h-screen to outer wrapper
      className="w-full py-6 shadow-md relative 2xl:p-0 2xl:min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
    >
      
      <div className="w-full px-4 py-6 bg-dark-oil-brown/50 shadow-md dark:border-b dark:border-yellow-500 2xl:min-h-screen 2xl:flex 2xl:flex-col 2xl:px-16">
        
        {/* Header */}
        <div className="flex relative items-center gap-2 cursor-pointer group mb-8 2xl:mt-4">
          <Wrench size={30} className="text-[#412201] dark:text-amber-50 2xl:w-10 2xl:h-10" />
          <h1 className={`${playfair.className} antialiased text-xl text-[#412201] dark:text-amber-50 2xl:text-3xl`}>
            Skills...
          </h1>
          <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-amber-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
        </div>

      
        <div className="overflow-hidden 2xl:flex-grow 2xl:flex 2xl:flex-col 2xl:justify-center">
          <div
            className="flex mt-10 py-10 transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
            }}
          >
            {skillsData.map((category) => (
              <div
                key={category.id}
                style={{ width: `${100 / cardsToShow}%` }}
                className="flex-shrink-0 px-2"
              >
                
                <div className="bg-amber-50 border border-oil-brown flex flex-col hover:shadow-lg hover:shadow-oil-brown transition-shadow duration-300 ease-in-out p-4 2xl:p-8 h-full">
                  <div className="border-b border-oil-brown gap-6 flex items-center py-6 px-4">
                    {category.icon}
                    {/* Text Scaling */}
                    <h2 className={`${playfair.className} antialiased text-lg md:text-xl 2xl:text-3xl text-[#412201]`}>
                      {category.title}
                    </h2>
                  </div>
                  <div className="flex mt-3 flex-wrap items-center justify-center gap-2 p-2 2xl:p-6 flex-grow">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        // Tag Scaling
                        className={`${space.className} antialiased flex cursor-pointer items-center border border-oil-brown bg-amber-50 text-oil-brown hover:rounded-full p-1.5 2xl:p-3 2xl:text-lg text-sm hover:text-amber-50 hover:bg-oil-brown transition-colors duration-300 ease-in-out`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        {totalSlides > cardsToShow && (
          <div className="flex justify-center mt-8 space-x-2 2xl:mb-8">
            {Array.from({ length: totalSlides - cardsToShow + 1 }).map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 2xl:w-4 2xl:h-4 rounded-full transition-colors duration-300
                  ${index === currentIndex ? 'bg-[#734d26]' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
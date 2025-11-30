"use client";

import { playfair, space } from "@/app/font";
import { Voicemail, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion'

export default function Recommendation() {
  const references = [
    {
      id: "roland",
      name: "Roland Onyekwere",
      position: "CEO, Jenga Tech",
      feedback:
        "Uzoma is a highly skilled developer with a keen eye for detail. His work on our project significantly improved our user experience. He has a strong foothold in frontend technologies.",
    },
    {
      id: "wisdom",
      name: "Wisdom Njimogu",
      position: "Software Engineer",
      feedback:
        "I had the pleasure of working with Uzoma on several projects. His ability to adapt to new technologies and frameworks is impressive. He consistently delivers high-quality work on time.",
    },
    {
      id: "casmir",
      name: "Casmir Onyeka",
      position: "FullStack Developer",
      feedback:
        "Uzoma consistently demonstrates excellent problem-solving skills. His ability to analyze complex issues and develop effective solutions is impressive.",
    },
    {
      id: "daniel",
      name: "Daniel Godspower",
      position: "Junior Software Engineer",
      feedback:
        "I have worked with Uzoma on multiple projects and his dedication to writing clean, efficient code is commendable. He is always willing to help others and share his knowledge.",
    },

    {
      id: "lilian",
      name: "Lilian Agukwe",
      position: "Business Consultant",
      feedback:
        "Uzoma has a unique ability to bridge the gap between technical and non-technical stakeholders. His insights during project discussions were invaluable.",
    },
  ];

  const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);
  const [desktopCurrentIndex, setDesktopCurrentIndex] = useState(0);
  const totalSlides = references.length;

  const [cardsToShow, setCardsToShow] = useState<number | null>(null);

  useEffect(() => {
    const getInitialCardsToShow = () => {
      if (window.innerWidth < 768) return 1;
      return 3;
    };
    setCardsToShow(getInitialCardsToShow());

    const handleResize = () => setCardsToShow(getInitialCardsToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  const maxMobileIndex = cardsToShow === 1 ? totalSlides - 1 : 0;

  useEffect(() => {
    if (cardsToShow === 1 && maxMobileIndex > 0) {
      const interval = setInterval(() => {
        setMobileCurrentIndex((prevIndex) =>
          prevIndex === maxMobileIndex ? 0 : prevIndex + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [maxMobileIndex, cardsToShow]);

  const handleDotClick = (index: number) => {
    setMobileCurrentIndex(index);
  };

  const handleNextDesktop = () => {
    if (cardsToShow && cardsToShow > 1) {
      setDesktopCurrentIndex((prevIndex) =>
        (prevIndex + 1) % (totalSlides - cardsToShow + 1)
      );
    }
  };

  const handlePrevDesktop = () => {
    if (cardsToShow && cardsToShow > 1) {
      setDesktopCurrentIndex((prevIndex) =>
        (prevIndex - 1 + (totalSlides - cardsToShow + 1)) % (totalSlides - cardsToShow + 1)
      );
    }
  };

  useEffect(() => {
    if (cardsToShow && cardsToShow > 1) {
      const maxPossibleDesktopIndex = totalSlides - cardsToShow;
      if (desktopCurrentIndex > maxPossibleDesktopIndex) {
        setDesktopCurrentIndex(maxPossibleDesktopIndex > 0 ? maxPossibleDesktopIndex : 0);
      }
    }
  }, [cardsToShow, totalSlides, desktopCurrentIndex]);

  useEffect(() => {
    if (cardsToShow && cardsToShow > 1 && totalSlides > cardsToShow) {
      const interval = setInterval(() => {
        setDesktopCurrentIndex((prevIndex) =>
          (prevIndex + 1) % (totalSlides - cardsToShow + 1)
        );
      }, 4000); 
      return () => clearInterval(interval);
    }
  }, [cardsToShow, totalSlides]);

  if (cardsToShow === null) {
    return (
      <motion.div
        id="skills"
        className="w-full px-4 py-6 shadow-md relative min-h-[300px] 2xl:min-h-screen flex items-center justify-center" 
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ pointerEvents: 'auto' }}
      >
        <div className="text-[#412201] dark:text-amber-50">Loading recommendations...</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      id="skills"
      className="w-full px-4 py-6 shadow-md relative 2xl:p-0 2xl:min-h-screen"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ pointerEvents: 'auto' }}
    >
      
      <div id="recommendation" className="w-full px-4 py-6 shadow-md 2xl:shadow-none 2xl:min-h-screen 2xl:flex 2xl:flex-col 2xl:px-16">
        
        {/* Heading */}
        <div className="flex relative items-center gap-2 cursor-pointer group 2xl:mt-4">
          <Voicemail size={30} className="text-[#734d26] dark:text-amber-50 2xl:w-10 2xl:h-10" />
          <h1
            className={`${playfair.className} antialiased text-xl 2xl:text-3xl text-[#412201] dark:text-amber-50`}
          >
            Recommendations...
          </h1>
          <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-[#734d26] dark:bg-amber-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
        </div>

        {/* Carousel Container */}
        
        <div className="overflow-hidden relative 2xl:flex-grow 2xl:flex 2xl:flex-col 2xl:justify-center">
          {cardsToShow === 1 ? (
            
            <div className="flex justify-center items-center mt-10 py-10">
              <div className="w-full max-w-sm px-2">
                <div className="border border-oil-brown flex flex-col hover:shadow-lg hover:shadow-oil-brown transition-shadow duration-300 ease-in-out p-4 h-full bg-white dark:bg-[#412201]">
                  <div className="py-6 px-4">
                    <h2
                      className={`${playfair.className} antialiased text-md text-justify text-[#412201] dark:text-amber-50`}
                    >
                      {references[mobileCurrentIndex].feedback}
                    </h2>
                  </div>
                  <div className="border-t border-oil-brown flex flex-col mt-3 items-center justify-center p-4 flex-grow">
                    <span
                      className={`${space.className} antialiased text-lg text-[#412201] font-semibold dark:text-amber-50`}
                    >
                      {references[mobileCurrentIndex].name}
                    </span>
                    <span
                      className={`${space.className} antialiased text-sm text-[#734d26]`}
                    >
                      {references[mobileCurrentIndex].position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex mt-10 py-10 transition-transform duration-500 ease-in-out"
                   style={{ transform: `translateX(-${desktopCurrentIndex * (100 / cardsToShow)}%)` }}>
                {references.map((category) => (
                  <div
                    key={category.id}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / cardsToShow}%` }} 
                  >
                    
                    <div className="border border-oil-brown flex flex-col hover:shadow-lg hover:shadow-oil-brown transition-shadow duration-300 ease-in-out p-4 2xl:p-8 h-full bg-white dark:bg-[#412201]">
                      <div className="py-6 px-4 flex-grow"> 
                        <h2
                          className={`${playfair.className} antialiased text-md 2xl:text-xl 2xl:leading-loose text-justify text-[#412201] dark:text-amber-50`}
                        >
                          {category.feedback}
                        </h2>
                      </div>
                      <div className="border-t border-oil-brown flex flex-col mt-3 items-center justify-center p-4 2xl:p-8">
                        <span
                          className={`${space.className} antialiased text-lg 2xl:text-2xl text-[#412201] font-semibold dark:text-amber-50`}
                        >
                          {category.name}
                        </span>
                        <span
                          className={`${space.className} antialiased text-sm 2xl:text-xl text-[#734d26]`}
                        >
                          {category.position}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              
              {cardsToShow && totalSlides > cardsToShow && ( 
                <>
                  <button
                    onClick={handlePrevDesktop}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#734d26] dark:bg-amber-50 text-white dark:text-[#412201] p-2 2xl:p-4 rounded-full shadow-lg z-10 hidden md:block"
                    aria-label="Previous recommendation"
                  >
                    <ChevronLeft size={24} className="2xl:w-8 2xl:h-8" />
                  </button>
                  <button
                    onClick={handleNextDesktop}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#734d26] dark:bg-amber-50 text-white dark:text-[#412201] p-2 2xl:p-4 rounded-full shadow-lg z-10 hidden md:block"
                    aria-label="Next recommendation"
                  >
                    <ChevronRight size={24} className="2xl:w-8 2xl:h-8" />
                  </button>
                </>
              )}
            </>
          )}
        </div>

        
        {cardsToShow === 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {references.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === mobileCurrentIndex
                    ? "bg-[#734d26]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
"use client";

import { useEffect, useState } from "react";
import Container from "@/components/UI/Container";
import SectionHeader from "@/components/UI/SectionHeader";
import SectionWrapper from "@/components/UI/SectionWrapper";
import { recommendationsData } from "@/components/data/recommendation";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Recommendation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cards per view
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1280) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(recommendationsData.length - cardsPerView, 0);

  // Reset index when cardsPerView changes so we never land out of bounds
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <SectionWrapper
      id="recommendation"
      className="bg-slate-50 dark:bg-slate-900/40"
    >
      <Container>
        <SectionHeader label="Recommendations" />

        <p className="mb-12 max-w-4xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9 dark:text-slate-300">
          Feedback from people I have worked with across software development,
          training, collaboration, and project delivery.
        </p>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${currentIndex * (100 / cardsPerView)}%`,
            }}
            transition={{
              duration: 0.75,
              ease: "easeInOut",
            }}
          >
            {recommendationsData.map((item, index) => (
              <div
                key={item.id}
                className="w-full shrink-0 px-3 md:w-1/2 xl:w-1/3"
              >
                <motion.article
                  className="min-h-[390px] rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:border-cyan-800 hover:shadow-2xl hover:shadow-cyan-900/10 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-cyan-400"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.06,
                  }}
                >
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-800 text-white shadow-lg shadow-cyan-900/25 dark:bg-cyan-400 dark:text-slate-950">
                    <Quote size={30} />
                  </div>

                  <p className="text-lg font-semibold leading-9 text-slate-700 dark:text-slate-300">
                    &ldquo;{item.feedback}&rdquo;
                  </p>

                  <div className="mt-9 border-t border-slate-200 pt-6 dark:border-slate-800">
                    <h3 className="text-xl font-black text-slate-950 dark:text-white">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-base font-bold text-cyan-800 dark:text-cyan-400">
                      {item.position}
                    </p>
                  </div>
                </motion.article>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-10 bg-cyan-800 dark:bg-cyan-400"
                  : "w-3 bg-slate-300 hover:bg-cyan-800 dark:bg-slate-700 dark:hover:bg-cyan-400"
              }`}
              aria-label={`Go to recommendation slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
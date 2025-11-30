"use client";

import { playfair, space } from "@/app/font";
import { UserPen } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div 
      id="about" 
      className="w-full px-4 py-6 bg-dark-oil-brown/50 shadow-md dark:border-b dark:border-yellow-500 2xl:min-h-screen 2xl:flex 2xl:flex-col 2xl:px-16"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ pointerEvents: 'auto' }}
    >
      
      {/* Header Area */}
      <div className="flex relative items-center gap-2 cursor-pointer group 2xl:mt-4">
        <UserPen size={30} className="text-[#412201] dark:text-amber-50 2xl:w-10 2xl:h-10" />
        <h1 className={`${playfair.className} antialiased text-xl 2xl:text-3xl text-[#412201] dark:text-amber-50`}>
          About Me...
        </h1>
        <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-amber-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
      </div>

      
      <div className="flex flex-col md:flex-row mt-6 gap-6 py-8 md:py-24 2xl:flex-grow 2xl:justify-center 2xl:items-center 2xl:gap-20 2xl:max-w-[1600px] 2xl:mx-auto">
        
        <div className="w-full md:w-1/2 outline-none rounded-lg overflow-hidden flex justify-center mb-6 md:mb-0">
          <Image
            src="/photo.webp"
            alt="Uzoma Nwaiwu"
            width={400}
            height={400}
            className="object-cover w-400 rounded-lg max-h-[420px] 2xl:max-h-[600px] 2xl:w-[500px] outline-none shadow-lg"
          />
        </div>

        {/* Text area */}
        <div className="w-full md:w-1/2 items-center flex">
          <p className={`${space.className} text-justify text-md 2xl:text-xl 2xl:leading-loose text-stone-900 dark:text-amber-50`}>
            I am a passionate software engineer with a strong focus on crafting
            modern, responsive, seamless user experiences and user-friendly
            front-end applications leveraging tools such as <b>Next.js</b> and{" "}
            <b>React.js</b>. Alongside front-end development, I also bring
            experience in building robust back-end solutions with <b>Python, Django</b>{" "}
            and <b>FastAPI</b>. <br />
            <br />
            Detail-oriented and client-focused, I strive to understand project
            needs thoroughly and deliver solutions that ensure satisfaction. My
            approach to every project is guided by a focus on clear communication
            and effective teamwork. I pride myself on my ability to learn new
            technologies quickly, which allows me to adapt to diverse challenges
            and consistently deliver high-quality, impactful solutions.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
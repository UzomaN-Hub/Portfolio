"use client"
import { playfair, poppins } from "@/app/font";
import { House, CircleUser, FileUser, MoonStar, Sun } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface IntroProps {
  isLightMode: boolean;
  onToggleTheme: () => void;
}

export default function Intro({ isLightMode, onToggleTheme }: IntroProps) {
  return (
    <motion.div
      id="intro"
      className="w-full py-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div id="intro" className="w-full px-4 sm:px-6 md:px-8 py-6 shadow-md dark:border-b dark:border-yellow-500">
        <div className="relative w-full group">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer">
              <House size={24} className="dark:text-amber-50" />
              <h1 className={`${playfair.className} antialiased text-xl dark:text-amber-50`}>
                Home...
              </h1>
            </div>

            <button onClick={onToggleTheme} className="cursor-pointer">
              {isLightMode ? (
                <MoonStar size={24} className="text-[#734d26] dark:text-eggshell" />
              ) : (
                <Sun size={24} className="text-blue-500 dark:text-eggshell" />
              )}
            </button>
          </div>

          <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-[#734d26] dark:bg-amber-50 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
        </div>

        <div className="flex flex-col gap-3 items-center mt-10 mb-6 py-20 sm:py-32 md:py-44"> 
          <div className="">
            <h1 className={`${playfair.className} antialiased text-4xl sm:text-5xl font-bold mb-3 sm:mb-5 text-oil-brown dark:text-amber-50 text-center`}> 
              UZOMA NWAIWU
            </h1>
          </div>

          <div>
            <p className={`${playfair.className} antialiased text-base sm:text-lg text-oil-brown dark:text-dark-text-light-brown text-center px-2`}> 
              Software Engineer | Front-End Developer | FullStack Developer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center mt-6"> 
            <Link href="/#contact">
              <button className={`${poppins.className} antialiased flex items-center justify-center w-full sm:w-auto hover:bg-amber-50 hover:text-oil-brown rounded-full gap-3 py-2.5 px-4 text-sm
                text-amber-50 bg-oil-brown dark:text-dark-eggshell dark:bg-dark-oil-brown
                hover:dark:bg-amber-50 hover:dark:text-dark-oil-brown
                transition-colors duration-300 ease-in-out`}>
                <CircleUser />Say Hello
              </button>
            </Link>
            <Link
              href="/Uzoma-Nwaiwu-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Uzoma-Nwaiwu-Resume.pdf"
            >
              <button className={`${poppins.className} antialiased flex items-center justify-center w-full sm:w-auto hover:bg-amber-50 hover:text-oil-brown rounded-full gap-3 py-2.5 px-4 text-sm
                text-amber-50 bg-oil-brown dark:text-dark-eggshell dark:bg-dark-oil-brown
                hover:dark:bg-amber-50 hover:dark:text-dark-oil-brown
                transition-colors duration-300 ease-in-out`}>
                <FileUser />Download CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
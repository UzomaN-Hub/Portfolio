import { playfair } from "@/app/font";
import { FolderOpenDot } from "lucide-react";
import ProjectCard from "@/components/UI/ProjectCard";

export default function Projects() {
  return (
    <div 
      id="projects" 
      
      className="w-full px-4 py-6 shadow-md dark:border-b dark:border-yellow-500 2xl:min-h-screen 2xl:flex 2xl:flex-col 2xl:px-20"
    >
      {/* Header */}
      <div className="flex relative items-center gap-2 cursor-pointer group">
        <FolderOpenDot size={30} className="text-[#734d26] dark:text-amber-50 2xl:w-10 2xl:h-10" />
        <h1
          className={`${playfair.className} antialiased text-xl 2xl:text-3xl text-[#412201] dark:text-amber-50`}
        >
          My Projects...
        </h1>
        <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-[#734d26] dark:bg-amber-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
      </div>

  
      <div className="mt-8 2xl:mt-16 2xl:flex-grow 2xl:flex 2xl:flex-col 2xl:justify-center w-full">
        <ProjectCard />
      </div>
    </div>
  );
}
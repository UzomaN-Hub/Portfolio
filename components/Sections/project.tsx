import { playfair } from "@/app/font";
import { FolderOpenDot } from "lucide-react";
import ProjectCard from "@/components/UI/ProjectCard";


export default function Projects() {
  return (
    <div id="projects" className="w-full px-4 py-6 shadow-md dark:border-b dark:border-yellow-500">
      <div className="flex relative items-center gap-2 cursor-pointer group">
        <FolderOpenDot size={30} className="text-[#734d26] dark:text-amber-50" />
        <h1
          className={`${playfair.className} antialiased text-xl text-[#412201] dark:text-amber-50`}
        >
          My Projects...
        </h1>
        <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-[#734d26] dark:bg-amber-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
      </div>

      {/* Project Cards */}
      <div className="mt-8">
        <ProjectCard />
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { playfair, poppins } from "@/app/font";

const projects = [
  {
    image: "/project1.png",
    title: "Product Menu",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    description:
      "A Product Menu that displays a list of products with their images, names, and prices. It also allows users to add products to their carts in any quantity and also remove products from their cart.",
    demo: "https://product-list-vite.vercel.app/",
    id: "read_more_1",
  },
  {
    image: "/project2.png",
    title: "Interactive Comment Section",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "An interactive comment section that allows users to post comments, reply to others, and like/dislike comments. It also features real-time updates and upvoting/downvoting functionality.",
    demo: "https://interactive-comment-project.vercel.app/",
    id: "read_more_2",
  },
  {
    image: "/project3.png",
    title: "Browser Extension",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    description:
      "A browser extension that enhances the users browsing experience by providing additional features and functionalities. It also includes a light and dark mode for better usability, toggleable via a button in the extensions UI.",
    demo: "https://browser-extension-js.vercel.app/",
    id: "read_more_3",
  },
];

export default function ProjectCard() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="flex flex-col cursor-pointer p-4 bg-white dark:bg-dark-oil-brown rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt="Project Image"
                fill
                className="object-cover"
              />
            </div>
            <h2
              className={`${playfair.className} antialiased text-xl text-[#412201] dark:text-amber-50 mt-4 mb-2`}
            >
              {project.title}
            </h2>
            <div className="flex gap-2 items-center flex-wrap mb-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={`${poppins.className} antialiased rounded-full px-3 py-1 text-xs text-amber-50 bg-oil-brown`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="relative">
              <input type="checkbox" id={project.id} className="peer hidden" />
              <p className="line-clamp-2 text-justify mt-2 dark:text-amber-50 peer-checked:line-clamp-none">
                {project.description}
              </p>
              <label
                htmlFor={project.id}
                className={`${poppins.className} antialiased mt-2 cursor-pointer text-sm text-yellow-500 hover:underline peer-checked:hidden`}
              >
                Read More
              </label>
              <label
                htmlFor={project.id}
                className={`${poppins.className} antialiased mt-2 cursor-pointer text-sm text-yellow-500 hover:underline hidden peer-checked:inline`}
              >
                Read Less
              </label>
            </div>
            <div className="flex items-center mt-4">
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`${poppins.className} antialiased border border-oil-brown bg-amber-50 text-oil-brown rounded-full px-4 py-2 text-sm hover:text-amber-50 hover:bg-oil-brown transition-colors duration-300 ease-in-out`}
              >
                Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
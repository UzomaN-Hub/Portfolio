"use client";

import Image from "next/image";
import Link from "next/link";
import { playfair, space } from "@/app/font";
import { motion } from "framer-motion";

const projects = [
  {
    image: "/project1.webp",
    title: "Health Care Blog",
    tech: ["Next.js", "Python", "FastAPI", "Zustand", "TanStackQuery"],
    description:
      "A comprehensive healthcare blog platform that provides users with access to a wide range of health-related articles, tips, and resources. The platform features a user-friendly interface, allowing users to easily navigate through various health topics, read articles, and stay informed about the latest developments in the healthcare industry.",
    demo: "https://primehealthcare.vercel.app/",
    id: "read_more_1",
  },
  {
    image: "/project2.webp",
    title: "Transcriber + Translator",
    tech: ["Next.js", "Python", "Fast API", "TypeScript", "Vosk"],
    description:
      "A web application that allows users to live record, upload audio files of any format and get a transcription of the audio in text format. It also allows users to input text and generate audio from the text in any language. It also has a translation feature that allows users to translate text from one language to another.",
    demo: "https://transcribe-gray.vercel.app/",
    id: "read_more_2",
  },
  {
    image: "/project3.webp",
    title: "Product Menu",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    description:
      "A Product Menu that displays a list of products with their images, names, and prices. It also allows users to add products to their carts in any quantity and also remove products from their cart.",
    demo: "https://product-list-vite.vercel.app/",
    id: "read_more_3",
  },
];

export default function ProjectCard() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="flex flex-col cursor-pointer p-4 bg-white dark:bg-dark-oil-brown rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ease-in-out"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
            style={{ pointerEvents: 'auto' }}
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
                  className={`${space.className} antialiased rounded-full px-3 py-1 text-xs text-amber-50 bg-oil-brown`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="relative">
              <input type="checkbox" id={project.id} className="peer hidden" />
              <p className={`${space.className} line-clamp-2 text-justify mt-2 dark:text-amber-50 peer-checked:line-clamp-none`}>
                {project.description}
              </p>
              <label
                htmlFor={project.id}
                className={`${space.className} antialiased mt-2 cursor-pointer text-sm text-yellow-500 hover:underline peer-checked:hidden`}
              >
                Read More
              </label>
              <label
                htmlFor={project.id}
                className={`${space.className} antialiased mt-2 cursor-pointer text-sm text-yellow-500 hover:underline hidden peer-checked:inline`}
              >
                Read Less
              </label>
            </div>
            <div className="flex items-center mt-4">
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`${space.className} antialiased border border-oil-brown bg-amber-50 text-oil-brown rounded-full px-4 py-2 text-sm hover:text-amber-50 hover:bg-oil-brown transition-colors duration-300 ease-in-out`}
              >
                Live Demo
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
import { playfair, space } from "@/app/font";
import { Pill } from "lucide-react"


export default function EducationExperience() {
  return (
    <div id="education-experience" className="w-full px-4 py-6 shadow-md relative dark:border-b dark:border-yellow-500 h-screen">
      <div className="flex items-center gap-2 relative cursor-pointer group">
        <Pill size={24} className="dark:text-amber-50" />
        <h1
          className={`${playfair.className} antialiased text-xl text-[#412201] dark:text-amber-50`}
        >
          Education & Experience...
        </h1>
        <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-[#734d26] dark:bg-amber-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
      </div>

      <div className="py-6 2xl:mt-24">
        {/* Main content */}
        <div className="flex flex-col md:flex-row mt-6 gap-6">
          {/* Education Section */}
          <div className="w-full md:w-1/2 px-2"> 
            <h2 className={`${playfair.className} antialiased text-2xl text-[#412201] dark:text-amber-50 mb-6`}>
              Education
            </h2>
            {/* Individual Education entries */}
            <div className="border-l-2 relative border-dotted px-2 border-oil-brown mb-6 md:mb-8">
              <div className="absolute left-[-5px] -top-1 w-2 h-2 rounded-full bg-oil-brown"></div>
              <p className={`${space.className} text-justify text-xl md:text-2xl font-bold text-oil-brown dark:text-amber-50`}>
                Jenga Tech Institute
              </p>
              <p className={`${space.className} text-justify text-lg text-[#412201] dark:text-amber-50`}>
                Diploma in Software Engineering
              </p>
              <p className={`${space.className} text-justify text-xs text-[#412201] dark:text-amber-50`}>
                September 2024
              </p>
              <p className={`${space.className} text-justify mt-2 md:mt-4 text-sm md:text-md text-stone-950 dark:text-amber-50`}>
                I recently earned a Diploma in Software Engineering from Jenga Tech Institute in September 2024,
                where I delved deep to the core of modern software development.
                The program emphasized hands-on learning with tools such as JavaScript, React, Next.js, Tailwind CSS, Python, Django and Git/GitHub, giving me the skills to build both front-end and back-end projects.
                Beyond coding, I also learned best practices in problem-solving, critical thinking, debugging, and version control, which helped me develop a strong foundation for collaborating on real-world projects and continuously improving as a developer.
              </p>
            </div>

            <div className="border-l-2 relative border-dotted px-2 border-oil-brown mt-4 md:mt-3 mb-6 md:mb-0">
              <div className="absolute left-[-5px] -top-1 w-2 h-2 rounded-full bg-oil-brown"></div>
              <p className={`${space.className} text-justify text-xl md:text-2xl font-bold text-oil-brown dark:text-amber-50`}>
                Imo State University
              </p>
              <p className={`${space.className} text-justify text-lg text-[#412201] dark:text-amber-50`}>
                Bachelor of Medical Laboratory Science
              </p>
              <p className={`${space.className} text-justify text-xs text-[#412201] dark:text-amber-50`}>
                September 2020
              </p>
              <p className={`${space.className} text-justify mt-2 md:mt-4 text-sm md:text-md text-stone-950 dark:text-amber-50`}>
                My time at Imo State University studying Medical Laboratory Science was a fantastic experience.
                It was a hands-on program where I got to dive deep into diagnostic fields like hematology, microbiology, immunology, histopathology and clinical chemistry.
                That education taught me to be incredibly detail-oriented and to think analytically under pressure—skills that I use every single day in software engineering. Ultimately, my background gave me an appreciation for precision and the commitment to always produce accurate, reliable results, no matter the project.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="w-full md:w-1/2 px-2 mt-8 md:mt-0">
            <h2 className={`${playfair.className} antialiased text-2xl text-[#412201] dark:text-amber-50 mb-6`}>
              Experience
            </h2>
            {/* Individual Experience entries */}
            <div className="border-l-2 relative border-dotted px-2 border-oil-brown mb-8">
              <div className="absolute left-[-5px] -top-1 w-2 h-2 rounded-full bg-oil-brown"></div>
              <p className={`${space.className} text-justify text-xl md:text-2xl font-bold text-oil-brown dark:text-amber-50`}>
                Junior Software Engineer
              </p>
              <p className={`${space.className} text-justify text-lg text-[#412201] dark:text-amber-50`}>
                Jenga Tech Institute
              </p>
              <p className={`${space.className} text-justify text-xs text-[#412201] dark:text-amber-50`}>
                Jan 2025- Aug 2025
              </p>
              <p className={`${space.className} text-justify mt-4 text-sm md:text-md text-stone-950 dark:text-amber-50`}> 
                As a Junior Software Engineer at Jenga Tech Institute (Jan 2025 – Aug 2025),
                I contributed to building modern and efficient applications while increasing my knowledge in software engineering.
                My role involved collaborating with peers on both front-end and back-end projects, where I used React.js and Next.js to create responsive, user-friendly interfaces, and Python with Django to design and manage back-end systems.
                I also worked with Git/GitHub for version control, deployed using Vercel and Netlify, and explored Tailwind CSS for clean, scalable UI styling.
                This experience improved my technical skills and also taught me the importance of clear communication, problem-solving, and teamwork in delivering real-world software solutions.
              </p>
            </div>

            <div className="border-l-2 mt-3 relative border-dotted px-2 border-oil-brown">
              <div className="absolute left-[-5px] -top-1 w-2 h-2 rounded-full bg-oil-brown"></div>
              <p className={`${space.className} text-justify text-xl md:text-2xl font-bold text-oil-brown dark:text-amber-50`}> 
                Intern Frontend Developer
              </p>
              <p className={`${space.className} text-justify text-lg text-[#412201] dark:text-amber-50`}>
                Eva Enterprise
              </p>
              <p className={`${space.className} text-justify text-xs text-[#412201] dark:text-amber-50`}>
                Sept 2024- Dec 2024
              </p>
              <p className={`${space.className} text-justify mt-4 text-sm md:text-md text-stone-950 dark:text-amber-50`}> 
                During my internship at Eva Bags (Sept 2024 – Dec 2024),
                I focused on developing user-friendly web applications using React.js. I collaborated with designers to implement responsive layouts and improve user experience.
                This role enhanced my skills in front-end development and taught me the importance of user-centered design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
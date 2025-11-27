import { playfair, space } from "@/app/font";
import { UserPen } from "lucide-react";
import Image from "next/image";


export default function About() {
  return (
    <div id="about" className="w-full px-4 py-6 bg-dark-oil-brown shadow-md dark:border-b dark:border-yellow-500 h-screen">
      <div className="flex relative items-center gap-2 cursor-pointer group">
        <UserPen size={30} className="text-amber-50" />
        <h1
          className={`${playfair.className} antialiased text-xl text-amber-50`}
        >
          About Me...
        </h1>
        <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-amber-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
      </div>

      
      <div className="flex flex-col md:flex-row mt-6 gap-6 py-8 md:py-24 2xl:mt-28 2xl:gap-0.5">
        
        <div className="w-full md:w-1/2 outline-none rounded-lg overflow-hidden flex justify-center mb-6 md:mb-0 2xl:w-1/3 2xl:mx-16">
          <Image
            src="/photo.webp"
            alt="profile"
            width={400}
            height={400}
            className="object-cover w-400 rounded-lg max-h-[420px] outline-none 2xl:w-[600px] 2xl:max-h-[620px]"
          />
        </div>

        {/* Text area */}
        <div className="w-full md:w-1/2 items-center flex">
          <p className={`${space.className} text-justify text-md text-stone-900 dark:text-amber-50`}>
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
    </div>
  );
}

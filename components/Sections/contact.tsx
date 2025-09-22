"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { playfair, poppins, space } from "@/app/font";
import {
  CircleUser,
  Mail,
  Github,
  Linkedin,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_zhjerlk", 
        "template_lmxy9kh", 
        form.current,
        "OUmFa0QmCDg_1ur4k"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current?.reset();
        },
        () => {
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.div
      id="contact"
      className="w-full py-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
    >
      <div className="bg-dark-oil-brown w-full px-4 py-6 shadow-md dark:border-b dark:border-yellow-500">
        <div className="flex relative items-center gap-2 cursor-pointer group">
          <CircleUser size={30} className="text-amber-50" />
          <h1 className={`${playfair.className} antialiased text-amber-50 text-xl`}>
            Contact...
          </h1>
          <span className="absolute -bottom-4 left-0 w-full h-[2px] bg-amber-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
        </div>

        
        <div className="flex flex-col md:flex-row gap-8 mt-10 py-14">
          {/* Left side - Contact Form */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <span
              className={`${playfair.className} antialiased text-lg text-[#412201] dark:text-amber-50`}
            >
              Feel free to reach out for collaborations or just a friendly hello!
            </span>

            <form ref={form} onSubmit={sendEmail} className={`${space.className} flex flex-col gap-4 text-stone-950`}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="border border-[#734d26] p-2"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="border border-[#734d26] p-2"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="border border-[#734d26] px-2 pt-2 pb-4"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#734d26] text-white hover:text-[#734d26] p-2 hover:bg-eggshell hover:border hover:border-oil-brown"
              >
                Send Message
              </button>
            </form>

            {/* Status message */}
            {status && (
              <p className={`${space.className} mt-2 text-sm font-medium text-[#412201] dark:text-amber-50`}>{status}</p>
            )}
          </div>

          {/* Right side - Socials */}
          <div className="flex flex-col gap-4 w-full md:w-1/2 md:ml-10 mt-8 md:mt-0">
            <span
              className={`${playfair.className} antialiased text-lg text-[#412201] dark:text-amber-50`}
            >
              You can as well reach me via Email or any of my social media handles
            </span>

            <div className="flex flex-col gap-2 mt-4 border border-[#734d26] p-2">
              <div className="border-b border-oil-brown gap-6 flex items-center py-2 px-4">
                <Mail size={24} className="text-[#734d26] dark:text-amber-50" />
                <h2
                  className={`${space.className} antialiased text-xl text-[#412201] dark:text-amber-50`}
                >
                  Gmail
                </h2>
              </div>

              <span className={`${space.className} flex mt-1.5 items-center justify-center p-2 text-xl text-stone-950 hover:text-amber-50 dark:text-amber-50 dark:hover:text-yellow-500 transition-colors duration-300 ease-in-out`}>
                <Link
                  href="mailto:uzomanwaiwu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uzomanwaiwu@gmail.com{" "}
                </Link>
                <Link
                  href="mailto:uzomanwaiwu@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SquareArrowOutUpRight
                    size={16}
                    className="text-stone-950 hover:text-amber-50 dark:text-amber-50"
                  />
                </Link>
              </span>
            </div>

            <div className="flex flex-col gap-2 mt-4 border border-[#734d26] p-2">
              <div className="border-b border-oil-brown gap-2 flex items-center py-2 px-4">
                <Linkedin size={24} className="text-[#734d26] dark:text-amber-50" />
                <Link
                  href="https://www.linkedin.com/in/uzoma-nwaiwu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2
                    className={`${space.className} antialiased hover:text-stone-950 text-lg text-[#412201] dark:text-amber-50`}
                  >
                    Linkedin
                  </h2>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/uzoma-nwaiwu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SquareArrowOutUpRight
                    size={16}
                    className="text-stone-950 hover:text-amber-50 dark:text-amber-50 dark:hover:text-stone-950"
                  />
                </Link>
              </div>

              <div className="gap-2 flex items-center py-2 px-4">
                <Github size={24} className="text-[#734d26] dark:text-amber-50" />
                <Link
                  href="https://github.com/UzomaN-Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2
                    className={`${space.className} antialiased hover:text-stone-950 text-lg text-[#412201] dark:text-amber-50`}
                  >
                    Github
                  </h2>
                </Link>
                <Link
                  href="https://github.com/UzomaN-Hub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SquareArrowOutUpRight
                    size={16}
                    className="text-stone-950 hover:text-amber-50 dark:text-amber-50 dark:hover:text-stone-950"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  SquareArrowOutUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/UI/Container";
import SectionHeader from "@/components/UI/SectionHeader";
import SectionWrapper from "@/components/UI/SectionWrapper";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");

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
    <SectionWrapper id="contact" className="bg-white dark:bg-slate-950">
      <Container>
        <SectionHeader label="Contact" />

        <p className="mb-12 max-w-4xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9 dark:text-slate-300">
          Reach out for collaborations, frontend development, full-stack
          projects, freelance work, or software engineering opportunities.
        </p>

        <div className="grid min-w-0 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="min-w-0 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-xl dark:border-slate-800 dark:bg-slate-900/60 sm:p-8"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="grid min-w-0 gap-6">
              <div className="min-w-0">
                <label className="mb-3 block text-base font-semibold text-slate-800 dark:text-slate-200">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter your name"
                  className="block w-full min-w-0 rounded-2xl border border-slate-300 bg-white px-4 py-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-800 focus:ring-4 focus:ring-cyan-800/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-cyan-400 sm:px-5 sm:text-lg"
                />
              </div>

              <div className="min-w-0">
                <label className="mb-3 block text-base font-semibold text-slate-800 dark:text-slate-200">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter your email"
                  className="block w-full min-w-0 rounded-2xl border border-slate-300 bg-white px-4 py-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-800 focus:ring-4 focus:ring-cyan-800/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-cyan-400 sm:px-5 sm:text-lg"
                />
              </div>

              <div className="min-w-0">
                <label className="mb-3 block text-base font-semibold text-slate-800 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity"
                  className="block w-full min-w-0 resize-none rounded-2xl border border-slate-300 bg-white px-4 py-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-800 focus:ring-4 focus:ring-cyan-800/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-cyan-400 sm:px-5 sm:text-lg"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-cyan-800 px-6 py-4 text-base font-extrabold text-white shadow-xl shadow-cyan-900/20 transition hover:-translate-y-1 hover:bg-slate-950 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-white sm:w-fit sm:px-8"
              >
                Send Message
                <Send size={20} />
              </button>

              {status && (
                <p className="break-words text-base font-bold text-slate-800 dark:text-slate-200">
                  {status}
                </p>
              )}
            </div>
          </motion.form>

          <motion.div
            className="min-w-0 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-xl dark:border-slate-800 dark:bg-slate-900/60 sm:p-8"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
          >
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white sm:text-3xl">
              Contact Details
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
              You can contact me directly through email or connect with me on
              LinkedIn and GitHub.
            </p>

            <div className="mt-9 space-y-5">
              <ContactLink
                icon={<Mail size={23} />}
                label="Email"
                value="uzomanwaiwu@gmail.com"
                href="mailto:uzomanwaiwu@gmail.com"
              />

              <ContactLink
                icon={<Linkedin size={23} />}
                label="LinkedIn"
                value="linkedin.com/in/uzoma-nwaiwu"
                href="https://www.linkedin.com/in/uzoma-nwaiwu"
              />

              <ContactLink
                icon={<Github size={23} />}
                label="GitHub"
                value="github.com/UzomaN-Hub"
                href="https://github.com/UzomaN-Hub"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

interface ContactLinkProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

function ContactLink({ icon, label, value, href }: ContactLinkProps) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex min-w-0 items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-cyan-800 hover:shadow-xl hover:shadow-cyan-900/10 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-cyan-400 sm:gap-5 sm:p-5"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-800 text-white shadow-lg shadow-cyan-900/20 dark:bg-cyan-400 dark:text-slate-950 sm:h-14 sm:w-14">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 sm:text-base">
          {label}
        </p>

        <p className="max-w-full truncate text-sm font-semibold text-slate-950 dark:text-white sm:text-lg">
          {value}
        </p>
      </div>

      <SquareArrowOutUpRight
        size={20}
        className="hidden shrink-0 text-slate-400 transition group-hover:text-cyan-800 dark:group-hover:text-cyan-400 sm:block"
      />
    </Link>
  );
}
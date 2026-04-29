"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={`relative max-w-full overflow-x-clip scroll-mt-24 py-16 sm:py-24 lg:py-32 ${className}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
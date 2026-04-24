"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const whatsappNumber = "2348137602438"; 
  const message = "Hi Uzoma, I came from your portfolio website.";

  return (
    <motion.div
      className="fixed bottom-32 right-6 z-50"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-full bg-green-600 px-5 py-4 text-white shadow-2xl shadow-cyan-900/30 transition hover:-translate-y-1 hover:bg-green-600"
      >
        <MessageCircle size={22} />

        <span className="text-sm font-extrabold">
          Say Hi
        </span>
      </Link>
    </motion.div>
  );
}
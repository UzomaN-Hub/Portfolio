import { desc } from "framer-motion/client";

export const projectsData = [
  {
    image: "/SiteOrbit.png",
    title: "SiteOrbit: Multi-Tenant SaaS Website Builder",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "Zustand", "React Hook form", "TanStack Query", "Framer Motion", "JWT Auth(Access + Refresh)", "OAuth2"],
    description:
      "SiteOrbit is a full-stack, multi-tenant SaaS platform that enables teams to create, manage, and publish websites through a visual page builder within isolated workspaces. The application demonstrates real-world product engineering with role-based access control, workspace-level data isolation, and a dynamic drag-and-drop builder that supports content creation, state persistence, and publishing workflows. It integrates a robust FastAPI backend with secure authentication (JWT + OAuth2), scalable database design, and a modern frontend architecture powered by Next.js. Beyond functionality, the project emphasizes performance, state management, and user experience—combining responsive UI design, animation systems, and structured component architecture to deliver a production-ready SaaS experience",
    demo: "https://site-orbit-beta.vercel.app/",
  },
  {
    image: "/MetricMint.png",
    title: "MetricMint– An Analytics Dashboard for Revenue & Business Insights",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Recharts", "Framer Motion", "shadcn/ui", "Radix UI"], 
    description:
      "MetricMint is a modern analytics dashboard designed to help teams monitor revenue, customer behavior, product performance, campaigns, and reports from one clean workspace. It features KPI cards, interactive charts, filterable reports, saved views, responsive dashboard layouts, theme switching, and smooth UI animations, making it a strong data-driven frontend project with a polished SaaS-style experience.",
    demo: "https://metric-mint-beta.vercel.app/",
  },
  {
    image: "/project1.webp",
    title: "Health Care Blog",
    tech: ["Next.js", "Python", "FastAPI", "Zustand", "TanStackQuery"],
    description:
      "A comprehensive healthcare blog platform that provides users with access to a wide range of health-related articles, tips, and resources. The platform features a user-friendly interface, allowing users to easily navigate through various health topics, read articles, and stay informed about the latest developments in the healthcare industry.",
    demo: "https://primehealthcare.vercel.app/",
  },
  {
    image: "/project2.webp",
    title: "Transcriber + Translator",
    tech: ["Next.js", "Python", "Fast API", "TypeScript", "Vosk"],
    description:
      "A web application that allows users to live record, upload audio files of any format and get a transcription of the audio in text format. It also allows users to input text and generate audio from the text in any language. It also has a translation feature that allows users to translate text from one language to another.",
    demo: "https://transcribe-gray.vercel.app/",
  },
  {
    image: "/project3.webp",
    title: "Product Menu",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
    description:
      "A Product Menu that displays a list of products with their images, names, and prices. It also allows users to add products to their carts in any quantity and also remove products from their cart.",
    demo: "https://product-list-vite.vercel.app/",
  },
];
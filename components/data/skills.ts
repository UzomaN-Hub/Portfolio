import {
  Database,
  LayoutDashboard,
  Rocket,
  Server,
  Sparkles,
} from "lucide-react";

export const skillsData = [
  {
    id: "frontend",
    title: "Frontend",
    icon: LayoutDashboard,
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Framer-Motion",
      "Tailwind CSS",
      "Zustand",
      "Shadcn UI",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: [
      "Python",
      "FastAPI",
      "Redis",
      "JWT",
      "OAuth2",
      "REST APIs",
      "Authentication",
      "API Integration",
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Database Design",
      "Query Logic",
    ],
  },
  {
    id: "tools",
    title: "Tools & Deployment",
    icon: Rocket,
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Render",
      "Railway",
      "Docker",
    ],
  },
  {
    id: "professional",
    title: "Professional Skills",
    icon: Sparkles,
    skills: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Debugging",
      "Adaptability",
      "Product Thinking",
    ],
  },
];
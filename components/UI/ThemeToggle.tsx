"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const themes = [
    { value: "light", icon: Sun },
    { value: "dark", icon: Moon },
    { value: "system", icon: Monitor },
  ];

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      {themes.map((item) => {
        const Icon = item.icon;
        const active = theme === item.value;

        return (
          <button
            key={item.value}
            onClick={() => setTheme(item.value)}
            className={`rounded-full p-2 transition ${
              active
                ? "bg-cyan-500 text-white"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
            aria-label={`Switch to ${item.value} theme`}
          >
            <Icon size={16} />
          </button>
        );
      })}
    </div>
  );
}
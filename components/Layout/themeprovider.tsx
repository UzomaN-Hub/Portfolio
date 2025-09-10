"use client";

import { useState } from "react";
import Sidenav from "@/components/Layout/sidenav";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleToggleTheme = () => {
    setIsLightMode((prev) => !prev);
    // document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex min-h-screen">
      {/* Side Navigation Area */}
      <div className="flex-none md:w-72">
        <Sidenav isLightMode={isLightMode} onToggleTheme={handleToggleTheme} />
      </div>

      {/* Main page content area */}
      <div className="flex-grow overflow-y-auto">{children}</div>
    </div>
  );
}

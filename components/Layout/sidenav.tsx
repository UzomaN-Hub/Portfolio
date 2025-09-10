
"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'; 
import { playfair, poppins } from "@/app/font";
import { House, UserPen, Pill, FolderOpenDot, CircleUser, FileUser, Wrench } from "lucide-react"; // Include MoonStar, Sun if you want theme toggle here

interface SidenavProps {
  isLightMode: boolean;
  onToggleTheme: () => void;
}


export default function Sidenav({ isLightMode, onToggleTheme }: SidenavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const currentPathname = usePathname(); // Get current pathname for active link logic

  const navLinks = useMemo(() => [
    { name: "Home", href: "/#intro", id: "intro", icon: <House /> },
    { name: "About", href: "/#about", id: "about", icon: <UserPen /> },
    { name: "Education & Experience", href: "/#education-experience", id: "education-experience", icon: <Pill /> },
    { name: "Skills", href: "/#skills", id: "skills", icon: <Wrench /> },
    { name: "Projects", href: "/#projects", id: "projects", icon: <FolderOpenDot /> }
    
  ], []);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0, 
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // If an entry is intersecting and its ID matches a navLink ID, set it as active
        if (entry.isIntersecting && navLinks.some(link => link.id === entry.target.id)) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const targetElement = document.getElementById(link.id);
      if (targetElement) {
        observerRef.current?.observe(targetElement);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [navLinks]);

  const handleScroll = (id: string) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    setActiveSection(id); // Update active section immediately on click

    const element = document.getElementById(id);
    if (element) {
      // Use requestAnimationFrame for smoother scroll
      requestAnimationFrame(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };

  return (
    <>
      {/* Mobile toggle button*/}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`fixed top-4 left-4 z-[99] md:hidden p-2 rounded 
                    ${isLightMode ? 'text-soft-black bg-eggshell' : 'text-eggshell bg-soft-black'}
                    `}
      >
        {isMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Side navigation */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 p-6 z-50 md:translate-x-0
          ${isLightMode ? 'bg-oil-brown border-r-4 border-text-light-brown' : 'dark:bg-dark-eggshell border-r-4 border-gray-700'}
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          overflow-y-auto`} 
      >
        {/* Logo */}
        <div className="mb-20 mt-4"> 
          <Link
            href="/"
            className={`${playfair.className} antialiased text-4xl tracking-widest font-bold 
              ${isLightMode ? 'text-eggshell' : 'text-dark-soft-black'}
            `}
            onClick={(e) => {
                e.preventDefault();
                handleScroll('intro');
            }}
          >
            Uzoma.
          </Link>
          <p className="mt-12 text-sm text-eggshell dark:text-dark-soft-black"> 
            Software Engineer | Front-End Developer | FullStack Developer
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.id);
              }}
              // Consolidated active/hover styling for better theme integration
              className={`${poppins.className} antialiased flex mt-12 items-center gap-2 relative group text-sm
                ${isLightMode
                  ? activeSection === link.id ? 'text-yellow-300' : 'text-eggshell hover:text-yellow-300'
                  : activeSection === link.id ? 'text-amber-300' : 'text-dark-soft-black hover:text-amber-300'
                }
                transition-colors duration-300 ease-in-out
              `}
            >
              
              {link.id === activeSection && isLightMode
                ? <div className="text-yellow-300">{link.icon}</div>
                : link.id === activeSection && !isLightMode
                ? <div className="text-amber-300">{link.icon}</div>
                : isLightMode
                ? <div className="text-eggshell group-hover:text-yellow-300">{link.icon}</div>
                : <div className="text-dark-soft-black group-hover:text-amber-300">{link.icon}</div>
              }
              {link.name}
              <span className={`absolute bottom-[-0.5rem] left-0 w-full h-[2px] transform transition-transform duration-500 ease-in-out
                ${isLightMode
                  ? 'bg-yellow-300' // Light mode active/hover underline
                  : 'bg-amber-300' // Dark mode active/hover underline
                }
                ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
              `}></span>
            </Link>
          ))}
        </nav>
        <div className="mt-16 space-y-6 flex flex-col gap-1.5"> 
            <Link href="/#contact"><button className={`${poppins.className} antialiased flex items-center rounded-full gap-3 py-2.5 px-4 text-sm w-full justify-center
                ${isLightMode
                    ? 'bg-amber-50 text-oil-brown hover:bg-oil-brown hover:text-amber-50'
                    : 'bg-gray-700 text-dark-soft-black hover:bg-dark-soft-black hover:text-gray-700' // Dark mode button colors
                }
                transition-colors duration-300 ease-in-out`}>
                <CircleUser />Say Hello
            </button>
            </Link>
            <Link 
              href="/Uzoma-Nwaiwu-Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Uzoma-Nwaiwu-Resume.pdf"
            >
            <button className={`${poppins.className} antialiased flex items-center rounded-full gap-3 py-2.5 px-4 text-sm w-full justify-center
                ${isLightMode
                    ? 'bg-amber-50 text-oil-brown hover:bg-oil-brown hover:text-amber-50'
                    : 'bg-gray-700 text-dark-soft-black hover:bg-dark-soft-black hover:text-gray-700' // Dark mode button colors
                }
                transition-colors duration-300 ease-in-out`}>
                <FileUser />Download CV
            </button>
            </Link>
        </div>
      </aside>
    </>
  );
}
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
       colors: {
        
        'eggshell': '#FDFBF6',
        'soft-black': '#2B2A29',
        'oil-brown': '#734d26',

        
        'dark-eggshell': '#1A1A1A', 
        'dark-soft-black': '#E0E0E0', 
        'dark-oil-brown': '#B38B5F',
       },
      fontFamily: {
        inter: ['var(--font-inter)'],
        playfair: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
};
export default config;
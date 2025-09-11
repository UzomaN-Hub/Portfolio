import { Playfair_Display, Inter, Poppins, Space_Grotesk } from "next/font/google"; 
export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700"],
});
export const space= Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "700"],
}); 
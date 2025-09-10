import { Playfair_Display, Inter, Poppins } from "next/font/google"; 
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
})
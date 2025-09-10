
import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/font";
import ThemeProvider from "@/components/Layout/themeprovider";


export const metadata: Metadata = {
  title: "Uzoma Nwaiwu",
  description: "Software Engineer | Front-End Developer",
};

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
          <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
            
          
      
       
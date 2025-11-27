import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter } from "@/app/font";

export const metadata: Metadata = {
  title: {
    default: "Uzoma Nwaiwu | Software Engineer & FullStack Developer",
    template: "%s | Uzoma Nwaiwu"
  },
  description: "Uzoma Nwaiwu is a passionate Software Engineer and FullStack Developer specializing in React.js, Next.js, Python, Django, and FastAPI. Building modern, scalable web applications in Port Harcourt, Nigeria.",
  keywords: [
    "Uzoma Nwaiwu",
    "Software Engineer",
    "FullStack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Django Developer",
    "FastAPI",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Nigeria",
    "Port Harcourt Developer",
    "Software Engineer Nigeria"
  ],
  authors: [{ name: "Uzoma Nwaiwu" }],
  creator: "Uzoma Nwaiwu",
  publisher: "Uzoma Nwaiwu",
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uzoma-nwaiwu.vercel.app", 
    title: "Uzoma Nwaiwu | Software Engineer & FullStack Developer",
    description: "Passionate Software Engineer specializing in full-stack development with React, Next.js, Python, and Django. Building modern, scalable web applications.",
    siteName: "Uzoma Nwaiwu Portfolio",
    images: [
      {
        url: "https://uzoma-nwaiwu.vercel.app/photo.webp", 
        width: 1200,
        height: 630,
        alt: "Uzoma Nwaiwu - Software Engineer Portfolio",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Uzoma Nwaiwu | Software Engineer & FullStack Developer",
    description: "Passionate Software Engineer specializing in full-stack development with React, Next.js, Python, and Django.",
    images: ["https://uzoma-nwaiwu.vercel.app/photo.webp"], 
    creator: "@BIGUZOMA", 
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "hUh4grxjB_y0sJMA7Kx_xpxLhVQW7KxIHtFspq0Py-U",
    
  },

  // Base URL
  metadataBase: new URL("https://uzoma-nwaiwu.vercel.app"), 

  // Canonical URL
  alternates: {
    canonical: "/",
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // PWA Manifest
  manifest: "/site.webmanifest",

  // Additional metadata
  category: "technology",
};

// MOVED themeColor to viewport export (Next.js requirement)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#734d26" },
    { media: "(prefers-color-scheme: dark)", color: "#412201" }
  ],
};

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Uzoma Nwaiwu",
    jobTitle: "Software Engineer",
    description: "FullStack Developer specializing in React.js, Next.js, Python, Django, and FastAPI",
    url: "https://uzoma-nwaiwu.vercel.app", 
    image: "https://uzoma-nwaiwu.vercel.app/photo.webp",
    sameAs: [
      "https://www.linkedin.com/in/uzoma-nwaiwu",
      "https://github.com/UzomaN-Hub",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Port Harcourt",
      addressRegion: "Rivers State",
      addressCountry: "NG"
    },
    email: "uzomanwaiwu@gmail.com",
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Python",
      "Django",
      "FastAPI",
      "Full Stack Development",
      "Web Development",
      "Software Engineering",
      "RESTful APIs",
      "Database Management"
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Jenga Tech Institute",
        description: "Diploma in Software Engineering"
      },
      {
        "@type": "EducationalOrganization",
        name: "Imo State University",
        description: "Bachelor of Medical Laboratory Science"
      }
    ],
    worksFor: {
      "@type": "Organization",
      name: "Jenga Tech Institute",
      jobTitle: "Junior Software Engineer"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
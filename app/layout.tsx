import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter } from "@/app/font";

export const metadata: Metadata = {
  title: {
    default: "Uzoma Nwaiwu | Software Engineer, FullStack Developer & Senior Frontend Developer",
    template: "%s | Uzoma Nwaiwu"
  },
  description: "Uzoma Nwaiwu builds modern web applications with Next.js, React.js, Python, FastAPI, and PostgresSQL. A Software Engineer, creating scalable solutions, robust websites and applications from Port Harcourt, Nigeria.",
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
    "South Eastern Nigeria Developer",
    "Nigeria Developer",
    "Remote Software Engineer/Developer",
    "Software Engineer Nigeria",
    "Medical Lab Scientist turned Developer"
  ],
  authors: [{ name: "Uzoma Nwaiwu" }],
  creator: "Uzoma Nwaiwu",
  publisher: "Uzoma Nwaiwu",
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.uzomanwaiwu.com", 
    title: "Uzoma Nwaiwu | Software Engineer & FullStack Developer",
    description: "Building modern web applications with Next.js, React.js, Python, FastAPI, PostgresSQL. A Software Engineer specializing in scalable full-stack solutions.",
    siteName: "Uzoma Nwaiwu Portfolio",
    images: [
      {
        url: "https://www.uzomanwaiwu.com/photo.webp", 
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
    description: "Building modern web applications with React.js, Next.js, Python, and FastAPI. Medical Lab Scientist turned Software Engineer.",
    images: ["https://www.uzomanwaiwu.com/photo.webp"], 
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
    
    google: "UeKYJk81Mt0OtjEsmPveXAXGKGEi1q9Pg9yYT6hSK5M",
  },

  // Base URL - UPDATED
  metadataBase: new URL("https://www.uzomanwaiwu.com"), 

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

// Viewport config
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
  // JSON-LD Structured Data - UPDATED
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Uzoma Nwaiwu",
    jobTitle: "Software Engineer",
    description: "FullStack Developer specializing in React.js, Next.js, Python, Django, and FastAPI. Top notch expertise in building scalable web applications.",
    url: "https://www.uzomanwaiwu.com", 
    image: "https://www.uzomanwaiwu.com/photo.webp",
    sameAs: [
      "https://www.linkedin.com/in/uzoma-nwaiwu",
      "https://github.com/UzomaN-Hub",
      "https://twitter.com/BIGUZOMA"
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
      "Database Management",
      "Medical Laboratory Science"
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
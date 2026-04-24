import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-slate-950 dark:text-white">
            Uzoma Nwaiwu &copy; {new Date().getFullYear()}
          </p>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Software Engineer | Full Stack Developer | Frontend Engineer
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FooterLink href="mailto:uzomanwaiwu@gmail.com" label="Email">
            <Mail size={18} />
          </FooterLink>

          <FooterLink href="https://www.linkedin.com/in/uzoma-nwaiwu" label="LinkedIn">
            <Linkedin size={18} />
          </FooterLink>

          <FooterLink href="https://github.com/UzomaN-Hub" label="GitHub">
            <Github size={18} />
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

function FooterLink({ href, label, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-cyan-500/60 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300"
    >
      {children}
    </Link>
  );
}
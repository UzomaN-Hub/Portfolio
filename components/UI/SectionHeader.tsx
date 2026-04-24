import { playfair } from "@/app/font";

interface SectionHeaderProps {
  label: string;
  title?: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="group relative mb-12 cursor-pointer">
      <p className="mb-3 text-xl font-extrabold uppercase tracking-[0.35em] text-cyan-800 dark:text-cyan-400">
        {label}
      </p>

      <span className="absolute -bottom-3 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full bg-cyan-800 transition-transform duration-700 ease-out group-hover:scale-x-100 dark:bg-cyan-400" />

      {title && (
        <h2
          className={`${playfair.className} mt-8 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white`}
        >
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-6 max-w-4xl text-lg font-semibold leading-8 text-slate-700 sm:text-xl sm:leading-9 dark:text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}
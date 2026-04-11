import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-900 mt-20">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript,
          and Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-cyan-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

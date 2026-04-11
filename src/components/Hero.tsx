import { Link } from "react-router-dom";
import { profile } from "../data/resume";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center px-6 pt-24 overflow-hidden"
    >
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl w-full">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80 animate-fade-up">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 mr-2 align-middle shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          {profile.location} · Available for work
        </p>

        <h1
          className="mt-5 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-slate-100 animate-fade-up glow-text"
          style={{ animationDelay: "80ms" }}
        >
          {profile.name}
          <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
            {profile.title}
          </span>
        </h1>

        <p
          className="mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          {profile.tagline}
        </p>

        <div
          className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <Link
            to="/resume"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 text-slate-950 px-5 py-2.5 font-medium hover:bg-cyan-300 transition-colors shadow-[0_0_30px_rgba(34,211,238,0.3)]"
          >
            View Resume
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300 transition-all"
          >
            See Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-slate-200 hover:border-violet-400/60 hover:text-violet-300 transition-all"
          >
            Get in Touch
          </a>
        </div>

        <div
          className="mt-14 flex items-center gap-5 text-sm text-slate-500 animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300 transition-colors"
          >
            github.com/RobertMar77
          </a>
          <span className="h-4 w-px bg-slate-700" />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300 transition-colors"
          >
            LinkedIn
          </a>
          <span className="h-4 w-px bg-slate-700" />
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-cyan-300 transition-colors"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}

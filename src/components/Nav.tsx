import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { profile } from "../data/resume";

// Build the href for a section anchor so it works from any page:
// on home use `#id` for in-page scroll, elsewhere use `/#id` to nav back + scroll.
const sectionHref = (id: string, onHome: boolean) =>
  onHome ? `#${id}` : `/#${id}`;

const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  // { id: "awards", label: "Awards" }, // uncomment when Awards section is re-added to Home
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[#030712]/80 border-b border-slate-800/80" : ""
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-slate-100 hover:text-cyan-300 transition-colors"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
          {profile.name.split(" ")[0]}
          <span className="text-slate-500">.dev</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm">
          {sections.map((s) => (
            <a
              key={s.id}
              href={sectionHref(s.id, onHome)}
              className="text-slate-400 hover:text-cyan-300 transition-colors"
            >
              {s.label}
            </a>
          ))}
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `transition-colors ${isActive ? "text-cyan-300" : "text-slate-400 hover:text-cyan-300"}`
            }
          >
            Resume
          </NavLink>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-full border border-slate-700 hover:border-cyan-400/60 hover:text-cyan-300 text-slate-200 transition-all"
          >
            GitHub ↗
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-slate-300 hover:text-cyan-300 p-2"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-[#030712]/95 backdrop-blur-lg">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3 text-sm">
            {sections.map((s) => (
              <a
                key={s.id}
                href={sectionHref(s.id, onHome)}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-cyan-300"
              >
                {s.label}
              </a>
            ))}
            <Link to="/resume" className="text-slate-300 hover:text-cyan-300">
              Resume
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-cyan-300"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

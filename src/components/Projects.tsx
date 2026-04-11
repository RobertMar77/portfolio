import Section from "./Section";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="05 — Builds" title="Selected Projects">
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article
            key={p.id}
            className="glass rounded-2xl p-6 flex flex-col hover:border-cyan-400/40 transition-colors group"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-200 transition-colors">
                {p.name}
              </h3>
              <span className="text-xs text-slate-500 font-mono">{p.date}</span>
            </div>
            <p className="text-sm text-slate-400 mt-2">{p.summary}</p>

            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {p.description.map((d, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] uppercase tracking-wider rounded-md border border-slate-800 bg-slate-900/40 px-2 py-1 text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.links && p.links.length > 0 && (
              <div className="mt-5 pt-4 border-t border-slate-800 flex gap-4">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

import Section from "./Section";
import { skillGroups } from "../data/resume";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="03 — Toolkit" title="Skills & Technologies">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="glass rounded-2xl p-6 hover:border-cyan-400/40 transition-colors group"
          >
            <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-4 group-hover:text-cyan-300 transition-colors">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-xs rounded-md border border-slate-800 bg-slate-900/40 px-2.5 py-1.5 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-200 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

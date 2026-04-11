import Section from "./Section";
import { education } from "../data/resume";

const levelLabel: Record<"college" | "high-school", string> = {
  college: "University",
  "high-school": "High School",
};

export default function Education() {
  return (
    <Section id="education" eyebrow="02 — Learning" title="Education">
      <div className="grid md:grid-cols-2 gap-5">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="glass rounded-2xl p-6 hover:border-cyan-400/40 transition-colors"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">
              {levelLabel[edu.level]}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-100">
              {edu.school}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {edu.location} · {edu.dates}
            </p>

            <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
              {edu.degrees.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            {edu.gpa && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300">
                GPA · {edu.gpa}
              </div>
            )}

            {edu.notes && edu.notes.length > 0 && (
              <ul className="mt-4 space-y-1 text-xs text-slate-500 italic">
                {edu.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

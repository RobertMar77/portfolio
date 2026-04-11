import Section from "./Section";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="04 — Journey" title="Experience">
      <ol className="relative border-l border-slate-800 pl-8 space-y-10">
        {experience.map((job) => (
          <li key={job.company + job.dates} className="relative">
            <span
              className={`absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 ${
                job.tech
                  ? "bg-cyan-400 border-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]"
                  : "bg-slate-950 border-slate-600"
              }`}
            />
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {job.role}{" "}
                    <span className="text-cyan-300 font-normal">· {job.company}</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{job.location}</p>
                </div>
                <p className="text-xs text-slate-400 font-mono">{job.dates}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

import Section from "./Section";
import { about } from "../data/resume";

export default function About() {
  return (
    <Section id="about" eyebrow="01 — Background" title="About Me">
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 items-start">
        <div className="space-y-5 text-slate-300 leading-relaxed">
          {about.long.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <aside className="glass rounded-2xl p-6">
          <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-4">
            Quick Facts
          </h3>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wider text-cyan-300/80">
                Current Role
              </dt>
              <dd className="text-slate-200 mt-0.5">Junior Software Developer @ Humungus</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-cyan-300/80">
                Focus
              </dt>
              <dd className="text-slate-200 mt-0.5">Full-stack · Java + TypeScript · AWS</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-cyan-300/80">
                Based In
              </dt>
              <dd className="text-slate-200 mt-0.5">Rochester, WA · Remote-friendly</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-cyan-300/80">
                Open To
              </dt>
              <dd className="text-slate-200 mt-0.5">Junior / mid software roles</dd>
            </div>
          </dl>
        </aside>
      </div>
    </Section>
  );
}

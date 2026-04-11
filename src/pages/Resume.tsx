import { profile, skillGroups, experience, education, projects, awards } from "../data/resume";

export default function Resume() {
  return (
    <main className="px-6 pt-28 pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-start justify-between gap-5 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80 font-medium">
              Resume
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-100">
              {profile.name}
            </h1>
            <p className="mt-2 text-slate-400">
              {profile.title} · {profile.location}
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={profile.resumePdf}
              download="Robert_Marti_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 text-slate-950 px-5 py-2.5 font-medium hover:bg-cyan-300 transition-colors shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              ⬇ Download PDF
            </a>
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300 transition-all"
            >
              Open in new tab ↗
            </a>
          </div>
        </div>

        {/* PDF embed */}
        <div className="glass rounded-2xl overflow-hidden mb-16 mx-auto max-w-3xl">
          <iframe
            title="Robert Marti Resume PDF"
            src={profile.resumePdf}
            className="w-full h-[55vh] bg-slate-950"
          />
        </div>

        {/* Structured HTML version — good for SEO and accessibility */}
        <div className="space-y-12">
          <section>
            <h2 className="text-sm uppercase tracking-widest text-slate-400 mb-4">
              Contact
            </h2>
            <div className="glass rounded-2xl p-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-cyan-300 transition-colors"
              >
                ✉ {profile.email}
              </a>
              <span>☏ {profile.phone}</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300 transition-colors"
              >
                gh github.com/RobertMar77
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300 transition-colors"
              >
                in LinkedIn
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest text-slate-400 mb-4">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((e) => (
                <div key={e.school} className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-slate-100">{e.school}</h3>
                    <p className="text-xs text-slate-500 font-mono">{e.dates}</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{e.location}</p>
                  <ul className="mt-3 space-y-1 text-sm text-slate-300">
                    {e.degrees.map((d) => (
                      <li key={d}>▸ {d}</li>
                    ))}
                  </ul>
                  {e.gpa && (
                    <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300">
                      GPA · {e.gpa}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {awards.length > 0 && (
            <section>
              <h2 className="text-sm uppercase tracking-widest text-slate-400 mb-4">
                Awards & Honors
              </h2>
              <div className="space-y-3">
                {awards.map((a) => (
                  <div key={a.name + a.date} className="glass rounded-2xl p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-semibold text-slate-100">{a.name}</h3>
                      <p className="text-xs text-slate-500 font-mono">{a.date}</p>
                    </div>
                    <p className="text-xs text-cyan-300/80 mt-0.5">{a.issuer}</p>
                    {a.description && (
                      <p className="mt-2 text-sm text-slate-300">{a.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-sm uppercase tracking-widest text-slate-400 mb-4">
              Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {skillGroups.map((g) => (
                <div key={g.label} className="glass rounded-2xl p-5">
                  <p className="text-xs uppercase tracking-wider text-cyan-300/80 mb-2">
                    {g.label}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {g.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest text-slate-400 mb-4">
              Experience
            </h2>
            <div className="space-y-3">
              {experience.map((job) => (
                <div key={job.company + job.dates} className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-slate-100">
                      {job.role}{" "}
                      <span className="text-cyan-300 font-normal">· {job.company}</span>
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">{job.dates}</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{job.location}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-cyan-400 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest text-slate-400 mb-4">
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((p) => (
                <div key={p.id} className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-slate-100">{p.name}</h3>
                    <p className="text-xs text-slate-500 font-mono">{p.date}</p>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">{p.summary}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                    {p.description.map((d, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-cyan-400 shrink-0">▸</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  {p.links && (
                    <div className="mt-3 flex gap-4 text-sm">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-cyan-300 hover:text-cyan-200"
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

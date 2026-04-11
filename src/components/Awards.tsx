import Section from "./Section";
import { awards } from "../data/resume";

export default function Awards() {
  if (awards.length === 0) {
    return (
      <Section id="awards" eyebrow="06 — Recognition" title="Awards & Honors">
        <div className="glass rounded-2xl p-8 text-center text-slate-500 text-sm">
          Awards coming soon.
        </div>
      </Section>
    );
  }

  return (
    <Section id="awards" eyebrow="06 — Recognition" title="Awards & Honors">
      <div className="grid md:grid-cols-2 gap-5">
        {awards.map((a) => (
          <div
            key={a.name + a.date}
            className="glass rounded-2xl p-6 hover:border-cyan-400/40 transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div
                aria-hidden
                className="shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-400/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-lg shadow-[0_0_24px_rgba(34,211,238,0.15)]"
              >
                ★
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-cyan-200 transition-colors">
                    {a.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">{a.date}</p>
                </div>
                <p className="text-xs text-cyan-300/80 mt-0.5">{a.issuer}</p>
                {a.description && (
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {a.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

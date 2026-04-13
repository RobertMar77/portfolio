import { Link } from "react-router-dom";
import { profile } from "../data/resume";

export default function Resume() {
  return (
    <main className="px-6 pt-28 pb-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-start justify-between gap-5 mb-8">
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
          <div className="flex flex-wrap gap-3">
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

        <div className="glass rounded-2xl overflow-hidden">
          <iframe
            title="Robert Marti Resume PDF"
            src={profile.resumePdf}
            className="w-full h-[85vh] bg-slate-950"
          />
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Looking for the full portfolio?{" "}
          <Link to="/" className="text-cyan-300 hover:text-cyan-200 transition-colors">
            Head back to the home page
          </Link>
          .
        </p>
      </div>
    </main>
  );
}

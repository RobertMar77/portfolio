import { useState } from "react";
import Section from "./Section";
import { api, DEMO_MODE } from "../api/client";
import { profile } from "../data/resume";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const linkedinHandle = profile.linkedin.replace(/^https?:\/\/(www\.)?/, "");
const githubHandle = profile.github.replace(/^https?:\/\/(www\.)?/, "");

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "ok"; message: string; demo?: boolean }
  | { kind: "error"; message: string };

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ kind: "sending" });
    try {
      const res = await api.submitContact({ name, email, message });
      setStatus({ kind: "ok", message: res.message, demo: res.demo });
      if (!res.demo) {
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Something went wrong.",
      });
    }
  }

  // eyebrow was "07 — Say Hi"; change back to 07 when Awards is re-added
  return (
    <Section id="contact" eyebrow="06 — Say Hi" title="Get in Touch">
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-5">
          <p className="text-slate-300 leading-relaxed">
            Open to junior and mid-level software roles — full-stack, backend, or
            frontend. The fastest way to reach me is email or LinkedIn.
          </p>
          <div className="space-y-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <MailIcon className="text-cyan-400 shrink-0" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-cyan-300 transition-colors break-all"
            >
              <LinkedinIcon className="text-cyan-400 shrink-0" />
              {linkedinHandle}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-cyan-300 transition-colors"
            >
              <GithubIcon className="text-cyan-400 shrink-0" />
              {githubHandle}
            </a>
          </div>
          {DEMO_MODE && (
            <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 text-xs text-amber-200/90">
              <strong className="font-semibold">Demo mode:</strong> the contact form
              is frontend-only for now. Submissions won't actually send — please use
              email or LinkedIn. The backend will be wired up in Phase 2.
            </div>
          )}
        </div>

        <form
          onSubmit={onSubmit}
          className="glass rounded-2xl p-6 space-y-4"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-slate-400">
                Name
              </span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-800 px-3 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-colors"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-slate-400">
                Email
              </span>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-800 px-3 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-colors"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-slate-400">
              Message
            </span>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-lg bg-slate-900/60 border border-slate-800 px-3 py-2.5 text-slate-100 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-colors resize-none"
              placeholder="Tell me about your project or role..."
            />
          </label>

          <button
            type="submit"
            disabled={status.kind === "sending"}
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 text-slate-950 px-5 py-2.5 font-medium hover:bg-cyan-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          >
            {status.kind === "sending" ? "Sending..." : "Send Message"}
            {status.kind !== "sending" && (
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            )}
          </button>

          {status.kind === "ok" && (
            <p
              className={`text-sm rounded-lg p-3 ${
                status.demo
                  ? "bg-amber-400/10 border border-amber-400/30 text-amber-200"
                  : "bg-emerald-400/10 border border-emerald-400/30 text-emerald-200"
              }`}
            >
              {status.message}
            </p>
          )}
          {status.kind === "error" && (
            <p className="text-sm rounded-lg bg-rose-400/10 border border-rose-400/30 text-rose-200 p-3">
              {status.message}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

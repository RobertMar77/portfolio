import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="relative px-6 py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80 font-medium">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">
            {title}
          </h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>
        {children}
      </div>
    </section>
  );
}

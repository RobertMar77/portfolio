import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
// import Awards from "../components/Awards"; // TODO: uncomment once more awards are filled in
import Contact from "../components/Contact";

export default function Home() {
  const { hash } = useLocation();

  // When landing on / with a #section hash (e.g. coming from /resume),
  // React has just mounted the sections so the browser's native anchor
  // scroll fires before the element exists. Scroll manually once we're in.
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (!el) return;
    const t = setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      {/* <Awards /> */}
      <Contact />
    </main>
  );
}

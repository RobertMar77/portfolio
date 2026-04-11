import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Awards from "../components/Awards";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Contact />
    </main>
  );
}

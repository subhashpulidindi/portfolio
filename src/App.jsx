import { useEffect } from "react";
import { revealOnScroll } from "./scrollreveal";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/certifications";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    revealOnScroll();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
    </>
  );
}


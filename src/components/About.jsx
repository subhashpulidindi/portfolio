import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Who I Am",
    text: "I’m Pavan Subhash Pulidindi, an Electrical & Electronics Engineering undergraduate who loves transforming complex ideas into intelligent, scalable software solutions."
  },
  {
    title: "Engineering + Software",
    text: "My journey blends strong engineering fundamentals with modern software development, focusing on clarity, performance, and real-world problem solving."
  },
  {
    title: "AI & NLP Focus",
    text: "I’ve built AI-driven applications using Transformers, DistilBERT, spaCy, and NLTK — working on NLP, automation, and intelligent systems."
  },
  {
    title: "Growth Mindset",
    text: "I continuously learn, experiment, and push my limits to build meaningful, future-ready technology."
  }
];

export default function About() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const goTo = (i) => {
    trackRef.current.scrollTo({
      left: i * window.innerWidth,
      behavior: "smooth"
    });
    setIndex(i);
  };

  /* AUTO SCROLL */
  useEffect(() => {
    if (hover) return;

    const interval = setInterval(() => {
      if (index === slides.length - 1) {
        // reset smoothly
        trackRef.current.scrollTo({ left: 0, behavior: "auto" });
        setIndex(0);
      } else {
        goTo(index + 1);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [index, hover]);

  return (
    <section id="about" className="about-experience">

      {/* Background glow */}
      <div className="about-glow"></div>

      <h2 className="section-title">About Me</h2>

      {/* Timeline dots */}
      <div className="about-timeline">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => goTo(i)}
            className={i === index ? "active" : ""}
          />
        ))}
      </div>

      {/* Scrollable story */}
      <div
        className="about-track"
        ref={trackRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {slides.map((slide, i) => (
          <motion.div
            className="about-slide"
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="about-card">
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="about-stats">
        <Stat value={12} label="Projects Built" />
        <Stat value={15} label="Certifications" />
        <Stat value={20} label="Technologies Used" />
      </div>

      <div className="about-hint">AUTO SCROLLING →</div>
    </section>
  );
}

/* Stat component */
function Stat({ value, label }) {
  return (
    <motion.div
      className="about-stat"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span>{value}+</span>
      <p>{label}</p>
    </motion.div>
  );
}

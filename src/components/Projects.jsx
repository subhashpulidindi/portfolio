import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import p1 from "../assets/projects/project1.png";
import p2 from "../assets/projects/project2.png";
import p3 from "../assets/projects/project3.png";

const projects = [
  {
    title: "AI Text Generator",
    desc: "Sentiment-aware AI text generator using NLP & Transformers.",
    image: p1,
    tech: ["Python", "NLP", "Transformers"],
  },
  {
    title: "To Do List",
    desc: "Task management app with saving and notifications.",
    image: p3,
    tech: ["Python", "Flask", "NumPy"],
  },
  {
    title: "Django E-Commerce",
    desc: "Full-stack e-commerce platform with payments & admin panel.",
    image: p2,
    tech: ["Django", "SQL", "Razorpay"],
  },
];

export default function Projects() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const goTo = (i) => {
    trackRef.current.scrollTo({
      left: i * window.innerWidth,
      behavior: "smooth",
    });
    setIndex(i);
  };

  useEffect(() => {
    if (hover) return;

    const timer = setInterval(() => {
      if (index === projects.length - 1) {
        // 🔁 RESET
        trackRef.current.scrollTo({ left: 0, behavior: "auto" });
        setIndex(0);
      } else {
        goTo(index + 1);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [index, hover]);

  return (
    <section id="projects" className="projects-one-section">
      <h2 className="section-title">Projects</h2>

      <button className="proj-arrow left" onClick={() => goTo(index - 1 < 0 ? projects.length - 1 : index - 1)}>‹</button>
      <button className="proj-arrow right" onClick={() => goTo((index + 1) % projects.length)}>›</button>

      <div
        className="projects-one-track"
        ref={trackRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {projects.map((p, i) => (
          <motion.div key={i} className="project-one-slide">
            <div className="project-one-img">
              <img src={p.image} alt={p.title} />
              <div className="project-one-overlay">
                <p>{p.desc}</p>
              </div>
            </div>
            <h3>{p.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

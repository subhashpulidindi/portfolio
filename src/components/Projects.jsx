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
    title: "To do list",
    desc: "making lists for user and saving and intimation.",
    image: p3,
    tech: ["Python", "flasks", "numpy"],
  },
  {
    title: "Django E-Commerce",
    desc: "Full-stack e-commerce platform with payments & admin panel.",
    image: p2,
    tech: ["Django", "SQL", "Razorpay"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>PROJECTS</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            whileHover={{ y: -12, scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <div className="project-img">
              <img src={p.image} alt={p.title} />
              <div className="project-overlay">
                <p>{p.desc}</p>
              </div>
            </div>

            <h3>{p.title}</h3>

            <div className="project-tech">
              {p.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

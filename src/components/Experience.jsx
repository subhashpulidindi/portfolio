import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    date: "May 2024 – Jun 2024    click me",
    title: "AP TRANSCO, Gajuwaka",
    details:
      "Worked on substation maintenance, fault analysis, relay testing, and real-time electrical equipment inspection. Gained hands-on exposure to power systems operations and safety protocols."
  },
  {
    date: "Jun 2025 – Jul 2025     click me",
    title: "RINL Steel Plant, Visakhapatnam",
    details:
      "Worked on power transformer maintenance, industrial automation systems, and large-scale electrical infrastructure. Learned about heavy industrial operations and control systems."
  },
  {
    date: "sep 2025    click me",
    title: "Software & AI Intern",
    details:
      "Worked on Python automation, machine learning models, and NLP-based applications using Transformers, DistilBERT, spaCy, and NLTK. Focused on scalable and real-world software solutions."
  }
];

export default function Experience() {
  const [active, setActive] = useState(null);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section id="experience" className="experience-toggle-section">
      <h2 className="section-title">Experience</h2>

      <div className="experience-timeline">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`experience-item ${active === i ? "active" : ""}`}
          >
            {/* Timeline dot */}
            <span className="timeline-dot" />

            {/* Card */}
            <motion.div
              className="experience-card"
              layout
              onClick={() => toggle(i)}
            >
              <div className="experience-header">
                <span className="experience-date">{exp.date}</span>
                <h3>{exp.title}</h3>
              </div>

              <AnimatePresence>
                {active === i && (
                  <motion.p
                    className="experience-details"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    {exp.details}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

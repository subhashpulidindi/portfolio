import { motion } from "framer-motion";

const experiences = [
  {
    role: "AP TRANSCO GAJUWAKA",
    period: "MAY2024-JUN2024",
    description:
      "Worked on Substation maintenance and fault analysis on equipment",
  },
  {
    role: "RINL STEEL PLANT VISAKHAPATNAM",
    period: "JUN2025 – JUL2024",
    description:
      "Worked on power transformer maintenance and industrial automation.",
  },
  {
    role: "FINCH SOLAR POWER",
    period: "DEC2025 – MAR2026",
    description:
      "Worked on SOLAR power pannels and industrial automation equipment.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">EXPERIENCE</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-period">{exp.period}</span>
              <h3>{exp.role}</h3>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

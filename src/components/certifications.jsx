import { motion } from "framer-motion";

const certifications = [
  "Python Programming – Coursera",
  "Machine Learning Fundamentals – Coursera",
  "Deep Learning Basics – Coursera",
  "NLP with Python – Coursera",
  "Django Web Development – Udemy",
  "Full Stack Web Development – Udemy",
  "SQL & Database Design – Udemy",
  "Data Structures & Algorithms – Udemy",
  "AI for Everyone – Coursera",
  "Cloud Computing Basics – NPTEL",
  "Cyber Security Fundamentals – NPTEL",
  "Problem Solving Using Python – HackerRank",
  "JavaScript Essentials – HackerRank",
  "Git & GitHub – Udemy",
  "Linux Basics – Udemy",
  "Soft Skills & Communication – TCS iON",
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <span className="cert-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p>{cert}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import avatar from "../assets/avatar.png";

export default function Hero() {
  return (
    <section id="home" className="hero-ultimate hero-split">

      {/* Background glow */}
      <div className="hero-glow"></div>

      <div className="hero-container">

        {/* ================= LEFT: TEXT ================= */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="hero-badge">🚀 Aspiring Software Engineer</span>

          <h1>
            Hi, I’m <span>Subhash</span>
          </h1>

          <h2>
            Electrical & Electronics Engineer <br />
            <span className="highlight">
              Passionate about Software Development & AI
            </span>
          </h2>

          <p>
            I design and develop <strong>intelligent software systems </strong>
            and <strong>modern, user-focused web applications</strong>.
            My background in engineering helps me approach problems
            logically, efficiently, and at scale.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn primary">
              View My Projects
            </a>

            {/* View Resume */}
            <a
              href="http://localhost:5173/resumeprof2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn secondary"
            >
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href="/resumeprof2.pdf"
              download
              className="hero-btn ghost"
            >
              Download PDF
            </a>
          </div>
        </motion.div>

        {/* ================= RIGHT: AVATAR ================= */}
        <motion.div
          className="hero-avatar-large"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <img
            src={avatar}
            alt="Subhash – Software Developer"
            draggable="false"
          />
        </motion.div>

      </div>

      {/* Scroll hint */}
      <div className="scroll-indicator">SCROLL</div>
    </section>
  );
}

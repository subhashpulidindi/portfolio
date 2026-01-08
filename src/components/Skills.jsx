import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Python", level: 90, icon: "🐍" },
  { name: "JavaScript", level: 80, icon: "⚡" },
  { name: "HTML", level: 85, icon: "📄" },
  { name: "CSS", level: 80, icon: "🎨" },
  { name: "SQL", level: 75, icon: "🗄️" },
  { name: "Django", level: 85, icon: "🚀" },
  { name: "Streamlit", level: 70, icon: "📊" },
  { name: "Transformers", level: 75, icon: "🤖" },
  { name: "DistilBERT", level: 70, icon: "🧠" },
  { name: "spaCy", level: 65, icon: "🔍" },
  { name: "NLTK", level: 65, icon: "📚" },
];

export default function Skills() {
  const trackRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  const scroll = (dir) => {
    const card = trackRef.current.firstChild;
    trackRef.current.scrollBy({
      left: dir * card.offsetWidth * 3,
      behavior: "smooth",
    });
  };

  /* AUTO SCROLL */
  useEffect(() => {
    if (hovering) return;
    const interval = setInterval(() => scroll(1), 3000);
    return () => clearInterval(interval);
  }, [hovering]);

  return (
    <section id="skills" className="skills-scroll-section">

      {/* ===== HEADER ===== */}
      <div className="skills-header">
        <div className="skills-accent accent-1"></div>
        <div className="skills-accent accent-2"></div>

        <span className="skills-eyebrow">What I Work With</span>
        <h2 className="skills-title"><span>My</span> Skills</h2>
        <div className="skills-divider"><span /></div>
        <p className="skills-subtitle">
          Technologies and tools I use to build intelligent, scalable and
          visually impressive software solutions.
        </p>
      </div>

      {/* ===== ARROWS ===== */}
      <button className="skills-arrow left" onClick={() => scroll(-1)}>‹</button>
      <button className="skills-arrow right" onClick={() => scroll(1)}>›</button>

      {/* ===== SCROLL TRACK ===== */}
      <div
        className="skills-scroll-track"
        ref={trackRef}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {skills.map((skill) => (
          <div className="skill-card-3d" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>
            <h4>{skill.name}</h4>

            <div className="skill-bar">
              <span style={{ width: `${skill.level}%` }} />
            </div>

            <small>{skill.level}% proficiency</small>
          </div>
        ))}
      </div>
    </section>
  );
}

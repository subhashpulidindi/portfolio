export default function Skills() {
  const skills = [
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "Django",
    "Streamlit",
    "Transformers",
    "DistilBERT",
    "spaCy",
    "NLTK"
  ];

  return (
    <section id="skills">
      <h2>SKILLS</h2>
      <p className="skills-subtitle">
        Technologies and tools I work with to build intelligent and scalable solutions
      </p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

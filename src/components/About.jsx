export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">

        {/* LEFT: STORY */}
        <div className="about-content">
          <h2>About Me</h2>

          <p className="about-intro">
            I’m <span>Pavan Subhash Pulidindi</span>, an Electrical and Electronics
            Engineering undergraduate who enjoys transforming complex ideas
            into intelligent, scalable software solutions.
          </p>

          <p>
            My journey bridges <strong>engineering fundamentals</strong> and
            <strong> modern software development</strong>, with hands-on
            experience in Python, Django, Machine Learning, and NLP.
          </p>

          <p>
            I’ve worked on AI-driven applications using Transformers,
            DistilBERT, spaCy, and NLTK, along with industry exposure in
            power systems, solar energy, and enterprise environments.
          </p>
        </div>

        {/* RIGHT: HIGHLIGHTS */}
        <div className="about-cards">
          <div className="about-card">
            <h3>Engineering Mindset</h3>
            <p>
              Strong foundation in problem-solving, systems thinking,
              and real-world engineering applications.
            </p>
          </div>

          <div className="about-card">
            <h3>AI & Software</h3>
            <p>
              Passionate about AI, NLP, and full-stack development using
              Python and Django.
            </p>
          </div>

          <div className="about-card">
            <h3>Growth Driven</h3>
            <p>
              Continuously learning, experimenting, and building
              meaningful tech solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

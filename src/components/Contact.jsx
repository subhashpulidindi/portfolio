export default function Contact() {
  return (
    <section id="contact">
      <h2>Let’s Connect</h2>
      <p className="contact-subtitle">
        Have an idea, opportunity, or collaboration in mind?  
        I’d love to hear from you.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>

        <textarea placeholder="Your Message" rows="5"></textarea>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>

      <div className="contact-socials">
        <a href="https://github.com/subhashpulidindi" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/subhash-pulidindi-7672a9378/" target="_blank">LinkedIn</a>
        <a href="mailto:subhashpulidindi6@gmail.com">Email</a>
        <a href="https://www.instagram.com/subhassshhhh/">instagram</a>
      </div>
    </section>
  );
}

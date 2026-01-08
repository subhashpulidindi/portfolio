import { useRef, useState, useEffect } from "react";

import c1 from "../assets/certifications/cert1.png";
import c2 from "../assets/certifications/cert2.png";
import c3 from "../assets/certifications/cert3.png";
import c4 from "../assets/certifications/cert4.png";
import c5 from "../assets/certifications/cert5.png";
import c6 from "../assets/certifications/cert6.png";
import c7 from "../assets/certifications/cert7.png";
import c8 from "../assets/certifications/cert8.png";
import c9 from "../assets/certifications/cert9.png";
import c10 from "../assets/certifications/cert10.png";
import c11 from "../assets/certifications/cert11.png";
import c12 from "../assets/certifications/cert12.png";
import c13 from "../assets/certifications/cert13.png";
import c14 from "../assets/certifications/cert14.png";
import c15 from "../assets/certifications/cert15.png";

const certs = [
  c1,c2,c3,c4,c5,
  c6,c7,c8,c9,c10,
  c11,c12,c13,c14,c15
];

export default function Certifications() {
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
      if (index === certs.length - 1) {
        // 🔁 RESET TO START
        trackRef.current.scrollTo({ left: 0, behavior: "auto" });
        setIndex(0);
      } else {
        goTo(index + 1);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [index, hover]);

  return (
    <section id="certifications" className="cert-clean">
      <h2 className="section-title">Certifications</h2>

      <button className="cert-arrow left" onClick={() => goTo(index - 1 < 0 ? certs.length - 1 : index - 1)}>‹</button>
      <button className="cert-arrow right" onClick={() => goTo((index + 1) % certs.length)}>›</button>

      <div
        className="cert-track-clean"
        ref={trackRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {certs.map((img, i) => (
          <div className="cert-slide-clean" key={i}>
            <img src={img} alt={`Certificate ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

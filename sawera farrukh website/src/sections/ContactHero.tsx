import { useEffect, useRef } from "react";
import { contactConfig } from "../config";

export default function ContactHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(".scroll-reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0a0a0a",
        paddingTop: 140,
        paddingBottom: 48,
      }}
    >
      <div className="container-main text-center">
        <div className="scroll-reveal">
          <span className="section-label">{contactConfig.sectionLabel}</span>
          <h1
            style={{
              fontFamily: "'GeistMono', monospace",
              fontWeight: 400,
              fontSize: "clamp(36px, 4vw, 64px)",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              color: "#ffffff",
              marginTop: 16,
              marginBottom: 16,
            }}
          >
            Let's{" "}
            <span style={{ color: "#c8aa82" }}>{contactConfig.headingAccent}</span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              lineHeight: 1.6,
              color: "#a1a1aa",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            {contactConfig.subtext}
          </p>
        </div>
      </div>
    </section>
  );
}

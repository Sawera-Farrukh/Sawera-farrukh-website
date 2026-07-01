import { useEffect, useRef } from "react";
import { Bot, Zap, Rocket } from "lucide-react";
import { aboutConfig } from "../config";

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot size={24} style={{ color: "#c8aa82" }} />,
  Zap: <Zap size={24} style={{ color: "#c8aa82" }} />,
  Rocket: <Rocket size={24} style={{ color: "#c8aa82" }} />,
};

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="section-padding"
      style={{ background: "#0a0a0a" }}

    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div className="scroll-reveal">
            <span className="section-label">{aboutConfig.sectionLabel}</span>
            <h2 className="section-heading mt-4 mb-8">
              {aboutConfig.heading}{" "}
              <span style={{ color: "#c8aa82" }}>{aboutConfig.headingAccent}</span>
            </h2>
            {aboutConfig.bio.map((paragraph, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "#a1a1aa",
                  marginBottom: 16,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Column - Specialty Cards */}
          <div className="flex flex-col gap-4">
            {aboutConfig.specialties.map((specialty, i) => (
              <div
                key={i}
                className="scroll-reveal card-hover"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16,
                  padding: 20,
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(200, 170, 130, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {iconMap[specialty.icon]}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'GeistMono', monospace",
                        fontSize: 16,
                        fontWeight: 400,
                        color: "#ffffff",
                        marginBottom: 6,
                      }}
                    >
                      {specialty.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 14,
                        lineHeight: 1.5,
                        color: "#71717a",
                      }}
                    >
                      {specialty.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

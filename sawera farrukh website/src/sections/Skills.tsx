import { useEffect, useRef } from "react";
import { Brain, Code2, Server, Wrench } from "lucide-react";
import { skillsConfig } from "../config";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={32} style={{ color: "#c8aa82" }} />,
  Code2: <Code2 size={32} style={{ color: "#c8aa82" }} />,
  Server: <Server size={32} style={{ color: "#c8aa82" }} />,
  Wrench: <Wrench size={32} style={{ color: "#c8aa82" }} />,
};

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="section-padding"
      style={{ background: "#0a0a0a" }}
    >
      <div className="container-main">
        <div className="scroll-reveal mb-12">
          <span className="section-label">{skillsConfig.sectionLabel}</span>
          <h2 className="section-heading mt-4">
            {skillsConfig.heading}{" "}
            <span style={{ color: "#c8aa82" }}>{skillsConfig.headingAccent}</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: "#a1a1aa",
              marginTop: 16,
              maxWidth: 600,
            }}
          >
            {skillsConfig.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsConfig.skills.map((skill, i) => (
            <div
              key={i}
              className="scroll-reveal card-hover"
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: 32,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="mb-4">{iconMap[skill.icon]}</div>
              <h3
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#ffffff",
                  marginBottom: 8,
                }}
              >
                {skill.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "#a1a1aa",
                  marginBottom: 16,
                }}
              >
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 11,
                      color: "#71717a",
                      background: "#1a1a1a",
                      borderRadius: 6,
                      padding: "4px 10px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

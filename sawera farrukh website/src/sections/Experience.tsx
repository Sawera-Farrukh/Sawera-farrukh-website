import { useEffect, useRef } from "react";
import { experienceConfig } from "../config";

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="section-padding"
      style={{ background: "#0a0a0a" }}
    >
      <div className="container-main">
        <div className="scroll-reveal mb-12">
          <span className="section-label">{experienceConfig.sectionLabel}</span>
          <h2 className="section-heading mt-4">
            My{" "}
            <span style={{ color: "#c8aa82" }}>{experienceConfig.headingAccent}</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative" style={{ paddingLeft: 32 }}>
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0"
            style={{
              width: 2,
              background: "rgba(200, 170, 130, 0.2)",
            }}
          />

          <div className="flex flex-col gap-8">
            {experienceConfig.items.map((item, i) => (
              <div
                key={i}
                className="scroll-reveal relative"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute timeline-dot"
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#c8aa82",
                    left: -36,
                    top: 24,
                  }}
                />

                {/* Card */}
                <div
                  className="card-hover"
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 12,
                      color: "#c8aa82",
                      letterSpacing: 1,
                    }}
                  >
                    {item.period}
                  </span>
                  <h3
                    className="mt-2"
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 18,
                      fontWeight: 400,
                      color: "#ffffff",
                      marginBottom: 4,
                    }}
                  >
                    {item.role}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      color: "#71717a",
                      marginBottom: 8,
                    }}
                  >
                    {item.company}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "#a1a1aa",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

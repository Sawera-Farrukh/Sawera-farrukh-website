import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects, projectCategories } from "../config";

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
      { threshold: 0.05 }
    );

    const els = gridRef.current?.querySelectorAll(".scroll-reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <>
      {/* Filter Bar */}
      <div
        className="sticky z-30"
        style={{
          top: 80,
          background: "rgba(10, 10, 10, 0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "16px 5vw",
        }}
      >
        <div className="container-main" style={{ padding: 0 }}>
          <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="transition-all duration-300"
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 12,
                  padding: "8px 16px",
                  borderRadius: 9999,
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  background:
                    activeFilter === cat
                      ? "linear-gradient(135deg, #c8aa82 0%, #a08060 100%)"
                      : "#111111",
                  color: activeFilter === cat ? "#0a0a0a" : "#a1a1aa",
                  borderWidth: activeFilter === cat ? 0 : 1,
                  borderStyle: "solid",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div
        ref={gridRef}
        className="container-main"
        style={{ paddingTop: 48, paddingBottom: 120 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <div
              key={project.id}
              className="scroll-reveal card-hover flex flex-col"
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                overflow: "hidden",
                transitionDelay: `${i * 80}ms`,
                height: "100%",
              }}
            >
              {/* Image */}
              {/* <div
                style={{
                  position: "relative",
                  aspectRatio: "16/10",
                  overflow: "hidden",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: "rgba(10,10,10,0.8)",
                    border: "1px solid rgba(200,170,130,0.3)",
                    borderRadius: 6,
                    padding: "4px 10px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: 10,
                      letterSpacing: 1,
                      color: "#c8aa82",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div> */}


              {/* Media - Image or Video */}
<div
  style={{
    position: "relative",
    aspectRatio: "16/10",
    overflow: "hidden",
    background: "#0a0a0a",
  }}
>
  {project.video ? (
    <video
      src={project.video}
      autoPlay
      muted
      loop
      playsInline
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",     // Changed from "cover"
        background: "#0a0a0a",
      }}
    />
  ) : (
    <img
      src={project.image}
      alt={project.title}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      loading="lazy"
    />
  )}

  {/* Category Badge */}
  <div
    style={{
      position: "absolute",
      top: 12,
      left: 12,
      background: "rgba(10,10,10,0.8)",
      border: "1px solid rgba(200,170,130,0.3)",
      borderRadius: 6,
      padding: "4px 10px",
    }}
  >
    <span
      style={{
        fontFamily: "'GeistMono', monospace",
        fontSize: 10,
        letterSpacing: 1,
        color: "#c8aa82",
        textTransform: "uppercase",
      }}
    >
      {project.category}
    </span>
  </div>
</div>




              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#ffffff",
                    marginBottom: 8,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "#a1a1aa",
                    marginBottom: 12,
                    flex: 1,
                  }}
                >
                  {project.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'GeistMono', monospace",
                        fontSize: 10,
                        color: "#71717a",
                        background: "#1a1a1a",
                        borderRadius: 6,
                        padding: "3px 8px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      style={{ padding: "8px 14px", fontSize: 12 }}
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      style={{ padding: "8px 14px", fontSize: 12 }}
                    >
                      <ExternalLink size={14} />
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import { featuredProjects } from "../config";
import type { Project } from "../config";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="scroll-reveal card-hover flex flex-col"
      style={{
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 16,
        overflow: "hidden",
        transitionDelay: `${index * 100}ms`,
        height: "100%",
      }}
    >
      {/* Image */}
      {/* <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
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

      
          {/* Media: Video or Image */}
      <div 
        style={{ 
          position: "relative", 
          aspectRatio: "16/10", 
          overflow: "hidden", 
          background: "#0a0a0a" 
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
              objectFit: "contain",
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
  );
}

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

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

    const els = sectionRef.current?.querySelectorAll(".scroll-reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="featured-projects"
      ref={sectionRef}
      className="section-padding"
      style={{ background: "#0a0a0a" }}
    >
      <div className="container-main">
        <div className="scroll-reveal flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <span className="section-label">FEATURED PROJECTS</span>
            <h2 className="section-heading mt-4">
              What I've{" "}
              <span style={{ color: "#c8aa82" }}>built</span>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                color: "#a1a1aa",
                marginTop: 8,
              }}
            >
              A selection of real projects. See all on the Projects page.
            </p>
          </div>
          <button
            onClick={() => navigate("/projects")}
            className="nav-link mt-4 sm:mt-0"
            style={{ color: "#c8aa82", fontSize: 14 }}
          >
            View All Projects →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

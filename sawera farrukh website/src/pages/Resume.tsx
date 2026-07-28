import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ResumePage() {
  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        overflowX: "hidden",
        color: "#e5e5e5",
      }}
    >
      <Navigation />
      <main>
        {/* Hero / Header */}
        <section
          style={{
            padding: "80px 0 40px",
            borderBottom: "1px solid #222",
          }}
        >
          <div className="container-main">
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: 12,
                letterSpacing: "-0.02em",
              }}
            >
              Sawera Farrukh
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "#a3a3a3",
                marginBottom: 20,
                maxWidth: 640,
              }}
            >
              AI Solutions Developer
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px 24px",
                fontSize: "0.95rem",
                color: "#d4d4d4",
              }}
            >
              <a href="tel:+923092300078" style={{ color: "#d4d4d4", textDecoration: "none" }}>
                +92 309 2300078
              </a>
              <span style={{ color: "#555" }}>•</span>
              <a
                href="mailto:sawerafarrukh99@gmail.com"
                style={{ color: "#d4d4d4", textDecoration: "none" }}
              >
                sawerafarrukh99@gmail.com
              </a>
              <span style={{ color: "#555" }}>•</span>
              <a
                href="https://github.com/Sawera-Farrukh"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#d4d4d4", textDecoration: "none" }}
              >
                GitHub
              </a>
              <span style={{ color: "#555" }}>•</span>
              <a
                href="https://www.linkedin.com/in/sawera-farrukh"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#d4d4d4", textDecoration: "none" }}
              >
                LinkedIn
              </a>
            </div>
            <p style={{ marginTop: 12, fontSize: "0.9rem", color: "#737373" }}>
              Available PKT hours (10 AM – 7 PM PKT) | Remote
            </p>
          </div>
        </section>

        <div
          className="container-main"
          style={{
            paddingTop: 48,
            paddingBottom: 120,
          }}
        >
          {/* Summary */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={sectionTitle}>Professional Summary</h2>
            <p style={{ lineHeight: 1.7, color: "#d4d4d4", maxWidth: 820 }}>
              AI Solutions Developer with hands-on experience building intelligent
              automation agents, computer vision systems, NLP applications, and
              full-stack web products. Skilled in Python, LLM APIs, n8n workflow
              automation, and modern web frameworks. Adept at designing end-to-end
              AI pipelines that reduce manual effort and drive measurable business
              impact across content, media, and education domains.
            </p>
          </section>

          {/* Work Experience */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={sectionTitle}>Work Experience</h2>

            <div style={jobBlock}>
              <div style={jobHeader}>
                <div>
                  <h3 style={jobTitle}>AI Agents / Automation</h3>
                  <p style={company}>TheEduAssist — Lahore</p>
                </div>
                <span style={date}>Jul 2025 – Oct 2025</span>
              </div>
              <ul style={bulletList}>
                <li>
                  Built and deployed AI automation agents for lead generation, blog
                  creation, and email campaigns, significantly reducing content
                  production time.
                </li>
                <li>
                  Developed an AI Email Agent integrating SMTP with LLMs for
                  personalized and scalable outbound communication.
                </li>
                <li>
                  Automated LinkedIn and Twitter content scheduling using n8n with
                  event-driven publishing, improving posting consistency.
                </li>
                <li>
                  Implemented Text-to-Speech (TTS) and voice cloning features using
                  open-source tools and external APIs.
                </li>
                <li>
                  Designed and implemented RAG-based AI agents for intelligent
                  content generation and Q&A systems, integrating document retrieval
                  with LLM APIs to produce accurate, context-aware outputs.
                </li>
                <li>
                  Engineered multi-step n8n workflows for autonomous data processing
                  and tasks.
                </li>
              </ul>
            </div>

            <div style={jobBlock}>
              <div style={jobHeader}>
                <div>
                  <h3 style={jobTitle}>Artificial Intelligence</h3>
                  <p style={company}>Arch Technologies</p>
                </div>
                <span style={date}>Jul 2025 – Aug 2025</span>
              </div>
              <ul style={bulletList}>
                <li>
                  Designed an AI-based object detection system using template
                  matching and contour detection with OpenCV.
                </li>
                <li>
                  Applied image preprocessing and feature extraction pipelines to
                  improve object recognition accuracy.
                </li>
                <li>
                  Implemented a facial recognition module and benchmarked detection
                  models across confidence threshold / IoU configurations.
                </li>
              </ul>
            </div>

            <div style={jobBlock}>
              <div style={jobHeader}>
                <div>
                  <h3 style={jobTitle}>AI Developer</h3>
                  <p style={company}>NOODBOOK</p>
                </div>
                <span style={date}>May 2024 – Aug 2024</span>
              </div>
              <ul style={bulletList}>
                <li>
                  Built and tested ML models in a team-based agile environment
                  across a 4-month intensive AI product development program.
                </li>
              </ul>
            </div>

            <div style={jobBlock}>
              <div style={jobHeader}>
                <div>
                  <h3 style={jobTitle}>Frontend Developer</h3>
                  <p style={company}>AZLOGICS / Digital Empowerment Network</p>
                </div>
                <span style={date}>Dec 2023 – Feb 2024</span>
              </div>
              <ul style={bulletList}>
                <li>
                  Built and shipped full-stack features using React.js, integrating
                  real-time REST APIs that reduced data-fetch latency by ~35%.
                </li>
                <li>
                  Improved UI/UX consistency across dashboards; collaborated via
                  GitHub using feature-branch workflow with a team of 4 developers.
                </li>
                <li>
                  Maintained 95%+ uptime for logistics tracking module by
                  implementing structured error handling and logging.
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={sectionTitle}>Education</h2>
            <div style={jobBlock}>
              <div style={jobHeader}>
                <div>
                  <h3 style={jobTitle}>B.S. in Artificial Intelligence</h3>
                  <p style={company}>
                    Khwaja Fareed University of Engineering & Technology, RYK
                  </p>
                </div>
                <span style={date}>Jan 2022 – 2026</span>
              </div>
              <p style={{ color: "#a3a3a3", marginTop: 8, fontSize: "0.95rem" }}>
                GPA: 2.87 / 4.0 · Relevant coursework: Machine Learning, Data
                Structures, Software Engineering
              </p>
            </div>
          </section>

          {/* Skills */}
          <section style={{ marginBottom: 56 }}>
            <h2 style={sectionTitle}>Core Skills</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 24,
              }}
            >
              <SkillGroup title="Languages" items="JavaScript, TypeScript, Python, Java, HTML5, CSS3" />
              <SkillGroup title="Frontend" items="React.js, Next.js, TailwindCSS, Bootstrap, Axios, Flask" />
              <SkillGroup title="Backend" items="Django, Django REST Framework, Node.js, Express.js, Python" />
              <SkillGroup title="Databases" items="MySQL, SQL, SQLite" />
              <SkillGroup title="AI / ML" items="Scikit-learn, RAG, TensorFlow, Keras, PyTorch, YOLO, NLP, Pandas" />
              <SkillGroup title="Automation" items="n8n, Webhooks, AI Agents, LLM APIs" />
              <SkillGroup title="Mobile" items="Flutter (cross-platform iOS/Android)" />
              <SkillGroup title="DevOps & Tools" items="Git, GitHub, REST APIs, GitHub Actions" />
              <SkillGroup title="Others" items="WordPress, SEO Writing, Content Automation" />
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 style={sectionTitle}>Projects</h2>

            <Project
              title="Math Tug-of-War — Multiplayer Classroom Math Game"
              stack="Flask · Python · React · Flask-SocketIO · SQLite"
              points={[
                "Built a real-time multiplayer math game with WebSocket-based live gameplay. Python for backend, React + Tailwind CSS for frontend.",
                "Two teams compete by answering math questions — every correct answer pulls the rope toward your side. First team to pull the flag wins.",
              ]}
            />

            <Project
              title="LinkedIn & Twitter AI Posting Agent"
              stack="n8n · Google Sheets · LLM APIs · REST APIs"
              points={[
                "AI-powered content automation workflow that generates LinkedIn posts and tweets from Google Sheets and auto-publishes them.",
                "Generates SEO-friendly LinkedIn posts and tweet-sized content for X, saving hours of manual work.",
              ]}
            />

            <Project
              title="Real-Time Object Detection System (YOLOv8)"
              stack="Python · YOLOv8 · OpenCV"
              points={[
                "Detects objects frame-by-frame in local video or webcam using Ultralytics YOLOv8 and OpenCV.",
                "Draws bounding boxes, class labels, confidence scores, and live FPS, then saves an annotated MP4.",
              ]}
            />

            <Project
              title="Movie Recommendation System"
              stack="Python · Streamlit · NLP · AI"
              points={[
                "Content-based movie recommendation web app using TF-IDF and cosine similarity on movie overviews.",
                "Delivers top-10 personalized recommendations via Streamlit.",
              ]}
            />

            <Project
              title="YouTube HD Video Downloader"
              stack="Python · Flask · FFmpeg · Tailwind CSS"
              points={[
                "Modern high-performance YouTube Video Downloader using Flask, yt-dlp, FFmpeg, and Tailwind CSS.",
                "Downloads videos in highest available quality (HD / Full HD / 2K / 4K) with automatic audio-video merging.",
              ]}
            />

            <Project
              title="ChefAI — Dish Generator"
              stack="Flask · SQLite · ML · AI"
              points={[
                "Intelligent recipe discovery platform that recommends recipes based on available ingredients or dish names.",
                "Built with Flask and powered by advanced recommendation algorithms.",
              ]}
            />

            <Project
              title="Facial Emotion Recognition"
              stack="Deep Learning · ML · AI · PyTorch · Streamlit"
              points={[
                "Deep Learning web application that detects 7 human emotions from facial images using a CNN built with PyTorch.",
                "Deployed with Streamlit.",
              ]}
            />

            <Project
              title="Mental Health Tips by Sawi"
              stack="WordPress"
              points={[
                "WordPress-based mental health awareness blog focused on self-care tips and psychological insights.",
                "Showcases skills in content creation, SEO writing, and digital publishing.",
              ]}
            />

            <Project
              title="Google Map Scraper — Lead Generation"
              stack="JavaScript · Google Sheets"
              points={[
                "Generates leads from Google Maps using three approaches: URL, keywords, and keyword .txt files.",
                "Scrapes name, email, website, social accounts, phone, address, etc., and exports to Excel.",
              ]}
            />

            <Project
              title="Beauty Salon Website"
              stack="React · Vite · Tailwind · TypeScript"
              points={[
                "High-end, dark-themed single-page website template with dramatic animations for photographers and creative studios.",
                "Features GSAP-powered scroll animations, 3D transforms, particle effects, custom cursor, and noise texture overlay.",
              ]}
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

/* ─── Styles ─── */
const sectionTitle: React.CSSProperties = {
  fontSize: "1.35rem",
  fontWeight: 600,
  color: "#fff",
  marginBottom: 24,
  paddingBottom: 10,
  borderBottom: "1px solid #262626",
  letterSpacing: "-0.01em",
};

const jobBlock: React.CSSProperties = {
  marginBottom: 36,
};

const jobHeader: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "baseline",
  gap: 8,
  marginBottom: 10,
};

const jobTitle: React.CSSProperties = {
  fontSize: "1.1rem",
  fontWeight: 600,
  color: "#f5f5f5",
  margin: 0,
};

const company: React.CSSProperties = {
  fontSize: "0.95rem",
  color: "#a3a3a3",
  margin: "4px 0 0",
};

const date: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "#737373",
  whiteSpace: "nowrap",
};

const bulletList: React.CSSProperties = {
  margin: 0,
  paddingLeft: 20,
  color: "#d4d4d4",
  lineHeight: 1.7,
  fontSize: "0.95rem",
};

/* ─── Sub-components ─── */
function SkillGroup({ title, items }: { title: string; items: string }) {
  return (
    <div>
      <h4
        style={{
          fontSize: "0.85rem",
          fontWeight: 600,
          color: "#a3a3a3",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: 8,
        }}
      >
        {title}
      </h4>
      <p style={{ fontSize: "0.95rem", color: "#e5e5e5", lineHeight: 1.55, margin: 0 }}>
        {items}
      </p>
    </div>
  );
}

function Project({
  title,
  stack,
  points,
}: {
  title: string;
  stack: string;
  points: string[];
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ ...jobTitle, marginBottom: 4 }}>{title}</h3>
      <p style={{ fontSize: "0.85rem", color: "#737373", marginBottom: 10 }}>{stack}</p>
      <ul style={bulletList}>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
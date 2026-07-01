import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectsHero from "../sections/ProjectsHero";
import ProjectsGrid from "../sections/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <div
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navigation />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import About from "../sections/About";
import TechStack from "../sections/TechStack";
import Skills from "../sections/Skills";
import FeaturedProjects from "../sections/FeaturedProjects";
import Experience from "../sections/Experience";

export default function HomePage() {
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
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <FeaturedProjects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}





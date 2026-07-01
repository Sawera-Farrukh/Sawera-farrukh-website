import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
// import HeroLaptop from ".components/HeroLaptop";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#111111",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.06)",
            fontFamily: "'Inter', sans-serif",
          },
        }}
      />
    </>
  );
}

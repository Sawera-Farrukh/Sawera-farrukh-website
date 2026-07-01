import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteConfig, navigationConfig } from "../config";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);

    if (href.startsWith("/#")) {
      const anchor = href.replace("/", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(anchor);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  const handleHireMe = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    navigate("/contact");
  };

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500"
        style={{
          height: 80,
          padding: "0 5vw",
          backgroundColor: scrolled ? "rgba(10, 10, 10, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
        }}
      >
        <a
          href="/"
          onClick={handleBrandClick}
          className="no-underline"
          style={{
            fontFamily: "'GeistMono', monospace",
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: "-0.5px",
            color: "#ffffff",
          }}
        >
          {siteConfig.brandName}
        </a>

        <div className="hidden md:flex items-center" style={{ gap: 40 }}>
          {navigationConfig.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`nav-link ${
                (link.href === "/projects" && location.pathname === "/projects") ||
                (link.href === "/contact" && location.pathname === "/contact")
                  ? "nav-link-active"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button onClick={handleHireMe} className="btn-gradient" style={{ padding: "10px 20px", fontSize: 13 }}>
            {navigationConfig.ctaText}
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: "rgba(10, 10, 10, 0.98)", backdropFilter: "blur(20px)" }}
        >
          {navigationConfig.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="nav-link"
              style={{ fontSize: 20 }}
            >
              {link.label}
            </a>
          ))}
          <button onClick={handleHireMe} className="btn-gradient mt-4">
            {navigationConfig.ctaText}
          </button>
        </div>
      )}
    </>
  );
}

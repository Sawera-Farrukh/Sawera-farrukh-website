import { Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { footerConfig } from "../config";

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={16} />,
  Linkedin: <Linkedin size={16} />,
  Mail: <Mail size={16} />,
};

export default function Footer() {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        padding: "48px 5vw",
      }}
    >
      <div className="container-main flex flex-col items-center gap-4">
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: "#71717a",
            textAlign: "center",
          }}
        >
          {footerConfig.text}{" "}
          <span style={{ color: "#c8aa82", fontFamily: "'GeistMono', monospace" }}>
            {footerConfig.name}
          </span>{" "}
          · {footerConfig.tagline}
        </p>

        <div className="flex items-center gap-6 mt-2">
          {footerConfig.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 transition-colors duration-300 hover:text-[#c8aa82]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: "#71717a",
                textDecoration: "none",
              }}
            >
              {iconMap[link.icon]}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

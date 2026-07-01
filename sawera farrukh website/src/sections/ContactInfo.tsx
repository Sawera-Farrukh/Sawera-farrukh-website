import { Linkedin, Github, Globe, MapPin } from "lucide-react";
import { contactConfig } from "../config";

const iconMap: Record<string, React.ReactNode> = {
  Linkedin: <Linkedin size={20} style={{ color: "#c8aa82" }} />,
  Github: <Github size={20} style={{ color: "#c8aa82" }} />,
  Globe: <Globe size={20} style={{ color: "#c8aa82" }} />,
  MapPin: <MapPin size={20} style={{ color: "#c8aa82" }} />,
};

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3
          style={{
            fontFamily: "'GeistMono', monospace",
            fontSize: 20,
            fontWeight: 400,
            color: "#ffffff",
            marginBottom: 8,
          }}
        >
          {contactConfig.infoHeading}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            lineHeight: 1.6,
            color: "#a1a1aa",
          }}
        >
          {contactConfig.infoSubtext}
        </p>
      </div>

      {/* Contact Links */}
      <div className="flex flex-col gap-3">
        {contactConfig.contactLinks.map((link, i) => (
          <a
            key={i}
            href={link.href || "#"}
            target={link.href?.startsWith("http") ? "_blank" : undefined}
            rel={link.href?.startsWith("http") ? "noopener noreferrer" : undefined}
            className="card-hover"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 12,
              padding: 16,
              textDecoration: "none",
              cursor: link.href ? "pointer" : "default",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "rgba(200, 170, 130, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {iconMap[link.icon]}
            </div>
            <div>
              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 10,
                  letterSpacing: 2,
                  color: "#71717a",
                  display: "block",
                  marginBottom: 2,
                }}
              >
                {link.label}
              </span>
              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 14,
                  color: link.href ? "#c8aa82" : "#a1a1aa",
                }}
              >
                {link.value}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Status Card */}
      <div
        style={{
          background: "rgba(34, 197, 94, 0.08)",
          border: "1px solid rgba(34, 197, 94, 0.15)",
          borderRadius: 12,
          padding: 16,
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: 14,
              color: "#22c55e",
            }}
          >
            {contactConfig.status.label}
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "#a1a1aa",
            paddingLeft: 16,
          }}
        >
          {contactConfig.status.sublabel}
        </span>
      </div>
    </div>
  );
}

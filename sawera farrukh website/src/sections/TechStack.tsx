// import { useEffect, useRef } from "react";
// import { techStackConfig } from "../config";

// const SIMPLE_ICONS_BASE = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons";

// function TechIcon({ name, icon }: { name: string; icon: string }) {
//   const iconUrl = `${SIMPLE_ICONS_BASE}/${icon}.svg`;

//   return (
//     <div
//       className="flex flex-col items-center gap-2"
//       style={{
//         minWidth: 64,
//         padding: "12px 8px",
//         background: "#1a1a1a",
//         borderRadius: 12,
//       }}
//     >
//       <img
//         src={iconUrl}
//         alt={name}
//         style={{ width: 32, height: 32, filter: "invert(0.7)" }}
//         loading="lazy"
//       />
//       <span
//         style={{
//           fontFamily: "'GeistMono', monospace",
//           fontSize: 10,
//           color: "#71717a",
//           whiteSpace: "nowrap",
//         }}
//       >
//         {name}
//       </span>
//     </div>
//   );
// }

// function MarqueeRow({
//   icons,
//   reverse = false,
// }: {
//   icons: { name: string; icon: string }[];
//   reverse?: boolean;
// }) {
//   const doubled = [...icons, ...icons];

//   return (
//     <div className={`marquee-row ${reverse ? "marquee-reverse" : ""}`}>
//       <div className="marquee-content">
//         {doubled.map((tech, i) => (
//           <TechIcon key={`${tech.name}-${i}`} name={tech.name} icon={tech.icon} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function TechStack() {
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const els = sectionRef.current?.querySelectorAll(".scroll-reveal");
//     els?.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         background: "#111111",
//         borderTop: "1px solid rgba(255,255,255,0.06)",
//         borderBottom: "1px solid rgba(255,255,255,0.06)",
//         padding: "64px 0",
//         overflow: "hidden",
//       }}
//     >
//       <div className="scroll-reveal text-center mb-10">
//         <span className="section-label">{techStackConfig.sectionLabel}</span>
//         <h2 className="section-heading mt-4">
//           {techStackConfig.heading}{" "}
//           <span style={{ color: "#c8aa82" }}>{techStackConfig.headingAccent}</span>
//         </h2>
//       </div>

//       <div className="flex flex-col gap-4">
//         <MarqueeRow icons={techStackConfig.row1} />
//         <MarqueeRow icons={techStackConfig.row2} reverse />
//       </div>
//     </section>
//   );
// }









// new code from grok

import { useEffect, useRef } from "react";
import { techStackConfig } from "../config";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

function TechIcon({ name, icon }: { name: string; icon: string }) {
  // Special handling for some icons that have different folder names
  const iconFolder = icon === "nextjs" ? "nextjs" : 
                     icon === "tailwindcss" ? "tailwindcss" : 
                     icon === "fastapi" ? "fastapi" : icon;

  const iconUrl = `${DEVICON_BASE}/${iconFolder}/${iconFolder}-original.svg`;

  return (
    <div
      className="flex flex-col items-center gap-3 group transition-all duration-300 hover:-translate-y-3"
      style={{
        minWidth: 92,
        padding: "18px 14px",
        background: "#1a1a1a",
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <img
        src={iconUrl}
        alt={name}
        style={{ width: 48, height: 48 }}
        className="group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
        loading="lazy"
        onError={(e) => {
          // Fallback if icon not found
          (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconFolder}/${iconFolder}-plain.svg`;
        }}
      />
      <span
        style={{
          fontFamily: "'GeistMono', monospace",
          fontSize: 12,
          color: "#a1a1aa",
        }}
        className="group-hover:text-white transition-colors"
      >
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ icons }: { icons: { name: string; icon: string }[] }) {
  const doubled = [...icons, ...icons];

  return (
    <div className="marquee-row overflow-hidden py-6">
      <div className="marquee-content flex gap-8">
        {doubled.map((tech, i) => (
          <TechIcon 
            key={`${tech.name}-${i}`} 
            name={tech.name} 
            icon={tech.icon} 
          />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
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
      ref={sectionRef}
      style={{
        background: "#231d1d",
        padding: "90px 0",
        overflow: "hidden",
      }}
    >
     <div className="scroll-reveal text-center mb-12 px-6">
  <span 
    className="section-label uppercase tracking-widest text-sm font-medium"
    style={{ color: "#c8aa82" }}
  >
    {techStackConfig.sectionLabel}
  </span>
  <h2 className="section-heading mt-4 text-4xl md:text-5xl font-bold">
    {techStackConfig.heading}{" "}
    <span style={{ color: "#c8aa82" }}>
      {techStackConfig.headingAccent}
    </span>
  </h2>
</div>

      <MarqueeRow icons={techStackConfig.technologies} />
    </section>
  );
}
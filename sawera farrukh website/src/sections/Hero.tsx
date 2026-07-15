// import { useRef, useEffect, useState } from "react";
// import AmberCascades from "./AmberCascades";
// import { heroConfig } from "../config";

// export default function Hero() {
//   const titleRef = useRef<HTMLDivElement>(null);
//   const [titleWidth, setTitleWidth] = useState<number>(0);

//   useEffect(() => {
//     const measure = () => {
//       if (titleRef.current) setTitleWidth(titleRef.current.offsetWidth);
//     };
//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//   }, []);

//   const handleScrollToWork = () => {
//     const el = document.querySelector("#featured-projects");
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="hero"
//       className="relative w-full overflow-hidden"
//       style={{ height: "100vh" }}
//     >
//       <AmberCascades opacity={1} />
//       <div
//         className="relative z-10 flex flex-col justify-between pointer-events-none"
//         style={{
//           height: "100%",
//           padding: "24vh 5vw 8vh",
//         }}
//       >
//         <div style={{ maxWidth: 700 }}>
//           {/* Status badge */}
//           <div
//             className="pointer-events-auto inline-flex items-center gap-2 mb-8"
//             style={{
//               background: "rgba(34, 197, 94, 0.1)",
//               border: "1px solid rgba(34, 197, 94, 0.2)",
//               borderRadius: 9999,
//               padding: "6px 16px",
//             }}
//           >
//             <span
//               style={{
//                 width: 8,
//                 height: 8,
//                 borderRadius: "50%",
//                 background: "#22c55e",
//                 display: "inline-block",
//               }}
//             />
//             <span
//               style={{
//                 fontFamily: "'GeistMono', monospace",
//                 fontSize: 11,
//                 letterSpacing: 2,
//                 color: "#22c55e",
//                 textTransform: "uppercase",
//               }}
//             >
//               {heroConfig.statusBadge}
//             </span>
//           </div>

//           {/* Name */}
//           <div ref={titleRef} style={{ width: "fit-content" }}>
//             <h1
//               className="text-white"
//               style={{
//                 fontFamily: "'GeistMono', monospace",
//                 fontWeight: 400,
//                 fontSize: "clamp(42px, 5vw, 80px)",
//                 lineHeight: 1.05,
//                 letterSpacing: "-2px",
//                 textShadow: "0 4px 24px rgba(0,0,0,0.8)",
//                 marginBottom: 0,
//                 width: "fit-content",
//               }}
//             >
//               {heroConfig.nameLine1}
//             </h1>
//             <h1
//               style={{
//                 fontFamily: "'GeistMono', monospace",
//                 fontWeight: 400,
//                 fontSize: "clamp(42px, 5vw, 80px)",
//                 lineHeight: 1.05,
//                 letterSpacing: "-2px",
//                 textShadow: "0 4px 24px rgba(0,0,0,0.8)",
//                 color: "#c8aa82",
//                 marginBottom: 16,
//                 width: "fit-content",
//               }}
//             >
//               {heroConfig.nameLine2}
//             </h1>
//           </div>

//           {/* Tagline */}
//           <p
//             style={{
//               fontFamily: "'GeistMono', monospace",
//               fontWeight: 300,
//               fontSize: "clamp(18px, 2vw, 28px)",
//               fontStyle: "italic",
//               color: "#e8d5b5",
//               marginBottom: 20,
//               textShadow: "0 2px 12px rgba(0,0,0,0.6)",
//             }}
//           >
//             {heroConfig.tagline}
//           </p>

//           {/* Description */}
//           <p
//             style={{
//               fontFamily: "'GeistMono', monospace",
//               fontWeight: 200,
//               fontSize: "clamp(14px, 1.3vw, 18px)",
//               lineHeight: 1.7,
//               letterSpacing: "-0.3px",
//               color: "#a1a1aa",
//               marginBottom: 28,
//               width: titleWidth || "auto",
//               maxWidth: "100%",
//               textShadow: "0 2px 12px rgba(0,0,0,0.6)",
//             }}
//           >
//             {heroConfig.description}
//           </p>

//           {/* Role badges */}
//           <div className="flex flex-wrap gap-2 mb-8 pointer-events-auto" style={{ width: titleWidth || "auto", maxWidth: "100%" }}>
//             {heroConfig.roles.map((role) => (
//               <span
//                 key={role}
//                 style={{
//                   fontFamily: "'GeistMono', monospace",
//                   fontSize: 11,
//                   letterSpacing: 1,
//                   textTransform: "uppercase",
//                   color: "#a1a1aa",
//                   background: "#111111",
//                   border: "1px solid rgba(255,255,255,0.08)",
//                   borderRadius: 9999,
//                   padding: "6px 14px",
//                 }}
//               >
//                 {role}
//               </span>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap gap-4 pointer-events-auto">
//             <button onClick={handleScrollToWork} className="btn-gradient">
//               {heroConfig.ctaPrimary}
//             </button>
//             {heroConfig.ctaSecondary.map((cta) => (
//               <a
//                 key={cta.label}
//                 href={cta.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-outline"
//               >
//                 {cta.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import { useRef, useEffect, useState } from "react";
// import AmberCascades from "./AmberCascades";
// import { heroConfig } from "../config";
// import HeroLaptop from "../components/HeroLaptop";   // Adjust path if your HeroLaptop is somewhere else

// export default function Hero() {
//   const titleRef = useRef<HTMLDivElement>(null);
//   const [titleWidth, setTitleWidth] = useState<number>(0);

//   useEffect(() => {
//     const measure = () => {
//       if (titleRef.current) setTitleWidth(titleRef.current.offsetWidth);
//     };
//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//   }, []);

//   const handleScrollToWork = () => {
//     const el = document.querySelector("#featured-projects");
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="hero"
//       className="relative w-full min-h-screen flex items-center overflow-hidden"
//       style={{ background: "#0a0a0a" }}
//     >
//       <AmberCascades opacity={1} />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
//         <div className="grid md:grid-cols-12 gap-16 items-center">

//           {/* Left Content */}
//           <div className="md:col-span-7 space-y-6">
            
//             {/* Status Badge */}
//             <div
//               className="inline-flex items-center gap-1 px-2 py-1 rounded-full"
//               style={{
//                 background: "rgba(34, 197, 94, 0.1)",
//                 border: "1px solid rgba(34, 197, 94, 0.3)",
//               }}
//             >
//               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//               <span className="text-green-400 text-sm font-mono tracking-widest uppercase">
//                 {heroConfig.statusBadge}
//               </span>
//             </div>

//             {/* Name */}
//             <div ref={titleRef}>
//               <h1 className="text-5xl md:text-6xl font-light tracking-[-1.5px] text-white">
//                 {heroConfig.nameLine1}
//               </h1>
//               <h1 className="text-5xl md:text-6xl font-light tracking-[-1.5px] text-[#c8aa82]">
//                 {heroConfig.nameLine2}
//               </h1>
//             </div>

//           {/* Tagline */}
// <p 
//   className="font-serif text-xl md:text-2xl tracking-[0.04em] italic font-light mb-5 md:mb-6 text-white"
//   style={{ fontFamily: "'Cormorant Garamond', serif" }}
// >
//   Where{" "}
//   <span className="text-[#c8aa82]">AI</span>{" "}
//   Meets Innovation{" "}
//   <span className="text-[#c8aa82]">✦</span>
// </p>

//             {/* Description - Better alignment */}
//             <p className="text-[15px] md:text-base text-gray-400 max-w-xl leading-relaxed">
//               {heroConfig.description}
//             </p>

//             {/* Skills / Role Badges - Smaller & Compact */}
//             <div className="flex flex-wrap gap-2 pt-2">
//               {heroConfig.roles.map((role) => (
//                 <span
//                   key={role}
//                   className="px-4 py-1.5 text-[3px] md:text-xs font-mono tracking-widest border border-white/10 bg-white/5 rounded-full text-gray-300 whitespace-nowrap"
//                 >
//                   {role}
//                 </span>
//               ))}
//             </div>

//           {/* CTA Buttons */}
// <div className="flex flex-wrap gap-4 pt-6">
  
//   {/* Primary Button */}
//   <a
//     href={heroConfig.ctaPrimary.href}
//     className="btn-gradient text-sm px-6 py-2.5 inline-block"
//   >
//     {heroConfig.ctaPrimary.label}
//   </a>

//   {/* Secondary Buttons */}
//   {heroConfig.ctaSecondary.map((cta, index) => (
//     <a
//       key={index}
//       href={cta.href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="btn-outline text-sm px-6 py-2.5 flex items-center gap-2 hover:bg-white/10"
//     >
//       {cta.label}
//     </a>
//   ))}
// </div>
//           </div>

//           {/* Right Side - More Empty Space */}
//           <div className="hidden md:block md:col-span-5"></div>
//         </div>
//       </div>
//     </section>
//   );
// }



//  correct code made by me from diferent resources below code


// import { useRef, useEffect, useState } from "react";
// import AmberCascades from "./AmberCascades";
// import { heroConfig } from "../config";
// import HeroLaptop from "../components/HeroLaptop";

// export default function Hero() {
//   const titleRef = useRef<HTMLDivElement>(null);
//   // const [titleWidth, setTitleWidth] = useState<number>(0);
//   const [, setTitleWidth] = useState<number>(0);

//   useEffect(() => {
//     const measure = () => {
//       if (titleRef.current) setTitleWidth(titleRef.current.offsetWidth);
//     };
//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//   }, []);

//   return (
//     <section
//       id="hero"
//       // className="relative w-full min-h-screen flex items-center overflow-hidden"
//       // style={{ background: "#0a0a0a" }}
//       className="relative w-full flex items-center overflow-hidden"
//       style={{ background: "#0a0a0a", height: "99vh" }}
//     >
//       <AmberCascades opacity={1} />

//       {/* <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16"> */}
//       <div className="relative z-10 w-full mx-auto px-6 pt-20 pb-16">
//         <div className="grid md:grid-cols-12 gap-16 items-center">

//           {/* Left Content - Shifted slightly to the right */}
//           <div className="md:col-span-7 space-y-6 md:pl-8 lg:pl-15">
            
//             {/* Status Badge */}
//             <div
//               className="inline-flex items-center gap-1 px-2 py-1 rounded-full"
//               style={{
//                 background: "rgba(34, 197, 94, 0.1)",
//                 border: "1px solid rgba(34, 197, 94, 0.3)",
//               }}
//             >
//               <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
//               <span className="text-green-400 text-sm font-mono tracking-widest uppercase">
//                 {heroConfig.statusBadge}
//               </span>
//             </div>

//            {/* Name */}
// <div ref={titleRef}>
//   <h1 
//     className="text-5xl md:text-6xl font-light tracking-[-1.5px] text-white italic"
//     style={{ fontFamily: "'Cormorant Garamond', serif" }}
//   >
//     {heroConfig.nameLine1}
//   </h1>
//   <h1 
//     className="text-5xl md:text-6xl font-light tracking-[-1.5px] text-[#c8aa82] italic"
//     style={{ fontFamily: "'Cormorant Garamond', serif" }}
//   >
//     {heroConfig.nameLine2}
//   </h1>
// </div>

//             {/* Tagline */}
//             <p 
//               className="font-serif text-xl md:text-2xl tracking-[0.04em] italic font-light mb-5 md:mb-6 text-white"
//               style={{ fontFamily: "'Cormorant Garamond', serif" }}
//             >
//               Where{" "}
//               <span className="text-[#c8aa82]">AI</span>{" "}
//               Meets Innovation{" "}
//               <span className="text-[#c8aa82]">✦</span>
//             </p>

//             {/* Description */}
//             <p className="text-[15px] md:text-base text-gray-400 max-w-xl leading-relaxed">
//               {heroConfig.description}
//             </p>

//             {/* Skills / Role Badges */}
//             <div className="flex flex-wrap gap-2 pt-1">
//               {heroConfig.roles.map((role) => (
//                 <span
//                   key={role}
//                   className="px-4 py-1.5 text-[8px] md:text-xs font-mono tracking-widest border border-white/10 bg-white/5 rounded-full text-gray-300 whitespace-nowrap"
//                 >
//                   {role}
//                 </span>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-4 pt-6">
//               <a
//                 href={heroConfig.ctaPrimary.href}
//                 className="btn-gradient text-sm px-6 py-2.5 inline-block"
//               >
//                 {heroConfig.ctaPrimary.label}
//               </a>

//               {heroConfig.ctaSecondary.map((cta, index) => (
//                 <a
//                   key={index}
//                   href={cta.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn-outline text-sm px-6 py-2.5 flex items-center gap-2 hover:bg-white/10"
//                 >
//                   {cta.label}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Laptop Animation */}
//        <div className="hidden md:block md:col-span-5 flex justify-center lg:justify-end">
//             <HeroLaptop />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }







// new correct code from kimi for desktop size setting below


import { useRef, useEffect, useState } from "react";
import AmberCascades from "./AmberCascades";
import { heroConfig } from "../config";
import HeroLaptop from "../components/HeroLaptop";

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);
  // const [titleWidth, setTitleWidth] = useState<number>(0);
  const [, setTitleWidth] = useState<number>(0);

  useEffect(() => {
    const measure = () => {
      if (titleRef.current) setTitleWidth(titleRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section
      id="hero"
         className="relative w-full flex items-center overflow-hidden "
         style={{ background: "#0a0a0a", height: "99vh" }}
    >
      <AmberCascades opacity={1} />

          <div className="relative z-10 w-full mx-auto px-6 pt-20 pb-16">  
        <div className="grid md:grid-cols-12 gap-16 items-center"> 

          {/* Left Content - Shifted slightly to the right */}
          <div className="md:col-span-7 space-y-5 md:pl-8 lg:pl-15 desk:space-y-9 desk:pt-13">
            {/* Status Badge */}
            <div
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full"
              style={{
                background: "rgba(34, 197, 94, 0.1)",
                border: "1px solid rgba(34, 197, 94, 0.3)",
              }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm desk:text-base font-mono tracking-widest uppercase">
                {heroConfig.statusBadge}
              </span>
            </div>

           {/* Name */}
<div ref={titleRef}>
  <h1 
       className="text-5xl md:text-6xl desk:text-8xl font-light tracking-[-1.5px] text-white italic"
    style={{ fontFamily: "'Cormorant Garamond', serif" }}
  >
    {heroConfig.nameLine1}
  </h1>
  <h1 
    className="text-5xl md:text-6xl desk:text-8xl font-light tracking-[-1.5px] text-[#c8aa82] italic"
    style={{ fontFamily: "'Cormorant Garamond', serif" }}
  >
    {heroConfig.nameLine2}
  </h1>
</div>

            {/* Tagline */}
            <p 
              className="font-serif text-xl md:text-2xl desk:text-4xl tracking-[0.04em] italic font-light mb-5 md:mb-6 desk:mb-8 text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Where{" "}
              <span className="text-[#c8aa82]">AI</span>{" "}
              Meets Innovation{" "}
              <span className="text-[#c8aa82]">✦</span>
            </p>

            {/* Description */}
             <p className="text-[15px] md:text-base desk:text-xl text-gray-400 max-w-xl desk:max-w-2xl leading-relaxed desk:leading-loose" >
              {heroConfig.description}
            </p>

            {/* Skills / Role Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {heroConfig.roles.map((role) => (
                <span
                  key={role}
                  className="px-4 py-1.5 desk:px-5 desk:py-2 text-[8px] md:text-xs desk:text-sm font-mono tracking-widest border border-white/10 bg-white/5 rounded-full text-gray-300 whitespace-nowrap"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href={heroConfig.ctaPrimary.href}
                  className="btn-gradient text-sm desk:text-lg px-6 py-2.5 desk:px-10 desk:py-4 inline-block"
              >
                {heroConfig.ctaPrimary.label}
              </a>

              {heroConfig.ctaSecondary.map((cta, index) => (
                <a
                  key={index}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="btn-outline text-sm desk:text-lg px-6 py-2.5 desk:px-10 desk:py-4 flex items-center gap-2 hover:bg-white/10"
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Laptop Animation */}
       <div className="hidden md:block md:col-span-5 flex justify-center lg:justify-end">
            <HeroLaptop />
          </div>

        </div>
      </div>
    </section>
  );
}




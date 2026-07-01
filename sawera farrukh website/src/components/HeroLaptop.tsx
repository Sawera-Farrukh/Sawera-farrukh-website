// import { useEffect, useRef, useState } from 'react'

// const CODE_LINES = [
//   { text: 'import torch, cv2, numpy as np',      color: '#C4B5FD', indent: 0 },
//   { text: 'from langchain import ChatAnthropic', color: '#00FFED', indent: 0 },
//   { text: '',                                     color: '',        indent: 0 },
//   { text: 'class SaweraAI:',                      color: '#FF6EFF', indent: 0 },
//   { text: 'def __init__(self):',                 color: '#A78BFA', indent: 1 },
//   { text: 'self.skills = [',                     color: '#F5EEFF', indent: 2 },
//   { text: '"Computer Vision",',                  color: '#00FFED', indent: 3 },
//   { text: '"NLP & LLMs",',                       color: '#00FFED', indent: 3 },
//   { text: '"n8n Automation",',                   color: '#00FFED', indent: 3 },
//   { text: '"Full-Stack Dev",',                   color: '#00FFED', indent: 3 },
//   { text: ']',                                   color: '#F5EEFF', indent: 2 },
//   { text: '',                                    color: '',        indent: 0 },
//   { text: 'def build(self, idea):',              color: '#FF6EFF', indent: 1 },
//   { text: 'return ship_to_production(idea) ✦',   color: '#FFD98E', indent: 2 },
// ]

// export default function HeroLaptop() {
//   const [visibleChars, setVisibleChars] = useState(0)
//   const [cursorOn, setCursorOn] = useState(true)
//   const rafRef = useRef<number>(0)
//   const wrapRef = useRef<HTMLDivElement>(null)

//   const fullText = CODE_LINES.map(l => '  '.repeat(l.indent) + l.text).join('\n')
//   const totalChars = fullText.length

//   useEffect(() => {
//     let chars = 0, last = 0
//     const speed = 28
//     const tick = (now: number) => {
//       if (now - last >= speed) { chars = Math.min(chars + 1, totalChars); setVisibleChars(chars); last = now }
//       if (chars < totalChars) rafRef.current = requestAnimationFrame(tick)
//     }
//     rafRef.current = requestAnimationFrame(tick)
//     return () => cancelAnimationFrame(rafRef.current)
//   }, [totalChars])

//   useEffect(() => {
//     const id = setInterval(() => setCursorOn(v => !v), 530)
//     return () => clearInterval(id)
//   }, [])

//   useEffect(() => {
//     const onScroll = () => {
//       const maxScroll = document.body.scrollHeight - window.innerHeight
//       const pct = maxScroll > 0 ? window.scrollY / maxScroll : 0
//       if (wrapRef.current)
//         wrapRef.current.style.transform = `perspective(1000px) rotateY(${(pct - 0.25) * 18}deg) rotateX(${Math.sin(pct * Math.PI * 1.5) * 6}deg)`
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   let charCount = 0
//   const renderedLines = CODE_LINES.map((line, li) => {
//     const prefix = '  '.repeat(line.indent)
//     const full = prefix + line.text
//     const shown = Math.max(0, Math.min(full.length, visibleChars - charCount))
//     const isActive = visibleChars > charCount && visibleChars <= charCount + full.length
//     charCount += full.length + 1
//     if (shown === 0 && !isActive) return <div key={li} style={{ height: '1.45em' }} />
//     const shownText = full.slice(0, shown)
//     return (
//       <div key={li} style={{ display: 'flex', minHeight: '1.45em', whiteSpace: 'pre' }}>
//         <span style={{ color: 'rgba(139,106,196,0.45)', marginRight: '1.1rem', userSelect: 'none', minWidth: '1.4rem', textAlign: 'right' }}>{li + 1}</span>
//         <span style={{ color: 'rgba(139,106,196,0.3)' }}>{shownText.slice(0, prefix.length)}</span>
//         <span style={{ color: line.color || '#F5EEFF' }}>{shownText.slice(prefix.length)}</span>
//         {isActive && <span style={{ display: 'inline-block', width: '2px', height: '1.1em', background: cursorOn ? '#fff' : 'transparent', marginLeft: '1px', verticalAlign: 'text-bottom' }} />}
//       </div>
//     )
//   })

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//       <div ref={wrapRef} style={{ transition: 'transform 0.18s ease', filter: 'drop-shadow(0 0 40px rgba(124,92,255,0.45)) drop-shadow(0 20px 60px rgba(0,0,0,0.6))', animation: 'hero-laptop-float 6s ease-in-out infinite' }}>
//         <svg width="440" height="340" viewBox="0 0 460 350" style={{ display: 'block' }}>
//           <defs>
//             <linearGradient id="lframe" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1E0E3E"/><stop offset="100%" stopColor="#0D0625"/></linearGradient>
//             <linearGradient id="ltopbar" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.9"/><stop offset="100%" stopColor="#A78BFA" stopOpacity="0.6"/></linearGradient>
//             <linearGradient id="lbase" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#160830"/><stop offset="100%" stopColor="#0A041A"/></linearGradient>
//             <linearGradient id="lglow" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.22"/><stop offset="100%" stopColor="#7C5CFF" stopOpacity="0"/></linearGradient>
//             <clipPath id="screen-clip"><rect x="22" y="12" width="416" height="272" rx="7"/></clipPath>
//           </defs>
//           <rect x="18" y="8" width="424" height="280" rx="10" fill="url(#lframe)" stroke="#7C5CFF" strokeWidth="1.4" strokeOpacity="0.7"/>
//           <rect x="18" y="8" width="424" height="26" rx="10" fill="url(#ltopbar)"/>
//           <rect x="18" y="24" width="424" height="10" fill="url(#ltopbar)"/>
//           <circle cx="40" cy="21" r="5" fill="#FF5F57" opacity="0.9"/>
//           <circle cx="58" cy="21" r="5" fill="#FEBC2E" opacity="0.9"/>
//           <circle cx="76" cy="21" r="5" fill="#28C840" opacity="0.85"/>
//           <rect x="96" y="10" width="110" height="24" rx="4" fill="rgba(124,92,255,0.18)" stroke="rgba(124,92,255,0.4)" strokeWidth="0.7"/>
//           <text x="106" y="25" fontFamily="'JetBrains Mono',monospace" fontSize="9" fill="#C4B5FD" opacity="0.9">main.py  ●</text>
//           <rect x="22" y="34" width="32" height="246" fill="rgba(0,0,0,0.3)"/>
//           <text x="28" y="55" fontSize="11" fill="#7C5CFF" opacity="0.7">📁</text>
//           <text x="30" y="78" fontSize="11" fill="#7C5CFF" opacity="0.55">🐍</text>
//           <text x="30" y="100" fontSize="11" fill="#7C5CFF" opacity="0.45">⚙️</text>
//           <rect x="54" y="34" width="388" height="246" fill="rgba(8,4,20,0.95)" clipPath="url(#screen-clip)"/>
//           <rect x="54" y="34" width="388" height="18" fill="rgba(124,92,255,0.06)"/>
//           <foreignObject x="60" y="38" width="376" height="238">
//             {/* @ts-ignore */}
//             <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', lineHeight: '1.45em', color: '#F0EEF8', overflow: 'hidden', height: '238px', paddingTop: '4px' }}>
//               {renderedLines}
//             </div>
//           </foreignObject>
//           <ellipse cx="460" cy="8" rx="80" ry="60" fill="rgba(124,92,255,0.08)"/>
//           <ellipse cx="18" cy="260" rx="60" ry="40" fill="rgba(0,245,212,0.05)"/>
//           <path d="M4 288 L18 288 L442 288 L456 288 L460 305 L0 305 Z" fill="url(#lbase)" stroke="#7C5CFF" strokeWidth="1" strokeOpacity="0.5"/>
//           <rect x="185" y="292" width="90" height="9" rx="4" fill="rgba(124,92,255,0.18)" stroke="rgba(124,92,255,0.3)" strokeWidth="0.6"/>
//           {[0,1,2,3,4].map(r => <rect key={r} x={60+r*72} y="290" width="62" height="6" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(124,92,255,0.1)" strokeWidth="0.5"/>)}
//           <ellipse cx="230" cy="325" rx="160" ry="16" fill="url(#lglow)"/>
//           <circle cx="10" cy="80" r="2.5" fill="#00F5D4" opacity="0.7"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.8s" repeatCount="indefinite"/><animate attributeName="cy" values="80;68;80" dur="4s" repeatCount="indefinite"/></circle>
//           <circle cx="450" cy="120" r="2" fill="#FF5C9E" opacity="0.65"><animate attributeName="opacity" values="0.2;0.85;0.2" dur="3.2s" repeatCount="indefinite"/><animate attributeName="cy" values="120;108;120" dur="5s" repeatCount="indefinite"/></circle>
//           <circle cx="14" cy="200" r="1.8" fill="#FFB347" opacity="0.6"><animate attributeName="opacity" values="0.25;0.8;0.25" dur="2.5s" repeatCount="indefinite"/></circle>
//           <circle cx="448" cy="60" r="2.2" fill="#A78BFA" opacity="0.55"><animate attributeName="opacity" values="0.2;0.75;0.2" dur="3.8s" repeatCount="indefinite"/><animate attributeName="cy" values="60;48;60" dur="6s" repeatCount="indefinite"/></circle>
//         </svg>
//       </div>
//       <style>{`@keyframes hero-laptop-float { 0%,100%{transform:translateY(0px) rotateX(2deg)} 50%{transform:translateY(-14px) rotateX(2deg)} }`}</style>
//     </div>
//   )
// }




// import { useEffect, useRef, useState } from 'react'

// const CODE_LINES = [
//   { text: 'import torch, cv2, numpy as np',      color: '#C4B5FD', indent: 0 },
//   { text: 'from langchain import ChatAnthropic', color: '#00FFED', indent: 0 },
//   { text: '',                                     color: '',        indent: 0 },
//   { text: 'class SaweraAI:',                      color: '#FF6EFF', indent: 0 },
//   { text: 'def __init__(self):',                 color: '#A78BFA', indent: 1 },
//   { text: 'self.skills = [',                     color: '#F5EEFF', indent: 2 },
//   { text: '"Computer Vision",',                  color: '#00FFED', indent: 3 },
//   { text: '"NLP & LLMs",',                       color: '#00FFED', indent: 3 },
//   { text: '"n8n Automation",',                   color: '#00FFED', indent: 3 },
//   { text: '"Full-Stack Dev",',                   color: '#00FFED', indent: 3 },
//   { text: ']',                                   color: '#F5EEFF', indent: 2 },
//   { text: '',                                    color: '',        indent: 0 },
//   { text: 'def build(self, idea):',              color: '#FF6EFF', indent: 1 },
//   { text: 'return ship_to_production(idea) ✦',   color: '#FFD98E', indent: 2 },
// ]

// export default function HeroLaptop() {
//   const [visibleChars, setVisibleChars] = useState(0)
//   const [cursorOn, setCursorOn] = useState(true)
//   const rafRef = useRef<number>(0)
//   const wrapRef = useRef<HTMLDivElement>(null)

//   const fullText = CODE_LINES.map(l => '  '.repeat(l.indent) + l.text).join('\n')
//   const totalChars = fullText.length

//   useEffect(() => {
//     let chars = 0, last = 0
//     const speed = 28
//     const tick = (now: number) => {
//       if (now - last >= speed) { chars = Math.min(chars + 1, totalChars); setVisibleChars(chars); last = now }
//       if (chars < totalChars) rafRef.current = requestAnimationFrame(tick)
//     }
//     rafRef.current = requestAnimationFrame(tick)
//     return () => cancelAnimationFrame(rafRef.current)
//   }, [totalChars])

//   useEffect(() => {
//     const id = setInterval(() => setCursorOn(v => !v), 530)
//     return () => clearInterval(id)
//   }, [])

//   useEffect(() => {
//     const onScroll = () => {
//       const maxScroll = document.body.scrollHeight - window.innerHeight
//       const pct = maxScroll > 0 ? window.scrollY / maxScroll : 0
//       if (wrapRef.current)
//         wrapRef.current.style.transform = `perspective(1000px) rotateY(${(pct - 0.25) * 18}deg) rotateX(${Math.sin(pct * Math.PI * 1.5) * 6}deg)`
//     }
//     window.addEventListener('scroll', onScroll, { passive: true })
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   let charCount = 0
//   const renderedLines = CODE_LINES.map((line, li) => {
//     const prefix = '  '.repeat(line.indent)
//     const full = prefix + line.text
//     const shown = Math.max(0, Math.min(full.length, visibleChars - charCount))
//     const isActive = visibleChars > charCount && visibleChars <= charCount + full.length
//     charCount += full.length + 1
//     if (shown === 0 && !isActive) return <div key={li} style={{ height: '1.45em' }} />
//     const shownText = full.slice(0, shown)
//     return (
//       <div key={li} style={{ display: 'flex', minHeight: '1.45em', whiteSpace: 'pre' }}>
//         <span style={{ color: 'rgba(139,106,196,0.45)', marginRight: '1.1rem', userSelect: 'none', minWidth: '1.4rem', textAlign: 'right' }}>{li + 1}</span>
//         <span style={{ color: 'rgba(139,106,196,0.3)' }}>{shownText.slice(0, prefix.length)}</span>
//         <span style={{ color: line.color || '#F5EEFF' }}>{shownText.slice(prefix.length)}</span>
//         {isActive && <span style={{ display: 'inline-block', width: '2px', height: '1.1em', background: cursorOn ? '#fff' : 'transparent', marginLeft: '1px', verticalAlign: 'text-bottom' }} />}
//       </div>
//     )
//   })

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//       <div 
//         ref={wrapRef} 
//         style={{ 
//           transition: 'transform 0.18s ease', 
//           filter: 'drop-shadow(0 0 40px rgba(200,170,130,0.45)) drop-shadow(0 20px 60px rgba(0,0,0,0.7))', 
//           animation: 'hero-laptop-float 6s ease-in-out infinite' 
//         }}
//       >
//         <svg width="440" height="340" viewBox="0 0 460 350" style={{ display: 'block' }}>
//           <defs>
//             <linearGradient id="lframe" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#2C1F0F"/><stop offset="100%" stopColor="#1A1208"/>
//             </linearGradient>
//             <linearGradient id="ltopbar" x1="0" y1="0" x2="1" y2="0">
//               <stop offset="0%" stopColor="#453c30" stopOpacity="0.95"/>
//               <stop offset="100%" stopColor="#e8d5b5" stopOpacity="0.7"/>
//             </linearGradient>
//             <linearGradient id="lbase" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#1F1508"/><stop offset="100%" stopColor="#0F0A05"/>
//             </linearGradient>
//             <linearGradient id="lglow" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#c8aa82" stopOpacity="0.25"/>
//               <stop offset="100%" stopColor="#c8aa82" stopOpacity="0"/>
//             </linearGradient>
//             <clipPath id="screen-clip"><rect x="22" y="12" width="416" height="272" rx="7"/></clipPath>
//           </defs>

//           {/* Main Laptop Body */}
//           <rect x="18" y="8" width="424" height="280" rx="10" 
//                 fill="url(#lframe)" 
//                 stroke="#453c30" strokeWidth="1.8" strokeOpacity="0.75"/>

//           {/* Top Bar */}
//           <rect x="18" y="8" width="424" height="26" rx="10" fill="url(#ltopbar)"/>
//           <rect x="18" y="24" width="424" height="10" fill="url(#ltopbar)"/>

//           {/* Window Controls */}
//           <circle cx="40" cy="21" r="5" fill="#FF5F57" opacity="0.9"/>
//           <circle cx="58" cy="21" r="5" fill="#FEBC2E" opacity="0.9"/>
//           <circle cx="76" cy="21" r="5" fill="#28C840" opacity="0.85"/>

//           {/* File Tab */}
//           <rect x="96" y="10" width="110" height="24" rx="4" 
//                 fill="rgba(200,170,130,0.18)" 
//                 stroke="rgba(200,170,130,0.5)" strokeWidth="0.7"/>
//           <text x="106" y="25" fontFamily="'JetBrains Mono',monospace" fontSize="9" fill="#e8d5b5" opacity="0.95">main.py  ●</text>

//           {/* Sidebar */}
//           <rect x="22" y="34" width="32" height="246" fill="rgba(0,0,0,0.4)"/>
//           <text x="28" y="55" fontSize="11" fill="#c8aa82" opacity="0.7">📁</text>
//           <text x="30" y="78" fontSize="11" fill="#c8aa82" opacity="0.55">🐍</text>
//           <text x="30" y="100" fontSize="11" fill="#c8aa82" opacity="0.45">⚙️</text>

//           {/* Screen */}
//           <rect x="54" y="34" width="388" height="246" fill="rgba(15,10,5,0.96)" clipPath="url(#screen-clip)"/>
//           <rect x="54" y="34" width="388" height="18" fill="rgba(200,170,130,0.08)"/>

//           {/* Code Content */}
//           <foreignObject x="60" y="38" width="376" height="238">
//             <div xmlns="http://www.w3.org/1999/xhtml" 
//                  style={{ 
//                    fontFamily: "'JetBrains Mono',monospace", 
//                    fontSize: '11px', 
//                    lineHeight: '1.45em', 
//                    color: '#F0EEF8', 
//                    overflow: 'hidden', 
//                    height: '238px', 
//                    paddingTop: '4px' 
//                  }}>
//               {renderedLines}
//             </div>
//           </foreignObject>

//           {/* Base & Glow */}
//           <ellipse cx="460" cy="8" rx="80" ry="60" fill="rgba(200,170,130,0.08)"/>
//           <ellipse cx="18" cy="260" rx="60" ry="40" fill="rgba(232,213,181,0.06)"/>
          
//           <path d="M4 288 L18 288 L442 288 L456 288 L460 305 L0 305 Z" 
//                 fill="url(#lbase)" 
//                 stroke="#c8aa82" strokeWidth="1.2" strokeOpacity="0.6"/>

//           <rect x="185" y="292" width="90" height="9" rx="4" 
//                 fill="rgba(200,170,130,0.2)" 
//                 stroke="rgba(200,170,130,0.4)" strokeWidth="0.6"/>

//           {[0,1,2,3,4].map(r => (
//             <rect key={r} x={60+r*72} y="290" width="62" height="6" rx="2" 
//                   fill="rgba(255,255,255,0.04)" 
//                   stroke="rgba(200,170,130,0.15)" strokeWidth="0.5"/>
//           ))}

//           <ellipse cx="230" cy="325" rx="160" ry="16" fill="url(#lglow)"/>

//           {/* Floating Orbs - Updated to Golden Tones */}
//           <circle cx="10" cy="80" r="2.5" fill="#e8d5b5" opacity="0.7">
//             <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.8s" repeatCount="indefinite"/>
//             <animate attributeName="cy" values="80;68;80" dur="4s" repeatCount="indefinite"/>
//           </circle>
//           <circle cx="450" cy="120" r="2" fill="#c8aa82" opacity="0.65">
//             <animate attributeName="opacity" values="0.2;0.85;0.2" dur="3.2s" repeatCount="indefinite"/>
//             <animate attributeName="cy" values="120;108;120" dur="5s" repeatCount="indefinite"/>
//           </circle>
//         </svg>
//       </div>

//       <style>{`
//         @keyframes hero-laptop-float {
//           0%,100% { transform: translateY(0px) rotateX(2deg); }
//           50%      { transform: translateY(-14px) rotateX(2deg); }
//         }
//       `}</style>
//     </div>
//   )
// }




//  from kimi website codeing

import { useEffect, useRef, useState } from 'react'

const CODE_LINES = [
  { text: 'import torch, cv2, numpy as np',      color: '#C4B5FD', indent: 0 },
  { text: 'from langchain import ChatAnthropic', color: '#00FFED', indent: 0 },
  { text: '',                                     color: '',        indent: 0 },
  { text: 'class SaweraAI:',                      color: '#FF6EFF', indent: 0 },
  { text: 'def __init__(self):',                 color: '#A78BFA', indent: 1 },
  { text: 'self.skills = [',                     color: '#F5EEFF', indent: 2 },
  { text: '"Computer Vision",',                  color: '#00FFED', indent: 3 },
  { text: '"NLP & LLMs",',                       color: '#00FFED', indent: 3 },
  { text: '"n8n Automation",',                   color: '#00FFED', indent: 3 },
  { text: '"Full-Stack Dev",',                   color: '#00FFED', indent: 3 },
  { text: ']',                                   color: '#F5EEFF', indent: 2 },
  { text: '',                                    color: '',        indent: 0 },
  { text: 'def build(self, idea):',              color: '#FF6EFF', indent: 1 },
  { text: 'return ship_to_production(idea) ✦',   color: '#FFD98E', indent: 2 },
]

export default function HeroLaptop() {
  const [visibleChars, setVisibleChars] = useState(0)
  const [cursorOn, setCursorOn] = useState(true)
  const rafRef = useRef<number>(0)
  const wrapRef = useRef<HTMLDivElement>(null)

  const fullText = CODE_LINES.map(l => '  '.repeat(l.indent) + l.text).join('\n')
  const totalChars = fullText.length

  useEffect(() => {
    let chars = 0, last = 0
    const speed = 28
    const tick = (now: number) => {
      if (now - last >= speed) { chars = Math.min(chars + 1, totalChars); setVisibleChars(chars); last = now }
      if (chars < totalChars) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [totalChars])

  useEffect(() => {
    const id = setInterval(() => setCursorOn(v => !v), 530)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const pct = maxScroll > 0 ? window.scrollY / maxScroll : 0
      if (wrapRef.current)
        wrapRef.current.style.transform = `perspective(1000px) rotateY(${(pct - 0.25) * 18}deg) rotateX(${Math.sin(pct * Math.PI * 1.5) * 6}deg)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  let charCount = 0
  const renderedLines = CODE_LINES.map((line, li) => {
    const prefix = '  '.repeat(line.indent)
    const full = prefix + line.text
    const shown = Math.max(0, Math.min(full.length, visibleChars - charCount))
    const isActive = visibleChars > charCount && visibleChars <= charCount + full.length
    charCount += full.length + 1
    if (shown === 0 && !isActive) return <div key={li} style={{ height: '1.45em' }} />
    const shownText = full.slice(0, shown)
    return (
      <div key={li} style={{ display: 'flex', minHeight: '1.45em', whiteSpace: 'pre' }}>
        <span style={{ color: 'rgba(139,106,196,0.45)', marginRight: '1.1rem', userSelect: 'none', minWidth: '1.4rem', textAlign: 'right' }}>{li + 1}</span>
        <span style={{ color: 'rgba(139,106,196,0.3)' }}>{shownText.slice(0, prefix.length)}</span>
        <span style={{ color: line.color || '#F5EEFF' }}>{shownText.slice(prefix.length)}</span>
        {isActive && <span style={{ display: 'inline-block', width: '2px', height: '1.1em', background: cursorOn ? '#fff' : 'transparent', marginLeft: '1px', verticalAlign: 'text-bottom' }} />}
      </div>
    )
  })

  return (
    <div className="flex justify-center items-center w-full">
      <div 
        ref={wrapRef} 
        className="w-full max-w-[460px] transition-transform duration-200 ease-out"
        style={{ 
          filter: 'drop-shadow(0 0 40px rgba(200,170,130,0.45)) drop-shadow(0 20px 60px rgba(0,0,0,0.7))', 
          animation: 'hero-laptop-float 6s ease-in-out infinite' 
        }}
      >
        <svg 
          viewBox="0 0 460 350" 
          className="w-full h-auto"
          style={{ display: 'block' }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* ... all your SVG content stays exactly the same ... */}
          <defs>
            <linearGradient id="lframe" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2C1F0F"/><stop offset="100%" stopColor="#1A1208"/>
            </linearGradient>
            <linearGradient id="ltopbar" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#453c30" stopOpacity="0.95"/>
              <stop offset="100%" stopColor="#e8d5b5" stopOpacity="0.7"/>
            </linearGradient>
            <linearGradient id="lbase" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1F1508"/><stop offset="100%" stopColor="#0F0A05"/>
            </linearGradient>
            <linearGradient id="lglow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8aa82" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#c8aa82" stopOpacity="0"/>
            </linearGradient>
            <clipPath id="screen-clip"><rect x="22" y="12" width="416" height="272" rx="7"/></clipPath>
          </defs>

          <rect x="18" y="8" width="424" height="280" rx="10" fill="url(#lframe)" stroke="#453c30" strokeWidth="1.8" strokeOpacity="0.75"/>
          <rect x="18" y="8" width="424" height="26" rx="10" fill="url(#ltopbar)"/>
          <rect x="18" y="24" width="424" height="10" fill="url(#ltopbar)"/>
          <circle cx="40" cy="21" r="5" fill="#FF5F57" opacity="0.9"/>
          <circle cx="58" cy="21" r="5" fill="#FEBC2E" opacity="0.9"/>
          <circle cx="76" cy="21" r="5" fill="#28C840" opacity="0.85"/>
          <rect x="96" y="10" width="110" height="24" rx="4" fill="rgba(200,170,130,0.18)" stroke="rgba(200,170,130,0.5)" strokeWidth="0.7"/>
          <text x="106" y="25" fontFamily="'JetBrains Mono',monospace" fontSize="9" fill="#e8d5b5" opacity="0.95">main.py  ●</text>
          <rect x="22" y="34" width="32" height="246" fill="rgba(0,0,0,0.4)"/>
          <text x="28" y="55" fontSize="11" fill="#c8aa82" opacity="0.7">📁</text>
          <text x="30" y="78" fontSize="11" fill="#c8aa82" opacity="0.55">🐍</text>
          <text x="30" y="100" fontSize="11" fill="#c8aa82" opacity="0.45">⚙️</text>
          <rect x="54" y="34" width="388" height="246" fill="rgba(15,10,5,0.96)" clipPath="url(#screen-clip)"/>
          <rect x="54" y="34" width="388" height="18" fill="rgba(200,170,130,0.08)"/>

          <foreignObject x="60" y="38" width="376" height="238">
            <div xmlns="http://www.w3.org/1999/xhtml" className="font-mono overflow-hidden" style={{ fontSize: 'clamp(7px, 2vw, 11px)', lineHeight: '1.45em', color: '#F0EEF8', height: '100%', paddingTop: '4px' }}>
              {renderedLines}
            </div>
          </foreignObject>

          <ellipse cx="460" cy="8" rx="80" ry="60" fill="rgba(200,170,130,0.08)"/>
          <ellipse cx="18" cy="260" rx="60" ry="40" fill="rgba(232,213,181,0.06)"/>
          <path d="M4 288 L18 288 L442 288 L456 288 L460 305 L0 305 Z" fill="url(#lbase)" stroke="#c8aa82" strokeWidth="1.2" strokeOpacity="0.6"/>
          <rect x="185" y="292" width="90" height="9" rx="4" fill="rgba(200,170,130,0.2)" stroke="rgba(200,170,130,0.4)" strokeWidth="0.6"/>
          {[0,1,2,3,4].map(r => (
            <rect key={r} x={60+r*72} y="290" width="62" height="6" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(200,170,130,0.15)" strokeWidth="0.5"/>
          ))}
          <ellipse cx="230" cy="325" rx="160" ry="16" fill="url(#lglow)"/>
          <circle cx="10" cy="80" r="2.5" fill="#e8d5b5" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.8s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="80;68;80" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="450" cy="120" r="2" fill="#c8aa82" opacity="0.65">
            <animate attributeName="opacity" values="0.2;0.85;0.2" dur="3.2s" repeatCount="indefinite"/>
            <animate attributeName="cy" values="120;108;120" dur="5s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>

      <style>{`
        @keyframes hero-laptop-float {
          0%,100% { transform: translateY(0px) rotateX(2deg); }
          50%      { transform: translateY(-14px) rotateX(2deg); }
        }
      `}</style>
    </div>
  )
}
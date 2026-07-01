// ============================================================
// Site Configuration
// ============================================================

export const siteConfig = {
  language: "en",
  brandName: "Sawera farrukh",
};

// ============================================================
// Navigation
// ============================================================

export const navigationConfig = {
  links: [
    { label: "About Me", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText: "Hire Me",
};

// ============================================================
// Hero
// ============================================================

export const heroConfig = {
  statusBadge: "Available for freelance & full-time",
  nameLine1: "Sawera",
  nameLine2: "Farrukh",
  tagline: "Where AI Meets Innovation",
  description:
    "Building intelligent products that matter — from computer vision pipelines to AI agents, full-stack web apps to automation workflows.",
  roles: [
    "AI/ML ENGINEER",
    "PYTHON DEVELOPER",
    "FULL-STACK DEV",
    "WORDPRESS",
    "N8N AUTOMATION",
    "AI AGENTS",
    "LEAD GENERATION",
  ],
  // ctaPrimary: "View My Work",
  ctaPrimary: { 
    label: "View My Work", 
    href: "/projects"          // Change this if you want different path
  },
  ctaSecondary: [
    { label: "GitHub →", href: "https://github.com/Sawera-Farrukh" },
    { label: "LinkedIn →", href: "https://www.linkedin.com/in/sawera-farrukh-59675b2a7/" },
  ],
};

// ============================================================
// About
// ============================================================

export const aboutConfig = {
  sectionLabel: "ABOUT ME",
  heading: "Passionate about",
  headingAccent: "building the future",
  bio: [
    "I'm Sawera Farrukh — an AI/ML engineer and full-stack developer with a deep passion for building technology that creates real-world impact. From training neural networks to deploying production-ready web apps, I love the full journey from idea to shipped product.",
    "My work spans computer vision, NLP, automation workflows with n8n, WordPress development, AI agents, and modern web stacks.",
  ],
  specialties: [
    {
      icon: "Bot",
      title: "AI & Machine Learning",
      description: "Built object detection, NLP recommendation systems, and AI agent workflows.",
    },
    {
      icon: "Zap",
      title: "Automation & n8n",
      description: "Designed multi-platform AI content pipelines reducing manual effort by 80%.",
    },
    {
      icon: "Rocket",
      title: "Full-Stack & WordPress",
      description: "Built and deployed production web apps and content platforms.",
    },
  ],
};


// ============================================================
// Tech Stack
// ============================================================

export const techStackConfig = {
  sectionLabel: "MY TECH STACK",
  heading: "Tools I",
  headingAccent: "work with",
  technologies: [
    { name: "Python", icon: "python" },
    { name: "OpenCV", icon: "opencv" },
    { name: "Flask", icon: "flask" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "Django", icon: "django" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Tailwind", icon: "tailwindcss" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "Flutter", icon: "flutter" },
    { name: "WordPress", icon: "wordpress" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Figma", icon: "figma" },
    { name: "Vercel", icon: "vercel" },
    { name: "VS Code", icon: "vscode" },
    { name: "NumPy", icon: "numpy" },
    { name: "Pandas", icon: "pandas" },
  ],
};

// ============================================================
// Skills
// ============================================================

export const skillsConfig = {
  sectionLabel: "SKILLS & EXPERTISE",
  heading: "My",
  headingAccent: "skill set",
  subtext: "A versatile toolkit spanning AI/ML, web development, automation, and content platforms.",
  skills: [
    {
      icon: "Brain",
      title: "AI & Machine Learning",
      description: "Computer vision, NLP, model training and deployment for real-world applications.",
      tags: ["Python", "PyTorch", "OpenCV", "NumPy", "Pandas"],
    },
    {
      icon: "Code2",
      title: "Frontend Development",
      description: "Responsive, modern web interfaces with React, TypeScript, and Tailwind.",
      tags: ["React", "TypeScript", "JavaScript", "Tailwind", "HTML5", "CSS3"],
    },
    {
      icon: "Server",
      title: "Backend & APIs",
      description: "Scalable APIs, real-time systems, and databases for production apps.",
      tags: ["Flask", "FastAPI", "SQLite", "Git", "Next.js", "Django", "next.js"],
    },
    {
      icon: "Wrench",
      title: "Tools & Platforms",
      description: "Automation, deployment, and platform tools for end-to-end product delivery.",
      tags: ["GitHub", "VS Code", "WordPress", "Figma", "Vercel"],
    },
  ],
};

// ============================================================
// Projects
// ============================================================

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image?: string;
  video?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [

   {
    id: "1",
    title: "Mental Health Tips by Sawi",
    category: "WordPress",
    shortDescription:
      "Mental Health Tips by Sawi is a WordPress-based Mental health awareness blog website focused on sharing self-care tips, psychological insights, and educational content to promote emotional well-being. The platform aims to spread awareness, reduce mental health stigma. This website provides accessible guidance through informative and engaging articles, showcasing skills in content creation, SEO writing, and digital publishing.",
    fullDescription:
      "Mental Health Tips by Sawi is a WordPress-based Mental health awareness blog website focused on sharing self-care tips, psychological insights, and educational content to promote emotional well-being. The platform aims to spread awareness, reduce mental health stigma.",
    video: "/videos/wordpress website.mp4",
    tags: ["WordPress", "SEO", "Content Strategy", "UX Writing"],
    liveUrl: "https://mentalhealthtipsbysawi.wordpress.com/",
    featured: false,
  },
  {
    id: "2",
    title: "Beauty Salon Website",
    category: "Full-Stack",
    shortDescription:
      "Beauty Salon is a sleek, responsive website built for a premium beauty salon. It features stunning visuals, service catalogs (hair styling, skincare, makeup, spa treatments), online appointment booking, client testimonials, and a luxurious design that reflects elegance and professionalism. The platform highlights expertise in modern web design, user experience, and conversion-focused layouts tailored for beauty businesses.",
    fullDescription:
      "Beauty Salon is a sleek, responsive website built for a premium beauty salon. It features stunning visuals, service catalogs (hair styling, skincare, makeup, spa treatments), online appointment booking, client testimonials, and a luxurious design that reflects elegance and professionalism.",
    video: "/videos/salon website.mp4",
    tags: ["Vite", "Tailwind CSS", "TypeScript", "Framer Motion","responsive design"],
    githubUrl: "https://github.com/Sawera-Farrukh/Beautysalon-website",
    liveUrl: "https://beautysalon-website-seven.vercel.app/",
    featured: true,
  },
  {
    id: "3",
    title: "Object Detection with YOLOv8",
    category: "Computer Vision",
    shortDescription:
      "A real-time object detection system using YOLOv8. Detects objects frame-by-frame from video or webcam, drawing bounding boxes, class labels, confidence scores, and live FPS. Saves annotated output video automatically with configurable confidence and IoU thresholds. GPU-accelerated and optimized for efficient inference.",
    fullDescription:
      "A real-time object detection system using YOLOv8. Detects objects frame-by-frame from video or webcam, drawing bounding boxes, class labels, confidence scores, and live FPS. Saves annotated output video automatically with configurable confidence and IoU thresholds. GPU-accelerated and optimized for efficient inference.",
    image: "/images/yolo-detection.jpg",
    tags: ["Python", "YOLOv8", "OpenCV", "NumPy"],
    githubUrl: "https://github.com/Sawera-Farrukh/Object-detection-using-YOLO",
    featured: true,
  },
  {
    id: "4",
    title: "LinkedIn & Twitter AI Posting Agent",
    category: "AI Automation",
    shortDescription:
      "An AI-powered content automation workflow built with n8n that generates LinkedIn posts and Twitter (X) tweets from Google Sheets and automatically publishes them across platforms. Built an automation workflow using n8n that creates SEO-optimized LinkedIn posts and tweet-ready content directly from Google Sheets using AI. The system streamlines content creation, scheduling, and multi-platform publishing, reducing manual effort while improving consistency, reach, and engagement.",
    fullDescription:
      "AI-powered n8n workflow that generates SEO-optimized posts from Google Sheets and auto-publishes across LinkedIn and Twitter/X. Built with n8n automation platform integrating AI agents for content generation.",
    image: "/images/n8n.png",
    tags: ["n8n", "AI Agents", "Google Sheets", "LinkedIn API", "Twitter API"],
    githubUrl: "https://github.com/Sawera-Farrukh/linkedin-twitter-posting-agent-n8n",
    featured: true,
  },
  {
    id: "5",
    title: "Movie Recommendation Engine",
    category: "AI / NLP",
    shortDescription:
      "A content-based movie recommendation web application built using Streamlit, TF-IDF, and cosine similarity to suggest movies based on storyline similarity. The system analyzes movie overviews to identify related content and provides personalized recommendations through an interactive and user-friendly interface. Users can upload their own movies.csv and credits.csv datasets, enter a movie title, and instantly receive the top 10 similar movie recommendations. The project demonstrates practical implementation of AI, NLP, and ML concepts.",
    fullDescription:
      "Content-based movie recommendation using TF-IDF & cosine similarity. Upload your CSV and get top 10 similar movie picks instantly. Built with Python and Streamlit for an interactive web interface.",
    image: "/images/movies.png",
    tags: ["Python", "Streamlit", "TF-IDF", "NLP", "Cosine Similarity", "Pandas"],
    githubUrl: "https://github.com/Sawera-Farrukh/movie-recommendation",
    featured: false,
  },
 
  {
    id: "6",
    title: "YouTube HD Video Downloader",
    category: "Full-Stack",
    shortDescription:
      "A modern web application built with Flask, yt-dlp, FFmpeg, and Tailwind CSS that enables users to download YouTube videos in HD, Full HD, 2K, and 4K quality. The platform focuses on performance and user experience through a lightweight Python backend and a clean, responsive interface. It demonstrates practical skills in backend development, media processing automation, and modern UI design while delivering fast, reliable, and high-quality video downloads.",
    fullDescription:
      "AI Email Agent with SMTP + LLM integration for professional email campaigns. Automated lead generation and outreach using n8n workflows with AI-powered content generation.",
    image: "/images/youtube.png",
    tags: ["flask", "yt-dlp", "FFmpeg", "Tailwind CSS","python"],
    githubUrl: "https://github.com/Sawera-Farrukh/youtube_downloader",
    featured: false,
  },
  // {
  //   id: "7",
  //   title: "Tic-Tac-Toe Multiplayer",
  //   category: "Real-time",
  //   shortDescription:
  //     "A real-time multiplayer tic-tac-toe game built with modern web technologies.",
  //   fullDescription:
  //     "A real-time multiplayer tic-tac-toe game built with modern web technologies. Features live multiplayer gameplay with seamless real-time updates.",
  //   image: "/images/project-tictactoe.jpg",
  //   tags: ["React", "TypeScript", "Tailwind CSS"],
  //   featured: false,
  // },
  // {
  //   id: "8",
  //   title: "Kids Educational Game",
  //   category: "EdTech",
  //   shortDescription:
  //     "A mobile and tablet-based educational game for children using Flutter to make learning fun and interactive.",
  //   fullDescription:
  //     "A mobile and tablet-based educational game for children using Flutter. Makes learning fun and interactive through engaging gameplay. Currently under active development (≈50% complete).",
  //   image: "/images/project-educational-game.jpg",
  //   tags: ["Flutter", "Dart", "Mobile Development"],
  //   featured: false,
  // },
];

export const projectCategories = [
  "All",
  "AI Automation",
  "Computer Vision",
  "AI / NLP",
  "Full-Stack",
  "WordPress",
  "EdTech",
  "Real-time",
];

// ============================================================
// Featured Projects (subset for home page)
// ============================================================

// export const featuredProjects = projects.filter((p) => p.featured);


// ============================================================
// Featured Projects - Manual Order for Home Page
// ============================================================

export const featuredProjects: Project[] = [
  projects.find(p => p.id === "1"),  // Beauty Salon Website
  projects.find(p => p.id === "2"),  // Object Detection with YOLOv8
  projects.find(p => p.id === "3"),  // LinkedIn & Twitter AI Posting Agent
].filter(Boolean) as Project[];

// ============================================================
// Experience
// ============================================================

export const experienceConfig = {
  sectionLabel: "EXPERIENCE & EDUCATION",
  heading: "My",
  headingAccent: "journey",
  items: [
    {
      period: "2026 – Present",
      role: "Flutter Kids Educational Game",
      company: "Independent",
      description:
        "Developing a mobile and tablet-based educational game for children using Flutter to make learning fun and interactive. Project is currently under active development (≈50% complete).",
    },
    {
      period: "Jul 2025 – Oct 2025",
      role: "AI Agents & Automation Intern",
      company: "TheEduAssist",
      description:
        "4-month remote internship where I built practical AI automation solutions. Developed AI agents for lead generation, professional email campaigns, and social media content automation. Created AI Email Agent with SMTP + LLM integration and AI Content Agent for scheduled LinkedIn & Twitter posting. Contributed to WordPress development and implemented Text-to-Speech & voice cloning features.",
    },
    {
      period: "Dec 2024 – Feb 2025",
      role: "Frontend Developer Intern",
      company: "Azlogics (Pvt) Ltd.",
      description:
        "Worked as a Frontend Developer Intern. Developed and enhanced responsive user interfaces while working on API integration and front-end functionality. Strengthened skills in modern web development and real-world project collaboration.",
    },
    {
      period: "2024 – Present",
      role: "AI/ML Engineer & Full-Stack Developer",
      company: "Freelance & Personal Projects",
      description:
        "Building AI-powered products spanning computer vision (YOLOv8), NLP recommendation systems, real-time multiplayer apps, and AI automation workflows. Focused on deployed, real-world solutions.",
    },

    {
      period: "2023 – 2024",
      role: "n8n AI Automation Specialist",
      company: "Independent Practice",
      description:
        "Designed and deployed multi-platform AI agent workflows. Built the LinkedIn & Twitter AI Posting Agent automating content creation, scheduling, and publishing at scale.",
    },

    {
      period: "2022 – 2023",
      role: "WordPress Developer & Content Strategist",
      company: "Independent Practice",
      description:
        "Launched and managed a mental health awareness blog platform. Developed SEO content strategy and grew an audience through accessible psychological content."
    },
    {
      period: "2022 – 2026",
      role: "Artificial Intelligence / BS-AI",
      company: "KFUEIT — Pakistan",
      description:
        "Pursued advanced studies of computer science field in BS-AI with focus on AI, ML, and software engineering. Applying academics to startup-grade product development.",
    },
  ],
};

// ============================================================
// Contact
// ============================================================

export const contactConfig = {
  sectionLabel: "GET IN TOUCH",
  heading: "Let's",
  headingAccent: "work together",
  subtext:
    "Have a project in mind? Let's talk about how I can help bring your idea to life with AI, automation, or full-stack development.",
  infoHeading: "Contact Info",
  infoSubtext:
    "I'm open to freelance projects, full-time roles, collaborations, and interesting conversations about AI & tech.",
  contactLinks: [
    {
      icon: "Linkedin",
      label: "LINKEDIN",
      value: "sawera-farrukh-59675b2a7",
      href: "https://www.linkedin.com/in/sawera-farrukh-59675b2a7/",
    },
    {
      icon: "Github",
      label: "GITHUB",
      value: "Sawera-Farrukh",
      href: "https://github.com/Sawera-Farrukh",
    },
    {
      icon: "Globe",
      label: "WORDPRESS BLOG",
      value: "mentalhealthtipsbysawi",
      href: "https://mentalhealthtipsbysawi.wordpress.com/",
    },
    {
      icon: "MapPin",
      label: "LOCATION",
      value: "Pakistan",
      href: null,
    },
  ],
  status: {
    label: "Available for Work",
    sublabel: "Freelance · Full-time · Remote",
  },
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "AI project, automation, collaboration...",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project, idea, or how I can help...",
    submitText: "Send Message →",
  },
};

// ============================================================
// Footer
// ============================================================

export const footerConfig = {
  text: "Designed & Built by",
  name: "Sawera Farrukh",
  tagline: "Where AI Meets Innovation",
  links: [
    { label: "GitHub", href: "https://github.com/Sawera-Farrukh", icon: "Github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sawera-farrukh-59675b2a7/", icon: "Linkedin" },
    { label: "Contact", href: "/contact", icon: "Mail" },
  ],
};

// ============================================================
// EmailJS Config
// ============================================================

export const emailjsConfig = {
  serviceId: "service_2dyy4wm",
  templateId: "template_1txe5yn",
  publicKey: "3lTfn7DnoKaDO6kI8",
};

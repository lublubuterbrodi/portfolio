export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: "fullstack" | "frontend";
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  // =========================
  // FULL-STACK & BACKEND
  // =========================

  {
    id: 1,
    title: "Course Progress Tracker",
    description:
      "Full-stack application for creating courses, organizing lessons, and tracking learning progress with automatic progress calculation and persistent data storage.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Vite",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Tailwind CSS",
    ],
    category: "fullstack",
    liveUrl: "https://course-progress-demo.vercel.app/",
    githubUrl:
      "https://github.com/lublubuterbrodi/course-progress-tracker",
  },

  {
    id: 2,
    title: "Diet Tracker",
    description:
      "Full-stack nutrition tracking application with authentication, product search, daily meal logging, personalized diet plans, and weight monitoring.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NextAuth",
      "PostgreSQL",
      "Neon",
      "Tailwind CSS",
    ],
    category: "fullstack",
    liveUrl: "https://des-diet-tracker.vercel.app/",
    githubUrl: "https://github.com/lublubuterbrodi/des-diet-tracker",
  },

  {
    id: 3,
    title: "Telegram Content Bot",
    description:
      "Content delivery bot with category management, premium access, and personalized user preferences, with content managed directly through Telegram.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Telegram Bot API",
      "PM2 Production",
      "Telegraf",
      "PostgreSQL",
      "Supabase",
      "VPS Contabo",
    ],
    category: "fullstack",
    githubUrl:
      "https://github.com/lublubuterbrodi/telegram-content-bot-showcase",
  },

  {
    id: 4,
    title: "Manga Reader Bot",
    description:
      "Telegram-based manga platform with premium chapters, achievements, virtual currency, and reading progress directly inside Telegram.",
    technologies: [
      "Node.js",
      "TypeScript",
      "React MiniApp",
       "Telegram Bot API",
       "PM2 Production",
      "grammY",
      "SQLite",
       "Supabase",
      "VPS Contabo",
      "Vercel Deployment",
    ],
    category: "fullstack",
    githubUrl:
      "https://github.com/lublubuterbrodi/telegram-manga-bot-showcase",
  },

  // =========================
  // FRONTEND
  // =========================

  {
    id: 5,
    title: "React Phone Catalog",
    description:
      "Responsive e-commerce catalog with product browsing, filtering, reusable UI components, and client-side state management.",
    technologies: [
      "React",
      "TypeScript",
      "SCSS",
      "React Router",
      "React Context",
      "LocalStorage",
      "Vite",
       "Github Pages",
      "Responsive design"
    ],
    category: "frontend",
    liveUrl: "https://lublubuterbrodi.github.io/Phone-Catalog/",
    githubUrl: "https://github.com/lublubuterbrodi/Phone-Catalog",
  },

  {
    id: 6,
    title: "2048 Game",
    description:
      "Interactive browser puzzle game with keyboard controls, tile movement and merging, score tracking, and dynamic UI updates.",
    technologies: [
      "JavaScript (ES6)",
      "HTML5",
      "CSS3",
      "Smooth animations",
      "Responsive design",
      "Game logic",
      "Git/Github Pages",
    ],
    category: "frontend",
    liveUrl: "https://lublubuterbrodi.github.io/2048-Game/",
    githubUrl: "https://github.com/lublubuterbrodi/2048-Game",
  },

  {
    id: 7,
    title: "Museum Landing",
    description:
      "Responsive museum landing page focused on clean layout, adaptive design, and consistent user experience across screen sizes.",
    technologies: [
      "HTML5",
      "SCSS (SASS)",
       "JavaScript (ES6)",
      "Responsive layout",
      "Flexbox & Grid",
      "Hover animations",
      "Git",
      "Github Pages",
    ],
    category: "frontend",
    liveUrl: "https://lublubuterbrodi.github.io/Museum-Landing-Page/",
    githubUrl: "https://github.com/lublubuterbrodi/Museum-Landing-Page",
  },

  {
    id: 8,
    title: "BANG & OLUFSEN Landing",
    description:
      "Responsive product landing page with a modern layout, structured content, and adaptive styling for desktop, tablet, and mobile devices.",
    technologies: [
      "HTML5",
      "SCSS",
      "CSS3",
      "JavaScript (ES6)",
      "Smooth animations",
       "Responsive layout",
       "Flexbox & Grid",
      "Git",
      "Github Pages",
    ],
    category: "frontend",
    liveUrl: "https://lublubuterbrodi.github.io/Landing-Page/",
    githubUrl: "https://github.com/lublubuterbrodi/Landing-Page",
  },
];
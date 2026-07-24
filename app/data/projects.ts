export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  mockup: "diet" | "telegram" | "manga";
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Diet Tracker",
    description:
      "A modern nutrition tracking application built with Next.js. Users can manage personalized diet plans, log meals, monitor daily weight, and search products through a fast, responsive interface.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "NextAuth",
      "Neon",
      "PostgreSQL",
    ],
    liveUrl: "https://des-diet-tracker.vercel.app/", // замени на ссылку на демо
    githubUrl: "https://github.com/lublubuterbrodi/des-diet-tracker", // замени на GitHub
    mockup: "diet",
  },

  {
    id: 2,
    title: "Telegram Content Bot",
    description:
      "A Telegram bot that delivers categorized content on demand. Users choose their preferred categories while administrators manage content through Telegram channels.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Telegram Bot API",
      "grammY",
      "Supabase",
    ],
    githubUrl: "https://github.com/lublubuterbrodi/telegram-content-bot-showcase", // GitHub
    mockup: "telegram",
  },

  {
    id: 3,
    title: "Manga Reader Bot",
    description:
      "Telegram-based manga platform featuring premium chapters, achievements, virtual currency, and a complete reading experience directly inside Telegram.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Telegram Bot API",
      "Supabase",
    ],
    githubUrl: "https://github.com/lublubuterbrodi/telegram-manga-bot-showcase", // GitHub
    mockup: "manga",
  },
];
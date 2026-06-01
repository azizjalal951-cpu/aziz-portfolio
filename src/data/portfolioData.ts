import { link } from "fs";

// 1. Kita definisikan struktur cetakannya (Type Interface) agar TypeScript tidak error
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
}

export interface Skill {
  category: string;
  items: string[];
}
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech?: string[];
}

// 2. Di sini tempat kamu menulis isi data portofoliomu secara manual
export const portfolioData = {
  name: "Muhammad Aziz Jalaluddin",
  roles: [
          "FULL-STACK WEB DEVELOPER",
          "FRONTEND ENGINEER",
          "NEXT.JS DEVELOPER",
        ],
  bio: "Building next-generation web applications with high performance, solid code structure, and premium aesthetics.",
  
  about: {
    title: "About Me",
    heading: "Building modern digital experiences with elegant design and high performance.",
    description:
      "I focus on building modern web applications with clean user experiences, optimal performance, and scalable code structure. I combine premium aesthetics with modern technology to create impactful digital products.",
  },
  
  // Daftar keahlian kamu
  skills: [
    {
      category: "Frontend Dev",
      items: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]
    },
    {
      category: "Backend & Infra",
      items: ["Node.js", "Mysql", "Supabase", "PostgreSQL", "REST API", "Git/GitHub"]
    }
  ] as Skill[],

  experiences: [
  {
    company: "Freelance & Personal Projects",
    role: "Full-Stack Web Developer",
    period: "2025 — Present",
    description:
      "Developing modern web applications with a focus on cinematic UI, high performance, and scalable frontend architecture using Next.js and the modern ecosystem.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    
  },

  {
    company: "Premium Invitation Platform",
    role: "Frontend Engineer",
    period: "2025 — Present",
    description:
      "Building premium digital experiences for modern invitation platforms with a glassmorphism approach, smooth interaction, and visual storytelling.",
    tech: [
      "React",
      "Framer Motion",
      "Tailwind CSS",
    ],
  },

  {
    company: "POS & Business Dashboard Systems",
    role: "Frontend & System Developer",
    period: "2025 — Present",
    description:
      "Developing modern business dashboards with real-time analytics, data visualization, and web-based operational management systems.",
    tech: [
      "React",
      "Supabase",
      "Recharts",
      "PostgreSQL",
    ],
    
  },
] as Experience[],
  socials: {
  github: "https://github.com/azizjalal951-cpu",
  instagram: "https://www.instagram.com/jack.zyz0",
  Whatsapp: "https://wa.me/6285850380365",
  linkedin: "https://www.linkedin.com/in/muhammad-aziz-jalaluddin-951a3224b/"
  },

  
  

  // Daftar proyek yang pernah atau sedang kamu kerjakan
  projects: [
    {
      id: 1,
      title: "Point of Sale (POS) Kasir",
      description: "Modern store cashier management application with automatic stock-depletion tracking system, daily turnover graph, and staff access rights management.",
      tech: ["React", "Supabase", "Tailwind CSS", "Recharts"],
      image : "/images/apppos1.webp",
      link : "https://pashapoultryshop.netlify.app/"
    },
    {
      id: 2,
      title: "Cyber-Glass Digital Invitation",
      description: "Premium digital invitation platform based on web with luxurious glassmorphism visuals, blur saturation effects, countdown timer, and RSVP.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      image : "/images/apppos.webp",
      link : "https://pashapoultryshop.netlify.app/"
    },
    {
      id: 3,
      title: "golden-vows-studio-main",
      description: "A premium web-based digital wedding invitation platform with luxurious glassmorphism visuals, saturation blur effects, countdown timer, and RSVP.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      image : "/images/undangan.webp",
      link : "https://azizjalal951-cpu.github.io/golden-vows-studio/"
    }
  ] as Project[]
};
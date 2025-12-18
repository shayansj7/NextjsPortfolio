// /data/projects.ts
export type Project = {
  id: number;
  title: string;
  logo: string;
  description: string;
  tech: string[];
  url: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Gyoza Senmonten Kou",
    logo: "/logos/gyoza.webp",
    description: "Website for a gyoza restaurant.",
    tech: ["Next.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    url: "https://www.gyozasenmonten-kou.jp/",
  },
  {
    id: 2,
    title: "Comming Up Soon",
    logo: "/logos/question.png",
    description: "",
    tech: [],
    url: "https://example.com",
  },
  {
    id: 3,
    title: "Comming Up Soon",
    logo: "/logos/question.png",
    description: "",
    tech: [],
    url: "https://example.com",
  },
];

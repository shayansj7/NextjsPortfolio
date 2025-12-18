// src/data/projects.ts
export type Project = {
  id: number;
  title: string;
  logo: string;
  tech: string[];
  url: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "My Portfolio",
    logo: "/logos/portfolio.svg",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://example.com",
  },
  {
    id: 2,
    title: "EC Platform",
    logo: "/logos/ec.svg",
    tech: ["React", "Stripe", "Firebase"],
    url: "https://example.com",
  },
];

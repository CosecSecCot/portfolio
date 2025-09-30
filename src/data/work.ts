import { StaticImageData } from "next/image";
import hcdImg1 from "../../public/hcd/img1.png";
import hcdImg2 from "../../public/hcd/img2.png";
import sigchiImg1 from "../../public/sigchi/img1.png";
import sigchiImg2 from "../../public/sigchi/img2.png";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  details: {
    role: string;
    client: string;
    year: number;
    tools: string[];
  };
  liveLink?: string;
  githubLink?: string;
  images: StaticImageData[];
  overview: string;
}

export const projects: Project[] = [
  {
    slug: "iiitd-hcd",
    title: "IIITD HCD Department",
    subtitle: "A website for the HCD department at IIITD.",
    description: "A comprehensive project showcasing my skills in web development, built for the Human-Centered Design department at IIITD.",
    liveLink: "https://hcd.iiitd.ac.in",
    details: {
      role: "Web Developer",
      client: "IIITD HCD Department",
      year: 2025,
      tools: ["Strapi", "Next.js", "GSAP", "Framer Motion", "Tailwind CSS"],
    },
    images: [hcdImg1, hcdImg2],
    overview: "This project involved creating a modern, responsive website that highlights the department's work and research. We used Next.js for server-side rendering, GSAP for fluid animations, and Tailwind CSS for a utility-first styling approach.",
  },
  {
    slug: "iiitd-sigchi",
    title: "IIITD ACM SIGCHI Student Chapter",
    subtitle: "A website for IIITD ACM SIGCHI Student Chapter.",
    description: "A comprehensive project showcasing my skills in web development, built for IIITD ACM SIGCHI Student Chapter",
    liveLink: "https://sigchi.iiitd.ac.in",
    details: {
      role: "Web Developer",
      client: "IIITD ACM SIGCHI Student Chapter",
      year: 2024,
      tools: ["Next.js", "GSAP", "Tailwind CSS"],
    },
    images: [sigchiImg1, sigchiImg2],
    overview: "This project involved creating a modern, responsive website that highlights the department's work and research. We used Next.js for server-side rendering, GSAP for fluid animations, and Tailwind CSS for a utility-first styling approach.",
  },
];
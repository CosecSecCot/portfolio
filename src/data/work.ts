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
  images: string[];
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
    images: ["/hcd/img1.png", "/hcd/img2.png"],
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
    images: ["/sigchi/img1.png", "/sigchi/img2.png"],
    overview: "This project involved creating a modern, responsive website that highlights the department's work and research. We used Next.js for server-side rendering, GSAP for fluid animations, and Tailwind CSS for a utility-first styling approach.",
  },
];
export interface ResumeSkillGroup {
  title: string;
  items: string[];
}

export interface ResumeProject {
  name: string;
  tagline: string;
  stack: string[];
  bullets: string[];
}

export interface ResumeData {
  name: string;
  headline: string;
  summary: string;
  focusAreas: string[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
  skillGroups: ResumeSkillGroup[];
  highlights: string[];
  project: ResumeProject;
}

export const resumeData: ResumeData = {
  name: 'Bhaskar Sharma',
  headline: 'Computer Science Student | Backend Development, REST APIs, and Data Systems',
  summary:
    'Computer Science student with experience in backend development, REST APIs, and database systems. Skilled in Python, SQL, and Git, with hands-on experience building web applications and API-driven platforms. Interested in scalable systems and data-intensive environments.',
  focusAreas: [
    'Software Engineering',
    'Backend Development',
    'Data Engineering',
    'API Platforms',
  ],
  contact: {
    email: 'bhaskar2004sharma@gmail.com',
    github: 'https://github.com/bhaskar1461',
    linkedin: 'https://www.linkedin.com/in/bhaskar-sharma-7901152ba',
  },
  skillGroups: [
    {
      title: 'Languages',
      items: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks & APIs',
      items: ['FastAPI', 'Fastify', 'Next.js', 'REST APIs', 'API-Driven Platforms'],
    },
    {
      title: 'Databases & Data',
      items: ['MySQL', 'Supabase', 'Database Systems', 'ETL Pipelines'],
    },
    {
      title: 'Cloud & Tools',
      items: ['Git', 'GitHub', 'Docker', 'Azure', 'Vercel'],
    },
  ],
  highlights: [
    'Built backend systems and REST APIs for web applications with a focus on maintainable services, clear contracts, and database-backed workflows.',
    'Worked with cloud deployment tooling and modern collaboration workflows using Docker, Azure, Vercel, Git, and GitHub.',
    'Strong interest in scalable backend systems, ETL pipelines, and data-intensive environments that require reliable data flow and service design.',
  ],
  project: {
    name: 'Anylical Engine',
    tagline: 'Gen-Z focused stock intelligence platform',
    stack: ['Next.js', 'Fastify', 'FastAPI', 'Supabase', 'TypeScript'],
    bullets: [
      'Engineered a full-stack monorepo for a Gen-Z-focused stock intelligence platform using Next.js, Fastify, FastAPI, and Supabase.',
      'Built deterministic intelligence engines that produced auditable trust scores and compliance-first AI insights for transparent stock analysis workflows.',
      'Designed modular services and shared TypeScript interfaces to keep frontend, backend, and intelligence layers aligned as the platform scaled.',
      'Structured backend and data flows to support maintainable integrations, production-oriented architecture, and reliable API communication.',
    ],
  },
};

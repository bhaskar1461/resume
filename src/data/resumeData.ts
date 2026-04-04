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

export interface ResumeEducation {
  degree: string;
  institution: string;
  details: string;
}

export interface ResumeTraining {
  title: string;
  details: string;
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
  education: ResumeEducation;
  training: ResumeTraining[];
  highlights: string[];
  project: ResumeProject;
}

export const resumeData: ResumeData = {
  name: 'Bhaskar Sharma',
  headline: 'Backend Engineer | API Development, Data Systems, and Database-Driven Applications',
  summary:
    'Backend-focused engineering student building API-driven applications, modular backend services, and database-backed workflows with Python and SQL. Delivers REST APIs, structured data handling, and production-minded service design for software systems that require reliable communication, clean architecture, and maintainable backend logic.',
  focusAreas: [
    'Backend Development',
    'REST API Engineering',
    'Data Engineering',
    'Database Systems',
  ],
  contact: {
    email: 'bhaskar2004sharma@gmail.com',
    github: 'https://github.com/bhaskar1461',
    linkedin: 'https://www.linkedin.com/in/bhaskar-sharma-7901152ba',
  },
  skillGroups: [
    {
      title: 'Backend & APIs',
      items: ['Flask', 'FastAPI', 'REST APIs'],
    },
    {
      title: 'Databases',
      items: ['MySQL', 'Supabase'],
    },
    {
      title: 'Tools & Cloud',
      items: ['Postman', 'Git', 'GitHub', 'Docker', 'Azure', 'Vercel'],
    },
    {
      title: 'Languages',
      items: ['Python', 'JavaScript (Basic)', 'SQL'],
    },
  ],
  education: {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Sreenidhi Institute of Science and Technology',
    details: '3rd Year, 2nd Semester | Expected Graduation: 2027',
  },
  training: [
    {
      title: 'Python Full Stack Web Development Training',
      details:
        'Completed training with emphasis on backend application development using Flask, REST API design, database integration, and Postman-based API testing.',
    },
  ],
  highlights: [
    'Built backend systems around clear API contracts, structured request handling, and database-backed workflows to support maintainable application logic.',
    'Used Postman, Git, GitHub, Docker, Azure, and Vercel in development and deployment workflows for iterative backend delivery.',
    'Positioned for backend engineering and data systems roles that value service design, API reliability, and practical data handling.',
  ],
  project: {
    name: 'Helpdesk Management System',
    tagline: 'Backend and database contribution for a ticketing workflow platform',
    stack: ['Flask', 'SQLAlchemy', 'SQLite', 'Python', 'HTML/CSS'],
    bullets: [
      'Contributed to the backend and database layer of a helpdesk management system built with Flask and SQLAlchemy, supporting student, admin, authority, notification, feedback, and ticket workflows.',
      'Implemented database-backed ticket lifecycle logic for creation, assignment, in-progress tracking, completion, and reopening, helping maintain consistent workflow state across the application.',
      'Worked on role-based backend flows for login, registration, dashboard access, admin ticket management, and feedback submission using session-driven request handling and secure password hashing.',
      'Helped structure the data model and persistence layer for reliable ticket records, authority mapping, and notification updates, improving maintainability of the core backend workflow.',
    ],
  },
};

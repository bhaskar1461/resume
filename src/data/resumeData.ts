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
  headline: 'Backend Engineer Intern Candidate | APIs, Data Systems, and Server-Side Development',
  summary:
    'Backend-focused Computer Science student building REST APIs, database-driven applications, and server-side workflows with Python and SQL. Experienced in API design, CRUD operations, authentication flows, and data handling for maintainable backend systems with clean architecture and reliable application logic.',
  focusAreas: [
    'Backend Engineer Intern',
    'API Development',
    'Data Systems',
    'Database Design',
  ],
  contact: {
    email: 'bhaskar2004sharma@gmail.com',
    github: 'https://github.com/bhaskar1461',
    linkedin: 'https://www.linkedin.com/in/bhaskar-sharma-7901152ba',
  },
  skillGroups: [
    {
      title: 'Backend & APIs',
      items: [
        'Flask',
        'FastAPI',
        'REST APIs',
        'API Design',
        'CRUD Operations',
        'Server-side Development',
      ],
    },
    {
      title: 'Databases & Data',
      items: [
        'MySQL',
        'Supabase',
        'Database Design',
        'Data Modeling',
        'Query Optimization',
        'ETL Pipelines',
      ],
    },
    {
      title: 'Engineering Concepts',
      items: [
        'Scalable Systems',
        'System Design',
        'Performance Optimization',
        'Error Handling',
        'Logging',
      ],
    },
    {
      title: 'Tools & Cloud',
      items: [
        'Postman',
        'Git',
        'GitHub',
        'Docker (Containerization)',
        'Azure',
        'Vercel',
        'CI/CD Basics',
      ],
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
        'Completed training focused on Flask-based backend development, REST API implementation, database integration, and API testing using Postman.',
    },
  ],
  highlights: [
    'Build backend systems around clear API contracts, structured request handling, and database-backed workflows that support maintainable application logic.',
    'Apply practical software engineering principles including clean architecture, error-aware backend logic, and reliable data flow across application workflows.',
    'Comfortable using Postman, Git, GitHub, Docker, Azure, and Vercel in project-based development and deployment workflows.',
  ],
  project: {
    name: 'Helpdesk Management System',
    tagline: 'Backend and database contribution for a ticketing workflow platform',
    stack: ['Flask', 'SQLAlchemy', 'SQLite', 'Python', 'HTML/CSS'],
    bullets: [
      'Contributed to the backend and database layer of a helpdesk management system that manages ticket creation, assignment, resolution tracking, notifications, and feedback workflows for student support use cases.',
      'Designed and implemented server-side CRUD flows for ticket creation, status updates, authority assignment, and feedback submission using Flask and SQLAlchemy.',
      'Built authentication-driven request handling for student and admin access using secure password hashing and session-based authorization to protect workflow actions and user data.',
      'Structured relational database models for students, tickets, authorities, notifications, and feedback, improving data consistency and maintainability across the core application workflow.',
      'Improved backend workflow handling for unassigned, in-progress, and completed tickets, supporting sub-second response handling for core dashboard and ticket-management actions.',
      'Helped shape a production-style backend architecture that keeps business logic, persistence, and workflow rules modular and extensible for future scaling.',
    ],
  },
};

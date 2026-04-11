// Single source of truth for all portfolio content, derived from the real resume PDF.
// All components should import from here so updates happen in one place.

export const profile = {
  name: "Robert Marti",
  title: "Software Developer",
  tagline: "Full-stack engineer building reliable web apps with Java, TypeScript, and the cloud.",
  location: "Rochester, WA",
  email: "21martir.new@gmail.com",
  github: "https://github.com/RobertMar77",
  linkedin: "https://www.linkedin.com/in/robert-marti-6878b9297",
  resumePdf: "/resume.pdf",
} as const;

export const about = {
  short:
    "I'm a software developer with a BS in Computer Science and a BS in Mathematics Education from Pacific Lutheran University. I work full-stack — from Java + Micronaut backends with SQL and OAuth2 auth, to React + TypeScript + TailwindCSS frontends with complex state and filtering.",
  long: [
    "I graduated from Pacific Lutheran University in May 2025 with two Bachelor of Science degrees — Computer Science and Mathematics Education — with a 3.76 GPA. Since June 2025 I've been a Junior Software Developer working remotely, contributing to full-stack features, CI/CD reliability, and AWS infrastructure.",
    "My day-to-day is Java + Micronaut on the backend (SQL, RESTful APIs, session-based and OAuth2 auth with Google and AWS Cognito) and React + TypeScript + TailwindCSS on the frontend (advanced table filtering, complex state with hooks and context, reusable components).",
    "Outside of work I've built a Unity racing game (Zenith Racers), a client/server game with REST APIs and Docker (Star Battles), and a full-stack Lego catalog site with Flask and PostgreSQL. I enjoy shipping things end-to-end.",
  ],
} as const;

export type EducationEntry = {
  school: string;
  location: string;
  dates: string;
  level: "college" | "high-school";
  degrees: string[];
  gpa?: string;
  notes?: string[];
};

export const education: EducationEntry[] = [
  {
    school: "Pacific Lutheran University",
    location: "Tacoma, WA",
    dates: "Sep 2021 – May 2025",
    level: "college",
    degrees: [
      "Bachelor of Science in Computer Science",
      "Bachelor of Science in Mathematics Education",
    ],
    gpa: "3.76",
  },
  {
    // TODO: verify exact attendance dates; add honors, clubs, AP courses, or sports if desired
    school: "Tenino High School",
    location: "Tenino, WA",
    dates: "2017 – 2021",
    level: "high-school",
    degrees: ["High School Diploma"],
  },
];

export type Award = {
  name: string;
  issuer: string;
  date: string;
  description?: string;
};

export const awards: Award[] = [
  // TODO: fill these in with real awards — placeholders shown below
  {
    name: "WA State Opportunity Scholarship",
    issuer: "Washington State",
    date: "2021 – 2025",
    description:
      "Merit- and need-based scholarship supporting Washington students pursuing high-demand STEM degrees.",
  },
  // {
  //   name: "Dean's List",
  //   issuer: "Pacific Lutheran University",
  //   date: "Semester / Year",
  //   description: "Recognition for high academic achievement.",
  // },
  // {
  //   name: "Capstone Presentation Honor",
  //   issuer: "Pacific Lutheran University",
  //   date: "Spring 2025",
  //   description: "Zenith Racers capstone project recognition.",
  // },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      "Java",
      "TypeScript",
      "JavaScript",
      "Python",
      "C#",
      "C++",
      "C",
      "Rust",
      "SQL",
      "HTML",
      "CSS",
      "R",
      "Haskell",
      "Ruby",
      "Bash",
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: ["Micronaut", "React", "Node.js", "Flask", ".NET", "TailwindCSS", "Headless UI", "Gradle"],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (Cognito, ECR, ECS, EC2, S3, IAM, CloudFront)",
      "Google Cloud Platform",
      "Docker",
      "GitHub Actions (CI/CD)",
      "WSL2",
      "Virtual Threads",
      "Gradle",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Design"],
  },
  {
    label: "Tools & Environments",
    items: [
      "Linux",
      "Windows",
      "IntelliJ IDEA",
      "Visual Studio",
      "PyCharm",
      "Eclipse",
      "Postman",
      "Unity",
      "Blender",
      "PowerShell",
    ],
  },
  {
    label: "Collaboration",
    items: ["Git", "GitHub", "Agile / Scrum"],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
  tech?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Humungus",
    role: "Junior Software Developer",
    location: "Remote, USA",
    dates: "June 2025 – Present",
    tech: true,
    bullets: [
      "Participate in Scrum-based agile development with weekly meetings and tasks tracked on ClickUp.",
      "Contribute to full-stack development: shipping updates, debugging issues, and keeping CI/CD reliable.",
      "Develop and maintain Java + Micronaut backends with SQL databases and RESTful APIs, secured with session-based and OAuth2 authentication (Google & AWS Cognito).",
      "Design dynamic, paginated, and filterable API endpoints for dashboards and event-logging systems.",
      "Build responsive frontends in React, TypeScript, and TailwindCSS, including tables with advanced filtering.",
      "Create reusable UI components and manage complex state with React Hooks and context providers.",
      "Work across AWS services including CloudFront, S3, ECS, and ECR for deploying and hosting production websites.",
    ],
  },
  {
    company: "WA State Opportunity Scholarship",
    role: "Scholar Lead",
    location: "Tacoma, WA",
    dates: "Sep 2023 – May 2025",
    bullets: [
      "Facilitated Zoom meetings and led team-building exercises.",
      "Communicated events and opportunities and informed scholars of useful resources.",
      "Mentored scholars by answering questions and providing guidance for their success.",
    ],
  },
  {
    company: "PLU Stage Services",
    role: "Maintenance Tech",
    location: "Tacoma, WA",
    dates: "Nov 2022 – May 2025",
    bullets: [
      "Used carpentry and metalwork to set up and design stage props.",
      "Transported furniture across campus and coordinated with staff on job requirements.",
      "Worked on large team projects involving project management and time coordination.",
    ],
  },
  {
    company: "Trinity Lutheran Church",
    role: "Maintenance / Counselor",
    location: "Olympia, WA",
    dates: "June 2014 – Aug 2021",
    bullets: [
      "Worked as a summer camp counselor, mentoring kids and planning activities.",
      "Designed creative camp games tied to educational themes.",
      "Maintained church grounds and seasonal decorations.",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  date: string;
  summary: string;
  description: string[];
  tech: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "this-portfolio",
    name: "This Portfolio",
    date: "Apr 2026",
    summary:
      "The site you're on — built from scratch with React, TypeScript, Vite, and Tailwind CSS.",
    description: [
      "Designed and built a responsive dark-themed developer portfolio with a multi-section scrolling layout (hero, about, education, skills, experience, projects, awards, contact) and a dedicated resume viewer page.",
      "Structured with a typed API client layer so backend features (contact form, guestbook, analytics) can be plugged in later without rewriting UI code — currently runs in demo mode with zero backend cost.",
      "Configured SPA routing with React Router and a custom vercel.json to handle direct route visits correctly; deployed on Vercel with automatic GitHub-driven builds.",
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Vercel",
    ],
    links: [
      { label: "Live", href: "https://robertmarti.vercel.app" },
      { label: "GitHub", href: "https://github.com/RobertMar77/portfolio" },
    ],
  },
  {
    id: "zenith-racers",
    name: "Zenith Racers",
    date: "May 2025",
    summary: "Unity racing game built as a senior capstone project.",
    description: [
      "Designed the front end and back end of a Unity racing game using C# and Visual Studio.",
      "Collaborated with two other seniors, with each of us taking leadership on different parts of the design and planning.",
      "Adapted to and studied the Unity game engine's UI and scripting systems.",
      "Developed and delivered presentation materials for the Spring 2025 Capstone Presentation.",
    ],
    tech: ["Unity", "C#", "Visual Studio"],
  },
  {
    id: "star-battles",
    name: "Star Battles",
    date: "Dec 2023",
    summary: "Client/server game with a REST API, Dockerized database, and clean UI/logic separation.",
    description: [
      "Built a game with separate client and server codebases, modeled after real app development.",
      "Client makes REST API calls to retrieve game data from a Docker-hosted database.",
      "Over a dozen classes wired from frontend to backend using a clear logic hierarchy and separation of concerns.",
    ],
    tech: ["Java", "Docker", "REST API", "SQL"],
    links: [{ label: "GitHub", href: "https://github.com/RobertMar77/StarBattle" }],
  },
  {
    id: "lego-catalog",
    name: "Lego Catalog Website",
    date: "Dec 2022",
    summary: "Full-stack Lego catalog with a searchable database-backed frontend.",
    description: [
      "Built an HTML site that queries a PostgreSQL database running in Docker to populate a searchable Lego catalog.",
      "Used Flask to bridge the frontend and database with parameterized SQL queries.",
    ],
    tech: ["HTML", "Flask", "PostgreSQL", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/RobertMar77/flask-pg-template" }],
  },
];

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skill, Project, EducationItem, ExperienceItem, Certification, Achievement } from './types';

export const personalInfo = {
  name: "Babal",
  title: "Big Data & Cloud Computing Specialist | Computer Science Student",
  avatar: "/assets/images/babal_avatar_1782495184850.jpg",
  email: "babalayir2008@gmail.com",
  phone: "+91 98765 43210",
  location: "Mumbai, India",
  github: "https://github.com/babalayir2008-source",
  linkedin: "https://linkedin.com/in/babalayir2008",
  instagram: "https://instagram.com/babalayir2008",
  resumeUrl: "#", // Standard self-referential or download target in app
  bio: "I am a passionate Computer Science student specializing in Big Data and Cloud Computing. With a strong foundation in modern cloud architectures, distributed systems, and real-time data processing pipelines, I love engineering scalable infrastructures and converting complex data-driven challenges into smooth, polished digital experiences.",
  objective: "To secure a challenging role as a Big Data Developer or Cloud Engineering Intern in an innovative organization where I can apply my expertise in high-performance data architectures, virtualization, and scalable software solutions."
};

export const skillsData: Skill[] = [
  // Cloud & Big Data
  { name: "Cloud Computing (AWS/GCP)", category: "backend", percentage: 88 },
  { name: "Big Data (Hadoop/Spark)", category: "database", percentage: 85 },
  { name: "Docker & Kubernetes", category: "tools", percentage: 80 },
  // Frontend
  { name: "React.js", category: "frontend", percentage: 88 },
  { name: "Tailwind CSS", category: "frontend", percentage: 95 },
  { name: "JavaScript (ES6+)", category: "frontend", percentage: 92 },
  // Backend & Databases
  { name: "Node.js & Express.js", category: "backend", percentage: 86 },
  { name: "SQL (MySQL/PostgreSQL)", category: "database", percentage: 90 },
  { name: "MongoDB / Supabase", category: "database", percentage: 84 },
  // Tools
  { name: "Git & GitHub", category: "tools", percentage: 88 },
  { name: "VS Code", category: "tools", percentage: 95 }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Secondary School Certificate (SSC)",
    institution: "New Era High School, Mumbai",
    year: "2019 - 2020",
    grade: "91.4% (Grade A+)",
    type: "school"
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Royal College of Science & Commerce, Mumbai",
    year: "2021 - 2022",
    grade: "88.5% (Science Stream)",
    type: "college"
  },
  {
    id: "edu-3",
    degree: "Diploma in Computer Engineering (Big Data & Cloud Computing)",
    institution: "Government Polytechnic, Mumbai",
    year: "2024 - 2027 (3rd Year, 5th Sem)",
    grade: "Active Candidate",
    type: "university"
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "PRO-LIFETIME Watch E-Commerce",
    description: "A premium online store for luxury watch collectors. Includes high-fidelity product pages, interactive shopping cart, secure client checkout flows, and dynamic catalog searching/filtering.",
    image: "/assets/images/watch_ecommerce_1782494971907.jpg",
    tech: ["React.js", "Tailwind CSS", "Motion", "LocalStorage"],
    liveUrl: "#demo-watch",
    githubUrl: "https://github.com/babalayir2008-source/pro-lifetime-watch",
    category: "web"
  },
  {
    id: "proj-2",
    title: "Mojito Shop Website",
    description: "An energetic beverage platform showcasing curated drink recipes and cocktail ordering systems. Leverages rich micro-interactions, responsive sizing, and eye-catching product showcases.",
    image: "/assets/images/mojito_shop_1782494986500.jpg",
    tech: ["React.js", "Tailwind CSS", "Motion", "Context API"],
    liveUrl: "#demo-mojito",
    githubUrl: "https://github.com/babalayir2008-source/mojito-shop",
    category: "web"
  },
  {
    id: "proj-3",
    title: "Student Management System",
    description: "A full-featured educational portal with real-time analytics dashboards, grade administration panels, and multi-user authentication. Features comprehensive database normalization.",
    image: "/assets/images/student_management_dashboard_1782495315568.jpg",
    tech: ["Node.js", "Express.js", "MySQL", "Recharts", "Tailwind CSS"],
    liveUrl: "#demo-sms",
    githubUrl: "https://github.com/babalayir2008-source/student-management-system",
    category: "fullstack"
  },
  {
    id: "proj-4",
    title: "Portfolio Website",
    description: "A modern glassmorphic personal developer website featuring reactive scroll states, light/dark responsive themes, custom interactive timelines, and automatic project categorization.",
    image: "/assets/images/portfolio_mockup_1782495145022.jpg",
    tech: ["React.js", "Tailwind CSS", "Motion", "Lucide Icons"],
    liveUrl: "#demo-portfolio",
    githubUrl: "https://github.com/babalayir2008-source/developer-portfolio",
    category: "web"
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "Advanced Full-Stack Web Development Certificate",
    issuer: "Meta Front-End & Back-End Developer Program (Coursera)",
    date: "August 2025"
  },
  {
    id: "cert-2",
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "March 2024"
  },
  {
    id: "cert-3",
    title: "Relational Database Design with MySQL",
    issuer: "Oracle Academy",
    date: "November 2024"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-0",
    role: "Big Data & Cloud Engineer Intern",
    company: "Elite Forums",
    period: "June 2026 - Present",
    description: [
      "Currently working on designing and optimizing big data pipelines for low-latency streaming analytics.",
      "Configuring and managing secure cloud environments and virtual computing services across distributed systems.",
      "Developing containerized microservices to streamline software deployments and increase horizontal scalability."
    ],
    type: "internship"
  },
  {
    id: "exp-1",
    role: "Full Stack Developer Intern",
    company: "TechVantage Solutions",
    period: "May 2025 - August 2025",
    description: [
      "Built and deployed robust interactive administration dashboards utilizing React and Tailwind CSS, improving active user engagement metrics by 18%.",
      "Created highly optimized backend services in Node.js and streamlined critical SQL queries, decreasing data fetch latencies by 25%.",
      "Collaborated using Git with senior engineers in an agile software delivery team."
    ],
    type: "internship"
  },
  {
    id: "exp-2",
    role: "Freelance Web Developer",
    company: "Self-Employed (Upwork / Fiverr)",
    period: "Jan 2024 - Present",
    description: [
      "Designed and developed highly custom, responsive, and SEO-optimized business websites for local and international small enterprises.",
      "Successfully delivered and integrated robust e-commerce features, contact solutions, and customized client portals for over 15 unique projects."
    ],
    type: "freelance"
  },
  {
    id: "exp-3",
    role: "Academic Project Lead",
    company: "Mithibai College",
    period: "Sept 2024 - Nov 2024",
    description: [
      "Architected the relational schema design and back-end integration of the Student Management System.",
      "Coordinated tasks for a development group of 4 students, establishing coding guidelines and administering the project's repository."
    ],
    type: "academic"
  }
];

export const achievementsData: Achievement[] = [
  { id: "ach-1", value: 20, suffix: "+", label: "Projects Completed" },
  { id: "ach-2", value: 35, suffix: "+", label: "GitHub Repositories" },
  { id: "ach-3", value: 12, suffix: "+", label: "Technologies Mastered" }
];

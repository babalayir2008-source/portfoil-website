/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skill, Project, EducationItem, ExperienceItem, Certification, Achievement } from './types';

export const personalInfo = {
  name: "Babal",
  title: "Full Stack Developer | Web Developer | Computer Science Student",
  avatar: "/src/assets/images/developer_avatar_1782360933509.jpg",
  email: "manshiayir@gmail.com",
  phone: "+91 98765 43210",
  location: "Mumbai, India",
  github: "https://github.com/manshiayir",
  linkedin: "https://linkedin.com/in/manshiayir",
  instagram: "https://instagram.com/manshiayir",
  resumeUrl: "#", // Standard self-referential or download target in app
  bio: "I am a passionate Computer Science student and aspiring Full-Stack Developer with a deep interest in building modern, high-performance web applications. Focused on frontend craft, interactive styling, and robust database backends, I enjoy translating complex ideas into highly polished digital experiences.",
  objective: "To secure a challenging role as a Full-Stack Developer or Software Engineer Intern in a dynamic organization where I can apply my web development expertise, database design skills, and passion for elegant UI/UX to build scalable software solutions."
};

export const skillsData: Skill[] = [
  // Frontend
  { name: "HTML5", category: "frontend", percentage: 95 },
  { name: "CSS3", category: "frontend", percentage: 90 },
  { name: "JavaScript (ES6+)", category: "frontend", percentage: 92 },
  { name: "React.js", category: "frontend", percentage: 88 },
  { name: "Tailwind CSS", category: "frontend", percentage: 95 },
  // Backend
  { name: "Node.js", category: "backend", percentage: 85 },
  { name: "Express.js", category: "backend", percentage: 84 },
  // Database
  { name: "Supabase", category: "database", percentage: 80 },
  { name: "MySQL", category: "database", percentage: 82 },
  // Tools
  { name: "Git", category: "tools", percentage: 86 },
  { name: "GitHub", category: "tools", percentage: 88 },
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
    degree: "B.Sc. in Computer Science",
    institution: "Mithibai College of Science, Mumbai",
    year: "2023 - 2026 (Expected)",
    grade: "9.2 CGPA (Current)",
    type: "university"
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "PRO-LIFETIME Watch E-Commerce",
    description: "A premium online store for luxury watch collectors. Includes high-fidelity product pages, interactive shopping cart, secure client checkout flows, and dynamic catalog searching/filtering.",
    image: "/src/assets/images/watch_ecommerce_1782360952615.jpg",
    tech: ["React.js", "Tailwind CSS", "Motion", "LocalStorage"],
    liveUrl: "#demo-watch",
    githubUrl: "https://github.com/manshiayir/pro-lifetime-watch",
    category: "web"
  },
  {
    id: "proj-2",
    title: "Mojito Shop Website",
    description: "An energetic beverage platform showcasing curated drink recipes and cocktail ordering systems. Leverages rich micro-interactions, responsive sizing, and eye-catching product showcases.",
    image: "/src/assets/images/mojito_shop_1782360968662.jpg",
    tech: ["React.js", "Tailwind CSS", "Motion", "Context API"],
    liveUrl: "#demo-mojito",
    githubUrl: "https://github.com/manshiayir/mojito-shop",
    category: "web"
  },
  {
    id: "proj-3",
    title: "Student Management System",
    description: "A full-featured educational portal with real-time analytics dashboards, grade administration panels, and multi-user authentication. Features comprehensive database normalization.",
    image: "/src/assets/images/student_dashboard_1782360985291.jpg",
    tech: ["Node.js", "Express.js", "MySQL", "Recharts", "Tailwind CSS"],
    liveUrl: "#demo-sms",
    githubUrl: "https://github.com/manshiayir/student-management-system",
    category: "fullstack"
  },
  {
    id: "proj-4",
    title: "Portfolio Website",
    description: "A modern glassmorphic personal developer website featuring reactive scroll states, light/dark responsive themes, custom interactive timelines, and automatic project categorization.",
    image: "/src/assets/images/portfolio_mockup_1782361010167.jpg",
    tech: ["React.js", "Tailwind CSS", "Motion", "Lucide Icons"],
    liveUrl: "#demo-portfolio",
    githubUrl: "https://github.com/manshiayir/developer-portfolio",
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

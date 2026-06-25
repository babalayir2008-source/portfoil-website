/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  percentage: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  category: 'web' | 'backend' | 'fullstack';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  grade: string;
  type: 'school' | 'college' | 'university';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'internship' | 'freelance' | 'academic';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Achievement {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

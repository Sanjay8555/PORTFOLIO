import React from 'react';
import { Project, SkillCategory, Experience, Certification } from './types';

export const PERSONAL_INFO = {
  name: 'SANJAY S',
  role: 'Aspiring Software Developer',
  email: 'sanjayselvakumar05@gmail.com',
  location: 'Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/sanjays-dev',
  github: 'https://github.com/sanjays-code',
  resume: '#', 
  photo: 'logo', // Special flag to use the stylized "S" logo
  taglines: [
    'Building scalable IoT & Web solutions.',
    'Passionate about Machine Learning.',
    'Full-stack development enthusiast.',
    'Lifelong learner and problem solver.'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Smart Helmet (IoT)',
    description: 'An intelligent safety system for motorcyclists featuring accident detection using accelerometers, alcohol level monitoring with MQ-3 sensors, and automated SOS emergency alerts with GPS coordinates sent via GSM/IoT integration.',
    tech: ['Arduino', 'NodeMCU', 'MQ-3 Sensor', 'Blynk Cloud', 'GPS/GSM'],
    image: 'https://images.unsplash.com/photo-1590634123166-7b563402860a?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1590634123166-7b563402860a?q=80&w=1200&auto=format&fit=crop', 
      'https://images.unsplash.com/photo-1558444458-5cd00bb12ee1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553406830-ef2513020d76?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=1200&auto=format&fit=crop'
    ],
    github: 'https://github.com/sanjays-code/smart-helmet-iot',
    demo: '#',
    category: 'tool'
  },
  {
    id: '2',
    title: 'Smart Hospital DBMS',
    description: 'A comprehensive management system for healthcare facilities, optimizing patient registrations, doctor schedules, and medical inventory tracking with high security.',
    tech: ['MySQL', 'PHP', 'Bootstrap', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/sanjays-code/hospital-dbms',
    demo: '#',
    category: 'web'
  },
  {
    id: '3',
    title: 'AgriFlow',
    description: 'A precision agriculture platform that monitors soil health and uses machine learning to recommend the best crops for optimal yield and resource management.',
    tech: ['Python', 'React', 'Flask', 'IoT Sensors'],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/sanjays-code/agriflow',
    demo: '#',
    category: 'ai'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'TypeScript', level: 85, icon: 'TS' },
      { name: 'Tailwind CSS', level: 95, icon: '🎨' },
      { name: 'Next.js', level: 80, icon: '▲' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Python', level: 80, icon: '🐍' },
      { name: 'Java', level: 75, icon: '☕' },
      { name: 'Express', level: 85, icon: '🚀' }
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'PostgreSQL', level: 75, icon: '🐘' },
      { name: 'Redis', level: 70, icon: '🔴' }
    ]
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'Docker', level: 70, icon: '🐋' },
      { name: 'Git', level: 90, icon: '📜' },
      { name: 'AWS', level: 65, icon: '☁️' },
      { name: 'Figma', level: 80, icon: '🎨' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Full Stack Intern',
    company: 'Future Interns',
    duration: '25/01/2026 - 25/02/2026',
    responsibilities: [
      'Developed and maintained full-stack web applications using modern JavaScript frameworks.',
      'Collaborated on backend API design and frontend UI/UX implementation.',
      'Utilized version control systems for efficient team collaboration and code management.'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Career Edge - Young Professional',
    issuer: 'TCS iON',
    date: 'June 2025',
    link: '#'
  },
  {
    name: 'Google Data Analytics Professional',
    issuer: 'Coursera',
    date: 'August 2025',
    link: '#'
  },
  {
    name: 'Cloud Computing Fundamentals',
    issuer: 'Infosys Springboard',
    date: 'January 2026',
    link: '#'
  },
  {
    name: 'Strategic Planning for Small Business',
    issuer: 'HP LIFE',
    date: 'March 2026',
    link: '#'
  }
];
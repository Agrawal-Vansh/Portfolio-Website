import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiMongodb,
  SiSocketdotio,
  SiPostman,
  SiVercel,
  SiRender,
  SiDatabricks,
  SiCodeforces,
  SiTestcafe,
  SiC,
  SiCplusplus,
  SiPython,
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { GoCpu } from "react-icons/go";
import { GiNetworkBars } from "react-icons/gi";
import { CiDatabase } from "react-icons/ci";
import { FaComputer } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { Code, Monitor, Server,Brain } from 'lucide-react';

/* ================= CATEGORIES ================= */
export const categories = [
  { id: 'frontend', label: 'Frontend',icon:Monitor },
  { id: 'backend', label: 'Backend',icon:Server },
  { id: 'tools_languages', label: 'Tools & Languages' ,icon:Code},
  { id: 'cs_fundamentals', label: 'CS Fundamentals' ,icon: Brain},
];

/* ================= SKILLS DATA ================= */
export const skillsData = {
  /* ================= FRONTEND ================= */
  frontend: [
    {
      name: 'React',
      icon: SiReact,
      color: 'bg-sky-500',
      level: 94,
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      color: 'bg-black dark:bg-zinc-900',
      level: 88,
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: 'bg-yellow-400',
      level: 90,
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: 'bg-cyan-500',
      level: 87,
    },
  ],

  /* ================= BACKEND ================= */
  backend: [
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: 'bg-green-600',
      level: 95,
    },
    {
      name: 'Express',
      icon: SiExpress,
      color: 'bg-zinc-700',
      level: 93,
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: 'bg-green-700',
      level: 96,
    },
    {
      name: 'Socket.io',
      icon: SiSocketdotio,
      color: 'bg-black dark:bg-zinc-800',
      level: 92,
    },
  ],

  /* ================= TOOLS & LANGUAGES ================= */
  tools_languages: [
    /* Languages */
    {
      name: 'C',
      icon: SiC,
      color: 'bg-blue-700',
      level: 85,
    },
    {
      name: 'C++',
      icon: SiCplusplus,
      color: 'bg-blue-600',
      level: 88,
    },
    {
      name: 'Java',
      icon: FaJava ,
      color: 'bg-red-600',
      level: 84,
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: 'bg-yellow-400',
      level: 90,
    },
    {
      name: 'Python',
      icon: SiPython,
      color: 'bg-blue-500',
      level: 86,
    },

    /* Tools */
    {
      name: 'Git',
      icon: SiGit,
      color: 'bg-orange-500',
      level: 85,
    },
    {
      name: 'Postman',
      icon: SiPostman,
      color: 'bg-orange-400',
      level: 80,
    },
    {
      name: 'Vercel',
      icon: SiVercel,
      color: 'bg-black dark:bg-zinc-900',
      level: 82,
    },
    {
      name: 'Render',
      icon: SiRender,
      color: 'bg-indigo-600',
      level: 78,
    },
  ],

  /* ================= CS FUNDAMENTALS ================= */
  cs_fundamentals: [
    {
      name: 'Data Structures',
      icon: SiDatabricks,
      color: 'bg-purple-600',
      level: 90,
    },
    {
      name: 'Algorithms',
      icon: SiCodeforces,
      color: 'bg-pink-600',
      level: 88,
    },
    {
      name: 'Operating Systems',
      icon: FaComputer,
      color: 'bg-indigo-600',
      level: 87,
    },
    {
      name: 'DBMS',
      icon: CiDatabase,
      color: 'bg-emerald-600',
      level: 89,
    },
    {
      name: 'Computer Networks',
      icon: GiNetworkBars,
      color: 'bg-sky-600',
      level: 86,
    },
    {
      name: 'COA',
      icon: GoCpu,
      color: 'bg-rose-600',
      level: 84,
    },
    {
      name: 'Information Security',
      icon: MdOutlineSecurity,
      color: 'bg-green-400',
      level: 84,
    },
    {
      name: 'Testing Basics',
      icon: SiTestcafe,
      color: 'bg-teal-600',
      level: 86,
    },
  ],
};

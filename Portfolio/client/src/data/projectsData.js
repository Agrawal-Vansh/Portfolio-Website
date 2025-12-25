export const projectsData = [
  {
    title: 'BlackBox',
    description: 'Reverse-Engineering Challenge Platform',
    points: [
      'Built a real-time coding challenge where users reverse-engineer hidden functions using input–output trials and LISP-style submissions.',
      'Secured client logic using JavaScript obfuscation and custom hashing to safely verify all equivalent valid expressions.',
      'Implemented a real-time leaderboard with live scores, time-based tie-breakers, and strict Firebase rules.',
      'Enabled authenticated access and persistent sessions so users resume progress after reloads or connectivity issues.',
    ],
    tech: ['MERN', 'JavaScript Obfuscation', 'Firebase'],
    github: '#',
    live: '#',
    gradient: 'from-indigo-900 via-purple-900 to-black',
  },
  {
    title: 'CodePal',
    description: 'Real-Time Collaborative Code Editor',
    points: [
      'Developed a multi-user real-time code editor using Monaco Editor with syntax highlighting, autocompletion, and error detection.',
      'Implemented Socket.io-based synchronization to ensure instant code updates across all connected users.',
      'Designed seamless collaboration workflows enabling multiple users to edit and debug code simultaneously.',
    ],
    tech: ['MERN', 'Monaco Editor', 'Socket.io'],
    github: '#',
    live: '#',
    gradient: 'from-orange-900 via-red-900 to-black',
  },
  {
    title: 'ScheduLine',
    description: 'Automated Bus Scheduling & Route Management System',
    points: [
      'Engineered an automated bus scheduling and route management system for Delhi Transport Corporation.',
      'Implemented secure authentication and authorization using JWT tokens and bcrypt.',
      'Used MongoDB to manage 1,000+ users, including bus routes, crew schedules, and leave applications.',
      'Collaborated during Smart India Hackathon (SIH) to ensure smooth frontend–backend integration.',
    ],
    tech: ['MERN', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: '#',
    live: '#',
    gradient: 'from-emerald-900 via-teal-900 to-black',
  },
];
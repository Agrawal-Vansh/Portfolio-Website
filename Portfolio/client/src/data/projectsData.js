export const projectsData = [
  {
    id: "blackbox",
    title: "BlackBox",
    subtitle: "Reverse-Engineering Challenge Platform",

    description:
      "A real-time coding challenge platform where participants reverse-engineer hidden functions through input-output trials and LISP-style submissions.",

    points: [
      "Built an interactive challenge engine based on input-output trials and custom expression submissions.",
      "Implemented JavaScript obfuscation and custom hashing as part of the challenge verification mechanism.",
      "Developed a real-time leaderboard with live scores and time-based tie-breaking using Firebase.",
      "Implemented authenticated access and persistent sessions to preserve participant progress."
    ],

    tech: [
      "MERN Stack",
      "JavaScript",
      "Firebase",
      "Real-time Database"
    ],

    screenshots: [
      {
        src: "/images/projects/blackbox-challenge.png",
        alt: "BlackBox challenge interface showing question inputs and live leaderboard"
      },
      {
        src: "/images/projects/blackbox-results.png",
        alt: "BlackBox contest results and participant rankings"
      },
      {
        src: "/images/projects/blackbox-instructions.png",
        alt: "BlackBox instructions and team authentication interface"
      }
    ],

    live: "https://black-box-test.vercel.app/",
    github: null,
    repositoryPrivate: true,

    gradient: "from-indigo-900 via-purple-900 to-black"
  },

  {
    id: "codepal",
    title: "CodePal",
    subtitle: "Real-Time Collaborative Code Editor",

    description:
      "A collaborative browser-based coding environment that allows multiple users to write, edit, and debug code together in real time.",

    points: [
      "Integrated Monaco Editor with syntax highlighting, autocompletion, and error detection.",
      "Implemented Socket.io-based synchronization for real-time code updates across connected users.",
      "Designed collaborative workflows allowing multiple users to edit and debug code simultaneously."
    ],

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Monaco Editor"
    ],

  screenshots: [
    {
      src: "/images/projects/codepal-join-room.png",
      alt: "CodePal room interface for joining an existing room or creating a new room"
    },
  {
    src: "/images/projects/codepal-editor.png",
    alt: "CodePal collaborative code editor showing C++ code and active room participants"
  }
],

    live: "https://codepal-frontend.onrender.com/home",
    github: "https://github.com/Agrawal-Vansh/CodePal",
    repositoryPrivate: false,

    gradient: "from-orange-900 via-red-900 to-black"
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

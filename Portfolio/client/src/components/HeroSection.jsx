import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = [
  'Full Stack Developer',
  'Problem Solver',
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className=" mt-8
        relative min-h-screen flex items-center justify-center overflow-hidden
        text-gray-900 dark:text-white
      "
    >
      <div
        className="
          absolute inset-0 pointer-events-none
          dark:bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15),transparent_55%)]
          bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.12),transparent_60%)]
        "
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span
              className="
                inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm
                border
                dark:bg-black/40 dark:backdrop-blur dark:border-teal-400/30 dark:text-teal-300
                bg-teal-50 border-teal-200 text-teal-700
              "
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-bold mb-4 leading-tight"
          >
            <span className="block text-gray-900 dark:text-white">
              Hi, I&apos;m
            </span>
           <span
  className="
    block text-teal-600 dark:text-teal-400
    dark:[text-shadow:0_0_12px_rgba(20,184,166,0.9),0_0_32px_rgba(20,184,166,0.6)]
    text-shadow-none
  "
>
  Vansh Agrawal
</span>

          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="h-12 md:h-14 flex items-center justify-center mb-6"
          >
            <span
              className="
                text-xl md:text-2xl lg:text-3xl font-serif
                text-gray-600 dark:text-gray-400
              "
            >
              {displayText}
              <span className="inline-block w-0.75 h-6 md:h-8 bg-teal-500 ml-1 animate-pulse" />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="
              text-lg mb-10 max-w-2xl mx-auto
              text-gray-600 dark:text-gray-400
            "
          >
            {/* I craft full-stack applications, integrate AI solutions, and solve real-world problems. */}
            Passionate about building scalable applications that make a difference.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a
              href="#projects"
              className="
                px-10 py-4 rounded-xl font-semibold
                bg-teal-500 text-white
                hover:bg-teal-600
                dark:bg-teal-400 dark:text-black
                dark:shadow-[0_0_35px_rgba(20,184,166,0.8)]
                transition-all duration-300
              "
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="
                px-10 py-4 rounded-xl font-semibold
                border
                border-teal-300 text-teal-700
                hover:bg-teal-50
                dark:bg-black/40 dark:border-teal-400/30 dark:text-teal-300
                dark:hover:bg-black/60
                transition-all duration-300
              "
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 mt-12"
          >
                    {[
          {
            Icon: Github,
            href: 'https://github.com/agrawal-vansh',
            label: 'GitHub',
          },
          {
            Icon: Linkedin,
            href: 'https://linkedin.com/in/agrawal-vansh',
            label: 'LinkedIn',
          },
          {
            Icon: Mail,
            href: 'mailto:vanshaggrawal1@gmail.com',
            label: 'Email',
          },
          {
            Icon: FileText,
            href: '/resume.pdf',
            label: 'Resume',
          },
        ].map(({ Icon, href, label }, i) => (
          <a
            key={i}
            href={href}
            target={label !== 'Email' ? '_blank' : undefined}
            rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
            aria-label={label}
            className="
              group p-4 rounded-xl border
              border-teal-200 text-teal-600
              hover:bg-teal-50 hover:border-teal-300
              transition-all duration-300

              dark:bg-black/40 dark:border-teal-400/20 dark:text-teal-300
              dark:hover:text-teal-400
              dark:hover:shadow-[0_0_25px_rgba(20,184,166,0.6)]
            "
          >
            <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </a>
        ))}

          </motion.div>
        </motion.div>

        {/* Scroll */}
        <div
          className="
            absolute bottom-8 left-1/2 -translate-x-1/2
            text-teal-600 dark:text-teal-400/70
          "
        >
          <ArrowDown className="m-6  animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

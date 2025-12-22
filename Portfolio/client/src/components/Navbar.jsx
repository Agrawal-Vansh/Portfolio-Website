import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all
        ${isScrolled
          ? 'bg-black/40 backdrop-blur-xl border-b border-teal-400/20'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        {/* <motion.a
  href="#hero"
  whileHover={{ scale: 1.05 }}
  className="flex items-center gap-2 group"
>
  <div
    className=" 
      p-2 rounded-lg
      bg-black/40 border border-teal-400/30
      shadow-[0_0_20px_rgba(20,184,166,0.6)]
      group-hover:shadow-[0_0_30px_rgba(20,184,166,1)]
      transition
    "
  >
     <span
              className="text-teal-400"
              style={{
                textShadow:
                  '0 0 12px rgba(20,184,166,0.9), 0 0 32px rgba(20,184,166,0.6)',
              }}
            >
              VA
            </span>
    {/* <Code2 className="w-5 h-5 text-teal-400" /> */}
  {/* </div> */}


{/* </motion.a> */} 

<motion.a
  href="#hero"
  whileHover={{ scale: 1.05 }}
  className="flex items-center gap-2 group"
>
  <div
    className="
      p-2 rounded-lg
      bg-white/80 dark:bg-black/40
      border border-teal-500/40 dark:border-teal-400/30
      shadow-[0_0_12px_rgba(20,184,166,0.35)]
      dark:shadow-[0_0_20px_rgba(20,184,166,0.6)]
      group-hover:shadow-[0_0_18px_rgba(20,184,166,0.6)]
      dark:group-hover:shadow-[0_0_30px_rgba(20,184,166,1)]
      backdrop-blur
      transition-all duration-300
    "
  >
    <span
      className="
        font-bold tracking-tight
        text-teal-600 dark:text-teal-400
      "
      style={{
        textShadow: `
          0 0 2px rgba(255,255,255,0.8),
          0 0 10px rgba(20,184,166,0.45),
          0 0 24px rgba(20,184,166,0.35)
        `,
      }}
    >
      VA
    </span>
  </div>
</motion.a>


        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="
                relative px-4 py-2 text-sm font-medium
                dark:text-gray-300 hover:text-teal-400
                transition group
              "
            >
              {link.name}

              {/* Neon underline */}
              <span
                className="
                  absolute bottom-0 left-1/2 -translate-x-1/2
                  w-0 h-[2px]
                  bg-teal-400
                  shadow-[0_0_10px_rgba(20,184,166,1)]
                  group-hover:w-1/2
                  transition-all duration-300
                "
              />
            </motion.a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg bg-black/40 border border-teal-400/30"
          >
            {open ? (
              <X className="w-5 h-5 text-teal-400" />
            ) : (
              <Menu className="w-5 h-5 text-teal-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="
              md:hidden bg-black/60 backdrop-blur-xl
              border-t border-teal-400/20
            "
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    block px-4 py-3 rounded-lg
                    text-gray-300 hover:text-teal-400
                    hover:bg-white/5
                    transition
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

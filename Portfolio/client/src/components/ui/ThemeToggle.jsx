import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ isDark, toggle }) => {
  return (
    <motion.button
      onClick={toggle}
      className="relative p-2 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-primary" />
        ) : (
          <Sun className="w-5 h-5 text-accent" />
        )}
      </motion.div>

      <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.button>
  );
};

export default ThemeToggle;

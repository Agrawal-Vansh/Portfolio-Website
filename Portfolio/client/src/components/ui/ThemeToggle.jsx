import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ isDark, toggle }) => {
  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-full
                 bg-gray-100 dark:bg-gray-800
                 border border-gray-200 dark:border-gray-700"
    >
      {isDark ? <Moon /> : <Sun />}
    </motion.button>
  );
};

export default ThemeToggle;

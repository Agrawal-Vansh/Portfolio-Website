import { motion } from 'framer-motion';
import { useState } from 'react';

const FlipSkillCard = ({ skill }) => {
  const Icon = skill.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="h-40 w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ROTATING WRAPPER */}
      <motion.div
        className="
          relative h-full w-full transform-3d
          bg-white
          dark:bg-black
        "
        animate={{ rotateY: hovered ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* FRONT */}
        <div
          className="
            absolute inset-0 backface-hidden rounded-2xl
            flex flex-col items-center justify-center gap-3
            bg-white border border-zinc-200 shadow-sm
            dark:bg-zinc-900/60 dark:border-white/10 dark:shadow-none
          "
        >
          <div className={`${skill.color} p-4 rounded-xl`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <span className="font-medium text-lg text-zinc-900 dark:text-white">
            {skill.name}
          </span>
        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0 rotate-y-180 backface-hidden rounded-2xl
            flex flex-col items-center justify-center gap-3
            border
            bg-gradient-to-br from-purple-500/10 to-cyan-400/10
            border-zinc-200 text-zinc-900
            dark:border-white/10 dark:text-white
          "
        >
          <span className="text-4xl font-bold">
            {skill.level}%
          </span>

          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            Proficiency
          </span>

          {/* Progress bar */}
          <div className="w-2/3 h-1.5 bg-zinc-200 dark:bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: hovered ? `${skill.level}%` : 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipSkillCard;

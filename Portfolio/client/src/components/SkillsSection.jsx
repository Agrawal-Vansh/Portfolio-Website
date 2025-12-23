import { useState } from 'react';
import { motion } from 'framer-motion';
import { categories, skillsData } from '../data/skillsData';
import FlipSkillCard from './ui/FlipSkillCard';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section className="relative py-24
     text-zinc-900
      dark:bg-transparent dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
           <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={true ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
         
          <span className="inline-block px-4 py-1.5 rounded-full   dark:bg-black/40 dark:backdrop-blur dark:border-teal-400/30 dark:text-teal-300
                bg-teal-50 border-teal-200 text-teal-700
                 border border-accent/30 text-accent text-xl font-medium mb-4">
            Technical Skills
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills &{' '}
            <span className="gradient-text-accent">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
  {categories.map((cat) => {
    const Icon = cat.icon;

    return (
      <button
        key={cat.id}
        onClick={() => setActiveTab(cat.id)}
        className={`
          flex items-center gap-2 px-5 py-2.5 rounded-full
          text-sm font-medium transition-all duration-300
          ${
            activeTab === cat.id
              ? 'bg-purple-600 text-white shadow-md'
              : `
                bg-zinc-100 text-zinc-600
                hover:bg-zinc-200 hover:text-zinc-900
                dark:bg-zinc-800 dark:text-zinc-400
                dark:hover:bg-zinc-700 dark:hover:text-white
              `
          }
        `}
      >
        <Icon className="w-4 h-4" />
        <span>{cat.label}</span>
      </button>
    );
  })}
</div>


        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skillsData[activeTab].map((skill) => (
            <FlipSkillCard key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { timelineData } from '../data/timeLineData';

const TimelineItem = ({ item, index }) => {
  const itemRef = useRef(null);

  const { scrollYProgress } = useScroll({
  target: itemRef,
  offset: ['start 90%', 'end 10%'],
});

/* ================= CARD ANIMATIONS ================= */
const opacity = useTransform(
  scrollYProgress,
  [0, 0.15, 0.85, 1],
  [0, 1, 1, 0]
);

const x = useTransform(
  scrollYProgress,
  [0, 0.15, 0.85, 1],
  [index % 2 === 0 ? -40 : 40, 0, 0, index % 2 === 0 ? -40 : 40]
);

/* ================= NODE ANIMATIONS ================= */
const scale = useTransform(
  scrollYProgress,
  [0, 0.15, 0.85, 1],
  [0, 1, 1, 0]
);

const nodeOpacity = useTransform(
  scrollYProgress,
  [0, 0.15, 0.85, 1],
  [0, 1, 1, 0]
);

  const Icon = item.icon;

  return (
    <div
      ref={itemRef}
      className={`relative flex items-start mb-16 ${
        index % 2 === 0
          ? 'md:flex-row'
          : 'md:flex-row-reverse'
      }`}
    >
      {/* ================= NODE ================= */}
      <motion.div
        style={{ scale, opacity: nodeOpacity }}
        className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20"
      >
        <div
          className="
            w-4 h-4 rounded-full
            bg-teal-500
            shadow-[0_0_0_4px_rgba(20,184,166,0.25),0_0_16px_rgba(20,184,166,0.6)]
            dark:shadow-[0_0_0_4px_rgba(45,212,191,0.8),0_0_16px_rgba(45,212,191,0.8)]
          "
        />
      </motion.div>

      {/* ================= CARD ================= */}
      <motion.div
        style={{ opacity, x }}
        className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
          index % 2 === 0
            ? 'md:pr-8 md:text-right'
            : 'md:pl-8'
        }`}
      >
        <div
          className="
            relative p-6 rounded-2xl
            bg-white/90 backdrop-blur-md
            border border-teal-500/40
            shadow-lg
            text-zinc-900

            dark:bg-black/70
            dark:border-teal-400/60
            dark:shadow-[0_0_30px_rgba(45,212,191,0.35)]
            dark:text-white
          "
        >
          {/* Icon + period */}
          <div
            className={`flex items-center gap-3 mb-3 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                item.type === 'work'
                  ? 'bg-primary/20 text-primary'
                  : 'bg-accent/20 text-accent'
              }`}
            >
              <Icon className="w-4 h-4" />
            </div>

            <span className="text-sm font-medium text-purple-800 dark:text-teal-200">
              {item.period}
            </span>
          </div>

          <h3 className="font-display text-lg font-bold mb-1">
            {item.title}
          </h3>

          <p className="font-medium  mb-1 text-accent">
            {item.organization}
          </p>

          {item.score && (
              <p className="text-sm mb-3 font-semibold text-primary">
                {item.score}
              </p>
            )}


          <p className="text-sm leading-relaxed text-gray-900 dark:text-zinc-300">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};


const TimelineSection = () => {
  const timelineRef = useRef(null);

  /* LINE SCROLL PROGRESS */
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 90%'],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* HEADER */}
         <span className=" px-4 py-1.5 rounded-full flex  text-center justify-center  dark:bg-black/40 dark:backdrop-blur dark:border-teal-400/30 dark:text-teal-300
                bg-teal-50 border-teal-200 text-teal-700
                 border border-accent/30 text-accent text-xl font-medium mb-4">
          My Journey
          </span>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </div>

        {/* TIMELINE */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* LINE */}
          <motion.div
            style={{ scaleY: lineScaleY }}
            className="
              absolute left-4 md:left-1/2 md:-translate-x-1/2
              top-0 bottom-0 origin-top
              w-0.5
              bg-gradient-to-b from-teal-400/20 via-teal-400 to-teal-400/20
              shadow-[0_0_8px_rgba(45,212,191,0.8),0_0_16px_rgba(45,212,191,0.6)]
              z-10
            "
          />

          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

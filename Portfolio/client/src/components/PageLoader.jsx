import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return Math.min(prev + Math.random() * 12 + 6, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="
        fixed inset-0 z-[999]
        flex flex-col items-center justify-center
        bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.18),transparent_60%),linear-gradient(135deg,#020617,#020617)]
      "
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="mb-10 text-5xl font-serif tracking-widest text-white"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        VA
      </motion.div>

      {/* Orbit Loader */}
      <div className="relative w-20 h-20 mb-8">
        <motion.div
          className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-cyan-400 border-r-cyan-400/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-3 rounded-full border-[3px] border-transparent border-b-purple-500 border-l-purple-500/30"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="
            absolute top-1/2 left-1/2 w-2.5 h-2.5
            -translate-x-1/2 -translate-y-1/2
            rounded-full bg-cyan-400
            shadow-[0_0_12px_rgba(34,211,238,0.8)]
          "
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </div>

      {/* Progress Bar */}
      <div className="w-56 h-[3px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          style={{ boxShadow: "0 0 12px rgba(99,102,241,0.8)" }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Loading text */}
      <motion.p
        className="mt-4 text-sm text-white/50 font-mono"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        Loading experience...
      </motion.p>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/60"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

const PageLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageLoader;

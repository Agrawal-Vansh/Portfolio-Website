import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Luzz',
    description: 'A fun side project to cleanse your LinkedIn feed',
    points: [
      'Browser extension that removes cringe from LinkedIn posts',
      'Passes post to AI → cleans it → replaces original',
      'Widget to toggle between original & cleaned post',
    ],
    tech: ['Next.js', 'JavaScript'],
    github: '#',
    live: '#',
    gradient: 'from-indigo-900 via-purple-900 to-black',
  },
  {
    title: 'Documentation Assistant',
    description: 'AI-powered documentation helper',
    points: [
      'Reads large docs instantly',
      'Context-aware answers',
      'Export summaries',
    ],
    tech: ['React', 'OpenAI'],
    github: '#',
    live: '#',
    gradient: 'from-orange-900 via-red-900 to-black',
  },
  {
    title: 'Sage',
    description: 'Smart research & productivity assistant',
    points: [
      'Multi-source research',
      'AI summaries',
      'Citation support',
    ],
    tech: ['Next.js', 'AI'],
    github: '#',
    live: '#',
    gradient: 'from-emerald-900 via-teal-900 to-black',
  },
];

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      // stack cards vertically
      gsap.set(cards, {
        y: (i) => i * window.innerHeight * 0.7,
      });

      gsap.to(cards, {
        y: (i) => i * 20, // compressed stack
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${cards.length * 400}`,
          scrub: true,
          pin: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-red-400"
      style={{ height: `${projects.length * 120}vh` }}
    >
      <div className="h-screen flex items-center justify-center">
        <div className="relative w-full max-w-6xl h-[70vh]">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="
                absolute inset-0
                rounded-3xl
                border border-white/10
                bg-black/80 backdrop-blur-xl
                shadow-2xl
                flex overflow-hidden
              "
            >
              {/* LEFT CONTENT */}
              <div className="w-1/2 p-10 flex flex-col justify-between text-white">
                <div>
                  <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
                  <p className="text-white/70 mb-6">
                    {project.description}
                  </p>

                  <ul className="space-y-3 text-white/80">
                    {project.points.map((point, i) => (
                      <li key={i}>– {point}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-3 flex-wrap">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-4 py-1 rounded-full border border-white/20 text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
                    >
                      Live Site ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT PREVIEW */}
              <div
                className={`w-1/2 flex items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <span className="text-6xl font-bold text-white/30">
                  {project.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

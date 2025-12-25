import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'Luzz', bg: 'bg-green-600' },
  { title: 'Documentation Assistant', bg: 'bg-orange-600' },
  { title: 'Sage', bg: 'bg-red-600' },
];

const CARD_HEIGHT = 220; // px (≈ 25vh)

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      // initial positions
      gsap.set(cards, {
        y: (i) => i * CARD_HEIGHT,
      });

      gsap.to(cards, {
        y: (i) => i * 10, // compressed stack
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${cards.length * 300}`,
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
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="h-screen flex items-center justify-center">
        <div className="relative w-full max-w-6xl">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`
                absolute left-0 right-0 mx-auto
                h-[25vh]
                ${project.bg}
                rounded-3xl
                shadow-2xl
                border border-white/20
                flex items-center justify-center
                text-white text-4xl font-bold
              `}
              style={{ top: 0 }}
            >
              {project.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

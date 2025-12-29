import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProjectCard from './ui/ProjectCard';
import { projectsData } from '../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

const GAP = 40;
const PEEK_OFFSET = 60;
const TITLE_HEIGHT = 72;
const REVEAL_SCROLL = 400;
const STACK_SCROLL = 300;

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      const offsets = [];
      let currentOffset = 0;

      cards.forEach((card, i) => {
        offsets[i] = currentOffset;
        currentOffset += card.offsetHeight + GAP;
      });

      cards.forEach((card, i) => {
        gsap.set(card, {
          y: offsets[i] - i * PEEK_OFFSET,
        });
      });

      let accumulatedScroll = 0;

      for (let i = 1; i < cards.length; i++) {
        const prevCard = cards[i - 1];
        const currentCard = cards[i];

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: `top+=${accumulatedScroll} top`,
          end: `top+=${accumulatedScroll + REVEAL_SCROLL} top`,
          scrub: true,
          onUpdate: (self) => {
            const anchorY = (i - 1) * GAP + TITLE_HEIGHT;

            gsap.set(currentCard, {
              y:
                offsets[i] -
                self.progress * (offsets[i] - anchorY),
            });
          },
        });

        accumulatedScroll += REVEAL_SCROLL;

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: `top+=${accumulatedScroll} top`,
          end: `top+=${accumulatedScroll + STACK_SCROLL} top`,
          scrub: true,
          onUpdate: (self) => {
            gsap.set(prevCard, {
              y:
                ((i - 1) * GAP - PEEK_OFFSET) *
                self.progress,
            });
          },
        });

        accumulatedScroll += STACK_SCROLL;
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${accumulatedScroll}`,
        pin: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative h-200"
    >
      <span className=" px-4 py-1.5 rounded-full flex  text-center justify-center  dark:bg-black/40 dark:backdrop-blur dark:border-teal-400/30 dark:text-teal-300
                bg-teal-50 border-teal-200 text-teal-700
                 border border-accent/30 text-accent text-xl font-medium mb-4">
          Projects
          </span>

      <div className="h-screen flex items-start pt-24 ">
        <div className="relative w-full max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              cardRef={(el) => (cardsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

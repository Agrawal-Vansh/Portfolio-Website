import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ProjectCard from './ui/ProjectCard';
import { projectsData } from '../data/projectsData';
gsap.registerPlugin(ScrollTrigger);

const GAP = 40;
const REVEAL_SCROLL = 400; // scroll to reveal a card
const STACK_SCROLL = 300;  // scroll to stack previous card

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      let offsets = [];
      let currentOffset = 0;

      cards.forEach((card, i) => {
        offsets[i] = currentOffset;
        currentOffset += card.offsetHeight + GAP;
      });

      gsap.set(cards, {
        y: (i) => offsets[i],
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
            gsap.set(currentCard, {
              y: offsets[i] * (1 - self.progress),
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
              y: (i - 1) * GAP * self.progress,
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
      className="relative bg-red-400"
      style={{ height: '400vh' }}
    >
      <div className="h-screen flex items-start pt-24">
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

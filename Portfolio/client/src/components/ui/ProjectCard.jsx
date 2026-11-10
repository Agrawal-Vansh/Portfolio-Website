import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectGallery from "./ProjectGallery";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, index }) => {
  const isReversed = index % 2 !== 0;
  const cardRef = useRef(null);
  useEffect(() => {
  const card = cardRef.current;

  if (!card) return;

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const gallery = card.querySelector("[data-project-gallery]");
      const content = card.querySelector("[data-project-content]");

      // Animate the complete project card
      gsap.fromTo(
        card,
        {
          autoAlpha: 0,
          y: 50,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Stagger the gallery and project information
      gsap.fromTo(
        [gallery, content].filter(Boolean),
        {
          x: isReversed ? 25 : -25,
        },
        {
          x: 0,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            once: true,
          },
        }
      );
    });

    return () => mm.revert();
  }, card);

  return () => ctx.revert();
}, [isReversed]);
  return (
    <article
      ref={cardRef}
    className={`
      relative overflow-hidden
      rounded-3xl
      border border-slate-200 dark:border-white/10
      bg-white dark:bg-[#080e12]
      shadow-[0_0_25px_rgba(20,184,166,0.06)]
      dark:shadow-[0_0_25px_rgba(20,184,166,0.08)]
      hover:shadow-[0_0_30px_rgba(20,184,166,0.12)]
      dark:hover:shadow-[0_0_30px_rgba(20,184,166,0.16)]
      transition-all duration-500
      ${index !== 0 ? "mt-12 md:mt-20" : ""}
    `}
    >
      {/* Subtle background accent */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div
        className={`
          relative z-10
          grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]
          gap-8 lg:gap-12
          items-center
          p-5 sm:p-8 lg:p-10
        `}
      >
        {/* PROJECT GALLERY */}
        <div   data-project-gallery
 className={isReversed ? "lg:order-2" : "lg:order-1"}>
          <ProjectGallery
            screenshots={project.screenshots}
            projectTitle={project.title}
          />
        </div>

        {/* PROJECT INFORMATION */}
        <div
          data-project-content

          className={`
            flex flex-col
            ${isReversed ? "lg:order-1" : "lg:order-2"}
          `}
        >
          {/* PROJECT NUMBER */}
          <span className="text-sm font-semibold tracking-[0.2em] text-teal-600 dark:text-teal-400 uppercase mb-4">
            Project {String(index + 1).padStart(2, "0")}
          </span>

          {/* TITLE */}
          <h3 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            {project.title}
          </h3>

          {/* SUBTITLE */}
          <h4 className="text-lg sm:text-xl text-teal-600 dark:text-teal-300/90 font-medium mt-2">
            {project.subtitle}
          </h4>

          {/* DESCRIPTION */}
          <p className="text-slate-600 dark:text-white/65 text-sm sm:text-base leading-relaxed mt-5">
            {project.description}
          </p>

          {/* ENGINEERING HIGHLIGHTS */}
          <div className="mt-7">
            <h5 className="text-slate-900 dark:text-white text-sm font-semibold mb-4">
              Engineering Highlights
            </h5>

            <ul className="space-y-3">
              {project.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-600 dark:text-white/65 text-sm leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-teal-500 dark:bg-teal-400" />                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* TECHNOLOGIES */}
          <div className="mt-7">
            <h5 className="text-slate-700 dark:text-white/80 text-xs font-semibold tracking-wider uppercase mb-3">              Tech Stack
            </h5>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                   className="px-3 py-1.5 rounded-full border border-teal-500/25 bg-teal-50 text-teal-700 dark:border-teal-400/20 dark:bg-teal-400/5 dark:text-teal-200/80 text-xs sm:text-sm transition-colors hover:border-teal-500/50 hover:bg-teal-100 dark:hover:border-teal-400/50 dark:hover:bg-teal-400/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* PROJECT ACTIONS */}
         <div className="flex flex-wrap items-center gap-3 mt-8">

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2
        px-5 py-2.5
        rounded-full
        bg-teal-600 text-white
        dark:bg-teal-500 dark:text-slate-950
        text-sm font-semibold
        hover:bg-teal-700
        dark:hover:bg-teal-400
        transition-all duration-300
      "
    >
      Live Demo ↗
    </a>
  )}

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2
        px-5 py-2.5
        rounded-full
        border border-slate-300
        text-slate-700
        hover:bg-slate-100
        hover:border-slate-400
        dark:border-white/20
        dark:text-white
        dark:hover:bg-white/10
        dark:hover:border-white/40
        text-sm font-medium
        transition-all duration-300
      "
    >
      GitHub ↗
    </a>
  )}

  {project.repositoryPrivate && (
    <span className="
      text-slate-500
      dark:text-white/50
      text-xs flex items-center gap-2
    ">
      <span aria-hidden="true">🔒</span>
      Private Repository
    </span>
  )}

</div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;


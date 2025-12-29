const ProjectCard = ({ project, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className="
        relative md:absolute left-0 right-0
        rounded-3xl
        border border-white/10
        bg-black/80 backdrop-blur-xl
        flex flex-col-reverse md:flex-row
        overflow-hidden
        shadow-[0_0_0_2px_rgba(20,184,166,0.25),0_0_16px_rgba(20,184,166,0.6)]
        mb-12 md:mb-0
      "
    >
      {/* LEFT CONTENT (moves below on mobile) */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between text-white">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            {project.title}
          </h2>

          <p className="text-white/70 mb-4 md:mb-6 text-sm md:text-base">
            {project.description}
          </p>

          <ul className="space-y-2 md:space-y-3 text-white/80 text-sm md:text-base">
            {project.points.map((point, i) => (
              <li key={i}>– {point}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 md:space-y-6 mt-6">
          <div className="flex gap-2 md:gap-3 flex-wrap">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 md:px-4 py-1 rounded-full border border-white/20 text-xs md:text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3 md:gap-4 flex-wrap">
            <a
              href={project.github}
              className="px-4 md:px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
            >
              GitHub
            </a>
            <a
              href={project.live}
              className="px-4 md:px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
            >
              Live Site ↗
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — ON TOP FOR MOBILE */}
      <div
        className={`
          w-full md:w-1/2
          h-52 sm:h-60 md:h-auto
          flex items-center justify-center
          bg-gradient-to-br ${project.gradient}
        `}
      >
        <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-white/30">
          {project.title}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;

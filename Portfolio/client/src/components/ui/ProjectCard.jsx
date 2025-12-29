const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="
        project
        flex max-lg:flex-col gap-4 my-4
        sticky
        rounded-3xl overflow-hidden
        border border-white/10
        bg-black/80 backdrop-blur-xl
        transition-all duration-300
        shadow-[0_0_0_2px_rgba(20,184,166,0.25),0_0_16px_rgba(20,184,166,0.6)]
        hover:shadow-[0_0_0_2px_rgba(20,184,166,0.35),0_0_24px_rgba(20,184,166,0.9)]
      "
      style={{ top: `calc(72px + ${index * 24}px)` }}
    >
      {/* LEFT — PROJECT INFO */}
      <div className="flex flex-1 flex-col p-6 md:p-10 text-white h-full">
        <h3 className="text-2xl md:text-4xl font-bold mb-4 border-b border-white/10 pb-3">
          {project.title}
        </h3>

        <p className="text-white/70 mb-4 text-sm md:text-base">
          {project.description}
        </p>

        <ul className="space-y-2 text-white/80 text-sm md:text-base">
          {project.points.map((point, i) => (
            <li key={i}>– {point}</li>
          ))}
        </ul>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="
                px-3 py-1 text-xs md:text-sm
                rounded-full
                border border-white/20
                text-white/80
                backdrop-blur
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4 mt-8 flex-wrap">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-2 rounded-full
              border border-white/20
              text-sm
              hover:bg-white/10
              transition-all
              hover:scale-105
            "
          >
            GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-2 rounded-full
                border border-white/20
                text-sm
                hover:bg-white/10
                transition-all
                hover:scale-105
              "
            >
              Live Site ↗
            </a>
          )}
        </div>
      </div>

      {/* RIGHT — PROJECT IMAGE */}
      {/* <div className="relative flex-1 overflow-visible">
        <div
          className="
            lg:absolute lg:top-20 lg:right-[-55%]
            w-full h-40 sm:h-72 md:h-96
            lg:w-[167%] lg:h-[22rem]
            rounded-2xl
            border border-white/10
            bg-gradient-to-br
            from-teal-500/20 via-cyan-500/10 to-transparent
            backdrop-blur
            p-2
          "
        >
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="
              w-full h-full object-contain
              rounded-xl
              border border-white/10
            "
          />
        </div>
      </div> */}


      <div className={ `w-full md:w-1/2 h-52 sm:h-60 md:h-auto flex items-center justify-center bg-gradient-to-br 
        ${project.gradient}`}> 
      <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-white/30"> 
      {project.title} 
      </span> 
      </div>
    </div>
  );
};

export default ProjectCard;



const ProjectCard = ({ project, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className="
        absolute left-0 right-0
        rounded-3xl
        border border-white/10
        bg-black/80 backdrop-blur-xl
        flex overflow-hidden
            shadow-[0_0_0_2px_rgba(20,184,166,0.25),0_0_16px_rgba(20,184,166,0.6)]
        
      "
    >
      {/* LEFT CONTENT */}
      <div className="w-1/2 p-10 flex flex-col justify-between text-white">
        <div>
          <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
          <p className="text-white/70 mb-6">{project.description}</p>

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
  );
};

export default ProjectCard;

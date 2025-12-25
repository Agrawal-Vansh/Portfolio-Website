const ProjectCard = ({ project, index, total }) => {
  return (
    <div
      className="
        sticky top-24
        h-[70vh]
        rounded-3xl
        bg-black/80 backdrop-blur-xl
        border border-white/10
        shadow-[0_0_60px_rgba(0,0,0,0.7)]
        overflow-hidden
      "
      style={{ zIndex: total - index }}
    >
      <div className="grid md:grid-cols-2 h-full">
        {/* LEFT */}
        <div className="p-10 flex flex-col justify-center">
          <h3 className="text-4xl font-bold mb-4">
            {project.title}
          </h3>
          <p className="text-zinc-400 max-w-md">
            {project.description}
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

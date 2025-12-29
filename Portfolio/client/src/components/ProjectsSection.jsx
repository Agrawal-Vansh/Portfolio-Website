import { useEffect,useState } from 'react';
import ProjectCard from './ui/ProjectCard';
import { projectsData } from '../data/projectsData';

const ProjectSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      id="projects" 
      className="relative  py-12 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="px-6 py-2 rounded-full flex text-center justify-center dark:bg-black/40 dark:backdrop-blur dark:border-teal-400/30 dark:text-teal-300 bg-teal-50 border-teal-200 text-teal-700 border border-accent/30 text-accent text-xl font-medium">
            Projects
          </span>
        </div>
        {/* Projects Container */}
        <div className="space-y-0 " >
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;

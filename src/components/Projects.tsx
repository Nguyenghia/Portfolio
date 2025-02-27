
import { useEffect, useRef } from 'react';

const projects = [
  {
    title: "Screening Movie Website (Personal Project) - Full Stack Developer",
    description: "A movie app that allows users to search for movies and view details.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Spring Boot (Java)", "MySQL"],
  },
  {
    title: "Meal Time Website - Frontend Developer (Leader) - Group Project",
    description: "A meal app that allows users to search for recipes and view details.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["NodeJS", "React", "MySQL"],
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["React", "Firebase", "Tailwind"],
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div ref={containerRef} className="container mx-auto px-4">
        <span className="text-sm text-gray-600 uppercase tracking-wider">Portfolio</span>
        <h2 className="text-3xl font-bold mt-2 mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

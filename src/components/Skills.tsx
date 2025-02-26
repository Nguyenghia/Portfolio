
import { useEffect, useRef } from 'react';

const skills = [
  "React",
  "TypeScript",
  "Node.js", 
  "CSS/Tailwind",
  "MongoDB",
  "AWS"
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
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
    <section id="skills" className="py-20 bg-white">
      <div ref={containerRef} className="container mx-auto px-4">
        <span className="text-sm text-gray-600 uppercase tracking-wider">Skills</span>
        <h2 className="text-3xl font-bold mt-2 mb-12">Technical Expertise</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-gray-50 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

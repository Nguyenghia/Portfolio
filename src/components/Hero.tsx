
import { useEffect, useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div ref={containerRef} className="container mx-auto px-4 py-32 text-center">
        <span className="text-gray-600 text-sm tracking-wider uppercase mb-4 inline-block">
          Welcome to Nguyen Duc portfolio
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Front-end Developer 
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Experiences
          </span>
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          I'm a front-end developer passionate about building beautiful and functional web applications
        </p>
        <a
          href="#projects"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;


import { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" className="py-20 bg-white">
      <div ref={containerRef} className="container mx-auto px-4">
        <span className="text-sm text-gray-600 uppercase tracking-wider">About me</span>
        <h2 className="text-3xl font-bold mt-2 mb-8">Who I Am</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Thay đổi URL bên dưới thành URL hình ảnh của bạn */}
            <img
              src="/public/avt.jpg"
              alt="Your profile"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              Hello! I'm a passionate full-stack developer with a love for creating beautiful and
              functional web applications. With experience in modern web technologies, I specialize in
              building responsive and user-friendly interfaces.
            </p>
            <p className="text-gray-600">
              My journey in web development started with curiosity and has evolved into a career focused
              on delivering high-quality solutions. I enjoy tackling complex problems and turning ideas
              into reality through code.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

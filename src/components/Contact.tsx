
import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      
      // Thay thế các giá trị này bằng các giá trị từ tài khoản EmailJS của bạn
      const result = await emailjs.sendForm(
        'service_xfzrb8j',
        'template_8pjjfte',
        formRef.current,
        'mAcEmf5rBB_DTaV_H'
      );

      if (result.text === 'OK') {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        
        // Reset form
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div ref={containerRef} className="container mx-auto px-4">
        <span className="text-sm text-gray-600 uppercase tracking-wider">Contact</span>
        <h2 className="text-3xl font-bold mt-2 mb-8">Get In Touch</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-600">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:ducnghianguyen3004@gmail.com"
                className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>ducnghianguyen3004@gmail.com</span>
              </a>
              <a
                href="tel:+84903057741"
                className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+84 (903) 057-741</span>
              </a>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/Nguyenghia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black transition-colors"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-black transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

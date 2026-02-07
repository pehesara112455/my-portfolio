import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef();
  const formRef = useRef();

  useGSAP(() => {
    // Reveal animation for the form
    gsap.from(formRef.current.children, {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gray-950 text-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side: Contact Information */}
        <div className="flex flex-col justify-center gap-8">
          <div>
            <h2 className="text-5xl font-bold mb-4">Let's <span className="text-[#25D366]">Connect</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities or creative ideas.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a href="mailto:your-email@example.com" className="flex items-center gap-4 text-xl hover:text-[#25D366] transition-colors">
              <div className="p-3 rounded-full bg-white/5 border border-white/10"><FiMail /></div>
              your-email@example.com
            </a>
            <div className="flex gap-4 mt-2">
              <a href="#" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366] transition-all"><FiLinkedin size={24}/></a>
              <a href="#" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366] transition-all"><FiGithub size={24}/></a>
            </div>
          </div>
        </div>

        {/* Right Side: Glass Form */}
        <form ref={formRef} className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 ml-2">Your Name</label>
            <input type="text" placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#25D366] transition-all" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 ml-2">Email Address</label>
            <input type="email" placeholder="john@example.com" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#25D366] transition-all" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 ml-2">Message</label>
            <textarea rows="4" placeholder="How can I help you?" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#25D366] transition-all resize-none"></textarea>
          </div>

          <button type="submit" className="mt-4 flex items-center justify-center gap-2 bg-[#25D366] text-gray-900 font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
            Send Message <FiSend />
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
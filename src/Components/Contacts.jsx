import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef();
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  useGSAP(() => {
    const formItems = formRef.current.querySelectorAll('.form-item');
    
    gsap.from(formItems, {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      }
    });

    gsap.from(".submit-btn", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.5,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      }
    });
  }, { scope: sectionRef });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_g40a15r',
      'template_7gxg6xw', 
      formRef.current, 
      'i6-lxdaCbOClzS5q8'
    )
    .then(() => {
        alert("Message sent successfully! 🚀");
        formRef.current.reset();
    })
    .catch((error) => {
        alert("Failed to send message. Check credentials.");
        console.error('EmailJS Error:', error);
    })
    .finally(() => {
        setIsSending(false);
    });
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gray-950 text-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="flex flex-col justify-center gap-8">
          <div>
            <h2 className="text-5xl font-bold mb-4 italic">Let's <span className="text-[#25D366]">Connect</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities or creative ideas.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a href="mailto:upehesara827@gmail.com" className="flex items-center gap-4 text-xl hover:text-[#25D366] transition-colors">
              <div className="p-3 rounded-full bg-white/5 border border-white/10"><FiMail /></div>
              upehesara827@gmail.com
            </a>
            
            <div className="flex gap-4 mt-2">
              {/* LINKEDIN BUTTON */}
              <a 
                href="https://www.linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366] transition-all"
              >
                <FiLinkedin size={24}/>
              </a>

              {/* GITHUB BUTTON */}
              <a 
                href="https://github.com/pehesara112455" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366] transition-all"
              >
                <FiGithub size={24}/>
              </a>
            </div>
          </div>
        </div>

        <form 
          ref={formRef} 
          onSubmit={sendEmail} 
          className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg flex flex-col gap-6"
        >
          <div className="form-item flex flex-col gap-2">
            <label className="text-sm text-gray-400 ml-2">Your Name</label>
            <input name="name" type="text" required placeholder="Uditha Pehesara" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#25D366] transition-all" />
          </div>

          <div className="form-item flex flex-col gap-2">
            <label className="text-sm text-gray-400 ml-2">Email Address</label>
            <input name="email" type="email" required placeholder="abc1234@gmail.com" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#25D366] transition-all" />
          </div>

          <div className="form-item flex flex-col gap-2">
            <label className="text-sm text-gray-400 ml-2">Message</label>
            <textarea name="message" rows="4" required placeholder="How can I help you?" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#25D366] transition-all resize-none"></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSending}
            className={`submit-btn mt-4 flex items-center justify-center gap-2 font-bold py-4 rounded-xl transition-all w-full
              ${isSending ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-[#25D366] text-gray-900 hover:scale-[1.03] active:scale-[0.97]'}`}
          >
            {isSending ? "Sending..." : "Send Message"} <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
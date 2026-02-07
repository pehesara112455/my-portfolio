import React, { useRef } from 'react';
import gsap from 'gsap';
import { FiCode, FiPenTool } from 'react-icons/fi';
import ProjectCard from './projectCard';

export default function Project() {
  const projBtn = useRef();
  const designBtn = useRef();

  // 1. SAMPLE DATA ARRAY
  const projects = [
    {
      title: "CEC Management System",
      description: "A full-stack student management system developed for CEC to digitize administrative records.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      title: "Sinhala-English Keyboard",
      description: "A custom mobile keyboard application supporting both English and Sinhala input methods.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      tags: ["React Native", "JavaScript"],
      link: "#",
      github: "#"
    },
    {
      title: "LOMORA Perfume Site",
      description: "A high-performance landing page for the LOMORA perfume brand with smooth GSAP animations.",
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a",
      tags: ["GSAP", "Tailwind", "UI/UX"],
      link: "#",
      github: "#"
    }
  ];

  const handleHover = (element, isEnter) => {
    gsap.to(element, {
      scale: isEnter ? 1.05 : 1,
      backgroundColor: isEnter ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
      borderColor: isEnter ? "#25D366" : "rgba(255, 255, 255, 0.1)", 
      duration: 0.3,
      ease: "power3.out"
    });
  };

  return (
    <div className="flex flex-col min-h-[600px] p-10 gap-5 items-center bg-gray-950">
      <h1 className='text-5xl text-gray-400 font-bold'>My Projects & Designs</h1>
      
      <div className="flex flex-row items-center justify-center gap-6 p-10">
        <button
          ref={projBtn}
          onMouseEnter={() => handleHover(projBtn.current, true)}
          onMouseLeave={() => handleHover(projBtn.current, false)}
          className="flex flex-row items-center gap-3 px-8 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-gray-200 transition-all shadow-xl"
        >
          <FiCode className="text-[#25D366]" size={20} />
          <span className="font-medium tracking-wide">Projects</span>
        </button>

        <button
          ref={designBtn}
          onMouseEnter={() => handleHover(designBtn.current, true)}
          onMouseLeave={() => handleHover(designBtn.current, false)}
          className="flex flex-row items-center gap-3 px-8 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-gray-200 transition-all shadow-xl"
        >
          <FiPenTool className="text-[#25D366]" size={20} />
          <span className="font-medium tracking-wide">Designs</span>
        </button>
      </div>

      {/* 2. DYNAMIC GRID TO DISPLAY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}
import React, { useRef } from 'react';
import gsap from 'gsap';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// 1. ADD DEFAULT VALUE: tags = [] ensures tags is never undefined
const ProjectCard = ({ title, description, image, tags = [], link, github }) => {
  const cardRef = useRef();

  const handleMouseEnter = () => {
  gsap.to(cardRef.current, {
    y: -10,
    borderColor: "#25D366",
    boxShadow: "0px 10px 30px -5px rgba(37, 211, 102, 0.2)",
    duration: 0.4,
    ease: "power3.out",
    force3D: true // Forces hardware acceleration
  });
};

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      borderColor: "rgba(255, 255, 255, 0.1)",
      boxShadow: "none",
      duration: 0.4
    });
  };

  return (
    <div
  ref={cardRef}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  className="max-w-sm rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden will-change-transform"
>
      <div className="h-48 overflow-hidden bg-gray-800">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" 
        />
      </div>

      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-2xl font-bold text-gray-100">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2">
          {/* 2. OPTIONAL CHAINING: tags?.map is an extra safety layer */}
          {tags?.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-[#25D366] border border-[#25D366]/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-2">
          <a href={github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FiGithub size={20} />
          </a>
          <a href={link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors">
            <FiExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
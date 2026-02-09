import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { FiCode, FiPenTool, FiX } from 'react-icons/fi'; // Added FiX for closing
import ProjectCard from './projectCard';
import DesignCard from './designCard';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';


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





  const designs = [

    {

      title: "LUMINA Brand Identity",

      description: "Logo and visual branding for a modern clothing line.",

      image: "/src/assets/knitting post.png",

      tags: ["Photoshop", "Branding"],

      link: "#", github: "#"

    },

    {

      title: "ප්‍රියන්ගනී Plants Marketing",

      description: "Social media designs and logo for a flower plant business.",

      image: "/src/assets/ICT Post.png",

      tags: ["Marketing", "Graphic Design"],

      link: "#", github: "#"

    }

  ];

export default function Project() {
  gsap.registerPlugin(ScrollTrigger);

  const mainContainer = useRef();
  const headerTex = useRef();
  const [activeTab, setActiveTab] = useState('projects');
  
  // 1. STATE: Track which design is selected for full-screen
  const [selectedDesign, setSelectedDesign] = useState(null);

  // ... (Keep your projects and designs arrays here)
// 1. Animation for the Header (Runs ONLY ONCE)
useGSAP(() => {
  gsap.from(headerTex.current, {
    opacity: 0,
    y: 80,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: headerTex.current,
      start: "top 90%",
      toggleActions: "play none none none",
    }
  });
}, { scope: mainContainer }); // Empty dependencies = run once

// 2. Animation for the Cards (Runs every time activeTab changes)
useGSAP(() => {
  gsap.from(".card-wrapper", {
    y: 50,
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".the-grid",
      start: "top 85%",
    }
  });
}, { dependencies: [activeTab], scope: mainContainer });
  
  return (
    <div ref={mainContainer} className="flex flex-col min-h-[600px] p-10 gap-5 items-center bg-gray-950 relative">
      <h1
      ref={headerTex}
      className='text-5xl text-gray-400 font-bold'>My Projects & Designs</h1>
      
      {/* BUTTONS SECTION */}
      <div className="flex flex-row items-center justify-center gap-2 p-10">
        <button
          onClick={() => setActiveTab("projects")}
          className={`flex flex-row items-center gap-3 px-8 py-3 rounded-2xl border backdrop-blur-md transition-all duration-300 shadow-xl
            ${activeTab === "projects"
              ? 'bg-[#25D366] text-gray-900 border-[#25D366] cursor-default'
              : 'bg-white/5 text-gray-200 border-white/10 hover:border-[#25D366]/50 hover:bg-white/10 hover:scale-105 active:scale-95'
            }`}
        >
          <FiCode className={activeTab === "projects" ? "text-gray-900" : "text-[#25D366]"} size={20} />
          <span className="font-medium tracking-wide">Projects</span>
        </button>

        <button
          onClick={() => setActiveTab("designs")}
          className={`flex flex-row items-center gap-3 px-8 py-3 rounded-2xl border backdrop-blur-md transition-all duration-300 shadow-xl
            ${activeTab === "designs"
              ? 'bg-[#25D366] text-gray-900 border-[#25D366] cursor-default'
              : 'bg-white/5 text-gray-200 border-white/10 hover:border-[#25D366]/50 hover:bg-white/10 hover:scale-105 active:scale-95'
            }`}
        >
          <FiPenTool className={activeTab === "designs" ? "text-gray-900" : "text-[#25D366]"} size={20} />
          <span className="font-medium tracking-wide">Designs</span>
        </button>
      </div>

      {/* DYNAMIC GRID */}
      <div className="the-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-7xl">
        {activeTab === "projects" ? (
          projects.map((project, index) => (
            <div key={`project-${index}`} className='card-wrapper'>
              <ProjectCard {...project} />
            </div>
          ))
        ) : (
          designs.map((design, index) => (
            <div key={`design-${index}`} className="card-wrapper">
              <DesignCard 
                {...design} 
                // 2. PASSING THE FUNCTION: Tell the parent to open this specific image
                onOpen={() => setSelectedDesign(design)} 
              />
            </div>
          ))
        )}
      </div>

      {/* 3. THE SINGLE MODAL: Only shows one at a time */}
      {selectedDesign && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          onClick={() => setSelectedDesign(null)} // Close when clicking background
        >
          {/* Close Button */}
          <button 
            className="absolute top-10 right-10 text-white hover:text-[#25D366] transition-colors p-2 bg-white/10 rounded-full"
            onClick={() => setSelectedDesign(null)}
          >
            <FiX size={32} />
          </button>

          {/* Full Screen Image */}
          <img 
            src={selectedDesign.image} 
            alt={selectedDesign.title} 
            className="max-w-full max-h-full object-contain shadow-2xl rounded-lg animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} // Stop propagation so clicking image doesn't close it
          />
          
          <div className="absolute bottom-10 text-center">
            <h3 className="text-2xl font-bold text-white bg-black/50 px-6 py-2 rounded-full backdrop-blur-sm">
              {selectedDesign.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
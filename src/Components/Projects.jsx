import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { FiCode, FiPenTool, FiX } from 'react-icons/fi';
import ProjectCard from './projectCard';
import DesignCard from './designCard';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

// 1. PROJECTS LIST
const projects = [
  {
    title: "CEC Management System",
    description: "A full-stack student management system developed for CEC to digitize administrative records.",
    image: "",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    github: "https://github.com/pehesara112455"
  },
  {
    title: "Halls & Rooms Reservation System",
    description: "A comprehensive booking platform allowing users to reserve event halls and rooms with real-time availability.",
    image: "",
    tags: ["React Vite", "Tailwind CSS", "Express.js", "Firebase"],
    link: "#",
    github: "https://github.com/pehesara112455"
  },
  {
    title: "Mobile Shop E-Commerce Platform",
    description: "A feature-rich online store for mobile phones including product filtering, cart functionality, and secure database management.",
    image: "",
    tags: ["React Vite", "Tailwind CSS", "Express.js", "MongoDB"],
    link: "#",
    github: "https://github.com/pehesara112455"
  },
  {
    title: "Advanced Student Management System",
    description: "A modern management tool for educational institutes, featuring a Neon database for serverless SQL performance and Vercel hosting.",
    image: "",
    tags: ["React Vite", "Neon DB", "Express.js", "Vercel"],
    link: "#",
    github: "https://github.com/pehesara112455"
  },
  {
    title: "Personal Developer Portfolio",
    description: "My personal portfolio website designed to showcase web development and graphic design projects with smooth GSAP animations.",
    image: "/src/assets/portfolio-preview.png",
    tags: ["React Vite", "Tailwind CSS", "GSAP", "Framer Motion"],
    link: "#",
    github: "https://github.com/pehesara112455"
  }
];

const designs = [
  {
    title: "Knitting Academy",
    description: "Logo and visual branding for a modern clothing line.",
    image: "/src/assets/Design/knitting post.png",
    tags: ["Photoshop"],
    link: "#", github: "#"
  },
  {
    title: "ප්‍රියන්ගනී Plants Marketing",
    description: "Social media designs and logo for a flower plant business.",
    image: "/src/assets/Design/Priyanganiplants.png",
    tags: ["Marketing", "Photoshop"],
    link: "#", github: "#"
  },
  {
    title: "Ghost Paradise",
    description: "Creative visual design concepts exploring dark aesthetics.",
    image: "/src/assets/Design/Gost paradise.jpg",
    tags: ["Photoshop"],
    link: "#", github: "#"
  },
  {
    title: "ICT Awareness Post",
    description: "Educational graphic design for IT-related content.",
    image: "/src/assets/Design/ICT Post.png",
    tags: ["Photoshop"],
    link: "#", github: "#"
  },
  {
    title: "Plant Branding",
    description: "Visual identity design for botanical and nursery projects.",
    image: "/src/assets/Design/plant.jpg",
    tags: ["Photoshop"],
    link: "#", github: "#"
  },
  {
    title: "Raygamaya Logo",
    description: "Official logo design for the Raygamaya brand.",
    image: "/src/assets/Design/Raygamaya-logo.png",
    tags: ["Photoshop"],
    link: "#", github: "#"
  }
];

export default function Project() {
  gsap.registerPlugin(ScrollTrigger);

  const mainContainer = useRef();
  const headerTex = useRef();
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedDesign, setSelectedDesign] = useState(null);

  // 1. UPDATED ENTRANCE: Now triggers when you scroll to the section
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top 80%", // Triggers when the top of the section hits 80% of the screen height
        toggleActions: "play none none none" // Plays once when entering
      }
    });

    tl.from(headerTex.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out"
    })
    .from(".btn-projects", {
      x: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6") 
    .from(".btn-designs", {
      x: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.8");
  }, { scope: mainContainer });

  // 2. Card Grid Animation (Performance Optimized)
  useGSAP(() => {
    gsap.from(".card-wrapper", {
      y: 30,
      opacity: 0,
      scale: 0.98,
      duration: 0.6,
      stagger: 0.1,
      ease: "sine.out",
      scrollTrigger: {
        trigger: ".the-grid",
        start: "top 85%",
      }
    });
  }, { dependencies: [activeTab], scope: mainContainer });

  return (
    <section ref={mainContainer} className="flex flex-col min-h-[600px] p-10 gap-5 items-center bg-gray-950 relative overflow-hidden">
      <h1 ref={headerTex} className='text-5xl text-gray-400 font-bold will-change-transform'>
        My Projects & Designs
      </h1>
      
      {/* BUTTONS SECTION - will-change-transform used to prevent lag */}
      <div className="flex flex-row items-center justify-center gap-4 p-10">
        <button
          onClick={() => setActiveTab("projects")}
          className={`btn-projects flex flex-row items-center gap-3 px-8 py-3 rounded-2xl border backdrop-blur-md shadow-xl will-change-transform
            ${activeTab === "projects"
              ? 'bg-[#25D366] text-gray-900 border-[#25D366] cursor-default'
              : 'bg-white/5 text-gray-200 border-white/10 hover:border-[#25D366]/50 hover:bg-white/10'
            }`}
        >
          <FiCode size={20} />
          <span className="font-medium tracking-wide">Projects</span>
        </button>

        <button
          onClick={() => setActiveTab("designs")}
          className={`btn-designs flex flex-row items-center gap-3 px-8 py-3 rounded-2xl border backdrop-blur-md shadow-xl will-change-transform
            ${activeTab === "designs"
              ? 'bg-[#25D366] text-gray-900 border-[#25D366] cursor-default'
              : 'bg-white/5 text-gray-200 border-white/10 hover:border-[#25D366]/50 hover:bg-white/10'
            }`}
        >
          <FiPenTool size={20} />
          <span className="font-medium tracking-wide">Designs</span>
        </button>
      </div>

      {/* DYNAMIC GRID */}
      <div className="the-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-7xl">
        {activeTab === "projects" ? (
          projects.map((project, index) => (
            <div key={`project-${index}`} className='card-wrapper will-change-transform'>
              <ProjectCard {...project} />
            </div>
          ))
        ) : (
          designs.map((design, index) => (
            <div key={`design-${index}`} className="card-wrapper will-change-transform">
              <DesignCard 
                {...design} 
                onOpen={() => setSelectedDesign(design)}
              />
            </div>
          ))
        )}
      </div>

      {/* MODAL SECTION */}
      {selectedDesign && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          onClick={() => setSelectedDesign(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white hover:text-[#25D366] p-2 bg-white/10 rounded-full"
            onClick={() => setSelectedDesign(null)}
          >
            <FiX size={32} />
          </button>
          <img 
            src={selectedDesign.image} 
            alt={selectedDesign.title} 
            className="max-w-full max-h-full object-contain shadow-2xl rounded-lg animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
}
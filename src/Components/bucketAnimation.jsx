import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaReact, FaJava, FaJs, FaNodeJs, FaHtml5,FaAndroid,FaFileExcel,} from 'react-icons/fa';
import { BiAlignJustify } from 'react-icons/bi';
import { SiTailwindcss,SiGreensock,SiJavascript,SiExpress,SiSupabase,SiAdobephotoshop } from "react-icons/si";
import { FaFigma,FaGitAlt, } from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BiCodeAlt, BiServer, BiPalette } from 'react-icons/bi';
import SkillCArd from './SkillCard';

const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <BiCodeAlt size={28}/>,
      description: "Building responsive, performant, and interactive user interfaces.",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "GSAP Animations", icon: <SiGreensock /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
        // { name: "TypeScript", icon: <SiTypescript /> }, // Add if you learn this later!
        { name: "HTML5 & CSS3", icon: <FaHtml5 /> },
      ]
    },
    {
      title: "Backend & Data",
      icon: <BiServer size={28}/>,
      description: "Developing robust APIs and managing data flow effectively.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Supabase (BaaS)", icon: <SiSupabase /> },
        { name: "RESTful APIs", icon: <BiCodeAlt /> },
        // { name: "SQL / NoSQL Concepts", icon: <BiServer /> },
      ]
    },
    {
      title: "Tools & Design",
      icon: <BiPalette size={28}/>,
      description: "Ensuring visual polish and efficient development workflows.",
      skills: [
        { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
        { name: "UI/UX Principles", icon: <FaFigma /> }, // Using Figma icon for general UI/UX
        { name: "Git & GitHub", icon: <FaGitAlt /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Vercel / Netlify", icon: <BiServer /> },
      ]
    }
  ];

gsap.registerPlugin(ScrollTrigger);

const BucketAnimation = () => {
  const mainContainer = useRef();
  const bucketRef = useRef();
  const headerTex = useRef();
  const headerTex1 = useRef();
  const iconsRef = useRef([]);
  const isAnimating = useRef(true); // This acts as a "lock" to stop vibration

  useGSAP(() => {

  gsap.from(".skill-card-wrapper", {
      y: 80,
      opacity: 0,
      scale: 0.9,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 85%",
      }
    });

   gsap.fromTo(iconsRef.current, 
    {
      y: -300,
      opacity: 0,
      rotation:-180, 
    },
    {
  rotation: () => gsap.utils.random(-90, 90),
  y:()=> gsap.utils.random(-10,10),
  x:()=> gsap.utils.random(-20,10),
  opacity:1,
  duration: 1.5,
  stagger: 0.1,         
  ease: "bounce.out",    
  scrollTrigger: {
    trigger: bucketRef.current,
    start: "top 85%",    
    toggleActions: "play none none none",
    }
  }
);
      gsap.from(headerTex.current, {
    opacity: 0,         
    y: 80,               
    duration: 2,       
    ease: "power3.out",  
    scrollTrigger: {
    trigger: headerTex.current,
    start: "top 90%",  
    toggleActions: "play none none none",
  }
      });

       gsap.from(headerTex1.current, {
    opacity: 0,         
    y: 80,               
    duration: 2,       
    ease: "power3.out",  
    scrollTrigger: {
    trigger: headerTex.current,
    start: "top 90%",  
    toggleActions: "play none none none",
  }
      });


  });

  const handleMouseMove = () => {
    // If the balls are already moving, don't start a new animation yet
    if (isAnimating.current) return;

    isAnimating.current = true;

    iconsRef.current.forEach((icon, index) => {
      if (!icon) return;
      gsap.to(icon, {
        x: gsap.utils.random(-20, 20),
        y: gsap.utils.random(-30, 10),
        rotation: gsap.utils.random(-10, 10),
        duration: 0.5, // Longer duration = smoother movement
        ease: "power2.out",
        onComplete: () => {
          // Once the animation finishes, allow the next move
          if (index === iconsRef.current.length - 1) {
            isAnimating.current = false;
          }
        }
      });
    });
  };

  const handleMouseLeave = () => {
  isAnimating.current = false; // Reset the lock
  
  gsap.to(iconsRef.current, {
    // Adding () => makes the random number unique for each icon
    x: () => gsap.utils.random(-15, 15),
    y: () => gsap.utils.random(-10, 10),
    rotation: () => gsap.utils.random(-20, 20),
    duration: 0.5,
    ease: "power3.in",
  });
};

  const techIcons = [
    { icon: <FaReact size={30} />, color: "text-[#61DAFB]" },
    { icon: <FaJava size={30} />, color: "text-[#007396]" },
    { icon: <FaJs size={30} />, color: "text-[#F7DF1E]" },
    { icon: <FaNodeJs size={30} />, color: "text-[#339933]" },
    { icon: <FaHtml5 size={30} />, color: "text-[#E34F26]" },
    { icon: <FaAndroid size={30} />, color: "text-[#61DAFB]" },
    { icon: <FaFileExcel size={30} />, color: "text-[#007396]" },
    { icon: <FaJs size={30} />, color: "text-[#F7DF1E]" },
    { icon: <FaNodeJs size={30} />, color: "text-[#339933]" },
    { icon: <FaHtml5 size={30} />, color: "text-[#E34F26]" },
  ];

  

  return (
    <div
    ref={mainContainer}
     className="flex flex-col min-h-[600px] p-10 gap-10 items-center">
         <h1 ref={headerTex1} 
         className='text-5xl text-gray-400 font-bold '>My Tech Stack</h1>
         <p ref={headerTex}
             className="text-gray-400 text-lg w-5xl text-center leading-relaxed">
          I build modern web applications using a specialized tech stack focused 
          on performance and design. My frontend foundation is built with React 
          and Tailwind CSS for clean, responsive layouts. To create engaging 
          user experiences, I use GSAP for smooth animations. On the backend, 
          I am expanding my skills with Express.js and Supabase to manage data 
          effectively. I also use my Graphic Design background and tools like 
          Photoshop to ensure every project is visually polished.
        </p>
        
        <div className='skills-grid flex justify-between gap-6 flex-wrap'>
             {skillCategories.map((category, index) => (
          <div key={index} className="skill-card-wrapper">
            <SkillCArd
              title={category.title}
              icon={category.icon}
              description={category.description}
              skills={category.skills}
            />
          </div>
        ))}
        </div>
       <div 
        ref={bucketRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-80 h-96 border-b-4 border-l-4 border-r-4 border-[#25D366] rounded-b-[3rem] overflow-hidden cursor-pointer"
      >
        {techIcons.map((item, index) => {
          const column = index % 4; 
          const row = Math.floor(index / 4); 

          return (
            <div
              key={index}
              ref={(el) => (iconsRef.current[index] = el)}
              className={`absolute p-4 rounded-full bg-gray-800 shadow-2xl ${item.color} border border-gray-700/50 flex `}
              style={{ 
                left: `${7 + (column * 22)}%`, 
                bottom: `${1 + (row * 22)}%`,
                zIndex: techIcons.length - index 
              }}
            >
              {item.icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BucketAnimation;
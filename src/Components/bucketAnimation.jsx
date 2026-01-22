import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaReact, FaJava, FaJs, FaNodeJs, FaHtml5,FaAndroid,FaFileExcel } from 'react-icons/fa';
import { BiAlignJustify } from 'react-icons/bi';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BucketAnimation = () => {
  const bucketRef = useRef();
  const headerTex = useRef();
  const iconsRef = useRef([]);
  const isAnimating = useRef(true); // This acts as a "lock" to stop vibration

  useGSAP(() => {

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
    y: 50,               
    duration: 2,       
    ease: "power3.out",  
    scrollTrigger: {
    trigger: headerTex.current,
    start: "top 90%",  
    toggleActions: "play none none none",
  }
      })


  })

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
     className="flex flex-col min-h-[600px] p-10 gap-10 mt-35 mr-52">
         <h1 ref={headerTex} className='text-5xl text-gray-400 font-bold '>My Tech Stack</h1>
        
        <div className='flex justify-between'>
             <p ref={headerTex}
             className="text-gray-400 text-lg w-2xl text-justify leading-relaxed">
          I build modern web applications using a specialized tech stack focused 
          on performance and design. My frontend foundation is built with React 
          and Tailwind CSS for clean, responsive layouts. To create engaging 
          user experiences, I use GSAP for smooth animations. On the backend, 
          I am expanding my skills with Express.js and Supabase to manage data 
          effectively. I also use my Graphic Design background and tools like 
          Photoshop to ensure every project is visually polished.
        </p>
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
       
    </div>
  );
};

export default BucketAnimation;
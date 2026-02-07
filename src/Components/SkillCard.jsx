import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function skillCArd ({title,icon,description,skills=[]}){

const cardRef = useRef();

  const handleMouseEnter = () => {
  gsap.to(cardRef.current, {
    y: -10,
    boxShadow: "0px 10px 30px -5px rgba(37, 211, 102, 0.2)",
    duration: 0.4,
    ease: "power3.out",
    force3D: true // Forces hardware acceleration
  });
};

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: "none",
      duration: 0.4
    });
  };


    return(
          <div 
          ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
          className='relative flex flex-col w-94 h-104 bg-gray-900/40 backdrop:backdrop-blur-lg rounded-2xl border-2 border-[#25D366]/50 shadow-[0_0_20px_rgba(34,197,94,0.3)] items-center p-5'>
                   <div className='flex items-center gap-5 justify-center border-b-2 pb-5 border-gray-600'>
                    <div className="className='flex items-center justify-center p-4 bg-gray-800/50 backdrop-blur-md rounded-3xl text-[#25D366]">
                        <span>
                            {icon}
                        </span>
                    </div>
                     <h1 className='text-2xl font-bold text-gray-500'> {title}</h1>
                   </div>
                   <p className='text-gray-600 text-center font-mono mt-5'>{description}</p>
                   <div className='flex flex-row gap-1 flex-wrap overflow-hidden justify-center'>
                    {skills.map((Skill,index)=>(
                         <div 
                         key={index}
                         className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium text-gray-300 bg-gray-800/50 border border-gray-700 hover:border-gray-500 hover:bg-gray-700 hover:text-white transition-all duration-300 cursor-default">
                            <span className="text-[#25D366]">{Skill.icon}</span>
                     <p className='text-lg'>{Skill.name}</p>
                   </div>
                    )
                    )}
                    
                   </div>
        </div>
               
    )
}
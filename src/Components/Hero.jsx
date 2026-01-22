import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const container = useRef();
  const circleRef = useRef();

  useGSAP(() => {

    gsap.fromTo(circleRef.current,{
        y:"10vh",
        opacity:0
    },
    {
        y:0,
        opacity:1,
        duration:2,
        ease:"power2.out"
    },{scope:container})
    // 1. Entrance Animation: Text slides up and fades in
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2, // Each line comes one by one
      ease: "power3.in"
    });

    gsap.from(".hero-description",{
      x:40,
      opacity:0,
      duration:3,
      stagger:1,
      ease:"power3.out"
    });

    gsap.from(".rightIcon", {
      y:-100,
      opacity:0,
      duration:4,
      rotate:360,
      ease:"power3.out"
    });

     gsap.from(".leftIcon", {
      y:100,
      opacity:0,
      duration:4,
      rotate:360,
      ease:"power3.out"
    });
    

    // 2. Pulse Animation: The green glow breathes
    gsap.to(circleRef.current, {
      boxShadow: "0px 0px 25px 7.5px rgba(34, 197, 94, 0.6)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: container });

  // 3. Mouse Movement: The shadow follows your mouse
  

  return (
    <div ref={container} className='flex flex-col overflow-hidden relative'>
         <section 
       
      className="flex flex-col md:flex-row justify-center items-center min-h-[50vh] px-10 gap-16 text-white overflow-hidden py-10"
    >
      {/* Profile Image with Glowing Circle */}
      <div className="relative">
        <div 
          ref={circleRef}
          className="w-64 h-64 md:w-100 md:h-100 rounded-full bg-green-500 overflow-hidden border-4 border-[#22c55e] shadow-[0px_0px_20px_5px_rgba(34,197,94,0.4)]"
        >
          {/* Replace with your actual image path */}
          <img 
            src="src\assets\WhatsApp Image 2025-11-25 at 15.46.50.jpeg" 
            alt="Uditha Pehesara" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Hero Text */}
      <div className="max-w-2xl text-center md:text-left flex flex-col items-center">
        <h1 className="hero-text text-5xl md:text-7xl font-bold leading-tight">
          Hi, I am <span className="text-[#22c55e]">Uditha Pehesara,</span>
        </h1>
        <h2 className="hero-text text-4xl md:text-5xl font-bold mt-2">
          <span className="text-[#22c55e]">Full stack Developer</span> and Graphic designer.
        </h2>
        <p className='hero-text text-gray-400 mt-10'>
          I am an ICT undergraduate at the University of Sri Jayewardenepura with a passion for building functional, user-friendly software. Specializing in modern web applications, I focus on solving real-world problems through clean, efficient code. I am currently available for freelance projects and look forward to helping you bring your ideas to life.
        </p>
        
      </div>
    </section>
      <img src='src\assets\reactIcon.png' alt='green-reactIcon' className='rightIcon absolute top-10 right-0 w-70 h-35 translate-x-1/2'/>
      <img src='src\assets\reactIcon.png' alt='green-reactIcon' className='leftIcon absolute bottom-10 left-0 w-70 h-35 -translate-x-1/2'/>
    </div>
   
  );
};

export default Hero;
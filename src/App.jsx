import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import BucketAnimation from './Components/bucketAnimation';
import Project from './Components/Projects';
import Contact from './Components/Contacts';

gsap.registerPlugin(useGSAP);

function App() {
  const container = useRef();
  
  // 1. Use State to track where the mouse is
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // 2. We only need the raw mouse coordinates (X and Y)
    // This removes the need for getBoundingClientRect entirely
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      ref={container} 
      className="min-h-screen bg-gray-950 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `radial-gradient(
          800px circle at ${mousePos.x}px ${mousePos.y}px, 
          rgba(37, 211, 102, 0.1), 
          transparent 80%
        )`
      }}
    >
      <div className="relative z-10">
        {/* Navbar stays at the top, it doesn't need an ID to be scrolled to */}
        <Navbar/>
        
        {/* 1. The 'About' Address */}
        <div id="about">
          <Hero/>
          <BucketAnimation/>
        </div>

        {/* 2. The 'Projects' Address */}
        <div id="projects" className="pt-20"> {/* Added padding so the navbar doesn't cover the title */}
          <Project/>
        </div>

        {/* 3. The 'Contacts' Address */}
        <div id="contacts" className="pt-20">
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
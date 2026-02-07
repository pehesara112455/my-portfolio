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
        // 3. This centers the green glow exactly on your mouse pointer
        backgroundImage: `radial-gradient(
          800px circle at ${mousePos.x}px ${mousePos.y}px, 
          rgba(37, 211, 102, 0.1), 
          transparent 80%
        )`
      }}
    >
      {/* 4. Keep your content in a high Z-index layer */}
      <div className="relative z-10">
        <Navbar/>
        <Hero/>
        <BucketAnimation/>
        <Project/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
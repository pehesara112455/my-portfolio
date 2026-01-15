import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from './Components/Navbar';

gsap.registerPlugin(useGSAP);

function App() {
  const container = useRef();
  const circleRef = useRef();

  const handleMouseMove = (e) => {
    const circle = circleRef.current;
    const rect = circle.getBoundingClientRect();
    
    // 1. Find the center of the circle
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // 2. Calculate how far the mouse is from the center
    // We divide by a number (like 10) so the shadow doesn't move too far
    const moveX = (e.clientX - centerX) / 8;
    const moveY = (e.clientY - centerY) / 8;

    // 3. Use GSAP to animate the shadow smoothly
    gsap.to(circle, {
      boxShadow: `${moveX}px ${moveY}px 50px 10px rgba(34, 197, 94, 0.7)`,
      duration: 0.3, // Fast response to mouse movement
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    // Reset the shadow when the mouse leaves
    gsap.to(circleRef.current, {
      boxShadow: "0px 0px 20px 5px rgba(34, 197, 94, 0.5)",
      duration: 0.5
    });
  };

  return (
    <div 
      ref={container} 
      className="min-h-screen bg-gray-950 overflow-hidden"
      onMouseMove={handleMouseMove} // Track mouse movement on the whole screen
    >
      <Navbar/>

      {/*<div 
        ref={circleRef}
        onMouseLeave={handleMouseLeave}
        className="w-40 h-40 bg-green-500 rounded-full shadow-[0px_0px_20px_5px_rgba(34,197,94,0.5)] transition-colors duration-300"
      >
      </div>*/}
    </div>
  );
}

export default App;
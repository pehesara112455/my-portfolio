import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// 1. UPDATED: We added 'id' to the parameters that NavLink receives
const NavLink = ({ title, isButton, id }) => {
  const linkRef = useRef();

  // Function for when Mouse Enters
  const onMouseEnter = () => {
    gsap.to(linkRef.current, {
      rotate: 10,          // Tilts the link 10 degrees
      duration: 0.4,       // Smooth movement
      ease: "back.out(2)"  // Adds a little "bounce" to the tilt
    });
  };

  // Function for when Mouse Leaves
  const onMouseLeave = () => {
    gsap.to(linkRef.current, {
      rotate: 0,           // Returns to original straight position
      duration: 0.4,
      ease: "power2.out"
    });
  };

  // 2. NEW: The Click Function
  const handleClick = () => {
    // Special rule: If it's the Resume button, open a PDF in a new tab
    if (title === "Resume") {
      // Note: Replace this with the actual path to your PDF file in your public folder
      window.open("/resume.pdf", "_blank"); 
      return; // Stop the function here so it doesn't try to scroll
    }

    // Standard rule: Find the section by its ID and scroll to it smoothly
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li
      ref={linkRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick} // Added the click event here
      className={`cursor-pointer px-3 py-1 transition-colors hover:text-white hover:bg-[#22c55e] rounded-md ${
        isButton ? "border border-[#22c55e] px-4 py-1 rounded-md" : ""
      }`}
    >
      {title}
    </li>
  );
};


const Navbar = () => {
  const navRef = useRef();

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  }, { scope: navRef });

  // 3. UPDATED: The linkList is now an array of objects holding both the title and the target ID
  const linkList = [
    { title: "About me", id: "about" },
    { title: "Projects", id: "projects" },
    { title: "Contacts", id: "contacts" },
    { title: "Resume", id: "resume" } // Resume has an ID, but the handleClick function handles it differently
  ];

  return (
    <nav 
      className="flex w-full justify-between items-center px-10 py-6 text-[#22c55e]"
      ref={navRef} 
    >
      <div className="text-3xl font-bold tracking-tight flex flex-row gap-2">
        <p>Uditha</p>
        <p className='text-white'>Pehesara</p> 
        </div>
      <ul className="flex gap-6 font-medium items-center px-4 py-1">
        
        {/* 4. UPDATED: The map function now passes the ID down to the NavLink */}
        {linkList.map((link, index) => (
          <NavLink 
            key={index}
            title={link.title}
            id={link.id} // Passing the ID
            isButton={link.title === "Resume"} 
          />
        ))}

      </ul>
    </nav>
  );
};

export default Navbar;
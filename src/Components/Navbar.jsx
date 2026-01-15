import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const NavLink = ({ title, isButton }) => {
  const linkRef = useRef();

  // Function for when Mouse Enters
  const onMouseEnter = () => {
    gsap.to(linkRef.current, {
      rotate: 10,          // Tilts the link 30 degrees
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


  return (
    <li
      ref={linkRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
useGSAP (() => {
    gsap.from (navRef.current, {
        y:-50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }
    );
  },{ scope: navRef });
    

    const linkList = ["About me", "Projects", "Contacts", "Resume"];

  return (
    <nav className="flex w-full justify-between items-center px-10 py-6 text-[#22c55e]"
    ref={navRef} >
      <div className="text-3xl font-bold tracking-tight">Pehesara</div>
      <ul className="flex gap-6 font-medium items-center px-4 py-1">
        {linkList.map((links,index) => (
            <NavLink 
            key={index}
            title={links}
            isButton={links === "Resume"} />
        )) }
      </ul>
    </nav>
  );
};

export default Navbar;
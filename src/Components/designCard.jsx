import React from 'react';
import { FiExternalLink, FiZoomIn } from 'react-icons/fi';

// We added 'onOpen' to the props list
export default function DesignCard({ title, description, image, tags, onOpen }) {
  return (
    <div className="group relative flex flex-col w-full h-[450px] bg-gray-900/40 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-[#25D366]/50 shadow-2xl">
      
      {/* 1. IMAGE SECTION (Focusing on the top half) */}
      <div className="relative w-full h-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* 2. GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80" />

        {/* 3. HOVER ACTIONS */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
           {/* Zoom Button (Optional: can also trigger onOpen) */}
           <button 
             onClick={onOpen}
             className="p-3 bg-[#25D366] text-gray-900 rounded-full hover:scale-110 transition-transform"
           >
              <FiZoomIn size={22} />
           </button>

           {/* Full Screen Button */}
           <button 
             onClick={onOpen} // This triggers the single modal in your Parent component
             className="p-3 bg-white/10 text-white rounded-full backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
           >
              <FiExternalLink size={22} />
           </button>
        </div>
      </div>

      {/* 4. CONTENT SECTION */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2 pointer-events-none">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, i) => (
            <span key={i} className="text-[10px] uppercase tracking-widest text-[#25D366] font-bold px-2 py-1 bg-[#25D366]/10 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2 font-mono">{description}</p>
      </div>
    </div>
  );
}
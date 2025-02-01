import React from "react";

const MobileMenu = ({ sections, onMenuItemClick }) => {
  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-40">
      <div className="container mx-auto px-6 py-20 h-full flex flex-col justify-center">
        <div className="space-y-6">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onMenuItemClick(index)}
              className="group relative w-full text-4xl font-light tracking-wider py-3 text-left overflow-hidden"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                {section.title}
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

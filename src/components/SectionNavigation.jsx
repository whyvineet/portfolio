import React from "react";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";

const SectionNavigation = ({
  sections,
  currentSection,
  totalSections,
  onSectionChange,
}) => {
  return (
    <>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex-col space-y-3 z-30 hidden md:flex">
        <button
          onClick={() => onSectionChange("prev")}
          disabled={currentSection === 0}
          className={`p-2 border border-white rounded-full ${
            currentSection === 0
              ? "opacity-30"
              : "hover:bg-white hover:text-black"
          } transition-colors duration-300`}
          aria-label="Previous section"
        >
          <ChevronUpIcon size={24} />
        </button>
        <button
          onClick={() => onSectionChange("next")}
          disabled={currentSection === totalSections - 1}
          className={`p-2 border border-white rounded-full ${
            currentSection === totalSections - 1
              ? "opacity-30"
              : "hover:bg-white hover:text-black"
          } transition-colors duration-300`}
          aria-label="Next section"
        >
          <ChevronDownIcon size={24} />
        </button>
      </div>

      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden md:block">
        <div className="space-y-4">
          {Array(totalSections)
            .fill()
            .map((_, index) => (
              <button
                key={index}
                onClick={() => onSectionChange(index)}
                className="group flex items-center space-x-3"
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSection === index ? "bg-white h-8" : "bg-white/50"
                  }`}
                />
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {sections[index].title}
                </span>
              </button>
            ))}
        </div>
      </div>
    </>
  );
};

export default SectionNavigation;

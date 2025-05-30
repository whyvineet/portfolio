import React from "react";
import { ExternalLink } from "lucide-react";

const ExperienceSection = ({ data }) => {
  return (
    <section
      id="experience"
      className="relative h-screen flex items-center bg-black text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-light tracking-wider mb-12">Experience</h2>
        <div className="grid grid-cols-1 gap-8">
          {data.map((exp, idx) => (
            <div
              key={idx}
              className="border border-white/20 hover:border-white transition-colors duration-300 p-8"
            >
              <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                <h3 className="text-2xl mb-2 font-bold">{exp.title}</h3>
                <h3 className="text-2xl font-light text-gray-400 mb-2 lg:mt-0">{exp.period}</h3>
              </div>
              <p className="text-gray-400 mb-6">{exp.company}</p>
              <p className="text-lg text-gray-400 mb-6">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
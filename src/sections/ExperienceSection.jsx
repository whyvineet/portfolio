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
        <div className="space-y-6">
          {data.map((experience, index) => (
            <div key={index} className="border border-white/20 hover:border-white transition-colors duration-300 p-8">
              <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                <h3 className="text-2xl mb-2 font-bold">{experience.title}</h3>
                <h3 className="text-2xl font-light text-gray-400 mb-2 lg:mt-0">{experience.period}</h3>
              </div>
              <p className="text-gray-400 mb-6">
                {experience.company}
              </p>
              <p className="text-lg text-gray-400 mb-6">{experience.description}</p>
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                <ExternalLink size={16} className="mr-2" />
                View More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

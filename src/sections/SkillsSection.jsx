import React from "react";

const SkillsSection = ({ skills }) => {
  return (
    <section
      id="skills"
      className="relative h-screen flex items-center bg-black text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-white/20 p-8 hover:border-white transition-colors duration-300"
            >
              <h3 className="text-2xl font-light mb-6">{skill.category}</h3>
              <div className="space-y-6">
                {skill.items.map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-8 h-8 object-contain"
                    />
                    <div className="flex flex-col">
                      <p className="text-lg font-light">{item.name}</p>
                      <p className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

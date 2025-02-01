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
        <div className="border border-white/20 p-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <h3 className="text-2xl mb-2 font-bold">{data.title}</h3>
          <h3 className="text-2xl font-light text-gray-400 mb-2 lg:mt-0">{data.period}</h3>
        </div>
          <p className="text-gray-400 mb-6">
            {data.company}
          </p>
          <p className="text-lg text-gray-400 mb-6">{data.description}</p>
          <h3 className="text-xl font-light mb-4">Popular Publications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {data.publications.map((pub, index) => (
              <div
                key={index}
                className="border border-white/20 p-6 hover:border-white hover:bg-white/10 transition-colors duration-300"
              >
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <h4 className="text-xl font-light mb-2">{pub.title}</h4>
                  <p className="text-sm mb-2">{pub.date}</p>
                </a>
                <div className="flex flex-wrap gap-2 mt-4">
                  {pub.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 border border-white/20 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-300">
            <a
              href="https://www.geeksforgeeks.org/user/whyvineet/contributions/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <ExternalLink size={16} className="mr-2" />
              View All Articles
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

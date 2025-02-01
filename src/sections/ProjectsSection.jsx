import React from "react";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = ({ projects }) => {
  return (
    <section
      id="projects"
      className="relative h-screen flex items-center bg-black text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-white/20 p-8 hover:border-white transition-colors duration-300"
            >
              <h3 className="text-2xl font-light mb-4">{project.title}</h3>
              <p className="text-lg font-light text-gray-400 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-white/20 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-300"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-300"
                >
                  <Github size={16} className="mr-2" />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

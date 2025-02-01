import React from "react";

const AboutSection = ({ onViewWork }) => {
  return (
    <section
      id="about"
      className="relative h-screen flex items-center bg-black text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-light tracking-wider mb-12">
          Something About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-xl border border-white-400 shadow-lg">
            <img
              src="/assets/profile/photo.jpg"
              alt="Vineet Kumar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 flex-grow flex-1">
            <p className="text-lg text-gray-400 text-justify">
              I'm the type of person who gets things done, even if I'm unsure
              how to proceed. How do I deal with this uncertainty? It's all
              about the tons of info out there on the Internet (and let's be
              real it's AI these days). But do I learn the things as well?
              Absolutely! Sometimes I began my projects with no prior knowledge,
              but as I progressed, I learned all the important lessons I needed
              to know along the way! I connect deeply with Jürgen Klopp's quote:
              <b>
                {" "}
                "Success is not about the destination; it's about the journey
                and what you learn along the way."
              </b>{" "}
              This mindset motivates me to take action without overthinking. I
              used to wait for everything to be perfect, but I've realized that
              striving for perfection held me back. Now, I'm focused on moving
              forward. I focus on winning but more importantly, I focus on the
              journey. I can't win always, but when I face failure, I do so
              beautifully (a lesson inspired by Jürgen Klopp)
            </p>
            <div className="flex space-x-8 animate-fade-in-delay-2">
              <button
                onClick={() => onViewWork(3)}
                className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                VIEW WORK
              </button>
              <button
                onClick={() => onViewWork(5)}
                className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                CONTACT ME
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

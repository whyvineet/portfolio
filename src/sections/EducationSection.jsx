import React from "react";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative h-screen flex items-center bg-black text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-light tracking-wider mb-12 text-center lg:text-left">
          Education
        </h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="border border-white/20 p-8 rounded-lg bg-black/30 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
              <img
                className="w-24 h-24 rounded-full object-cover shadow-lg"
                src="/assets/education/galgotias-university.jpg"
                alt="Galgotias University"
              />
              <div className="w-full">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                  <h3 className="text-2xl text-center lg:text-left font-bold">
                    Bachelor of Technology
                  </h3>
                  <h3 className="text-2xl font-light text-gray-400 mt-2 lg:mt-0">
                    2023 - Present
                  </h3>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                  <h4 className="text-xl text-center lg:text-left mt-2">
                    Computer Science & Engineering (<i>Specialization in AI</i>)
                  </h4>
                  <h4 className="text-xl mt-2 lg:mt-0">CGPA: 8.63</h4>
                </div>
                <p className="text-gray-400 text-lg text-center lg:text-left mt-2">
                  Galgotias University, Greater Noida
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-400 mt-6 leading-relaxed">
              I am currently pursuing my Bachelor's degree at Galgotias
              University, where I have successfully completed several major
              courses. These include Programming for Problem-Solving,
              Object-Oriented Programming, Engineering Mathematics, Discrete
              Mathematics, Data Structures using Java, Java Programming,
              Database Management Systems, and Probability and Statistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

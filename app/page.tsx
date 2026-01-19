"use client";

import Image from "next/image";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    const sections = Array.from({ length: 14 }, (_, i) => i);
    sections.forEach((section, index) => {
      setTimeout(() => {
        setVisibleSections((prev) => [...prev, section]);
      }, index * 200);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className={`transition-all duration-700 ${
          visibleSections.includes(0) ? "blur-0 opacity-100" : "blur-md opacity-0"
        }`}>
        <NavBar />
      </div>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 pb-24 sm:pb-32">
        {/* HERO SECTION */}
        <section className={`space-y-6 transition-all duration-700 ${
            visibleSections.includes(1) ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Hi, I&apos;m Vineet Kumar
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I build backend systems and LLM-powered software.
              </p>
            </div>

            <div className="shrink-0">
              <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Vineet Kumar"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <hr className={`border-gray-300 dark:border-gray-700 transition-all duration-700 ${
            visibleSections.includes(2) ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`} />

        {/* ABOUT SECTION */}
        <section className={`space-y-6 transition-all duration-700 ${
            visibleSections.includes(3) ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`}>
          <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
          <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              My work focuses on building scalable backend architectures and
              integrating LLM-based pipelines into production-ready systems. I
              care about clear system design, maintainable code, and solving
              problems beyond prototypes.
            </p>
          </div>
        </section>
        <hr className={`border-gray-300 dark:border-gray-700 transition-all duration-700 ${
            visibleSections.includes(4) ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`} />

        {/* WORK EXPERIENCE SECTION */}
        <section className={`space-y-6 transition-all duration-700 ${
            visibleSections.includes(5) ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`}>
          <h2 className="text-2xl sm:text-3xl font-bold">Work Experience</h2>

          <div className="flex gap-4">
            <div className="shrink-0">
              <Image
                src="/iitm.png"
                alt="IIT Madras"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    IIT Madras (NPTEL)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">AI/ML Intern</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">July 2025 - Sept 2025</p>
                  <p className="text-gray-600 dark:text-gray-300 sm:text-right">Chennai, India</p>
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-3 space-y-2">
                <p>
                  Worked on a multi-agent AI system, contributing to backend
                  integration and agent workflow design
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0">
              <Image
                src="/hcl-guvi.jpeg"
                alt="HCL GUVI"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">HCL GUVI</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Student Mentor (National Hackathon)
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-300">Aug 2025 - Aug 2025</p>
                  <p className="text-gray-600 dark:text-gray-300 sm:text-right">Remote</p>
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-300 mt-3 space-y-2">
                <p>
                  Mentored 30+ teams in a national-level hackathon, guiding
                  problem framing and solution execution
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className={`border-gray-300 dark:border-gray-700 transition-all duration-700 ${
            visibleSections.includes(6) ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`} />

        {/* OPEN SOURCE SECTION */}
        <section className={`space-y-6 transition-all duration-700 ${
            visibleSections.includes(7) ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`}>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Open Source Contributions
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Actively contribute to Python-based open-source projects, with
            experience working on widely used libraries such as:
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="https://github.com/pandas-dev/pandas/pulls?q=is%3Apr+author%3Awhyvineet+is%3Aclosed"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              pandas
            </a>
            <a
              href="https://github.com/numpy/numpy/pulls?q=is%3Apr+author%3Awhyvineet+is%3Aclosed"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              numpy
            </a>
            <a
              href="https://github.com/pgmpy/pgmpy/pulls?q=is%3Apr+author%3Awhyvineet+is%3Aclosed"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              pgmpy
            </a>
            <a
              href="https://github.com/conda-forge/datascience-feedstock/pulls?q=is%3Apr+author%3Awhyvineet+is%3Aclosed"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              datascience
            </a>
          </div>
        </section>
        <hr className={`border-gray-300 dark:border-gray-700 transition-all duration-700 ${
            visibleSections.includes(8) ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`} />

        {/* EDUCATION SECTION */}
        <section className={`space-y-6 transition-all duration-700 ${
            visibleSections.includes(9) ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`}>
          <h2 className="text-2xl sm:text-3xl font-bold">Education</h2>

          <div className="flex gap-4">
            <div className="shrink-0">
              <Image
                src="/galgotias-university.png"
                alt="Galgotias University"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    Galgotias University
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Bachelor of Technology in Computer Science
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300">2023 - 2027</p>
              </div>
            </div>
          </div>
        </section>
        <hr className={`border-gray-300 dark:border-gray-700 transition-all duration-700 ${
            visibleSections.includes(10) ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`} />

        {/* SKILLS SECTION */}
        <section className={`space-y-6 transition-all duration-700 ${
            visibleSections.includes(11) ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`}>
          <h2 className="text-2xl sm:text-3xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm">
              Python
            </span>
            <span className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm">
              FastAPI
            </span>
            <span className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm">
              LLMs
            </span>
            <span className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm">
              RAG
            </span>
            <span className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm">
              LangChain
            </span>
            <span className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm">
              LangGraph
            </span>
            <span className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm">
              PostgreSQL
            </span>
            <span className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm">
              Vector Databases
            </span>
            <span className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm">
              Docker
            </span>
            <span className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm">
              Google Cloud Platform
            </span>
          </div>
        </section>
        <hr className={`border-gray-300 dark:border-gray-700 transition-all duration-700 ${
            visibleSections.includes(12) ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`} />

        {/* CONTACT SECTION */}
        <section className={`space-y-6 text-center transition-all duration-700 ${
            visibleSections.includes(13) ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`}>
          <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            Reach out via{" "}
            <a
              href="https://linkedin.com/in/whyvineet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              href="https://twitter.com/whyvineet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Twitter
            </a>
            , or{" "}
            <a
              href="mailto:whyvineet@outlook.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Email
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

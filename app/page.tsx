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
      }, index * 90);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar
        className={`transition-all duration-500 ease-out ${
          visibleSections.includes(0)
            ? "blur-0 opacity-100 translate-y-0"
            : "blur-md opacity-0 -translate-y-2.5"
        }`}
      />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 pb-24 sm:pb-32">
        {/* HERO SECTION */}
        <section className={`space-y-6 transition-all duration-500 ease-out ${
            visibleSections.includes(1)
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-md opacity-0 -translate-y-2.5"
          }`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Hey, I&apos;m Vineet!
              </h1>
              <p className="text-lg text-content">
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
        <hr className={`border-content transition-all duration-500 ease-out ${
            visibleSections.includes(2)
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-md opacity-0 -translate-y-2.5"
          }`} />

        {/* ABOUT SECTION */}
        <section className={`space-y-6 transition-all duration-500 ease-out ${
            visibleSections.includes(3)
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-md opacity-0 -translate-y-2.5"
          }`}>
          <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
          <div className="space-y-4 text-base sm:text-lg text-content leading-relaxed">
            <p>
              My work focuses on building scalable backend architectures and
              integrating LLM-based pipelines into production-ready systems. I
              care about clear system design, maintainable code, and solving
              problems beyond prototypes.
            </p>
          </div>
        </section>
        <hr className={`border-content transition-all duration-500 ease-out ${
            visibleSections.includes(4)
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-md opacity-0 -translate-y-2.5"
          }`} />

        {/* WORK EXPERIENCE SECTION */}
        <section className={`space-y-6 transition-all duration-500 ease-out ${
            visibleSections.includes(5)
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-md opacity-0 -translate-y-2.5"
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
                  <p className="text-content">AI/ML Intern</p>
                </div>
                <div>
                  <p className="text-content">July 2025 - Sept 2025</p>
                  <p className="text-content sm:text-right">Chennai, India</p>
                </div>
              </div>
              <div className="text-content mt-3 space-y-2">
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
                  <p className="text-content">
                    Student Mentor (National Hackathon)
                  </p>
                </div>
                <div>
                  <p className="text-content">Aug 2025 - Aug 2025</p>
                  <p className="text-content sm:text-right">Remote</p>
                </div>
              </div>
              <div className="text-content mt-3 space-y-2">
                <p>
                  Mentored 30+ teams in a national-level hackathon, guiding
                  problem framing and solution execution
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className={`border-gray-300 dark:border-gray-700 transition-all duration-500 ease-out ${
            visibleSections.includes(6)
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-md opacity-0 -translate-y-2.5"
          }`} />

        {/* OPEN SOURCE SECTION */}
        <section className={`space-y-6 transition-all duration-500 ease-out ${
            visibleSections.includes(7)
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-md opacity-0 -translate-y-2.5"
          }`}>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Open Source Contributions
          </h2>
          <div className="space-y-4">
            <p className="text-content leading-relaxed">
              I actively contribute to Python-based open-source projects, focusing on 
              improving code quality, fixing bugs, and adding new features.
            </p>
            
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Featured contributions:
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
            </div>

            <div className="pt-4 flex items-center gap-3">
              <p className="text-sm text-content">
                Support my open source work:
              </p>
              <a
                href="https://github.com/sponsors/whyvineet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                Sponsor
              </a>
            </div>
          </div>
        </section>
        <hr className={`border-gray-300 dark:border-gray-700 transition-all duration-500 ease-out ${
            visibleSections.includes(8)
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-md opacity-0 -translate-y-2.5"
          }`} />

        {/* EDUCATION SECTION */}
        <section className={`space-y-6 transition-all duration-500 ease-out ${
            visibleSections.includes(9)
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-md opacity-0 -translate-y-2.5"
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
                  <p className="text-content">
                    Bachelor of Technology in Computer Science
                  </p>
                </div>
                <p className="text-content">2023 - 2027</p>
              </div>
            </div>
          </div>
        </section>
        <hr className={`border-gray-300 dark:border-gray-700 transition-all duration-500 ease-out ${
            visibleSections.includes(10)
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-md opacity-0 -translate-y-2.5"
          }`} />

        {/* SKILLS SECTION */}
        <section className={`space-y-6 transition-all duration-500 ease-out ${
            visibleSections.includes(11)
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-md opacity-0 -translate-y-2.5"
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
        <hr className={`border-gray-300 dark:border-gray-700 transition-all duration-500 ease-out ${
            visibleSections.includes(12)
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-md opacity-0 -translate-y-2.5"
          }`} />

        {/* CONTACT SECTION */}
        <section className={`space-y-6 text-center transition-all duration-500 ease-out ${
            visibleSections.includes(13)
              ? "blur-0 opacity-100 translate-y-0"
              : "blur-md opacity-0 -translate-y-2.5"
          }`}>
          <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
          <p className="text-base sm:text-lg text-content">
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

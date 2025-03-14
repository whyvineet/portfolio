import React, { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import MobileBlockScreen from "./components/MobileBlockScreen";
import SectionNavigation from "./components/SectionNavigation";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import portfolioData from "./data/portfolioData";

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORM_ID);

  const sections = [
    { id: "hero", title: "Home" },
    { id: "education", title: "Education" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "skills", title: "Skills" },
    { id: "contact", title: "Contact" },
  ];

  // Scroll handling
  useEffect(() => {
    const sectionElements = document.querySelectorAll("section");
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = Array.from(sectionElements).indexOf(
              entry.target
            );
            setCurrentSection(sectionIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionElements.forEach((section) => navObserver.observe(section));
    return () =>
      sectionElements.forEach((section) => navObserver.unobserve(section));
  }, []);

  // Section navigation handler
  const handleSectionChange = (direction) => {
    if (isNavigating) return;
    setIsNavigating(true);

    const sections = document.querySelectorAll("section");
    let newSection = currentSection;

    if (direction === "next" && currentSection < sections.length - 1) {
      newSection++;
    } else if (direction === "prev" && currentSection > 0) {
      newSection--;
    } else if (typeof direction === "number") {
      newSection = direction;
    }

    sections[newSection].scrollIntoView({ behavior: "smooth" });
    setCurrentSection(newSection);

    setTimeout(() => {
      setIsNavigating(false);
    }, 1000);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <MobileBlockScreen />;
  }

  return (
    <div className="relative min-h-screen text-white">
      <SectionNavigation
        sections={sections}
        currentSection={currentSection}
        totalSections={sections.length}
        onSectionChange={handleSectionChange}
      />

      <HeroSection />
      <EducationSection />
      <ExperienceSection data={portfolioData.experience[0]} />
      <ProjectsSection projects={portfolioData.projects} />
      <SkillsSection skills={portfolioData.skills} />
      <ContactSection state={state} handleSubmit={handleSubmit} />

      <Footer />
    </div>
  );
};

export default Portfolio;

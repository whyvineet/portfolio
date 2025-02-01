import React from "react";
import Signature from "../components/Signature";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center bg-[url('/assets/profile/background.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-black/20" />
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
        <Signature />
      </div>
    </section>
  );
};

export default HeroSection;

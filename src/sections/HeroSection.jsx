import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeQuote, setActiveQuote] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    const quotes = [
        "My code does nothing - perfectly!",
        "I get things done, no matter what.",
        "Success is the journey, not the goal.",
        "I fail beautifully."
    ];

    useEffect(() => {
        setIsVisible(true);

        let currentIndex = 0;
        let currentQuote = quotes[activeQuote];

        const typingInterval = setInterval(() => {
            if (isTyping) {
                if (currentIndex <= currentQuote.length) {
                    setDisplayedText(currentQuote.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    setIsTyping(false);
                    setTimeout(() => {
                        setIsTyping(true);
                        currentIndex = 0;
                        setActiveQuote((prev) => (prev + 1) % quotes.length);
                    }, 2000);
                }
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, [activeQuote, isTyping]);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col bg-[url('/assets/profile/background.webp')] bg-cover bg-fixed bg-center"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/70 to-black/40" />

            {/* Hero content */}
            <div className="relative flex-1 flex flex-col justify-center px-6 pt-20">
                <div className="flex flex-row items-center max-w-6xl mx-auto w-full">
                    <motion.div
                        className="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-xl border border-white shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src="/assets/profile/profile-photo.jpg"
                            alt="Vineet Kumar"
                            className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                        />

                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white" />
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white" />
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white" />
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white" />
                    </motion.div>

                    <div className="ml-8 md:ml-16 flex flex-col items-start">
                        <motion.h1
                            className="text-5xl md:text-7xl font-light tracking-widest mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            VINEET KUMAR
                        </motion.h1>

                        <motion.div
                            className="h-0.5 bg-white mb-6 w-24"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: isVisible ? '6rem' : 0, opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        />

                        <motion.div
                            className="relative h-16 md:h-24"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            <p className="text-xl md:text-2xl italic font-light">
                                <span className="mr-1">"</span>
                                <motion.span>{displayedText}</motion.span>
                                <span className="inline-block w-1 h-6 bg-white animate-pulse ml-1"></span>
                                <span>"</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

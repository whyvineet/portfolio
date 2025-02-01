import React from "react";
import { Github, LinkedinIcon, TwitterIcon, InstagramIcon } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/whyvineet",
      hoverColor: "hover:text-[#6e5494]",
    },
    {
      icon: LinkedinIcon,
      url: "https://linkedin.com/in/whyvineet",
      hoverColor: "hover:text-[#0077b5]",
    },
    {
      icon: TwitterIcon,
      url: "https://twitter.com/whyvineet",
      hoverColor: "hover:text-[#1DA1F2]",
    },
    {
      icon: InstagramIcon,
      url: "https://instagram.com/whyvineet",
      hoverColor: "hover:text-[#E4405F]",
    },
  ];

  return (
    <footer className="relative py-6 bg-black text-center">
      <p className="text-gray-400">
        Made with <span className="text-white">🤍</span> by Vineet Kumar
      </p>
      <div className="flex justify-center items-center space-x-3 mt-4">
        {socialLinks.map(({ icon: Icon, url, hoverColor }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-3 transition-all duration-300 ${hoverColor}`}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Navigation = ({ sections, onMenuItemClick, currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemSelect = (index) => {
    onMenuItemClick(index);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isMenuOpen ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-end items-center">
          <button
            onClick={handleMenuToggle}
            className="p-2 hover:text-gray-400 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <MobileMenu
          sections={sections}
          onMenuItemClick={handleMenuItemSelect}
        />
      )}
    </>
  );
};

export default Navigation;

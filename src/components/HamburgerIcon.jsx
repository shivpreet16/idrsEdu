import React from "react";

const HamburgerIcon = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className="w-8 h-8 flex flex-col justify-between items-center cursor-pointer md:hidden"
      onClick={toggleMenu}
    >
      <span
        className={`h-1 w-full bg-secondary rounded-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-3" : ""
        }`}
      />
      <span
        className={`h-1 w-full bg-secondary rounded-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0 translate-x-14" : ""
        }`}
      />
      <span
        className={`h-1 w-full bg-secondary rounded-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-4" : ""
        }`}
      />
    </div>
  );
};

export default HamburgerIcon;

import React, { useState } from "react";
import HamburgerIcon from "./HamburgerIcon"; // Import the new component
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const navbarElements = [
    { name: "Home", dropdown: false },
    {
      name: "About Us",
      dropdown: true,
      dropdownItems: [
        "Academics",
        "Achievements",
        "Activities",
        "Administration",
        "Infrastructure",
      ],
    },
    { name: "Gallery", dropdown: false },
    { name: "Admissions", dropdown: false },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredElementIndex, setHoveredElementIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setIsDropdownOpen(true);
    setHoveredElementIndex(index);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setHoveredElementIndex(null);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="w-screen bg-primary text-secondary h-20 px-4 md:px-32 flex items-center justify-between relative z-10">
      <div className="flex items-center gap-10">
        <img
          src="/logo.png" // Path to the logo image in the public folder
          alt="Logo"
          className="h-12 w-auto md:h-16" // Responsive sizing
        />
        <div className="uppercase text-xl tracking-[3px] font-bold md:text-3xl md:tracking-[5px] pointer-events-none">IDRS Education</div>
      </div>

      {/* Hamburger Icon for mobile */}
      <div className="mr-0">
        <HamburgerIcon
          isOpen={isMobileMenuOpen}
          toggleMenu={toggleMobileMenu}
        />
      </div>

      {/* Menu for Desktop and Mobile */}
      <ul
        className={`flex flex-col md:flex-row md:items-center md:gap-24 md:static absolute left-0 w-full md:w-auto bg-primary text-secondary transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "top-20 opacity-100"
            : "-top-96 opacity-0 md:opacity-100"
        }`}
      >
        {navbarElements.map((element, index) => (
          <li
            key={index}
            className={`relative border-b-2 border-t-2 border-transparent hover:border-secondary cursor-pointer py-4 md:py-1 px-6 md:px-0`}
            onMouseEnter={() => {
              if (element.dropdown && !isMobileMenuOpen)
                handleMouseEnter(index);
            }}
            onMouseLeave={() => {
              if (element.dropdown && !isMobileMenuOpen) handleMouseLeave();
            }}
          >
            {element.name}
            {element.dropdown && (
              <div className="hidden md:inline">
                <KeyboardArrowDownIcon className="inline ml-1" />
              </div>
            )}

            {/* Render dropdown for desktop */}
            {element.dropdown && (
              <ul
                className={`absolute hidden md:block left-0 top-full mt-2 bg-primary text-secondary shadow-lg p-4 space-y-2 transform transition-all duration-300 ease-in-out origin-top text-md ${
                  isDropdownOpen && hoveredElementIndex === index
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0"
                }`}
              >
                {element.dropdownItems.map((item, subIndex) => (
                  <li
                    key={subIndex}
                    className="hover:text-white relative z-10 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

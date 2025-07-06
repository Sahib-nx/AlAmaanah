import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111827] bg-opacity-95 backdrop-blur-md border-b border-gray-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white font-bold text-xl font-['Poppins']">
            <span className="text-[#F59E0B]">AL</span>Amaanah
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-[#F59E0B] transition-colors duration-300 font-['Inter']"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#F59E0B] transition-colors duration-300 font-['Inter']"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#F59E0B] transition-colors duration-300 font-['Inter']"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-[#F59E0B] transition-colors duration-300 font-['Inter']"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#F59E0B] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="pt-4 pb-2 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white hover:text-[#F59E0B] transition-colors duration-300 font-['Inter']"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-[#F59E0B] transition-colors duration-300 font-['Inter']"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-white hover:text-[#F59E0B] transition-colors duration-300 font-['Inter']"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white hover:text-[#F59E0B] transition-colors duration-300 font-['Inter']"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Home className="w-8 h-8 text-blue-600" />
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Apartments Horvat</h1>
      </div>
      
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop navigation */}
      <nav className="hidden md:flex gap-6">
        <button 
          onClick={() => scrollToSection('home')} 
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')} 
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Contact
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 left-0 mt-2 bg-white shadow-lg rounded-lg md:hidden">
          <div className="flex flex-col p-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
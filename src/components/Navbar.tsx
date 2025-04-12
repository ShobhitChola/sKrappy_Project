
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 fixed w-full top-0 z-50 ">
      <div className="container rounded-full">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <div className="h-10 w-10 rounded-full bg-positiveGreen flex items-center justify-center">
              <span className="font-bold text-xl text-black"></span>
            </div> */}
            <span className="font-bold text-2xl">sKrapy</span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="block md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          
          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li><a href="#about" className="hover:text-positiveGreen transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-positiveGreen transition-colors">Services</a></li>
            <li><a href="#work" className="hover:text-positiveGreen transition-colors">Price List</a></li>
            <li><a href="#blog" className="hover:text-positiveGreen transition-colors">Why Us?</a></li>
            <li><a href="#contact" className="hover:text-positiveGreen transition-colors">Contact Us</a></li>
          </ul>
          
          <Button className="hidden md:flex bg-positiveBlack text-white rounded-full hover:bg-black/80 font-thin">
            Sell your scrap
          </Button>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-20 left-0 right-0 bg-white z-50 shadow-lg md:hidden p-4">
              <ul className="flex flex-col gap-4">
                <li><a href="#about" className="block py-2 hover:text-positiveGreen transition-colors">About</a></li>
                <li><a href="#services" className="block py-2 hover:text-positiveGreen transition-colors">Services</a></li>
                <li><a href="#work" className="block py-2 hover:text-positiveGreen transition-colors">Our Work</a></li>
                <li><a href="#blog" className="block py-2 hover:text-positiveGreen transition-colors">Blog</a></li>
                <li><a href="#contact" className="block py-2 hover:text-positiveGreen transition-colors">Contact</a></li>
                <li>
                  <Button className="w-full bg-positiveBlack text-white rounded-full hover:bg-black/80">
                    Get in Touch
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-positiveBlack text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/* <div className="h-10 w-10 rounded-full bg-positiveGreen flex items-center justify-center">
                <span className="font-bold text-xl text-black">P</span>
              </div> */}
              <span className="font-bold text-2xl text-white">sKrapy</span>
            </div>
            <p className="text-gray-300 mb-6">
            sKrapy is a tech-driven platform designed to organize India's scrap collection ecosystem. It connects households, corporates, and industries with verified scrap vendors, offering a seamless and transparent process for waste disposal while promoting sustainability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-positiveGreen hover:border-positiveGreen hover:text-black transition-all">
                <span>FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-positiveGreen hover:border-positiveGreen hover:text-black transition-all">
                <span>TW</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-positiveGreen hover:border-positiveGreen hover:text-black transition-all">
                <span>IG</span>
              </a>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-positiveGreen transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-positiveGreen transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-positiveGreen transition-colors">Price List</a></li>
              <li><a href="#blog" className="hover:text-positiveGreen transition-colors">Why Us?</a></li>
              <li><a href="#contact" className="hover:text-positiveGreen transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Services Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-positiveGreen transition-colors">Scrap Collection</a></li>
              <li><a href="#" className="hover:text-positiveGreen transition-colors">Paper Shredding</a></li>
              <li><a href="#" className="hover:text-positiveGreen transition-colors">Vehicle Scraping</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <span className="block text-gray-300">Email</span>
                <a href="mailto:hello@positivus.com" className="hover:text-positiveGreen transition-colors">skrapy@gmail.com</a>
              </li>
              <li>
                <span className="block text-gray-300">Phone</span>
                <a href="tel:+5551234567" className="hover:text-positiveGreen transition-colors">+91 12345 67899</a>
              </li>
              <li>
                <span className="block text-gray-300">Address</span>
                <address className="not-italic">
                  123 Punjabi Bagh <br />New Delhi,
                  India
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center md:flex md:justify-between">
          <p className="mb-4 md:mb-0">&copy; 2025 sKrapy. All rights reserved.</p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-positiveGreen transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-positiveGreen transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

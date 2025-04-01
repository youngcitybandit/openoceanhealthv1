
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "Employers", href: "/employers" },
    { title: "Patients", href: "/patients" },
    { title: "Brokers", href: "/brokers" },
    { title: "Providers", href: "/providers" },
    { title: "Locations", href: "/locations" },
    { title: "Resources", href: "/resources" },
    { title: "About Us", href: "/about" },
  ];

  return (
    <nav className="w-full py-4 bg-white/90 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-gray-700 hover:text-brand-blue transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
          <Link to="/quote">
            <Button className="cta-gradient hover:opacity-90 transition-opacity">Get a Quote</Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-gray-700 hover:text-brand-blue transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <Link to="/quote">
              <Button className="cta-gradient hover:opacity-90 transition-opacity w-full">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

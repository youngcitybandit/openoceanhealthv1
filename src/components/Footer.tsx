
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    "Company": ["About Us", "Careers", "Press", "Contact"],
    "Solutions": ["Employers", "Patients", "Brokers", "Providers"],
    "Resources": ["Blog", "Guides", "Webinars", "Help Center"],
    "Legal": ["Privacy Policy", "Terms of Service", "Accessibility"]
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <Link to="/" className="flex items-center hover:opacity-90 transition-opacity mb-2">
                <img 
                  src="/lovable-uploads/97561c21-9424-4d58-89a0-c4b32be19657.png" 
                  alt="Company Logo" 
                  className="h-8 invert brightness-0"
                />
              </Link>
              &copy; {currentYear} OpenOceanHealth. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

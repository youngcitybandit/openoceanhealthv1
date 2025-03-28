
import React from 'react';
import Logo from './Logo';

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
            <div className="mb-4 md:mb-0">
              <a href="/" className="hover:opacity-90 transition-opacity">
                <Logo variant="white" />
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} PHS. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

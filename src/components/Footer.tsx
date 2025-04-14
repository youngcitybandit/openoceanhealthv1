import React from 'react';
import { Linkedin, ExternalLink, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    "Company": ["About Us", "Careers", "Press", "Contact"],
    "Solutions": ["Employers", "Patients", "Brokers", "Providers"],
    "Resources": ["Blog", "Guides", "Webinars", "Help Center"],
    "Legal": ["Privacy Policy", "Terms of Service", "Accessibility"]
  };
  
  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={20} />, 
      url: "https://www.linkedin.com/company/openoceanhealth/posts/?feedView=all" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={20} />, 
      url: "#" 
    },
    { 
      name: "Facebook", 
      icon: <Facebook size={20} />, 
      url: "#" 
    },
    { 
      name: "TikTok", 
      icon: (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
          <path d="M16 8v8"/>
          <path d="M12 16v-8"/>
          <path d="M20 12V8a4 4 0 0 0-4-4h-1"/>
        </svg>
      ), 
      url: "#" 
    }
  ];
  
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
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                  {social.name === "LinkedIn" && (
                    <>
                      <span className="hidden sm:inline">Follow us</span>
                      <ExternalLink size={14} />
                    </>
                  )}
                </a>
              ))}
            </div>
            
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} OpenOceanHealth. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

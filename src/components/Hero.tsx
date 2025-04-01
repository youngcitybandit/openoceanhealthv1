
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Blue accent circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-blue opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-teal opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight gradient-text">
            Join the Future of Healthcare
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Together, we're building a smarter, more sustainable healthcare model—powered by innovation, designed for impact, and built to empower SMB employers, employees and healthcare providers, alike.
            <br /><br />
            The future of care starts now. Connect with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button className="cta-gradient text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg rounded-full shadow-lg">
                Get a Quote
              </Button>
            </Link>
            <Button className="bg-white border-2 border-brand-blue text-brand-blue hover:bg-blue-50 hover:text-brand-teal transition-colors px-8 py-6 text-lg rounded-full shadow-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

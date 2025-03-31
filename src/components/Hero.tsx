
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Blue accent circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-blue opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-teal opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight gradient-text">
            Payroll. HR. Healthcare. <span className="gradient-text">Savings.</span> Simplified.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Smarter staffing for small businesses. Comprehensive administrative support, high-quality healthcare coverage options, tax benefits and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="cta-gradient text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg rounded-full shadow-lg">
              Get Started Now
            </Button>
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


import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="hero-gradient pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight gradient-text">
            Payroll. HR. Healthcare. Savings. Simplified.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Smarter staffing for small businesses. Comprehensive administrative support, high-quality healthcare coverage options, tax benefits and more.
          </p>
          <Button className="cta-gradient text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg rounded-full shadow-lg">
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

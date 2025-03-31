
import React from 'react';
import USMap from './USMap';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LocationsSection = () => {
  return (
    <section className="py-16 bg-slate-50 relative">
      {/* Teal accent decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-teal"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Where We Operate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide our services across multiple states, with plans for nationwide expansion.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-8">
          <USMap />
        </div>

        <div className="text-center mt-8">
          <Link to="/locations">
            <Button className="bg-white border-2 border-brand-blue text-brand-blue hover:bg-blue-50 hover:text-brand-teal transition-colors px-6 py-2 rounded-full shadow-md">
              View All Locations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;

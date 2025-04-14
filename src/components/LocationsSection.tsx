import React from 'react';
import FloridaMap from './FloridaMap';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LocationsSection = () => {
  return (
    <section id="locations" className="py-16 bg-slate-50 relative">
      {/* Teal accent decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-teal"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Serving Florida</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive healthcare services across the state of Florida.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-8">
          <FloridaMap />
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;

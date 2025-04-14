
import React from 'react';
import Navigation from '@/components/Navigation';
import USMap from '@/components/USMap';
import Footer from '@/components/Footer';

const Locations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Locations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our nationwide network of healthcare services
            </p>
          </div>
          <USMap />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;

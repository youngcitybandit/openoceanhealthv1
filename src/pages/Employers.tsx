
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Employers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-r from-blue-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Empower your business with simplified operations
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Quality healthcare solutions that fit your budget and support your team's wellbeing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/providers/join">
                  <Button className="bg-white text-primary border border-primary hover:bg-gray-50 transition-colors px-8 py-6 text-lg">
                    Become a Provider
                  </Button>
                </Link>
                <Link to="/quote">
                  <Button className="cta-gradient text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content sections would go here */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Employer Solutions</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              This page is under construction. Please check back soon for more information about our employer solutions.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Employers;


import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-r from-orange-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Resources for small business success
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Access guides, templates, and expert advice to help your small business thrive.
              </p>
              <Link to="/quote">
                <Button className="cta-gradient text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Content sections would go here */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Resource Library</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              This page is under construction. Please check back soon for our resource library.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;

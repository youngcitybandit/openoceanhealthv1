
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { UserRound } from 'lucide-react';

const Members = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-start">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Quality healthcare made simple for members
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Access high-quality healthcare benefits through your employer with our streamlined platform.
                </p>
                <Link to="/research">
                  <Button className="cta-gradient text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
              <Link to="/login" className="hidden md:block">
                <Button variant="outline" className="flex items-center gap-2 px-4 py-2">
                  <UserRound size={18} />
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Member Resources</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              This page is under construction. Please check back soon for more information about our member resources.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Members;

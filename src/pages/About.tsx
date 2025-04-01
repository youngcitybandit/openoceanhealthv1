
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-r from-teal-50 to-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                About Open Ocean Health
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join Us in Transforming Healthcare
                Together, we can build a sustainable, efficient, and effective healthcare model—one that empowers employers, employees, and providers alike through cutting-edge innovation.

                Let's reimagine what's possible. Contact us today.
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
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              This page is under construction. Please check back soon to learn more about our mission and team.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

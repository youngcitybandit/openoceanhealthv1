
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Quote = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 pb-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 gradient-text">Request a Quote</h1>
          <p className="text-lg mb-6">
            Please complete the form below to receive a customized healthcare quote for your business.
            Our team will review your information and get back to you with competitive options.
          </p>
          <p className="text-gray-600 mb-10">
            Need immediate assistance? Contact our team at (800) 123-4567.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;

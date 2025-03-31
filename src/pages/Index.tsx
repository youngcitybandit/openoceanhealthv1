
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import LocationsSection from '@/components/LocationsSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <LocationsSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

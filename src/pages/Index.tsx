
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import Benefits from '@/components/Benefits';
import ProvidersChooseUs from '@/components/ProvidersChooseUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <CTA />
        <Benefits />
        <ProvidersChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

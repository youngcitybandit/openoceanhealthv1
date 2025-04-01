
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Locations = () => {
  // List of all 50 US states in alphabetical order
  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", 
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", 
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", 
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", 
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", 
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", 
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Locations</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Select a state to see programs near you:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {states.map((state, index) => (
              <a 
                key={index} 
                href={`/locations/${state.toLowerCase().replace(/\s/g, '-')}`} 
                className="block p-3 bg-gray-50 hover:bg-brand-blue hover:text-white rounded transition-colors"
              >
                {state}
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;

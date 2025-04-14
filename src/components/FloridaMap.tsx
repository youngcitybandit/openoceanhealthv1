
import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
  { name: 'Miami', position: { top: '85%', left: '80%' } },
  { name: 'Orlando', position: { top: '45%', left: '75%' } },
  { name: 'Tampa', position: { top: '55%', left: '55%' } },
  { name: 'Jacksonville', position: { top: '15%', left: '75%' } },
  { name: 'Tallahassee', position: { top: '12%', left: '25%' } },
];

const FloridaMap = () => {
  return (
    <div className="relative w-full aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden border border-gray-200">
      {/* Florida map background */}
      <div 
        className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/44/Florida_relief_map.png')] 
        bg-contain bg-no-repeat bg-center"
      />

      {/* Location pins */}
      {locations.map((location, index) => (
        <div
          key={index}
          className="absolute"
          style={location.position}
        >
          <div className="relative group">
            <MapPin
              size={24}
              className="text-brand-blue hover:text-brand-teal transition-colors cursor-pointer"
            />
            
            {/* Location name tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 
              bg-white shadow-md rounded text-xs font-medium z-10 opacity-0 
              group-hover:opacity-100 transition-opacity duration-200">
              {location.name}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-white"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
    </div>
  );
};

export default FloridaMap;
